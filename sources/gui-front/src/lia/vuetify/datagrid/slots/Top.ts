
import { Data, Events, Props, Slots, VueSlot } from '@lia/vue/vue';

export type Scope = {

}

export class TopSlot <
    TData   extends Data   = Data ,
    TSlots  extends Slots  = Slots ,
    TProps  extends Props  = Props ,
    TEvents extends Events = Events
    > extends VueSlot < Scope , TData , TSlots , TProps , TEvents >
{
    attach( ) {
        return super.attach( 'top' );
    }
}