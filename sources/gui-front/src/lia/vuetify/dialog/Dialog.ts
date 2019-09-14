

import { Vue }                        from "@lia/vue/vue";
import { Data, Props, Slots, Events } from './Dialog-Types';
import { ActivatorSlot }              from "./slots/Activator";
import { Button }                     from "../form/buttons/Button";

export class Dialog extends Vue < Data , Slots , Props , Events > {

    constructor( ) {
        super( );
    }

    // @ts-ignore
    activator < TButton extends Button > ( b : TButton = new Button( ) ) : TButton {
        // ( new ActivatorSlot( ) ).owner( this ).setVue( b );
        return b;
    }

}