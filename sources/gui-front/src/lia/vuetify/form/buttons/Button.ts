
import { Vue }                        from "@lia/vue/vue";
import { Data, Props, Slots, Events } from './Button-Types';

export {
    Data, Props, Slots, Events
}

export class Button < TData extends Data = Data >
    extends Vue < Data , Slots , Props , Events >
{
    constructor( ) {
        super( );
        this.template( ).pug( require( './Button.pug' ) )
    }
}