
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model demandas
 * 
 */
export type demandas = $Result.DefaultSelection<Prisma.$demandasPayload>
/**
 * Model estadosConversa
 * 
 */
export type estadosConversa = $Result.DefaultSelection<Prisma.$estadosConversaPayload>
/**
 * Model usuarios
 * 
 */
export type usuarios = $Result.DefaultSelection<Prisma.$usuariosPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Demandas
 * const demandas = await prisma.demandas.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
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
   * const prisma = new PrismaClient()
   * // Fetch zero or more Demandas
   * const demandas = await prisma.demandas.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
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
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.demandas`: Exposes CRUD operations for the **demandas** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Demandas
    * const demandas = await prisma.demandas.findMany()
    * ```
    */
  get demandas(): Prisma.demandasDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.estadosConversa`: Exposes CRUD operations for the **estadosConversa** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more EstadosConversas
    * const estadosConversas = await prisma.estadosConversa.findMany()
    * ```
    */
  get estadosConversa(): Prisma.estadosConversaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.usuarios`: Exposes CRUD operations for the **usuarios** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Usuarios
    * const usuarios = await prisma.usuarios.findMany()
    * ```
    */
  get usuarios(): Prisma.usuariosDelegate<ExtArgs, ClientOptions>;
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
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

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
   * Prisma Client JS version: 6.14.0
   * Query Engine version: 717184b7b35ea05dfa71a3236b7af656013e1e49
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


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
    demandas: 'demandas',
    estadosConversa: 'estadosConversa',
    usuarios: 'usuarios'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "demandas" | "estadosConversa" | "usuarios"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      demandas: {
        payload: Prisma.$demandasPayload<ExtArgs>
        fields: Prisma.demandasFieldRefs
        operations: {
          findUnique: {
            args: Prisma.demandasFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$demandasPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.demandasFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$demandasPayload>
          }
          findFirst: {
            args: Prisma.demandasFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$demandasPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.demandasFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$demandasPayload>
          }
          findMany: {
            args: Prisma.demandasFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$demandasPayload>[]
          }
          create: {
            args: Prisma.demandasCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$demandasPayload>
          }
          createMany: {
            args: Prisma.demandasCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.demandasDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$demandasPayload>
          }
          update: {
            args: Prisma.demandasUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$demandasPayload>
          }
          deleteMany: {
            args: Prisma.demandasDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.demandasUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.demandasUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$demandasPayload>
          }
          aggregate: {
            args: Prisma.DemandasAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDemandas>
          }
          groupBy: {
            args: Prisma.demandasGroupByArgs<ExtArgs>
            result: $Utils.Optional<DemandasGroupByOutputType>[]
          }
          count: {
            args: Prisma.demandasCountArgs<ExtArgs>
            result: $Utils.Optional<DemandasCountAggregateOutputType> | number
          }
        }
      }
      estadosConversa: {
        payload: Prisma.$estadosConversaPayload<ExtArgs>
        fields: Prisma.estadosConversaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.estadosConversaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$estadosConversaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.estadosConversaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$estadosConversaPayload>
          }
          findFirst: {
            args: Prisma.estadosConversaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$estadosConversaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.estadosConversaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$estadosConversaPayload>
          }
          findMany: {
            args: Prisma.estadosConversaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$estadosConversaPayload>[]
          }
          create: {
            args: Prisma.estadosConversaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$estadosConversaPayload>
          }
          createMany: {
            args: Prisma.estadosConversaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.estadosConversaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$estadosConversaPayload>
          }
          update: {
            args: Prisma.estadosConversaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$estadosConversaPayload>
          }
          deleteMany: {
            args: Prisma.estadosConversaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.estadosConversaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.estadosConversaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$estadosConversaPayload>
          }
          aggregate: {
            args: Prisma.EstadosConversaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEstadosConversa>
          }
          groupBy: {
            args: Prisma.estadosConversaGroupByArgs<ExtArgs>
            result: $Utils.Optional<EstadosConversaGroupByOutputType>[]
          }
          count: {
            args: Prisma.estadosConversaCountArgs<ExtArgs>
            result: $Utils.Optional<EstadosConversaCountAggregateOutputType> | number
          }
        }
      }
      usuarios: {
        payload: Prisma.$usuariosPayload<ExtArgs>
        fields: Prisma.usuariosFieldRefs
        operations: {
          findUnique: {
            args: Prisma.usuariosFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuariosPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.usuariosFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuariosPayload>
          }
          findFirst: {
            args: Prisma.usuariosFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuariosPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.usuariosFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuariosPayload>
          }
          findMany: {
            args: Prisma.usuariosFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuariosPayload>[]
          }
          create: {
            args: Prisma.usuariosCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuariosPayload>
          }
          createMany: {
            args: Prisma.usuariosCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.usuariosDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuariosPayload>
          }
          update: {
            args: Prisma.usuariosUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuariosPayload>
          }
          deleteMany: {
            args: Prisma.usuariosDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.usuariosUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.usuariosUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuariosPayload>
          }
          aggregate: {
            args: Prisma.UsuariosAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsuarios>
          }
          groupBy: {
            args: Prisma.usuariosGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsuariosGroupByOutputType>[]
          }
          count: {
            args: Prisma.usuariosCountArgs<ExtArgs>
            result: $Utils.Optional<UsuariosCountAggregateOutputType> | number
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
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
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
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
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
  }
  export type GlobalOmitConfig = {
    demandas?: demandasOmit
    estadosConversa?: estadosConversaOmit
    usuarios?: usuariosOmit
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
   * Count Type EstadosConversaCountOutputType
   */

  export type EstadosConversaCountOutputType = {
    usuarios: number
  }

  export type EstadosConversaCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuarios?: boolean | EstadosConversaCountOutputTypeCountUsuariosArgs
  }

  // Custom InputTypes
  /**
   * EstadosConversaCountOutputType without action
   */
  export type EstadosConversaCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EstadosConversaCountOutputType
     */
    select?: EstadosConversaCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * EstadosConversaCountOutputType without action
   */
  export type EstadosConversaCountOutputTypeCountUsuariosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: usuariosWhereInput
  }


  /**
   * Count Type UsuariosCountOutputType
   */

  export type UsuariosCountOutputType = {
    demandas: number
  }

  export type UsuariosCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    demandas?: boolean | UsuariosCountOutputTypeCountDemandasArgs
  }

  // Custom InputTypes
  /**
   * UsuariosCountOutputType without action
   */
  export type UsuariosCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsuariosCountOutputType
     */
    select?: UsuariosCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UsuariosCountOutputType without action
   */
  export type UsuariosCountOutputTypeCountDemandasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: demandasWhereInput
  }


  /**
   * Models
   */

  /**
   * Model demandas
   */

  export type AggregateDemandas = {
    _count: DemandasCountAggregateOutputType | null
    _avg: DemandasAvgAggregateOutputType | null
    _sum: DemandasSumAggregateOutputType | null
    _min: DemandasMinAggregateOutputType | null
    _max: DemandasMaxAggregateOutputType | null
  }

  export type DemandasAvgAggregateOutputType = {
    id: number | null
    usuario_id: number | null
  }

  export type DemandasSumAggregateOutputType = {
    id: number | null
    usuario_id: number | null
  }

  export type DemandasMinAggregateOutputType = {
    id: number | null
    usuario_id: number | null
    tipo: string | null
    descricao: string | null
    status: string | null
    data_criacao: Date | null
  }

  export type DemandasMaxAggregateOutputType = {
    id: number | null
    usuario_id: number | null
    tipo: string | null
    descricao: string | null
    status: string | null
    data_criacao: Date | null
  }

  export type DemandasCountAggregateOutputType = {
    id: number
    usuario_id: number
    tipo: number
    descricao: number
    status: number
    data_criacao: number
    _all: number
  }


  export type DemandasAvgAggregateInputType = {
    id?: true
    usuario_id?: true
  }

  export type DemandasSumAggregateInputType = {
    id?: true
    usuario_id?: true
  }

  export type DemandasMinAggregateInputType = {
    id?: true
    usuario_id?: true
    tipo?: true
    descricao?: true
    status?: true
    data_criacao?: true
  }

  export type DemandasMaxAggregateInputType = {
    id?: true
    usuario_id?: true
    tipo?: true
    descricao?: true
    status?: true
    data_criacao?: true
  }

  export type DemandasCountAggregateInputType = {
    id?: true
    usuario_id?: true
    tipo?: true
    descricao?: true
    status?: true
    data_criacao?: true
    _all?: true
  }

  export type DemandasAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which demandas to aggregate.
     */
    where?: demandasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of demandas to fetch.
     */
    orderBy?: demandasOrderByWithRelationInput | demandasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: demandasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` demandas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` demandas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned demandas
    **/
    _count?: true | DemandasCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DemandasAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DemandasSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DemandasMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DemandasMaxAggregateInputType
  }

  export type GetDemandasAggregateType<T extends DemandasAggregateArgs> = {
        [P in keyof T & keyof AggregateDemandas]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDemandas[P]>
      : GetScalarType<T[P], AggregateDemandas[P]>
  }




  export type demandasGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: demandasWhereInput
    orderBy?: demandasOrderByWithAggregationInput | demandasOrderByWithAggregationInput[]
    by: DemandasScalarFieldEnum[] | DemandasScalarFieldEnum
    having?: demandasScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DemandasCountAggregateInputType | true
    _avg?: DemandasAvgAggregateInputType
    _sum?: DemandasSumAggregateInputType
    _min?: DemandasMinAggregateInputType
    _max?: DemandasMaxAggregateInputType
  }

  export type DemandasGroupByOutputType = {
    id: number
    usuario_id: number
    tipo: string
    descricao: string | null
    status: string | null
    data_criacao: Date | null
    _count: DemandasCountAggregateOutputType | null
    _avg: DemandasAvgAggregateOutputType | null
    _sum: DemandasSumAggregateOutputType | null
    _min: DemandasMinAggregateOutputType | null
    _max: DemandasMaxAggregateOutputType | null
  }

  type GetDemandasGroupByPayload<T extends demandasGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DemandasGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DemandasGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DemandasGroupByOutputType[P]>
            : GetScalarType<T[P], DemandasGroupByOutputType[P]>
        }
      >
    >


  export type demandasSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    usuario_id?: boolean
    tipo?: boolean
    descricao?: boolean
    status?: boolean
    data_criacao?: boolean
    usuarios?: boolean | usuariosDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["demandas"]>



  export type demandasSelectScalar = {
    id?: boolean
    usuario_id?: boolean
    tipo?: boolean
    descricao?: boolean
    status?: boolean
    data_criacao?: boolean
  }

  export type demandasOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "usuario_id" | "tipo" | "descricao" | "status" | "data_criacao", ExtArgs["result"]["demandas"]>
  export type demandasInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuarios?: boolean | usuariosDefaultArgs<ExtArgs>
  }

  export type $demandasPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "demandas"
    objects: {
      usuarios: Prisma.$usuariosPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      usuario_id: number
      tipo: string
      descricao: string | null
      status: string | null
      data_criacao: Date | null
    }, ExtArgs["result"]["demandas"]>
    composites: {}
  }

  type demandasGetPayload<S extends boolean | null | undefined | demandasDefaultArgs> = $Result.GetResult<Prisma.$demandasPayload, S>

  type demandasCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<demandasFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DemandasCountAggregateInputType | true
    }

  export interface demandasDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['demandas'], meta: { name: 'demandas' } }
    /**
     * Find zero or one Demandas that matches the filter.
     * @param {demandasFindUniqueArgs} args - Arguments to find a Demandas
     * @example
     * // Get one Demandas
     * const demandas = await prisma.demandas.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends demandasFindUniqueArgs>(args: SelectSubset<T, demandasFindUniqueArgs<ExtArgs>>): Prisma__demandasClient<$Result.GetResult<Prisma.$demandasPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Demandas that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {demandasFindUniqueOrThrowArgs} args - Arguments to find a Demandas
     * @example
     * // Get one Demandas
     * const demandas = await prisma.demandas.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends demandasFindUniqueOrThrowArgs>(args: SelectSubset<T, demandasFindUniqueOrThrowArgs<ExtArgs>>): Prisma__demandasClient<$Result.GetResult<Prisma.$demandasPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Demandas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {demandasFindFirstArgs} args - Arguments to find a Demandas
     * @example
     * // Get one Demandas
     * const demandas = await prisma.demandas.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends demandasFindFirstArgs>(args?: SelectSubset<T, demandasFindFirstArgs<ExtArgs>>): Prisma__demandasClient<$Result.GetResult<Prisma.$demandasPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Demandas that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {demandasFindFirstOrThrowArgs} args - Arguments to find a Demandas
     * @example
     * // Get one Demandas
     * const demandas = await prisma.demandas.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends demandasFindFirstOrThrowArgs>(args?: SelectSubset<T, demandasFindFirstOrThrowArgs<ExtArgs>>): Prisma__demandasClient<$Result.GetResult<Prisma.$demandasPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Demandas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {demandasFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Demandas
     * const demandas = await prisma.demandas.findMany()
     * 
     * // Get first 10 Demandas
     * const demandas = await prisma.demandas.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const demandasWithIdOnly = await prisma.demandas.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends demandasFindManyArgs>(args?: SelectSubset<T, demandasFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$demandasPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Demandas.
     * @param {demandasCreateArgs} args - Arguments to create a Demandas.
     * @example
     * // Create one Demandas
     * const Demandas = await prisma.demandas.create({
     *   data: {
     *     // ... data to create a Demandas
     *   }
     * })
     * 
     */
    create<T extends demandasCreateArgs>(args: SelectSubset<T, demandasCreateArgs<ExtArgs>>): Prisma__demandasClient<$Result.GetResult<Prisma.$demandasPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Demandas.
     * @param {demandasCreateManyArgs} args - Arguments to create many Demandas.
     * @example
     * // Create many Demandas
     * const demandas = await prisma.demandas.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends demandasCreateManyArgs>(args?: SelectSubset<T, demandasCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Demandas.
     * @param {demandasDeleteArgs} args - Arguments to delete one Demandas.
     * @example
     * // Delete one Demandas
     * const Demandas = await prisma.demandas.delete({
     *   where: {
     *     // ... filter to delete one Demandas
     *   }
     * })
     * 
     */
    delete<T extends demandasDeleteArgs>(args: SelectSubset<T, demandasDeleteArgs<ExtArgs>>): Prisma__demandasClient<$Result.GetResult<Prisma.$demandasPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Demandas.
     * @param {demandasUpdateArgs} args - Arguments to update one Demandas.
     * @example
     * // Update one Demandas
     * const demandas = await prisma.demandas.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends demandasUpdateArgs>(args: SelectSubset<T, demandasUpdateArgs<ExtArgs>>): Prisma__demandasClient<$Result.GetResult<Prisma.$demandasPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Demandas.
     * @param {demandasDeleteManyArgs} args - Arguments to filter Demandas to delete.
     * @example
     * // Delete a few Demandas
     * const { count } = await prisma.demandas.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends demandasDeleteManyArgs>(args?: SelectSubset<T, demandasDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Demandas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {demandasUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Demandas
     * const demandas = await prisma.demandas.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends demandasUpdateManyArgs>(args: SelectSubset<T, demandasUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Demandas.
     * @param {demandasUpsertArgs} args - Arguments to update or create a Demandas.
     * @example
     * // Update or create a Demandas
     * const demandas = await prisma.demandas.upsert({
     *   create: {
     *     // ... data to create a Demandas
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Demandas we want to update
     *   }
     * })
     */
    upsert<T extends demandasUpsertArgs>(args: SelectSubset<T, demandasUpsertArgs<ExtArgs>>): Prisma__demandasClient<$Result.GetResult<Prisma.$demandasPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Demandas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {demandasCountArgs} args - Arguments to filter Demandas to count.
     * @example
     * // Count the number of Demandas
     * const count = await prisma.demandas.count({
     *   where: {
     *     // ... the filter for the Demandas we want to count
     *   }
     * })
    **/
    count<T extends demandasCountArgs>(
      args?: Subset<T, demandasCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DemandasCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Demandas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DemandasAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DemandasAggregateArgs>(args: Subset<T, DemandasAggregateArgs>): Prisma.PrismaPromise<GetDemandasAggregateType<T>>

    /**
     * Group by Demandas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {demandasGroupByArgs} args - Group by arguments.
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
      T extends demandasGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: demandasGroupByArgs['orderBy'] }
        : { orderBy?: demandasGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, demandasGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDemandasGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the demandas model
   */
  readonly fields: demandasFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for demandas.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__demandasClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    usuarios<T extends usuariosDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usuariosDefaultArgs<ExtArgs>>): Prisma__usuariosClient<$Result.GetResult<Prisma.$usuariosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the demandas model
   */
  interface demandasFieldRefs {
    readonly id: FieldRef<"demandas", 'Int'>
    readonly usuario_id: FieldRef<"demandas", 'Int'>
    readonly tipo: FieldRef<"demandas", 'String'>
    readonly descricao: FieldRef<"demandas", 'String'>
    readonly status: FieldRef<"demandas", 'String'>
    readonly data_criacao: FieldRef<"demandas", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * demandas findUnique
   */
  export type demandasFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the demandas
     */
    select?: demandasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the demandas
     */
    omit?: demandasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: demandasInclude<ExtArgs> | null
    /**
     * Filter, which demandas to fetch.
     */
    where: demandasWhereUniqueInput
  }

  /**
   * demandas findUniqueOrThrow
   */
  export type demandasFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the demandas
     */
    select?: demandasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the demandas
     */
    omit?: demandasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: demandasInclude<ExtArgs> | null
    /**
     * Filter, which demandas to fetch.
     */
    where: demandasWhereUniqueInput
  }

  /**
   * demandas findFirst
   */
  export type demandasFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the demandas
     */
    select?: demandasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the demandas
     */
    omit?: demandasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: demandasInclude<ExtArgs> | null
    /**
     * Filter, which demandas to fetch.
     */
    where?: demandasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of demandas to fetch.
     */
    orderBy?: demandasOrderByWithRelationInput | demandasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for demandas.
     */
    cursor?: demandasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` demandas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` demandas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of demandas.
     */
    distinct?: DemandasScalarFieldEnum | DemandasScalarFieldEnum[]
  }

  /**
   * demandas findFirstOrThrow
   */
  export type demandasFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the demandas
     */
    select?: demandasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the demandas
     */
    omit?: demandasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: demandasInclude<ExtArgs> | null
    /**
     * Filter, which demandas to fetch.
     */
    where?: demandasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of demandas to fetch.
     */
    orderBy?: demandasOrderByWithRelationInput | demandasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for demandas.
     */
    cursor?: demandasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` demandas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` demandas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of demandas.
     */
    distinct?: DemandasScalarFieldEnum | DemandasScalarFieldEnum[]
  }

  /**
   * demandas findMany
   */
  export type demandasFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the demandas
     */
    select?: demandasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the demandas
     */
    omit?: demandasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: demandasInclude<ExtArgs> | null
    /**
     * Filter, which demandas to fetch.
     */
    where?: demandasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of demandas to fetch.
     */
    orderBy?: demandasOrderByWithRelationInput | demandasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing demandas.
     */
    cursor?: demandasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` demandas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` demandas.
     */
    skip?: number
    distinct?: DemandasScalarFieldEnum | DemandasScalarFieldEnum[]
  }

  /**
   * demandas create
   */
  export type demandasCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the demandas
     */
    select?: demandasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the demandas
     */
    omit?: demandasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: demandasInclude<ExtArgs> | null
    /**
     * The data needed to create a demandas.
     */
    data: XOR<demandasCreateInput, demandasUncheckedCreateInput>
  }

  /**
   * demandas createMany
   */
  export type demandasCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many demandas.
     */
    data: demandasCreateManyInput | demandasCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * demandas update
   */
  export type demandasUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the demandas
     */
    select?: demandasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the demandas
     */
    omit?: demandasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: demandasInclude<ExtArgs> | null
    /**
     * The data needed to update a demandas.
     */
    data: XOR<demandasUpdateInput, demandasUncheckedUpdateInput>
    /**
     * Choose, which demandas to update.
     */
    where: demandasWhereUniqueInput
  }

  /**
   * demandas updateMany
   */
  export type demandasUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update demandas.
     */
    data: XOR<demandasUpdateManyMutationInput, demandasUncheckedUpdateManyInput>
    /**
     * Filter which demandas to update
     */
    where?: demandasWhereInput
    /**
     * Limit how many demandas to update.
     */
    limit?: number
  }

  /**
   * demandas upsert
   */
  export type demandasUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the demandas
     */
    select?: demandasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the demandas
     */
    omit?: demandasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: demandasInclude<ExtArgs> | null
    /**
     * The filter to search for the demandas to update in case it exists.
     */
    where: demandasWhereUniqueInput
    /**
     * In case the demandas found by the `where` argument doesn't exist, create a new demandas with this data.
     */
    create: XOR<demandasCreateInput, demandasUncheckedCreateInput>
    /**
     * In case the demandas was found with the provided `where` argument, update it with this data.
     */
    update: XOR<demandasUpdateInput, demandasUncheckedUpdateInput>
  }

  /**
   * demandas delete
   */
  export type demandasDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the demandas
     */
    select?: demandasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the demandas
     */
    omit?: demandasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: demandasInclude<ExtArgs> | null
    /**
     * Filter which demandas to delete.
     */
    where: demandasWhereUniqueInput
  }

  /**
   * demandas deleteMany
   */
  export type demandasDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which demandas to delete
     */
    where?: demandasWhereInput
    /**
     * Limit how many demandas to delete.
     */
    limit?: number
  }

  /**
   * demandas without action
   */
  export type demandasDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the demandas
     */
    select?: demandasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the demandas
     */
    omit?: demandasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: demandasInclude<ExtArgs> | null
  }


  /**
   * Model estadosConversa
   */

  export type AggregateEstadosConversa = {
    _count: EstadosConversaCountAggregateOutputType | null
    _avg: EstadosConversaAvgAggregateOutputType | null
    _sum: EstadosConversaSumAggregateOutputType | null
    _min: EstadosConversaMinAggregateOutputType | null
    _max: EstadosConversaMaxAggregateOutputType | null
  }

  export type EstadosConversaAvgAggregateOutputType = {
    id: number | null
  }

  export type EstadosConversaSumAggregateOutputType = {
    id: number | null
  }

  export type EstadosConversaMinAggregateOutputType = {
    id: number | null
    nome: string | null
    descricao: string | null
  }

  export type EstadosConversaMaxAggregateOutputType = {
    id: number | null
    nome: string | null
    descricao: string | null
  }

  export type EstadosConversaCountAggregateOutputType = {
    id: number
    nome: number
    descricao: number
    _all: number
  }


  export type EstadosConversaAvgAggregateInputType = {
    id?: true
  }

  export type EstadosConversaSumAggregateInputType = {
    id?: true
  }

  export type EstadosConversaMinAggregateInputType = {
    id?: true
    nome?: true
    descricao?: true
  }

  export type EstadosConversaMaxAggregateInputType = {
    id?: true
    nome?: true
    descricao?: true
  }

  export type EstadosConversaCountAggregateInputType = {
    id?: true
    nome?: true
    descricao?: true
    _all?: true
  }

  export type EstadosConversaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which estadosConversa to aggregate.
     */
    where?: estadosConversaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of estadosConversas to fetch.
     */
    orderBy?: estadosConversaOrderByWithRelationInput | estadosConversaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: estadosConversaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` estadosConversas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` estadosConversas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned estadosConversas
    **/
    _count?: true | EstadosConversaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EstadosConversaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EstadosConversaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EstadosConversaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EstadosConversaMaxAggregateInputType
  }

  export type GetEstadosConversaAggregateType<T extends EstadosConversaAggregateArgs> = {
        [P in keyof T & keyof AggregateEstadosConversa]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEstadosConversa[P]>
      : GetScalarType<T[P], AggregateEstadosConversa[P]>
  }




  export type estadosConversaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: estadosConversaWhereInput
    orderBy?: estadosConversaOrderByWithAggregationInput | estadosConversaOrderByWithAggregationInput[]
    by: EstadosConversaScalarFieldEnum[] | EstadosConversaScalarFieldEnum
    having?: estadosConversaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EstadosConversaCountAggregateInputType | true
    _avg?: EstadosConversaAvgAggregateInputType
    _sum?: EstadosConversaSumAggregateInputType
    _min?: EstadosConversaMinAggregateInputType
    _max?: EstadosConversaMaxAggregateInputType
  }

  export type EstadosConversaGroupByOutputType = {
    id: number
    nome: string
    descricao: string | null
    _count: EstadosConversaCountAggregateOutputType | null
    _avg: EstadosConversaAvgAggregateOutputType | null
    _sum: EstadosConversaSumAggregateOutputType | null
    _min: EstadosConversaMinAggregateOutputType | null
    _max: EstadosConversaMaxAggregateOutputType | null
  }

  type GetEstadosConversaGroupByPayload<T extends estadosConversaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EstadosConversaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EstadosConversaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EstadosConversaGroupByOutputType[P]>
            : GetScalarType<T[P], EstadosConversaGroupByOutputType[P]>
        }
      >
    >


  export type estadosConversaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    descricao?: boolean
    usuarios?: boolean | estadosConversa$usuariosArgs<ExtArgs>
    _count?: boolean | EstadosConversaCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["estadosConversa"]>



  export type estadosConversaSelectScalar = {
    id?: boolean
    nome?: boolean
    descricao?: boolean
  }

  export type estadosConversaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nome" | "descricao", ExtArgs["result"]["estadosConversa"]>
  export type estadosConversaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuarios?: boolean | estadosConversa$usuariosArgs<ExtArgs>
    _count?: boolean | EstadosConversaCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $estadosConversaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "estadosConversa"
    objects: {
      usuarios: Prisma.$usuariosPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nome: string
      descricao: string | null
    }, ExtArgs["result"]["estadosConversa"]>
    composites: {}
  }

  type estadosConversaGetPayload<S extends boolean | null | undefined | estadosConversaDefaultArgs> = $Result.GetResult<Prisma.$estadosConversaPayload, S>

  type estadosConversaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<estadosConversaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EstadosConversaCountAggregateInputType | true
    }

  export interface estadosConversaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['estadosConversa'], meta: { name: 'estadosConversa' } }
    /**
     * Find zero or one EstadosConversa that matches the filter.
     * @param {estadosConversaFindUniqueArgs} args - Arguments to find a EstadosConversa
     * @example
     * // Get one EstadosConversa
     * const estadosConversa = await prisma.estadosConversa.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends estadosConversaFindUniqueArgs>(args: SelectSubset<T, estadosConversaFindUniqueArgs<ExtArgs>>): Prisma__estadosConversaClient<$Result.GetResult<Prisma.$estadosConversaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one EstadosConversa that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {estadosConversaFindUniqueOrThrowArgs} args - Arguments to find a EstadosConversa
     * @example
     * // Get one EstadosConversa
     * const estadosConversa = await prisma.estadosConversa.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends estadosConversaFindUniqueOrThrowArgs>(args: SelectSubset<T, estadosConversaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__estadosConversaClient<$Result.GetResult<Prisma.$estadosConversaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first EstadosConversa that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {estadosConversaFindFirstArgs} args - Arguments to find a EstadosConversa
     * @example
     * // Get one EstadosConversa
     * const estadosConversa = await prisma.estadosConversa.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends estadosConversaFindFirstArgs>(args?: SelectSubset<T, estadosConversaFindFirstArgs<ExtArgs>>): Prisma__estadosConversaClient<$Result.GetResult<Prisma.$estadosConversaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first EstadosConversa that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {estadosConversaFindFirstOrThrowArgs} args - Arguments to find a EstadosConversa
     * @example
     * // Get one EstadosConversa
     * const estadosConversa = await prisma.estadosConversa.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends estadosConversaFindFirstOrThrowArgs>(args?: SelectSubset<T, estadosConversaFindFirstOrThrowArgs<ExtArgs>>): Prisma__estadosConversaClient<$Result.GetResult<Prisma.$estadosConversaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more EstadosConversas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {estadosConversaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all EstadosConversas
     * const estadosConversas = await prisma.estadosConversa.findMany()
     * 
     * // Get first 10 EstadosConversas
     * const estadosConversas = await prisma.estadosConversa.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const estadosConversaWithIdOnly = await prisma.estadosConversa.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends estadosConversaFindManyArgs>(args?: SelectSubset<T, estadosConversaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$estadosConversaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a EstadosConversa.
     * @param {estadosConversaCreateArgs} args - Arguments to create a EstadosConversa.
     * @example
     * // Create one EstadosConversa
     * const EstadosConversa = await prisma.estadosConversa.create({
     *   data: {
     *     // ... data to create a EstadosConversa
     *   }
     * })
     * 
     */
    create<T extends estadosConversaCreateArgs>(args: SelectSubset<T, estadosConversaCreateArgs<ExtArgs>>): Prisma__estadosConversaClient<$Result.GetResult<Prisma.$estadosConversaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many EstadosConversas.
     * @param {estadosConversaCreateManyArgs} args - Arguments to create many EstadosConversas.
     * @example
     * // Create many EstadosConversas
     * const estadosConversa = await prisma.estadosConversa.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends estadosConversaCreateManyArgs>(args?: SelectSubset<T, estadosConversaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a EstadosConversa.
     * @param {estadosConversaDeleteArgs} args - Arguments to delete one EstadosConversa.
     * @example
     * // Delete one EstadosConversa
     * const EstadosConversa = await prisma.estadosConversa.delete({
     *   where: {
     *     // ... filter to delete one EstadosConversa
     *   }
     * })
     * 
     */
    delete<T extends estadosConversaDeleteArgs>(args: SelectSubset<T, estadosConversaDeleteArgs<ExtArgs>>): Prisma__estadosConversaClient<$Result.GetResult<Prisma.$estadosConversaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one EstadosConversa.
     * @param {estadosConversaUpdateArgs} args - Arguments to update one EstadosConversa.
     * @example
     * // Update one EstadosConversa
     * const estadosConversa = await prisma.estadosConversa.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends estadosConversaUpdateArgs>(args: SelectSubset<T, estadosConversaUpdateArgs<ExtArgs>>): Prisma__estadosConversaClient<$Result.GetResult<Prisma.$estadosConversaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more EstadosConversas.
     * @param {estadosConversaDeleteManyArgs} args - Arguments to filter EstadosConversas to delete.
     * @example
     * // Delete a few EstadosConversas
     * const { count } = await prisma.estadosConversa.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends estadosConversaDeleteManyArgs>(args?: SelectSubset<T, estadosConversaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EstadosConversas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {estadosConversaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many EstadosConversas
     * const estadosConversa = await prisma.estadosConversa.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends estadosConversaUpdateManyArgs>(args: SelectSubset<T, estadosConversaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one EstadosConversa.
     * @param {estadosConversaUpsertArgs} args - Arguments to update or create a EstadosConversa.
     * @example
     * // Update or create a EstadosConversa
     * const estadosConversa = await prisma.estadosConversa.upsert({
     *   create: {
     *     // ... data to create a EstadosConversa
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the EstadosConversa we want to update
     *   }
     * })
     */
    upsert<T extends estadosConversaUpsertArgs>(args: SelectSubset<T, estadosConversaUpsertArgs<ExtArgs>>): Prisma__estadosConversaClient<$Result.GetResult<Prisma.$estadosConversaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of EstadosConversas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {estadosConversaCountArgs} args - Arguments to filter EstadosConversas to count.
     * @example
     * // Count the number of EstadosConversas
     * const count = await prisma.estadosConversa.count({
     *   where: {
     *     // ... the filter for the EstadosConversas we want to count
     *   }
     * })
    **/
    count<T extends estadosConversaCountArgs>(
      args?: Subset<T, estadosConversaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EstadosConversaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a EstadosConversa.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EstadosConversaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EstadosConversaAggregateArgs>(args: Subset<T, EstadosConversaAggregateArgs>): Prisma.PrismaPromise<GetEstadosConversaAggregateType<T>>

    /**
     * Group by EstadosConversa.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {estadosConversaGroupByArgs} args - Group by arguments.
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
      T extends estadosConversaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: estadosConversaGroupByArgs['orderBy'] }
        : { orderBy?: estadosConversaGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, estadosConversaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEstadosConversaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the estadosConversa model
   */
  readonly fields: estadosConversaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for estadosConversa.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__estadosConversaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    usuarios<T extends estadosConversa$usuariosArgs<ExtArgs> = {}>(args?: Subset<T, estadosConversa$usuariosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usuariosPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the estadosConversa model
   */
  interface estadosConversaFieldRefs {
    readonly id: FieldRef<"estadosConversa", 'Int'>
    readonly nome: FieldRef<"estadosConversa", 'String'>
    readonly descricao: FieldRef<"estadosConversa", 'String'>
  }
    

  // Custom InputTypes
  /**
   * estadosConversa findUnique
   */
  export type estadosConversaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the estadosConversa
     */
    select?: estadosConversaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the estadosConversa
     */
    omit?: estadosConversaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: estadosConversaInclude<ExtArgs> | null
    /**
     * Filter, which estadosConversa to fetch.
     */
    where: estadosConversaWhereUniqueInput
  }

  /**
   * estadosConversa findUniqueOrThrow
   */
  export type estadosConversaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the estadosConversa
     */
    select?: estadosConversaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the estadosConversa
     */
    omit?: estadosConversaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: estadosConversaInclude<ExtArgs> | null
    /**
     * Filter, which estadosConversa to fetch.
     */
    where: estadosConversaWhereUniqueInput
  }

  /**
   * estadosConversa findFirst
   */
  export type estadosConversaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the estadosConversa
     */
    select?: estadosConversaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the estadosConversa
     */
    omit?: estadosConversaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: estadosConversaInclude<ExtArgs> | null
    /**
     * Filter, which estadosConversa to fetch.
     */
    where?: estadosConversaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of estadosConversas to fetch.
     */
    orderBy?: estadosConversaOrderByWithRelationInput | estadosConversaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for estadosConversas.
     */
    cursor?: estadosConversaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` estadosConversas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` estadosConversas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of estadosConversas.
     */
    distinct?: EstadosConversaScalarFieldEnum | EstadosConversaScalarFieldEnum[]
  }

  /**
   * estadosConversa findFirstOrThrow
   */
  export type estadosConversaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the estadosConversa
     */
    select?: estadosConversaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the estadosConversa
     */
    omit?: estadosConversaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: estadosConversaInclude<ExtArgs> | null
    /**
     * Filter, which estadosConversa to fetch.
     */
    where?: estadosConversaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of estadosConversas to fetch.
     */
    orderBy?: estadosConversaOrderByWithRelationInput | estadosConversaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for estadosConversas.
     */
    cursor?: estadosConversaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` estadosConversas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` estadosConversas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of estadosConversas.
     */
    distinct?: EstadosConversaScalarFieldEnum | EstadosConversaScalarFieldEnum[]
  }

  /**
   * estadosConversa findMany
   */
  export type estadosConversaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the estadosConversa
     */
    select?: estadosConversaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the estadosConversa
     */
    omit?: estadosConversaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: estadosConversaInclude<ExtArgs> | null
    /**
     * Filter, which estadosConversas to fetch.
     */
    where?: estadosConversaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of estadosConversas to fetch.
     */
    orderBy?: estadosConversaOrderByWithRelationInput | estadosConversaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing estadosConversas.
     */
    cursor?: estadosConversaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` estadosConversas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` estadosConversas.
     */
    skip?: number
    distinct?: EstadosConversaScalarFieldEnum | EstadosConversaScalarFieldEnum[]
  }

  /**
   * estadosConversa create
   */
  export type estadosConversaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the estadosConversa
     */
    select?: estadosConversaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the estadosConversa
     */
    omit?: estadosConversaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: estadosConversaInclude<ExtArgs> | null
    /**
     * The data needed to create a estadosConversa.
     */
    data: XOR<estadosConversaCreateInput, estadosConversaUncheckedCreateInput>
  }

  /**
   * estadosConversa createMany
   */
  export type estadosConversaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many estadosConversas.
     */
    data: estadosConversaCreateManyInput | estadosConversaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * estadosConversa update
   */
  export type estadosConversaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the estadosConversa
     */
    select?: estadosConversaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the estadosConversa
     */
    omit?: estadosConversaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: estadosConversaInclude<ExtArgs> | null
    /**
     * The data needed to update a estadosConversa.
     */
    data: XOR<estadosConversaUpdateInput, estadosConversaUncheckedUpdateInput>
    /**
     * Choose, which estadosConversa to update.
     */
    where: estadosConversaWhereUniqueInput
  }

  /**
   * estadosConversa updateMany
   */
  export type estadosConversaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update estadosConversas.
     */
    data: XOR<estadosConversaUpdateManyMutationInput, estadosConversaUncheckedUpdateManyInput>
    /**
     * Filter which estadosConversas to update
     */
    where?: estadosConversaWhereInput
    /**
     * Limit how many estadosConversas to update.
     */
    limit?: number
  }

  /**
   * estadosConversa upsert
   */
  export type estadosConversaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the estadosConversa
     */
    select?: estadosConversaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the estadosConversa
     */
    omit?: estadosConversaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: estadosConversaInclude<ExtArgs> | null
    /**
     * The filter to search for the estadosConversa to update in case it exists.
     */
    where: estadosConversaWhereUniqueInput
    /**
     * In case the estadosConversa found by the `where` argument doesn't exist, create a new estadosConversa with this data.
     */
    create: XOR<estadosConversaCreateInput, estadosConversaUncheckedCreateInput>
    /**
     * In case the estadosConversa was found with the provided `where` argument, update it with this data.
     */
    update: XOR<estadosConversaUpdateInput, estadosConversaUncheckedUpdateInput>
  }

  /**
   * estadosConversa delete
   */
  export type estadosConversaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the estadosConversa
     */
    select?: estadosConversaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the estadosConversa
     */
    omit?: estadosConversaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: estadosConversaInclude<ExtArgs> | null
    /**
     * Filter which estadosConversa to delete.
     */
    where: estadosConversaWhereUniqueInput
  }

  /**
   * estadosConversa deleteMany
   */
  export type estadosConversaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which estadosConversas to delete
     */
    where?: estadosConversaWhereInput
    /**
     * Limit how many estadosConversas to delete.
     */
    limit?: number
  }

  /**
   * estadosConversa.usuarios
   */
  export type estadosConversa$usuariosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuarios
     */
    select?: usuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuarios
     */
    omit?: usuariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuariosInclude<ExtArgs> | null
    where?: usuariosWhereInput
    orderBy?: usuariosOrderByWithRelationInput | usuariosOrderByWithRelationInput[]
    cursor?: usuariosWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UsuariosScalarFieldEnum | UsuariosScalarFieldEnum[]
  }

  /**
   * estadosConversa without action
   */
  export type estadosConversaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the estadosConversa
     */
    select?: estadosConversaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the estadosConversa
     */
    omit?: estadosConversaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: estadosConversaInclude<ExtArgs> | null
  }


  /**
   * Model usuarios
   */

  export type AggregateUsuarios = {
    _count: UsuariosCountAggregateOutputType | null
    _avg: UsuariosAvgAggregateOutputType | null
    _sum: UsuariosSumAggregateOutputType | null
    _min: UsuariosMinAggregateOutputType | null
    _max: UsuariosMaxAggregateOutputType | null
  }

  export type UsuariosAvgAggregateOutputType = {
    id: number | null
    estado_conversa_id: number | null
  }

  export type UsuariosSumAggregateOutputType = {
    id: number | null
    estado_conversa_id: number | null
  }

  export type UsuariosMinAggregateOutputType = {
    id: number | null
    nome_completo: string | null
    cpf: string | null
    telefone: string | null
    data_nascimento: Date | null
    id_whatsappwebjs: string | null
    estado_conversa_id: number | null
  }

  export type UsuariosMaxAggregateOutputType = {
    id: number | null
    nome_completo: string | null
    cpf: string | null
    telefone: string | null
    data_nascimento: Date | null
    id_whatsappwebjs: string | null
    estado_conversa_id: number | null
  }

  export type UsuariosCountAggregateOutputType = {
    id: number
    nome_completo: number
    cpf: number
    telefone: number
    data_nascimento: number
    id_whatsappwebjs: number
    estado_conversa_id: number
    _all: number
  }


  export type UsuariosAvgAggregateInputType = {
    id?: true
    estado_conversa_id?: true
  }

  export type UsuariosSumAggregateInputType = {
    id?: true
    estado_conversa_id?: true
  }

  export type UsuariosMinAggregateInputType = {
    id?: true
    nome_completo?: true
    cpf?: true
    telefone?: true
    data_nascimento?: true
    id_whatsappwebjs?: true
    estado_conversa_id?: true
  }

  export type UsuariosMaxAggregateInputType = {
    id?: true
    nome_completo?: true
    cpf?: true
    telefone?: true
    data_nascimento?: true
    id_whatsappwebjs?: true
    estado_conversa_id?: true
  }

  export type UsuariosCountAggregateInputType = {
    id?: true
    nome_completo?: true
    cpf?: true
    telefone?: true
    data_nascimento?: true
    id_whatsappwebjs?: true
    estado_conversa_id?: true
    _all?: true
  }

  export type UsuariosAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which usuarios to aggregate.
     */
    where?: usuariosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of usuarios to fetch.
     */
    orderBy?: usuariosOrderByWithRelationInput | usuariosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: usuariosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned usuarios
    **/
    _count?: true | UsuariosCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UsuariosAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UsuariosSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsuariosMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsuariosMaxAggregateInputType
  }

  export type GetUsuariosAggregateType<T extends UsuariosAggregateArgs> = {
        [P in keyof T & keyof AggregateUsuarios]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsuarios[P]>
      : GetScalarType<T[P], AggregateUsuarios[P]>
  }




  export type usuariosGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: usuariosWhereInput
    orderBy?: usuariosOrderByWithAggregationInput | usuariosOrderByWithAggregationInput[]
    by: UsuariosScalarFieldEnum[] | UsuariosScalarFieldEnum
    having?: usuariosScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsuariosCountAggregateInputType | true
    _avg?: UsuariosAvgAggregateInputType
    _sum?: UsuariosSumAggregateInputType
    _min?: UsuariosMinAggregateInputType
    _max?: UsuariosMaxAggregateInputType
  }

  export type UsuariosGroupByOutputType = {
    id: number
    nome_completo: string
    cpf: string
    telefone: string
    data_nascimento: Date | null
    id_whatsappwebjs: string
    estado_conversa_id: number | null
    _count: UsuariosCountAggregateOutputType | null
    _avg: UsuariosAvgAggregateOutputType | null
    _sum: UsuariosSumAggregateOutputType | null
    _min: UsuariosMinAggregateOutputType | null
    _max: UsuariosMaxAggregateOutputType | null
  }

  type GetUsuariosGroupByPayload<T extends usuariosGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsuariosGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsuariosGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsuariosGroupByOutputType[P]>
            : GetScalarType<T[P], UsuariosGroupByOutputType[P]>
        }
      >
    >


  export type usuariosSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome_completo?: boolean
    cpf?: boolean
    telefone?: boolean
    data_nascimento?: boolean
    id_whatsappwebjs?: boolean
    estado_conversa_id?: boolean
    demandas?: boolean | usuarios$demandasArgs<ExtArgs>
    estados_conversa?: boolean | usuarios$estados_conversaArgs<ExtArgs>
    _count?: boolean | UsuariosCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["usuarios"]>



  export type usuariosSelectScalar = {
    id?: boolean
    nome_completo?: boolean
    cpf?: boolean
    telefone?: boolean
    data_nascimento?: boolean
    id_whatsappwebjs?: boolean
    estado_conversa_id?: boolean
  }

  export type usuariosOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nome_completo" | "cpf" | "telefone" | "data_nascimento" | "id_whatsappwebjs" | "estado_conversa_id", ExtArgs["result"]["usuarios"]>
  export type usuariosInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    demandas?: boolean | usuarios$demandasArgs<ExtArgs>
    estados_conversa?: boolean | usuarios$estados_conversaArgs<ExtArgs>
    _count?: boolean | UsuariosCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $usuariosPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "usuarios"
    objects: {
      demandas: Prisma.$demandasPayload<ExtArgs>[]
      estados_conversa: Prisma.$estadosConversaPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nome_completo: string
      cpf: string
      telefone: string
      data_nascimento: Date | null
      id_whatsappwebjs: string
      estado_conversa_id: number | null
    }, ExtArgs["result"]["usuarios"]>
    composites: {}
  }

  type usuariosGetPayload<S extends boolean | null | undefined | usuariosDefaultArgs> = $Result.GetResult<Prisma.$usuariosPayload, S>

  type usuariosCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<usuariosFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsuariosCountAggregateInputType | true
    }

  export interface usuariosDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['usuarios'], meta: { name: 'usuarios' } }
    /**
     * Find zero or one Usuarios that matches the filter.
     * @param {usuariosFindUniqueArgs} args - Arguments to find a Usuarios
     * @example
     * // Get one Usuarios
     * const usuarios = await prisma.usuarios.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends usuariosFindUniqueArgs>(args: SelectSubset<T, usuariosFindUniqueArgs<ExtArgs>>): Prisma__usuariosClient<$Result.GetResult<Prisma.$usuariosPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Usuarios that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {usuariosFindUniqueOrThrowArgs} args - Arguments to find a Usuarios
     * @example
     * // Get one Usuarios
     * const usuarios = await prisma.usuarios.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends usuariosFindUniqueOrThrowArgs>(args: SelectSubset<T, usuariosFindUniqueOrThrowArgs<ExtArgs>>): Prisma__usuariosClient<$Result.GetResult<Prisma.$usuariosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Usuarios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usuariosFindFirstArgs} args - Arguments to find a Usuarios
     * @example
     * // Get one Usuarios
     * const usuarios = await prisma.usuarios.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends usuariosFindFirstArgs>(args?: SelectSubset<T, usuariosFindFirstArgs<ExtArgs>>): Prisma__usuariosClient<$Result.GetResult<Prisma.$usuariosPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Usuarios that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usuariosFindFirstOrThrowArgs} args - Arguments to find a Usuarios
     * @example
     * // Get one Usuarios
     * const usuarios = await prisma.usuarios.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends usuariosFindFirstOrThrowArgs>(args?: SelectSubset<T, usuariosFindFirstOrThrowArgs<ExtArgs>>): Prisma__usuariosClient<$Result.GetResult<Prisma.$usuariosPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Usuarios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usuariosFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Usuarios
     * const usuarios = await prisma.usuarios.findMany()
     * 
     * // Get first 10 Usuarios
     * const usuarios = await prisma.usuarios.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const usuariosWithIdOnly = await prisma.usuarios.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends usuariosFindManyArgs>(args?: SelectSubset<T, usuariosFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usuariosPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Usuarios.
     * @param {usuariosCreateArgs} args - Arguments to create a Usuarios.
     * @example
     * // Create one Usuarios
     * const Usuarios = await prisma.usuarios.create({
     *   data: {
     *     // ... data to create a Usuarios
     *   }
     * })
     * 
     */
    create<T extends usuariosCreateArgs>(args: SelectSubset<T, usuariosCreateArgs<ExtArgs>>): Prisma__usuariosClient<$Result.GetResult<Prisma.$usuariosPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Usuarios.
     * @param {usuariosCreateManyArgs} args - Arguments to create many Usuarios.
     * @example
     * // Create many Usuarios
     * const usuarios = await prisma.usuarios.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends usuariosCreateManyArgs>(args?: SelectSubset<T, usuariosCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Usuarios.
     * @param {usuariosDeleteArgs} args - Arguments to delete one Usuarios.
     * @example
     * // Delete one Usuarios
     * const Usuarios = await prisma.usuarios.delete({
     *   where: {
     *     // ... filter to delete one Usuarios
     *   }
     * })
     * 
     */
    delete<T extends usuariosDeleteArgs>(args: SelectSubset<T, usuariosDeleteArgs<ExtArgs>>): Prisma__usuariosClient<$Result.GetResult<Prisma.$usuariosPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Usuarios.
     * @param {usuariosUpdateArgs} args - Arguments to update one Usuarios.
     * @example
     * // Update one Usuarios
     * const usuarios = await prisma.usuarios.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends usuariosUpdateArgs>(args: SelectSubset<T, usuariosUpdateArgs<ExtArgs>>): Prisma__usuariosClient<$Result.GetResult<Prisma.$usuariosPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Usuarios.
     * @param {usuariosDeleteManyArgs} args - Arguments to filter Usuarios to delete.
     * @example
     * // Delete a few Usuarios
     * const { count } = await prisma.usuarios.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends usuariosDeleteManyArgs>(args?: SelectSubset<T, usuariosDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usuariosUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Usuarios
     * const usuarios = await prisma.usuarios.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends usuariosUpdateManyArgs>(args: SelectSubset<T, usuariosUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Usuarios.
     * @param {usuariosUpsertArgs} args - Arguments to update or create a Usuarios.
     * @example
     * // Update or create a Usuarios
     * const usuarios = await prisma.usuarios.upsert({
     *   create: {
     *     // ... data to create a Usuarios
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Usuarios we want to update
     *   }
     * })
     */
    upsert<T extends usuariosUpsertArgs>(args: SelectSubset<T, usuariosUpsertArgs<ExtArgs>>): Prisma__usuariosClient<$Result.GetResult<Prisma.$usuariosPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usuariosCountArgs} args - Arguments to filter Usuarios to count.
     * @example
     * // Count the number of Usuarios
     * const count = await prisma.usuarios.count({
     *   where: {
     *     // ... the filter for the Usuarios we want to count
     *   }
     * })
    **/
    count<T extends usuariosCountArgs>(
      args?: Subset<T, usuariosCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsuariosCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuariosAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UsuariosAggregateArgs>(args: Subset<T, UsuariosAggregateArgs>): Prisma.PrismaPromise<GetUsuariosAggregateType<T>>

    /**
     * Group by Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usuariosGroupByArgs} args - Group by arguments.
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
      T extends usuariosGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: usuariosGroupByArgs['orderBy'] }
        : { orderBy?: usuariosGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, usuariosGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsuariosGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the usuarios model
   */
  readonly fields: usuariosFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for usuarios.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__usuariosClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    demandas<T extends usuarios$demandasArgs<ExtArgs> = {}>(args?: Subset<T, usuarios$demandasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$demandasPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    estados_conversa<T extends usuarios$estados_conversaArgs<ExtArgs> = {}>(args?: Subset<T, usuarios$estados_conversaArgs<ExtArgs>>): Prisma__estadosConversaClient<$Result.GetResult<Prisma.$estadosConversaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the usuarios model
   */
  interface usuariosFieldRefs {
    readonly id: FieldRef<"usuarios", 'Int'>
    readonly nome_completo: FieldRef<"usuarios", 'String'>
    readonly cpf: FieldRef<"usuarios", 'String'>
    readonly telefone: FieldRef<"usuarios", 'String'>
    readonly data_nascimento: FieldRef<"usuarios", 'DateTime'>
    readonly id_whatsappwebjs: FieldRef<"usuarios", 'String'>
    readonly estado_conversa_id: FieldRef<"usuarios", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * usuarios findUnique
   */
  export type usuariosFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuarios
     */
    select?: usuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuarios
     */
    omit?: usuariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuariosInclude<ExtArgs> | null
    /**
     * Filter, which usuarios to fetch.
     */
    where: usuariosWhereUniqueInput
  }

  /**
   * usuarios findUniqueOrThrow
   */
  export type usuariosFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuarios
     */
    select?: usuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuarios
     */
    omit?: usuariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuariosInclude<ExtArgs> | null
    /**
     * Filter, which usuarios to fetch.
     */
    where: usuariosWhereUniqueInput
  }

  /**
   * usuarios findFirst
   */
  export type usuariosFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuarios
     */
    select?: usuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuarios
     */
    omit?: usuariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuariosInclude<ExtArgs> | null
    /**
     * Filter, which usuarios to fetch.
     */
    where?: usuariosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of usuarios to fetch.
     */
    orderBy?: usuariosOrderByWithRelationInput | usuariosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for usuarios.
     */
    cursor?: usuariosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of usuarios.
     */
    distinct?: UsuariosScalarFieldEnum | UsuariosScalarFieldEnum[]
  }

  /**
   * usuarios findFirstOrThrow
   */
  export type usuariosFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuarios
     */
    select?: usuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuarios
     */
    omit?: usuariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuariosInclude<ExtArgs> | null
    /**
     * Filter, which usuarios to fetch.
     */
    where?: usuariosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of usuarios to fetch.
     */
    orderBy?: usuariosOrderByWithRelationInput | usuariosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for usuarios.
     */
    cursor?: usuariosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of usuarios.
     */
    distinct?: UsuariosScalarFieldEnum | UsuariosScalarFieldEnum[]
  }

  /**
   * usuarios findMany
   */
  export type usuariosFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuarios
     */
    select?: usuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuarios
     */
    omit?: usuariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuariosInclude<ExtArgs> | null
    /**
     * Filter, which usuarios to fetch.
     */
    where?: usuariosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of usuarios to fetch.
     */
    orderBy?: usuariosOrderByWithRelationInput | usuariosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing usuarios.
     */
    cursor?: usuariosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` usuarios.
     */
    skip?: number
    distinct?: UsuariosScalarFieldEnum | UsuariosScalarFieldEnum[]
  }

  /**
   * usuarios create
   */
  export type usuariosCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuarios
     */
    select?: usuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuarios
     */
    omit?: usuariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuariosInclude<ExtArgs> | null
    /**
     * The data needed to create a usuarios.
     */
    data: XOR<usuariosCreateInput, usuariosUncheckedCreateInput>
  }

  /**
   * usuarios createMany
   */
  export type usuariosCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many usuarios.
     */
    data: usuariosCreateManyInput | usuariosCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * usuarios update
   */
  export type usuariosUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuarios
     */
    select?: usuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuarios
     */
    omit?: usuariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuariosInclude<ExtArgs> | null
    /**
     * The data needed to update a usuarios.
     */
    data: XOR<usuariosUpdateInput, usuariosUncheckedUpdateInput>
    /**
     * Choose, which usuarios to update.
     */
    where: usuariosWhereUniqueInput
  }

  /**
   * usuarios updateMany
   */
  export type usuariosUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update usuarios.
     */
    data: XOR<usuariosUpdateManyMutationInput, usuariosUncheckedUpdateManyInput>
    /**
     * Filter which usuarios to update
     */
    where?: usuariosWhereInput
    /**
     * Limit how many usuarios to update.
     */
    limit?: number
  }

  /**
   * usuarios upsert
   */
  export type usuariosUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuarios
     */
    select?: usuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuarios
     */
    omit?: usuariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuariosInclude<ExtArgs> | null
    /**
     * The filter to search for the usuarios to update in case it exists.
     */
    where: usuariosWhereUniqueInput
    /**
     * In case the usuarios found by the `where` argument doesn't exist, create a new usuarios with this data.
     */
    create: XOR<usuariosCreateInput, usuariosUncheckedCreateInput>
    /**
     * In case the usuarios was found with the provided `where` argument, update it with this data.
     */
    update: XOR<usuariosUpdateInput, usuariosUncheckedUpdateInput>
  }

  /**
   * usuarios delete
   */
  export type usuariosDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuarios
     */
    select?: usuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuarios
     */
    omit?: usuariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuariosInclude<ExtArgs> | null
    /**
     * Filter which usuarios to delete.
     */
    where: usuariosWhereUniqueInput
  }

  /**
   * usuarios deleteMany
   */
  export type usuariosDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which usuarios to delete
     */
    where?: usuariosWhereInput
    /**
     * Limit how many usuarios to delete.
     */
    limit?: number
  }

  /**
   * usuarios.demandas
   */
  export type usuarios$demandasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the demandas
     */
    select?: demandasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the demandas
     */
    omit?: demandasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: demandasInclude<ExtArgs> | null
    where?: demandasWhereInput
    orderBy?: demandasOrderByWithRelationInput | demandasOrderByWithRelationInput[]
    cursor?: demandasWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DemandasScalarFieldEnum | DemandasScalarFieldEnum[]
  }

  /**
   * usuarios.estados_conversa
   */
  export type usuarios$estados_conversaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the estadosConversa
     */
    select?: estadosConversaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the estadosConversa
     */
    omit?: estadosConversaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: estadosConversaInclude<ExtArgs> | null
    where?: estadosConversaWhereInput
  }

  /**
   * usuarios without action
   */
  export type usuariosDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuarios
     */
    select?: usuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuarios
     */
    omit?: usuariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuariosInclude<ExtArgs> | null
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


  export const DemandasScalarFieldEnum: {
    id: 'id',
    usuario_id: 'usuario_id',
    tipo: 'tipo',
    descricao: 'descricao',
    status: 'status',
    data_criacao: 'data_criacao'
  };

  export type DemandasScalarFieldEnum = (typeof DemandasScalarFieldEnum)[keyof typeof DemandasScalarFieldEnum]


  export const EstadosConversaScalarFieldEnum: {
    id: 'id',
    nome: 'nome',
    descricao: 'descricao'
  };

  export type EstadosConversaScalarFieldEnum = (typeof EstadosConversaScalarFieldEnum)[keyof typeof EstadosConversaScalarFieldEnum]


  export const UsuariosScalarFieldEnum: {
    id: 'id',
    nome_completo: 'nome_completo',
    cpf: 'cpf',
    telefone: 'telefone',
    data_nascimento: 'data_nascimento',
    id_whatsappwebjs: 'id_whatsappwebjs',
    estado_conversa_id: 'estado_conversa_id'
  };

  export type UsuariosScalarFieldEnum = (typeof UsuariosScalarFieldEnum)[keyof typeof UsuariosScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const demandasOrderByRelevanceFieldEnum: {
    tipo: 'tipo',
    descricao: 'descricao',
    status: 'status'
  };

  export type demandasOrderByRelevanceFieldEnum = (typeof demandasOrderByRelevanceFieldEnum)[keyof typeof demandasOrderByRelevanceFieldEnum]


  export const estadosConversaOrderByRelevanceFieldEnum: {
    nome: 'nome',
    descricao: 'descricao'
  };

  export type estadosConversaOrderByRelevanceFieldEnum = (typeof estadosConversaOrderByRelevanceFieldEnum)[keyof typeof estadosConversaOrderByRelevanceFieldEnum]


  export const usuariosOrderByRelevanceFieldEnum: {
    nome_completo: 'nome_completo',
    cpf: 'cpf',
    telefone: 'telefone',
    id_whatsappwebjs: 'id_whatsappwebjs'
  };

  export type usuariosOrderByRelevanceFieldEnum = (typeof usuariosOrderByRelevanceFieldEnum)[keyof typeof usuariosOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type demandasWhereInput = {
    AND?: demandasWhereInput | demandasWhereInput[]
    OR?: demandasWhereInput[]
    NOT?: demandasWhereInput | demandasWhereInput[]
    id?: IntFilter<"demandas"> | number
    usuario_id?: IntFilter<"demandas"> | number
    tipo?: StringFilter<"demandas"> | string
    descricao?: StringNullableFilter<"demandas"> | string | null
    status?: StringNullableFilter<"demandas"> | string | null
    data_criacao?: DateTimeNullableFilter<"demandas"> | Date | string | null
    usuarios?: XOR<UsuariosScalarRelationFilter, usuariosWhereInput>
  }

  export type demandasOrderByWithRelationInput = {
    id?: SortOrder
    usuario_id?: SortOrder
    tipo?: SortOrder
    descricao?: SortOrderInput | SortOrder
    status?: SortOrderInput | SortOrder
    data_criacao?: SortOrderInput | SortOrder
    usuarios?: usuariosOrderByWithRelationInput
    _relevance?: demandasOrderByRelevanceInput
  }

  export type demandasWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: demandasWhereInput | demandasWhereInput[]
    OR?: demandasWhereInput[]
    NOT?: demandasWhereInput | demandasWhereInput[]
    usuario_id?: IntFilter<"demandas"> | number
    tipo?: StringFilter<"demandas"> | string
    descricao?: StringNullableFilter<"demandas"> | string | null
    status?: StringNullableFilter<"demandas"> | string | null
    data_criacao?: DateTimeNullableFilter<"demandas"> | Date | string | null
    usuarios?: XOR<UsuariosScalarRelationFilter, usuariosWhereInput>
  }, "id">

  export type demandasOrderByWithAggregationInput = {
    id?: SortOrder
    usuario_id?: SortOrder
    tipo?: SortOrder
    descricao?: SortOrderInput | SortOrder
    status?: SortOrderInput | SortOrder
    data_criacao?: SortOrderInput | SortOrder
    _count?: demandasCountOrderByAggregateInput
    _avg?: demandasAvgOrderByAggregateInput
    _max?: demandasMaxOrderByAggregateInput
    _min?: demandasMinOrderByAggregateInput
    _sum?: demandasSumOrderByAggregateInput
  }

  export type demandasScalarWhereWithAggregatesInput = {
    AND?: demandasScalarWhereWithAggregatesInput | demandasScalarWhereWithAggregatesInput[]
    OR?: demandasScalarWhereWithAggregatesInput[]
    NOT?: demandasScalarWhereWithAggregatesInput | demandasScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"demandas"> | number
    usuario_id?: IntWithAggregatesFilter<"demandas"> | number
    tipo?: StringWithAggregatesFilter<"demandas"> | string
    descricao?: StringNullableWithAggregatesFilter<"demandas"> | string | null
    status?: StringNullableWithAggregatesFilter<"demandas"> | string | null
    data_criacao?: DateTimeNullableWithAggregatesFilter<"demandas"> | Date | string | null
  }

  export type estadosConversaWhereInput = {
    AND?: estadosConversaWhereInput | estadosConversaWhereInput[]
    OR?: estadosConversaWhereInput[]
    NOT?: estadosConversaWhereInput | estadosConversaWhereInput[]
    id?: IntFilter<"estadosConversa"> | number
    nome?: StringFilter<"estadosConversa"> | string
    descricao?: StringNullableFilter<"estadosConversa"> | string | null
    usuarios?: UsuariosListRelationFilter
  }

  export type estadosConversaOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrder
    descricao?: SortOrderInput | SortOrder
    usuarios?: usuariosOrderByRelationAggregateInput
    _relevance?: estadosConversaOrderByRelevanceInput
  }

  export type estadosConversaWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: estadosConversaWhereInput | estadosConversaWhereInput[]
    OR?: estadosConversaWhereInput[]
    NOT?: estadosConversaWhereInput | estadosConversaWhereInput[]
    nome?: StringFilter<"estadosConversa"> | string
    descricao?: StringNullableFilter<"estadosConversa"> | string | null
    usuarios?: UsuariosListRelationFilter
  }, "id">

  export type estadosConversaOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrder
    descricao?: SortOrderInput | SortOrder
    _count?: estadosConversaCountOrderByAggregateInput
    _avg?: estadosConversaAvgOrderByAggregateInput
    _max?: estadosConversaMaxOrderByAggregateInput
    _min?: estadosConversaMinOrderByAggregateInput
    _sum?: estadosConversaSumOrderByAggregateInput
  }

  export type estadosConversaScalarWhereWithAggregatesInput = {
    AND?: estadosConversaScalarWhereWithAggregatesInput | estadosConversaScalarWhereWithAggregatesInput[]
    OR?: estadosConversaScalarWhereWithAggregatesInput[]
    NOT?: estadosConversaScalarWhereWithAggregatesInput | estadosConversaScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"estadosConversa"> | number
    nome?: StringWithAggregatesFilter<"estadosConversa"> | string
    descricao?: StringNullableWithAggregatesFilter<"estadosConversa"> | string | null
  }

  export type usuariosWhereInput = {
    AND?: usuariosWhereInput | usuariosWhereInput[]
    OR?: usuariosWhereInput[]
    NOT?: usuariosWhereInput | usuariosWhereInput[]
    id?: IntFilter<"usuarios"> | number
    nome_completo?: StringFilter<"usuarios"> | string
    cpf?: StringFilter<"usuarios"> | string
    telefone?: StringFilter<"usuarios"> | string
    data_nascimento?: DateTimeNullableFilter<"usuarios"> | Date | string | null
    id_whatsappwebjs?: StringFilter<"usuarios"> | string
    estado_conversa_id?: IntNullableFilter<"usuarios"> | number | null
    demandas?: DemandasListRelationFilter
    estados_conversa?: XOR<EstadosConversaNullableScalarRelationFilter, estadosConversaWhereInput> | null
  }

  export type usuariosOrderByWithRelationInput = {
    id?: SortOrder
    nome_completo?: SortOrder
    cpf?: SortOrder
    telefone?: SortOrder
    data_nascimento?: SortOrderInput | SortOrder
    id_whatsappwebjs?: SortOrder
    estado_conversa_id?: SortOrderInput | SortOrder
    demandas?: demandasOrderByRelationAggregateInput
    estados_conversa?: estadosConversaOrderByWithRelationInput
    _relevance?: usuariosOrderByRelevanceInput
  }

  export type usuariosWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    cpf?: string
    id_whatsappwebjs?: string
    AND?: usuariosWhereInput | usuariosWhereInput[]
    OR?: usuariosWhereInput[]
    NOT?: usuariosWhereInput | usuariosWhereInput[]
    nome_completo?: StringFilter<"usuarios"> | string
    telefone?: StringFilter<"usuarios"> | string
    data_nascimento?: DateTimeNullableFilter<"usuarios"> | Date | string | null
    estado_conversa_id?: IntNullableFilter<"usuarios"> | number | null
    demandas?: DemandasListRelationFilter
    estados_conversa?: XOR<EstadosConversaNullableScalarRelationFilter, estadosConversaWhereInput> | null
  }, "id" | "cpf" | "id_whatsappwebjs">

  export type usuariosOrderByWithAggregationInput = {
    id?: SortOrder
    nome_completo?: SortOrder
    cpf?: SortOrder
    telefone?: SortOrder
    data_nascimento?: SortOrderInput | SortOrder
    id_whatsappwebjs?: SortOrder
    estado_conversa_id?: SortOrderInput | SortOrder
    _count?: usuariosCountOrderByAggregateInput
    _avg?: usuariosAvgOrderByAggregateInput
    _max?: usuariosMaxOrderByAggregateInput
    _min?: usuariosMinOrderByAggregateInput
    _sum?: usuariosSumOrderByAggregateInput
  }

  export type usuariosScalarWhereWithAggregatesInput = {
    AND?: usuariosScalarWhereWithAggregatesInput | usuariosScalarWhereWithAggregatesInput[]
    OR?: usuariosScalarWhereWithAggregatesInput[]
    NOT?: usuariosScalarWhereWithAggregatesInput | usuariosScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"usuarios"> | number
    nome_completo?: StringWithAggregatesFilter<"usuarios"> | string
    cpf?: StringWithAggregatesFilter<"usuarios"> | string
    telefone?: StringWithAggregatesFilter<"usuarios"> | string
    data_nascimento?: DateTimeNullableWithAggregatesFilter<"usuarios"> | Date | string | null
    id_whatsappwebjs?: StringWithAggregatesFilter<"usuarios"> | string
    estado_conversa_id?: IntNullableWithAggregatesFilter<"usuarios"> | number | null
  }

  export type demandasCreateInput = {
    tipo: string
    descricao?: string | null
    status?: string | null
    data_criacao?: Date | string | null
    usuarios: usuariosCreateNestedOneWithoutDemandasInput
  }

  export type demandasUncheckedCreateInput = {
    id?: number
    usuario_id: number
    tipo: string
    descricao?: string | null
    status?: string | null
    data_criacao?: Date | string | null
  }

  export type demandasUpdateInput = {
    tipo?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    data_criacao?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    usuarios?: usuariosUpdateOneRequiredWithoutDemandasNestedInput
  }

  export type demandasUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    usuario_id?: IntFieldUpdateOperationsInput | number
    tipo?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    data_criacao?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type demandasCreateManyInput = {
    id?: number
    usuario_id: number
    tipo: string
    descricao?: string | null
    status?: string | null
    data_criacao?: Date | string | null
  }

  export type demandasUpdateManyMutationInput = {
    tipo?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    data_criacao?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type demandasUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    usuario_id?: IntFieldUpdateOperationsInput | number
    tipo?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    data_criacao?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type estadosConversaCreateInput = {
    nome: string
    descricao?: string | null
    usuarios?: usuariosCreateNestedManyWithoutEstados_conversaInput
  }

  export type estadosConversaUncheckedCreateInput = {
    id?: number
    nome: string
    descricao?: string | null
    usuarios?: usuariosUncheckedCreateNestedManyWithoutEstados_conversaInput
  }

  export type estadosConversaUpdateInput = {
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    usuarios?: usuariosUpdateManyWithoutEstados_conversaNestedInput
  }

  export type estadosConversaUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    usuarios?: usuariosUncheckedUpdateManyWithoutEstados_conversaNestedInput
  }

  export type estadosConversaCreateManyInput = {
    id?: number
    nome: string
    descricao?: string | null
  }

  export type estadosConversaUpdateManyMutationInput = {
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type estadosConversaUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type usuariosCreateInput = {
    nome_completo: string
    cpf: string
    telefone: string
    data_nascimento?: Date | string | null
    id_whatsappwebjs: string
    demandas?: demandasCreateNestedManyWithoutUsuariosInput
    estados_conversa?: estadosConversaCreateNestedOneWithoutUsuariosInput
  }

  export type usuariosUncheckedCreateInput = {
    id?: number
    nome_completo: string
    cpf: string
    telefone: string
    data_nascimento?: Date | string | null
    id_whatsappwebjs: string
    estado_conversa_id?: number | null
    demandas?: demandasUncheckedCreateNestedManyWithoutUsuariosInput
  }

  export type usuariosUpdateInput = {
    nome_completo?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    telefone?: StringFieldUpdateOperationsInput | string
    data_nascimento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    id_whatsappwebjs?: StringFieldUpdateOperationsInput | string
    demandas?: demandasUpdateManyWithoutUsuariosNestedInput
    estados_conversa?: estadosConversaUpdateOneWithoutUsuariosNestedInput
  }

  export type usuariosUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome_completo?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    telefone?: StringFieldUpdateOperationsInput | string
    data_nascimento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    id_whatsappwebjs?: StringFieldUpdateOperationsInput | string
    estado_conversa_id?: NullableIntFieldUpdateOperationsInput | number | null
    demandas?: demandasUncheckedUpdateManyWithoutUsuariosNestedInput
  }

  export type usuariosCreateManyInput = {
    id?: number
    nome_completo: string
    cpf: string
    telefone: string
    data_nascimento?: Date | string | null
    id_whatsappwebjs: string
    estado_conversa_id?: number | null
  }

  export type usuariosUpdateManyMutationInput = {
    nome_completo?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    telefone?: StringFieldUpdateOperationsInput | string
    data_nascimento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    id_whatsappwebjs?: StringFieldUpdateOperationsInput | string
  }

  export type usuariosUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome_completo?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    telefone?: StringFieldUpdateOperationsInput | string
    data_nascimento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    id_whatsappwebjs?: StringFieldUpdateOperationsInput | string
    estado_conversa_id?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type UsuariosScalarRelationFilter = {
    is?: usuariosWhereInput
    isNot?: usuariosWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type demandasOrderByRelevanceInput = {
    fields: demandasOrderByRelevanceFieldEnum | demandasOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type demandasCountOrderByAggregateInput = {
    id?: SortOrder
    usuario_id?: SortOrder
    tipo?: SortOrder
    descricao?: SortOrder
    status?: SortOrder
    data_criacao?: SortOrder
  }

  export type demandasAvgOrderByAggregateInput = {
    id?: SortOrder
    usuario_id?: SortOrder
  }

  export type demandasMaxOrderByAggregateInput = {
    id?: SortOrder
    usuario_id?: SortOrder
    tipo?: SortOrder
    descricao?: SortOrder
    status?: SortOrder
    data_criacao?: SortOrder
  }

  export type demandasMinOrderByAggregateInput = {
    id?: SortOrder
    usuario_id?: SortOrder
    tipo?: SortOrder
    descricao?: SortOrder
    status?: SortOrder
    data_criacao?: SortOrder
  }

  export type demandasSumOrderByAggregateInput = {
    id?: SortOrder
    usuario_id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type UsuariosListRelationFilter = {
    every?: usuariosWhereInput
    some?: usuariosWhereInput
    none?: usuariosWhereInput
  }

  export type usuariosOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type estadosConversaOrderByRelevanceInput = {
    fields: estadosConversaOrderByRelevanceFieldEnum | estadosConversaOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type estadosConversaCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    descricao?: SortOrder
  }

  export type estadosConversaAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type estadosConversaMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    descricao?: SortOrder
  }

  export type estadosConversaMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    descricao?: SortOrder
  }

  export type estadosConversaSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type DemandasListRelationFilter = {
    every?: demandasWhereInput
    some?: demandasWhereInput
    none?: demandasWhereInput
  }

  export type EstadosConversaNullableScalarRelationFilter = {
    is?: estadosConversaWhereInput | null
    isNot?: estadosConversaWhereInput | null
  }

  export type demandasOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type usuariosOrderByRelevanceInput = {
    fields: usuariosOrderByRelevanceFieldEnum | usuariosOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type usuariosCountOrderByAggregateInput = {
    id?: SortOrder
    nome_completo?: SortOrder
    cpf?: SortOrder
    telefone?: SortOrder
    data_nascimento?: SortOrder
    id_whatsappwebjs?: SortOrder
    estado_conversa_id?: SortOrder
  }

  export type usuariosAvgOrderByAggregateInput = {
    id?: SortOrder
    estado_conversa_id?: SortOrder
  }

  export type usuariosMaxOrderByAggregateInput = {
    id?: SortOrder
    nome_completo?: SortOrder
    cpf?: SortOrder
    telefone?: SortOrder
    data_nascimento?: SortOrder
    id_whatsappwebjs?: SortOrder
    estado_conversa_id?: SortOrder
  }

  export type usuariosMinOrderByAggregateInput = {
    id?: SortOrder
    nome_completo?: SortOrder
    cpf?: SortOrder
    telefone?: SortOrder
    data_nascimento?: SortOrder
    id_whatsappwebjs?: SortOrder
    estado_conversa_id?: SortOrder
  }

  export type usuariosSumOrderByAggregateInput = {
    id?: SortOrder
    estado_conversa_id?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type usuariosCreateNestedOneWithoutDemandasInput = {
    create?: XOR<usuariosCreateWithoutDemandasInput, usuariosUncheckedCreateWithoutDemandasInput>
    connectOrCreate?: usuariosCreateOrConnectWithoutDemandasInput
    connect?: usuariosWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type usuariosUpdateOneRequiredWithoutDemandasNestedInput = {
    create?: XOR<usuariosCreateWithoutDemandasInput, usuariosUncheckedCreateWithoutDemandasInput>
    connectOrCreate?: usuariosCreateOrConnectWithoutDemandasInput
    upsert?: usuariosUpsertWithoutDemandasInput
    connect?: usuariosWhereUniqueInput
    update?: XOR<XOR<usuariosUpdateToOneWithWhereWithoutDemandasInput, usuariosUpdateWithoutDemandasInput>, usuariosUncheckedUpdateWithoutDemandasInput>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type usuariosCreateNestedManyWithoutEstados_conversaInput = {
    create?: XOR<usuariosCreateWithoutEstados_conversaInput, usuariosUncheckedCreateWithoutEstados_conversaInput> | usuariosCreateWithoutEstados_conversaInput[] | usuariosUncheckedCreateWithoutEstados_conversaInput[]
    connectOrCreate?: usuariosCreateOrConnectWithoutEstados_conversaInput | usuariosCreateOrConnectWithoutEstados_conversaInput[]
    createMany?: usuariosCreateManyEstados_conversaInputEnvelope
    connect?: usuariosWhereUniqueInput | usuariosWhereUniqueInput[]
  }

  export type usuariosUncheckedCreateNestedManyWithoutEstados_conversaInput = {
    create?: XOR<usuariosCreateWithoutEstados_conversaInput, usuariosUncheckedCreateWithoutEstados_conversaInput> | usuariosCreateWithoutEstados_conversaInput[] | usuariosUncheckedCreateWithoutEstados_conversaInput[]
    connectOrCreate?: usuariosCreateOrConnectWithoutEstados_conversaInput | usuariosCreateOrConnectWithoutEstados_conversaInput[]
    createMany?: usuariosCreateManyEstados_conversaInputEnvelope
    connect?: usuariosWhereUniqueInput | usuariosWhereUniqueInput[]
  }

  export type usuariosUpdateManyWithoutEstados_conversaNestedInput = {
    create?: XOR<usuariosCreateWithoutEstados_conversaInput, usuariosUncheckedCreateWithoutEstados_conversaInput> | usuariosCreateWithoutEstados_conversaInput[] | usuariosUncheckedCreateWithoutEstados_conversaInput[]
    connectOrCreate?: usuariosCreateOrConnectWithoutEstados_conversaInput | usuariosCreateOrConnectWithoutEstados_conversaInput[]
    upsert?: usuariosUpsertWithWhereUniqueWithoutEstados_conversaInput | usuariosUpsertWithWhereUniqueWithoutEstados_conversaInput[]
    createMany?: usuariosCreateManyEstados_conversaInputEnvelope
    set?: usuariosWhereUniqueInput | usuariosWhereUniqueInput[]
    disconnect?: usuariosWhereUniqueInput | usuariosWhereUniqueInput[]
    delete?: usuariosWhereUniqueInput | usuariosWhereUniqueInput[]
    connect?: usuariosWhereUniqueInput | usuariosWhereUniqueInput[]
    update?: usuariosUpdateWithWhereUniqueWithoutEstados_conversaInput | usuariosUpdateWithWhereUniqueWithoutEstados_conversaInput[]
    updateMany?: usuariosUpdateManyWithWhereWithoutEstados_conversaInput | usuariosUpdateManyWithWhereWithoutEstados_conversaInput[]
    deleteMany?: usuariosScalarWhereInput | usuariosScalarWhereInput[]
  }

  export type usuariosUncheckedUpdateManyWithoutEstados_conversaNestedInput = {
    create?: XOR<usuariosCreateWithoutEstados_conversaInput, usuariosUncheckedCreateWithoutEstados_conversaInput> | usuariosCreateWithoutEstados_conversaInput[] | usuariosUncheckedCreateWithoutEstados_conversaInput[]
    connectOrCreate?: usuariosCreateOrConnectWithoutEstados_conversaInput | usuariosCreateOrConnectWithoutEstados_conversaInput[]
    upsert?: usuariosUpsertWithWhereUniqueWithoutEstados_conversaInput | usuariosUpsertWithWhereUniqueWithoutEstados_conversaInput[]
    createMany?: usuariosCreateManyEstados_conversaInputEnvelope
    set?: usuariosWhereUniqueInput | usuariosWhereUniqueInput[]
    disconnect?: usuariosWhereUniqueInput | usuariosWhereUniqueInput[]
    delete?: usuariosWhereUniqueInput | usuariosWhereUniqueInput[]
    connect?: usuariosWhereUniqueInput | usuariosWhereUniqueInput[]
    update?: usuariosUpdateWithWhereUniqueWithoutEstados_conversaInput | usuariosUpdateWithWhereUniqueWithoutEstados_conversaInput[]
    updateMany?: usuariosUpdateManyWithWhereWithoutEstados_conversaInput | usuariosUpdateManyWithWhereWithoutEstados_conversaInput[]
    deleteMany?: usuariosScalarWhereInput | usuariosScalarWhereInput[]
  }

  export type demandasCreateNestedManyWithoutUsuariosInput = {
    create?: XOR<demandasCreateWithoutUsuariosInput, demandasUncheckedCreateWithoutUsuariosInput> | demandasCreateWithoutUsuariosInput[] | demandasUncheckedCreateWithoutUsuariosInput[]
    connectOrCreate?: demandasCreateOrConnectWithoutUsuariosInput | demandasCreateOrConnectWithoutUsuariosInput[]
    createMany?: demandasCreateManyUsuariosInputEnvelope
    connect?: demandasWhereUniqueInput | demandasWhereUniqueInput[]
  }

  export type estadosConversaCreateNestedOneWithoutUsuariosInput = {
    create?: XOR<estadosConversaCreateWithoutUsuariosInput, estadosConversaUncheckedCreateWithoutUsuariosInput>
    connectOrCreate?: estadosConversaCreateOrConnectWithoutUsuariosInput
    connect?: estadosConversaWhereUniqueInput
  }

  export type demandasUncheckedCreateNestedManyWithoutUsuariosInput = {
    create?: XOR<demandasCreateWithoutUsuariosInput, demandasUncheckedCreateWithoutUsuariosInput> | demandasCreateWithoutUsuariosInput[] | demandasUncheckedCreateWithoutUsuariosInput[]
    connectOrCreate?: demandasCreateOrConnectWithoutUsuariosInput | demandasCreateOrConnectWithoutUsuariosInput[]
    createMany?: demandasCreateManyUsuariosInputEnvelope
    connect?: demandasWhereUniqueInput | demandasWhereUniqueInput[]
  }

  export type demandasUpdateManyWithoutUsuariosNestedInput = {
    create?: XOR<demandasCreateWithoutUsuariosInput, demandasUncheckedCreateWithoutUsuariosInput> | demandasCreateWithoutUsuariosInput[] | demandasUncheckedCreateWithoutUsuariosInput[]
    connectOrCreate?: demandasCreateOrConnectWithoutUsuariosInput | demandasCreateOrConnectWithoutUsuariosInput[]
    upsert?: demandasUpsertWithWhereUniqueWithoutUsuariosInput | demandasUpsertWithWhereUniqueWithoutUsuariosInput[]
    createMany?: demandasCreateManyUsuariosInputEnvelope
    set?: demandasWhereUniqueInput | demandasWhereUniqueInput[]
    disconnect?: demandasWhereUniqueInput | demandasWhereUniqueInput[]
    delete?: demandasWhereUniqueInput | demandasWhereUniqueInput[]
    connect?: demandasWhereUniqueInput | demandasWhereUniqueInput[]
    update?: demandasUpdateWithWhereUniqueWithoutUsuariosInput | demandasUpdateWithWhereUniqueWithoutUsuariosInput[]
    updateMany?: demandasUpdateManyWithWhereWithoutUsuariosInput | demandasUpdateManyWithWhereWithoutUsuariosInput[]
    deleteMany?: demandasScalarWhereInput | demandasScalarWhereInput[]
  }

  export type estadosConversaUpdateOneWithoutUsuariosNestedInput = {
    create?: XOR<estadosConversaCreateWithoutUsuariosInput, estadosConversaUncheckedCreateWithoutUsuariosInput>
    connectOrCreate?: estadosConversaCreateOrConnectWithoutUsuariosInput
    upsert?: estadosConversaUpsertWithoutUsuariosInput
    disconnect?: estadosConversaWhereInput | boolean
    delete?: estadosConversaWhereInput | boolean
    connect?: estadosConversaWhereUniqueInput
    update?: XOR<XOR<estadosConversaUpdateToOneWithWhereWithoutUsuariosInput, estadosConversaUpdateWithoutUsuariosInput>, estadosConversaUncheckedUpdateWithoutUsuariosInput>
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type demandasUncheckedUpdateManyWithoutUsuariosNestedInput = {
    create?: XOR<demandasCreateWithoutUsuariosInput, demandasUncheckedCreateWithoutUsuariosInput> | demandasCreateWithoutUsuariosInput[] | demandasUncheckedCreateWithoutUsuariosInput[]
    connectOrCreate?: demandasCreateOrConnectWithoutUsuariosInput | demandasCreateOrConnectWithoutUsuariosInput[]
    upsert?: demandasUpsertWithWhereUniqueWithoutUsuariosInput | demandasUpsertWithWhereUniqueWithoutUsuariosInput[]
    createMany?: demandasCreateManyUsuariosInputEnvelope
    set?: demandasWhereUniqueInput | demandasWhereUniqueInput[]
    disconnect?: demandasWhereUniqueInput | demandasWhereUniqueInput[]
    delete?: demandasWhereUniqueInput | demandasWhereUniqueInput[]
    connect?: demandasWhereUniqueInput | demandasWhereUniqueInput[]
    update?: demandasUpdateWithWhereUniqueWithoutUsuariosInput | demandasUpdateWithWhereUniqueWithoutUsuariosInput[]
    updateMany?: demandasUpdateManyWithWhereWithoutUsuariosInput | demandasUpdateManyWithWhereWithoutUsuariosInput[]
    deleteMany?: demandasScalarWhereInput | demandasScalarWhereInput[]
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type usuariosCreateWithoutDemandasInput = {
    nome_completo: string
    cpf: string
    telefone: string
    data_nascimento?: Date | string | null
    id_whatsappwebjs: string
    estados_conversa?: estadosConversaCreateNestedOneWithoutUsuariosInput
  }

  export type usuariosUncheckedCreateWithoutDemandasInput = {
    id?: number
    nome_completo: string
    cpf: string
    telefone: string
    data_nascimento?: Date | string | null
    id_whatsappwebjs: string
    estado_conversa_id?: number | null
  }

  export type usuariosCreateOrConnectWithoutDemandasInput = {
    where: usuariosWhereUniqueInput
    create: XOR<usuariosCreateWithoutDemandasInput, usuariosUncheckedCreateWithoutDemandasInput>
  }

  export type usuariosUpsertWithoutDemandasInput = {
    update: XOR<usuariosUpdateWithoutDemandasInput, usuariosUncheckedUpdateWithoutDemandasInput>
    create: XOR<usuariosCreateWithoutDemandasInput, usuariosUncheckedCreateWithoutDemandasInput>
    where?: usuariosWhereInput
  }

  export type usuariosUpdateToOneWithWhereWithoutDemandasInput = {
    where?: usuariosWhereInput
    data: XOR<usuariosUpdateWithoutDemandasInput, usuariosUncheckedUpdateWithoutDemandasInput>
  }

  export type usuariosUpdateWithoutDemandasInput = {
    nome_completo?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    telefone?: StringFieldUpdateOperationsInput | string
    data_nascimento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    id_whatsappwebjs?: StringFieldUpdateOperationsInput | string
    estados_conversa?: estadosConversaUpdateOneWithoutUsuariosNestedInput
  }

  export type usuariosUncheckedUpdateWithoutDemandasInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome_completo?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    telefone?: StringFieldUpdateOperationsInput | string
    data_nascimento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    id_whatsappwebjs?: StringFieldUpdateOperationsInput | string
    estado_conversa_id?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type usuariosCreateWithoutEstados_conversaInput = {
    nome_completo: string
    cpf: string
    telefone: string
    data_nascimento?: Date | string | null
    id_whatsappwebjs: string
    demandas?: demandasCreateNestedManyWithoutUsuariosInput
  }

  export type usuariosUncheckedCreateWithoutEstados_conversaInput = {
    id?: number
    nome_completo: string
    cpf: string
    telefone: string
    data_nascimento?: Date | string | null
    id_whatsappwebjs: string
    demandas?: demandasUncheckedCreateNestedManyWithoutUsuariosInput
  }

  export type usuariosCreateOrConnectWithoutEstados_conversaInput = {
    where: usuariosWhereUniqueInput
    create: XOR<usuariosCreateWithoutEstados_conversaInput, usuariosUncheckedCreateWithoutEstados_conversaInput>
  }

  export type usuariosCreateManyEstados_conversaInputEnvelope = {
    data: usuariosCreateManyEstados_conversaInput | usuariosCreateManyEstados_conversaInput[]
    skipDuplicates?: boolean
  }

  export type usuariosUpsertWithWhereUniqueWithoutEstados_conversaInput = {
    where: usuariosWhereUniqueInput
    update: XOR<usuariosUpdateWithoutEstados_conversaInput, usuariosUncheckedUpdateWithoutEstados_conversaInput>
    create: XOR<usuariosCreateWithoutEstados_conversaInput, usuariosUncheckedCreateWithoutEstados_conversaInput>
  }

  export type usuariosUpdateWithWhereUniqueWithoutEstados_conversaInput = {
    where: usuariosWhereUniqueInput
    data: XOR<usuariosUpdateWithoutEstados_conversaInput, usuariosUncheckedUpdateWithoutEstados_conversaInput>
  }

  export type usuariosUpdateManyWithWhereWithoutEstados_conversaInput = {
    where: usuariosScalarWhereInput
    data: XOR<usuariosUpdateManyMutationInput, usuariosUncheckedUpdateManyWithoutEstados_conversaInput>
  }

  export type usuariosScalarWhereInput = {
    AND?: usuariosScalarWhereInput | usuariosScalarWhereInput[]
    OR?: usuariosScalarWhereInput[]
    NOT?: usuariosScalarWhereInput | usuariosScalarWhereInput[]
    id?: IntFilter<"usuarios"> | number
    nome_completo?: StringFilter<"usuarios"> | string
    cpf?: StringFilter<"usuarios"> | string
    telefone?: StringFilter<"usuarios"> | string
    data_nascimento?: DateTimeNullableFilter<"usuarios"> | Date | string | null
    id_whatsappwebjs?: StringFilter<"usuarios"> | string
    estado_conversa_id?: IntNullableFilter<"usuarios"> | number | null
  }

  export type demandasCreateWithoutUsuariosInput = {
    tipo: string
    descricao?: string | null
    status?: string | null
    data_criacao?: Date | string | null
  }

  export type demandasUncheckedCreateWithoutUsuariosInput = {
    id?: number
    tipo: string
    descricao?: string | null
    status?: string | null
    data_criacao?: Date | string | null
  }

  export type demandasCreateOrConnectWithoutUsuariosInput = {
    where: demandasWhereUniqueInput
    create: XOR<demandasCreateWithoutUsuariosInput, demandasUncheckedCreateWithoutUsuariosInput>
  }

  export type demandasCreateManyUsuariosInputEnvelope = {
    data: demandasCreateManyUsuariosInput | demandasCreateManyUsuariosInput[]
    skipDuplicates?: boolean
  }

  export type estadosConversaCreateWithoutUsuariosInput = {
    nome: string
    descricao?: string | null
  }

  export type estadosConversaUncheckedCreateWithoutUsuariosInput = {
    id?: number
    nome: string
    descricao?: string | null
  }

  export type estadosConversaCreateOrConnectWithoutUsuariosInput = {
    where: estadosConversaWhereUniqueInput
    create: XOR<estadosConversaCreateWithoutUsuariosInput, estadosConversaUncheckedCreateWithoutUsuariosInput>
  }

  export type demandasUpsertWithWhereUniqueWithoutUsuariosInput = {
    where: demandasWhereUniqueInput
    update: XOR<demandasUpdateWithoutUsuariosInput, demandasUncheckedUpdateWithoutUsuariosInput>
    create: XOR<demandasCreateWithoutUsuariosInput, demandasUncheckedCreateWithoutUsuariosInput>
  }

  export type demandasUpdateWithWhereUniqueWithoutUsuariosInput = {
    where: demandasWhereUniqueInput
    data: XOR<demandasUpdateWithoutUsuariosInput, demandasUncheckedUpdateWithoutUsuariosInput>
  }

  export type demandasUpdateManyWithWhereWithoutUsuariosInput = {
    where: demandasScalarWhereInput
    data: XOR<demandasUpdateManyMutationInput, demandasUncheckedUpdateManyWithoutUsuariosInput>
  }

  export type demandasScalarWhereInput = {
    AND?: demandasScalarWhereInput | demandasScalarWhereInput[]
    OR?: demandasScalarWhereInput[]
    NOT?: demandasScalarWhereInput | demandasScalarWhereInput[]
    id?: IntFilter<"demandas"> | number
    usuario_id?: IntFilter<"demandas"> | number
    tipo?: StringFilter<"demandas"> | string
    descricao?: StringNullableFilter<"demandas"> | string | null
    status?: StringNullableFilter<"demandas"> | string | null
    data_criacao?: DateTimeNullableFilter<"demandas"> | Date | string | null
  }

  export type estadosConversaUpsertWithoutUsuariosInput = {
    update: XOR<estadosConversaUpdateWithoutUsuariosInput, estadosConversaUncheckedUpdateWithoutUsuariosInput>
    create: XOR<estadosConversaCreateWithoutUsuariosInput, estadosConversaUncheckedCreateWithoutUsuariosInput>
    where?: estadosConversaWhereInput
  }

  export type estadosConversaUpdateToOneWithWhereWithoutUsuariosInput = {
    where?: estadosConversaWhereInput
    data: XOR<estadosConversaUpdateWithoutUsuariosInput, estadosConversaUncheckedUpdateWithoutUsuariosInput>
  }

  export type estadosConversaUpdateWithoutUsuariosInput = {
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type estadosConversaUncheckedUpdateWithoutUsuariosInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type usuariosCreateManyEstados_conversaInput = {
    id?: number
    nome_completo: string
    cpf: string
    telefone: string
    data_nascimento?: Date | string | null
    id_whatsappwebjs: string
  }

  export type usuariosUpdateWithoutEstados_conversaInput = {
    nome_completo?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    telefone?: StringFieldUpdateOperationsInput | string
    data_nascimento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    id_whatsappwebjs?: StringFieldUpdateOperationsInput | string
    demandas?: demandasUpdateManyWithoutUsuariosNestedInput
  }

  export type usuariosUncheckedUpdateWithoutEstados_conversaInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome_completo?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    telefone?: StringFieldUpdateOperationsInput | string
    data_nascimento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    id_whatsappwebjs?: StringFieldUpdateOperationsInput | string
    demandas?: demandasUncheckedUpdateManyWithoutUsuariosNestedInput
  }

  export type usuariosUncheckedUpdateManyWithoutEstados_conversaInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome_completo?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    telefone?: StringFieldUpdateOperationsInput | string
    data_nascimento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    id_whatsappwebjs?: StringFieldUpdateOperationsInput | string
  }

  export type demandasCreateManyUsuariosInput = {
    id?: number
    tipo: string
    descricao?: string | null
    status?: string | null
    data_criacao?: Date | string | null
  }

  export type demandasUpdateWithoutUsuariosInput = {
    tipo?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    data_criacao?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type demandasUncheckedUpdateWithoutUsuariosInput = {
    id?: IntFieldUpdateOperationsInput | number
    tipo?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    data_criacao?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type demandasUncheckedUpdateManyWithoutUsuariosInput = {
    id?: IntFieldUpdateOperationsInput | number
    tipo?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    data_criacao?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
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