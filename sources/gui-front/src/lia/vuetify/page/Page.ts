
import { Vue } from '@lia/vue/Vue';
import { Data , Events , Props , Slots } from '@lia/vuetify/page/Page-Types';

export abstract class Page <
    TData   extends Data   = Data  ,
    TSlots  extends Slots  = Slots ,
    TProps  extends Props  = Props ,
    TEvents extends Events = Events
> extends Vue < TData , TSlots , TProps , TEvents > {

    constructor( ) {
        super( );
        this.template( ).pug( require( './Page.pug' ) );
    }

    abstract header( ) : void;

    abstract body ( )  : void;

    abstract footer( ) : void;

    build ( ) {
        this.header( );
        this.body  ( );
        this.footer( );
        return super.build( );
    }
}