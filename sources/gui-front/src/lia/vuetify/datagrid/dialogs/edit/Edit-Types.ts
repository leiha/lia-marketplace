
import * as vue from '@lia/vue/Vue';

export interface Props extends vue.Props {
    cancelText         ?: string;
    dark               ?: boolean;
    eager              ?: boolean;
    large              ?: boolean;
    light              ?: boolean;
    persistent         ?: boolean;
    returnValue        ?: any;
    saveText           ?: any;
    transition         ?: string;
}

export interface Events {
    'cancel'   : ( v : any[ ] ) => void
    'close'    : ( v : any[ ] ) => void
    'open'     : ( v : any[ ] ) => void
    'save'     : ( v : any[ ] ) => void
}

export interface Data extends Props {

}

export interface Slots {
    'default'  ?: vue.Slot
    'input'    ?: vue.Slot
}