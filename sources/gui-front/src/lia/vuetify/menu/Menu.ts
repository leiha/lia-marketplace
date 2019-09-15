
import { VueFacade }            from "@lia/vue/Vue-Facade";
import { Events, Props, Slots } from "./Menu-Types";
import { Data }                 from "./Menu-Data";

export class Menu extends VueFacade < Data , Slots , Props , Events >
{
    constructor( ) {
        super( );

        this.vue( )
            .template( ).pug( require( './Menu.pug' ) )
            .data( )
                .setAll( new Data )
                .end( );

        this.vue( )
            .vBind( )
                .set( 'value' , true )
                .end( );
    }
}

