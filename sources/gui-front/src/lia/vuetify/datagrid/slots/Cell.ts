
import { Vue }           from '@lia/vue/vue';
import { VueSlotHolder } from "@lia/vue/Vue-Slot";
import { HeaderProps }   from "../Datagrid-Types";

export type Scope = {
    item   : { [ k : string ] : any }
    header : HeaderProps
    value  : any
}

export class CellSlot < TVue extends Vue = Vue > extends VueSlotHolder < Scope , TVue >
{
    attach( name: string ) {
        return super.attach( 'item.'+ name );
    }
}