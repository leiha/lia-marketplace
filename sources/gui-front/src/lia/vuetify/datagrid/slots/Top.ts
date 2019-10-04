
import { Vue }          from '@lia/vue/vue';
import {VueSlotHolder} from "@lia/vue/Vue-Slot";

export type Scope = {

}

export class TopSlot < TVue extends Vue = Vue > extends VueSlotHolder < Scope , TVue >
{
    attach( ) {
        return super.attach( 'top' );
    }
}