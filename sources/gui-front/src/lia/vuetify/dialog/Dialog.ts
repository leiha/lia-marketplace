

import { VueFacade }            from "@lia/vue/vue";
import { Props, Slots, Events } from './Dialog-Types';
import { Button }               from "../form/buttons/Button";

import { Data }                 from "./Dialog-Data";

export class Dialog extends VueFacade < Data , Slots , Props , Events > {

    constructor( ) {
        super( );

        this.vue( )
            .template( ).pug( require( './Dialog.pug' ) )
            .data( )
                .setAll( new Data )
                .end( );

        this.vue( )
            .vBind()
                .set( 'value' , true )
                .end( );
    }

    // @ts-ignore
    activator < TButton extends Button > ( b : TButton = new Button( ) ) : TButton {
        // ( new ActivatorSlot( ) ).owner( this ).setVue( b );
        return b;
    }

}