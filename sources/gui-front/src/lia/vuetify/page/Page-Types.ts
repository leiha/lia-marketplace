
import * as vue from '@lia/vue/Vue';

export interface Props extends vue.Props {

}

export interface Events {

}

export interface Data extends Props {

}

export interface Slots {
    'body'    ?: vue.Slot
    'footer'  ?: vue.Slot
    'header'  ?: vue.Slot
}