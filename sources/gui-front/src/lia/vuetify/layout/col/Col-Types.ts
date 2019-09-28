
import * as vue from "@lia/vue/vue";

export interface Props extends vue.Props {
    alignSelf   ?: string
    cols        ?: boolean | string | number
    lg          ?: boolean | string | number
    md          ?: boolean | string | number
    offset      ?: string | number
    offsetLg    ?: string | number
    offsetMd    ?: string | number
    offsetSm    ?: string | number
    offsetXl    ?: string | number
    order       ?: string | number
    orderLg     ?: string | number
    orderMd     ?: string | number
    orderSm     ?: string | number
    orderXl     ?: string | number
    sm          ?: boolean | string | number
    tag         ?: string
    xl          ?: boolean | string | number
}

export interface Data extends Props {
    items : any[ ]
}

export interface Slots {
    default ?: vue.Slot
}

export interface Events {
    
}