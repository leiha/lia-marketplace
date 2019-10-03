
import { Vue }           from '@lia/vue/vue';
import { VueSlotHolder } from "@lia/vue/Vue-Slot";
import { HeaderProps }   from "../Datagrid-Types";

export type Scope = {

}

export class BodySlot < TVue extends Vue = Vue > extends VueSlotHolder < Scope , TVue >
{
    attach( ) {
        return super.attach( 'body' );
    }
}