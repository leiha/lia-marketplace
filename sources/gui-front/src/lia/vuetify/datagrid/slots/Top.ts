
import { Vue }          from '@lia/vue/vue';
import { DataGridSlot } from "../DataGrid-Slot";

export type Scope = {

}

export class TopSlot < TVue extends Vue = Vue > extends DataGridSlot < Scope , TVue >
{
    attach( ) {
        return super.attach( 'top' );
    }
}