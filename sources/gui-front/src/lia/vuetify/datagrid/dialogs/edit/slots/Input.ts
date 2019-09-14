
import { VueSlot , Data, Events, Props, Slots } from '@lia/vue/vue';

export type Scope = {

}

export class InputSlot <
    TData   extends Data   = Data ,
    TSlots  extends Slots  = Slots ,
    TProps  extends Props  = Props ,
    TEvents extends Events = Events
    > extends VueSlot < Scope , TData , TSlots , TProps , TEvents >
{
    attach( ) {
        return super.attach( 'input' );
    }
}
