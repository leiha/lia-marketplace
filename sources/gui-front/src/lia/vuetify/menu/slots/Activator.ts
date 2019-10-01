
import { Vue }           from '@lia/vue/vue';
import { VueSlotHolder } from "@lia/vue/Vue-Slot";

export interface Scope {
    on      : { [ k : string ] : any }
    value   : boolean
    attrs   : {
        'role'         : string  ,
        'aria-haspopup': boolean ,
        'aria-expanded': string
    }
}

export class ActivatorSlot < TVue extends Vue > extends VueSlotHolder < Scope , TVue >
{
    attach( ) {
        return super.attach( 'activator' );
    }
}