export const NAMECHEAP_XML_KEYS = {
  COMMON: {
    API_RESPONSE: 'ApiResponse',
    COMMAND_RESPONSE: 'CommandResponse',
  },

  DOMAIN_CHECK: {
    RESULT: 'DomainCheckResult',
    AVAILABLE: 'Available',
    DESCRIPTION: 'Description',
    ERROR_NO: 'ErrorNo',
  },

  DOMAIN_CREATE: {
    RESULT: 'DomainCreateResult',
    REGISTERED: 'Registered',
  },
} as const;