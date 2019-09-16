

import { VueFacade }            from "@lia/vue/vue";
import { Props, Slots, Events } from './Dialog-Types';
import { Data }                 from "./Dialog-Data";

export class Dialog extends VueFacade < Data , Slots , Props , Events > {

    constructor( ) {
        super( );

        this.vue( )
            .template( ).pug( require( './Dialog.pug' ) )
            .vBind()
                .set( 'value' , '' )
                .end( )
            .data( )
                .setAll( new Data )
                .end( );
    }
}