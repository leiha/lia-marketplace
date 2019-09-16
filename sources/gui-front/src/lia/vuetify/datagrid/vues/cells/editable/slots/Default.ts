
import { Vue }           from '@lia/vue/vue';
import { VueSlotHolder } from "@lia/vue/Vue-Slot";

export interface Scope {

}

export class DefaultSlot < TVue extends Vue > extends VueSlotHolder < Scope , TVue >
{
    attach( ) {
        return super.attach( 'default' );
    }
}