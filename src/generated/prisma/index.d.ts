
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Campaign
 * 
 */
export type Campaign = $Result.DefaultSelection<Prisma.$CampaignPayload>
/**
 * Model Team
 * 
 */
export type Team = $Result.DefaultSelection<Prisma.$TeamPayload>
/**
 * Model Archive
 * 
 */
export type Archive = $Result.DefaultSelection<Prisma.$ArchivePayload>
/**
 * Model Server
 * 
 */
export type Server = $Result.DefaultSelection<Prisma.$ServerPayload>
/**
 * Model InternalDomain
 * 
 */
export type InternalDomain = $Result.DefaultSelection<Prisma.$InternalDomainPayload>
/**
 * Model ExternalDomain
 * 
 */
export type ExternalDomain = $Result.DefaultSelection<Prisma.$ExternalDomainPayload>
/**
 * Model Domain
 * 
 */
export type Domain = $Result.DefaultSelection<Prisma.$DomainPayload>
/**
 * Model ForbiddenWord
 * 
 */
export type ForbiddenWord = $Result.DefaultSelection<Prisma.$ForbiddenWordPayload>
/**
 * Model NamecheapAccount
 * 
 */
export type NamecheapAccount = $Result.DefaultSelection<Prisma.$NamecheapAccountPayload>
/**
 * Model CloudflareAccount
 * 
 */
export type CloudflareAccount = $Result.DefaultSelection<Prisma.$CloudflareAccountPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Role: {
  ADMIN: 'ADMIN',
  USER: 'USER'
};

export type Role = (typeof Role)[keyof typeof Role]


export const DomainType: {
  INTERNAL: 'INTERNAL',
  EXTERNAL: 'EXTERNAL'
};

export type DomainType = (typeof DomainType)[keyof typeof DomainType]


export const DomainStatus: {
  BAN: 'BAN',
  FREEZE: 'FREEZE',
  DO_NOT_WORK: 'DO_NOT_WORK',
  REPLACEMENT: 'REPLACEMENT',
  ACTIVE: 'ACTIVE',
  FAILED: 'FAILED',
  QUEUE: 'QUEUE',
  INACTIVE: 'INACTIVE'
};

export type DomainStatus = (typeof DomainStatus)[keyof typeof DomainStatus]


export const DeploymentType: {
  FORGE: 'FORGE',
  SSH: 'SSH'
};

export type DeploymentType = (typeof DeploymentType)[keyof typeof DeploymentType]

}

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

export type DomainType = $Enums.DomainType

export const DomainType: typeof $Enums.DomainType

export type DomainStatus = $Enums.DomainStatus

export const DomainStatus: typeof $Enums.DomainStatus

export type DeploymentType = $Enums.DeploymentType

export const DeploymentType: typeof $Enums.DeploymentType

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient({
   *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
   * })
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.campaign`: Exposes CRUD operations for the **Campaign** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Campaigns
    * const campaigns = await prisma.campaign.findMany()
    * ```
    */
  get campaign(): Prisma.CampaignDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.team`: Exposes CRUD operations for the **Team** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Teams
    * const teams = await prisma.team.findMany()
    * ```
    */
  get team(): Prisma.TeamDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.archive`: Exposes CRUD operations for the **Archive** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Archives
    * const archives = await prisma.archive.findMany()
    * ```
    */
  get archive(): Prisma.ArchiveDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.server`: Exposes CRUD operations for the **Server** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Servers
    * const servers = await prisma.server.findMany()
    * ```
    */
  get server(): Prisma.ServerDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.internalDomain`: Exposes CRUD operations for the **InternalDomain** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more InternalDomains
    * const internalDomains = await prisma.internalDomain.findMany()
    * ```
    */
  get internalDomain(): Prisma.InternalDomainDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.externalDomain`: Exposes CRUD operations for the **ExternalDomain** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ExternalDomains
    * const externalDomains = await prisma.externalDomain.findMany()
    * ```
    */
  get externalDomain(): Prisma.ExternalDomainDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.domain`: Exposes CRUD operations for the **Domain** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Domains
    * const domains = await prisma.domain.findMany()
    * ```
    */
  get domain(): Prisma.DomainDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.forbiddenWord`: Exposes CRUD operations for the **ForbiddenWord** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ForbiddenWords
    * const forbiddenWords = await prisma.forbiddenWord.findMany()
    * ```
    */
  get forbiddenWord(): Prisma.ForbiddenWordDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.namecheapAccount`: Exposes CRUD operations for the **NamecheapAccount** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more NamecheapAccounts
    * const namecheapAccounts = await prisma.namecheapAccount.findMany()
    * ```
    */
  get namecheapAccount(): Prisma.NamecheapAccountDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.cloudflareAccount`: Exposes CRUD operations for the **CloudflareAccount** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CloudflareAccounts
    * const cloudflareAccounts = await prisma.cloudflareAccount.findMany()
    * ```
    */
  get cloudflareAccount(): Prisma.CloudflareAccountDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.7.0
   * Query Engine version: 75cbdc1eb7150937890ad5465d861175c6624711
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Campaign: 'Campaign',
    Team: 'Team',
    Archive: 'Archive',
    Server: 'Server',
    InternalDomain: 'InternalDomain',
    ExternalDomain: 'ExternalDomain',
    Domain: 'Domain',
    ForbiddenWord: 'ForbiddenWord',
    NamecheapAccount: 'NamecheapAccount',
    CloudflareAccount: 'CloudflareAccount'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "campaign" | "team" | "archive" | "server" | "internalDomain" | "externalDomain" | "domain" | "forbiddenWord" | "namecheapAccount" | "cloudflareAccount"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Campaign: {
        payload: Prisma.$CampaignPayload<ExtArgs>
        fields: Prisma.CampaignFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CampaignFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampaignPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CampaignFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampaignPayload>
          }
          findFirst: {
            args: Prisma.CampaignFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampaignPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CampaignFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampaignPayload>
          }
          findMany: {
            args: Prisma.CampaignFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampaignPayload>[]
          }
          create: {
            args: Prisma.CampaignCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampaignPayload>
          }
          createMany: {
            args: Prisma.CampaignCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CampaignCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampaignPayload>[]
          }
          delete: {
            args: Prisma.CampaignDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampaignPayload>
          }
          update: {
            args: Prisma.CampaignUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampaignPayload>
          }
          deleteMany: {
            args: Prisma.CampaignDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CampaignUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CampaignUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampaignPayload>[]
          }
          upsert: {
            args: Prisma.CampaignUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampaignPayload>
          }
          aggregate: {
            args: Prisma.CampaignAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCampaign>
          }
          groupBy: {
            args: Prisma.CampaignGroupByArgs<ExtArgs>
            result: $Utils.Optional<CampaignGroupByOutputType>[]
          }
          count: {
            args: Prisma.CampaignCountArgs<ExtArgs>
            result: $Utils.Optional<CampaignCountAggregateOutputType> | number
          }
        }
      }
      Team: {
        payload: Prisma.$TeamPayload<ExtArgs>
        fields: Prisma.TeamFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TeamFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TeamFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamPayload>
          }
          findFirst: {
            args: Prisma.TeamFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TeamFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamPayload>
          }
          findMany: {
            args: Prisma.TeamFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamPayload>[]
          }
          create: {
            args: Prisma.TeamCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamPayload>
          }
          createMany: {
            args: Prisma.TeamCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TeamCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamPayload>[]
          }
          delete: {
            args: Prisma.TeamDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamPayload>
          }
          update: {
            args: Prisma.TeamUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamPayload>
          }
          deleteMany: {
            args: Prisma.TeamDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TeamUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TeamUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamPayload>[]
          }
          upsert: {
            args: Prisma.TeamUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamPayload>
          }
          aggregate: {
            args: Prisma.TeamAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTeam>
          }
          groupBy: {
            args: Prisma.TeamGroupByArgs<ExtArgs>
            result: $Utils.Optional<TeamGroupByOutputType>[]
          }
          count: {
            args: Prisma.TeamCountArgs<ExtArgs>
            result: $Utils.Optional<TeamCountAggregateOutputType> | number
          }
        }
      }
      Archive: {
        payload: Prisma.$ArchivePayload<ExtArgs>
        fields: Prisma.ArchiveFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ArchiveFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArchivePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ArchiveFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArchivePayload>
          }
          findFirst: {
            args: Prisma.ArchiveFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArchivePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ArchiveFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArchivePayload>
          }
          findMany: {
            args: Prisma.ArchiveFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArchivePayload>[]
          }
          create: {
            args: Prisma.ArchiveCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArchivePayload>
          }
          createMany: {
            args: Prisma.ArchiveCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ArchiveCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArchivePayload>[]
          }
          delete: {
            args: Prisma.ArchiveDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArchivePayload>
          }
          update: {
            args: Prisma.ArchiveUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArchivePayload>
          }
          deleteMany: {
            args: Prisma.ArchiveDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ArchiveUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ArchiveUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArchivePayload>[]
          }
          upsert: {
            args: Prisma.ArchiveUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArchivePayload>
          }
          aggregate: {
            args: Prisma.ArchiveAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateArchive>
          }
          groupBy: {
            args: Prisma.ArchiveGroupByArgs<ExtArgs>
            result: $Utils.Optional<ArchiveGroupByOutputType>[]
          }
          count: {
            args: Prisma.ArchiveCountArgs<ExtArgs>
            result: $Utils.Optional<ArchiveCountAggregateOutputType> | number
          }
        }
      }
      Server: {
        payload: Prisma.$ServerPayload<ExtArgs>
        fields: Prisma.ServerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ServerFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ServerFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServerPayload>
          }
          findFirst: {
            args: Prisma.ServerFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ServerFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServerPayload>
          }
          findMany: {
            args: Prisma.ServerFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServerPayload>[]
          }
          create: {
            args: Prisma.ServerCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServerPayload>
          }
          createMany: {
            args: Prisma.ServerCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ServerCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServerPayload>[]
          }
          delete: {
            args: Prisma.ServerDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServerPayload>
          }
          update: {
            args: Prisma.ServerUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServerPayload>
          }
          deleteMany: {
            args: Prisma.ServerDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ServerUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ServerUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServerPayload>[]
          }
          upsert: {
            args: Prisma.ServerUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServerPayload>
          }
          aggregate: {
            args: Prisma.ServerAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateServer>
          }
          groupBy: {
            args: Prisma.ServerGroupByArgs<ExtArgs>
            result: $Utils.Optional<ServerGroupByOutputType>[]
          }
          count: {
            args: Prisma.ServerCountArgs<ExtArgs>
            result: $Utils.Optional<ServerCountAggregateOutputType> | number
          }
        }
      }
      InternalDomain: {
        payload: Prisma.$InternalDomainPayload<ExtArgs>
        fields: Prisma.InternalDomainFieldRefs
        operations: {
          findUnique: {
            args: Prisma.InternalDomainFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InternalDomainPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.InternalDomainFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InternalDomainPayload>
          }
          findFirst: {
            args: Prisma.InternalDomainFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InternalDomainPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.InternalDomainFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InternalDomainPayload>
          }
          findMany: {
            args: Prisma.InternalDomainFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InternalDomainPayload>[]
          }
          create: {
            args: Prisma.InternalDomainCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InternalDomainPayload>
          }
          createMany: {
            args: Prisma.InternalDomainCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.InternalDomainCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InternalDomainPayload>[]
          }
          delete: {
            args: Prisma.InternalDomainDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InternalDomainPayload>
          }
          update: {
            args: Prisma.InternalDomainUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InternalDomainPayload>
          }
          deleteMany: {
            args: Prisma.InternalDomainDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.InternalDomainUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.InternalDomainUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InternalDomainPayload>[]
          }
          upsert: {
            args: Prisma.InternalDomainUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InternalDomainPayload>
          }
          aggregate: {
            args: Prisma.InternalDomainAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateInternalDomain>
          }
          groupBy: {
            args: Prisma.InternalDomainGroupByArgs<ExtArgs>
            result: $Utils.Optional<InternalDomainGroupByOutputType>[]
          }
          count: {
            args: Prisma.InternalDomainCountArgs<ExtArgs>
            result: $Utils.Optional<InternalDomainCountAggregateOutputType> | number
          }
        }
      }
      ExternalDomain: {
        payload: Prisma.$ExternalDomainPayload<ExtArgs>
        fields: Prisma.ExternalDomainFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ExternalDomainFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExternalDomainPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ExternalDomainFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExternalDomainPayload>
          }
          findFirst: {
            args: Prisma.ExternalDomainFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExternalDomainPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ExternalDomainFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExternalDomainPayload>
          }
          findMany: {
            args: Prisma.ExternalDomainFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExternalDomainPayload>[]
          }
          create: {
            args: Prisma.ExternalDomainCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExternalDomainPayload>
          }
          createMany: {
            args: Prisma.ExternalDomainCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ExternalDomainCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExternalDomainPayload>[]
          }
          delete: {
            args: Prisma.ExternalDomainDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExternalDomainPayload>
          }
          update: {
            args: Prisma.ExternalDomainUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExternalDomainPayload>
          }
          deleteMany: {
            args: Prisma.ExternalDomainDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ExternalDomainUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ExternalDomainUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExternalDomainPayload>[]
          }
          upsert: {
            args: Prisma.ExternalDomainUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExternalDomainPayload>
          }
          aggregate: {
            args: Prisma.ExternalDomainAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateExternalDomain>
          }
          groupBy: {
            args: Prisma.ExternalDomainGroupByArgs<ExtArgs>
            result: $Utils.Optional<ExternalDomainGroupByOutputType>[]
          }
          count: {
            args: Prisma.ExternalDomainCountArgs<ExtArgs>
            result: $Utils.Optional<ExternalDomainCountAggregateOutputType> | number
          }
        }
      }
      Domain: {
        payload: Prisma.$DomainPayload<ExtArgs>
        fields: Prisma.DomainFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DomainFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DomainPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DomainFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DomainPayload>
          }
          findFirst: {
            args: Prisma.DomainFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DomainPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DomainFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DomainPayload>
          }
          findMany: {
            args: Prisma.DomainFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DomainPayload>[]
          }
          create: {
            args: Prisma.DomainCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DomainPayload>
          }
          createMany: {
            args: Prisma.DomainCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DomainCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DomainPayload>[]
          }
          delete: {
            args: Prisma.DomainDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DomainPayload>
          }
          update: {
            args: Prisma.DomainUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DomainPayload>
          }
          deleteMany: {
            args: Prisma.DomainDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DomainUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DomainUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DomainPayload>[]
          }
          upsert: {
            args: Prisma.DomainUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DomainPayload>
          }
          aggregate: {
            args: Prisma.DomainAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDomain>
          }
          groupBy: {
            args: Prisma.DomainGroupByArgs<ExtArgs>
            result: $Utils.Optional<DomainGroupByOutputType>[]
          }
          count: {
            args: Prisma.DomainCountArgs<ExtArgs>
            result: $Utils.Optional<DomainCountAggregateOutputType> | number
          }
        }
      }
      ForbiddenWord: {
        payload: Prisma.$ForbiddenWordPayload<ExtArgs>
        fields: Prisma.ForbiddenWordFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ForbiddenWordFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ForbiddenWordPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ForbiddenWordFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ForbiddenWordPayload>
          }
          findFirst: {
            args: Prisma.ForbiddenWordFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ForbiddenWordPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ForbiddenWordFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ForbiddenWordPayload>
          }
          findMany: {
            args: Prisma.ForbiddenWordFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ForbiddenWordPayload>[]
          }
          create: {
            args: Prisma.ForbiddenWordCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ForbiddenWordPayload>
          }
          createMany: {
            args: Prisma.ForbiddenWordCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ForbiddenWordCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ForbiddenWordPayload>[]
          }
          delete: {
            args: Prisma.ForbiddenWordDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ForbiddenWordPayload>
          }
          update: {
            args: Prisma.ForbiddenWordUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ForbiddenWordPayload>
          }
          deleteMany: {
            args: Prisma.ForbiddenWordDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ForbiddenWordUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ForbiddenWordUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ForbiddenWordPayload>[]
          }
          upsert: {
            args: Prisma.ForbiddenWordUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ForbiddenWordPayload>
          }
          aggregate: {
            args: Prisma.ForbiddenWordAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateForbiddenWord>
          }
          groupBy: {
            args: Prisma.ForbiddenWordGroupByArgs<ExtArgs>
            result: $Utils.Optional<ForbiddenWordGroupByOutputType>[]
          }
          count: {
            args: Prisma.ForbiddenWordCountArgs<ExtArgs>
            result: $Utils.Optional<ForbiddenWordCountAggregateOutputType> | number
          }
        }
      }
      NamecheapAccount: {
        payload: Prisma.$NamecheapAccountPayload<ExtArgs>
        fields: Prisma.NamecheapAccountFieldRefs
        operations: {
          findUnique: {
            args: Prisma.NamecheapAccountFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NamecheapAccountPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.NamecheapAccountFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NamecheapAccountPayload>
          }
          findFirst: {
            args: Prisma.NamecheapAccountFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NamecheapAccountPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.NamecheapAccountFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NamecheapAccountPayload>
          }
          findMany: {
            args: Prisma.NamecheapAccountFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NamecheapAccountPayload>[]
          }
          create: {
            args: Prisma.NamecheapAccountCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NamecheapAccountPayload>
          }
          createMany: {
            args: Prisma.NamecheapAccountCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.NamecheapAccountCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NamecheapAccountPayload>[]
          }
          delete: {
            args: Prisma.NamecheapAccountDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NamecheapAccountPayload>
          }
          update: {
            args: Prisma.NamecheapAccountUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NamecheapAccountPayload>
          }
          deleteMany: {
            args: Prisma.NamecheapAccountDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.NamecheapAccountUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.NamecheapAccountUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NamecheapAccountPayload>[]
          }
          upsert: {
            args: Prisma.NamecheapAccountUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NamecheapAccountPayload>
          }
          aggregate: {
            args: Prisma.NamecheapAccountAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNamecheapAccount>
          }
          groupBy: {
            args: Prisma.NamecheapAccountGroupByArgs<ExtArgs>
            result: $Utils.Optional<NamecheapAccountGroupByOutputType>[]
          }
          count: {
            args: Prisma.NamecheapAccountCountArgs<ExtArgs>
            result: $Utils.Optional<NamecheapAccountCountAggregateOutputType> | number
          }
        }
      }
      CloudflareAccount: {
        payload: Prisma.$CloudflareAccountPayload<ExtArgs>
        fields: Prisma.CloudflareAccountFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CloudflareAccountFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CloudflareAccountPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CloudflareAccountFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CloudflareAccountPayload>
          }
          findFirst: {
            args: Prisma.CloudflareAccountFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CloudflareAccountPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CloudflareAccountFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CloudflareAccountPayload>
          }
          findMany: {
            args: Prisma.CloudflareAccountFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CloudflareAccountPayload>[]
          }
          create: {
            args: Prisma.CloudflareAccountCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CloudflareAccountPayload>
          }
          createMany: {
            args: Prisma.CloudflareAccountCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CloudflareAccountCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CloudflareAccountPayload>[]
          }
          delete: {
            args: Prisma.CloudflareAccountDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CloudflareAccountPayload>
          }
          update: {
            args: Prisma.CloudflareAccountUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CloudflareAccountPayload>
          }
          deleteMany: {
            args: Prisma.CloudflareAccountDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CloudflareAccountUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CloudflareAccountUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CloudflareAccountPayload>[]
          }
          upsert: {
            args: Prisma.CloudflareAccountUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CloudflareAccountPayload>
          }
          aggregate: {
            args: Prisma.CloudflareAccountAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCloudflareAccount>
          }
          groupBy: {
            args: Prisma.CloudflareAccountGroupByArgs<ExtArgs>
            result: $Utils.Optional<CloudflareAccountGroupByOutputType>[]
          }
          count: {
            args: Prisma.CloudflareAccountCountArgs<ExtArgs>
            result: $Utils.Optional<CloudflareAccountCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    campaign?: CampaignOmit
    team?: TeamOmit
    archive?: ArchiveOmit
    server?: ServerOmit
    internalDomain?: InternalDomainOmit
    externalDomain?: ExternalDomainOmit
    domain?: DomainOmit
    forbiddenWord?: ForbiddenWordOmit
    namecheapAccount?: NamecheapAccountOmit
    cloudflareAccount?: CloudflareAccountOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    servers: number
    archives: number
    campaigns: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    servers?: boolean | UserCountOutputTypeCountServersArgs
    archives?: boolean | UserCountOutputTypeCountArchivesArgs
    campaigns?: boolean | UserCountOutputTypeCountCampaignsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountServersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ServerWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountArchivesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ArchiveWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCampaignsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CampaignWhereInput
  }


  /**
   * Count Type TeamCountOutputType
   */

  export type TeamCountOutputType = {
    members: number
  }

  export type TeamCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    members?: boolean | TeamCountOutputTypeCountMembersArgs
  }

  // Custom InputTypes
  /**
   * TeamCountOutputType without action
   */
  export type TeamCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamCountOutputType
     */
    select?: TeamCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TeamCountOutputType without action
   */
  export type TeamCountOutputTypeCountMembersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
  }


  /**
   * Count Type ServerCountOutputType
   */

  export type ServerCountOutputType = {
    domains: number
  }

  export type ServerCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    domains?: boolean | ServerCountOutputTypeCountDomainsArgs
  }

  // Custom InputTypes
  /**
   * ServerCountOutputType without action
   */
  export type ServerCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServerCountOutputType
     */
    select?: ServerCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ServerCountOutputType without action
   */
  export type ServerCountOutputTypeCountDomainsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DomainWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    tokenVersion: number | null
  }

  export type UserSumAggregateOutputType = {
    tokenVersion: number | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    name: string | null
    password: string | null
    role: $Enums.Role | null
    teamId: string | null
    telegramChatId: string | null
    telegramUserName: string | null
    token: string | null
    tokenVersion: number | null
    tokenExpiry: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    name: string | null
    password: string | null
    role: $Enums.Role | null
    teamId: string | null
    telegramChatId: string | null
    telegramUserName: string | null
    token: string | null
    tokenVersion: number | null
    tokenExpiry: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    password: number
    role: number
    teamId: number
    telegramChatId: number
    telegramUserName: number
    token: number
    tokenVersion: number
    tokenExpiry: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    tokenVersion?: true
  }

  export type UserSumAggregateInputType = {
    tokenVersion?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    password?: true
    role?: true
    teamId?: true
    telegramChatId?: true
    telegramUserName?: true
    token?: true
    tokenVersion?: true
    tokenExpiry?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    password?: true
    role?: true
    teamId?: true
    telegramChatId?: true
    telegramUserName?: true
    token?: true
    tokenVersion?: true
    tokenExpiry?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    password?: true
    role?: true
    teamId?: true
    telegramChatId?: true
    telegramUserName?: true
    token?: true
    tokenVersion?: true
    tokenExpiry?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    name: string
    password: string
    role: $Enums.Role
    teamId: string | null
    telegramChatId: string | null
    telegramUserName: string | null
    token: string | null
    tokenVersion: number
    tokenExpiry: Date | null
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    password?: boolean
    role?: boolean
    teamId?: boolean
    telegramChatId?: boolean
    telegramUserName?: boolean
    token?: boolean
    tokenVersion?: boolean
    tokenExpiry?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    team?: boolean | User$teamArgs<ExtArgs>
    servers?: boolean | User$serversArgs<ExtArgs>
    archives?: boolean | User$archivesArgs<ExtArgs>
    campaigns?: boolean | User$campaignsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    password?: boolean
    role?: boolean
    teamId?: boolean
    telegramChatId?: boolean
    telegramUserName?: boolean
    token?: boolean
    tokenVersion?: boolean
    tokenExpiry?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    team?: boolean | User$teamArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    password?: boolean
    role?: boolean
    teamId?: boolean
    telegramChatId?: boolean
    telegramUserName?: boolean
    token?: boolean
    tokenVersion?: boolean
    tokenExpiry?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    team?: boolean | User$teamArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    password?: boolean
    role?: boolean
    teamId?: boolean
    telegramChatId?: boolean
    telegramUserName?: boolean
    token?: boolean
    tokenVersion?: boolean
    tokenExpiry?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "password" | "role" | "teamId" | "telegramChatId" | "telegramUserName" | "token" | "tokenVersion" | "tokenExpiry" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    team?: boolean | User$teamArgs<ExtArgs>
    servers?: boolean | User$serversArgs<ExtArgs>
    archives?: boolean | User$archivesArgs<ExtArgs>
    campaigns?: boolean | User$campaignsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    team?: boolean | User$teamArgs<ExtArgs>
  }
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    team?: boolean | User$teamArgs<ExtArgs>
  }

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      team: Prisma.$TeamPayload<ExtArgs> | null
      servers: Prisma.$ServerPayload<ExtArgs>[]
      archives: Prisma.$ArchivePayload<ExtArgs>[]
      campaigns: Prisma.$CampaignPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      password: string
      role: $Enums.Role
      teamId: string | null
      telegramChatId: string | null
      telegramUserName: string | null
      token: string | null
      tokenVersion: number
      tokenExpiry: Date | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    team<T extends User$teamArgs<ExtArgs> = {}>(args?: Subset<T, User$teamArgs<ExtArgs>>): Prisma__TeamClient<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    servers<T extends User$serversArgs<ExtArgs> = {}>(args?: Subset<T, User$serversArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ServerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    archives<T extends User$archivesArgs<ExtArgs> = {}>(args?: Subset<T, User$archivesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ArchivePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    campaigns<T extends User$campaignsArgs<ExtArgs> = {}>(args?: Subset<T, User$campaignsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CampaignPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'Role'>
    readonly teamId: FieldRef<"User", 'String'>
    readonly telegramChatId: FieldRef<"User", 'String'>
    readonly telegramUserName: FieldRef<"User", 'String'>
    readonly token: FieldRef<"User", 'String'>
    readonly tokenVersion: FieldRef<"User", 'Int'>
    readonly tokenExpiry: FieldRef<"User", 'DateTime'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.team
   */
  export type User$teamArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Team
     */
    omit?: TeamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamInclude<ExtArgs> | null
    where?: TeamWhereInput
  }

  /**
   * User.servers
   */
  export type User$serversArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Server
     */
    select?: ServerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Server
     */
    omit?: ServerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServerInclude<ExtArgs> | null
    where?: ServerWhereInput
    orderBy?: ServerOrderByWithRelationInput | ServerOrderByWithRelationInput[]
    cursor?: ServerWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ServerScalarFieldEnum | ServerScalarFieldEnum[]
  }

  /**
   * User.archives
   */
  export type User$archivesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Archive
     */
    select?: ArchiveSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Archive
     */
    omit?: ArchiveOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArchiveInclude<ExtArgs> | null
    where?: ArchiveWhereInput
    orderBy?: ArchiveOrderByWithRelationInput | ArchiveOrderByWithRelationInput[]
    cursor?: ArchiveWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ArchiveScalarFieldEnum | ArchiveScalarFieldEnum[]
  }

  /**
   * User.campaigns
   */
  export type User$campaignsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Campaign
     */
    select?: CampaignSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Campaign
     */
    omit?: CampaignOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampaignInclude<ExtArgs> | null
    where?: CampaignWhereInput
    orderBy?: CampaignOrderByWithRelationInput | CampaignOrderByWithRelationInput[]
    cursor?: CampaignWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CampaignScalarFieldEnum | CampaignScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Campaign
   */

  export type AggregateCampaign = {
    _count: CampaignCountAggregateOutputType | null
    _min: CampaignMinAggregateOutputType | null
    _max: CampaignMaxAggregateOutputType | null
  }

  export type CampaignMinAggregateOutputType = {
    id: string | null
    name: string | null
    alias: string | null
    userId: string | null
  }

  export type CampaignMaxAggregateOutputType = {
    id: string | null
    name: string | null
    alias: string | null
    userId: string | null
  }

  export type CampaignCountAggregateOutputType = {
    id: number
    name: number
    alias: number
    geo: number
    userId: number
    _all: number
  }


  export type CampaignMinAggregateInputType = {
    id?: true
    name?: true
    alias?: true
    userId?: true
  }

  export type CampaignMaxAggregateInputType = {
    id?: true
    name?: true
    alias?: true
    userId?: true
  }

  export type CampaignCountAggregateInputType = {
    id?: true
    name?: true
    alias?: true
    geo?: true
    userId?: true
    _all?: true
  }

  export type CampaignAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Campaign to aggregate.
     */
    where?: CampaignWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Campaigns to fetch.
     */
    orderBy?: CampaignOrderByWithRelationInput | CampaignOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CampaignWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Campaigns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Campaigns.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Campaigns
    **/
    _count?: true | CampaignCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CampaignMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CampaignMaxAggregateInputType
  }

  export type GetCampaignAggregateType<T extends CampaignAggregateArgs> = {
        [P in keyof T & keyof AggregateCampaign]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCampaign[P]>
      : GetScalarType<T[P], AggregateCampaign[P]>
  }




  export type CampaignGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CampaignWhereInput
    orderBy?: CampaignOrderByWithAggregationInput | CampaignOrderByWithAggregationInput[]
    by: CampaignScalarFieldEnum[] | CampaignScalarFieldEnum
    having?: CampaignScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CampaignCountAggregateInputType | true
    _min?: CampaignMinAggregateInputType
    _max?: CampaignMaxAggregateInputType
  }

  export type CampaignGroupByOutputType = {
    id: string
    name: string
    alias: string
    geo: string[]
    userId: string
    _count: CampaignCountAggregateOutputType | null
    _min: CampaignMinAggregateOutputType | null
    _max: CampaignMaxAggregateOutputType | null
  }

  type GetCampaignGroupByPayload<T extends CampaignGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CampaignGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CampaignGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CampaignGroupByOutputType[P]>
            : GetScalarType<T[P], CampaignGroupByOutputType[P]>
        }
      >
    >


  export type CampaignSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    alias?: boolean
    geo?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["campaign"]>

  export type CampaignSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    alias?: boolean
    geo?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["campaign"]>

  export type CampaignSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    alias?: boolean
    geo?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["campaign"]>

  export type CampaignSelectScalar = {
    id?: boolean
    name?: boolean
    alias?: boolean
    geo?: boolean
    userId?: boolean
  }

  export type CampaignOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "alias" | "geo" | "userId", ExtArgs["result"]["campaign"]>
  export type CampaignInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type CampaignIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type CampaignIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $CampaignPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Campaign"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      alias: string
      geo: string[]
      userId: string
    }, ExtArgs["result"]["campaign"]>
    composites: {}
  }

  type CampaignGetPayload<S extends boolean | null | undefined | CampaignDefaultArgs> = $Result.GetResult<Prisma.$CampaignPayload, S>

  type CampaignCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CampaignFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CampaignCountAggregateInputType | true
    }

  export interface CampaignDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Campaign'], meta: { name: 'Campaign' } }
    /**
     * Find zero or one Campaign that matches the filter.
     * @param {CampaignFindUniqueArgs} args - Arguments to find a Campaign
     * @example
     * // Get one Campaign
     * const campaign = await prisma.campaign.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CampaignFindUniqueArgs>(args: SelectSubset<T, CampaignFindUniqueArgs<ExtArgs>>): Prisma__CampaignClient<$Result.GetResult<Prisma.$CampaignPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Campaign that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CampaignFindUniqueOrThrowArgs} args - Arguments to find a Campaign
     * @example
     * // Get one Campaign
     * const campaign = await prisma.campaign.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CampaignFindUniqueOrThrowArgs>(args: SelectSubset<T, CampaignFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CampaignClient<$Result.GetResult<Prisma.$CampaignPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Campaign that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CampaignFindFirstArgs} args - Arguments to find a Campaign
     * @example
     * // Get one Campaign
     * const campaign = await prisma.campaign.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CampaignFindFirstArgs>(args?: SelectSubset<T, CampaignFindFirstArgs<ExtArgs>>): Prisma__CampaignClient<$Result.GetResult<Prisma.$CampaignPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Campaign that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CampaignFindFirstOrThrowArgs} args - Arguments to find a Campaign
     * @example
     * // Get one Campaign
     * const campaign = await prisma.campaign.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CampaignFindFirstOrThrowArgs>(args?: SelectSubset<T, CampaignFindFirstOrThrowArgs<ExtArgs>>): Prisma__CampaignClient<$Result.GetResult<Prisma.$CampaignPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Campaigns that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CampaignFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Campaigns
     * const campaigns = await prisma.campaign.findMany()
     * 
     * // Get first 10 Campaigns
     * const campaigns = await prisma.campaign.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const campaignWithIdOnly = await prisma.campaign.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CampaignFindManyArgs>(args?: SelectSubset<T, CampaignFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CampaignPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Campaign.
     * @param {CampaignCreateArgs} args - Arguments to create a Campaign.
     * @example
     * // Create one Campaign
     * const Campaign = await prisma.campaign.create({
     *   data: {
     *     // ... data to create a Campaign
     *   }
     * })
     * 
     */
    create<T extends CampaignCreateArgs>(args: SelectSubset<T, CampaignCreateArgs<ExtArgs>>): Prisma__CampaignClient<$Result.GetResult<Prisma.$CampaignPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Campaigns.
     * @param {CampaignCreateManyArgs} args - Arguments to create many Campaigns.
     * @example
     * // Create many Campaigns
     * const campaign = await prisma.campaign.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CampaignCreateManyArgs>(args?: SelectSubset<T, CampaignCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Campaigns and returns the data saved in the database.
     * @param {CampaignCreateManyAndReturnArgs} args - Arguments to create many Campaigns.
     * @example
     * // Create many Campaigns
     * const campaign = await prisma.campaign.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Campaigns and only return the `id`
     * const campaignWithIdOnly = await prisma.campaign.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CampaignCreateManyAndReturnArgs>(args?: SelectSubset<T, CampaignCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CampaignPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Campaign.
     * @param {CampaignDeleteArgs} args - Arguments to delete one Campaign.
     * @example
     * // Delete one Campaign
     * const Campaign = await prisma.campaign.delete({
     *   where: {
     *     // ... filter to delete one Campaign
     *   }
     * })
     * 
     */
    delete<T extends CampaignDeleteArgs>(args: SelectSubset<T, CampaignDeleteArgs<ExtArgs>>): Prisma__CampaignClient<$Result.GetResult<Prisma.$CampaignPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Campaign.
     * @param {CampaignUpdateArgs} args - Arguments to update one Campaign.
     * @example
     * // Update one Campaign
     * const campaign = await prisma.campaign.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CampaignUpdateArgs>(args: SelectSubset<T, CampaignUpdateArgs<ExtArgs>>): Prisma__CampaignClient<$Result.GetResult<Prisma.$CampaignPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Campaigns.
     * @param {CampaignDeleteManyArgs} args - Arguments to filter Campaigns to delete.
     * @example
     * // Delete a few Campaigns
     * const { count } = await prisma.campaign.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CampaignDeleteManyArgs>(args?: SelectSubset<T, CampaignDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Campaigns.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CampaignUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Campaigns
     * const campaign = await prisma.campaign.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CampaignUpdateManyArgs>(args: SelectSubset<T, CampaignUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Campaigns and returns the data updated in the database.
     * @param {CampaignUpdateManyAndReturnArgs} args - Arguments to update many Campaigns.
     * @example
     * // Update many Campaigns
     * const campaign = await prisma.campaign.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Campaigns and only return the `id`
     * const campaignWithIdOnly = await prisma.campaign.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CampaignUpdateManyAndReturnArgs>(args: SelectSubset<T, CampaignUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CampaignPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Campaign.
     * @param {CampaignUpsertArgs} args - Arguments to update or create a Campaign.
     * @example
     * // Update or create a Campaign
     * const campaign = await prisma.campaign.upsert({
     *   create: {
     *     // ... data to create a Campaign
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Campaign we want to update
     *   }
     * })
     */
    upsert<T extends CampaignUpsertArgs>(args: SelectSubset<T, CampaignUpsertArgs<ExtArgs>>): Prisma__CampaignClient<$Result.GetResult<Prisma.$CampaignPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Campaigns.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CampaignCountArgs} args - Arguments to filter Campaigns to count.
     * @example
     * // Count the number of Campaigns
     * const count = await prisma.campaign.count({
     *   where: {
     *     // ... the filter for the Campaigns we want to count
     *   }
     * })
    **/
    count<T extends CampaignCountArgs>(
      args?: Subset<T, CampaignCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CampaignCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Campaign.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CampaignAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CampaignAggregateArgs>(args: Subset<T, CampaignAggregateArgs>): Prisma.PrismaPromise<GetCampaignAggregateType<T>>

    /**
     * Group by Campaign.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CampaignGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CampaignGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CampaignGroupByArgs['orderBy'] }
        : { orderBy?: CampaignGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CampaignGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCampaignGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Campaign model
   */
  readonly fields: CampaignFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Campaign.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CampaignClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Campaign model
   */
  interface CampaignFieldRefs {
    readonly id: FieldRef<"Campaign", 'String'>
    readonly name: FieldRef<"Campaign", 'String'>
    readonly alias: FieldRef<"Campaign", 'String'>
    readonly geo: FieldRef<"Campaign", 'String[]'>
    readonly userId: FieldRef<"Campaign", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Campaign findUnique
   */
  export type CampaignFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Campaign
     */
    select?: CampaignSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Campaign
     */
    omit?: CampaignOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampaignInclude<ExtArgs> | null
    /**
     * Filter, which Campaign to fetch.
     */
    where: CampaignWhereUniqueInput
  }

  /**
   * Campaign findUniqueOrThrow
   */
  export type CampaignFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Campaign
     */
    select?: CampaignSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Campaign
     */
    omit?: CampaignOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampaignInclude<ExtArgs> | null
    /**
     * Filter, which Campaign to fetch.
     */
    where: CampaignWhereUniqueInput
  }

  /**
   * Campaign findFirst
   */
  export type CampaignFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Campaign
     */
    select?: CampaignSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Campaign
     */
    omit?: CampaignOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampaignInclude<ExtArgs> | null
    /**
     * Filter, which Campaign to fetch.
     */
    where?: CampaignWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Campaigns to fetch.
     */
    orderBy?: CampaignOrderByWithRelationInput | CampaignOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Campaigns.
     */
    cursor?: CampaignWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Campaigns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Campaigns.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Campaigns.
     */
    distinct?: CampaignScalarFieldEnum | CampaignScalarFieldEnum[]
  }

  /**
   * Campaign findFirstOrThrow
   */
  export type CampaignFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Campaign
     */
    select?: CampaignSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Campaign
     */
    omit?: CampaignOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampaignInclude<ExtArgs> | null
    /**
     * Filter, which Campaign to fetch.
     */
    where?: CampaignWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Campaigns to fetch.
     */
    orderBy?: CampaignOrderByWithRelationInput | CampaignOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Campaigns.
     */
    cursor?: CampaignWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Campaigns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Campaigns.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Campaigns.
     */
    distinct?: CampaignScalarFieldEnum | CampaignScalarFieldEnum[]
  }

  /**
   * Campaign findMany
   */
  export type CampaignFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Campaign
     */
    select?: CampaignSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Campaign
     */
    omit?: CampaignOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampaignInclude<ExtArgs> | null
    /**
     * Filter, which Campaigns to fetch.
     */
    where?: CampaignWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Campaigns to fetch.
     */
    orderBy?: CampaignOrderByWithRelationInput | CampaignOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Campaigns.
     */
    cursor?: CampaignWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Campaigns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Campaigns.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Campaigns.
     */
    distinct?: CampaignScalarFieldEnum | CampaignScalarFieldEnum[]
  }

  /**
   * Campaign create
   */
  export type CampaignCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Campaign
     */
    select?: CampaignSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Campaign
     */
    omit?: CampaignOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampaignInclude<ExtArgs> | null
    /**
     * The data needed to create a Campaign.
     */
    data: XOR<CampaignCreateInput, CampaignUncheckedCreateInput>
  }

  /**
   * Campaign createMany
   */
  export type CampaignCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Campaigns.
     */
    data: CampaignCreateManyInput | CampaignCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Campaign createManyAndReturn
   */
  export type CampaignCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Campaign
     */
    select?: CampaignSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Campaign
     */
    omit?: CampaignOmit<ExtArgs> | null
    /**
     * The data used to create many Campaigns.
     */
    data: CampaignCreateManyInput | CampaignCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampaignIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Campaign update
   */
  export type CampaignUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Campaign
     */
    select?: CampaignSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Campaign
     */
    omit?: CampaignOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampaignInclude<ExtArgs> | null
    /**
     * The data needed to update a Campaign.
     */
    data: XOR<CampaignUpdateInput, CampaignUncheckedUpdateInput>
    /**
     * Choose, which Campaign to update.
     */
    where: CampaignWhereUniqueInput
  }

  /**
   * Campaign updateMany
   */
  export type CampaignUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Campaigns.
     */
    data: XOR<CampaignUpdateManyMutationInput, CampaignUncheckedUpdateManyInput>
    /**
     * Filter which Campaigns to update
     */
    where?: CampaignWhereInput
    /**
     * Limit how many Campaigns to update.
     */
    limit?: number
  }

  /**
   * Campaign updateManyAndReturn
   */
  export type CampaignUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Campaign
     */
    select?: CampaignSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Campaign
     */
    omit?: CampaignOmit<ExtArgs> | null
    /**
     * The data used to update Campaigns.
     */
    data: XOR<CampaignUpdateManyMutationInput, CampaignUncheckedUpdateManyInput>
    /**
     * Filter which Campaigns to update
     */
    where?: CampaignWhereInput
    /**
     * Limit how many Campaigns to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampaignIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Campaign upsert
   */
  export type CampaignUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Campaign
     */
    select?: CampaignSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Campaign
     */
    omit?: CampaignOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampaignInclude<ExtArgs> | null
    /**
     * The filter to search for the Campaign to update in case it exists.
     */
    where: CampaignWhereUniqueInput
    /**
     * In case the Campaign found by the `where` argument doesn't exist, create a new Campaign with this data.
     */
    create: XOR<CampaignCreateInput, CampaignUncheckedCreateInput>
    /**
     * In case the Campaign was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CampaignUpdateInput, CampaignUncheckedUpdateInput>
  }

  /**
   * Campaign delete
   */
  export type CampaignDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Campaign
     */
    select?: CampaignSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Campaign
     */
    omit?: CampaignOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampaignInclude<ExtArgs> | null
    /**
     * Filter which Campaign to delete.
     */
    where: CampaignWhereUniqueInput
  }

  /**
   * Campaign deleteMany
   */
  export type CampaignDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Campaigns to delete
     */
    where?: CampaignWhereInput
    /**
     * Limit how many Campaigns to delete.
     */
    limit?: number
  }

  /**
   * Campaign without action
   */
  export type CampaignDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Campaign
     */
    select?: CampaignSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Campaign
     */
    omit?: CampaignOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampaignInclude<ExtArgs> | null
  }


  /**
   * Model Team
   */

  export type AggregateTeam = {
    _count: TeamCountAggregateOutputType | null
    _min: TeamMinAggregateOutputType | null
    _max: TeamMaxAggregateOutputType | null
  }

  export type TeamMinAggregateOutputType = {
    id: string | null
    name: string | null
    alias: string | null
  }

  export type TeamMaxAggregateOutputType = {
    id: string | null
    name: string | null
    alias: string | null
  }

  export type TeamCountAggregateOutputType = {
    id: number
    name: number
    alias: number
    _all: number
  }


  export type TeamMinAggregateInputType = {
    id?: true
    name?: true
    alias?: true
  }

  export type TeamMaxAggregateInputType = {
    id?: true
    name?: true
    alias?: true
  }

  export type TeamCountAggregateInputType = {
    id?: true
    name?: true
    alias?: true
    _all?: true
  }

  export type TeamAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Team to aggregate.
     */
    where?: TeamWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Teams to fetch.
     */
    orderBy?: TeamOrderByWithRelationInput | TeamOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TeamWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Teams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Teams.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Teams
    **/
    _count?: true | TeamCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TeamMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TeamMaxAggregateInputType
  }

  export type GetTeamAggregateType<T extends TeamAggregateArgs> = {
        [P in keyof T & keyof AggregateTeam]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTeam[P]>
      : GetScalarType<T[P], AggregateTeam[P]>
  }




  export type TeamGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TeamWhereInput
    orderBy?: TeamOrderByWithAggregationInput | TeamOrderByWithAggregationInput[]
    by: TeamScalarFieldEnum[] | TeamScalarFieldEnum
    having?: TeamScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TeamCountAggregateInputType | true
    _min?: TeamMinAggregateInputType
    _max?: TeamMaxAggregateInputType
  }

  export type TeamGroupByOutputType = {
    id: string
    name: string
    alias: string
    _count: TeamCountAggregateOutputType | null
    _min: TeamMinAggregateOutputType | null
    _max: TeamMaxAggregateOutputType | null
  }

  type GetTeamGroupByPayload<T extends TeamGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TeamGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TeamGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TeamGroupByOutputType[P]>
            : GetScalarType<T[P], TeamGroupByOutputType[P]>
        }
      >
    >


  export type TeamSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    alias?: boolean
    members?: boolean | Team$membersArgs<ExtArgs>
    _count?: boolean | TeamCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["team"]>

  export type TeamSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    alias?: boolean
  }, ExtArgs["result"]["team"]>

  export type TeamSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    alias?: boolean
  }, ExtArgs["result"]["team"]>

  export type TeamSelectScalar = {
    id?: boolean
    name?: boolean
    alias?: boolean
  }

  export type TeamOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "alias", ExtArgs["result"]["team"]>
  export type TeamInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    members?: boolean | Team$membersArgs<ExtArgs>
    _count?: boolean | TeamCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TeamIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type TeamIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $TeamPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Team"
    objects: {
      members: Prisma.$UserPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      alias: string
    }, ExtArgs["result"]["team"]>
    composites: {}
  }

  type TeamGetPayload<S extends boolean | null | undefined | TeamDefaultArgs> = $Result.GetResult<Prisma.$TeamPayload, S>

  type TeamCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TeamFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TeamCountAggregateInputType | true
    }

  export interface TeamDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Team'], meta: { name: 'Team' } }
    /**
     * Find zero or one Team that matches the filter.
     * @param {TeamFindUniqueArgs} args - Arguments to find a Team
     * @example
     * // Get one Team
     * const team = await prisma.team.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TeamFindUniqueArgs>(args: SelectSubset<T, TeamFindUniqueArgs<ExtArgs>>): Prisma__TeamClient<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Team that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TeamFindUniqueOrThrowArgs} args - Arguments to find a Team
     * @example
     * // Get one Team
     * const team = await prisma.team.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TeamFindUniqueOrThrowArgs>(args: SelectSubset<T, TeamFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TeamClient<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Team that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamFindFirstArgs} args - Arguments to find a Team
     * @example
     * // Get one Team
     * const team = await prisma.team.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TeamFindFirstArgs>(args?: SelectSubset<T, TeamFindFirstArgs<ExtArgs>>): Prisma__TeamClient<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Team that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamFindFirstOrThrowArgs} args - Arguments to find a Team
     * @example
     * // Get one Team
     * const team = await prisma.team.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TeamFindFirstOrThrowArgs>(args?: SelectSubset<T, TeamFindFirstOrThrowArgs<ExtArgs>>): Prisma__TeamClient<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Teams that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Teams
     * const teams = await prisma.team.findMany()
     * 
     * // Get first 10 Teams
     * const teams = await prisma.team.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const teamWithIdOnly = await prisma.team.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TeamFindManyArgs>(args?: SelectSubset<T, TeamFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Team.
     * @param {TeamCreateArgs} args - Arguments to create a Team.
     * @example
     * // Create one Team
     * const Team = await prisma.team.create({
     *   data: {
     *     // ... data to create a Team
     *   }
     * })
     * 
     */
    create<T extends TeamCreateArgs>(args: SelectSubset<T, TeamCreateArgs<ExtArgs>>): Prisma__TeamClient<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Teams.
     * @param {TeamCreateManyArgs} args - Arguments to create many Teams.
     * @example
     * // Create many Teams
     * const team = await prisma.team.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TeamCreateManyArgs>(args?: SelectSubset<T, TeamCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Teams and returns the data saved in the database.
     * @param {TeamCreateManyAndReturnArgs} args - Arguments to create many Teams.
     * @example
     * // Create many Teams
     * const team = await prisma.team.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Teams and only return the `id`
     * const teamWithIdOnly = await prisma.team.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TeamCreateManyAndReturnArgs>(args?: SelectSubset<T, TeamCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Team.
     * @param {TeamDeleteArgs} args - Arguments to delete one Team.
     * @example
     * // Delete one Team
     * const Team = await prisma.team.delete({
     *   where: {
     *     // ... filter to delete one Team
     *   }
     * })
     * 
     */
    delete<T extends TeamDeleteArgs>(args: SelectSubset<T, TeamDeleteArgs<ExtArgs>>): Prisma__TeamClient<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Team.
     * @param {TeamUpdateArgs} args - Arguments to update one Team.
     * @example
     * // Update one Team
     * const team = await prisma.team.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TeamUpdateArgs>(args: SelectSubset<T, TeamUpdateArgs<ExtArgs>>): Prisma__TeamClient<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Teams.
     * @param {TeamDeleteManyArgs} args - Arguments to filter Teams to delete.
     * @example
     * // Delete a few Teams
     * const { count } = await prisma.team.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TeamDeleteManyArgs>(args?: SelectSubset<T, TeamDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Teams.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Teams
     * const team = await prisma.team.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TeamUpdateManyArgs>(args: SelectSubset<T, TeamUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Teams and returns the data updated in the database.
     * @param {TeamUpdateManyAndReturnArgs} args - Arguments to update many Teams.
     * @example
     * // Update many Teams
     * const team = await prisma.team.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Teams and only return the `id`
     * const teamWithIdOnly = await prisma.team.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TeamUpdateManyAndReturnArgs>(args: SelectSubset<T, TeamUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Team.
     * @param {TeamUpsertArgs} args - Arguments to update or create a Team.
     * @example
     * // Update or create a Team
     * const team = await prisma.team.upsert({
     *   create: {
     *     // ... data to create a Team
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Team we want to update
     *   }
     * })
     */
    upsert<T extends TeamUpsertArgs>(args: SelectSubset<T, TeamUpsertArgs<ExtArgs>>): Prisma__TeamClient<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Teams.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamCountArgs} args - Arguments to filter Teams to count.
     * @example
     * // Count the number of Teams
     * const count = await prisma.team.count({
     *   where: {
     *     // ... the filter for the Teams we want to count
     *   }
     * })
    **/
    count<T extends TeamCountArgs>(
      args?: Subset<T, TeamCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TeamCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Team.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TeamAggregateArgs>(args: Subset<T, TeamAggregateArgs>): Prisma.PrismaPromise<GetTeamAggregateType<T>>

    /**
     * Group by Team.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TeamGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TeamGroupByArgs['orderBy'] }
        : { orderBy?: TeamGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TeamGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTeamGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Team model
   */
  readonly fields: TeamFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Team.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TeamClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    members<T extends Team$membersArgs<ExtArgs> = {}>(args?: Subset<T, Team$membersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Team model
   */
  interface TeamFieldRefs {
    readonly id: FieldRef<"Team", 'String'>
    readonly name: FieldRef<"Team", 'String'>
    readonly alias: FieldRef<"Team", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Team findUnique
   */
  export type TeamFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Team
     */
    omit?: TeamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamInclude<ExtArgs> | null
    /**
     * Filter, which Team to fetch.
     */
    where: TeamWhereUniqueInput
  }

  /**
   * Team findUniqueOrThrow
   */
  export type TeamFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Team
     */
    omit?: TeamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamInclude<ExtArgs> | null
    /**
     * Filter, which Team to fetch.
     */
    where: TeamWhereUniqueInput
  }

  /**
   * Team findFirst
   */
  export type TeamFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Team
     */
    omit?: TeamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamInclude<ExtArgs> | null
    /**
     * Filter, which Team to fetch.
     */
    where?: TeamWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Teams to fetch.
     */
    orderBy?: TeamOrderByWithRelationInput | TeamOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Teams.
     */
    cursor?: TeamWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Teams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Teams.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Teams.
     */
    distinct?: TeamScalarFieldEnum | TeamScalarFieldEnum[]
  }

  /**
   * Team findFirstOrThrow
   */
  export type TeamFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Team
     */
    omit?: TeamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamInclude<ExtArgs> | null
    /**
     * Filter, which Team to fetch.
     */
    where?: TeamWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Teams to fetch.
     */
    orderBy?: TeamOrderByWithRelationInput | TeamOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Teams.
     */
    cursor?: TeamWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Teams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Teams.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Teams.
     */
    distinct?: TeamScalarFieldEnum | TeamScalarFieldEnum[]
  }

  /**
   * Team findMany
   */
  export type TeamFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Team
     */
    omit?: TeamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamInclude<ExtArgs> | null
    /**
     * Filter, which Teams to fetch.
     */
    where?: TeamWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Teams to fetch.
     */
    orderBy?: TeamOrderByWithRelationInput | TeamOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Teams.
     */
    cursor?: TeamWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Teams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Teams.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Teams.
     */
    distinct?: TeamScalarFieldEnum | TeamScalarFieldEnum[]
  }

  /**
   * Team create
   */
  export type TeamCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Team
     */
    omit?: TeamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamInclude<ExtArgs> | null
    /**
     * The data needed to create a Team.
     */
    data: XOR<TeamCreateInput, TeamUncheckedCreateInput>
  }

  /**
   * Team createMany
   */
  export type TeamCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Teams.
     */
    data: TeamCreateManyInput | TeamCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Team createManyAndReturn
   */
  export type TeamCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Team
     */
    omit?: TeamOmit<ExtArgs> | null
    /**
     * The data used to create many Teams.
     */
    data: TeamCreateManyInput | TeamCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Team update
   */
  export type TeamUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Team
     */
    omit?: TeamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamInclude<ExtArgs> | null
    /**
     * The data needed to update a Team.
     */
    data: XOR<TeamUpdateInput, TeamUncheckedUpdateInput>
    /**
     * Choose, which Team to update.
     */
    where: TeamWhereUniqueInput
  }

  /**
   * Team updateMany
   */
  export type TeamUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Teams.
     */
    data: XOR<TeamUpdateManyMutationInput, TeamUncheckedUpdateManyInput>
    /**
     * Filter which Teams to update
     */
    where?: TeamWhereInput
    /**
     * Limit how many Teams to update.
     */
    limit?: number
  }

  /**
   * Team updateManyAndReturn
   */
  export type TeamUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Team
     */
    omit?: TeamOmit<ExtArgs> | null
    /**
     * The data used to update Teams.
     */
    data: XOR<TeamUpdateManyMutationInput, TeamUncheckedUpdateManyInput>
    /**
     * Filter which Teams to update
     */
    where?: TeamWhereInput
    /**
     * Limit how many Teams to update.
     */
    limit?: number
  }

  /**
   * Team upsert
   */
  export type TeamUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Team
     */
    omit?: TeamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamInclude<ExtArgs> | null
    /**
     * The filter to search for the Team to update in case it exists.
     */
    where: TeamWhereUniqueInput
    /**
     * In case the Team found by the `where` argument doesn't exist, create a new Team with this data.
     */
    create: XOR<TeamCreateInput, TeamUncheckedCreateInput>
    /**
     * In case the Team was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TeamUpdateInput, TeamUncheckedUpdateInput>
  }

  /**
   * Team delete
   */
  export type TeamDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Team
     */
    omit?: TeamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamInclude<ExtArgs> | null
    /**
     * Filter which Team to delete.
     */
    where: TeamWhereUniqueInput
  }

  /**
   * Team deleteMany
   */
  export type TeamDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Teams to delete
     */
    where?: TeamWhereInput
    /**
     * Limit how many Teams to delete.
     */
    limit?: number
  }

  /**
   * Team.members
   */
  export type Team$membersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    cursor?: UserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * Team without action
   */
  export type TeamDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Team
     */
    omit?: TeamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamInclude<ExtArgs> | null
  }


  /**
   * Model Archive
   */

  export type AggregateArchive = {
    _count: ArchiveCountAggregateOutputType | null
    _min: ArchiveMinAggregateOutputType | null
    _max: ArchiveMaxAggregateOutputType | null
  }

  export type ArchiveMinAggregateOutputType = {
    id: string | null
    name: string | null
    path: string | null
    userId: string | null
    createdAt: Date | null
  }

  export type ArchiveMaxAggregateOutputType = {
    id: string | null
    name: string | null
    path: string | null
    userId: string | null
    createdAt: Date | null
  }

  export type ArchiveCountAggregateOutputType = {
    id: number
    name: number
    path: number
    userId: number
    createdAt: number
    _all: number
  }


  export type ArchiveMinAggregateInputType = {
    id?: true
    name?: true
    path?: true
    userId?: true
    createdAt?: true
  }

  export type ArchiveMaxAggregateInputType = {
    id?: true
    name?: true
    path?: true
    userId?: true
    createdAt?: true
  }

  export type ArchiveCountAggregateInputType = {
    id?: true
    name?: true
    path?: true
    userId?: true
    createdAt?: true
    _all?: true
  }

  export type ArchiveAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Archive to aggregate.
     */
    where?: ArchiveWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Archives to fetch.
     */
    orderBy?: ArchiveOrderByWithRelationInput | ArchiveOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ArchiveWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Archives from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Archives.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Archives
    **/
    _count?: true | ArchiveCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ArchiveMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ArchiveMaxAggregateInputType
  }

  export type GetArchiveAggregateType<T extends ArchiveAggregateArgs> = {
        [P in keyof T & keyof AggregateArchive]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateArchive[P]>
      : GetScalarType<T[P], AggregateArchive[P]>
  }




  export type ArchiveGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ArchiveWhereInput
    orderBy?: ArchiveOrderByWithAggregationInput | ArchiveOrderByWithAggregationInput[]
    by: ArchiveScalarFieldEnum[] | ArchiveScalarFieldEnum
    having?: ArchiveScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ArchiveCountAggregateInputType | true
    _min?: ArchiveMinAggregateInputType
    _max?: ArchiveMaxAggregateInputType
  }

  export type ArchiveGroupByOutputType = {
    id: string
    name: string
    path: string
    userId: string
    createdAt: Date
    _count: ArchiveCountAggregateOutputType | null
    _min: ArchiveMinAggregateOutputType | null
    _max: ArchiveMaxAggregateOutputType | null
  }

  type GetArchiveGroupByPayload<T extends ArchiveGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ArchiveGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ArchiveGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ArchiveGroupByOutputType[P]>
            : GetScalarType<T[P], ArchiveGroupByOutputType[P]>
        }
      >
    >


  export type ArchiveSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    path?: boolean
    userId?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["archive"]>

  export type ArchiveSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    path?: boolean
    userId?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["archive"]>

  export type ArchiveSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    path?: boolean
    userId?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["archive"]>

  export type ArchiveSelectScalar = {
    id?: boolean
    name?: boolean
    path?: boolean
    userId?: boolean
    createdAt?: boolean
  }

  export type ArchiveOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "path" | "userId" | "createdAt", ExtArgs["result"]["archive"]>
  export type ArchiveInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ArchiveIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ArchiveIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ArchivePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Archive"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      path: string
      userId: string
      createdAt: Date
    }, ExtArgs["result"]["archive"]>
    composites: {}
  }

  type ArchiveGetPayload<S extends boolean | null | undefined | ArchiveDefaultArgs> = $Result.GetResult<Prisma.$ArchivePayload, S>

  type ArchiveCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ArchiveFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ArchiveCountAggregateInputType | true
    }

  export interface ArchiveDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Archive'], meta: { name: 'Archive' } }
    /**
     * Find zero or one Archive that matches the filter.
     * @param {ArchiveFindUniqueArgs} args - Arguments to find a Archive
     * @example
     * // Get one Archive
     * const archive = await prisma.archive.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ArchiveFindUniqueArgs>(args: SelectSubset<T, ArchiveFindUniqueArgs<ExtArgs>>): Prisma__ArchiveClient<$Result.GetResult<Prisma.$ArchivePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Archive that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ArchiveFindUniqueOrThrowArgs} args - Arguments to find a Archive
     * @example
     * // Get one Archive
     * const archive = await prisma.archive.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ArchiveFindUniqueOrThrowArgs>(args: SelectSubset<T, ArchiveFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ArchiveClient<$Result.GetResult<Prisma.$ArchivePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Archive that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArchiveFindFirstArgs} args - Arguments to find a Archive
     * @example
     * // Get one Archive
     * const archive = await prisma.archive.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ArchiveFindFirstArgs>(args?: SelectSubset<T, ArchiveFindFirstArgs<ExtArgs>>): Prisma__ArchiveClient<$Result.GetResult<Prisma.$ArchivePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Archive that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArchiveFindFirstOrThrowArgs} args - Arguments to find a Archive
     * @example
     * // Get one Archive
     * const archive = await prisma.archive.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ArchiveFindFirstOrThrowArgs>(args?: SelectSubset<T, ArchiveFindFirstOrThrowArgs<ExtArgs>>): Prisma__ArchiveClient<$Result.GetResult<Prisma.$ArchivePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Archives that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArchiveFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Archives
     * const archives = await prisma.archive.findMany()
     * 
     * // Get first 10 Archives
     * const archives = await prisma.archive.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const archiveWithIdOnly = await prisma.archive.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ArchiveFindManyArgs>(args?: SelectSubset<T, ArchiveFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ArchivePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Archive.
     * @param {ArchiveCreateArgs} args - Arguments to create a Archive.
     * @example
     * // Create one Archive
     * const Archive = await prisma.archive.create({
     *   data: {
     *     // ... data to create a Archive
     *   }
     * })
     * 
     */
    create<T extends ArchiveCreateArgs>(args: SelectSubset<T, ArchiveCreateArgs<ExtArgs>>): Prisma__ArchiveClient<$Result.GetResult<Prisma.$ArchivePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Archives.
     * @param {ArchiveCreateManyArgs} args - Arguments to create many Archives.
     * @example
     * // Create many Archives
     * const archive = await prisma.archive.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ArchiveCreateManyArgs>(args?: SelectSubset<T, ArchiveCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Archives and returns the data saved in the database.
     * @param {ArchiveCreateManyAndReturnArgs} args - Arguments to create many Archives.
     * @example
     * // Create many Archives
     * const archive = await prisma.archive.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Archives and only return the `id`
     * const archiveWithIdOnly = await prisma.archive.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ArchiveCreateManyAndReturnArgs>(args?: SelectSubset<T, ArchiveCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ArchivePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Archive.
     * @param {ArchiveDeleteArgs} args - Arguments to delete one Archive.
     * @example
     * // Delete one Archive
     * const Archive = await prisma.archive.delete({
     *   where: {
     *     // ... filter to delete one Archive
     *   }
     * })
     * 
     */
    delete<T extends ArchiveDeleteArgs>(args: SelectSubset<T, ArchiveDeleteArgs<ExtArgs>>): Prisma__ArchiveClient<$Result.GetResult<Prisma.$ArchivePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Archive.
     * @param {ArchiveUpdateArgs} args - Arguments to update one Archive.
     * @example
     * // Update one Archive
     * const archive = await prisma.archive.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ArchiveUpdateArgs>(args: SelectSubset<T, ArchiveUpdateArgs<ExtArgs>>): Prisma__ArchiveClient<$Result.GetResult<Prisma.$ArchivePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Archives.
     * @param {ArchiveDeleteManyArgs} args - Arguments to filter Archives to delete.
     * @example
     * // Delete a few Archives
     * const { count } = await prisma.archive.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ArchiveDeleteManyArgs>(args?: SelectSubset<T, ArchiveDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Archives.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArchiveUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Archives
     * const archive = await prisma.archive.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ArchiveUpdateManyArgs>(args: SelectSubset<T, ArchiveUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Archives and returns the data updated in the database.
     * @param {ArchiveUpdateManyAndReturnArgs} args - Arguments to update many Archives.
     * @example
     * // Update many Archives
     * const archive = await prisma.archive.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Archives and only return the `id`
     * const archiveWithIdOnly = await prisma.archive.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ArchiveUpdateManyAndReturnArgs>(args: SelectSubset<T, ArchiveUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ArchivePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Archive.
     * @param {ArchiveUpsertArgs} args - Arguments to update or create a Archive.
     * @example
     * // Update or create a Archive
     * const archive = await prisma.archive.upsert({
     *   create: {
     *     // ... data to create a Archive
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Archive we want to update
     *   }
     * })
     */
    upsert<T extends ArchiveUpsertArgs>(args: SelectSubset<T, ArchiveUpsertArgs<ExtArgs>>): Prisma__ArchiveClient<$Result.GetResult<Prisma.$ArchivePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Archives.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArchiveCountArgs} args - Arguments to filter Archives to count.
     * @example
     * // Count the number of Archives
     * const count = await prisma.archive.count({
     *   where: {
     *     // ... the filter for the Archives we want to count
     *   }
     * })
    **/
    count<T extends ArchiveCountArgs>(
      args?: Subset<T, ArchiveCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ArchiveCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Archive.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArchiveAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ArchiveAggregateArgs>(args: Subset<T, ArchiveAggregateArgs>): Prisma.PrismaPromise<GetArchiveAggregateType<T>>

    /**
     * Group by Archive.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArchiveGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ArchiveGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ArchiveGroupByArgs['orderBy'] }
        : { orderBy?: ArchiveGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ArchiveGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetArchiveGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Archive model
   */
  readonly fields: ArchiveFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Archive.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ArchiveClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Archive model
   */
  interface ArchiveFieldRefs {
    readonly id: FieldRef<"Archive", 'String'>
    readonly name: FieldRef<"Archive", 'String'>
    readonly path: FieldRef<"Archive", 'String'>
    readonly userId: FieldRef<"Archive", 'String'>
    readonly createdAt: FieldRef<"Archive", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Archive findUnique
   */
  export type ArchiveFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Archive
     */
    select?: ArchiveSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Archive
     */
    omit?: ArchiveOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArchiveInclude<ExtArgs> | null
    /**
     * Filter, which Archive to fetch.
     */
    where: ArchiveWhereUniqueInput
  }

  /**
   * Archive findUniqueOrThrow
   */
  export type ArchiveFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Archive
     */
    select?: ArchiveSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Archive
     */
    omit?: ArchiveOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArchiveInclude<ExtArgs> | null
    /**
     * Filter, which Archive to fetch.
     */
    where: ArchiveWhereUniqueInput
  }

  /**
   * Archive findFirst
   */
  export type ArchiveFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Archive
     */
    select?: ArchiveSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Archive
     */
    omit?: ArchiveOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArchiveInclude<ExtArgs> | null
    /**
     * Filter, which Archive to fetch.
     */
    where?: ArchiveWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Archives to fetch.
     */
    orderBy?: ArchiveOrderByWithRelationInput | ArchiveOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Archives.
     */
    cursor?: ArchiveWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Archives from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Archives.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Archives.
     */
    distinct?: ArchiveScalarFieldEnum | ArchiveScalarFieldEnum[]
  }

  /**
   * Archive findFirstOrThrow
   */
  export type ArchiveFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Archive
     */
    select?: ArchiveSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Archive
     */
    omit?: ArchiveOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArchiveInclude<ExtArgs> | null
    /**
     * Filter, which Archive to fetch.
     */
    where?: ArchiveWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Archives to fetch.
     */
    orderBy?: ArchiveOrderByWithRelationInput | ArchiveOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Archives.
     */
    cursor?: ArchiveWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Archives from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Archives.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Archives.
     */
    distinct?: ArchiveScalarFieldEnum | ArchiveScalarFieldEnum[]
  }

  /**
   * Archive findMany
   */
  export type ArchiveFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Archive
     */
    select?: ArchiveSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Archive
     */
    omit?: ArchiveOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArchiveInclude<ExtArgs> | null
    /**
     * Filter, which Archives to fetch.
     */
    where?: ArchiveWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Archives to fetch.
     */
    orderBy?: ArchiveOrderByWithRelationInput | ArchiveOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Archives.
     */
    cursor?: ArchiveWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Archives from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Archives.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Archives.
     */
    distinct?: ArchiveScalarFieldEnum | ArchiveScalarFieldEnum[]
  }

  /**
   * Archive create
   */
  export type ArchiveCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Archive
     */
    select?: ArchiveSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Archive
     */
    omit?: ArchiveOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArchiveInclude<ExtArgs> | null
    /**
     * The data needed to create a Archive.
     */
    data: XOR<ArchiveCreateInput, ArchiveUncheckedCreateInput>
  }

  /**
   * Archive createMany
   */
  export type ArchiveCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Archives.
     */
    data: ArchiveCreateManyInput | ArchiveCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Archive createManyAndReturn
   */
  export type ArchiveCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Archive
     */
    select?: ArchiveSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Archive
     */
    omit?: ArchiveOmit<ExtArgs> | null
    /**
     * The data used to create many Archives.
     */
    data: ArchiveCreateManyInput | ArchiveCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArchiveIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Archive update
   */
  export type ArchiveUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Archive
     */
    select?: ArchiveSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Archive
     */
    omit?: ArchiveOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArchiveInclude<ExtArgs> | null
    /**
     * The data needed to update a Archive.
     */
    data: XOR<ArchiveUpdateInput, ArchiveUncheckedUpdateInput>
    /**
     * Choose, which Archive to update.
     */
    where: ArchiveWhereUniqueInput
  }

  /**
   * Archive updateMany
   */
  export type ArchiveUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Archives.
     */
    data: XOR<ArchiveUpdateManyMutationInput, ArchiveUncheckedUpdateManyInput>
    /**
     * Filter which Archives to update
     */
    where?: ArchiveWhereInput
    /**
     * Limit how many Archives to update.
     */
    limit?: number
  }

  /**
   * Archive updateManyAndReturn
   */
  export type ArchiveUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Archive
     */
    select?: ArchiveSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Archive
     */
    omit?: ArchiveOmit<ExtArgs> | null
    /**
     * The data used to update Archives.
     */
    data: XOR<ArchiveUpdateManyMutationInput, ArchiveUncheckedUpdateManyInput>
    /**
     * Filter which Archives to update
     */
    where?: ArchiveWhereInput
    /**
     * Limit how many Archives to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArchiveIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Archive upsert
   */
  export type ArchiveUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Archive
     */
    select?: ArchiveSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Archive
     */
    omit?: ArchiveOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArchiveInclude<ExtArgs> | null
    /**
     * The filter to search for the Archive to update in case it exists.
     */
    where: ArchiveWhereUniqueInput
    /**
     * In case the Archive found by the `where` argument doesn't exist, create a new Archive with this data.
     */
    create: XOR<ArchiveCreateInput, ArchiveUncheckedCreateInput>
    /**
     * In case the Archive was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ArchiveUpdateInput, ArchiveUncheckedUpdateInput>
  }

  /**
   * Archive delete
   */
  export type ArchiveDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Archive
     */
    select?: ArchiveSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Archive
     */
    omit?: ArchiveOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArchiveInclude<ExtArgs> | null
    /**
     * Filter which Archive to delete.
     */
    where: ArchiveWhereUniqueInput
  }

  /**
   * Archive deleteMany
   */
  export type ArchiveDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Archives to delete
     */
    where?: ArchiveWhereInput
    /**
     * Limit how many Archives to delete.
     */
    limit?: number
  }

  /**
   * Archive without action
   */
  export type ArchiveDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Archive
     */
    select?: ArchiveSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Archive
     */
    omit?: ArchiveOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArchiveInclude<ExtArgs> | null
  }


  /**
   * Model Server
   */

  export type AggregateServer = {
    _count: ServerCountAggregateOutputType | null
    _avg: ServerAvgAggregateOutputType | null
    _sum: ServerSumAggregateOutputType | null
    _min: ServerMinAggregateOutputType | null
    _max: ServerMaxAggregateOutputType | null
  }

  export type ServerAvgAggregateOutputType = {
    price: number | null
  }

  export type ServerSumAggregateOutputType = {
    price: number | null
  }

  export type ServerMinAggregateOutputType = {
    id: string | null
    name: string | null
    ip: string | null
    rootPassword: string | null
    forgePassword: string | null
    userId: string | null
    price: number | null
    active: boolean | null
    createdAt: Date | null
    expiredAt: Date | null
    assignedAt: Date | null
    renewalAt: Date | null
  }

  export type ServerMaxAggregateOutputType = {
    id: string | null
    name: string | null
    ip: string | null
    rootPassword: string | null
    forgePassword: string | null
    userId: string | null
    price: number | null
    active: boolean | null
    createdAt: Date | null
    expiredAt: Date | null
    assignedAt: Date | null
    renewalAt: Date | null
  }

  export type ServerCountAggregateOutputType = {
    id: number
    name: number
    ip: number
    rootPassword: number
    forgePassword: number
    userId: number
    price: number
    active: number
    createdAt: number
    expiredAt: number
    assignedAt: number
    renewalAt: number
    _all: number
  }


  export type ServerAvgAggregateInputType = {
    price?: true
  }

  export type ServerSumAggregateInputType = {
    price?: true
  }

  export type ServerMinAggregateInputType = {
    id?: true
    name?: true
    ip?: true
    rootPassword?: true
    forgePassword?: true
    userId?: true
    price?: true
    active?: true
    createdAt?: true
    expiredAt?: true
    assignedAt?: true
    renewalAt?: true
  }

  export type ServerMaxAggregateInputType = {
    id?: true
    name?: true
    ip?: true
    rootPassword?: true
    forgePassword?: true
    userId?: true
    price?: true
    active?: true
    createdAt?: true
    expiredAt?: true
    assignedAt?: true
    renewalAt?: true
  }

  export type ServerCountAggregateInputType = {
    id?: true
    name?: true
    ip?: true
    rootPassword?: true
    forgePassword?: true
    userId?: true
    price?: true
    active?: true
    createdAt?: true
    expiredAt?: true
    assignedAt?: true
    renewalAt?: true
    _all?: true
  }

  export type ServerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Server to aggregate.
     */
    where?: ServerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Servers to fetch.
     */
    orderBy?: ServerOrderByWithRelationInput | ServerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ServerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Servers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Servers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Servers
    **/
    _count?: true | ServerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ServerAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ServerSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ServerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ServerMaxAggregateInputType
  }

  export type GetServerAggregateType<T extends ServerAggregateArgs> = {
        [P in keyof T & keyof AggregateServer]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateServer[P]>
      : GetScalarType<T[P], AggregateServer[P]>
  }




  export type ServerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ServerWhereInput
    orderBy?: ServerOrderByWithAggregationInput | ServerOrderByWithAggregationInput[]
    by: ServerScalarFieldEnum[] | ServerScalarFieldEnum
    having?: ServerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ServerCountAggregateInputType | true
    _avg?: ServerAvgAggregateInputType
    _sum?: ServerSumAggregateInputType
    _min?: ServerMinAggregateInputType
    _max?: ServerMaxAggregateInputType
  }

  export type ServerGroupByOutputType = {
    id: string
    name: string
    ip: string
    rootPassword: string
    forgePassword: string
    userId: string | null
    price: number
    active: boolean
    createdAt: Date
    expiredAt: Date
    assignedAt: Date | null
    renewalAt: Date | null
    _count: ServerCountAggregateOutputType | null
    _avg: ServerAvgAggregateOutputType | null
    _sum: ServerSumAggregateOutputType | null
    _min: ServerMinAggregateOutputType | null
    _max: ServerMaxAggregateOutputType | null
  }

  type GetServerGroupByPayload<T extends ServerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ServerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ServerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ServerGroupByOutputType[P]>
            : GetScalarType<T[P], ServerGroupByOutputType[P]>
        }
      >
    >


  export type ServerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    ip?: boolean
    rootPassword?: boolean
    forgePassword?: boolean
    userId?: boolean
    price?: boolean
    active?: boolean
    createdAt?: boolean
    expiredAt?: boolean
    assignedAt?: boolean
    renewalAt?: boolean
    user?: boolean | Server$userArgs<ExtArgs>
    domains?: boolean | Server$domainsArgs<ExtArgs>
    _count?: boolean | ServerCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["server"]>

  export type ServerSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    ip?: boolean
    rootPassword?: boolean
    forgePassword?: boolean
    userId?: boolean
    price?: boolean
    active?: boolean
    createdAt?: boolean
    expiredAt?: boolean
    assignedAt?: boolean
    renewalAt?: boolean
    user?: boolean | Server$userArgs<ExtArgs>
  }, ExtArgs["result"]["server"]>

  export type ServerSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    ip?: boolean
    rootPassword?: boolean
    forgePassword?: boolean
    userId?: boolean
    price?: boolean
    active?: boolean
    createdAt?: boolean
    expiredAt?: boolean
    assignedAt?: boolean
    renewalAt?: boolean
    user?: boolean | Server$userArgs<ExtArgs>
  }, ExtArgs["result"]["server"]>

  export type ServerSelectScalar = {
    id?: boolean
    name?: boolean
    ip?: boolean
    rootPassword?: boolean
    forgePassword?: boolean
    userId?: boolean
    price?: boolean
    active?: boolean
    createdAt?: boolean
    expiredAt?: boolean
    assignedAt?: boolean
    renewalAt?: boolean
  }

  export type ServerOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "ip" | "rootPassword" | "forgePassword" | "userId" | "price" | "active" | "createdAt" | "expiredAt" | "assignedAt" | "renewalAt", ExtArgs["result"]["server"]>
  export type ServerInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | Server$userArgs<ExtArgs>
    domains?: boolean | Server$domainsArgs<ExtArgs>
    _count?: boolean | ServerCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ServerIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | Server$userArgs<ExtArgs>
  }
  export type ServerIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | Server$userArgs<ExtArgs>
  }

  export type $ServerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Server"
    objects: {
      user: Prisma.$UserPayload<ExtArgs> | null
      domains: Prisma.$DomainPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      ip: string
      rootPassword: string
      forgePassword: string
      userId: string | null
      price: number
      active: boolean
      createdAt: Date
      expiredAt: Date
      assignedAt: Date | null
      renewalAt: Date | null
    }, ExtArgs["result"]["server"]>
    composites: {}
  }

  type ServerGetPayload<S extends boolean | null | undefined | ServerDefaultArgs> = $Result.GetResult<Prisma.$ServerPayload, S>

  type ServerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ServerFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ServerCountAggregateInputType | true
    }

  export interface ServerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Server'], meta: { name: 'Server' } }
    /**
     * Find zero or one Server that matches the filter.
     * @param {ServerFindUniqueArgs} args - Arguments to find a Server
     * @example
     * // Get one Server
     * const server = await prisma.server.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ServerFindUniqueArgs>(args: SelectSubset<T, ServerFindUniqueArgs<ExtArgs>>): Prisma__ServerClient<$Result.GetResult<Prisma.$ServerPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Server that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ServerFindUniqueOrThrowArgs} args - Arguments to find a Server
     * @example
     * // Get one Server
     * const server = await prisma.server.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ServerFindUniqueOrThrowArgs>(args: SelectSubset<T, ServerFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ServerClient<$Result.GetResult<Prisma.$ServerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Server that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServerFindFirstArgs} args - Arguments to find a Server
     * @example
     * // Get one Server
     * const server = await prisma.server.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ServerFindFirstArgs>(args?: SelectSubset<T, ServerFindFirstArgs<ExtArgs>>): Prisma__ServerClient<$Result.GetResult<Prisma.$ServerPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Server that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServerFindFirstOrThrowArgs} args - Arguments to find a Server
     * @example
     * // Get one Server
     * const server = await prisma.server.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ServerFindFirstOrThrowArgs>(args?: SelectSubset<T, ServerFindFirstOrThrowArgs<ExtArgs>>): Prisma__ServerClient<$Result.GetResult<Prisma.$ServerPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Servers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServerFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Servers
     * const servers = await prisma.server.findMany()
     * 
     * // Get first 10 Servers
     * const servers = await prisma.server.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const serverWithIdOnly = await prisma.server.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ServerFindManyArgs>(args?: SelectSubset<T, ServerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ServerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Server.
     * @param {ServerCreateArgs} args - Arguments to create a Server.
     * @example
     * // Create one Server
     * const Server = await prisma.server.create({
     *   data: {
     *     // ... data to create a Server
     *   }
     * })
     * 
     */
    create<T extends ServerCreateArgs>(args: SelectSubset<T, ServerCreateArgs<ExtArgs>>): Prisma__ServerClient<$Result.GetResult<Prisma.$ServerPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Servers.
     * @param {ServerCreateManyArgs} args - Arguments to create many Servers.
     * @example
     * // Create many Servers
     * const server = await prisma.server.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ServerCreateManyArgs>(args?: SelectSubset<T, ServerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Servers and returns the data saved in the database.
     * @param {ServerCreateManyAndReturnArgs} args - Arguments to create many Servers.
     * @example
     * // Create many Servers
     * const server = await prisma.server.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Servers and only return the `id`
     * const serverWithIdOnly = await prisma.server.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ServerCreateManyAndReturnArgs>(args?: SelectSubset<T, ServerCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ServerPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Server.
     * @param {ServerDeleteArgs} args - Arguments to delete one Server.
     * @example
     * // Delete one Server
     * const Server = await prisma.server.delete({
     *   where: {
     *     // ... filter to delete one Server
     *   }
     * })
     * 
     */
    delete<T extends ServerDeleteArgs>(args: SelectSubset<T, ServerDeleteArgs<ExtArgs>>): Prisma__ServerClient<$Result.GetResult<Prisma.$ServerPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Server.
     * @param {ServerUpdateArgs} args - Arguments to update one Server.
     * @example
     * // Update one Server
     * const server = await prisma.server.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ServerUpdateArgs>(args: SelectSubset<T, ServerUpdateArgs<ExtArgs>>): Prisma__ServerClient<$Result.GetResult<Prisma.$ServerPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Servers.
     * @param {ServerDeleteManyArgs} args - Arguments to filter Servers to delete.
     * @example
     * // Delete a few Servers
     * const { count } = await prisma.server.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ServerDeleteManyArgs>(args?: SelectSubset<T, ServerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Servers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Servers
     * const server = await prisma.server.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ServerUpdateManyArgs>(args: SelectSubset<T, ServerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Servers and returns the data updated in the database.
     * @param {ServerUpdateManyAndReturnArgs} args - Arguments to update many Servers.
     * @example
     * // Update many Servers
     * const server = await prisma.server.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Servers and only return the `id`
     * const serverWithIdOnly = await prisma.server.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ServerUpdateManyAndReturnArgs>(args: SelectSubset<T, ServerUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ServerPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Server.
     * @param {ServerUpsertArgs} args - Arguments to update or create a Server.
     * @example
     * // Update or create a Server
     * const server = await prisma.server.upsert({
     *   create: {
     *     // ... data to create a Server
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Server we want to update
     *   }
     * })
     */
    upsert<T extends ServerUpsertArgs>(args: SelectSubset<T, ServerUpsertArgs<ExtArgs>>): Prisma__ServerClient<$Result.GetResult<Prisma.$ServerPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Servers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServerCountArgs} args - Arguments to filter Servers to count.
     * @example
     * // Count the number of Servers
     * const count = await prisma.server.count({
     *   where: {
     *     // ... the filter for the Servers we want to count
     *   }
     * })
    **/
    count<T extends ServerCountArgs>(
      args?: Subset<T, ServerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ServerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Server.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ServerAggregateArgs>(args: Subset<T, ServerAggregateArgs>): Prisma.PrismaPromise<GetServerAggregateType<T>>

    /**
     * Group by Server.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServerGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ServerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ServerGroupByArgs['orderBy'] }
        : { orderBy?: ServerGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ServerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetServerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Server model
   */
  readonly fields: ServerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Server.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ServerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends Server$userArgs<ExtArgs> = {}>(args?: Subset<T, Server$userArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    domains<T extends Server$domainsArgs<ExtArgs> = {}>(args?: Subset<T, Server$domainsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DomainPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Server model
   */
  interface ServerFieldRefs {
    readonly id: FieldRef<"Server", 'String'>
    readonly name: FieldRef<"Server", 'String'>
    readonly ip: FieldRef<"Server", 'String'>
    readonly rootPassword: FieldRef<"Server", 'String'>
    readonly forgePassword: FieldRef<"Server", 'String'>
    readonly userId: FieldRef<"Server", 'String'>
    readonly price: FieldRef<"Server", 'Float'>
    readonly active: FieldRef<"Server", 'Boolean'>
    readonly createdAt: FieldRef<"Server", 'DateTime'>
    readonly expiredAt: FieldRef<"Server", 'DateTime'>
    readonly assignedAt: FieldRef<"Server", 'DateTime'>
    readonly renewalAt: FieldRef<"Server", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Server findUnique
   */
  export type ServerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Server
     */
    select?: ServerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Server
     */
    omit?: ServerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServerInclude<ExtArgs> | null
    /**
     * Filter, which Server to fetch.
     */
    where: ServerWhereUniqueInput
  }

  /**
   * Server findUniqueOrThrow
   */
  export type ServerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Server
     */
    select?: ServerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Server
     */
    omit?: ServerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServerInclude<ExtArgs> | null
    /**
     * Filter, which Server to fetch.
     */
    where: ServerWhereUniqueInput
  }

  /**
   * Server findFirst
   */
  export type ServerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Server
     */
    select?: ServerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Server
     */
    omit?: ServerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServerInclude<ExtArgs> | null
    /**
     * Filter, which Server to fetch.
     */
    where?: ServerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Servers to fetch.
     */
    orderBy?: ServerOrderByWithRelationInput | ServerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Servers.
     */
    cursor?: ServerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Servers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Servers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Servers.
     */
    distinct?: ServerScalarFieldEnum | ServerScalarFieldEnum[]
  }

  /**
   * Server findFirstOrThrow
   */
  export type ServerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Server
     */
    select?: ServerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Server
     */
    omit?: ServerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServerInclude<ExtArgs> | null
    /**
     * Filter, which Server to fetch.
     */
    where?: ServerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Servers to fetch.
     */
    orderBy?: ServerOrderByWithRelationInput | ServerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Servers.
     */
    cursor?: ServerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Servers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Servers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Servers.
     */
    distinct?: ServerScalarFieldEnum | ServerScalarFieldEnum[]
  }

  /**
   * Server findMany
   */
  export type ServerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Server
     */
    select?: ServerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Server
     */
    omit?: ServerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServerInclude<ExtArgs> | null
    /**
     * Filter, which Servers to fetch.
     */
    where?: ServerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Servers to fetch.
     */
    orderBy?: ServerOrderByWithRelationInput | ServerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Servers.
     */
    cursor?: ServerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Servers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Servers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Servers.
     */
    distinct?: ServerScalarFieldEnum | ServerScalarFieldEnum[]
  }

  /**
   * Server create
   */
  export type ServerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Server
     */
    select?: ServerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Server
     */
    omit?: ServerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServerInclude<ExtArgs> | null
    /**
     * The data needed to create a Server.
     */
    data: XOR<ServerCreateInput, ServerUncheckedCreateInput>
  }

  /**
   * Server createMany
   */
  export type ServerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Servers.
     */
    data: ServerCreateManyInput | ServerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Server createManyAndReturn
   */
  export type ServerCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Server
     */
    select?: ServerSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Server
     */
    omit?: ServerOmit<ExtArgs> | null
    /**
     * The data used to create many Servers.
     */
    data: ServerCreateManyInput | ServerCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServerIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Server update
   */
  export type ServerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Server
     */
    select?: ServerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Server
     */
    omit?: ServerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServerInclude<ExtArgs> | null
    /**
     * The data needed to update a Server.
     */
    data: XOR<ServerUpdateInput, ServerUncheckedUpdateInput>
    /**
     * Choose, which Server to update.
     */
    where: ServerWhereUniqueInput
  }

  /**
   * Server updateMany
   */
  export type ServerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Servers.
     */
    data: XOR<ServerUpdateManyMutationInput, ServerUncheckedUpdateManyInput>
    /**
     * Filter which Servers to update
     */
    where?: ServerWhereInput
    /**
     * Limit how many Servers to update.
     */
    limit?: number
  }

  /**
   * Server updateManyAndReturn
   */
  export type ServerUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Server
     */
    select?: ServerSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Server
     */
    omit?: ServerOmit<ExtArgs> | null
    /**
     * The data used to update Servers.
     */
    data: XOR<ServerUpdateManyMutationInput, ServerUncheckedUpdateManyInput>
    /**
     * Filter which Servers to update
     */
    where?: ServerWhereInput
    /**
     * Limit how many Servers to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServerIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Server upsert
   */
  export type ServerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Server
     */
    select?: ServerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Server
     */
    omit?: ServerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServerInclude<ExtArgs> | null
    /**
     * The filter to search for the Server to update in case it exists.
     */
    where: ServerWhereUniqueInput
    /**
     * In case the Server found by the `where` argument doesn't exist, create a new Server with this data.
     */
    create: XOR<ServerCreateInput, ServerUncheckedCreateInput>
    /**
     * In case the Server was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ServerUpdateInput, ServerUncheckedUpdateInput>
  }

  /**
   * Server delete
   */
  export type ServerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Server
     */
    select?: ServerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Server
     */
    omit?: ServerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServerInclude<ExtArgs> | null
    /**
     * Filter which Server to delete.
     */
    where: ServerWhereUniqueInput
  }

  /**
   * Server deleteMany
   */
  export type ServerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Servers to delete
     */
    where?: ServerWhereInput
    /**
     * Limit how many Servers to delete.
     */
    limit?: number
  }

  /**
   * Server.user
   */
  export type Server$userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * Server.domains
   */
  export type Server$domainsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Domain
     */
    select?: DomainSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Domain
     */
    omit?: DomainOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DomainInclude<ExtArgs> | null
    where?: DomainWhereInput
    orderBy?: DomainOrderByWithRelationInput | DomainOrderByWithRelationInput[]
    cursor?: DomainWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DomainScalarFieldEnum | DomainScalarFieldEnum[]
  }

  /**
   * Server without action
   */
  export type ServerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Server
     */
    select?: ServerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Server
     */
    omit?: ServerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServerInclude<ExtArgs> | null
  }


  /**
   * Model InternalDomain
   */

  export type AggregateInternalDomain = {
    _count: InternalDomainCountAggregateOutputType | null
    _min: InternalDomainMinAggregateOutputType | null
    _max: InternalDomainMaxAggregateOutputType | null
  }

  export type InternalDomainMinAggregateOutputType = {
    domainId: string | null
  }

  export type InternalDomainMaxAggregateOutputType = {
    domainId: string | null
  }

  export type InternalDomainCountAggregateOutputType = {
    domainId: number
    _all: number
  }


  export type InternalDomainMinAggregateInputType = {
    domainId?: true
  }

  export type InternalDomainMaxAggregateInputType = {
    domainId?: true
  }

  export type InternalDomainCountAggregateInputType = {
    domainId?: true
    _all?: true
  }

  export type InternalDomainAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which InternalDomain to aggregate.
     */
    where?: InternalDomainWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InternalDomains to fetch.
     */
    orderBy?: InternalDomainOrderByWithRelationInput | InternalDomainOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: InternalDomainWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InternalDomains from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InternalDomains.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned InternalDomains
    **/
    _count?: true | InternalDomainCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: InternalDomainMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: InternalDomainMaxAggregateInputType
  }

  export type GetInternalDomainAggregateType<T extends InternalDomainAggregateArgs> = {
        [P in keyof T & keyof AggregateInternalDomain]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateInternalDomain[P]>
      : GetScalarType<T[P], AggregateInternalDomain[P]>
  }




  export type InternalDomainGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InternalDomainWhereInput
    orderBy?: InternalDomainOrderByWithAggregationInput | InternalDomainOrderByWithAggregationInput[]
    by: InternalDomainScalarFieldEnum[] | InternalDomainScalarFieldEnum
    having?: InternalDomainScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: InternalDomainCountAggregateInputType | true
    _min?: InternalDomainMinAggregateInputType
    _max?: InternalDomainMaxAggregateInputType
  }

  export type InternalDomainGroupByOutputType = {
    domainId: string
    _count: InternalDomainCountAggregateOutputType | null
    _min: InternalDomainMinAggregateOutputType | null
    _max: InternalDomainMaxAggregateOutputType | null
  }

  type GetInternalDomainGroupByPayload<T extends InternalDomainGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<InternalDomainGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof InternalDomainGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], InternalDomainGroupByOutputType[P]>
            : GetScalarType<T[P], InternalDomainGroupByOutputType[P]>
        }
      >
    >


  export type InternalDomainSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    domainId?: boolean
    domain?: boolean | DomainDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["internalDomain"]>

  export type InternalDomainSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    domainId?: boolean
    domain?: boolean | DomainDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["internalDomain"]>

  export type InternalDomainSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    domainId?: boolean
    domain?: boolean | DomainDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["internalDomain"]>

  export type InternalDomainSelectScalar = {
    domainId?: boolean
  }

  export type InternalDomainOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"domainId", ExtArgs["result"]["internalDomain"]>
  export type InternalDomainInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    domain?: boolean | DomainDefaultArgs<ExtArgs>
  }
  export type InternalDomainIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    domain?: boolean | DomainDefaultArgs<ExtArgs>
  }
  export type InternalDomainIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    domain?: boolean | DomainDefaultArgs<ExtArgs>
  }

  export type $InternalDomainPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "InternalDomain"
    objects: {
      domain: Prisma.$DomainPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      domainId: string
    }, ExtArgs["result"]["internalDomain"]>
    composites: {}
  }

  type InternalDomainGetPayload<S extends boolean | null | undefined | InternalDomainDefaultArgs> = $Result.GetResult<Prisma.$InternalDomainPayload, S>

  type InternalDomainCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<InternalDomainFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: InternalDomainCountAggregateInputType | true
    }

  export interface InternalDomainDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['InternalDomain'], meta: { name: 'InternalDomain' } }
    /**
     * Find zero or one InternalDomain that matches the filter.
     * @param {InternalDomainFindUniqueArgs} args - Arguments to find a InternalDomain
     * @example
     * // Get one InternalDomain
     * const internalDomain = await prisma.internalDomain.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends InternalDomainFindUniqueArgs>(args: SelectSubset<T, InternalDomainFindUniqueArgs<ExtArgs>>): Prisma__InternalDomainClient<$Result.GetResult<Prisma.$InternalDomainPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one InternalDomain that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {InternalDomainFindUniqueOrThrowArgs} args - Arguments to find a InternalDomain
     * @example
     * // Get one InternalDomain
     * const internalDomain = await prisma.internalDomain.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends InternalDomainFindUniqueOrThrowArgs>(args: SelectSubset<T, InternalDomainFindUniqueOrThrowArgs<ExtArgs>>): Prisma__InternalDomainClient<$Result.GetResult<Prisma.$InternalDomainPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first InternalDomain that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InternalDomainFindFirstArgs} args - Arguments to find a InternalDomain
     * @example
     * // Get one InternalDomain
     * const internalDomain = await prisma.internalDomain.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends InternalDomainFindFirstArgs>(args?: SelectSubset<T, InternalDomainFindFirstArgs<ExtArgs>>): Prisma__InternalDomainClient<$Result.GetResult<Prisma.$InternalDomainPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first InternalDomain that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InternalDomainFindFirstOrThrowArgs} args - Arguments to find a InternalDomain
     * @example
     * // Get one InternalDomain
     * const internalDomain = await prisma.internalDomain.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends InternalDomainFindFirstOrThrowArgs>(args?: SelectSubset<T, InternalDomainFindFirstOrThrowArgs<ExtArgs>>): Prisma__InternalDomainClient<$Result.GetResult<Prisma.$InternalDomainPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more InternalDomains that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InternalDomainFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all InternalDomains
     * const internalDomains = await prisma.internalDomain.findMany()
     * 
     * // Get first 10 InternalDomains
     * const internalDomains = await prisma.internalDomain.findMany({ take: 10 })
     * 
     * // Only select the `domainId`
     * const internalDomainWithDomainIdOnly = await prisma.internalDomain.findMany({ select: { domainId: true } })
     * 
     */
    findMany<T extends InternalDomainFindManyArgs>(args?: SelectSubset<T, InternalDomainFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InternalDomainPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a InternalDomain.
     * @param {InternalDomainCreateArgs} args - Arguments to create a InternalDomain.
     * @example
     * // Create one InternalDomain
     * const InternalDomain = await prisma.internalDomain.create({
     *   data: {
     *     // ... data to create a InternalDomain
     *   }
     * })
     * 
     */
    create<T extends InternalDomainCreateArgs>(args: SelectSubset<T, InternalDomainCreateArgs<ExtArgs>>): Prisma__InternalDomainClient<$Result.GetResult<Prisma.$InternalDomainPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many InternalDomains.
     * @param {InternalDomainCreateManyArgs} args - Arguments to create many InternalDomains.
     * @example
     * // Create many InternalDomains
     * const internalDomain = await prisma.internalDomain.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends InternalDomainCreateManyArgs>(args?: SelectSubset<T, InternalDomainCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many InternalDomains and returns the data saved in the database.
     * @param {InternalDomainCreateManyAndReturnArgs} args - Arguments to create many InternalDomains.
     * @example
     * // Create many InternalDomains
     * const internalDomain = await prisma.internalDomain.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many InternalDomains and only return the `domainId`
     * const internalDomainWithDomainIdOnly = await prisma.internalDomain.createManyAndReturn({
     *   select: { domainId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends InternalDomainCreateManyAndReturnArgs>(args?: SelectSubset<T, InternalDomainCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InternalDomainPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a InternalDomain.
     * @param {InternalDomainDeleteArgs} args - Arguments to delete one InternalDomain.
     * @example
     * // Delete one InternalDomain
     * const InternalDomain = await prisma.internalDomain.delete({
     *   where: {
     *     // ... filter to delete one InternalDomain
     *   }
     * })
     * 
     */
    delete<T extends InternalDomainDeleteArgs>(args: SelectSubset<T, InternalDomainDeleteArgs<ExtArgs>>): Prisma__InternalDomainClient<$Result.GetResult<Prisma.$InternalDomainPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one InternalDomain.
     * @param {InternalDomainUpdateArgs} args - Arguments to update one InternalDomain.
     * @example
     * // Update one InternalDomain
     * const internalDomain = await prisma.internalDomain.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends InternalDomainUpdateArgs>(args: SelectSubset<T, InternalDomainUpdateArgs<ExtArgs>>): Prisma__InternalDomainClient<$Result.GetResult<Prisma.$InternalDomainPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more InternalDomains.
     * @param {InternalDomainDeleteManyArgs} args - Arguments to filter InternalDomains to delete.
     * @example
     * // Delete a few InternalDomains
     * const { count } = await prisma.internalDomain.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends InternalDomainDeleteManyArgs>(args?: SelectSubset<T, InternalDomainDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more InternalDomains.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InternalDomainUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many InternalDomains
     * const internalDomain = await prisma.internalDomain.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends InternalDomainUpdateManyArgs>(args: SelectSubset<T, InternalDomainUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more InternalDomains and returns the data updated in the database.
     * @param {InternalDomainUpdateManyAndReturnArgs} args - Arguments to update many InternalDomains.
     * @example
     * // Update many InternalDomains
     * const internalDomain = await prisma.internalDomain.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more InternalDomains and only return the `domainId`
     * const internalDomainWithDomainIdOnly = await prisma.internalDomain.updateManyAndReturn({
     *   select: { domainId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends InternalDomainUpdateManyAndReturnArgs>(args: SelectSubset<T, InternalDomainUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InternalDomainPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one InternalDomain.
     * @param {InternalDomainUpsertArgs} args - Arguments to update or create a InternalDomain.
     * @example
     * // Update or create a InternalDomain
     * const internalDomain = await prisma.internalDomain.upsert({
     *   create: {
     *     // ... data to create a InternalDomain
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the InternalDomain we want to update
     *   }
     * })
     */
    upsert<T extends InternalDomainUpsertArgs>(args: SelectSubset<T, InternalDomainUpsertArgs<ExtArgs>>): Prisma__InternalDomainClient<$Result.GetResult<Prisma.$InternalDomainPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of InternalDomains.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InternalDomainCountArgs} args - Arguments to filter InternalDomains to count.
     * @example
     * // Count the number of InternalDomains
     * const count = await prisma.internalDomain.count({
     *   where: {
     *     // ... the filter for the InternalDomains we want to count
     *   }
     * })
    **/
    count<T extends InternalDomainCountArgs>(
      args?: Subset<T, InternalDomainCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], InternalDomainCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a InternalDomain.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InternalDomainAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends InternalDomainAggregateArgs>(args: Subset<T, InternalDomainAggregateArgs>): Prisma.PrismaPromise<GetInternalDomainAggregateType<T>>

    /**
     * Group by InternalDomain.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InternalDomainGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends InternalDomainGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: InternalDomainGroupByArgs['orderBy'] }
        : { orderBy?: InternalDomainGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, InternalDomainGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInternalDomainGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the InternalDomain model
   */
  readonly fields: InternalDomainFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for InternalDomain.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__InternalDomainClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    domain<T extends DomainDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DomainDefaultArgs<ExtArgs>>): Prisma__DomainClient<$Result.GetResult<Prisma.$DomainPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the InternalDomain model
   */
  interface InternalDomainFieldRefs {
    readonly domainId: FieldRef<"InternalDomain", 'String'>
  }
    

  // Custom InputTypes
  /**
   * InternalDomain findUnique
   */
  export type InternalDomainFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InternalDomain
     */
    select?: InternalDomainSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InternalDomain
     */
    omit?: InternalDomainOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InternalDomainInclude<ExtArgs> | null
    /**
     * Filter, which InternalDomain to fetch.
     */
    where: InternalDomainWhereUniqueInput
  }

  /**
   * InternalDomain findUniqueOrThrow
   */
  export type InternalDomainFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InternalDomain
     */
    select?: InternalDomainSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InternalDomain
     */
    omit?: InternalDomainOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InternalDomainInclude<ExtArgs> | null
    /**
     * Filter, which InternalDomain to fetch.
     */
    where: InternalDomainWhereUniqueInput
  }

  /**
   * InternalDomain findFirst
   */
  export type InternalDomainFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InternalDomain
     */
    select?: InternalDomainSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InternalDomain
     */
    omit?: InternalDomainOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InternalDomainInclude<ExtArgs> | null
    /**
     * Filter, which InternalDomain to fetch.
     */
    where?: InternalDomainWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InternalDomains to fetch.
     */
    orderBy?: InternalDomainOrderByWithRelationInput | InternalDomainOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for InternalDomains.
     */
    cursor?: InternalDomainWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InternalDomains from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InternalDomains.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of InternalDomains.
     */
    distinct?: InternalDomainScalarFieldEnum | InternalDomainScalarFieldEnum[]
  }

  /**
   * InternalDomain findFirstOrThrow
   */
  export type InternalDomainFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InternalDomain
     */
    select?: InternalDomainSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InternalDomain
     */
    omit?: InternalDomainOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InternalDomainInclude<ExtArgs> | null
    /**
     * Filter, which InternalDomain to fetch.
     */
    where?: InternalDomainWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InternalDomains to fetch.
     */
    orderBy?: InternalDomainOrderByWithRelationInput | InternalDomainOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for InternalDomains.
     */
    cursor?: InternalDomainWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InternalDomains from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InternalDomains.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of InternalDomains.
     */
    distinct?: InternalDomainScalarFieldEnum | InternalDomainScalarFieldEnum[]
  }

  /**
   * InternalDomain findMany
   */
  export type InternalDomainFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InternalDomain
     */
    select?: InternalDomainSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InternalDomain
     */
    omit?: InternalDomainOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InternalDomainInclude<ExtArgs> | null
    /**
     * Filter, which InternalDomains to fetch.
     */
    where?: InternalDomainWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InternalDomains to fetch.
     */
    orderBy?: InternalDomainOrderByWithRelationInput | InternalDomainOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing InternalDomains.
     */
    cursor?: InternalDomainWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InternalDomains from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InternalDomains.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of InternalDomains.
     */
    distinct?: InternalDomainScalarFieldEnum | InternalDomainScalarFieldEnum[]
  }

  /**
   * InternalDomain create
   */
  export type InternalDomainCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InternalDomain
     */
    select?: InternalDomainSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InternalDomain
     */
    omit?: InternalDomainOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InternalDomainInclude<ExtArgs> | null
    /**
     * The data needed to create a InternalDomain.
     */
    data: XOR<InternalDomainCreateInput, InternalDomainUncheckedCreateInput>
  }

  /**
   * InternalDomain createMany
   */
  export type InternalDomainCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many InternalDomains.
     */
    data: InternalDomainCreateManyInput | InternalDomainCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * InternalDomain createManyAndReturn
   */
  export type InternalDomainCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InternalDomain
     */
    select?: InternalDomainSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the InternalDomain
     */
    omit?: InternalDomainOmit<ExtArgs> | null
    /**
     * The data used to create many InternalDomains.
     */
    data: InternalDomainCreateManyInput | InternalDomainCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InternalDomainIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * InternalDomain update
   */
  export type InternalDomainUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InternalDomain
     */
    select?: InternalDomainSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InternalDomain
     */
    omit?: InternalDomainOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InternalDomainInclude<ExtArgs> | null
    /**
     * The data needed to update a InternalDomain.
     */
    data: XOR<InternalDomainUpdateInput, InternalDomainUncheckedUpdateInput>
    /**
     * Choose, which InternalDomain to update.
     */
    where: InternalDomainWhereUniqueInput
  }

  /**
   * InternalDomain updateMany
   */
  export type InternalDomainUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update InternalDomains.
     */
    data: XOR<InternalDomainUpdateManyMutationInput, InternalDomainUncheckedUpdateManyInput>
    /**
     * Filter which InternalDomains to update
     */
    where?: InternalDomainWhereInput
    /**
     * Limit how many InternalDomains to update.
     */
    limit?: number
  }

  /**
   * InternalDomain updateManyAndReturn
   */
  export type InternalDomainUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InternalDomain
     */
    select?: InternalDomainSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the InternalDomain
     */
    omit?: InternalDomainOmit<ExtArgs> | null
    /**
     * The data used to update InternalDomains.
     */
    data: XOR<InternalDomainUpdateManyMutationInput, InternalDomainUncheckedUpdateManyInput>
    /**
     * Filter which InternalDomains to update
     */
    where?: InternalDomainWhereInput
    /**
     * Limit how many InternalDomains to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InternalDomainIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * InternalDomain upsert
   */
  export type InternalDomainUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InternalDomain
     */
    select?: InternalDomainSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InternalDomain
     */
    omit?: InternalDomainOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InternalDomainInclude<ExtArgs> | null
    /**
     * The filter to search for the InternalDomain to update in case it exists.
     */
    where: InternalDomainWhereUniqueInput
    /**
     * In case the InternalDomain found by the `where` argument doesn't exist, create a new InternalDomain with this data.
     */
    create: XOR<InternalDomainCreateInput, InternalDomainUncheckedCreateInput>
    /**
     * In case the InternalDomain was found with the provided `where` argument, update it with this data.
     */
    update: XOR<InternalDomainUpdateInput, InternalDomainUncheckedUpdateInput>
  }

  /**
   * InternalDomain delete
   */
  export type InternalDomainDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InternalDomain
     */
    select?: InternalDomainSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InternalDomain
     */
    omit?: InternalDomainOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InternalDomainInclude<ExtArgs> | null
    /**
     * Filter which InternalDomain to delete.
     */
    where: InternalDomainWhereUniqueInput
  }

  /**
   * InternalDomain deleteMany
   */
  export type InternalDomainDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which InternalDomains to delete
     */
    where?: InternalDomainWhereInput
    /**
     * Limit how many InternalDomains to delete.
     */
    limit?: number
  }

  /**
   * InternalDomain without action
   */
  export type InternalDomainDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InternalDomain
     */
    select?: InternalDomainSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InternalDomain
     */
    omit?: InternalDomainOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InternalDomainInclude<ExtArgs> | null
  }


  /**
   * Model ExternalDomain
   */

  export type AggregateExternalDomain = {
    _count: ExternalDomainCountAggregateOutputType | null
    _min: ExternalDomainMinAggregateOutputType | null
    _max: ExternalDomainMaxAggregateOutputType | null
  }

  export type ExternalDomainMinAggregateOutputType = {
    domainId: string | null
  }

  export type ExternalDomainMaxAggregateOutputType = {
    domainId: string | null
  }

  export type ExternalDomainCountAggregateOutputType = {
    domainId: number
    _all: number
  }


  export type ExternalDomainMinAggregateInputType = {
    domainId?: true
  }

  export type ExternalDomainMaxAggregateInputType = {
    domainId?: true
  }

  export type ExternalDomainCountAggregateInputType = {
    domainId?: true
    _all?: true
  }

  export type ExternalDomainAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ExternalDomain to aggregate.
     */
    where?: ExternalDomainWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ExternalDomains to fetch.
     */
    orderBy?: ExternalDomainOrderByWithRelationInput | ExternalDomainOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ExternalDomainWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ExternalDomains from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ExternalDomains.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ExternalDomains
    **/
    _count?: true | ExternalDomainCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ExternalDomainMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ExternalDomainMaxAggregateInputType
  }

  export type GetExternalDomainAggregateType<T extends ExternalDomainAggregateArgs> = {
        [P in keyof T & keyof AggregateExternalDomain]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateExternalDomain[P]>
      : GetScalarType<T[P], AggregateExternalDomain[P]>
  }




  export type ExternalDomainGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ExternalDomainWhereInput
    orderBy?: ExternalDomainOrderByWithAggregationInput | ExternalDomainOrderByWithAggregationInput[]
    by: ExternalDomainScalarFieldEnum[] | ExternalDomainScalarFieldEnum
    having?: ExternalDomainScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ExternalDomainCountAggregateInputType | true
    _min?: ExternalDomainMinAggregateInputType
    _max?: ExternalDomainMaxAggregateInputType
  }

  export type ExternalDomainGroupByOutputType = {
    domainId: string
    _count: ExternalDomainCountAggregateOutputType | null
    _min: ExternalDomainMinAggregateOutputType | null
    _max: ExternalDomainMaxAggregateOutputType | null
  }

  type GetExternalDomainGroupByPayload<T extends ExternalDomainGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ExternalDomainGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ExternalDomainGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ExternalDomainGroupByOutputType[P]>
            : GetScalarType<T[P], ExternalDomainGroupByOutputType[P]>
        }
      >
    >


  export type ExternalDomainSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    domainId?: boolean
    domain?: boolean | DomainDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["externalDomain"]>

  export type ExternalDomainSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    domainId?: boolean
    domain?: boolean | DomainDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["externalDomain"]>

  export type ExternalDomainSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    domainId?: boolean
    domain?: boolean | DomainDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["externalDomain"]>

  export type ExternalDomainSelectScalar = {
    domainId?: boolean
  }

  export type ExternalDomainOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"domainId", ExtArgs["result"]["externalDomain"]>
  export type ExternalDomainInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    domain?: boolean | DomainDefaultArgs<ExtArgs>
  }
  export type ExternalDomainIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    domain?: boolean | DomainDefaultArgs<ExtArgs>
  }
  export type ExternalDomainIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    domain?: boolean | DomainDefaultArgs<ExtArgs>
  }

  export type $ExternalDomainPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ExternalDomain"
    objects: {
      domain: Prisma.$DomainPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      domainId: string
    }, ExtArgs["result"]["externalDomain"]>
    composites: {}
  }

  type ExternalDomainGetPayload<S extends boolean | null | undefined | ExternalDomainDefaultArgs> = $Result.GetResult<Prisma.$ExternalDomainPayload, S>

  type ExternalDomainCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ExternalDomainFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ExternalDomainCountAggregateInputType | true
    }

  export interface ExternalDomainDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ExternalDomain'], meta: { name: 'ExternalDomain' } }
    /**
     * Find zero or one ExternalDomain that matches the filter.
     * @param {ExternalDomainFindUniqueArgs} args - Arguments to find a ExternalDomain
     * @example
     * // Get one ExternalDomain
     * const externalDomain = await prisma.externalDomain.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ExternalDomainFindUniqueArgs>(args: SelectSubset<T, ExternalDomainFindUniqueArgs<ExtArgs>>): Prisma__ExternalDomainClient<$Result.GetResult<Prisma.$ExternalDomainPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ExternalDomain that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ExternalDomainFindUniqueOrThrowArgs} args - Arguments to find a ExternalDomain
     * @example
     * // Get one ExternalDomain
     * const externalDomain = await prisma.externalDomain.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ExternalDomainFindUniqueOrThrowArgs>(args: SelectSubset<T, ExternalDomainFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ExternalDomainClient<$Result.GetResult<Prisma.$ExternalDomainPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ExternalDomain that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExternalDomainFindFirstArgs} args - Arguments to find a ExternalDomain
     * @example
     * // Get one ExternalDomain
     * const externalDomain = await prisma.externalDomain.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ExternalDomainFindFirstArgs>(args?: SelectSubset<T, ExternalDomainFindFirstArgs<ExtArgs>>): Prisma__ExternalDomainClient<$Result.GetResult<Prisma.$ExternalDomainPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ExternalDomain that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExternalDomainFindFirstOrThrowArgs} args - Arguments to find a ExternalDomain
     * @example
     * // Get one ExternalDomain
     * const externalDomain = await prisma.externalDomain.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ExternalDomainFindFirstOrThrowArgs>(args?: SelectSubset<T, ExternalDomainFindFirstOrThrowArgs<ExtArgs>>): Prisma__ExternalDomainClient<$Result.GetResult<Prisma.$ExternalDomainPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ExternalDomains that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExternalDomainFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ExternalDomains
     * const externalDomains = await prisma.externalDomain.findMany()
     * 
     * // Get first 10 ExternalDomains
     * const externalDomains = await prisma.externalDomain.findMany({ take: 10 })
     * 
     * // Only select the `domainId`
     * const externalDomainWithDomainIdOnly = await prisma.externalDomain.findMany({ select: { domainId: true } })
     * 
     */
    findMany<T extends ExternalDomainFindManyArgs>(args?: SelectSubset<T, ExternalDomainFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExternalDomainPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ExternalDomain.
     * @param {ExternalDomainCreateArgs} args - Arguments to create a ExternalDomain.
     * @example
     * // Create one ExternalDomain
     * const ExternalDomain = await prisma.externalDomain.create({
     *   data: {
     *     // ... data to create a ExternalDomain
     *   }
     * })
     * 
     */
    create<T extends ExternalDomainCreateArgs>(args: SelectSubset<T, ExternalDomainCreateArgs<ExtArgs>>): Prisma__ExternalDomainClient<$Result.GetResult<Prisma.$ExternalDomainPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ExternalDomains.
     * @param {ExternalDomainCreateManyArgs} args - Arguments to create many ExternalDomains.
     * @example
     * // Create many ExternalDomains
     * const externalDomain = await prisma.externalDomain.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ExternalDomainCreateManyArgs>(args?: SelectSubset<T, ExternalDomainCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ExternalDomains and returns the data saved in the database.
     * @param {ExternalDomainCreateManyAndReturnArgs} args - Arguments to create many ExternalDomains.
     * @example
     * // Create many ExternalDomains
     * const externalDomain = await prisma.externalDomain.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ExternalDomains and only return the `domainId`
     * const externalDomainWithDomainIdOnly = await prisma.externalDomain.createManyAndReturn({
     *   select: { domainId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ExternalDomainCreateManyAndReturnArgs>(args?: SelectSubset<T, ExternalDomainCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExternalDomainPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ExternalDomain.
     * @param {ExternalDomainDeleteArgs} args - Arguments to delete one ExternalDomain.
     * @example
     * // Delete one ExternalDomain
     * const ExternalDomain = await prisma.externalDomain.delete({
     *   where: {
     *     // ... filter to delete one ExternalDomain
     *   }
     * })
     * 
     */
    delete<T extends ExternalDomainDeleteArgs>(args: SelectSubset<T, ExternalDomainDeleteArgs<ExtArgs>>): Prisma__ExternalDomainClient<$Result.GetResult<Prisma.$ExternalDomainPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ExternalDomain.
     * @param {ExternalDomainUpdateArgs} args - Arguments to update one ExternalDomain.
     * @example
     * // Update one ExternalDomain
     * const externalDomain = await prisma.externalDomain.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ExternalDomainUpdateArgs>(args: SelectSubset<T, ExternalDomainUpdateArgs<ExtArgs>>): Prisma__ExternalDomainClient<$Result.GetResult<Prisma.$ExternalDomainPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ExternalDomains.
     * @param {ExternalDomainDeleteManyArgs} args - Arguments to filter ExternalDomains to delete.
     * @example
     * // Delete a few ExternalDomains
     * const { count } = await prisma.externalDomain.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ExternalDomainDeleteManyArgs>(args?: SelectSubset<T, ExternalDomainDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ExternalDomains.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExternalDomainUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ExternalDomains
     * const externalDomain = await prisma.externalDomain.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ExternalDomainUpdateManyArgs>(args: SelectSubset<T, ExternalDomainUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ExternalDomains and returns the data updated in the database.
     * @param {ExternalDomainUpdateManyAndReturnArgs} args - Arguments to update many ExternalDomains.
     * @example
     * // Update many ExternalDomains
     * const externalDomain = await prisma.externalDomain.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ExternalDomains and only return the `domainId`
     * const externalDomainWithDomainIdOnly = await prisma.externalDomain.updateManyAndReturn({
     *   select: { domainId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ExternalDomainUpdateManyAndReturnArgs>(args: SelectSubset<T, ExternalDomainUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExternalDomainPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ExternalDomain.
     * @param {ExternalDomainUpsertArgs} args - Arguments to update or create a ExternalDomain.
     * @example
     * // Update or create a ExternalDomain
     * const externalDomain = await prisma.externalDomain.upsert({
     *   create: {
     *     // ... data to create a ExternalDomain
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ExternalDomain we want to update
     *   }
     * })
     */
    upsert<T extends ExternalDomainUpsertArgs>(args: SelectSubset<T, ExternalDomainUpsertArgs<ExtArgs>>): Prisma__ExternalDomainClient<$Result.GetResult<Prisma.$ExternalDomainPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ExternalDomains.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExternalDomainCountArgs} args - Arguments to filter ExternalDomains to count.
     * @example
     * // Count the number of ExternalDomains
     * const count = await prisma.externalDomain.count({
     *   where: {
     *     // ... the filter for the ExternalDomains we want to count
     *   }
     * })
    **/
    count<T extends ExternalDomainCountArgs>(
      args?: Subset<T, ExternalDomainCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ExternalDomainCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ExternalDomain.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExternalDomainAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ExternalDomainAggregateArgs>(args: Subset<T, ExternalDomainAggregateArgs>): Prisma.PrismaPromise<GetExternalDomainAggregateType<T>>

    /**
     * Group by ExternalDomain.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExternalDomainGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ExternalDomainGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ExternalDomainGroupByArgs['orderBy'] }
        : { orderBy?: ExternalDomainGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ExternalDomainGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetExternalDomainGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ExternalDomain model
   */
  readonly fields: ExternalDomainFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ExternalDomain.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ExternalDomainClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    domain<T extends DomainDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DomainDefaultArgs<ExtArgs>>): Prisma__DomainClient<$Result.GetResult<Prisma.$DomainPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ExternalDomain model
   */
  interface ExternalDomainFieldRefs {
    readonly domainId: FieldRef<"ExternalDomain", 'String'>
  }
    

  // Custom InputTypes
  /**
   * ExternalDomain findUnique
   */
  export type ExternalDomainFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExternalDomain
     */
    select?: ExternalDomainSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExternalDomain
     */
    omit?: ExternalDomainOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExternalDomainInclude<ExtArgs> | null
    /**
     * Filter, which ExternalDomain to fetch.
     */
    where: ExternalDomainWhereUniqueInput
  }

  /**
   * ExternalDomain findUniqueOrThrow
   */
  export type ExternalDomainFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExternalDomain
     */
    select?: ExternalDomainSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExternalDomain
     */
    omit?: ExternalDomainOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExternalDomainInclude<ExtArgs> | null
    /**
     * Filter, which ExternalDomain to fetch.
     */
    where: ExternalDomainWhereUniqueInput
  }

  /**
   * ExternalDomain findFirst
   */
  export type ExternalDomainFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExternalDomain
     */
    select?: ExternalDomainSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExternalDomain
     */
    omit?: ExternalDomainOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExternalDomainInclude<ExtArgs> | null
    /**
     * Filter, which ExternalDomain to fetch.
     */
    where?: ExternalDomainWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ExternalDomains to fetch.
     */
    orderBy?: ExternalDomainOrderByWithRelationInput | ExternalDomainOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ExternalDomains.
     */
    cursor?: ExternalDomainWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ExternalDomains from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ExternalDomains.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ExternalDomains.
     */
    distinct?: ExternalDomainScalarFieldEnum | ExternalDomainScalarFieldEnum[]
  }

  /**
   * ExternalDomain findFirstOrThrow
   */
  export type ExternalDomainFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExternalDomain
     */
    select?: ExternalDomainSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExternalDomain
     */
    omit?: ExternalDomainOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExternalDomainInclude<ExtArgs> | null
    /**
     * Filter, which ExternalDomain to fetch.
     */
    where?: ExternalDomainWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ExternalDomains to fetch.
     */
    orderBy?: ExternalDomainOrderByWithRelationInput | ExternalDomainOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ExternalDomains.
     */
    cursor?: ExternalDomainWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ExternalDomains from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ExternalDomains.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ExternalDomains.
     */
    distinct?: ExternalDomainScalarFieldEnum | ExternalDomainScalarFieldEnum[]
  }

  /**
   * ExternalDomain findMany
   */
  export type ExternalDomainFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExternalDomain
     */
    select?: ExternalDomainSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExternalDomain
     */
    omit?: ExternalDomainOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExternalDomainInclude<ExtArgs> | null
    /**
     * Filter, which ExternalDomains to fetch.
     */
    where?: ExternalDomainWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ExternalDomains to fetch.
     */
    orderBy?: ExternalDomainOrderByWithRelationInput | ExternalDomainOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ExternalDomains.
     */
    cursor?: ExternalDomainWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ExternalDomains from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ExternalDomains.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ExternalDomains.
     */
    distinct?: ExternalDomainScalarFieldEnum | ExternalDomainScalarFieldEnum[]
  }

  /**
   * ExternalDomain create
   */
  export type ExternalDomainCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExternalDomain
     */
    select?: ExternalDomainSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExternalDomain
     */
    omit?: ExternalDomainOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExternalDomainInclude<ExtArgs> | null
    /**
     * The data needed to create a ExternalDomain.
     */
    data: XOR<ExternalDomainCreateInput, ExternalDomainUncheckedCreateInput>
  }

  /**
   * ExternalDomain createMany
   */
  export type ExternalDomainCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ExternalDomains.
     */
    data: ExternalDomainCreateManyInput | ExternalDomainCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ExternalDomain createManyAndReturn
   */
  export type ExternalDomainCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExternalDomain
     */
    select?: ExternalDomainSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ExternalDomain
     */
    omit?: ExternalDomainOmit<ExtArgs> | null
    /**
     * The data used to create many ExternalDomains.
     */
    data: ExternalDomainCreateManyInput | ExternalDomainCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExternalDomainIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ExternalDomain update
   */
  export type ExternalDomainUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExternalDomain
     */
    select?: ExternalDomainSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExternalDomain
     */
    omit?: ExternalDomainOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExternalDomainInclude<ExtArgs> | null
    /**
     * The data needed to update a ExternalDomain.
     */
    data: XOR<ExternalDomainUpdateInput, ExternalDomainUncheckedUpdateInput>
    /**
     * Choose, which ExternalDomain to update.
     */
    where: ExternalDomainWhereUniqueInput
  }

  /**
   * ExternalDomain updateMany
   */
  export type ExternalDomainUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ExternalDomains.
     */
    data: XOR<ExternalDomainUpdateManyMutationInput, ExternalDomainUncheckedUpdateManyInput>
    /**
     * Filter which ExternalDomains to update
     */
    where?: ExternalDomainWhereInput
    /**
     * Limit how many ExternalDomains to update.
     */
    limit?: number
  }

  /**
   * ExternalDomain updateManyAndReturn
   */
  export type ExternalDomainUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExternalDomain
     */
    select?: ExternalDomainSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ExternalDomain
     */
    omit?: ExternalDomainOmit<ExtArgs> | null
    /**
     * The data used to update ExternalDomains.
     */
    data: XOR<ExternalDomainUpdateManyMutationInput, ExternalDomainUncheckedUpdateManyInput>
    /**
     * Filter which ExternalDomains to update
     */
    where?: ExternalDomainWhereInput
    /**
     * Limit how many ExternalDomains to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExternalDomainIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ExternalDomain upsert
   */
  export type ExternalDomainUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExternalDomain
     */
    select?: ExternalDomainSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExternalDomain
     */
    omit?: ExternalDomainOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExternalDomainInclude<ExtArgs> | null
    /**
     * The filter to search for the ExternalDomain to update in case it exists.
     */
    where: ExternalDomainWhereUniqueInput
    /**
     * In case the ExternalDomain found by the `where` argument doesn't exist, create a new ExternalDomain with this data.
     */
    create: XOR<ExternalDomainCreateInput, ExternalDomainUncheckedCreateInput>
    /**
     * In case the ExternalDomain was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ExternalDomainUpdateInput, ExternalDomainUncheckedUpdateInput>
  }

  /**
   * ExternalDomain delete
   */
  export type ExternalDomainDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExternalDomain
     */
    select?: ExternalDomainSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExternalDomain
     */
    omit?: ExternalDomainOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExternalDomainInclude<ExtArgs> | null
    /**
     * Filter which ExternalDomain to delete.
     */
    where: ExternalDomainWhereUniqueInput
  }

  /**
   * ExternalDomain deleteMany
   */
  export type ExternalDomainDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ExternalDomains to delete
     */
    where?: ExternalDomainWhereInput
    /**
     * Limit how many ExternalDomains to delete.
     */
    limit?: number
  }

  /**
   * ExternalDomain without action
   */
  export type ExternalDomainDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExternalDomain
     */
    select?: ExternalDomainSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExternalDomain
     */
    omit?: ExternalDomainOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExternalDomainInclude<ExtArgs> | null
  }


  /**
   * Model Domain
   */

  export type AggregateDomain = {
    _count: DomainCountAggregateOutputType | null
    _avg: DomainAvgAggregateOutputType | null
    _sum: DomainSumAggregateOutputType | null
    _min: DomainMinAggregateOutputType | null
    _max: DomainMaxAggregateOutputType | null
  }

  export type DomainAvgAggregateOutputType = {
    price: number | null
  }

  export type DomainSumAggregateOutputType = {
    price: number | null
  }

  export type DomainMinAggregateOutputType = {
    id: string | null
    name: string | null
    type: $Enums.DomainType | null
    status: $Enums.DomainStatus | null
    serverId: string | null
    price: number | null
    repoId: string | null
    sshUrl: string | null
    hasSSL: boolean | null
    campaign: string | null
    deploymentType: $Enums.DeploymentType | null
  }

  export type DomainMaxAggregateOutputType = {
    id: string | null
    name: string | null
    type: $Enums.DomainType | null
    status: $Enums.DomainStatus | null
    serverId: string | null
    price: number | null
    repoId: string | null
    sshUrl: string | null
    hasSSL: boolean | null
    campaign: string | null
    deploymentType: $Enums.DeploymentType | null
  }

  export type DomainCountAggregateOutputType = {
    id: number
    name: number
    type: number
    status: number
    serverId: number
    price: number
    repoId: number
    sshUrl: number
    hasSSL: number
    campaign: number
    deploymentType: number
    _all: number
  }


  export type DomainAvgAggregateInputType = {
    price?: true
  }

  export type DomainSumAggregateInputType = {
    price?: true
  }

  export type DomainMinAggregateInputType = {
    id?: true
    name?: true
    type?: true
    status?: true
    serverId?: true
    price?: true
    repoId?: true
    sshUrl?: true
    hasSSL?: true
    campaign?: true
    deploymentType?: true
  }

  export type DomainMaxAggregateInputType = {
    id?: true
    name?: true
    type?: true
    status?: true
    serverId?: true
    price?: true
    repoId?: true
    sshUrl?: true
    hasSSL?: true
    campaign?: true
    deploymentType?: true
  }

  export type DomainCountAggregateInputType = {
    id?: true
    name?: true
    type?: true
    status?: true
    serverId?: true
    price?: true
    repoId?: true
    sshUrl?: true
    hasSSL?: true
    campaign?: true
    deploymentType?: true
    _all?: true
  }

  export type DomainAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Domain to aggregate.
     */
    where?: DomainWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Domains to fetch.
     */
    orderBy?: DomainOrderByWithRelationInput | DomainOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DomainWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Domains from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Domains.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Domains
    **/
    _count?: true | DomainCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DomainAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DomainSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DomainMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DomainMaxAggregateInputType
  }

  export type GetDomainAggregateType<T extends DomainAggregateArgs> = {
        [P in keyof T & keyof AggregateDomain]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDomain[P]>
      : GetScalarType<T[P], AggregateDomain[P]>
  }




  export type DomainGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DomainWhereInput
    orderBy?: DomainOrderByWithAggregationInput | DomainOrderByWithAggregationInput[]
    by: DomainScalarFieldEnum[] | DomainScalarFieldEnum
    having?: DomainScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DomainCountAggregateInputType | true
    _avg?: DomainAvgAggregateInputType
    _sum?: DomainSumAggregateInputType
    _min?: DomainMinAggregateInputType
    _max?: DomainMaxAggregateInputType
  }

  export type DomainGroupByOutputType = {
    id: string
    name: string
    type: $Enums.DomainType
    status: $Enums.DomainStatus
    serverId: string | null
    price: number
    repoId: string
    sshUrl: string
    hasSSL: boolean
    campaign: string
    deploymentType: $Enums.DeploymentType
    _count: DomainCountAggregateOutputType | null
    _avg: DomainAvgAggregateOutputType | null
    _sum: DomainSumAggregateOutputType | null
    _min: DomainMinAggregateOutputType | null
    _max: DomainMaxAggregateOutputType | null
  }

  type GetDomainGroupByPayload<T extends DomainGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DomainGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DomainGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DomainGroupByOutputType[P]>
            : GetScalarType<T[P], DomainGroupByOutputType[P]>
        }
      >
    >


  export type DomainSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    type?: boolean
    status?: boolean
    serverId?: boolean
    price?: boolean
    repoId?: boolean
    sshUrl?: boolean
    hasSSL?: boolean
    campaign?: boolean
    deploymentType?: boolean
    server?: boolean | Domain$serverArgs<ExtArgs>
    internal?: boolean | Domain$internalArgs<ExtArgs>
    external?: boolean | Domain$externalArgs<ExtArgs>
  }, ExtArgs["result"]["domain"]>

  export type DomainSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    type?: boolean
    status?: boolean
    serverId?: boolean
    price?: boolean
    repoId?: boolean
    sshUrl?: boolean
    hasSSL?: boolean
    campaign?: boolean
    deploymentType?: boolean
    server?: boolean | Domain$serverArgs<ExtArgs>
  }, ExtArgs["result"]["domain"]>

  export type DomainSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    type?: boolean
    status?: boolean
    serverId?: boolean
    price?: boolean
    repoId?: boolean
    sshUrl?: boolean
    hasSSL?: boolean
    campaign?: boolean
    deploymentType?: boolean
    server?: boolean | Domain$serverArgs<ExtArgs>
  }, ExtArgs["result"]["domain"]>

  export type DomainSelectScalar = {
    id?: boolean
    name?: boolean
    type?: boolean
    status?: boolean
    serverId?: boolean
    price?: boolean
    repoId?: boolean
    sshUrl?: boolean
    hasSSL?: boolean
    campaign?: boolean
    deploymentType?: boolean
  }

  export type DomainOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "type" | "status" | "serverId" | "price" | "repoId" | "sshUrl" | "hasSSL" | "campaign" | "deploymentType", ExtArgs["result"]["domain"]>
  export type DomainInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    server?: boolean | Domain$serverArgs<ExtArgs>
    internal?: boolean | Domain$internalArgs<ExtArgs>
    external?: boolean | Domain$externalArgs<ExtArgs>
  }
  export type DomainIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    server?: boolean | Domain$serverArgs<ExtArgs>
  }
  export type DomainIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    server?: boolean | Domain$serverArgs<ExtArgs>
  }

  export type $DomainPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Domain"
    objects: {
      server: Prisma.$ServerPayload<ExtArgs> | null
      internal: Prisma.$InternalDomainPayload<ExtArgs> | null
      external: Prisma.$ExternalDomainPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      type: $Enums.DomainType
      status: $Enums.DomainStatus
      serverId: string | null
      price: number
      repoId: string
      sshUrl: string
      hasSSL: boolean
      campaign: string
      deploymentType: $Enums.DeploymentType
    }, ExtArgs["result"]["domain"]>
    composites: {}
  }

  type DomainGetPayload<S extends boolean | null | undefined | DomainDefaultArgs> = $Result.GetResult<Prisma.$DomainPayload, S>

  type DomainCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DomainFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DomainCountAggregateInputType | true
    }

  export interface DomainDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Domain'], meta: { name: 'Domain' } }
    /**
     * Find zero or one Domain that matches the filter.
     * @param {DomainFindUniqueArgs} args - Arguments to find a Domain
     * @example
     * // Get one Domain
     * const domain = await prisma.domain.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DomainFindUniqueArgs>(args: SelectSubset<T, DomainFindUniqueArgs<ExtArgs>>): Prisma__DomainClient<$Result.GetResult<Prisma.$DomainPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Domain that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DomainFindUniqueOrThrowArgs} args - Arguments to find a Domain
     * @example
     * // Get one Domain
     * const domain = await prisma.domain.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DomainFindUniqueOrThrowArgs>(args: SelectSubset<T, DomainFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DomainClient<$Result.GetResult<Prisma.$DomainPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Domain that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DomainFindFirstArgs} args - Arguments to find a Domain
     * @example
     * // Get one Domain
     * const domain = await prisma.domain.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DomainFindFirstArgs>(args?: SelectSubset<T, DomainFindFirstArgs<ExtArgs>>): Prisma__DomainClient<$Result.GetResult<Prisma.$DomainPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Domain that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DomainFindFirstOrThrowArgs} args - Arguments to find a Domain
     * @example
     * // Get one Domain
     * const domain = await prisma.domain.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DomainFindFirstOrThrowArgs>(args?: SelectSubset<T, DomainFindFirstOrThrowArgs<ExtArgs>>): Prisma__DomainClient<$Result.GetResult<Prisma.$DomainPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Domains that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DomainFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Domains
     * const domains = await prisma.domain.findMany()
     * 
     * // Get first 10 Domains
     * const domains = await prisma.domain.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const domainWithIdOnly = await prisma.domain.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DomainFindManyArgs>(args?: SelectSubset<T, DomainFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DomainPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Domain.
     * @param {DomainCreateArgs} args - Arguments to create a Domain.
     * @example
     * // Create one Domain
     * const Domain = await prisma.domain.create({
     *   data: {
     *     // ... data to create a Domain
     *   }
     * })
     * 
     */
    create<T extends DomainCreateArgs>(args: SelectSubset<T, DomainCreateArgs<ExtArgs>>): Prisma__DomainClient<$Result.GetResult<Prisma.$DomainPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Domains.
     * @param {DomainCreateManyArgs} args - Arguments to create many Domains.
     * @example
     * // Create many Domains
     * const domain = await prisma.domain.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DomainCreateManyArgs>(args?: SelectSubset<T, DomainCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Domains and returns the data saved in the database.
     * @param {DomainCreateManyAndReturnArgs} args - Arguments to create many Domains.
     * @example
     * // Create many Domains
     * const domain = await prisma.domain.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Domains and only return the `id`
     * const domainWithIdOnly = await prisma.domain.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DomainCreateManyAndReturnArgs>(args?: SelectSubset<T, DomainCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DomainPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Domain.
     * @param {DomainDeleteArgs} args - Arguments to delete one Domain.
     * @example
     * // Delete one Domain
     * const Domain = await prisma.domain.delete({
     *   where: {
     *     // ... filter to delete one Domain
     *   }
     * })
     * 
     */
    delete<T extends DomainDeleteArgs>(args: SelectSubset<T, DomainDeleteArgs<ExtArgs>>): Prisma__DomainClient<$Result.GetResult<Prisma.$DomainPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Domain.
     * @param {DomainUpdateArgs} args - Arguments to update one Domain.
     * @example
     * // Update one Domain
     * const domain = await prisma.domain.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DomainUpdateArgs>(args: SelectSubset<T, DomainUpdateArgs<ExtArgs>>): Prisma__DomainClient<$Result.GetResult<Prisma.$DomainPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Domains.
     * @param {DomainDeleteManyArgs} args - Arguments to filter Domains to delete.
     * @example
     * // Delete a few Domains
     * const { count } = await prisma.domain.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DomainDeleteManyArgs>(args?: SelectSubset<T, DomainDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Domains.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DomainUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Domains
     * const domain = await prisma.domain.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DomainUpdateManyArgs>(args: SelectSubset<T, DomainUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Domains and returns the data updated in the database.
     * @param {DomainUpdateManyAndReturnArgs} args - Arguments to update many Domains.
     * @example
     * // Update many Domains
     * const domain = await prisma.domain.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Domains and only return the `id`
     * const domainWithIdOnly = await prisma.domain.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends DomainUpdateManyAndReturnArgs>(args: SelectSubset<T, DomainUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DomainPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Domain.
     * @param {DomainUpsertArgs} args - Arguments to update or create a Domain.
     * @example
     * // Update or create a Domain
     * const domain = await prisma.domain.upsert({
     *   create: {
     *     // ... data to create a Domain
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Domain we want to update
     *   }
     * })
     */
    upsert<T extends DomainUpsertArgs>(args: SelectSubset<T, DomainUpsertArgs<ExtArgs>>): Prisma__DomainClient<$Result.GetResult<Prisma.$DomainPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Domains.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DomainCountArgs} args - Arguments to filter Domains to count.
     * @example
     * // Count the number of Domains
     * const count = await prisma.domain.count({
     *   where: {
     *     // ... the filter for the Domains we want to count
     *   }
     * })
    **/
    count<T extends DomainCountArgs>(
      args?: Subset<T, DomainCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DomainCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Domain.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DomainAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DomainAggregateArgs>(args: Subset<T, DomainAggregateArgs>): Prisma.PrismaPromise<GetDomainAggregateType<T>>

    /**
     * Group by Domain.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DomainGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DomainGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DomainGroupByArgs['orderBy'] }
        : { orderBy?: DomainGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DomainGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDomainGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Domain model
   */
  readonly fields: DomainFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Domain.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DomainClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    server<T extends Domain$serverArgs<ExtArgs> = {}>(args?: Subset<T, Domain$serverArgs<ExtArgs>>): Prisma__ServerClient<$Result.GetResult<Prisma.$ServerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    internal<T extends Domain$internalArgs<ExtArgs> = {}>(args?: Subset<T, Domain$internalArgs<ExtArgs>>): Prisma__InternalDomainClient<$Result.GetResult<Prisma.$InternalDomainPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    external<T extends Domain$externalArgs<ExtArgs> = {}>(args?: Subset<T, Domain$externalArgs<ExtArgs>>): Prisma__ExternalDomainClient<$Result.GetResult<Prisma.$ExternalDomainPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Domain model
   */
  interface DomainFieldRefs {
    readonly id: FieldRef<"Domain", 'String'>
    readonly name: FieldRef<"Domain", 'String'>
    readonly type: FieldRef<"Domain", 'DomainType'>
    readonly status: FieldRef<"Domain", 'DomainStatus'>
    readonly serverId: FieldRef<"Domain", 'String'>
    readonly price: FieldRef<"Domain", 'Float'>
    readonly repoId: FieldRef<"Domain", 'String'>
    readonly sshUrl: FieldRef<"Domain", 'String'>
    readonly hasSSL: FieldRef<"Domain", 'Boolean'>
    readonly campaign: FieldRef<"Domain", 'String'>
    readonly deploymentType: FieldRef<"Domain", 'DeploymentType'>
  }
    

  // Custom InputTypes
  /**
   * Domain findUnique
   */
  export type DomainFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Domain
     */
    select?: DomainSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Domain
     */
    omit?: DomainOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DomainInclude<ExtArgs> | null
    /**
     * Filter, which Domain to fetch.
     */
    where: DomainWhereUniqueInput
  }

  /**
   * Domain findUniqueOrThrow
   */
  export type DomainFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Domain
     */
    select?: DomainSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Domain
     */
    omit?: DomainOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DomainInclude<ExtArgs> | null
    /**
     * Filter, which Domain to fetch.
     */
    where: DomainWhereUniqueInput
  }

  /**
   * Domain findFirst
   */
  export type DomainFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Domain
     */
    select?: DomainSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Domain
     */
    omit?: DomainOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DomainInclude<ExtArgs> | null
    /**
     * Filter, which Domain to fetch.
     */
    where?: DomainWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Domains to fetch.
     */
    orderBy?: DomainOrderByWithRelationInput | DomainOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Domains.
     */
    cursor?: DomainWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Domains from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Domains.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Domains.
     */
    distinct?: DomainScalarFieldEnum | DomainScalarFieldEnum[]
  }

  /**
   * Domain findFirstOrThrow
   */
  export type DomainFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Domain
     */
    select?: DomainSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Domain
     */
    omit?: DomainOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DomainInclude<ExtArgs> | null
    /**
     * Filter, which Domain to fetch.
     */
    where?: DomainWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Domains to fetch.
     */
    orderBy?: DomainOrderByWithRelationInput | DomainOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Domains.
     */
    cursor?: DomainWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Domains from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Domains.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Domains.
     */
    distinct?: DomainScalarFieldEnum | DomainScalarFieldEnum[]
  }

  /**
   * Domain findMany
   */
  export type DomainFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Domain
     */
    select?: DomainSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Domain
     */
    omit?: DomainOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DomainInclude<ExtArgs> | null
    /**
     * Filter, which Domains to fetch.
     */
    where?: DomainWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Domains to fetch.
     */
    orderBy?: DomainOrderByWithRelationInput | DomainOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Domains.
     */
    cursor?: DomainWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Domains from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Domains.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Domains.
     */
    distinct?: DomainScalarFieldEnum | DomainScalarFieldEnum[]
  }

  /**
   * Domain create
   */
  export type DomainCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Domain
     */
    select?: DomainSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Domain
     */
    omit?: DomainOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DomainInclude<ExtArgs> | null
    /**
     * The data needed to create a Domain.
     */
    data: XOR<DomainCreateInput, DomainUncheckedCreateInput>
  }

  /**
   * Domain createMany
   */
  export type DomainCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Domains.
     */
    data: DomainCreateManyInput | DomainCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Domain createManyAndReturn
   */
  export type DomainCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Domain
     */
    select?: DomainSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Domain
     */
    omit?: DomainOmit<ExtArgs> | null
    /**
     * The data used to create many Domains.
     */
    data: DomainCreateManyInput | DomainCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DomainIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Domain update
   */
  export type DomainUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Domain
     */
    select?: DomainSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Domain
     */
    omit?: DomainOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DomainInclude<ExtArgs> | null
    /**
     * The data needed to update a Domain.
     */
    data: XOR<DomainUpdateInput, DomainUncheckedUpdateInput>
    /**
     * Choose, which Domain to update.
     */
    where: DomainWhereUniqueInput
  }

  /**
   * Domain updateMany
   */
  export type DomainUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Domains.
     */
    data: XOR<DomainUpdateManyMutationInput, DomainUncheckedUpdateManyInput>
    /**
     * Filter which Domains to update
     */
    where?: DomainWhereInput
    /**
     * Limit how many Domains to update.
     */
    limit?: number
  }

  /**
   * Domain updateManyAndReturn
   */
  export type DomainUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Domain
     */
    select?: DomainSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Domain
     */
    omit?: DomainOmit<ExtArgs> | null
    /**
     * The data used to update Domains.
     */
    data: XOR<DomainUpdateManyMutationInput, DomainUncheckedUpdateManyInput>
    /**
     * Filter which Domains to update
     */
    where?: DomainWhereInput
    /**
     * Limit how many Domains to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DomainIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Domain upsert
   */
  export type DomainUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Domain
     */
    select?: DomainSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Domain
     */
    omit?: DomainOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DomainInclude<ExtArgs> | null
    /**
     * The filter to search for the Domain to update in case it exists.
     */
    where: DomainWhereUniqueInput
    /**
     * In case the Domain found by the `where` argument doesn't exist, create a new Domain with this data.
     */
    create: XOR<DomainCreateInput, DomainUncheckedCreateInput>
    /**
     * In case the Domain was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DomainUpdateInput, DomainUncheckedUpdateInput>
  }

  /**
   * Domain delete
   */
  export type DomainDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Domain
     */
    select?: DomainSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Domain
     */
    omit?: DomainOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DomainInclude<ExtArgs> | null
    /**
     * Filter which Domain to delete.
     */
    where: DomainWhereUniqueInput
  }

  /**
   * Domain deleteMany
   */
  export type DomainDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Domains to delete
     */
    where?: DomainWhereInput
    /**
     * Limit how many Domains to delete.
     */
    limit?: number
  }

  /**
   * Domain.server
   */
  export type Domain$serverArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Server
     */
    select?: ServerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Server
     */
    omit?: ServerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServerInclude<ExtArgs> | null
    where?: ServerWhereInput
  }

  /**
   * Domain.internal
   */
  export type Domain$internalArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InternalDomain
     */
    select?: InternalDomainSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InternalDomain
     */
    omit?: InternalDomainOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InternalDomainInclude<ExtArgs> | null
    where?: InternalDomainWhereInput
  }

  /**
   * Domain.external
   */
  export type Domain$externalArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExternalDomain
     */
    select?: ExternalDomainSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExternalDomain
     */
    omit?: ExternalDomainOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExternalDomainInclude<ExtArgs> | null
    where?: ExternalDomainWhereInput
  }

  /**
   * Domain without action
   */
  export type DomainDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Domain
     */
    select?: DomainSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Domain
     */
    omit?: DomainOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DomainInclude<ExtArgs> | null
  }


  /**
   * Model ForbiddenWord
   */

  export type AggregateForbiddenWord = {
    _count: ForbiddenWordCountAggregateOutputType | null
    _min: ForbiddenWordMinAggregateOutputType | null
    _max: ForbiddenWordMaxAggregateOutputType | null
  }

  export type ForbiddenWordMinAggregateOutputType = {
    id: string | null
    word: string | null
    isActive: boolean | null
    createdAt: Date | null
  }

  export type ForbiddenWordMaxAggregateOutputType = {
    id: string | null
    word: string | null
    isActive: boolean | null
    createdAt: Date | null
  }

  export type ForbiddenWordCountAggregateOutputType = {
    id: number
    word: number
    isActive: number
    createdAt: number
    _all: number
  }


  export type ForbiddenWordMinAggregateInputType = {
    id?: true
    word?: true
    isActive?: true
    createdAt?: true
  }

  export type ForbiddenWordMaxAggregateInputType = {
    id?: true
    word?: true
    isActive?: true
    createdAt?: true
  }

  export type ForbiddenWordCountAggregateInputType = {
    id?: true
    word?: true
    isActive?: true
    createdAt?: true
    _all?: true
  }

  export type ForbiddenWordAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ForbiddenWord to aggregate.
     */
    where?: ForbiddenWordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ForbiddenWords to fetch.
     */
    orderBy?: ForbiddenWordOrderByWithRelationInput | ForbiddenWordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ForbiddenWordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ForbiddenWords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ForbiddenWords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ForbiddenWords
    **/
    _count?: true | ForbiddenWordCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ForbiddenWordMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ForbiddenWordMaxAggregateInputType
  }

  export type GetForbiddenWordAggregateType<T extends ForbiddenWordAggregateArgs> = {
        [P in keyof T & keyof AggregateForbiddenWord]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateForbiddenWord[P]>
      : GetScalarType<T[P], AggregateForbiddenWord[P]>
  }




  export type ForbiddenWordGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ForbiddenWordWhereInput
    orderBy?: ForbiddenWordOrderByWithAggregationInput | ForbiddenWordOrderByWithAggregationInput[]
    by: ForbiddenWordScalarFieldEnum[] | ForbiddenWordScalarFieldEnum
    having?: ForbiddenWordScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ForbiddenWordCountAggregateInputType | true
    _min?: ForbiddenWordMinAggregateInputType
    _max?: ForbiddenWordMaxAggregateInputType
  }

  export type ForbiddenWordGroupByOutputType = {
    id: string
    word: string
    isActive: boolean
    createdAt: Date
    _count: ForbiddenWordCountAggregateOutputType | null
    _min: ForbiddenWordMinAggregateOutputType | null
    _max: ForbiddenWordMaxAggregateOutputType | null
  }

  type GetForbiddenWordGroupByPayload<T extends ForbiddenWordGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ForbiddenWordGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ForbiddenWordGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ForbiddenWordGroupByOutputType[P]>
            : GetScalarType<T[P], ForbiddenWordGroupByOutputType[P]>
        }
      >
    >


  export type ForbiddenWordSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    word?: boolean
    isActive?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["forbiddenWord"]>

  export type ForbiddenWordSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    word?: boolean
    isActive?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["forbiddenWord"]>

  export type ForbiddenWordSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    word?: boolean
    isActive?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["forbiddenWord"]>

  export type ForbiddenWordSelectScalar = {
    id?: boolean
    word?: boolean
    isActive?: boolean
    createdAt?: boolean
  }

  export type ForbiddenWordOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "word" | "isActive" | "createdAt", ExtArgs["result"]["forbiddenWord"]>

  export type $ForbiddenWordPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ForbiddenWord"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      word: string
      isActive: boolean
      createdAt: Date
    }, ExtArgs["result"]["forbiddenWord"]>
    composites: {}
  }

  type ForbiddenWordGetPayload<S extends boolean | null | undefined | ForbiddenWordDefaultArgs> = $Result.GetResult<Prisma.$ForbiddenWordPayload, S>

  type ForbiddenWordCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ForbiddenWordFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ForbiddenWordCountAggregateInputType | true
    }

  export interface ForbiddenWordDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ForbiddenWord'], meta: { name: 'ForbiddenWord' } }
    /**
     * Find zero or one ForbiddenWord that matches the filter.
     * @param {ForbiddenWordFindUniqueArgs} args - Arguments to find a ForbiddenWord
     * @example
     * // Get one ForbiddenWord
     * const forbiddenWord = await prisma.forbiddenWord.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ForbiddenWordFindUniqueArgs>(args: SelectSubset<T, ForbiddenWordFindUniqueArgs<ExtArgs>>): Prisma__ForbiddenWordClient<$Result.GetResult<Prisma.$ForbiddenWordPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ForbiddenWord that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ForbiddenWordFindUniqueOrThrowArgs} args - Arguments to find a ForbiddenWord
     * @example
     * // Get one ForbiddenWord
     * const forbiddenWord = await prisma.forbiddenWord.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ForbiddenWordFindUniqueOrThrowArgs>(args: SelectSubset<T, ForbiddenWordFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ForbiddenWordClient<$Result.GetResult<Prisma.$ForbiddenWordPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ForbiddenWord that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ForbiddenWordFindFirstArgs} args - Arguments to find a ForbiddenWord
     * @example
     * // Get one ForbiddenWord
     * const forbiddenWord = await prisma.forbiddenWord.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ForbiddenWordFindFirstArgs>(args?: SelectSubset<T, ForbiddenWordFindFirstArgs<ExtArgs>>): Prisma__ForbiddenWordClient<$Result.GetResult<Prisma.$ForbiddenWordPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ForbiddenWord that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ForbiddenWordFindFirstOrThrowArgs} args - Arguments to find a ForbiddenWord
     * @example
     * // Get one ForbiddenWord
     * const forbiddenWord = await prisma.forbiddenWord.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ForbiddenWordFindFirstOrThrowArgs>(args?: SelectSubset<T, ForbiddenWordFindFirstOrThrowArgs<ExtArgs>>): Prisma__ForbiddenWordClient<$Result.GetResult<Prisma.$ForbiddenWordPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ForbiddenWords that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ForbiddenWordFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ForbiddenWords
     * const forbiddenWords = await prisma.forbiddenWord.findMany()
     * 
     * // Get first 10 ForbiddenWords
     * const forbiddenWords = await prisma.forbiddenWord.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const forbiddenWordWithIdOnly = await prisma.forbiddenWord.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ForbiddenWordFindManyArgs>(args?: SelectSubset<T, ForbiddenWordFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ForbiddenWordPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ForbiddenWord.
     * @param {ForbiddenWordCreateArgs} args - Arguments to create a ForbiddenWord.
     * @example
     * // Create one ForbiddenWord
     * const ForbiddenWord = await prisma.forbiddenWord.create({
     *   data: {
     *     // ... data to create a ForbiddenWord
     *   }
     * })
     * 
     */
    create<T extends ForbiddenWordCreateArgs>(args: SelectSubset<T, ForbiddenWordCreateArgs<ExtArgs>>): Prisma__ForbiddenWordClient<$Result.GetResult<Prisma.$ForbiddenWordPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ForbiddenWords.
     * @param {ForbiddenWordCreateManyArgs} args - Arguments to create many ForbiddenWords.
     * @example
     * // Create many ForbiddenWords
     * const forbiddenWord = await prisma.forbiddenWord.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ForbiddenWordCreateManyArgs>(args?: SelectSubset<T, ForbiddenWordCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ForbiddenWords and returns the data saved in the database.
     * @param {ForbiddenWordCreateManyAndReturnArgs} args - Arguments to create many ForbiddenWords.
     * @example
     * // Create many ForbiddenWords
     * const forbiddenWord = await prisma.forbiddenWord.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ForbiddenWords and only return the `id`
     * const forbiddenWordWithIdOnly = await prisma.forbiddenWord.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ForbiddenWordCreateManyAndReturnArgs>(args?: SelectSubset<T, ForbiddenWordCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ForbiddenWordPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ForbiddenWord.
     * @param {ForbiddenWordDeleteArgs} args - Arguments to delete one ForbiddenWord.
     * @example
     * // Delete one ForbiddenWord
     * const ForbiddenWord = await prisma.forbiddenWord.delete({
     *   where: {
     *     // ... filter to delete one ForbiddenWord
     *   }
     * })
     * 
     */
    delete<T extends ForbiddenWordDeleteArgs>(args: SelectSubset<T, ForbiddenWordDeleteArgs<ExtArgs>>): Prisma__ForbiddenWordClient<$Result.GetResult<Prisma.$ForbiddenWordPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ForbiddenWord.
     * @param {ForbiddenWordUpdateArgs} args - Arguments to update one ForbiddenWord.
     * @example
     * // Update one ForbiddenWord
     * const forbiddenWord = await prisma.forbiddenWord.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ForbiddenWordUpdateArgs>(args: SelectSubset<T, ForbiddenWordUpdateArgs<ExtArgs>>): Prisma__ForbiddenWordClient<$Result.GetResult<Prisma.$ForbiddenWordPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ForbiddenWords.
     * @param {ForbiddenWordDeleteManyArgs} args - Arguments to filter ForbiddenWords to delete.
     * @example
     * // Delete a few ForbiddenWords
     * const { count } = await prisma.forbiddenWord.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ForbiddenWordDeleteManyArgs>(args?: SelectSubset<T, ForbiddenWordDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ForbiddenWords.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ForbiddenWordUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ForbiddenWords
     * const forbiddenWord = await prisma.forbiddenWord.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ForbiddenWordUpdateManyArgs>(args: SelectSubset<T, ForbiddenWordUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ForbiddenWords and returns the data updated in the database.
     * @param {ForbiddenWordUpdateManyAndReturnArgs} args - Arguments to update many ForbiddenWords.
     * @example
     * // Update many ForbiddenWords
     * const forbiddenWord = await prisma.forbiddenWord.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ForbiddenWords and only return the `id`
     * const forbiddenWordWithIdOnly = await prisma.forbiddenWord.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ForbiddenWordUpdateManyAndReturnArgs>(args: SelectSubset<T, ForbiddenWordUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ForbiddenWordPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ForbiddenWord.
     * @param {ForbiddenWordUpsertArgs} args - Arguments to update or create a ForbiddenWord.
     * @example
     * // Update or create a ForbiddenWord
     * const forbiddenWord = await prisma.forbiddenWord.upsert({
     *   create: {
     *     // ... data to create a ForbiddenWord
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ForbiddenWord we want to update
     *   }
     * })
     */
    upsert<T extends ForbiddenWordUpsertArgs>(args: SelectSubset<T, ForbiddenWordUpsertArgs<ExtArgs>>): Prisma__ForbiddenWordClient<$Result.GetResult<Prisma.$ForbiddenWordPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ForbiddenWords.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ForbiddenWordCountArgs} args - Arguments to filter ForbiddenWords to count.
     * @example
     * // Count the number of ForbiddenWords
     * const count = await prisma.forbiddenWord.count({
     *   where: {
     *     // ... the filter for the ForbiddenWords we want to count
     *   }
     * })
    **/
    count<T extends ForbiddenWordCountArgs>(
      args?: Subset<T, ForbiddenWordCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ForbiddenWordCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ForbiddenWord.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ForbiddenWordAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ForbiddenWordAggregateArgs>(args: Subset<T, ForbiddenWordAggregateArgs>): Prisma.PrismaPromise<GetForbiddenWordAggregateType<T>>

    /**
     * Group by ForbiddenWord.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ForbiddenWordGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ForbiddenWordGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ForbiddenWordGroupByArgs['orderBy'] }
        : { orderBy?: ForbiddenWordGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ForbiddenWordGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetForbiddenWordGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ForbiddenWord model
   */
  readonly fields: ForbiddenWordFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ForbiddenWord.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ForbiddenWordClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ForbiddenWord model
   */
  interface ForbiddenWordFieldRefs {
    readonly id: FieldRef<"ForbiddenWord", 'String'>
    readonly word: FieldRef<"ForbiddenWord", 'String'>
    readonly isActive: FieldRef<"ForbiddenWord", 'Boolean'>
    readonly createdAt: FieldRef<"ForbiddenWord", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ForbiddenWord findUnique
   */
  export type ForbiddenWordFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ForbiddenWord
     */
    select?: ForbiddenWordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ForbiddenWord
     */
    omit?: ForbiddenWordOmit<ExtArgs> | null
    /**
     * Filter, which ForbiddenWord to fetch.
     */
    where: ForbiddenWordWhereUniqueInput
  }

  /**
   * ForbiddenWord findUniqueOrThrow
   */
  export type ForbiddenWordFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ForbiddenWord
     */
    select?: ForbiddenWordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ForbiddenWord
     */
    omit?: ForbiddenWordOmit<ExtArgs> | null
    /**
     * Filter, which ForbiddenWord to fetch.
     */
    where: ForbiddenWordWhereUniqueInput
  }

  /**
   * ForbiddenWord findFirst
   */
  export type ForbiddenWordFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ForbiddenWord
     */
    select?: ForbiddenWordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ForbiddenWord
     */
    omit?: ForbiddenWordOmit<ExtArgs> | null
    /**
     * Filter, which ForbiddenWord to fetch.
     */
    where?: ForbiddenWordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ForbiddenWords to fetch.
     */
    orderBy?: ForbiddenWordOrderByWithRelationInput | ForbiddenWordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ForbiddenWords.
     */
    cursor?: ForbiddenWordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ForbiddenWords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ForbiddenWords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ForbiddenWords.
     */
    distinct?: ForbiddenWordScalarFieldEnum | ForbiddenWordScalarFieldEnum[]
  }

  /**
   * ForbiddenWord findFirstOrThrow
   */
  export type ForbiddenWordFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ForbiddenWord
     */
    select?: ForbiddenWordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ForbiddenWord
     */
    omit?: ForbiddenWordOmit<ExtArgs> | null
    /**
     * Filter, which ForbiddenWord to fetch.
     */
    where?: ForbiddenWordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ForbiddenWords to fetch.
     */
    orderBy?: ForbiddenWordOrderByWithRelationInput | ForbiddenWordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ForbiddenWords.
     */
    cursor?: ForbiddenWordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ForbiddenWords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ForbiddenWords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ForbiddenWords.
     */
    distinct?: ForbiddenWordScalarFieldEnum | ForbiddenWordScalarFieldEnum[]
  }

  /**
   * ForbiddenWord findMany
   */
  export type ForbiddenWordFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ForbiddenWord
     */
    select?: ForbiddenWordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ForbiddenWord
     */
    omit?: ForbiddenWordOmit<ExtArgs> | null
    /**
     * Filter, which ForbiddenWords to fetch.
     */
    where?: ForbiddenWordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ForbiddenWords to fetch.
     */
    orderBy?: ForbiddenWordOrderByWithRelationInput | ForbiddenWordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ForbiddenWords.
     */
    cursor?: ForbiddenWordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ForbiddenWords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ForbiddenWords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ForbiddenWords.
     */
    distinct?: ForbiddenWordScalarFieldEnum | ForbiddenWordScalarFieldEnum[]
  }

  /**
   * ForbiddenWord create
   */
  export type ForbiddenWordCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ForbiddenWord
     */
    select?: ForbiddenWordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ForbiddenWord
     */
    omit?: ForbiddenWordOmit<ExtArgs> | null
    /**
     * The data needed to create a ForbiddenWord.
     */
    data: XOR<ForbiddenWordCreateInput, ForbiddenWordUncheckedCreateInput>
  }

  /**
   * ForbiddenWord createMany
   */
  export type ForbiddenWordCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ForbiddenWords.
     */
    data: ForbiddenWordCreateManyInput | ForbiddenWordCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ForbiddenWord createManyAndReturn
   */
  export type ForbiddenWordCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ForbiddenWord
     */
    select?: ForbiddenWordSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ForbiddenWord
     */
    omit?: ForbiddenWordOmit<ExtArgs> | null
    /**
     * The data used to create many ForbiddenWords.
     */
    data: ForbiddenWordCreateManyInput | ForbiddenWordCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ForbiddenWord update
   */
  export type ForbiddenWordUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ForbiddenWord
     */
    select?: ForbiddenWordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ForbiddenWord
     */
    omit?: ForbiddenWordOmit<ExtArgs> | null
    /**
     * The data needed to update a ForbiddenWord.
     */
    data: XOR<ForbiddenWordUpdateInput, ForbiddenWordUncheckedUpdateInput>
    /**
     * Choose, which ForbiddenWord to update.
     */
    where: ForbiddenWordWhereUniqueInput
  }

  /**
   * ForbiddenWord updateMany
   */
  export type ForbiddenWordUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ForbiddenWords.
     */
    data: XOR<ForbiddenWordUpdateManyMutationInput, ForbiddenWordUncheckedUpdateManyInput>
    /**
     * Filter which ForbiddenWords to update
     */
    where?: ForbiddenWordWhereInput
    /**
     * Limit how many ForbiddenWords to update.
     */
    limit?: number
  }

  /**
   * ForbiddenWord updateManyAndReturn
   */
  export type ForbiddenWordUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ForbiddenWord
     */
    select?: ForbiddenWordSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ForbiddenWord
     */
    omit?: ForbiddenWordOmit<ExtArgs> | null
    /**
     * The data used to update ForbiddenWords.
     */
    data: XOR<ForbiddenWordUpdateManyMutationInput, ForbiddenWordUncheckedUpdateManyInput>
    /**
     * Filter which ForbiddenWords to update
     */
    where?: ForbiddenWordWhereInput
    /**
     * Limit how many ForbiddenWords to update.
     */
    limit?: number
  }

  /**
   * ForbiddenWord upsert
   */
  export type ForbiddenWordUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ForbiddenWord
     */
    select?: ForbiddenWordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ForbiddenWord
     */
    omit?: ForbiddenWordOmit<ExtArgs> | null
    /**
     * The filter to search for the ForbiddenWord to update in case it exists.
     */
    where: ForbiddenWordWhereUniqueInput
    /**
     * In case the ForbiddenWord found by the `where` argument doesn't exist, create a new ForbiddenWord with this data.
     */
    create: XOR<ForbiddenWordCreateInput, ForbiddenWordUncheckedCreateInput>
    /**
     * In case the ForbiddenWord was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ForbiddenWordUpdateInput, ForbiddenWordUncheckedUpdateInput>
  }

  /**
   * ForbiddenWord delete
   */
  export type ForbiddenWordDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ForbiddenWord
     */
    select?: ForbiddenWordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ForbiddenWord
     */
    omit?: ForbiddenWordOmit<ExtArgs> | null
    /**
     * Filter which ForbiddenWord to delete.
     */
    where: ForbiddenWordWhereUniqueInput
  }

  /**
   * ForbiddenWord deleteMany
   */
  export type ForbiddenWordDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ForbiddenWords to delete
     */
    where?: ForbiddenWordWhereInput
    /**
     * Limit how many ForbiddenWords to delete.
     */
    limit?: number
  }

  /**
   * ForbiddenWord without action
   */
  export type ForbiddenWordDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ForbiddenWord
     */
    select?: ForbiddenWordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ForbiddenWord
     */
    omit?: ForbiddenWordOmit<ExtArgs> | null
  }


  /**
   * Model NamecheapAccount
   */

  export type AggregateNamecheapAccount = {
    _count: NamecheapAccountCountAggregateOutputType | null
    _min: NamecheapAccountMinAggregateOutputType | null
    _max: NamecheapAccountMaxAggregateOutputType | null
  }

  export type NamecheapAccountMinAggregateOutputType = {
    id: string | null
    username: string | null
    apiUser: string | null
    apiKey: string | null
  }

  export type NamecheapAccountMaxAggregateOutputType = {
    id: string | null
    username: string | null
    apiUser: string | null
    apiKey: string | null
  }

  export type NamecheapAccountCountAggregateOutputType = {
    id: number
    username: number
    apiUser: number
    apiKey: number
    contacts: number
    _all: number
  }


  export type NamecheapAccountMinAggregateInputType = {
    id?: true
    username?: true
    apiUser?: true
    apiKey?: true
  }

  export type NamecheapAccountMaxAggregateInputType = {
    id?: true
    username?: true
    apiUser?: true
    apiKey?: true
  }

  export type NamecheapAccountCountAggregateInputType = {
    id?: true
    username?: true
    apiUser?: true
    apiKey?: true
    contacts?: true
    _all?: true
  }

  export type NamecheapAccountAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which NamecheapAccount to aggregate.
     */
    where?: NamecheapAccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NamecheapAccounts to fetch.
     */
    orderBy?: NamecheapAccountOrderByWithRelationInput | NamecheapAccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: NamecheapAccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NamecheapAccounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NamecheapAccounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned NamecheapAccounts
    **/
    _count?: true | NamecheapAccountCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NamecheapAccountMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NamecheapAccountMaxAggregateInputType
  }

  export type GetNamecheapAccountAggregateType<T extends NamecheapAccountAggregateArgs> = {
        [P in keyof T & keyof AggregateNamecheapAccount]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNamecheapAccount[P]>
      : GetScalarType<T[P], AggregateNamecheapAccount[P]>
  }




  export type NamecheapAccountGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NamecheapAccountWhereInput
    orderBy?: NamecheapAccountOrderByWithAggregationInput | NamecheapAccountOrderByWithAggregationInput[]
    by: NamecheapAccountScalarFieldEnum[] | NamecheapAccountScalarFieldEnum
    having?: NamecheapAccountScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NamecheapAccountCountAggregateInputType | true
    _min?: NamecheapAccountMinAggregateInputType
    _max?: NamecheapAccountMaxAggregateInputType
  }

  export type NamecheapAccountGroupByOutputType = {
    id: string
    username: string
    apiUser: string
    apiKey: string
    contacts: JsonValue | null
    _count: NamecheapAccountCountAggregateOutputType | null
    _min: NamecheapAccountMinAggregateOutputType | null
    _max: NamecheapAccountMaxAggregateOutputType | null
  }

  type GetNamecheapAccountGroupByPayload<T extends NamecheapAccountGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NamecheapAccountGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NamecheapAccountGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NamecheapAccountGroupByOutputType[P]>
            : GetScalarType<T[P], NamecheapAccountGroupByOutputType[P]>
        }
      >
    >


  export type NamecheapAccountSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    apiUser?: boolean
    apiKey?: boolean
    contacts?: boolean
  }, ExtArgs["result"]["namecheapAccount"]>

  export type NamecheapAccountSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    apiUser?: boolean
    apiKey?: boolean
    contacts?: boolean
  }, ExtArgs["result"]["namecheapAccount"]>

  export type NamecheapAccountSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    apiUser?: boolean
    apiKey?: boolean
    contacts?: boolean
  }, ExtArgs["result"]["namecheapAccount"]>

  export type NamecheapAccountSelectScalar = {
    id?: boolean
    username?: boolean
    apiUser?: boolean
    apiKey?: boolean
    contacts?: boolean
  }

  export type NamecheapAccountOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "username" | "apiUser" | "apiKey" | "contacts", ExtArgs["result"]["namecheapAccount"]>

  export type $NamecheapAccountPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "NamecheapAccount"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      username: string
      apiUser: string
      apiKey: string
      contacts: Prisma.JsonValue | null
    }, ExtArgs["result"]["namecheapAccount"]>
    composites: {}
  }

  type NamecheapAccountGetPayload<S extends boolean | null | undefined | NamecheapAccountDefaultArgs> = $Result.GetResult<Prisma.$NamecheapAccountPayload, S>

  type NamecheapAccountCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<NamecheapAccountFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: NamecheapAccountCountAggregateInputType | true
    }

  export interface NamecheapAccountDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['NamecheapAccount'], meta: { name: 'NamecheapAccount' } }
    /**
     * Find zero or one NamecheapAccount that matches the filter.
     * @param {NamecheapAccountFindUniqueArgs} args - Arguments to find a NamecheapAccount
     * @example
     * // Get one NamecheapAccount
     * const namecheapAccount = await prisma.namecheapAccount.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends NamecheapAccountFindUniqueArgs>(args: SelectSubset<T, NamecheapAccountFindUniqueArgs<ExtArgs>>): Prisma__NamecheapAccountClient<$Result.GetResult<Prisma.$NamecheapAccountPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one NamecheapAccount that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {NamecheapAccountFindUniqueOrThrowArgs} args - Arguments to find a NamecheapAccount
     * @example
     * // Get one NamecheapAccount
     * const namecheapAccount = await prisma.namecheapAccount.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends NamecheapAccountFindUniqueOrThrowArgs>(args: SelectSubset<T, NamecheapAccountFindUniqueOrThrowArgs<ExtArgs>>): Prisma__NamecheapAccountClient<$Result.GetResult<Prisma.$NamecheapAccountPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first NamecheapAccount that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NamecheapAccountFindFirstArgs} args - Arguments to find a NamecheapAccount
     * @example
     * // Get one NamecheapAccount
     * const namecheapAccount = await prisma.namecheapAccount.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends NamecheapAccountFindFirstArgs>(args?: SelectSubset<T, NamecheapAccountFindFirstArgs<ExtArgs>>): Prisma__NamecheapAccountClient<$Result.GetResult<Prisma.$NamecheapAccountPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first NamecheapAccount that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NamecheapAccountFindFirstOrThrowArgs} args - Arguments to find a NamecheapAccount
     * @example
     * // Get one NamecheapAccount
     * const namecheapAccount = await prisma.namecheapAccount.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends NamecheapAccountFindFirstOrThrowArgs>(args?: SelectSubset<T, NamecheapAccountFindFirstOrThrowArgs<ExtArgs>>): Prisma__NamecheapAccountClient<$Result.GetResult<Prisma.$NamecheapAccountPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more NamecheapAccounts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NamecheapAccountFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all NamecheapAccounts
     * const namecheapAccounts = await prisma.namecheapAccount.findMany()
     * 
     * // Get first 10 NamecheapAccounts
     * const namecheapAccounts = await prisma.namecheapAccount.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const namecheapAccountWithIdOnly = await prisma.namecheapAccount.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends NamecheapAccountFindManyArgs>(args?: SelectSubset<T, NamecheapAccountFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NamecheapAccountPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a NamecheapAccount.
     * @param {NamecheapAccountCreateArgs} args - Arguments to create a NamecheapAccount.
     * @example
     * // Create one NamecheapAccount
     * const NamecheapAccount = await prisma.namecheapAccount.create({
     *   data: {
     *     // ... data to create a NamecheapAccount
     *   }
     * })
     * 
     */
    create<T extends NamecheapAccountCreateArgs>(args: SelectSubset<T, NamecheapAccountCreateArgs<ExtArgs>>): Prisma__NamecheapAccountClient<$Result.GetResult<Prisma.$NamecheapAccountPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many NamecheapAccounts.
     * @param {NamecheapAccountCreateManyArgs} args - Arguments to create many NamecheapAccounts.
     * @example
     * // Create many NamecheapAccounts
     * const namecheapAccount = await prisma.namecheapAccount.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends NamecheapAccountCreateManyArgs>(args?: SelectSubset<T, NamecheapAccountCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many NamecheapAccounts and returns the data saved in the database.
     * @param {NamecheapAccountCreateManyAndReturnArgs} args - Arguments to create many NamecheapAccounts.
     * @example
     * // Create many NamecheapAccounts
     * const namecheapAccount = await prisma.namecheapAccount.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many NamecheapAccounts and only return the `id`
     * const namecheapAccountWithIdOnly = await prisma.namecheapAccount.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends NamecheapAccountCreateManyAndReturnArgs>(args?: SelectSubset<T, NamecheapAccountCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NamecheapAccountPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a NamecheapAccount.
     * @param {NamecheapAccountDeleteArgs} args - Arguments to delete one NamecheapAccount.
     * @example
     * // Delete one NamecheapAccount
     * const NamecheapAccount = await prisma.namecheapAccount.delete({
     *   where: {
     *     // ... filter to delete one NamecheapAccount
     *   }
     * })
     * 
     */
    delete<T extends NamecheapAccountDeleteArgs>(args: SelectSubset<T, NamecheapAccountDeleteArgs<ExtArgs>>): Prisma__NamecheapAccountClient<$Result.GetResult<Prisma.$NamecheapAccountPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one NamecheapAccount.
     * @param {NamecheapAccountUpdateArgs} args - Arguments to update one NamecheapAccount.
     * @example
     * // Update one NamecheapAccount
     * const namecheapAccount = await prisma.namecheapAccount.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends NamecheapAccountUpdateArgs>(args: SelectSubset<T, NamecheapAccountUpdateArgs<ExtArgs>>): Prisma__NamecheapAccountClient<$Result.GetResult<Prisma.$NamecheapAccountPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more NamecheapAccounts.
     * @param {NamecheapAccountDeleteManyArgs} args - Arguments to filter NamecheapAccounts to delete.
     * @example
     * // Delete a few NamecheapAccounts
     * const { count } = await prisma.namecheapAccount.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends NamecheapAccountDeleteManyArgs>(args?: SelectSubset<T, NamecheapAccountDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more NamecheapAccounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NamecheapAccountUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many NamecheapAccounts
     * const namecheapAccount = await prisma.namecheapAccount.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends NamecheapAccountUpdateManyArgs>(args: SelectSubset<T, NamecheapAccountUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more NamecheapAccounts and returns the data updated in the database.
     * @param {NamecheapAccountUpdateManyAndReturnArgs} args - Arguments to update many NamecheapAccounts.
     * @example
     * // Update many NamecheapAccounts
     * const namecheapAccount = await prisma.namecheapAccount.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more NamecheapAccounts and only return the `id`
     * const namecheapAccountWithIdOnly = await prisma.namecheapAccount.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends NamecheapAccountUpdateManyAndReturnArgs>(args: SelectSubset<T, NamecheapAccountUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NamecheapAccountPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one NamecheapAccount.
     * @param {NamecheapAccountUpsertArgs} args - Arguments to update or create a NamecheapAccount.
     * @example
     * // Update or create a NamecheapAccount
     * const namecheapAccount = await prisma.namecheapAccount.upsert({
     *   create: {
     *     // ... data to create a NamecheapAccount
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the NamecheapAccount we want to update
     *   }
     * })
     */
    upsert<T extends NamecheapAccountUpsertArgs>(args: SelectSubset<T, NamecheapAccountUpsertArgs<ExtArgs>>): Prisma__NamecheapAccountClient<$Result.GetResult<Prisma.$NamecheapAccountPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of NamecheapAccounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NamecheapAccountCountArgs} args - Arguments to filter NamecheapAccounts to count.
     * @example
     * // Count the number of NamecheapAccounts
     * const count = await prisma.namecheapAccount.count({
     *   where: {
     *     // ... the filter for the NamecheapAccounts we want to count
     *   }
     * })
    **/
    count<T extends NamecheapAccountCountArgs>(
      args?: Subset<T, NamecheapAccountCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NamecheapAccountCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a NamecheapAccount.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NamecheapAccountAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends NamecheapAccountAggregateArgs>(args: Subset<T, NamecheapAccountAggregateArgs>): Prisma.PrismaPromise<GetNamecheapAccountAggregateType<T>>

    /**
     * Group by NamecheapAccount.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NamecheapAccountGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends NamecheapAccountGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: NamecheapAccountGroupByArgs['orderBy'] }
        : { orderBy?: NamecheapAccountGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, NamecheapAccountGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNamecheapAccountGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the NamecheapAccount model
   */
  readonly fields: NamecheapAccountFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for NamecheapAccount.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__NamecheapAccountClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the NamecheapAccount model
   */
  interface NamecheapAccountFieldRefs {
    readonly id: FieldRef<"NamecheapAccount", 'String'>
    readonly username: FieldRef<"NamecheapAccount", 'String'>
    readonly apiUser: FieldRef<"NamecheapAccount", 'String'>
    readonly apiKey: FieldRef<"NamecheapAccount", 'String'>
    readonly contacts: FieldRef<"NamecheapAccount", 'Json'>
  }
    

  // Custom InputTypes
  /**
   * NamecheapAccount findUnique
   */
  export type NamecheapAccountFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NamecheapAccount
     */
    select?: NamecheapAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NamecheapAccount
     */
    omit?: NamecheapAccountOmit<ExtArgs> | null
    /**
     * Filter, which NamecheapAccount to fetch.
     */
    where: NamecheapAccountWhereUniqueInput
  }

  /**
   * NamecheapAccount findUniqueOrThrow
   */
  export type NamecheapAccountFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NamecheapAccount
     */
    select?: NamecheapAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NamecheapAccount
     */
    omit?: NamecheapAccountOmit<ExtArgs> | null
    /**
     * Filter, which NamecheapAccount to fetch.
     */
    where: NamecheapAccountWhereUniqueInput
  }

  /**
   * NamecheapAccount findFirst
   */
  export type NamecheapAccountFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NamecheapAccount
     */
    select?: NamecheapAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NamecheapAccount
     */
    omit?: NamecheapAccountOmit<ExtArgs> | null
    /**
     * Filter, which NamecheapAccount to fetch.
     */
    where?: NamecheapAccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NamecheapAccounts to fetch.
     */
    orderBy?: NamecheapAccountOrderByWithRelationInput | NamecheapAccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for NamecheapAccounts.
     */
    cursor?: NamecheapAccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NamecheapAccounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NamecheapAccounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of NamecheapAccounts.
     */
    distinct?: NamecheapAccountScalarFieldEnum | NamecheapAccountScalarFieldEnum[]
  }

  /**
   * NamecheapAccount findFirstOrThrow
   */
  export type NamecheapAccountFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NamecheapAccount
     */
    select?: NamecheapAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NamecheapAccount
     */
    omit?: NamecheapAccountOmit<ExtArgs> | null
    /**
     * Filter, which NamecheapAccount to fetch.
     */
    where?: NamecheapAccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NamecheapAccounts to fetch.
     */
    orderBy?: NamecheapAccountOrderByWithRelationInput | NamecheapAccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for NamecheapAccounts.
     */
    cursor?: NamecheapAccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NamecheapAccounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NamecheapAccounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of NamecheapAccounts.
     */
    distinct?: NamecheapAccountScalarFieldEnum | NamecheapAccountScalarFieldEnum[]
  }

  /**
   * NamecheapAccount findMany
   */
  export type NamecheapAccountFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NamecheapAccount
     */
    select?: NamecheapAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NamecheapAccount
     */
    omit?: NamecheapAccountOmit<ExtArgs> | null
    /**
     * Filter, which NamecheapAccounts to fetch.
     */
    where?: NamecheapAccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NamecheapAccounts to fetch.
     */
    orderBy?: NamecheapAccountOrderByWithRelationInput | NamecheapAccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing NamecheapAccounts.
     */
    cursor?: NamecheapAccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NamecheapAccounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NamecheapAccounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of NamecheapAccounts.
     */
    distinct?: NamecheapAccountScalarFieldEnum | NamecheapAccountScalarFieldEnum[]
  }

  /**
   * NamecheapAccount create
   */
  export type NamecheapAccountCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NamecheapAccount
     */
    select?: NamecheapAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NamecheapAccount
     */
    omit?: NamecheapAccountOmit<ExtArgs> | null
    /**
     * The data needed to create a NamecheapAccount.
     */
    data: XOR<NamecheapAccountCreateInput, NamecheapAccountUncheckedCreateInput>
  }

  /**
   * NamecheapAccount createMany
   */
  export type NamecheapAccountCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many NamecheapAccounts.
     */
    data: NamecheapAccountCreateManyInput | NamecheapAccountCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * NamecheapAccount createManyAndReturn
   */
  export type NamecheapAccountCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NamecheapAccount
     */
    select?: NamecheapAccountSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the NamecheapAccount
     */
    omit?: NamecheapAccountOmit<ExtArgs> | null
    /**
     * The data used to create many NamecheapAccounts.
     */
    data: NamecheapAccountCreateManyInput | NamecheapAccountCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * NamecheapAccount update
   */
  export type NamecheapAccountUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NamecheapAccount
     */
    select?: NamecheapAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NamecheapAccount
     */
    omit?: NamecheapAccountOmit<ExtArgs> | null
    /**
     * The data needed to update a NamecheapAccount.
     */
    data: XOR<NamecheapAccountUpdateInput, NamecheapAccountUncheckedUpdateInput>
    /**
     * Choose, which NamecheapAccount to update.
     */
    where: NamecheapAccountWhereUniqueInput
  }

  /**
   * NamecheapAccount updateMany
   */
  export type NamecheapAccountUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update NamecheapAccounts.
     */
    data: XOR<NamecheapAccountUpdateManyMutationInput, NamecheapAccountUncheckedUpdateManyInput>
    /**
     * Filter which NamecheapAccounts to update
     */
    where?: NamecheapAccountWhereInput
    /**
     * Limit how many NamecheapAccounts to update.
     */
    limit?: number
  }

  /**
   * NamecheapAccount updateManyAndReturn
   */
  export type NamecheapAccountUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NamecheapAccount
     */
    select?: NamecheapAccountSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the NamecheapAccount
     */
    omit?: NamecheapAccountOmit<ExtArgs> | null
    /**
     * The data used to update NamecheapAccounts.
     */
    data: XOR<NamecheapAccountUpdateManyMutationInput, NamecheapAccountUncheckedUpdateManyInput>
    /**
     * Filter which NamecheapAccounts to update
     */
    where?: NamecheapAccountWhereInput
    /**
     * Limit how many NamecheapAccounts to update.
     */
    limit?: number
  }

  /**
   * NamecheapAccount upsert
   */
  export type NamecheapAccountUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NamecheapAccount
     */
    select?: NamecheapAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NamecheapAccount
     */
    omit?: NamecheapAccountOmit<ExtArgs> | null
    /**
     * The filter to search for the NamecheapAccount to update in case it exists.
     */
    where: NamecheapAccountWhereUniqueInput
    /**
     * In case the NamecheapAccount found by the `where` argument doesn't exist, create a new NamecheapAccount with this data.
     */
    create: XOR<NamecheapAccountCreateInput, NamecheapAccountUncheckedCreateInput>
    /**
     * In case the NamecheapAccount was found with the provided `where` argument, update it with this data.
     */
    update: XOR<NamecheapAccountUpdateInput, NamecheapAccountUncheckedUpdateInput>
  }

  /**
   * NamecheapAccount delete
   */
  export type NamecheapAccountDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NamecheapAccount
     */
    select?: NamecheapAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NamecheapAccount
     */
    omit?: NamecheapAccountOmit<ExtArgs> | null
    /**
     * Filter which NamecheapAccount to delete.
     */
    where: NamecheapAccountWhereUniqueInput
  }

  /**
   * NamecheapAccount deleteMany
   */
  export type NamecheapAccountDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which NamecheapAccounts to delete
     */
    where?: NamecheapAccountWhereInput
    /**
     * Limit how many NamecheapAccounts to delete.
     */
    limit?: number
  }

  /**
   * NamecheapAccount without action
   */
  export type NamecheapAccountDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NamecheapAccount
     */
    select?: NamecheapAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NamecheapAccount
     */
    omit?: NamecheapAccountOmit<ExtArgs> | null
  }


  /**
   * Model CloudflareAccount
   */

  export type AggregateCloudflareAccount = {
    _count: CloudflareAccountCountAggregateOutputType | null
    _min: CloudflareAccountMinAggregateOutputType | null
    _max: CloudflareAccountMaxAggregateOutputType | null
  }

  export type CloudflareAccountMinAggregateOutputType = {
    id: string | null
    name: string | null
    apiToken: string | null
    accountId: string | null
  }

  export type CloudflareAccountMaxAggregateOutputType = {
    id: string | null
    name: string | null
    apiToken: string | null
    accountId: string | null
  }

  export type CloudflareAccountCountAggregateOutputType = {
    id: number
    name: number
    apiToken: number
    accountId: number
    _all: number
  }


  export type CloudflareAccountMinAggregateInputType = {
    id?: true
    name?: true
    apiToken?: true
    accountId?: true
  }

  export type CloudflareAccountMaxAggregateInputType = {
    id?: true
    name?: true
    apiToken?: true
    accountId?: true
  }

  export type CloudflareAccountCountAggregateInputType = {
    id?: true
    name?: true
    apiToken?: true
    accountId?: true
    _all?: true
  }

  export type CloudflareAccountAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CloudflareAccount to aggregate.
     */
    where?: CloudflareAccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CloudflareAccounts to fetch.
     */
    orderBy?: CloudflareAccountOrderByWithRelationInput | CloudflareAccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CloudflareAccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CloudflareAccounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CloudflareAccounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CloudflareAccounts
    **/
    _count?: true | CloudflareAccountCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CloudflareAccountMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CloudflareAccountMaxAggregateInputType
  }

  export type GetCloudflareAccountAggregateType<T extends CloudflareAccountAggregateArgs> = {
        [P in keyof T & keyof AggregateCloudflareAccount]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCloudflareAccount[P]>
      : GetScalarType<T[P], AggregateCloudflareAccount[P]>
  }




  export type CloudflareAccountGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CloudflareAccountWhereInput
    orderBy?: CloudflareAccountOrderByWithAggregationInput | CloudflareAccountOrderByWithAggregationInput[]
    by: CloudflareAccountScalarFieldEnum[] | CloudflareAccountScalarFieldEnum
    having?: CloudflareAccountScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CloudflareAccountCountAggregateInputType | true
    _min?: CloudflareAccountMinAggregateInputType
    _max?: CloudflareAccountMaxAggregateInputType
  }

  export type CloudflareAccountGroupByOutputType = {
    id: string
    name: string
    apiToken: string
    accountId: string
    _count: CloudflareAccountCountAggregateOutputType | null
    _min: CloudflareAccountMinAggregateOutputType | null
    _max: CloudflareAccountMaxAggregateOutputType | null
  }

  type GetCloudflareAccountGroupByPayload<T extends CloudflareAccountGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CloudflareAccountGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CloudflareAccountGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CloudflareAccountGroupByOutputType[P]>
            : GetScalarType<T[P], CloudflareAccountGroupByOutputType[P]>
        }
      >
    >


  export type CloudflareAccountSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    apiToken?: boolean
    accountId?: boolean
  }, ExtArgs["result"]["cloudflareAccount"]>

  export type CloudflareAccountSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    apiToken?: boolean
    accountId?: boolean
  }, ExtArgs["result"]["cloudflareAccount"]>

  export type CloudflareAccountSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    apiToken?: boolean
    accountId?: boolean
  }, ExtArgs["result"]["cloudflareAccount"]>

  export type CloudflareAccountSelectScalar = {
    id?: boolean
    name?: boolean
    apiToken?: boolean
    accountId?: boolean
  }

  export type CloudflareAccountOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "apiToken" | "accountId", ExtArgs["result"]["cloudflareAccount"]>

  export type $CloudflareAccountPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CloudflareAccount"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      apiToken: string
      accountId: string
    }, ExtArgs["result"]["cloudflareAccount"]>
    composites: {}
  }

  type CloudflareAccountGetPayload<S extends boolean | null | undefined | CloudflareAccountDefaultArgs> = $Result.GetResult<Prisma.$CloudflareAccountPayload, S>

  type CloudflareAccountCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CloudflareAccountFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CloudflareAccountCountAggregateInputType | true
    }

  export interface CloudflareAccountDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CloudflareAccount'], meta: { name: 'CloudflareAccount' } }
    /**
     * Find zero or one CloudflareAccount that matches the filter.
     * @param {CloudflareAccountFindUniqueArgs} args - Arguments to find a CloudflareAccount
     * @example
     * // Get one CloudflareAccount
     * const cloudflareAccount = await prisma.cloudflareAccount.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CloudflareAccountFindUniqueArgs>(args: SelectSubset<T, CloudflareAccountFindUniqueArgs<ExtArgs>>): Prisma__CloudflareAccountClient<$Result.GetResult<Prisma.$CloudflareAccountPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CloudflareAccount that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CloudflareAccountFindUniqueOrThrowArgs} args - Arguments to find a CloudflareAccount
     * @example
     * // Get one CloudflareAccount
     * const cloudflareAccount = await prisma.cloudflareAccount.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CloudflareAccountFindUniqueOrThrowArgs>(args: SelectSubset<T, CloudflareAccountFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CloudflareAccountClient<$Result.GetResult<Prisma.$CloudflareAccountPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CloudflareAccount that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CloudflareAccountFindFirstArgs} args - Arguments to find a CloudflareAccount
     * @example
     * // Get one CloudflareAccount
     * const cloudflareAccount = await prisma.cloudflareAccount.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CloudflareAccountFindFirstArgs>(args?: SelectSubset<T, CloudflareAccountFindFirstArgs<ExtArgs>>): Prisma__CloudflareAccountClient<$Result.GetResult<Prisma.$CloudflareAccountPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CloudflareAccount that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CloudflareAccountFindFirstOrThrowArgs} args - Arguments to find a CloudflareAccount
     * @example
     * // Get one CloudflareAccount
     * const cloudflareAccount = await prisma.cloudflareAccount.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CloudflareAccountFindFirstOrThrowArgs>(args?: SelectSubset<T, CloudflareAccountFindFirstOrThrowArgs<ExtArgs>>): Prisma__CloudflareAccountClient<$Result.GetResult<Prisma.$CloudflareAccountPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CloudflareAccounts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CloudflareAccountFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CloudflareAccounts
     * const cloudflareAccounts = await prisma.cloudflareAccount.findMany()
     * 
     * // Get first 10 CloudflareAccounts
     * const cloudflareAccounts = await prisma.cloudflareAccount.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const cloudflareAccountWithIdOnly = await prisma.cloudflareAccount.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CloudflareAccountFindManyArgs>(args?: SelectSubset<T, CloudflareAccountFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CloudflareAccountPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CloudflareAccount.
     * @param {CloudflareAccountCreateArgs} args - Arguments to create a CloudflareAccount.
     * @example
     * // Create one CloudflareAccount
     * const CloudflareAccount = await prisma.cloudflareAccount.create({
     *   data: {
     *     // ... data to create a CloudflareAccount
     *   }
     * })
     * 
     */
    create<T extends CloudflareAccountCreateArgs>(args: SelectSubset<T, CloudflareAccountCreateArgs<ExtArgs>>): Prisma__CloudflareAccountClient<$Result.GetResult<Prisma.$CloudflareAccountPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CloudflareAccounts.
     * @param {CloudflareAccountCreateManyArgs} args - Arguments to create many CloudflareAccounts.
     * @example
     * // Create many CloudflareAccounts
     * const cloudflareAccount = await prisma.cloudflareAccount.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CloudflareAccountCreateManyArgs>(args?: SelectSubset<T, CloudflareAccountCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CloudflareAccounts and returns the data saved in the database.
     * @param {CloudflareAccountCreateManyAndReturnArgs} args - Arguments to create many CloudflareAccounts.
     * @example
     * // Create many CloudflareAccounts
     * const cloudflareAccount = await prisma.cloudflareAccount.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CloudflareAccounts and only return the `id`
     * const cloudflareAccountWithIdOnly = await prisma.cloudflareAccount.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CloudflareAccountCreateManyAndReturnArgs>(args?: SelectSubset<T, CloudflareAccountCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CloudflareAccountPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a CloudflareAccount.
     * @param {CloudflareAccountDeleteArgs} args - Arguments to delete one CloudflareAccount.
     * @example
     * // Delete one CloudflareAccount
     * const CloudflareAccount = await prisma.cloudflareAccount.delete({
     *   where: {
     *     // ... filter to delete one CloudflareAccount
     *   }
     * })
     * 
     */
    delete<T extends CloudflareAccountDeleteArgs>(args: SelectSubset<T, CloudflareAccountDeleteArgs<ExtArgs>>): Prisma__CloudflareAccountClient<$Result.GetResult<Prisma.$CloudflareAccountPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CloudflareAccount.
     * @param {CloudflareAccountUpdateArgs} args - Arguments to update one CloudflareAccount.
     * @example
     * // Update one CloudflareAccount
     * const cloudflareAccount = await prisma.cloudflareAccount.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CloudflareAccountUpdateArgs>(args: SelectSubset<T, CloudflareAccountUpdateArgs<ExtArgs>>): Prisma__CloudflareAccountClient<$Result.GetResult<Prisma.$CloudflareAccountPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CloudflareAccounts.
     * @param {CloudflareAccountDeleteManyArgs} args - Arguments to filter CloudflareAccounts to delete.
     * @example
     * // Delete a few CloudflareAccounts
     * const { count } = await prisma.cloudflareAccount.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CloudflareAccountDeleteManyArgs>(args?: SelectSubset<T, CloudflareAccountDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CloudflareAccounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CloudflareAccountUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CloudflareAccounts
     * const cloudflareAccount = await prisma.cloudflareAccount.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CloudflareAccountUpdateManyArgs>(args: SelectSubset<T, CloudflareAccountUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CloudflareAccounts and returns the data updated in the database.
     * @param {CloudflareAccountUpdateManyAndReturnArgs} args - Arguments to update many CloudflareAccounts.
     * @example
     * // Update many CloudflareAccounts
     * const cloudflareAccount = await prisma.cloudflareAccount.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more CloudflareAccounts and only return the `id`
     * const cloudflareAccountWithIdOnly = await prisma.cloudflareAccount.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CloudflareAccountUpdateManyAndReturnArgs>(args: SelectSubset<T, CloudflareAccountUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CloudflareAccountPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one CloudflareAccount.
     * @param {CloudflareAccountUpsertArgs} args - Arguments to update or create a CloudflareAccount.
     * @example
     * // Update or create a CloudflareAccount
     * const cloudflareAccount = await prisma.cloudflareAccount.upsert({
     *   create: {
     *     // ... data to create a CloudflareAccount
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CloudflareAccount we want to update
     *   }
     * })
     */
    upsert<T extends CloudflareAccountUpsertArgs>(args: SelectSubset<T, CloudflareAccountUpsertArgs<ExtArgs>>): Prisma__CloudflareAccountClient<$Result.GetResult<Prisma.$CloudflareAccountPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CloudflareAccounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CloudflareAccountCountArgs} args - Arguments to filter CloudflareAccounts to count.
     * @example
     * // Count the number of CloudflareAccounts
     * const count = await prisma.cloudflareAccount.count({
     *   where: {
     *     // ... the filter for the CloudflareAccounts we want to count
     *   }
     * })
    **/
    count<T extends CloudflareAccountCountArgs>(
      args?: Subset<T, CloudflareAccountCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CloudflareAccountCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CloudflareAccount.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CloudflareAccountAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CloudflareAccountAggregateArgs>(args: Subset<T, CloudflareAccountAggregateArgs>): Prisma.PrismaPromise<GetCloudflareAccountAggregateType<T>>

    /**
     * Group by CloudflareAccount.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CloudflareAccountGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CloudflareAccountGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CloudflareAccountGroupByArgs['orderBy'] }
        : { orderBy?: CloudflareAccountGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CloudflareAccountGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCloudflareAccountGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CloudflareAccount model
   */
  readonly fields: CloudflareAccountFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CloudflareAccount.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CloudflareAccountClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the CloudflareAccount model
   */
  interface CloudflareAccountFieldRefs {
    readonly id: FieldRef<"CloudflareAccount", 'String'>
    readonly name: FieldRef<"CloudflareAccount", 'String'>
    readonly apiToken: FieldRef<"CloudflareAccount", 'String'>
    readonly accountId: FieldRef<"CloudflareAccount", 'String'>
  }
    

  // Custom InputTypes
  /**
   * CloudflareAccount findUnique
   */
  export type CloudflareAccountFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CloudflareAccount
     */
    select?: CloudflareAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CloudflareAccount
     */
    omit?: CloudflareAccountOmit<ExtArgs> | null
    /**
     * Filter, which CloudflareAccount to fetch.
     */
    where: CloudflareAccountWhereUniqueInput
  }

  /**
   * CloudflareAccount findUniqueOrThrow
   */
  export type CloudflareAccountFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CloudflareAccount
     */
    select?: CloudflareAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CloudflareAccount
     */
    omit?: CloudflareAccountOmit<ExtArgs> | null
    /**
     * Filter, which CloudflareAccount to fetch.
     */
    where: CloudflareAccountWhereUniqueInput
  }

  /**
   * CloudflareAccount findFirst
   */
  export type CloudflareAccountFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CloudflareAccount
     */
    select?: CloudflareAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CloudflareAccount
     */
    omit?: CloudflareAccountOmit<ExtArgs> | null
    /**
     * Filter, which CloudflareAccount to fetch.
     */
    where?: CloudflareAccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CloudflareAccounts to fetch.
     */
    orderBy?: CloudflareAccountOrderByWithRelationInput | CloudflareAccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CloudflareAccounts.
     */
    cursor?: CloudflareAccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CloudflareAccounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CloudflareAccounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CloudflareAccounts.
     */
    distinct?: CloudflareAccountScalarFieldEnum | CloudflareAccountScalarFieldEnum[]
  }

  /**
   * CloudflareAccount findFirstOrThrow
   */
  export type CloudflareAccountFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CloudflareAccount
     */
    select?: CloudflareAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CloudflareAccount
     */
    omit?: CloudflareAccountOmit<ExtArgs> | null
    /**
     * Filter, which CloudflareAccount to fetch.
     */
    where?: CloudflareAccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CloudflareAccounts to fetch.
     */
    orderBy?: CloudflareAccountOrderByWithRelationInput | CloudflareAccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CloudflareAccounts.
     */
    cursor?: CloudflareAccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CloudflareAccounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CloudflareAccounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CloudflareAccounts.
     */
    distinct?: CloudflareAccountScalarFieldEnum | CloudflareAccountScalarFieldEnum[]
  }

  /**
   * CloudflareAccount findMany
   */
  export type CloudflareAccountFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CloudflareAccount
     */
    select?: CloudflareAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CloudflareAccount
     */
    omit?: CloudflareAccountOmit<ExtArgs> | null
    /**
     * Filter, which CloudflareAccounts to fetch.
     */
    where?: CloudflareAccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CloudflareAccounts to fetch.
     */
    orderBy?: CloudflareAccountOrderByWithRelationInput | CloudflareAccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CloudflareAccounts.
     */
    cursor?: CloudflareAccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CloudflareAccounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CloudflareAccounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CloudflareAccounts.
     */
    distinct?: CloudflareAccountScalarFieldEnum | CloudflareAccountScalarFieldEnum[]
  }

  /**
   * CloudflareAccount create
   */
  export type CloudflareAccountCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CloudflareAccount
     */
    select?: CloudflareAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CloudflareAccount
     */
    omit?: CloudflareAccountOmit<ExtArgs> | null
    /**
     * The data needed to create a CloudflareAccount.
     */
    data: XOR<CloudflareAccountCreateInput, CloudflareAccountUncheckedCreateInput>
  }

  /**
   * CloudflareAccount createMany
   */
  export type CloudflareAccountCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CloudflareAccounts.
     */
    data: CloudflareAccountCreateManyInput | CloudflareAccountCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CloudflareAccount createManyAndReturn
   */
  export type CloudflareAccountCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CloudflareAccount
     */
    select?: CloudflareAccountSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CloudflareAccount
     */
    omit?: CloudflareAccountOmit<ExtArgs> | null
    /**
     * The data used to create many CloudflareAccounts.
     */
    data: CloudflareAccountCreateManyInput | CloudflareAccountCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CloudflareAccount update
   */
  export type CloudflareAccountUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CloudflareAccount
     */
    select?: CloudflareAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CloudflareAccount
     */
    omit?: CloudflareAccountOmit<ExtArgs> | null
    /**
     * The data needed to update a CloudflareAccount.
     */
    data: XOR<CloudflareAccountUpdateInput, CloudflareAccountUncheckedUpdateInput>
    /**
     * Choose, which CloudflareAccount to update.
     */
    where: CloudflareAccountWhereUniqueInput
  }

  /**
   * CloudflareAccount updateMany
   */
  export type CloudflareAccountUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CloudflareAccounts.
     */
    data: XOR<CloudflareAccountUpdateManyMutationInput, CloudflareAccountUncheckedUpdateManyInput>
    /**
     * Filter which CloudflareAccounts to update
     */
    where?: CloudflareAccountWhereInput
    /**
     * Limit how many CloudflareAccounts to update.
     */
    limit?: number
  }

  /**
   * CloudflareAccount updateManyAndReturn
   */
  export type CloudflareAccountUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CloudflareAccount
     */
    select?: CloudflareAccountSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CloudflareAccount
     */
    omit?: CloudflareAccountOmit<ExtArgs> | null
    /**
     * The data used to update CloudflareAccounts.
     */
    data: XOR<CloudflareAccountUpdateManyMutationInput, CloudflareAccountUncheckedUpdateManyInput>
    /**
     * Filter which CloudflareAccounts to update
     */
    where?: CloudflareAccountWhereInput
    /**
     * Limit how many CloudflareAccounts to update.
     */
    limit?: number
  }

  /**
   * CloudflareAccount upsert
   */
  export type CloudflareAccountUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CloudflareAccount
     */
    select?: CloudflareAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CloudflareAccount
     */
    omit?: CloudflareAccountOmit<ExtArgs> | null
    /**
     * The filter to search for the CloudflareAccount to update in case it exists.
     */
    where: CloudflareAccountWhereUniqueInput
    /**
     * In case the CloudflareAccount found by the `where` argument doesn't exist, create a new CloudflareAccount with this data.
     */
    create: XOR<CloudflareAccountCreateInput, CloudflareAccountUncheckedCreateInput>
    /**
     * In case the CloudflareAccount was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CloudflareAccountUpdateInput, CloudflareAccountUncheckedUpdateInput>
  }

  /**
   * CloudflareAccount delete
   */
  export type CloudflareAccountDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CloudflareAccount
     */
    select?: CloudflareAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CloudflareAccount
     */
    omit?: CloudflareAccountOmit<ExtArgs> | null
    /**
     * Filter which CloudflareAccount to delete.
     */
    where: CloudflareAccountWhereUniqueInput
  }

  /**
   * CloudflareAccount deleteMany
   */
  export type CloudflareAccountDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CloudflareAccounts to delete
     */
    where?: CloudflareAccountWhereInput
    /**
     * Limit how many CloudflareAccounts to delete.
     */
    limit?: number
  }

  /**
   * CloudflareAccount without action
   */
  export type CloudflareAccountDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CloudflareAccount
     */
    select?: CloudflareAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CloudflareAccount
     */
    omit?: CloudflareAccountOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    password: 'password',
    role: 'role',
    teamId: 'teamId',
    telegramChatId: 'telegramChatId',
    telegramUserName: 'telegramUserName',
    token: 'token',
    tokenVersion: 'tokenVersion',
    tokenExpiry: 'tokenExpiry',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const CampaignScalarFieldEnum: {
    id: 'id',
    name: 'name',
    alias: 'alias',
    geo: 'geo',
    userId: 'userId'
  };

  export type CampaignScalarFieldEnum = (typeof CampaignScalarFieldEnum)[keyof typeof CampaignScalarFieldEnum]


  export const TeamScalarFieldEnum: {
    id: 'id',
    name: 'name',
    alias: 'alias'
  };

  export type TeamScalarFieldEnum = (typeof TeamScalarFieldEnum)[keyof typeof TeamScalarFieldEnum]


  export const ArchiveScalarFieldEnum: {
    id: 'id',
    name: 'name',
    path: 'path',
    userId: 'userId',
    createdAt: 'createdAt'
  };

  export type ArchiveScalarFieldEnum = (typeof ArchiveScalarFieldEnum)[keyof typeof ArchiveScalarFieldEnum]


  export const ServerScalarFieldEnum: {
    id: 'id',
    name: 'name',
    ip: 'ip',
    rootPassword: 'rootPassword',
    forgePassword: 'forgePassword',
    userId: 'userId',
    price: 'price',
    active: 'active',
    createdAt: 'createdAt',
    expiredAt: 'expiredAt',
    assignedAt: 'assignedAt',
    renewalAt: 'renewalAt'
  };

  export type ServerScalarFieldEnum = (typeof ServerScalarFieldEnum)[keyof typeof ServerScalarFieldEnum]


  export const InternalDomainScalarFieldEnum: {
    domainId: 'domainId'
  };

  export type InternalDomainScalarFieldEnum = (typeof InternalDomainScalarFieldEnum)[keyof typeof InternalDomainScalarFieldEnum]


  export const ExternalDomainScalarFieldEnum: {
    domainId: 'domainId'
  };

  export type ExternalDomainScalarFieldEnum = (typeof ExternalDomainScalarFieldEnum)[keyof typeof ExternalDomainScalarFieldEnum]


  export const DomainScalarFieldEnum: {
    id: 'id',
    name: 'name',
    type: 'type',
    status: 'status',
    serverId: 'serverId',
    price: 'price',
    repoId: 'repoId',
    sshUrl: 'sshUrl',
    hasSSL: 'hasSSL',
    campaign: 'campaign',
    deploymentType: 'deploymentType'
  };

  export type DomainScalarFieldEnum = (typeof DomainScalarFieldEnum)[keyof typeof DomainScalarFieldEnum]


  export const ForbiddenWordScalarFieldEnum: {
    id: 'id',
    word: 'word',
    isActive: 'isActive',
    createdAt: 'createdAt'
  };

  export type ForbiddenWordScalarFieldEnum = (typeof ForbiddenWordScalarFieldEnum)[keyof typeof ForbiddenWordScalarFieldEnum]


  export const NamecheapAccountScalarFieldEnum: {
    id: 'id',
    username: 'username',
    apiUser: 'apiUser',
    apiKey: 'apiKey',
    contacts: 'contacts'
  };

  export type NamecheapAccountScalarFieldEnum = (typeof NamecheapAccountScalarFieldEnum)[keyof typeof NamecheapAccountScalarFieldEnum]


  export const CloudflareAccountScalarFieldEnum: {
    id: 'id',
    name: 'name',
    apiToken: 'apiToken',
    accountId: 'accountId'
  };

  export type CloudflareAccountScalarFieldEnum = (typeof CloudflareAccountScalarFieldEnum)[keyof typeof CloudflareAccountScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'Role[]'
   */
  export type ListEnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DomainType'
   */
  export type EnumDomainTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DomainType'>
    


  /**
   * Reference to a field of type 'DomainType[]'
   */
  export type ListEnumDomainTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DomainType[]'>
    


  /**
   * Reference to a field of type 'DomainStatus'
   */
  export type EnumDomainStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DomainStatus'>
    


  /**
   * Reference to a field of type 'DomainStatus[]'
   */
  export type ListEnumDomainStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DomainStatus[]'>
    


  /**
   * Reference to a field of type 'DeploymentType'
   */
  export type EnumDeploymentTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DeploymentType'>
    


  /**
   * Reference to a field of type 'DeploymentType[]'
   */
  export type ListEnumDeploymentTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DeploymentType[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    teamId?: StringNullableFilter<"User"> | string | null
    telegramChatId?: StringNullableFilter<"User"> | string | null
    telegramUserName?: StringNullableFilter<"User"> | string | null
    token?: StringNullableFilter<"User"> | string | null
    tokenVersion?: IntFilter<"User"> | number
    tokenExpiry?: DateTimeNullableFilter<"User"> | Date | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    team?: XOR<TeamNullableScalarRelationFilter, TeamWhereInput> | null
    servers?: ServerListRelationFilter
    archives?: ArchiveListRelationFilter
    campaigns?: CampaignListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    password?: SortOrder
    role?: SortOrder
    teamId?: SortOrderInput | SortOrder
    telegramChatId?: SortOrderInput | SortOrder
    telegramUserName?: SortOrderInput | SortOrder
    token?: SortOrderInput | SortOrder
    tokenVersion?: SortOrder
    tokenExpiry?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    team?: TeamOrderByWithRelationInput
    servers?: ServerOrderByRelationAggregateInput
    archives?: ArchiveOrderByRelationAggregateInput
    campaigns?: CampaignOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name?: string
    telegramChatId?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    password?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    teamId?: StringNullableFilter<"User"> | string | null
    telegramUserName?: StringNullableFilter<"User"> | string | null
    token?: StringNullableFilter<"User"> | string | null
    tokenVersion?: IntFilter<"User"> | number
    tokenExpiry?: DateTimeNullableFilter<"User"> | Date | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    team?: XOR<TeamNullableScalarRelationFilter, TeamWhereInput> | null
    servers?: ServerListRelationFilter
    archives?: ArchiveListRelationFilter
    campaigns?: CampaignListRelationFilter
  }, "id" | "name" | "telegramChatId">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    password?: SortOrder
    role?: SortOrder
    teamId?: SortOrderInput | SortOrder
    telegramChatId?: SortOrderInput | SortOrder
    telegramUserName?: SortOrderInput | SortOrder
    token?: SortOrderInput | SortOrder
    tokenVersion?: SortOrder
    tokenExpiry?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    role?: EnumRoleWithAggregatesFilter<"User"> | $Enums.Role
    teamId?: StringNullableWithAggregatesFilter<"User"> | string | null
    telegramChatId?: StringNullableWithAggregatesFilter<"User"> | string | null
    telegramUserName?: StringNullableWithAggregatesFilter<"User"> | string | null
    token?: StringNullableWithAggregatesFilter<"User"> | string | null
    tokenVersion?: IntWithAggregatesFilter<"User"> | number
    tokenExpiry?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type CampaignWhereInput = {
    AND?: CampaignWhereInput | CampaignWhereInput[]
    OR?: CampaignWhereInput[]
    NOT?: CampaignWhereInput | CampaignWhereInput[]
    id?: StringFilter<"Campaign"> | string
    name?: StringFilter<"Campaign"> | string
    alias?: StringFilter<"Campaign"> | string
    geo?: StringNullableListFilter<"Campaign">
    userId?: StringFilter<"Campaign"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type CampaignOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    alias?: SortOrder
    geo?: SortOrder
    userId?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type CampaignWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CampaignWhereInput | CampaignWhereInput[]
    OR?: CampaignWhereInput[]
    NOT?: CampaignWhereInput | CampaignWhereInput[]
    name?: StringFilter<"Campaign"> | string
    alias?: StringFilter<"Campaign"> | string
    geo?: StringNullableListFilter<"Campaign">
    userId?: StringFilter<"Campaign"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type CampaignOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    alias?: SortOrder
    geo?: SortOrder
    userId?: SortOrder
    _count?: CampaignCountOrderByAggregateInput
    _max?: CampaignMaxOrderByAggregateInput
    _min?: CampaignMinOrderByAggregateInput
  }

  export type CampaignScalarWhereWithAggregatesInput = {
    AND?: CampaignScalarWhereWithAggregatesInput | CampaignScalarWhereWithAggregatesInput[]
    OR?: CampaignScalarWhereWithAggregatesInput[]
    NOT?: CampaignScalarWhereWithAggregatesInput | CampaignScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Campaign"> | string
    name?: StringWithAggregatesFilter<"Campaign"> | string
    alias?: StringWithAggregatesFilter<"Campaign"> | string
    geo?: StringNullableListFilter<"Campaign">
    userId?: StringWithAggregatesFilter<"Campaign"> | string
  }

  export type TeamWhereInput = {
    AND?: TeamWhereInput | TeamWhereInput[]
    OR?: TeamWhereInput[]
    NOT?: TeamWhereInput | TeamWhereInput[]
    id?: StringFilter<"Team"> | string
    name?: StringFilter<"Team"> | string
    alias?: StringFilter<"Team"> | string
    members?: UserListRelationFilter
  }

  export type TeamOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    alias?: SortOrder
    members?: UserOrderByRelationAggregateInput
  }

  export type TeamWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name?: string
    AND?: TeamWhereInput | TeamWhereInput[]
    OR?: TeamWhereInput[]
    NOT?: TeamWhereInput | TeamWhereInput[]
    alias?: StringFilter<"Team"> | string
    members?: UserListRelationFilter
  }, "id" | "name">

  export type TeamOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    alias?: SortOrder
    _count?: TeamCountOrderByAggregateInput
    _max?: TeamMaxOrderByAggregateInput
    _min?: TeamMinOrderByAggregateInput
  }

  export type TeamScalarWhereWithAggregatesInput = {
    AND?: TeamScalarWhereWithAggregatesInput | TeamScalarWhereWithAggregatesInput[]
    OR?: TeamScalarWhereWithAggregatesInput[]
    NOT?: TeamScalarWhereWithAggregatesInput | TeamScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Team"> | string
    name?: StringWithAggregatesFilter<"Team"> | string
    alias?: StringWithAggregatesFilter<"Team"> | string
  }

  export type ArchiveWhereInput = {
    AND?: ArchiveWhereInput | ArchiveWhereInput[]
    OR?: ArchiveWhereInput[]
    NOT?: ArchiveWhereInput | ArchiveWhereInput[]
    id?: StringFilter<"Archive"> | string
    name?: StringFilter<"Archive"> | string
    path?: StringFilter<"Archive"> | string
    userId?: StringFilter<"Archive"> | string
    createdAt?: DateTimeFilter<"Archive"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type ArchiveOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    path?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type ArchiveWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ArchiveWhereInput | ArchiveWhereInput[]
    OR?: ArchiveWhereInput[]
    NOT?: ArchiveWhereInput | ArchiveWhereInput[]
    name?: StringFilter<"Archive"> | string
    path?: StringFilter<"Archive"> | string
    userId?: StringFilter<"Archive"> | string
    createdAt?: DateTimeFilter<"Archive"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type ArchiveOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    path?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    _count?: ArchiveCountOrderByAggregateInput
    _max?: ArchiveMaxOrderByAggregateInput
    _min?: ArchiveMinOrderByAggregateInput
  }

  export type ArchiveScalarWhereWithAggregatesInput = {
    AND?: ArchiveScalarWhereWithAggregatesInput | ArchiveScalarWhereWithAggregatesInput[]
    OR?: ArchiveScalarWhereWithAggregatesInput[]
    NOT?: ArchiveScalarWhereWithAggregatesInput | ArchiveScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Archive"> | string
    name?: StringWithAggregatesFilter<"Archive"> | string
    path?: StringWithAggregatesFilter<"Archive"> | string
    userId?: StringWithAggregatesFilter<"Archive"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Archive"> | Date | string
  }

  export type ServerWhereInput = {
    AND?: ServerWhereInput | ServerWhereInput[]
    OR?: ServerWhereInput[]
    NOT?: ServerWhereInput | ServerWhereInput[]
    id?: StringFilter<"Server"> | string
    name?: StringFilter<"Server"> | string
    ip?: StringFilter<"Server"> | string
    rootPassword?: StringFilter<"Server"> | string
    forgePassword?: StringFilter<"Server"> | string
    userId?: StringNullableFilter<"Server"> | string | null
    price?: FloatFilter<"Server"> | number
    active?: BoolFilter<"Server"> | boolean
    createdAt?: DateTimeFilter<"Server"> | Date | string
    expiredAt?: DateTimeFilter<"Server"> | Date | string
    assignedAt?: DateTimeNullableFilter<"Server"> | Date | string | null
    renewalAt?: DateTimeNullableFilter<"Server"> | Date | string | null
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    domains?: DomainListRelationFilter
  }

  export type ServerOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    ip?: SortOrder
    rootPassword?: SortOrder
    forgePassword?: SortOrder
    userId?: SortOrderInput | SortOrder
    price?: SortOrder
    active?: SortOrder
    createdAt?: SortOrder
    expiredAt?: SortOrder
    assignedAt?: SortOrderInput | SortOrder
    renewalAt?: SortOrderInput | SortOrder
    user?: UserOrderByWithRelationInput
    domains?: DomainOrderByRelationAggregateInput
  }

  export type ServerWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ServerWhereInput | ServerWhereInput[]
    OR?: ServerWhereInput[]
    NOT?: ServerWhereInput | ServerWhereInput[]
    name?: StringFilter<"Server"> | string
    ip?: StringFilter<"Server"> | string
    rootPassword?: StringFilter<"Server"> | string
    forgePassword?: StringFilter<"Server"> | string
    userId?: StringNullableFilter<"Server"> | string | null
    price?: FloatFilter<"Server"> | number
    active?: BoolFilter<"Server"> | boolean
    createdAt?: DateTimeFilter<"Server"> | Date | string
    expiredAt?: DateTimeFilter<"Server"> | Date | string
    assignedAt?: DateTimeNullableFilter<"Server"> | Date | string | null
    renewalAt?: DateTimeNullableFilter<"Server"> | Date | string | null
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    domains?: DomainListRelationFilter
  }, "id">

  export type ServerOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    ip?: SortOrder
    rootPassword?: SortOrder
    forgePassword?: SortOrder
    userId?: SortOrderInput | SortOrder
    price?: SortOrder
    active?: SortOrder
    createdAt?: SortOrder
    expiredAt?: SortOrder
    assignedAt?: SortOrderInput | SortOrder
    renewalAt?: SortOrderInput | SortOrder
    _count?: ServerCountOrderByAggregateInput
    _avg?: ServerAvgOrderByAggregateInput
    _max?: ServerMaxOrderByAggregateInput
    _min?: ServerMinOrderByAggregateInput
    _sum?: ServerSumOrderByAggregateInput
  }

  export type ServerScalarWhereWithAggregatesInput = {
    AND?: ServerScalarWhereWithAggregatesInput | ServerScalarWhereWithAggregatesInput[]
    OR?: ServerScalarWhereWithAggregatesInput[]
    NOT?: ServerScalarWhereWithAggregatesInput | ServerScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Server"> | string
    name?: StringWithAggregatesFilter<"Server"> | string
    ip?: StringWithAggregatesFilter<"Server"> | string
    rootPassword?: StringWithAggregatesFilter<"Server"> | string
    forgePassword?: StringWithAggregatesFilter<"Server"> | string
    userId?: StringNullableWithAggregatesFilter<"Server"> | string | null
    price?: FloatWithAggregatesFilter<"Server"> | number
    active?: BoolWithAggregatesFilter<"Server"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Server"> | Date | string
    expiredAt?: DateTimeWithAggregatesFilter<"Server"> | Date | string
    assignedAt?: DateTimeNullableWithAggregatesFilter<"Server"> | Date | string | null
    renewalAt?: DateTimeNullableWithAggregatesFilter<"Server"> | Date | string | null
  }

  export type InternalDomainWhereInput = {
    AND?: InternalDomainWhereInput | InternalDomainWhereInput[]
    OR?: InternalDomainWhereInput[]
    NOT?: InternalDomainWhereInput | InternalDomainWhereInput[]
    domainId?: StringFilter<"InternalDomain"> | string
    domain?: XOR<DomainScalarRelationFilter, DomainWhereInput>
  }

  export type InternalDomainOrderByWithRelationInput = {
    domainId?: SortOrder
    domain?: DomainOrderByWithRelationInput
  }

  export type InternalDomainWhereUniqueInput = Prisma.AtLeast<{
    domainId?: string
    AND?: InternalDomainWhereInput | InternalDomainWhereInput[]
    OR?: InternalDomainWhereInput[]
    NOT?: InternalDomainWhereInput | InternalDomainWhereInput[]
    domain?: XOR<DomainScalarRelationFilter, DomainWhereInput>
  }, "domainId">

  export type InternalDomainOrderByWithAggregationInput = {
    domainId?: SortOrder
    _count?: InternalDomainCountOrderByAggregateInput
    _max?: InternalDomainMaxOrderByAggregateInput
    _min?: InternalDomainMinOrderByAggregateInput
  }

  export type InternalDomainScalarWhereWithAggregatesInput = {
    AND?: InternalDomainScalarWhereWithAggregatesInput | InternalDomainScalarWhereWithAggregatesInput[]
    OR?: InternalDomainScalarWhereWithAggregatesInput[]
    NOT?: InternalDomainScalarWhereWithAggregatesInput | InternalDomainScalarWhereWithAggregatesInput[]
    domainId?: StringWithAggregatesFilter<"InternalDomain"> | string
  }

  export type ExternalDomainWhereInput = {
    AND?: ExternalDomainWhereInput | ExternalDomainWhereInput[]
    OR?: ExternalDomainWhereInput[]
    NOT?: ExternalDomainWhereInput | ExternalDomainWhereInput[]
    domainId?: StringFilter<"ExternalDomain"> | string
    domain?: XOR<DomainScalarRelationFilter, DomainWhereInput>
  }

  export type ExternalDomainOrderByWithRelationInput = {
    domainId?: SortOrder
    domain?: DomainOrderByWithRelationInput
  }

  export type ExternalDomainWhereUniqueInput = Prisma.AtLeast<{
    domainId?: string
    AND?: ExternalDomainWhereInput | ExternalDomainWhereInput[]
    OR?: ExternalDomainWhereInput[]
    NOT?: ExternalDomainWhereInput | ExternalDomainWhereInput[]
    domain?: XOR<DomainScalarRelationFilter, DomainWhereInput>
  }, "domainId">

  export type ExternalDomainOrderByWithAggregationInput = {
    domainId?: SortOrder
    _count?: ExternalDomainCountOrderByAggregateInput
    _max?: ExternalDomainMaxOrderByAggregateInput
    _min?: ExternalDomainMinOrderByAggregateInput
  }

  export type ExternalDomainScalarWhereWithAggregatesInput = {
    AND?: ExternalDomainScalarWhereWithAggregatesInput | ExternalDomainScalarWhereWithAggregatesInput[]
    OR?: ExternalDomainScalarWhereWithAggregatesInput[]
    NOT?: ExternalDomainScalarWhereWithAggregatesInput | ExternalDomainScalarWhereWithAggregatesInput[]
    domainId?: StringWithAggregatesFilter<"ExternalDomain"> | string
  }

  export type DomainWhereInput = {
    AND?: DomainWhereInput | DomainWhereInput[]
    OR?: DomainWhereInput[]
    NOT?: DomainWhereInput | DomainWhereInput[]
    id?: StringFilter<"Domain"> | string
    name?: StringFilter<"Domain"> | string
    type?: EnumDomainTypeFilter<"Domain"> | $Enums.DomainType
    status?: EnumDomainStatusFilter<"Domain"> | $Enums.DomainStatus
    serverId?: StringNullableFilter<"Domain"> | string | null
    price?: FloatFilter<"Domain"> | number
    repoId?: StringFilter<"Domain"> | string
    sshUrl?: StringFilter<"Domain"> | string
    hasSSL?: BoolFilter<"Domain"> | boolean
    campaign?: StringFilter<"Domain"> | string
    deploymentType?: EnumDeploymentTypeFilter<"Domain"> | $Enums.DeploymentType
    server?: XOR<ServerNullableScalarRelationFilter, ServerWhereInput> | null
    internal?: XOR<InternalDomainNullableScalarRelationFilter, InternalDomainWhereInput> | null
    external?: XOR<ExternalDomainNullableScalarRelationFilter, ExternalDomainWhereInput> | null
  }

  export type DomainOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    status?: SortOrder
    serverId?: SortOrderInput | SortOrder
    price?: SortOrder
    repoId?: SortOrder
    sshUrl?: SortOrder
    hasSSL?: SortOrder
    campaign?: SortOrder
    deploymentType?: SortOrder
    server?: ServerOrderByWithRelationInput
    internal?: InternalDomainOrderByWithRelationInput
    external?: ExternalDomainOrderByWithRelationInput
  }

  export type DomainWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name?: string
    AND?: DomainWhereInput | DomainWhereInput[]
    OR?: DomainWhereInput[]
    NOT?: DomainWhereInput | DomainWhereInput[]
    type?: EnumDomainTypeFilter<"Domain"> | $Enums.DomainType
    status?: EnumDomainStatusFilter<"Domain"> | $Enums.DomainStatus
    serverId?: StringNullableFilter<"Domain"> | string | null
    price?: FloatFilter<"Domain"> | number
    repoId?: StringFilter<"Domain"> | string
    sshUrl?: StringFilter<"Domain"> | string
    hasSSL?: BoolFilter<"Domain"> | boolean
    campaign?: StringFilter<"Domain"> | string
    deploymentType?: EnumDeploymentTypeFilter<"Domain"> | $Enums.DeploymentType
    server?: XOR<ServerNullableScalarRelationFilter, ServerWhereInput> | null
    internal?: XOR<InternalDomainNullableScalarRelationFilter, InternalDomainWhereInput> | null
    external?: XOR<ExternalDomainNullableScalarRelationFilter, ExternalDomainWhereInput> | null
  }, "id" | "name">

  export type DomainOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    status?: SortOrder
    serverId?: SortOrderInput | SortOrder
    price?: SortOrder
    repoId?: SortOrder
    sshUrl?: SortOrder
    hasSSL?: SortOrder
    campaign?: SortOrder
    deploymentType?: SortOrder
    _count?: DomainCountOrderByAggregateInput
    _avg?: DomainAvgOrderByAggregateInput
    _max?: DomainMaxOrderByAggregateInput
    _min?: DomainMinOrderByAggregateInput
    _sum?: DomainSumOrderByAggregateInput
  }

  export type DomainScalarWhereWithAggregatesInput = {
    AND?: DomainScalarWhereWithAggregatesInput | DomainScalarWhereWithAggregatesInput[]
    OR?: DomainScalarWhereWithAggregatesInput[]
    NOT?: DomainScalarWhereWithAggregatesInput | DomainScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Domain"> | string
    name?: StringWithAggregatesFilter<"Domain"> | string
    type?: EnumDomainTypeWithAggregatesFilter<"Domain"> | $Enums.DomainType
    status?: EnumDomainStatusWithAggregatesFilter<"Domain"> | $Enums.DomainStatus
    serverId?: StringNullableWithAggregatesFilter<"Domain"> | string | null
    price?: FloatWithAggregatesFilter<"Domain"> | number
    repoId?: StringWithAggregatesFilter<"Domain"> | string
    sshUrl?: StringWithAggregatesFilter<"Domain"> | string
    hasSSL?: BoolWithAggregatesFilter<"Domain"> | boolean
    campaign?: StringWithAggregatesFilter<"Domain"> | string
    deploymentType?: EnumDeploymentTypeWithAggregatesFilter<"Domain"> | $Enums.DeploymentType
  }

  export type ForbiddenWordWhereInput = {
    AND?: ForbiddenWordWhereInput | ForbiddenWordWhereInput[]
    OR?: ForbiddenWordWhereInput[]
    NOT?: ForbiddenWordWhereInput | ForbiddenWordWhereInput[]
    id?: StringFilter<"ForbiddenWord"> | string
    word?: StringFilter<"ForbiddenWord"> | string
    isActive?: BoolFilter<"ForbiddenWord"> | boolean
    createdAt?: DateTimeFilter<"ForbiddenWord"> | Date | string
  }

  export type ForbiddenWordOrderByWithRelationInput = {
    id?: SortOrder
    word?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
  }

  export type ForbiddenWordWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    word?: string
    AND?: ForbiddenWordWhereInput | ForbiddenWordWhereInput[]
    OR?: ForbiddenWordWhereInput[]
    NOT?: ForbiddenWordWhereInput | ForbiddenWordWhereInput[]
    isActive?: BoolFilter<"ForbiddenWord"> | boolean
    createdAt?: DateTimeFilter<"ForbiddenWord"> | Date | string
  }, "id" | "word">

  export type ForbiddenWordOrderByWithAggregationInput = {
    id?: SortOrder
    word?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    _count?: ForbiddenWordCountOrderByAggregateInput
    _max?: ForbiddenWordMaxOrderByAggregateInput
    _min?: ForbiddenWordMinOrderByAggregateInput
  }

  export type ForbiddenWordScalarWhereWithAggregatesInput = {
    AND?: ForbiddenWordScalarWhereWithAggregatesInput | ForbiddenWordScalarWhereWithAggregatesInput[]
    OR?: ForbiddenWordScalarWhereWithAggregatesInput[]
    NOT?: ForbiddenWordScalarWhereWithAggregatesInput | ForbiddenWordScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ForbiddenWord"> | string
    word?: StringWithAggregatesFilter<"ForbiddenWord"> | string
    isActive?: BoolWithAggregatesFilter<"ForbiddenWord"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"ForbiddenWord"> | Date | string
  }

  export type NamecheapAccountWhereInput = {
    AND?: NamecheapAccountWhereInput | NamecheapAccountWhereInput[]
    OR?: NamecheapAccountWhereInput[]
    NOT?: NamecheapAccountWhereInput | NamecheapAccountWhereInput[]
    id?: StringFilter<"NamecheapAccount"> | string
    username?: StringFilter<"NamecheapAccount"> | string
    apiUser?: StringFilter<"NamecheapAccount"> | string
    apiKey?: StringFilter<"NamecheapAccount"> | string
    contacts?: JsonNullableFilter<"NamecheapAccount">
  }

  export type NamecheapAccountOrderByWithRelationInput = {
    id?: SortOrder
    username?: SortOrder
    apiUser?: SortOrder
    apiKey?: SortOrder
    contacts?: SortOrderInput | SortOrder
  }

  export type NamecheapAccountWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    username?: string
    AND?: NamecheapAccountWhereInput | NamecheapAccountWhereInput[]
    OR?: NamecheapAccountWhereInput[]
    NOT?: NamecheapAccountWhereInput | NamecheapAccountWhereInput[]
    apiUser?: StringFilter<"NamecheapAccount"> | string
    apiKey?: StringFilter<"NamecheapAccount"> | string
    contacts?: JsonNullableFilter<"NamecheapAccount">
  }, "id" | "username">

  export type NamecheapAccountOrderByWithAggregationInput = {
    id?: SortOrder
    username?: SortOrder
    apiUser?: SortOrder
    apiKey?: SortOrder
    contacts?: SortOrderInput | SortOrder
    _count?: NamecheapAccountCountOrderByAggregateInput
    _max?: NamecheapAccountMaxOrderByAggregateInput
    _min?: NamecheapAccountMinOrderByAggregateInput
  }

  export type NamecheapAccountScalarWhereWithAggregatesInput = {
    AND?: NamecheapAccountScalarWhereWithAggregatesInput | NamecheapAccountScalarWhereWithAggregatesInput[]
    OR?: NamecheapAccountScalarWhereWithAggregatesInput[]
    NOT?: NamecheapAccountScalarWhereWithAggregatesInput | NamecheapAccountScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"NamecheapAccount"> | string
    username?: StringWithAggregatesFilter<"NamecheapAccount"> | string
    apiUser?: StringWithAggregatesFilter<"NamecheapAccount"> | string
    apiKey?: StringWithAggregatesFilter<"NamecheapAccount"> | string
    contacts?: JsonNullableWithAggregatesFilter<"NamecheapAccount">
  }

  export type CloudflareAccountWhereInput = {
    AND?: CloudflareAccountWhereInput | CloudflareAccountWhereInput[]
    OR?: CloudflareAccountWhereInput[]
    NOT?: CloudflareAccountWhereInput | CloudflareAccountWhereInput[]
    id?: StringFilter<"CloudflareAccount"> | string
    name?: StringFilter<"CloudflareAccount"> | string
    apiToken?: StringFilter<"CloudflareAccount"> | string
    accountId?: StringFilter<"CloudflareAccount"> | string
  }

  export type CloudflareAccountOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    apiToken?: SortOrder
    accountId?: SortOrder
  }

  export type CloudflareAccountWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name?: string
    AND?: CloudflareAccountWhereInput | CloudflareAccountWhereInput[]
    OR?: CloudflareAccountWhereInput[]
    NOT?: CloudflareAccountWhereInput | CloudflareAccountWhereInput[]
    apiToken?: StringFilter<"CloudflareAccount"> | string
    accountId?: StringFilter<"CloudflareAccount"> | string
  }, "id" | "name">

  export type CloudflareAccountOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    apiToken?: SortOrder
    accountId?: SortOrder
    _count?: CloudflareAccountCountOrderByAggregateInput
    _max?: CloudflareAccountMaxOrderByAggregateInput
    _min?: CloudflareAccountMinOrderByAggregateInput
  }

  export type CloudflareAccountScalarWhereWithAggregatesInput = {
    AND?: CloudflareAccountScalarWhereWithAggregatesInput | CloudflareAccountScalarWhereWithAggregatesInput[]
    OR?: CloudflareAccountScalarWhereWithAggregatesInput[]
    NOT?: CloudflareAccountScalarWhereWithAggregatesInput | CloudflareAccountScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"CloudflareAccount"> | string
    name?: StringWithAggregatesFilter<"CloudflareAccount"> | string
    apiToken?: StringWithAggregatesFilter<"CloudflareAccount"> | string
    accountId?: StringWithAggregatesFilter<"CloudflareAccount"> | string
  }

  export type UserCreateInput = {
    id?: string
    name: string
    password: string
    role?: $Enums.Role
    telegramChatId?: string | null
    telegramUserName?: string | null
    token?: string | null
    tokenVersion?: number
    tokenExpiry?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    team?: TeamCreateNestedOneWithoutMembersInput
    servers?: ServerCreateNestedManyWithoutUserInput
    archives?: ArchiveCreateNestedManyWithoutUserInput
    campaigns?: CampaignCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    name: string
    password: string
    role?: $Enums.Role
    teamId?: string | null
    telegramChatId?: string | null
    telegramUserName?: string | null
    token?: string | null
    tokenVersion?: number
    tokenExpiry?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    servers?: ServerUncheckedCreateNestedManyWithoutUserInput
    archives?: ArchiveUncheckedCreateNestedManyWithoutUserInput
    campaigns?: CampaignUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    telegramChatId?: NullableStringFieldUpdateOperationsInput | string | null
    telegramUserName?: NullableStringFieldUpdateOperationsInput | string | null
    token?: NullableStringFieldUpdateOperationsInput | string | null
    tokenVersion?: IntFieldUpdateOperationsInput | number
    tokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    team?: TeamUpdateOneWithoutMembersNestedInput
    servers?: ServerUpdateManyWithoutUserNestedInput
    archives?: ArchiveUpdateManyWithoutUserNestedInput
    campaigns?: CampaignUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    teamId?: NullableStringFieldUpdateOperationsInput | string | null
    telegramChatId?: NullableStringFieldUpdateOperationsInput | string | null
    telegramUserName?: NullableStringFieldUpdateOperationsInput | string | null
    token?: NullableStringFieldUpdateOperationsInput | string | null
    tokenVersion?: IntFieldUpdateOperationsInput | number
    tokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    servers?: ServerUncheckedUpdateManyWithoutUserNestedInput
    archives?: ArchiveUncheckedUpdateManyWithoutUserNestedInput
    campaigns?: CampaignUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    name: string
    password: string
    role?: $Enums.Role
    teamId?: string | null
    telegramChatId?: string | null
    telegramUserName?: string | null
    token?: string | null
    tokenVersion?: number
    tokenExpiry?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    telegramChatId?: NullableStringFieldUpdateOperationsInput | string | null
    telegramUserName?: NullableStringFieldUpdateOperationsInput | string | null
    token?: NullableStringFieldUpdateOperationsInput | string | null
    tokenVersion?: IntFieldUpdateOperationsInput | number
    tokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    teamId?: NullableStringFieldUpdateOperationsInput | string | null
    telegramChatId?: NullableStringFieldUpdateOperationsInput | string | null
    telegramUserName?: NullableStringFieldUpdateOperationsInput | string | null
    token?: NullableStringFieldUpdateOperationsInput | string | null
    tokenVersion?: IntFieldUpdateOperationsInput | number
    tokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CampaignCreateInput = {
    id?: string
    name: string
    alias: string
    geo?: CampaignCreategeoInput | string[]
    user: UserCreateNestedOneWithoutCampaignsInput
  }

  export type CampaignUncheckedCreateInput = {
    id?: string
    name: string
    alias: string
    geo?: CampaignCreategeoInput | string[]
    userId: string
  }

  export type CampaignUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    alias?: StringFieldUpdateOperationsInput | string
    geo?: CampaignUpdategeoInput | string[]
    user?: UserUpdateOneRequiredWithoutCampaignsNestedInput
  }

  export type CampaignUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    alias?: StringFieldUpdateOperationsInput | string
    geo?: CampaignUpdategeoInput | string[]
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type CampaignCreateManyInput = {
    id?: string
    name: string
    alias: string
    geo?: CampaignCreategeoInput | string[]
    userId: string
  }

  export type CampaignUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    alias?: StringFieldUpdateOperationsInput | string
    geo?: CampaignUpdategeoInput | string[]
  }

  export type CampaignUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    alias?: StringFieldUpdateOperationsInput | string
    geo?: CampaignUpdategeoInput | string[]
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type TeamCreateInput = {
    id?: string
    name: string
    alias?: string
    members?: UserCreateNestedManyWithoutTeamInput
  }

  export type TeamUncheckedCreateInput = {
    id?: string
    name: string
    alias?: string
    members?: UserUncheckedCreateNestedManyWithoutTeamInput
  }

  export type TeamUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    alias?: StringFieldUpdateOperationsInput | string
    members?: UserUpdateManyWithoutTeamNestedInput
  }

  export type TeamUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    alias?: StringFieldUpdateOperationsInput | string
    members?: UserUncheckedUpdateManyWithoutTeamNestedInput
  }

  export type TeamCreateManyInput = {
    id?: string
    name: string
    alias?: string
  }

  export type TeamUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    alias?: StringFieldUpdateOperationsInput | string
  }

  export type TeamUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    alias?: StringFieldUpdateOperationsInput | string
  }

  export type ArchiveCreateInput = {
    id?: string
    name: string
    path: string
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutArchivesInput
  }

  export type ArchiveUncheckedCreateInput = {
    id?: string
    name: string
    path: string
    userId: string
    createdAt?: Date | string
  }

  export type ArchiveUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    path?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutArchivesNestedInput
  }

  export type ArchiveUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    path?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ArchiveCreateManyInput = {
    id?: string
    name: string
    path: string
    userId: string
    createdAt?: Date | string
  }

  export type ArchiveUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    path?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ArchiveUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    path?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ServerCreateInput = {
    id: string
    name: string
    ip: string
    rootPassword: string
    forgePassword: string
    price?: number
    active?: boolean
    createdAt?: Date | string
    expiredAt?: Date | string
    assignedAt?: Date | string | null
    renewalAt?: Date | string | null
    user?: UserCreateNestedOneWithoutServersInput
    domains?: DomainCreateNestedManyWithoutServerInput
  }

  export type ServerUncheckedCreateInput = {
    id: string
    name: string
    ip: string
    rootPassword: string
    forgePassword: string
    userId?: string | null
    price?: number
    active?: boolean
    createdAt?: Date | string
    expiredAt?: Date | string
    assignedAt?: Date | string | null
    renewalAt?: Date | string | null
    domains?: DomainUncheckedCreateNestedManyWithoutServerInput
  }

  export type ServerUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    ip?: StringFieldUpdateOperationsInput | string
    rootPassword?: StringFieldUpdateOperationsInput | string
    forgePassword?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    assignedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    renewalAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user?: UserUpdateOneWithoutServersNestedInput
    domains?: DomainUpdateManyWithoutServerNestedInput
  }

  export type ServerUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    ip?: StringFieldUpdateOperationsInput | string
    rootPassword?: StringFieldUpdateOperationsInput | string
    forgePassword?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    price?: FloatFieldUpdateOperationsInput | number
    active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    assignedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    renewalAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    domains?: DomainUncheckedUpdateManyWithoutServerNestedInput
  }

  export type ServerCreateManyInput = {
    id: string
    name: string
    ip: string
    rootPassword: string
    forgePassword: string
    userId?: string | null
    price?: number
    active?: boolean
    createdAt?: Date | string
    expiredAt?: Date | string
    assignedAt?: Date | string | null
    renewalAt?: Date | string | null
  }

  export type ServerUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    ip?: StringFieldUpdateOperationsInput | string
    rootPassword?: StringFieldUpdateOperationsInput | string
    forgePassword?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    assignedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    renewalAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ServerUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    ip?: StringFieldUpdateOperationsInput | string
    rootPassword?: StringFieldUpdateOperationsInput | string
    forgePassword?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    price?: FloatFieldUpdateOperationsInput | number
    active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    assignedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    renewalAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type InternalDomainCreateInput = {
    domain: DomainCreateNestedOneWithoutInternalInput
  }

  export type InternalDomainUncheckedCreateInput = {
    domainId: string
  }

  export type InternalDomainUpdateInput = {
    domain?: DomainUpdateOneRequiredWithoutInternalNestedInput
  }

  export type InternalDomainUncheckedUpdateInput = {
    domainId?: StringFieldUpdateOperationsInput | string
  }

  export type InternalDomainCreateManyInput = {
    domainId: string
  }

  export type InternalDomainUpdateManyMutationInput = {

  }

  export type InternalDomainUncheckedUpdateManyInput = {
    domainId?: StringFieldUpdateOperationsInput | string
  }

  export type ExternalDomainCreateInput = {
    domain: DomainCreateNestedOneWithoutExternalInput
  }

  export type ExternalDomainUncheckedCreateInput = {
    domainId: string
  }

  export type ExternalDomainUpdateInput = {
    domain?: DomainUpdateOneRequiredWithoutExternalNestedInput
  }

  export type ExternalDomainUncheckedUpdateInput = {
    domainId?: StringFieldUpdateOperationsInput | string
  }

  export type ExternalDomainCreateManyInput = {
    domainId: string
  }

  export type ExternalDomainUpdateManyMutationInput = {

  }

  export type ExternalDomainUncheckedUpdateManyInput = {
    domainId?: StringFieldUpdateOperationsInput | string
  }

  export type DomainCreateInput = {
    id: string
    name: string
    type: $Enums.DomainType
    status?: $Enums.DomainStatus
    price?: number
    repoId: string
    sshUrl: string
    hasSSL?: boolean
    campaign?: string
    deploymentType?: $Enums.DeploymentType
    server?: ServerCreateNestedOneWithoutDomainsInput
    internal?: InternalDomainCreateNestedOneWithoutDomainInput
    external?: ExternalDomainCreateNestedOneWithoutDomainInput
  }

  export type DomainUncheckedCreateInput = {
    id: string
    name: string
    type: $Enums.DomainType
    status?: $Enums.DomainStatus
    serverId?: string | null
    price?: number
    repoId: string
    sshUrl: string
    hasSSL?: boolean
    campaign?: string
    deploymentType?: $Enums.DeploymentType
    internal?: InternalDomainUncheckedCreateNestedOneWithoutDomainInput
    external?: ExternalDomainUncheckedCreateNestedOneWithoutDomainInput
  }

  export type DomainUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumDomainTypeFieldUpdateOperationsInput | $Enums.DomainType
    status?: EnumDomainStatusFieldUpdateOperationsInput | $Enums.DomainStatus
    price?: FloatFieldUpdateOperationsInput | number
    repoId?: StringFieldUpdateOperationsInput | string
    sshUrl?: StringFieldUpdateOperationsInput | string
    hasSSL?: BoolFieldUpdateOperationsInput | boolean
    campaign?: StringFieldUpdateOperationsInput | string
    deploymentType?: EnumDeploymentTypeFieldUpdateOperationsInput | $Enums.DeploymentType
    server?: ServerUpdateOneWithoutDomainsNestedInput
    internal?: InternalDomainUpdateOneWithoutDomainNestedInput
    external?: ExternalDomainUpdateOneWithoutDomainNestedInput
  }

  export type DomainUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumDomainTypeFieldUpdateOperationsInput | $Enums.DomainType
    status?: EnumDomainStatusFieldUpdateOperationsInput | $Enums.DomainStatus
    serverId?: NullableStringFieldUpdateOperationsInput | string | null
    price?: FloatFieldUpdateOperationsInput | number
    repoId?: StringFieldUpdateOperationsInput | string
    sshUrl?: StringFieldUpdateOperationsInput | string
    hasSSL?: BoolFieldUpdateOperationsInput | boolean
    campaign?: StringFieldUpdateOperationsInput | string
    deploymentType?: EnumDeploymentTypeFieldUpdateOperationsInput | $Enums.DeploymentType
    internal?: InternalDomainUncheckedUpdateOneWithoutDomainNestedInput
    external?: ExternalDomainUncheckedUpdateOneWithoutDomainNestedInput
  }

  export type DomainCreateManyInput = {
    id: string
    name: string
    type: $Enums.DomainType
    status?: $Enums.DomainStatus
    serverId?: string | null
    price?: number
    repoId: string
    sshUrl: string
    hasSSL?: boolean
    campaign?: string
    deploymentType?: $Enums.DeploymentType
  }

  export type DomainUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumDomainTypeFieldUpdateOperationsInput | $Enums.DomainType
    status?: EnumDomainStatusFieldUpdateOperationsInput | $Enums.DomainStatus
    price?: FloatFieldUpdateOperationsInput | number
    repoId?: StringFieldUpdateOperationsInput | string
    sshUrl?: StringFieldUpdateOperationsInput | string
    hasSSL?: BoolFieldUpdateOperationsInput | boolean
    campaign?: StringFieldUpdateOperationsInput | string
    deploymentType?: EnumDeploymentTypeFieldUpdateOperationsInput | $Enums.DeploymentType
  }

  export type DomainUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumDomainTypeFieldUpdateOperationsInput | $Enums.DomainType
    status?: EnumDomainStatusFieldUpdateOperationsInput | $Enums.DomainStatus
    serverId?: NullableStringFieldUpdateOperationsInput | string | null
    price?: FloatFieldUpdateOperationsInput | number
    repoId?: StringFieldUpdateOperationsInput | string
    sshUrl?: StringFieldUpdateOperationsInput | string
    hasSSL?: BoolFieldUpdateOperationsInput | boolean
    campaign?: StringFieldUpdateOperationsInput | string
    deploymentType?: EnumDeploymentTypeFieldUpdateOperationsInput | $Enums.DeploymentType
  }

  export type ForbiddenWordCreateInput = {
    id?: string
    word: string
    isActive?: boolean
    createdAt?: Date | string
  }

  export type ForbiddenWordUncheckedCreateInput = {
    id?: string
    word: string
    isActive?: boolean
    createdAt?: Date | string
  }

  export type ForbiddenWordUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    word?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ForbiddenWordUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    word?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ForbiddenWordCreateManyInput = {
    id?: string
    word: string
    isActive?: boolean
    createdAt?: Date | string
  }

  export type ForbiddenWordUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    word?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ForbiddenWordUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    word?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NamecheapAccountCreateInput = {
    id?: string
    username: string
    apiUser: string
    apiKey: string
    contacts?: NullableJsonNullValueInput | InputJsonValue
  }

  export type NamecheapAccountUncheckedCreateInput = {
    id?: string
    username: string
    apiUser: string
    apiKey: string
    contacts?: NullableJsonNullValueInput | InputJsonValue
  }

  export type NamecheapAccountUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    apiUser?: StringFieldUpdateOperationsInput | string
    apiKey?: StringFieldUpdateOperationsInput | string
    contacts?: NullableJsonNullValueInput | InputJsonValue
  }

  export type NamecheapAccountUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    apiUser?: StringFieldUpdateOperationsInput | string
    apiKey?: StringFieldUpdateOperationsInput | string
    contacts?: NullableJsonNullValueInput | InputJsonValue
  }

  export type NamecheapAccountCreateManyInput = {
    id?: string
    username: string
    apiUser: string
    apiKey: string
    contacts?: NullableJsonNullValueInput | InputJsonValue
  }

  export type NamecheapAccountUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    apiUser?: StringFieldUpdateOperationsInput | string
    apiKey?: StringFieldUpdateOperationsInput | string
    contacts?: NullableJsonNullValueInput | InputJsonValue
  }

  export type NamecheapAccountUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    apiUser?: StringFieldUpdateOperationsInput | string
    apiKey?: StringFieldUpdateOperationsInput | string
    contacts?: NullableJsonNullValueInput | InputJsonValue
  }

  export type CloudflareAccountCreateInput = {
    id?: string
    name: string
    apiToken: string
    accountId: string
  }

  export type CloudflareAccountUncheckedCreateInput = {
    id?: string
    name: string
    apiToken: string
    accountId: string
  }

  export type CloudflareAccountUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    apiToken?: StringFieldUpdateOperationsInput | string
    accountId?: StringFieldUpdateOperationsInput | string
  }

  export type CloudflareAccountUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    apiToken?: StringFieldUpdateOperationsInput | string
    accountId?: StringFieldUpdateOperationsInput | string
  }

  export type CloudflareAccountCreateManyInput = {
    id?: string
    name: string
    apiToken: string
    accountId: string
  }

  export type CloudflareAccountUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    apiToken?: StringFieldUpdateOperationsInput | string
    accountId?: StringFieldUpdateOperationsInput | string
  }

  export type CloudflareAccountUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    apiToken?: StringFieldUpdateOperationsInput | string
    accountId?: StringFieldUpdateOperationsInput | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type TeamNullableScalarRelationFilter = {
    is?: TeamWhereInput | null
    isNot?: TeamWhereInput | null
  }

  export type ServerListRelationFilter = {
    every?: ServerWhereInput
    some?: ServerWhereInput
    none?: ServerWhereInput
  }

  export type ArchiveListRelationFilter = {
    every?: ArchiveWhereInput
    some?: ArchiveWhereInput
    none?: ArchiveWhereInput
  }

  export type CampaignListRelationFilter = {
    every?: CampaignWhereInput
    some?: CampaignWhereInput
    none?: CampaignWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ServerOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ArchiveOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CampaignOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    password?: SortOrder
    role?: SortOrder
    teamId?: SortOrder
    telegramChatId?: SortOrder
    telegramUserName?: SortOrder
    token?: SortOrder
    tokenVersion?: SortOrder
    tokenExpiry?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    tokenVersion?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    password?: SortOrder
    role?: SortOrder
    teamId?: SortOrder
    telegramChatId?: SortOrder
    telegramUserName?: SortOrder
    token?: SortOrder
    tokenVersion?: SortOrder
    tokenExpiry?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    password?: SortOrder
    role?: SortOrder
    teamId?: SortOrder
    telegramChatId?: SortOrder
    telegramUserName?: SortOrder
    token?: SortOrder
    tokenVersion?: SortOrder
    tokenExpiry?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    tokenVersion?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type CampaignCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    alias?: SortOrder
    geo?: SortOrder
    userId?: SortOrder
  }

  export type CampaignMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    alias?: SortOrder
    userId?: SortOrder
  }

  export type CampaignMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    alias?: SortOrder
    userId?: SortOrder
  }

  export type UserListRelationFilter = {
    every?: UserWhereInput
    some?: UserWhereInput
    none?: UserWhereInput
  }

  export type UserOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TeamCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    alias?: SortOrder
  }

  export type TeamMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    alias?: SortOrder
  }

  export type TeamMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    alias?: SortOrder
  }

  export type ArchiveCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    path?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
  }

  export type ArchiveMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    path?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
  }

  export type ArchiveMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    path?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type UserNullableScalarRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type DomainListRelationFilter = {
    every?: DomainWhereInput
    some?: DomainWhereInput
    none?: DomainWhereInput
  }

  export type DomainOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ServerCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    ip?: SortOrder
    rootPassword?: SortOrder
    forgePassword?: SortOrder
    userId?: SortOrder
    price?: SortOrder
    active?: SortOrder
    createdAt?: SortOrder
    expiredAt?: SortOrder
    assignedAt?: SortOrder
    renewalAt?: SortOrder
  }

  export type ServerAvgOrderByAggregateInput = {
    price?: SortOrder
  }

  export type ServerMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    ip?: SortOrder
    rootPassword?: SortOrder
    forgePassword?: SortOrder
    userId?: SortOrder
    price?: SortOrder
    active?: SortOrder
    createdAt?: SortOrder
    expiredAt?: SortOrder
    assignedAt?: SortOrder
    renewalAt?: SortOrder
  }

  export type ServerMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    ip?: SortOrder
    rootPassword?: SortOrder
    forgePassword?: SortOrder
    userId?: SortOrder
    price?: SortOrder
    active?: SortOrder
    createdAt?: SortOrder
    expiredAt?: SortOrder
    assignedAt?: SortOrder
    renewalAt?: SortOrder
  }

  export type ServerSumOrderByAggregateInput = {
    price?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DomainScalarRelationFilter = {
    is?: DomainWhereInput
    isNot?: DomainWhereInput
  }

  export type InternalDomainCountOrderByAggregateInput = {
    domainId?: SortOrder
  }

  export type InternalDomainMaxOrderByAggregateInput = {
    domainId?: SortOrder
  }

  export type InternalDomainMinOrderByAggregateInput = {
    domainId?: SortOrder
  }

  export type ExternalDomainCountOrderByAggregateInput = {
    domainId?: SortOrder
  }

  export type ExternalDomainMaxOrderByAggregateInput = {
    domainId?: SortOrder
  }

  export type ExternalDomainMinOrderByAggregateInput = {
    domainId?: SortOrder
  }

  export type EnumDomainTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.DomainType | EnumDomainTypeFieldRefInput<$PrismaModel>
    in?: $Enums.DomainType[] | ListEnumDomainTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.DomainType[] | ListEnumDomainTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumDomainTypeFilter<$PrismaModel> | $Enums.DomainType
  }

  export type EnumDomainStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.DomainStatus | EnumDomainStatusFieldRefInput<$PrismaModel>
    in?: $Enums.DomainStatus[] | ListEnumDomainStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.DomainStatus[] | ListEnumDomainStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumDomainStatusFilter<$PrismaModel> | $Enums.DomainStatus
  }

  export type EnumDeploymentTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.DeploymentType | EnumDeploymentTypeFieldRefInput<$PrismaModel>
    in?: $Enums.DeploymentType[] | ListEnumDeploymentTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.DeploymentType[] | ListEnumDeploymentTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumDeploymentTypeFilter<$PrismaModel> | $Enums.DeploymentType
  }

  export type ServerNullableScalarRelationFilter = {
    is?: ServerWhereInput | null
    isNot?: ServerWhereInput | null
  }

  export type InternalDomainNullableScalarRelationFilter = {
    is?: InternalDomainWhereInput | null
    isNot?: InternalDomainWhereInput | null
  }

  export type ExternalDomainNullableScalarRelationFilter = {
    is?: ExternalDomainWhereInput | null
    isNot?: ExternalDomainWhereInput | null
  }

  export type DomainCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    status?: SortOrder
    serverId?: SortOrder
    price?: SortOrder
    repoId?: SortOrder
    sshUrl?: SortOrder
    hasSSL?: SortOrder
    campaign?: SortOrder
    deploymentType?: SortOrder
  }

  export type DomainAvgOrderByAggregateInput = {
    price?: SortOrder
  }

  export type DomainMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    status?: SortOrder
    serverId?: SortOrder
    price?: SortOrder
    repoId?: SortOrder
    sshUrl?: SortOrder
    hasSSL?: SortOrder
    campaign?: SortOrder
    deploymentType?: SortOrder
  }

  export type DomainMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    status?: SortOrder
    serverId?: SortOrder
    price?: SortOrder
    repoId?: SortOrder
    sshUrl?: SortOrder
    hasSSL?: SortOrder
    campaign?: SortOrder
    deploymentType?: SortOrder
  }

  export type DomainSumOrderByAggregateInput = {
    price?: SortOrder
  }

  export type EnumDomainTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.DomainType | EnumDomainTypeFieldRefInput<$PrismaModel>
    in?: $Enums.DomainType[] | ListEnumDomainTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.DomainType[] | ListEnumDomainTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumDomainTypeWithAggregatesFilter<$PrismaModel> | $Enums.DomainType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumDomainTypeFilter<$PrismaModel>
    _max?: NestedEnumDomainTypeFilter<$PrismaModel>
  }

  export type EnumDomainStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.DomainStatus | EnumDomainStatusFieldRefInput<$PrismaModel>
    in?: $Enums.DomainStatus[] | ListEnumDomainStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.DomainStatus[] | ListEnumDomainStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumDomainStatusWithAggregatesFilter<$PrismaModel> | $Enums.DomainStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumDomainStatusFilter<$PrismaModel>
    _max?: NestedEnumDomainStatusFilter<$PrismaModel>
  }

  export type EnumDeploymentTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.DeploymentType | EnumDeploymentTypeFieldRefInput<$PrismaModel>
    in?: $Enums.DeploymentType[] | ListEnumDeploymentTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.DeploymentType[] | ListEnumDeploymentTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumDeploymentTypeWithAggregatesFilter<$PrismaModel> | $Enums.DeploymentType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumDeploymentTypeFilter<$PrismaModel>
    _max?: NestedEnumDeploymentTypeFilter<$PrismaModel>
  }

  export type ForbiddenWordCountOrderByAggregateInput = {
    id?: SortOrder
    word?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
  }

  export type ForbiddenWordMaxOrderByAggregateInput = {
    id?: SortOrder
    word?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
  }

  export type ForbiddenWordMinOrderByAggregateInput = {
    id?: SortOrder
    word?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
  }
  export type JsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NamecheapAccountCountOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    apiUser?: SortOrder
    apiKey?: SortOrder
    contacts?: SortOrder
  }

  export type NamecheapAccountMaxOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    apiUser?: SortOrder
    apiKey?: SortOrder
  }

  export type NamecheapAccountMinOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    apiUser?: SortOrder
    apiKey?: SortOrder
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
  }

  export type CloudflareAccountCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    apiToken?: SortOrder
    accountId?: SortOrder
  }

  export type CloudflareAccountMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    apiToken?: SortOrder
    accountId?: SortOrder
  }

  export type CloudflareAccountMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    apiToken?: SortOrder
    accountId?: SortOrder
  }

  export type TeamCreateNestedOneWithoutMembersInput = {
    create?: XOR<TeamCreateWithoutMembersInput, TeamUncheckedCreateWithoutMembersInput>
    connectOrCreate?: TeamCreateOrConnectWithoutMembersInput
    connect?: TeamWhereUniqueInput
  }

  export type ServerCreateNestedManyWithoutUserInput = {
    create?: XOR<ServerCreateWithoutUserInput, ServerUncheckedCreateWithoutUserInput> | ServerCreateWithoutUserInput[] | ServerUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ServerCreateOrConnectWithoutUserInput | ServerCreateOrConnectWithoutUserInput[]
    createMany?: ServerCreateManyUserInputEnvelope
    connect?: ServerWhereUniqueInput | ServerWhereUniqueInput[]
  }

  export type ArchiveCreateNestedManyWithoutUserInput = {
    create?: XOR<ArchiveCreateWithoutUserInput, ArchiveUncheckedCreateWithoutUserInput> | ArchiveCreateWithoutUserInput[] | ArchiveUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ArchiveCreateOrConnectWithoutUserInput | ArchiveCreateOrConnectWithoutUserInput[]
    createMany?: ArchiveCreateManyUserInputEnvelope
    connect?: ArchiveWhereUniqueInput | ArchiveWhereUniqueInput[]
  }

  export type CampaignCreateNestedManyWithoutUserInput = {
    create?: XOR<CampaignCreateWithoutUserInput, CampaignUncheckedCreateWithoutUserInput> | CampaignCreateWithoutUserInput[] | CampaignUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CampaignCreateOrConnectWithoutUserInput | CampaignCreateOrConnectWithoutUserInput[]
    createMany?: CampaignCreateManyUserInputEnvelope
    connect?: CampaignWhereUniqueInput | CampaignWhereUniqueInput[]
  }

  export type ServerUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ServerCreateWithoutUserInput, ServerUncheckedCreateWithoutUserInput> | ServerCreateWithoutUserInput[] | ServerUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ServerCreateOrConnectWithoutUserInput | ServerCreateOrConnectWithoutUserInput[]
    createMany?: ServerCreateManyUserInputEnvelope
    connect?: ServerWhereUniqueInput | ServerWhereUniqueInput[]
  }

  export type ArchiveUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ArchiveCreateWithoutUserInput, ArchiveUncheckedCreateWithoutUserInput> | ArchiveCreateWithoutUserInput[] | ArchiveUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ArchiveCreateOrConnectWithoutUserInput | ArchiveCreateOrConnectWithoutUserInput[]
    createMany?: ArchiveCreateManyUserInputEnvelope
    connect?: ArchiveWhereUniqueInput | ArchiveWhereUniqueInput[]
  }

  export type CampaignUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<CampaignCreateWithoutUserInput, CampaignUncheckedCreateWithoutUserInput> | CampaignCreateWithoutUserInput[] | CampaignUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CampaignCreateOrConnectWithoutUserInput | CampaignCreateOrConnectWithoutUserInput[]
    createMany?: CampaignCreateManyUserInputEnvelope
    connect?: CampaignWhereUniqueInput | CampaignWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type TeamUpdateOneWithoutMembersNestedInput = {
    create?: XOR<TeamCreateWithoutMembersInput, TeamUncheckedCreateWithoutMembersInput>
    connectOrCreate?: TeamCreateOrConnectWithoutMembersInput
    upsert?: TeamUpsertWithoutMembersInput
    disconnect?: TeamWhereInput | boolean
    delete?: TeamWhereInput | boolean
    connect?: TeamWhereUniqueInput
    update?: XOR<XOR<TeamUpdateToOneWithWhereWithoutMembersInput, TeamUpdateWithoutMembersInput>, TeamUncheckedUpdateWithoutMembersInput>
  }

  export type ServerUpdateManyWithoutUserNestedInput = {
    create?: XOR<ServerCreateWithoutUserInput, ServerUncheckedCreateWithoutUserInput> | ServerCreateWithoutUserInput[] | ServerUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ServerCreateOrConnectWithoutUserInput | ServerCreateOrConnectWithoutUserInput[]
    upsert?: ServerUpsertWithWhereUniqueWithoutUserInput | ServerUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ServerCreateManyUserInputEnvelope
    set?: ServerWhereUniqueInput | ServerWhereUniqueInput[]
    disconnect?: ServerWhereUniqueInput | ServerWhereUniqueInput[]
    delete?: ServerWhereUniqueInput | ServerWhereUniqueInput[]
    connect?: ServerWhereUniqueInput | ServerWhereUniqueInput[]
    update?: ServerUpdateWithWhereUniqueWithoutUserInput | ServerUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ServerUpdateManyWithWhereWithoutUserInput | ServerUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ServerScalarWhereInput | ServerScalarWhereInput[]
  }

  export type ArchiveUpdateManyWithoutUserNestedInput = {
    create?: XOR<ArchiveCreateWithoutUserInput, ArchiveUncheckedCreateWithoutUserInput> | ArchiveCreateWithoutUserInput[] | ArchiveUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ArchiveCreateOrConnectWithoutUserInput | ArchiveCreateOrConnectWithoutUserInput[]
    upsert?: ArchiveUpsertWithWhereUniqueWithoutUserInput | ArchiveUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ArchiveCreateManyUserInputEnvelope
    set?: ArchiveWhereUniqueInput | ArchiveWhereUniqueInput[]
    disconnect?: ArchiveWhereUniqueInput | ArchiveWhereUniqueInput[]
    delete?: ArchiveWhereUniqueInput | ArchiveWhereUniqueInput[]
    connect?: ArchiveWhereUniqueInput | ArchiveWhereUniqueInput[]
    update?: ArchiveUpdateWithWhereUniqueWithoutUserInput | ArchiveUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ArchiveUpdateManyWithWhereWithoutUserInput | ArchiveUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ArchiveScalarWhereInput | ArchiveScalarWhereInput[]
  }

  export type CampaignUpdateManyWithoutUserNestedInput = {
    create?: XOR<CampaignCreateWithoutUserInput, CampaignUncheckedCreateWithoutUserInput> | CampaignCreateWithoutUserInput[] | CampaignUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CampaignCreateOrConnectWithoutUserInput | CampaignCreateOrConnectWithoutUserInput[]
    upsert?: CampaignUpsertWithWhereUniqueWithoutUserInput | CampaignUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: CampaignCreateManyUserInputEnvelope
    set?: CampaignWhereUniqueInput | CampaignWhereUniqueInput[]
    disconnect?: CampaignWhereUniqueInput | CampaignWhereUniqueInput[]
    delete?: CampaignWhereUniqueInput | CampaignWhereUniqueInput[]
    connect?: CampaignWhereUniqueInput | CampaignWhereUniqueInput[]
    update?: CampaignUpdateWithWhereUniqueWithoutUserInput | CampaignUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: CampaignUpdateManyWithWhereWithoutUserInput | CampaignUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: CampaignScalarWhereInput | CampaignScalarWhereInput[]
  }

  export type ServerUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ServerCreateWithoutUserInput, ServerUncheckedCreateWithoutUserInput> | ServerCreateWithoutUserInput[] | ServerUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ServerCreateOrConnectWithoutUserInput | ServerCreateOrConnectWithoutUserInput[]
    upsert?: ServerUpsertWithWhereUniqueWithoutUserInput | ServerUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ServerCreateManyUserInputEnvelope
    set?: ServerWhereUniqueInput | ServerWhereUniqueInput[]
    disconnect?: ServerWhereUniqueInput | ServerWhereUniqueInput[]
    delete?: ServerWhereUniqueInput | ServerWhereUniqueInput[]
    connect?: ServerWhereUniqueInput | ServerWhereUniqueInput[]
    update?: ServerUpdateWithWhereUniqueWithoutUserInput | ServerUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ServerUpdateManyWithWhereWithoutUserInput | ServerUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ServerScalarWhereInput | ServerScalarWhereInput[]
  }

  export type ArchiveUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ArchiveCreateWithoutUserInput, ArchiveUncheckedCreateWithoutUserInput> | ArchiveCreateWithoutUserInput[] | ArchiveUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ArchiveCreateOrConnectWithoutUserInput | ArchiveCreateOrConnectWithoutUserInput[]
    upsert?: ArchiveUpsertWithWhereUniqueWithoutUserInput | ArchiveUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ArchiveCreateManyUserInputEnvelope
    set?: ArchiveWhereUniqueInput | ArchiveWhereUniqueInput[]
    disconnect?: ArchiveWhereUniqueInput | ArchiveWhereUniqueInput[]
    delete?: ArchiveWhereUniqueInput | ArchiveWhereUniqueInput[]
    connect?: ArchiveWhereUniqueInput | ArchiveWhereUniqueInput[]
    update?: ArchiveUpdateWithWhereUniqueWithoutUserInput | ArchiveUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ArchiveUpdateManyWithWhereWithoutUserInput | ArchiveUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ArchiveScalarWhereInput | ArchiveScalarWhereInput[]
  }

  export type CampaignUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<CampaignCreateWithoutUserInput, CampaignUncheckedCreateWithoutUserInput> | CampaignCreateWithoutUserInput[] | CampaignUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CampaignCreateOrConnectWithoutUserInput | CampaignCreateOrConnectWithoutUserInput[]
    upsert?: CampaignUpsertWithWhereUniqueWithoutUserInput | CampaignUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: CampaignCreateManyUserInputEnvelope
    set?: CampaignWhereUniqueInput | CampaignWhereUniqueInput[]
    disconnect?: CampaignWhereUniqueInput | CampaignWhereUniqueInput[]
    delete?: CampaignWhereUniqueInput | CampaignWhereUniqueInput[]
    connect?: CampaignWhereUniqueInput | CampaignWhereUniqueInput[]
    update?: CampaignUpdateWithWhereUniqueWithoutUserInput | CampaignUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: CampaignUpdateManyWithWhereWithoutUserInput | CampaignUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: CampaignScalarWhereInput | CampaignScalarWhereInput[]
  }

  export type CampaignCreategeoInput = {
    set: string[]
  }

  export type UserCreateNestedOneWithoutCampaignsInput = {
    create?: XOR<UserCreateWithoutCampaignsInput, UserUncheckedCreateWithoutCampaignsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCampaignsInput
    connect?: UserWhereUniqueInput
  }

  export type CampaignUpdategeoInput = {
    set?: string[]
    push?: string | string[]
  }

  export type UserUpdateOneRequiredWithoutCampaignsNestedInput = {
    create?: XOR<UserCreateWithoutCampaignsInput, UserUncheckedCreateWithoutCampaignsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCampaignsInput
    upsert?: UserUpsertWithoutCampaignsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCampaignsInput, UserUpdateWithoutCampaignsInput>, UserUncheckedUpdateWithoutCampaignsInput>
  }

  export type UserCreateNestedManyWithoutTeamInput = {
    create?: XOR<UserCreateWithoutTeamInput, UserUncheckedCreateWithoutTeamInput> | UserCreateWithoutTeamInput[] | UserUncheckedCreateWithoutTeamInput[]
    connectOrCreate?: UserCreateOrConnectWithoutTeamInput | UserCreateOrConnectWithoutTeamInput[]
    createMany?: UserCreateManyTeamInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type UserUncheckedCreateNestedManyWithoutTeamInput = {
    create?: XOR<UserCreateWithoutTeamInput, UserUncheckedCreateWithoutTeamInput> | UserCreateWithoutTeamInput[] | UserUncheckedCreateWithoutTeamInput[]
    connectOrCreate?: UserCreateOrConnectWithoutTeamInput | UserCreateOrConnectWithoutTeamInput[]
    createMany?: UserCreateManyTeamInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type UserUpdateManyWithoutTeamNestedInput = {
    create?: XOR<UserCreateWithoutTeamInput, UserUncheckedCreateWithoutTeamInput> | UserCreateWithoutTeamInput[] | UserUncheckedCreateWithoutTeamInput[]
    connectOrCreate?: UserCreateOrConnectWithoutTeamInput | UserCreateOrConnectWithoutTeamInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutTeamInput | UserUpsertWithWhereUniqueWithoutTeamInput[]
    createMany?: UserCreateManyTeamInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutTeamInput | UserUpdateWithWhereUniqueWithoutTeamInput[]
    updateMany?: UserUpdateManyWithWhereWithoutTeamInput | UserUpdateManyWithWhereWithoutTeamInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type UserUncheckedUpdateManyWithoutTeamNestedInput = {
    create?: XOR<UserCreateWithoutTeamInput, UserUncheckedCreateWithoutTeamInput> | UserCreateWithoutTeamInput[] | UserUncheckedCreateWithoutTeamInput[]
    connectOrCreate?: UserCreateOrConnectWithoutTeamInput | UserCreateOrConnectWithoutTeamInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutTeamInput | UserUpsertWithWhereUniqueWithoutTeamInput[]
    createMany?: UserCreateManyTeamInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutTeamInput | UserUpdateWithWhereUniqueWithoutTeamInput[]
    updateMany?: UserUpdateManyWithWhereWithoutTeamInput | UserUpdateManyWithWhereWithoutTeamInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutArchivesInput = {
    create?: XOR<UserCreateWithoutArchivesInput, UserUncheckedCreateWithoutArchivesInput>
    connectOrCreate?: UserCreateOrConnectWithoutArchivesInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutArchivesNestedInput = {
    create?: XOR<UserCreateWithoutArchivesInput, UserUncheckedCreateWithoutArchivesInput>
    connectOrCreate?: UserCreateOrConnectWithoutArchivesInput
    upsert?: UserUpsertWithoutArchivesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutArchivesInput, UserUpdateWithoutArchivesInput>, UserUncheckedUpdateWithoutArchivesInput>
  }

  export type UserCreateNestedOneWithoutServersInput = {
    create?: XOR<UserCreateWithoutServersInput, UserUncheckedCreateWithoutServersInput>
    connectOrCreate?: UserCreateOrConnectWithoutServersInput
    connect?: UserWhereUniqueInput
  }

  export type DomainCreateNestedManyWithoutServerInput = {
    create?: XOR<DomainCreateWithoutServerInput, DomainUncheckedCreateWithoutServerInput> | DomainCreateWithoutServerInput[] | DomainUncheckedCreateWithoutServerInput[]
    connectOrCreate?: DomainCreateOrConnectWithoutServerInput | DomainCreateOrConnectWithoutServerInput[]
    createMany?: DomainCreateManyServerInputEnvelope
    connect?: DomainWhereUniqueInput | DomainWhereUniqueInput[]
  }

  export type DomainUncheckedCreateNestedManyWithoutServerInput = {
    create?: XOR<DomainCreateWithoutServerInput, DomainUncheckedCreateWithoutServerInput> | DomainCreateWithoutServerInput[] | DomainUncheckedCreateWithoutServerInput[]
    connectOrCreate?: DomainCreateOrConnectWithoutServerInput | DomainCreateOrConnectWithoutServerInput[]
    createMany?: DomainCreateManyServerInputEnvelope
    connect?: DomainWhereUniqueInput | DomainWhereUniqueInput[]
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type UserUpdateOneWithoutServersNestedInput = {
    create?: XOR<UserCreateWithoutServersInput, UserUncheckedCreateWithoutServersInput>
    connectOrCreate?: UserCreateOrConnectWithoutServersInput
    upsert?: UserUpsertWithoutServersInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutServersInput, UserUpdateWithoutServersInput>, UserUncheckedUpdateWithoutServersInput>
  }

  export type DomainUpdateManyWithoutServerNestedInput = {
    create?: XOR<DomainCreateWithoutServerInput, DomainUncheckedCreateWithoutServerInput> | DomainCreateWithoutServerInput[] | DomainUncheckedCreateWithoutServerInput[]
    connectOrCreate?: DomainCreateOrConnectWithoutServerInput | DomainCreateOrConnectWithoutServerInput[]
    upsert?: DomainUpsertWithWhereUniqueWithoutServerInput | DomainUpsertWithWhereUniqueWithoutServerInput[]
    createMany?: DomainCreateManyServerInputEnvelope
    set?: DomainWhereUniqueInput | DomainWhereUniqueInput[]
    disconnect?: DomainWhereUniqueInput | DomainWhereUniqueInput[]
    delete?: DomainWhereUniqueInput | DomainWhereUniqueInput[]
    connect?: DomainWhereUniqueInput | DomainWhereUniqueInput[]
    update?: DomainUpdateWithWhereUniqueWithoutServerInput | DomainUpdateWithWhereUniqueWithoutServerInput[]
    updateMany?: DomainUpdateManyWithWhereWithoutServerInput | DomainUpdateManyWithWhereWithoutServerInput[]
    deleteMany?: DomainScalarWhereInput | DomainScalarWhereInput[]
  }

  export type DomainUncheckedUpdateManyWithoutServerNestedInput = {
    create?: XOR<DomainCreateWithoutServerInput, DomainUncheckedCreateWithoutServerInput> | DomainCreateWithoutServerInput[] | DomainUncheckedCreateWithoutServerInput[]
    connectOrCreate?: DomainCreateOrConnectWithoutServerInput | DomainCreateOrConnectWithoutServerInput[]
    upsert?: DomainUpsertWithWhereUniqueWithoutServerInput | DomainUpsertWithWhereUniqueWithoutServerInput[]
    createMany?: DomainCreateManyServerInputEnvelope
    set?: DomainWhereUniqueInput | DomainWhereUniqueInput[]
    disconnect?: DomainWhereUniqueInput | DomainWhereUniqueInput[]
    delete?: DomainWhereUniqueInput | DomainWhereUniqueInput[]
    connect?: DomainWhereUniqueInput | DomainWhereUniqueInput[]
    update?: DomainUpdateWithWhereUniqueWithoutServerInput | DomainUpdateWithWhereUniqueWithoutServerInput[]
    updateMany?: DomainUpdateManyWithWhereWithoutServerInput | DomainUpdateManyWithWhereWithoutServerInput[]
    deleteMany?: DomainScalarWhereInput | DomainScalarWhereInput[]
  }

  export type DomainCreateNestedOneWithoutInternalInput = {
    create?: XOR<DomainCreateWithoutInternalInput, DomainUncheckedCreateWithoutInternalInput>
    connectOrCreate?: DomainCreateOrConnectWithoutInternalInput
    connect?: DomainWhereUniqueInput
  }

  export type DomainUpdateOneRequiredWithoutInternalNestedInput = {
    create?: XOR<DomainCreateWithoutInternalInput, DomainUncheckedCreateWithoutInternalInput>
    connectOrCreate?: DomainCreateOrConnectWithoutInternalInput
    upsert?: DomainUpsertWithoutInternalInput
    connect?: DomainWhereUniqueInput
    update?: XOR<XOR<DomainUpdateToOneWithWhereWithoutInternalInput, DomainUpdateWithoutInternalInput>, DomainUncheckedUpdateWithoutInternalInput>
  }

  export type DomainCreateNestedOneWithoutExternalInput = {
    create?: XOR<DomainCreateWithoutExternalInput, DomainUncheckedCreateWithoutExternalInput>
    connectOrCreate?: DomainCreateOrConnectWithoutExternalInput
    connect?: DomainWhereUniqueInput
  }

  export type DomainUpdateOneRequiredWithoutExternalNestedInput = {
    create?: XOR<DomainCreateWithoutExternalInput, DomainUncheckedCreateWithoutExternalInput>
    connectOrCreate?: DomainCreateOrConnectWithoutExternalInput
    upsert?: DomainUpsertWithoutExternalInput
    connect?: DomainWhereUniqueInput
    update?: XOR<XOR<DomainUpdateToOneWithWhereWithoutExternalInput, DomainUpdateWithoutExternalInput>, DomainUncheckedUpdateWithoutExternalInput>
  }

  export type ServerCreateNestedOneWithoutDomainsInput = {
    create?: XOR<ServerCreateWithoutDomainsInput, ServerUncheckedCreateWithoutDomainsInput>
    connectOrCreate?: ServerCreateOrConnectWithoutDomainsInput
    connect?: ServerWhereUniqueInput
  }

  export type InternalDomainCreateNestedOneWithoutDomainInput = {
    create?: XOR<InternalDomainCreateWithoutDomainInput, InternalDomainUncheckedCreateWithoutDomainInput>
    connectOrCreate?: InternalDomainCreateOrConnectWithoutDomainInput
    connect?: InternalDomainWhereUniqueInput
  }

  export type ExternalDomainCreateNestedOneWithoutDomainInput = {
    create?: XOR<ExternalDomainCreateWithoutDomainInput, ExternalDomainUncheckedCreateWithoutDomainInput>
    connectOrCreate?: ExternalDomainCreateOrConnectWithoutDomainInput
    connect?: ExternalDomainWhereUniqueInput
  }

  export type InternalDomainUncheckedCreateNestedOneWithoutDomainInput = {
    create?: XOR<InternalDomainCreateWithoutDomainInput, InternalDomainUncheckedCreateWithoutDomainInput>
    connectOrCreate?: InternalDomainCreateOrConnectWithoutDomainInput
    connect?: InternalDomainWhereUniqueInput
  }

  export type ExternalDomainUncheckedCreateNestedOneWithoutDomainInput = {
    create?: XOR<ExternalDomainCreateWithoutDomainInput, ExternalDomainUncheckedCreateWithoutDomainInput>
    connectOrCreate?: ExternalDomainCreateOrConnectWithoutDomainInput
    connect?: ExternalDomainWhereUniqueInput
  }

  export type EnumDomainTypeFieldUpdateOperationsInput = {
    set?: $Enums.DomainType
  }

  export type EnumDomainStatusFieldUpdateOperationsInput = {
    set?: $Enums.DomainStatus
  }

  export type EnumDeploymentTypeFieldUpdateOperationsInput = {
    set?: $Enums.DeploymentType
  }

  export type ServerUpdateOneWithoutDomainsNestedInput = {
    create?: XOR<ServerCreateWithoutDomainsInput, ServerUncheckedCreateWithoutDomainsInput>
    connectOrCreate?: ServerCreateOrConnectWithoutDomainsInput
    upsert?: ServerUpsertWithoutDomainsInput
    disconnect?: ServerWhereInput | boolean
    delete?: ServerWhereInput | boolean
    connect?: ServerWhereUniqueInput
    update?: XOR<XOR<ServerUpdateToOneWithWhereWithoutDomainsInput, ServerUpdateWithoutDomainsInput>, ServerUncheckedUpdateWithoutDomainsInput>
  }

  export type InternalDomainUpdateOneWithoutDomainNestedInput = {
    create?: XOR<InternalDomainCreateWithoutDomainInput, InternalDomainUncheckedCreateWithoutDomainInput>
    connectOrCreate?: InternalDomainCreateOrConnectWithoutDomainInput
    upsert?: InternalDomainUpsertWithoutDomainInput
    disconnect?: InternalDomainWhereInput | boolean
    delete?: InternalDomainWhereInput | boolean
    connect?: InternalDomainWhereUniqueInput
    update?: XOR<XOR<InternalDomainUpdateToOneWithWhereWithoutDomainInput, InternalDomainUpdateWithoutDomainInput>, InternalDomainUncheckedUpdateWithoutDomainInput>
  }

  export type ExternalDomainUpdateOneWithoutDomainNestedInput = {
    create?: XOR<ExternalDomainCreateWithoutDomainInput, ExternalDomainUncheckedCreateWithoutDomainInput>
    connectOrCreate?: ExternalDomainCreateOrConnectWithoutDomainInput
    upsert?: ExternalDomainUpsertWithoutDomainInput
    disconnect?: ExternalDomainWhereInput | boolean
    delete?: ExternalDomainWhereInput | boolean
    connect?: ExternalDomainWhereUniqueInput
    update?: XOR<XOR<ExternalDomainUpdateToOneWithWhereWithoutDomainInput, ExternalDomainUpdateWithoutDomainInput>, ExternalDomainUncheckedUpdateWithoutDomainInput>
  }

  export type InternalDomainUncheckedUpdateOneWithoutDomainNestedInput = {
    create?: XOR<InternalDomainCreateWithoutDomainInput, InternalDomainUncheckedCreateWithoutDomainInput>
    connectOrCreate?: InternalDomainCreateOrConnectWithoutDomainInput
    upsert?: InternalDomainUpsertWithoutDomainInput
    disconnect?: InternalDomainWhereInput | boolean
    delete?: InternalDomainWhereInput | boolean
    connect?: InternalDomainWhereUniqueInput
    update?: XOR<XOR<InternalDomainUpdateToOneWithWhereWithoutDomainInput, InternalDomainUpdateWithoutDomainInput>, InternalDomainUncheckedUpdateWithoutDomainInput>
  }

  export type ExternalDomainUncheckedUpdateOneWithoutDomainNestedInput = {
    create?: XOR<ExternalDomainCreateWithoutDomainInput, ExternalDomainUncheckedCreateWithoutDomainInput>
    connectOrCreate?: ExternalDomainCreateOrConnectWithoutDomainInput
    upsert?: ExternalDomainUpsertWithoutDomainInput
    disconnect?: ExternalDomainWhereInput | boolean
    delete?: ExternalDomainWhereInput | boolean
    connect?: ExternalDomainWhereUniqueInput
    update?: XOR<XOR<ExternalDomainUpdateToOneWithWhereWithoutDomainInput, ExternalDomainUpdateWithoutDomainInput>, ExternalDomainUncheckedUpdateWithoutDomainInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedEnumDomainTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.DomainType | EnumDomainTypeFieldRefInput<$PrismaModel>
    in?: $Enums.DomainType[] | ListEnumDomainTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.DomainType[] | ListEnumDomainTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumDomainTypeFilter<$PrismaModel> | $Enums.DomainType
  }

  export type NestedEnumDomainStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.DomainStatus | EnumDomainStatusFieldRefInput<$PrismaModel>
    in?: $Enums.DomainStatus[] | ListEnumDomainStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.DomainStatus[] | ListEnumDomainStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumDomainStatusFilter<$PrismaModel> | $Enums.DomainStatus
  }

  export type NestedEnumDeploymentTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.DeploymentType | EnumDeploymentTypeFieldRefInput<$PrismaModel>
    in?: $Enums.DeploymentType[] | ListEnumDeploymentTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.DeploymentType[] | ListEnumDeploymentTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumDeploymentTypeFilter<$PrismaModel> | $Enums.DeploymentType
  }

  export type NestedEnumDomainTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.DomainType | EnumDomainTypeFieldRefInput<$PrismaModel>
    in?: $Enums.DomainType[] | ListEnumDomainTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.DomainType[] | ListEnumDomainTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumDomainTypeWithAggregatesFilter<$PrismaModel> | $Enums.DomainType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumDomainTypeFilter<$PrismaModel>
    _max?: NestedEnumDomainTypeFilter<$PrismaModel>
  }

  export type NestedEnumDomainStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.DomainStatus | EnumDomainStatusFieldRefInput<$PrismaModel>
    in?: $Enums.DomainStatus[] | ListEnumDomainStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.DomainStatus[] | ListEnumDomainStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumDomainStatusWithAggregatesFilter<$PrismaModel> | $Enums.DomainStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumDomainStatusFilter<$PrismaModel>
    _max?: NestedEnumDomainStatusFilter<$PrismaModel>
  }

  export type NestedEnumDeploymentTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.DeploymentType | EnumDeploymentTypeFieldRefInput<$PrismaModel>
    in?: $Enums.DeploymentType[] | ListEnumDeploymentTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.DeploymentType[] | ListEnumDeploymentTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumDeploymentTypeWithAggregatesFilter<$PrismaModel> | $Enums.DeploymentType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumDeploymentTypeFilter<$PrismaModel>
    _max?: NestedEnumDeploymentTypeFilter<$PrismaModel>
  }
  export type NestedJsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type TeamCreateWithoutMembersInput = {
    id?: string
    name: string
    alias?: string
  }

  export type TeamUncheckedCreateWithoutMembersInput = {
    id?: string
    name: string
    alias?: string
  }

  export type TeamCreateOrConnectWithoutMembersInput = {
    where: TeamWhereUniqueInput
    create: XOR<TeamCreateWithoutMembersInput, TeamUncheckedCreateWithoutMembersInput>
  }

  export type ServerCreateWithoutUserInput = {
    id: string
    name: string
    ip: string
    rootPassword: string
    forgePassword: string
    price?: number
    active?: boolean
    createdAt?: Date | string
    expiredAt?: Date | string
    assignedAt?: Date | string | null
    renewalAt?: Date | string | null
    domains?: DomainCreateNestedManyWithoutServerInput
  }

  export type ServerUncheckedCreateWithoutUserInput = {
    id: string
    name: string
    ip: string
    rootPassword: string
    forgePassword: string
    price?: number
    active?: boolean
    createdAt?: Date | string
    expiredAt?: Date | string
    assignedAt?: Date | string | null
    renewalAt?: Date | string | null
    domains?: DomainUncheckedCreateNestedManyWithoutServerInput
  }

  export type ServerCreateOrConnectWithoutUserInput = {
    where: ServerWhereUniqueInput
    create: XOR<ServerCreateWithoutUserInput, ServerUncheckedCreateWithoutUserInput>
  }

  export type ServerCreateManyUserInputEnvelope = {
    data: ServerCreateManyUserInput | ServerCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ArchiveCreateWithoutUserInput = {
    id?: string
    name: string
    path: string
    createdAt?: Date | string
  }

  export type ArchiveUncheckedCreateWithoutUserInput = {
    id?: string
    name: string
    path: string
    createdAt?: Date | string
  }

  export type ArchiveCreateOrConnectWithoutUserInput = {
    where: ArchiveWhereUniqueInput
    create: XOR<ArchiveCreateWithoutUserInput, ArchiveUncheckedCreateWithoutUserInput>
  }

  export type ArchiveCreateManyUserInputEnvelope = {
    data: ArchiveCreateManyUserInput | ArchiveCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type CampaignCreateWithoutUserInput = {
    id?: string
    name: string
    alias: string
    geo?: CampaignCreategeoInput | string[]
  }

  export type CampaignUncheckedCreateWithoutUserInput = {
    id?: string
    name: string
    alias: string
    geo?: CampaignCreategeoInput | string[]
  }

  export type CampaignCreateOrConnectWithoutUserInput = {
    where: CampaignWhereUniqueInput
    create: XOR<CampaignCreateWithoutUserInput, CampaignUncheckedCreateWithoutUserInput>
  }

  export type CampaignCreateManyUserInputEnvelope = {
    data: CampaignCreateManyUserInput | CampaignCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type TeamUpsertWithoutMembersInput = {
    update: XOR<TeamUpdateWithoutMembersInput, TeamUncheckedUpdateWithoutMembersInput>
    create: XOR<TeamCreateWithoutMembersInput, TeamUncheckedCreateWithoutMembersInput>
    where?: TeamWhereInput
  }

  export type TeamUpdateToOneWithWhereWithoutMembersInput = {
    where?: TeamWhereInput
    data: XOR<TeamUpdateWithoutMembersInput, TeamUncheckedUpdateWithoutMembersInput>
  }

  export type TeamUpdateWithoutMembersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    alias?: StringFieldUpdateOperationsInput | string
  }

  export type TeamUncheckedUpdateWithoutMembersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    alias?: StringFieldUpdateOperationsInput | string
  }

  export type ServerUpsertWithWhereUniqueWithoutUserInput = {
    where: ServerWhereUniqueInput
    update: XOR<ServerUpdateWithoutUserInput, ServerUncheckedUpdateWithoutUserInput>
    create: XOR<ServerCreateWithoutUserInput, ServerUncheckedCreateWithoutUserInput>
  }

  export type ServerUpdateWithWhereUniqueWithoutUserInput = {
    where: ServerWhereUniqueInput
    data: XOR<ServerUpdateWithoutUserInput, ServerUncheckedUpdateWithoutUserInput>
  }

  export type ServerUpdateManyWithWhereWithoutUserInput = {
    where: ServerScalarWhereInput
    data: XOR<ServerUpdateManyMutationInput, ServerUncheckedUpdateManyWithoutUserInput>
  }

  export type ServerScalarWhereInput = {
    AND?: ServerScalarWhereInput | ServerScalarWhereInput[]
    OR?: ServerScalarWhereInput[]
    NOT?: ServerScalarWhereInput | ServerScalarWhereInput[]
    id?: StringFilter<"Server"> | string
    name?: StringFilter<"Server"> | string
    ip?: StringFilter<"Server"> | string
    rootPassword?: StringFilter<"Server"> | string
    forgePassword?: StringFilter<"Server"> | string
    userId?: StringNullableFilter<"Server"> | string | null
    price?: FloatFilter<"Server"> | number
    active?: BoolFilter<"Server"> | boolean
    createdAt?: DateTimeFilter<"Server"> | Date | string
    expiredAt?: DateTimeFilter<"Server"> | Date | string
    assignedAt?: DateTimeNullableFilter<"Server"> | Date | string | null
    renewalAt?: DateTimeNullableFilter<"Server"> | Date | string | null
  }

  export type ArchiveUpsertWithWhereUniqueWithoutUserInput = {
    where: ArchiveWhereUniqueInput
    update: XOR<ArchiveUpdateWithoutUserInput, ArchiveUncheckedUpdateWithoutUserInput>
    create: XOR<ArchiveCreateWithoutUserInput, ArchiveUncheckedCreateWithoutUserInput>
  }

  export type ArchiveUpdateWithWhereUniqueWithoutUserInput = {
    where: ArchiveWhereUniqueInput
    data: XOR<ArchiveUpdateWithoutUserInput, ArchiveUncheckedUpdateWithoutUserInput>
  }

  export type ArchiveUpdateManyWithWhereWithoutUserInput = {
    where: ArchiveScalarWhereInput
    data: XOR<ArchiveUpdateManyMutationInput, ArchiveUncheckedUpdateManyWithoutUserInput>
  }

  export type ArchiveScalarWhereInput = {
    AND?: ArchiveScalarWhereInput | ArchiveScalarWhereInput[]
    OR?: ArchiveScalarWhereInput[]
    NOT?: ArchiveScalarWhereInput | ArchiveScalarWhereInput[]
    id?: StringFilter<"Archive"> | string
    name?: StringFilter<"Archive"> | string
    path?: StringFilter<"Archive"> | string
    userId?: StringFilter<"Archive"> | string
    createdAt?: DateTimeFilter<"Archive"> | Date | string
  }

  export type CampaignUpsertWithWhereUniqueWithoutUserInput = {
    where: CampaignWhereUniqueInput
    update: XOR<CampaignUpdateWithoutUserInput, CampaignUncheckedUpdateWithoutUserInput>
    create: XOR<CampaignCreateWithoutUserInput, CampaignUncheckedCreateWithoutUserInput>
  }

  export type CampaignUpdateWithWhereUniqueWithoutUserInput = {
    where: CampaignWhereUniqueInput
    data: XOR<CampaignUpdateWithoutUserInput, CampaignUncheckedUpdateWithoutUserInput>
  }

  export type CampaignUpdateManyWithWhereWithoutUserInput = {
    where: CampaignScalarWhereInput
    data: XOR<CampaignUpdateManyMutationInput, CampaignUncheckedUpdateManyWithoutUserInput>
  }

  export type CampaignScalarWhereInput = {
    AND?: CampaignScalarWhereInput | CampaignScalarWhereInput[]
    OR?: CampaignScalarWhereInput[]
    NOT?: CampaignScalarWhereInput | CampaignScalarWhereInput[]
    id?: StringFilter<"Campaign"> | string
    name?: StringFilter<"Campaign"> | string
    alias?: StringFilter<"Campaign"> | string
    geo?: StringNullableListFilter<"Campaign">
    userId?: StringFilter<"Campaign"> | string
  }

  export type UserCreateWithoutCampaignsInput = {
    id?: string
    name: string
    password: string
    role?: $Enums.Role
    telegramChatId?: string | null
    telegramUserName?: string | null
    token?: string | null
    tokenVersion?: number
    tokenExpiry?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    team?: TeamCreateNestedOneWithoutMembersInput
    servers?: ServerCreateNestedManyWithoutUserInput
    archives?: ArchiveCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutCampaignsInput = {
    id?: string
    name: string
    password: string
    role?: $Enums.Role
    teamId?: string | null
    telegramChatId?: string | null
    telegramUserName?: string | null
    token?: string | null
    tokenVersion?: number
    tokenExpiry?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    servers?: ServerUncheckedCreateNestedManyWithoutUserInput
    archives?: ArchiveUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutCampaignsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCampaignsInput, UserUncheckedCreateWithoutCampaignsInput>
  }

  export type UserUpsertWithoutCampaignsInput = {
    update: XOR<UserUpdateWithoutCampaignsInput, UserUncheckedUpdateWithoutCampaignsInput>
    create: XOR<UserCreateWithoutCampaignsInput, UserUncheckedCreateWithoutCampaignsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCampaignsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCampaignsInput, UserUncheckedUpdateWithoutCampaignsInput>
  }

  export type UserUpdateWithoutCampaignsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    telegramChatId?: NullableStringFieldUpdateOperationsInput | string | null
    telegramUserName?: NullableStringFieldUpdateOperationsInput | string | null
    token?: NullableStringFieldUpdateOperationsInput | string | null
    tokenVersion?: IntFieldUpdateOperationsInput | number
    tokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    team?: TeamUpdateOneWithoutMembersNestedInput
    servers?: ServerUpdateManyWithoutUserNestedInput
    archives?: ArchiveUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutCampaignsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    teamId?: NullableStringFieldUpdateOperationsInput | string | null
    telegramChatId?: NullableStringFieldUpdateOperationsInput | string | null
    telegramUserName?: NullableStringFieldUpdateOperationsInput | string | null
    token?: NullableStringFieldUpdateOperationsInput | string | null
    tokenVersion?: IntFieldUpdateOperationsInput | number
    tokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    servers?: ServerUncheckedUpdateManyWithoutUserNestedInput
    archives?: ArchiveUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutTeamInput = {
    id?: string
    name: string
    password: string
    role?: $Enums.Role
    telegramChatId?: string | null
    telegramUserName?: string | null
    token?: string | null
    tokenVersion?: number
    tokenExpiry?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    servers?: ServerCreateNestedManyWithoutUserInput
    archives?: ArchiveCreateNestedManyWithoutUserInput
    campaigns?: CampaignCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutTeamInput = {
    id?: string
    name: string
    password: string
    role?: $Enums.Role
    telegramChatId?: string | null
    telegramUserName?: string | null
    token?: string | null
    tokenVersion?: number
    tokenExpiry?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    servers?: ServerUncheckedCreateNestedManyWithoutUserInput
    archives?: ArchiveUncheckedCreateNestedManyWithoutUserInput
    campaigns?: CampaignUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutTeamInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutTeamInput, UserUncheckedCreateWithoutTeamInput>
  }

  export type UserCreateManyTeamInputEnvelope = {
    data: UserCreateManyTeamInput | UserCreateManyTeamInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithWhereUniqueWithoutTeamInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutTeamInput, UserUncheckedUpdateWithoutTeamInput>
    create: XOR<UserCreateWithoutTeamInput, UserUncheckedCreateWithoutTeamInput>
  }

  export type UserUpdateWithWhereUniqueWithoutTeamInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutTeamInput, UserUncheckedUpdateWithoutTeamInput>
  }

  export type UserUpdateManyWithWhereWithoutTeamInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutTeamInput>
  }

  export type UserScalarWhereInput = {
    AND?: UserScalarWhereInput | UserScalarWhereInput[]
    OR?: UserScalarWhereInput[]
    NOT?: UserScalarWhereInput | UserScalarWhereInput[]
    id?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    teamId?: StringNullableFilter<"User"> | string | null
    telegramChatId?: StringNullableFilter<"User"> | string | null
    telegramUserName?: StringNullableFilter<"User"> | string | null
    token?: StringNullableFilter<"User"> | string | null
    tokenVersion?: IntFilter<"User"> | number
    tokenExpiry?: DateTimeNullableFilter<"User"> | Date | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
  }

  export type UserCreateWithoutArchivesInput = {
    id?: string
    name: string
    password: string
    role?: $Enums.Role
    telegramChatId?: string | null
    telegramUserName?: string | null
    token?: string | null
    tokenVersion?: number
    tokenExpiry?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    team?: TeamCreateNestedOneWithoutMembersInput
    servers?: ServerCreateNestedManyWithoutUserInput
    campaigns?: CampaignCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutArchivesInput = {
    id?: string
    name: string
    password: string
    role?: $Enums.Role
    teamId?: string | null
    telegramChatId?: string | null
    telegramUserName?: string | null
    token?: string | null
    tokenVersion?: number
    tokenExpiry?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    servers?: ServerUncheckedCreateNestedManyWithoutUserInput
    campaigns?: CampaignUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutArchivesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutArchivesInput, UserUncheckedCreateWithoutArchivesInput>
  }

  export type UserUpsertWithoutArchivesInput = {
    update: XOR<UserUpdateWithoutArchivesInput, UserUncheckedUpdateWithoutArchivesInput>
    create: XOR<UserCreateWithoutArchivesInput, UserUncheckedCreateWithoutArchivesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutArchivesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutArchivesInput, UserUncheckedUpdateWithoutArchivesInput>
  }

  export type UserUpdateWithoutArchivesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    telegramChatId?: NullableStringFieldUpdateOperationsInput | string | null
    telegramUserName?: NullableStringFieldUpdateOperationsInput | string | null
    token?: NullableStringFieldUpdateOperationsInput | string | null
    tokenVersion?: IntFieldUpdateOperationsInput | number
    tokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    team?: TeamUpdateOneWithoutMembersNestedInput
    servers?: ServerUpdateManyWithoutUserNestedInput
    campaigns?: CampaignUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutArchivesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    teamId?: NullableStringFieldUpdateOperationsInput | string | null
    telegramChatId?: NullableStringFieldUpdateOperationsInput | string | null
    telegramUserName?: NullableStringFieldUpdateOperationsInput | string | null
    token?: NullableStringFieldUpdateOperationsInput | string | null
    tokenVersion?: IntFieldUpdateOperationsInput | number
    tokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    servers?: ServerUncheckedUpdateManyWithoutUserNestedInput
    campaigns?: CampaignUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutServersInput = {
    id?: string
    name: string
    password: string
    role?: $Enums.Role
    telegramChatId?: string | null
    telegramUserName?: string | null
    token?: string | null
    tokenVersion?: number
    tokenExpiry?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    team?: TeamCreateNestedOneWithoutMembersInput
    archives?: ArchiveCreateNestedManyWithoutUserInput
    campaigns?: CampaignCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutServersInput = {
    id?: string
    name: string
    password: string
    role?: $Enums.Role
    teamId?: string | null
    telegramChatId?: string | null
    telegramUserName?: string | null
    token?: string | null
    tokenVersion?: number
    tokenExpiry?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    archives?: ArchiveUncheckedCreateNestedManyWithoutUserInput
    campaigns?: CampaignUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutServersInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutServersInput, UserUncheckedCreateWithoutServersInput>
  }

  export type DomainCreateWithoutServerInput = {
    id: string
    name: string
    type: $Enums.DomainType
    status?: $Enums.DomainStatus
    price?: number
    repoId: string
    sshUrl: string
    hasSSL?: boolean
    campaign?: string
    deploymentType?: $Enums.DeploymentType
    internal?: InternalDomainCreateNestedOneWithoutDomainInput
    external?: ExternalDomainCreateNestedOneWithoutDomainInput
  }

  export type DomainUncheckedCreateWithoutServerInput = {
    id: string
    name: string
    type: $Enums.DomainType
    status?: $Enums.DomainStatus
    price?: number
    repoId: string
    sshUrl: string
    hasSSL?: boolean
    campaign?: string
    deploymentType?: $Enums.DeploymentType
    internal?: InternalDomainUncheckedCreateNestedOneWithoutDomainInput
    external?: ExternalDomainUncheckedCreateNestedOneWithoutDomainInput
  }

  export type DomainCreateOrConnectWithoutServerInput = {
    where: DomainWhereUniqueInput
    create: XOR<DomainCreateWithoutServerInput, DomainUncheckedCreateWithoutServerInput>
  }

  export type DomainCreateManyServerInputEnvelope = {
    data: DomainCreateManyServerInput | DomainCreateManyServerInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutServersInput = {
    update: XOR<UserUpdateWithoutServersInput, UserUncheckedUpdateWithoutServersInput>
    create: XOR<UserCreateWithoutServersInput, UserUncheckedCreateWithoutServersInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutServersInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutServersInput, UserUncheckedUpdateWithoutServersInput>
  }

  export type UserUpdateWithoutServersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    telegramChatId?: NullableStringFieldUpdateOperationsInput | string | null
    telegramUserName?: NullableStringFieldUpdateOperationsInput | string | null
    token?: NullableStringFieldUpdateOperationsInput | string | null
    tokenVersion?: IntFieldUpdateOperationsInput | number
    tokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    team?: TeamUpdateOneWithoutMembersNestedInput
    archives?: ArchiveUpdateManyWithoutUserNestedInput
    campaigns?: CampaignUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutServersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    teamId?: NullableStringFieldUpdateOperationsInput | string | null
    telegramChatId?: NullableStringFieldUpdateOperationsInput | string | null
    telegramUserName?: NullableStringFieldUpdateOperationsInput | string | null
    token?: NullableStringFieldUpdateOperationsInput | string | null
    tokenVersion?: IntFieldUpdateOperationsInput | number
    tokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    archives?: ArchiveUncheckedUpdateManyWithoutUserNestedInput
    campaigns?: CampaignUncheckedUpdateManyWithoutUserNestedInput
  }

  export type DomainUpsertWithWhereUniqueWithoutServerInput = {
    where: DomainWhereUniqueInput
    update: XOR<DomainUpdateWithoutServerInput, DomainUncheckedUpdateWithoutServerInput>
    create: XOR<DomainCreateWithoutServerInput, DomainUncheckedCreateWithoutServerInput>
  }

  export type DomainUpdateWithWhereUniqueWithoutServerInput = {
    where: DomainWhereUniqueInput
    data: XOR<DomainUpdateWithoutServerInput, DomainUncheckedUpdateWithoutServerInput>
  }

  export type DomainUpdateManyWithWhereWithoutServerInput = {
    where: DomainScalarWhereInput
    data: XOR<DomainUpdateManyMutationInput, DomainUncheckedUpdateManyWithoutServerInput>
  }

  export type DomainScalarWhereInput = {
    AND?: DomainScalarWhereInput | DomainScalarWhereInput[]
    OR?: DomainScalarWhereInput[]
    NOT?: DomainScalarWhereInput | DomainScalarWhereInput[]
    id?: StringFilter<"Domain"> | string
    name?: StringFilter<"Domain"> | string
    type?: EnumDomainTypeFilter<"Domain"> | $Enums.DomainType
    status?: EnumDomainStatusFilter<"Domain"> | $Enums.DomainStatus
    serverId?: StringNullableFilter<"Domain"> | string | null
    price?: FloatFilter<"Domain"> | number
    repoId?: StringFilter<"Domain"> | string
    sshUrl?: StringFilter<"Domain"> | string
    hasSSL?: BoolFilter<"Domain"> | boolean
    campaign?: StringFilter<"Domain"> | string
    deploymentType?: EnumDeploymentTypeFilter<"Domain"> | $Enums.DeploymentType
  }

  export type DomainCreateWithoutInternalInput = {
    id: string
    name: string
    type: $Enums.DomainType
    status?: $Enums.DomainStatus
    price?: number
    repoId: string
    sshUrl: string
    hasSSL?: boolean
    campaign?: string
    deploymentType?: $Enums.DeploymentType
    server?: ServerCreateNestedOneWithoutDomainsInput
    external?: ExternalDomainCreateNestedOneWithoutDomainInput
  }

  export type DomainUncheckedCreateWithoutInternalInput = {
    id: string
    name: string
    type: $Enums.DomainType
    status?: $Enums.DomainStatus
    serverId?: string | null
    price?: number
    repoId: string
    sshUrl: string
    hasSSL?: boolean
    campaign?: string
    deploymentType?: $Enums.DeploymentType
    external?: ExternalDomainUncheckedCreateNestedOneWithoutDomainInput
  }

  export type DomainCreateOrConnectWithoutInternalInput = {
    where: DomainWhereUniqueInput
    create: XOR<DomainCreateWithoutInternalInput, DomainUncheckedCreateWithoutInternalInput>
  }

  export type DomainUpsertWithoutInternalInput = {
    update: XOR<DomainUpdateWithoutInternalInput, DomainUncheckedUpdateWithoutInternalInput>
    create: XOR<DomainCreateWithoutInternalInput, DomainUncheckedCreateWithoutInternalInput>
    where?: DomainWhereInput
  }

  export type DomainUpdateToOneWithWhereWithoutInternalInput = {
    where?: DomainWhereInput
    data: XOR<DomainUpdateWithoutInternalInput, DomainUncheckedUpdateWithoutInternalInput>
  }

  export type DomainUpdateWithoutInternalInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumDomainTypeFieldUpdateOperationsInput | $Enums.DomainType
    status?: EnumDomainStatusFieldUpdateOperationsInput | $Enums.DomainStatus
    price?: FloatFieldUpdateOperationsInput | number
    repoId?: StringFieldUpdateOperationsInput | string
    sshUrl?: StringFieldUpdateOperationsInput | string
    hasSSL?: BoolFieldUpdateOperationsInput | boolean
    campaign?: StringFieldUpdateOperationsInput | string
    deploymentType?: EnumDeploymentTypeFieldUpdateOperationsInput | $Enums.DeploymentType
    server?: ServerUpdateOneWithoutDomainsNestedInput
    external?: ExternalDomainUpdateOneWithoutDomainNestedInput
  }

  export type DomainUncheckedUpdateWithoutInternalInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumDomainTypeFieldUpdateOperationsInput | $Enums.DomainType
    status?: EnumDomainStatusFieldUpdateOperationsInput | $Enums.DomainStatus
    serverId?: NullableStringFieldUpdateOperationsInput | string | null
    price?: FloatFieldUpdateOperationsInput | number
    repoId?: StringFieldUpdateOperationsInput | string
    sshUrl?: StringFieldUpdateOperationsInput | string
    hasSSL?: BoolFieldUpdateOperationsInput | boolean
    campaign?: StringFieldUpdateOperationsInput | string
    deploymentType?: EnumDeploymentTypeFieldUpdateOperationsInput | $Enums.DeploymentType
    external?: ExternalDomainUncheckedUpdateOneWithoutDomainNestedInput
  }

  export type DomainCreateWithoutExternalInput = {
    id: string
    name: string
    type: $Enums.DomainType
    status?: $Enums.DomainStatus
    price?: number
    repoId: string
    sshUrl: string
    hasSSL?: boolean
    campaign?: string
    deploymentType?: $Enums.DeploymentType
    server?: ServerCreateNestedOneWithoutDomainsInput
    internal?: InternalDomainCreateNestedOneWithoutDomainInput
  }

  export type DomainUncheckedCreateWithoutExternalInput = {
    id: string
    name: string
    type: $Enums.DomainType
    status?: $Enums.DomainStatus
    serverId?: string | null
    price?: number
    repoId: string
    sshUrl: string
    hasSSL?: boolean
    campaign?: string
    deploymentType?: $Enums.DeploymentType
    internal?: InternalDomainUncheckedCreateNestedOneWithoutDomainInput
  }

  export type DomainCreateOrConnectWithoutExternalInput = {
    where: DomainWhereUniqueInput
    create: XOR<DomainCreateWithoutExternalInput, DomainUncheckedCreateWithoutExternalInput>
  }

  export type DomainUpsertWithoutExternalInput = {
    update: XOR<DomainUpdateWithoutExternalInput, DomainUncheckedUpdateWithoutExternalInput>
    create: XOR<DomainCreateWithoutExternalInput, DomainUncheckedCreateWithoutExternalInput>
    where?: DomainWhereInput
  }

  export type DomainUpdateToOneWithWhereWithoutExternalInput = {
    where?: DomainWhereInput
    data: XOR<DomainUpdateWithoutExternalInput, DomainUncheckedUpdateWithoutExternalInput>
  }

  export type DomainUpdateWithoutExternalInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumDomainTypeFieldUpdateOperationsInput | $Enums.DomainType
    status?: EnumDomainStatusFieldUpdateOperationsInput | $Enums.DomainStatus
    price?: FloatFieldUpdateOperationsInput | number
    repoId?: StringFieldUpdateOperationsInput | string
    sshUrl?: StringFieldUpdateOperationsInput | string
    hasSSL?: BoolFieldUpdateOperationsInput | boolean
    campaign?: StringFieldUpdateOperationsInput | string
    deploymentType?: EnumDeploymentTypeFieldUpdateOperationsInput | $Enums.DeploymentType
    server?: ServerUpdateOneWithoutDomainsNestedInput
    internal?: InternalDomainUpdateOneWithoutDomainNestedInput
  }

  export type DomainUncheckedUpdateWithoutExternalInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumDomainTypeFieldUpdateOperationsInput | $Enums.DomainType
    status?: EnumDomainStatusFieldUpdateOperationsInput | $Enums.DomainStatus
    serverId?: NullableStringFieldUpdateOperationsInput | string | null
    price?: FloatFieldUpdateOperationsInput | number
    repoId?: StringFieldUpdateOperationsInput | string
    sshUrl?: StringFieldUpdateOperationsInput | string
    hasSSL?: BoolFieldUpdateOperationsInput | boolean
    campaign?: StringFieldUpdateOperationsInput | string
    deploymentType?: EnumDeploymentTypeFieldUpdateOperationsInput | $Enums.DeploymentType
    internal?: InternalDomainUncheckedUpdateOneWithoutDomainNestedInput
  }

  export type ServerCreateWithoutDomainsInput = {
    id: string
    name: string
    ip: string
    rootPassword: string
    forgePassword: string
    price?: number
    active?: boolean
    createdAt?: Date | string
    expiredAt?: Date | string
    assignedAt?: Date | string | null
    renewalAt?: Date | string | null
    user?: UserCreateNestedOneWithoutServersInput
  }

  export type ServerUncheckedCreateWithoutDomainsInput = {
    id: string
    name: string
    ip: string
    rootPassword: string
    forgePassword: string
    userId?: string | null
    price?: number
    active?: boolean
    createdAt?: Date | string
    expiredAt?: Date | string
    assignedAt?: Date | string | null
    renewalAt?: Date | string | null
  }

  export type ServerCreateOrConnectWithoutDomainsInput = {
    where: ServerWhereUniqueInput
    create: XOR<ServerCreateWithoutDomainsInput, ServerUncheckedCreateWithoutDomainsInput>
  }

  export type InternalDomainCreateWithoutDomainInput = {

  }

  export type InternalDomainUncheckedCreateWithoutDomainInput = {

  }

  export type InternalDomainCreateOrConnectWithoutDomainInput = {
    where: InternalDomainWhereUniqueInput
    create: XOR<InternalDomainCreateWithoutDomainInput, InternalDomainUncheckedCreateWithoutDomainInput>
  }

  export type ExternalDomainCreateWithoutDomainInput = {

  }

  export type ExternalDomainUncheckedCreateWithoutDomainInput = {

  }

  export type ExternalDomainCreateOrConnectWithoutDomainInput = {
    where: ExternalDomainWhereUniqueInput
    create: XOR<ExternalDomainCreateWithoutDomainInput, ExternalDomainUncheckedCreateWithoutDomainInput>
  }

  export type ServerUpsertWithoutDomainsInput = {
    update: XOR<ServerUpdateWithoutDomainsInput, ServerUncheckedUpdateWithoutDomainsInput>
    create: XOR<ServerCreateWithoutDomainsInput, ServerUncheckedCreateWithoutDomainsInput>
    where?: ServerWhereInput
  }

  export type ServerUpdateToOneWithWhereWithoutDomainsInput = {
    where?: ServerWhereInput
    data: XOR<ServerUpdateWithoutDomainsInput, ServerUncheckedUpdateWithoutDomainsInput>
  }

  export type ServerUpdateWithoutDomainsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    ip?: StringFieldUpdateOperationsInput | string
    rootPassword?: StringFieldUpdateOperationsInput | string
    forgePassword?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    assignedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    renewalAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user?: UserUpdateOneWithoutServersNestedInput
  }

  export type ServerUncheckedUpdateWithoutDomainsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    ip?: StringFieldUpdateOperationsInput | string
    rootPassword?: StringFieldUpdateOperationsInput | string
    forgePassword?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    price?: FloatFieldUpdateOperationsInput | number
    active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    assignedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    renewalAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type InternalDomainUpsertWithoutDomainInput = {
    update: XOR<InternalDomainUpdateWithoutDomainInput, InternalDomainUncheckedUpdateWithoutDomainInput>
    create: XOR<InternalDomainCreateWithoutDomainInput, InternalDomainUncheckedCreateWithoutDomainInput>
    where?: InternalDomainWhereInput
  }

  export type InternalDomainUpdateToOneWithWhereWithoutDomainInput = {
    where?: InternalDomainWhereInput
    data: XOR<InternalDomainUpdateWithoutDomainInput, InternalDomainUncheckedUpdateWithoutDomainInput>
  }

  export type InternalDomainUpdateWithoutDomainInput = {

  }

  export type InternalDomainUncheckedUpdateWithoutDomainInput = {

  }

  export type ExternalDomainUpsertWithoutDomainInput = {
    update: XOR<ExternalDomainUpdateWithoutDomainInput, ExternalDomainUncheckedUpdateWithoutDomainInput>
    create: XOR<ExternalDomainCreateWithoutDomainInput, ExternalDomainUncheckedCreateWithoutDomainInput>
    where?: ExternalDomainWhereInput
  }

  export type ExternalDomainUpdateToOneWithWhereWithoutDomainInput = {
    where?: ExternalDomainWhereInput
    data: XOR<ExternalDomainUpdateWithoutDomainInput, ExternalDomainUncheckedUpdateWithoutDomainInput>
  }

  export type ExternalDomainUpdateWithoutDomainInput = {

  }

  export type ExternalDomainUncheckedUpdateWithoutDomainInput = {

  }

  export type ServerCreateManyUserInput = {
    id: string
    name: string
    ip: string
    rootPassword: string
    forgePassword: string
    price?: number
    active?: boolean
    createdAt?: Date | string
    expiredAt?: Date | string
    assignedAt?: Date | string | null
    renewalAt?: Date | string | null
  }

  export type ArchiveCreateManyUserInput = {
    id?: string
    name: string
    path: string
    createdAt?: Date | string
  }

  export type CampaignCreateManyUserInput = {
    id?: string
    name: string
    alias: string
    geo?: CampaignCreategeoInput | string[]
  }

  export type ServerUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    ip?: StringFieldUpdateOperationsInput | string
    rootPassword?: StringFieldUpdateOperationsInput | string
    forgePassword?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    assignedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    renewalAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    domains?: DomainUpdateManyWithoutServerNestedInput
  }

  export type ServerUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    ip?: StringFieldUpdateOperationsInput | string
    rootPassword?: StringFieldUpdateOperationsInput | string
    forgePassword?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    assignedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    renewalAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    domains?: DomainUncheckedUpdateManyWithoutServerNestedInput
  }

  export type ServerUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    ip?: StringFieldUpdateOperationsInput | string
    rootPassword?: StringFieldUpdateOperationsInput | string
    forgePassword?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    assignedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    renewalAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ArchiveUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    path?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ArchiveUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    path?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ArchiveUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    path?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CampaignUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    alias?: StringFieldUpdateOperationsInput | string
    geo?: CampaignUpdategeoInput | string[]
  }

  export type CampaignUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    alias?: StringFieldUpdateOperationsInput | string
    geo?: CampaignUpdategeoInput | string[]
  }

  export type CampaignUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    alias?: StringFieldUpdateOperationsInput | string
    geo?: CampaignUpdategeoInput | string[]
  }

  export type UserCreateManyTeamInput = {
    id?: string
    name: string
    password: string
    role?: $Enums.Role
    telegramChatId?: string | null
    telegramUserName?: string | null
    token?: string | null
    tokenVersion?: number
    tokenExpiry?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateWithoutTeamInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    telegramChatId?: NullableStringFieldUpdateOperationsInput | string | null
    telegramUserName?: NullableStringFieldUpdateOperationsInput | string | null
    token?: NullableStringFieldUpdateOperationsInput | string | null
    tokenVersion?: IntFieldUpdateOperationsInput | number
    tokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    servers?: ServerUpdateManyWithoutUserNestedInput
    archives?: ArchiveUpdateManyWithoutUserNestedInput
    campaigns?: CampaignUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutTeamInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    telegramChatId?: NullableStringFieldUpdateOperationsInput | string | null
    telegramUserName?: NullableStringFieldUpdateOperationsInput | string | null
    token?: NullableStringFieldUpdateOperationsInput | string | null
    tokenVersion?: IntFieldUpdateOperationsInput | number
    tokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    servers?: ServerUncheckedUpdateManyWithoutUserNestedInput
    archives?: ArchiveUncheckedUpdateManyWithoutUserNestedInput
    campaigns?: CampaignUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateManyWithoutTeamInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    telegramChatId?: NullableStringFieldUpdateOperationsInput | string | null
    telegramUserName?: NullableStringFieldUpdateOperationsInput | string | null
    token?: NullableStringFieldUpdateOperationsInput | string | null
    tokenVersion?: IntFieldUpdateOperationsInput | number
    tokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DomainCreateManyServerInput = {
    id: string
    name: string
    type: $Enums.DomainType
    status?: $Enums.DomainStatus
    price?: number
    repoId: string
    sshUrl: string
    hasSSL?: boolean
    campaign?: string
    deploymentType?: $Enums.DeploymentType
  }

  export type DomainUpdateWithoutServerInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumDomainTypeFieldUpdateOperationsInput | $Enums.DomainType
    status?: EnumDomainStatusFieldUpdateOperationsInput | $Enums.DomainStatus
    price?: FloatFieldUpdateOperationsInput | number
    repoId?: StringFieldUpdateOperationsInput | string
    sshUrl?: StringFieldUpdateOperationsInput | string
    hasSSL?: BoolFieldUpdateOperationsInput | boolean
    campaign?: StringFieldUpdateOperationsInput | string
    deploymentType?: EnumDeploymentTypeFieldUpdateOperationsInput | $Enums.DeploymentType
    internal?: InternalDomainUpdateOneWithoutDomainNestedInput
    external?: ExternalDomainUpdateOneWithoutDomainNestedInput
  }

  export type DomainUncheckedUpdateWithoutServerInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumDomainTypeFieldUpdateOperationsInput | $Enums.DomainType
    status?: EnumDomainStatusFieldUpdateOperationsInput | $Enums.DomainStatus
    price?: FloatFieldUpdateOperationsInput | number
    repoId?: StringFieldUpdateOperationsInput | string
    sshUrl?: StringFieldUpdateOperationsInput | string
    hasSSL?: BoolFieldUpdateOperationsInput | boolean
    campaign?: StringFieldUpdateOperationsInput | string
    deploymentType?: EnumDeploymentTypeFieldUpdateOperationsInput | $Enums.DeploymentType
    internal?: InternalDomainUncheckedUpdateOneWithoutDomainNestedInput
    external?: ExternalDomainUncheckedUpdateOneWithoutDomainNestedInput
  }

  export type DomainUncheckedUpdateManyWithoutServerInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumDomainTypeFieldUpdateOperationsInput | $Enums.DomainType
    status?: EnumDomainStatusFieldUpdateOperationsInput | $Enums.DomainStatus
    price?: FloatFieldUpdateOperationsInput | number
    repoId?: StringFieldUpdateOperationsInput | string
    sshUrl?: StringFieldUpdateOperationsInput | string
    hasSSL?: BoolFieldUpdateOperationsInput | boolean
    campaign?: StringFieldUpdateOperationsInput | string
    deploymentType?: EnumDeploymentTypeFieldUpdateOperationsInput | $Enums.DeploymentType
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}