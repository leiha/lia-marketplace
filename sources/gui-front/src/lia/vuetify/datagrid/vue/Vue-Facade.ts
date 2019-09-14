
import { VueHolder }                           from './Vue-Holder';
import { Vue , Events , Data , Props , Slots } from '@lia/vue/vue';

export class VueFacade <
    TData   extends Data   = Data ,
    TSlots  extends Slots  = Slots ,
    TProps  extends Props  = Props ,
    TEvents extends Events = Events
    > extends VueHolder < Vue < TData , TSlots , TProps , TEvents > >
{
    constructor( ) {
        super( );
    }

    protected prepare ( ) : Vue < TData , TSlots , TProps , TEvents >
    {
        return new Vue < TData , TSlots , TProps , TEvents > ( );
    }
}