
import * as vue from "@lia/vue/vue";

export interface Props extends vue.Props {
    absolute            ?: boolean
    activator           ?: any
    allowOverflow       ?: boolean
    attach              ?: any
    auto                ?: boolean
    bottom              ?: boolean
    closeDelay          ?: number | string
    closeOnClick        ?: boolean
    closeOnContentClick ?: boolean
    contentClass        ?: string
    dark                ?: boolean
    disableKeys         ?: boolean
    disabled            ?: boolean
    eager               ?: boolean
    fixed               ?: boolean
    internalActivator   ?: boolean
    left                ?: boolean
    light               ?: boolean
    maxHeight           ?: number | string
    maxWidth            ?: number | string
    minWidth            ?: number | string
    nudgeBottom         ?: number | string
    nudgeLeft           ?: number | string
    nudgeRight          ?: number | string
    nudgeTop            ?: number | string
    nudgeWidth          ?: number | string
    offsetOverflow      ?: boolean
    offsetX             ?: boolean
    offsetY             ?: boolean
    openDelay           ?: number | string
    openOnClick         ?: boolean
    openOnHover         ?: boolean
    origin              ?: string
    positionX           ?: number
    positionY           ?: number
    returnValue         ?: any
    right               ?: boolean
    top                 ?: boolean
    transition          ?: boolean | string
    value               ?: boolean
    zIndex              ?: number | string
}

export interface Data extends Props {

}

export interface Slots {
    activator ?: vue.Slot
    default   ?: vue.Slot
}

export interface Events {

}