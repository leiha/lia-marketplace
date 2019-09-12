
import { Vue , Events , Data , Props , Slots } from './Vue';

export class Facade <
    TData   extends Data   = Data ,
    TSlots  extends Slots  = Slots ,
    TProps  extends Props  = Props ,
    TEvents extends Events = Events
    >
{
    protected $vue : Vue < TData , TSlots , TProps , TEvents >;

    constructor( ) {
        // super( );
        this.$vue = new Vue < TData , TSlots , TProps , TEvents > ( );
    }

    build( ) {
        return this.$vue.build( );
    }

    vue ( ) {
        return this.$vue;
    }
}