
import * as vue from "@lia/vue/vue";

export interface Props extends vue.Props {
    activeClass ?: string
    append ?: boolean
    color ?: string
    dark ?: boolean
    dense ?: boolean
    disabled ?: boolean
    exact ?: boolean
    exactActiveClass ?: string
    href ?: string | object
    inactive ?: boolean
    inputValue ?: any
    light ?: boolean
    link ?: boolean
    nuxt ?: boolean
    replace ?: boolean
    ripple ?: boolean | object
    tag ?: string
    target ?: string
    threeLine ?: boolean
    to ?: string | object
    twoLine ?: boolean
    value ?: any
}

export interface Data extends Props {
    items : any[ ]
}

export interface Slots {
    default ?: vue.Slot
}

export interface Events {
    click   : ( event : MouseEvent | KeyboardEvent ) => void
    keydown : ( event : KeyboardEvent ) => void
}