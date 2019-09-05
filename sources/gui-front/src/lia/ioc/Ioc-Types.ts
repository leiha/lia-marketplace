
type MemberUnion < T > = T[ keyof T ];

type ExistingReferences < IocDefinition > = MemberUnion < {
    [ k in keyof IocDefinition ]: MemberUnion < {
        [ l in keyof IocDefinition[ k ] ]: Reference < IocDefinition , k , l >
    } >
} >

type Reference <
    IocDefinition ,
    Container extends keyof IocDefinition,
    Service   extends keyof IocDefinition[ Container ]
> = {
    $c  : Container,
    $s  : Service,
    as ?: string
}

export type IocServiceType < IocDefinition > = {
    $object      : < R > ( ) => any ,
    $inject     ?: ExistingReferences<IocDefinition>[ ]
    $singleton  ?: boolean
}

export type IocContainerType < IocDefinition, Service > = {
    [ s in keyof Service ] : IocServiceType < IocDefinition >
}

export type IocServicesType < IocDefinition > = {
    [ k in keyof IocDefinition ] : IocContainerType < IocDefinition , IocDefinition[ k ] >
}