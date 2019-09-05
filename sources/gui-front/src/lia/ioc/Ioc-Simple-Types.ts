
type MemberUnion < T > = T[ keyof T ];

type ExistingReferences < IocDefinition > = MemberUnion < {
    [ k in keyof IocDefinition ]: Reference < IocDefinition , k >
} >

type Reference <
    IocDefinition ,
    Service extends keyof IocDefinition,
> = {
    $s  : Service,
    as ?: string
}

export type IocServiceType < IocDefinition > = {
    $object      : ( ) => any ,
    $inject     ?: ExistingReferences<IocDefinition>[ ]
    $singleton  ?: boolean
}

export type IocServicesType < IocDefinition > = {
    [ k in keyof IocDefinition ] : IocServiceType < IocDefinition >
}