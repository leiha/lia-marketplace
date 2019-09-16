
import * as vue from "@lia/vue/vue";

export interface Props extends vue.Props {

}

export interface Data extends Props {
    items : any[ ]
}

export interface Slots {
    default ?: vue.Slot
}

export interface Events {

}