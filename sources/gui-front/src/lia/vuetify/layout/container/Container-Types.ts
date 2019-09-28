
import * as vue from "@lia/vue/vue";

export interface Props extends vue.Props {
    fluid   ?: boolean
    id      ?: string
    tag     ?: string
}

export interface Data extends Props {
    items : any[ ]
}

export interface Slots {
    default ?: vue.Slot
}

export interface Events {
    
}