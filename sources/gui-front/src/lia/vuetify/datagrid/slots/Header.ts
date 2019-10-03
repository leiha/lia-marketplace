
import { Vue }           from '@lia/vue/vue';
import { VueSlotHolder } from "@lia/vue/Vue-Slot";
import { HeaderProps }   from "../Datagrid-Types";


export type Scope = {
    header : HeaderProps
}

export class HeaderSlot < TVue extends Vue = Vue > extends VueSlotHolder < Scope , TVue >
{
    attach( name: string ) {
        return super.attach( 'header.'+ name );
    }
}