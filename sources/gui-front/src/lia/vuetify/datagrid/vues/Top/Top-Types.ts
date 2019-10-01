
import * as vue from '@lia/vue/vue';
import {Vue, VueFacade, VueHolder} from "@lia/vue/vue";

export interface Props extends vue.Props {
    items : { component : Vue|VueFacade|VueHolder }[ ]
}

export interface Events {

}

export interface Data extends Props {

}

export interface Slots {

}