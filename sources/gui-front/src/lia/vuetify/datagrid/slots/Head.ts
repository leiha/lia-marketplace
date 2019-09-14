
import { Data, Events, Props, Slots, VueSlot } from '@lia/vue/vue';
import { HeaderProps }                         from "../Datagrid-Types";

export type Scope = {
    header : HeaderProps
}

export class HeadSlot <
    TData   extends Data   = Data ,
    TSlots  extends Slots  = Slots ,
    TProps  extends Props  = Props ,
    TEvents extends Events = Events
    > extends VueSlot < Scope , TData , TSlots , TProps , TEvents >
{
    attach( name: string ) {
        return super.attach( 'header.'+ name );
    }
}