

import {Data, Events, Props, Slots, VueSlot, VueSlotFacade} from '@lia/vue/vue';

export type Scope = {

}

export class ActivatorSlot <
    TData   extends Data   = Data ,
    TSlots  extends Slots  = Slots ,
    TProps  extends Props  = Props ,
    TEvents extends Events = Events
    > extends VueSlotFacade < Scope , TData , TSlots , TProps , TEvents > {

    attach( ) {
        return super.attach( 'activator' );
    }

}
