
import * as vue from '@lia/vue/vue';

export interface Props extends vue.Props {
    activator           ?: any
    attach              ?: any
    contentClass        ?: string
    dark                ?: boolean
    disabled            ?: boolean
    eager               ?: boolean
    fullscreen          ?: boolean
    hideOverlay         ?: boolean
    internalActivator   ?: boolean
    light               ?: boolean
    maxWidth            ?: string | number
    noClickAnimation    ?: boolean
    openOnHover         ?: boolean
    origin              ?: string
    persistent          ?: boolean
    retainFocus         ?: boolean
    scrollable          ?: boolean
    transition          ?: string | boolean
    value               ?: any
    width               ?: string | number
}

export interface Events {
    'click:outside' : ( ) => void;
    'keydown'       : ( ) => KeyboardEvent;

}

export interface Data extends Props {

}

export interface Slots {
    'activator' ?: vue.Slot
    'default'   ?: vue.Slot
    'loader'    ?: vue.Slot
}