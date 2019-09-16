
import { VueFacade }                  from "@lia/vue/Vue-Facade";
import { VueSlotHolder }              from "@lia/vue/Vue-Slot";
import { Data, Events, Props, Slots } from "./Editable-Types";
import { DefaultSlot }                from "../editable/slots/Default";
import { InputSlot }                  from "../editable/slots/Input";
import { Text }                       from "@lia/vuetify/form/fields/text/Text";

export class EditInline extends VueFacade < Data , Slots , Props , Events > {

    constructor( ) {
        super( );

        let input = this.input( ( new InputSlot( ) ).owner( this ).attach( ) );

        this.vue( )
            .template( ).pug( require( './Editable.pug' ) )
            .methods( )
                .add( 'open' , ( scope : any ) => input.data( ).set( 'value' , scope.value ) )
                .add( 'save' , ( scope : any ) => {
                    scope.item[ scope.header.value ] = input.data( ).get( 'value' );
                } );

        this.default( ( new DefaultSlot( ) ).owner( this ).attach( ) );
    }

    default( slot : VueSlotHolder ) {
        return slot.vue( ).template( ).html( '<span>{{ scope.value }}</span>' );
    }

    input( slot : VueSlotHolder ) {
        let field = new Text( );
        slot.vue$( field ).vue( );
        return field;
    }
}