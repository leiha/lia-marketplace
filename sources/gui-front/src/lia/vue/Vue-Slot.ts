
import { Vue , Events , Data , Props , Slots } from './Vue';

export class VueSlot <
    TScope  ,
    TData   extends Data   = Data ,
    TSlots  extends Slots  = Slots ,
    TProps  extends Props  = Props ,
    TEvents extends Events = Events
    > extends Vue < TData , TSlots , TProps , TEvents >
{
    constructor( $events ?: TEvents ) {
        super( $events );
        this.props( )
            .push( 'scope' )
            ;
    }

    scope ( ) : TScope {
        //@ts-ignore
        return this.$component.$instance.scope;
    }
}