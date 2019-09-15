
import { VueFacade }                  from "@lia/vue/Vue-Facade";
import { Data, Events, Props, Slots } from "./Inline-Types";
import { Text }                       from "@lia/vuetify/form/fields/text/Text";

export class EditInline extends VueFacade < Data , Slots , Props , Events > {

    constructor( ) {
        super( );
        this.vue( )
            .template( ).pug( require( './Inline.pug' ) );
    }
}

export class TextEditInline extends EditInline {

    constructor( ) {
        super( );

        let text = ( new Text( ) )
            .vBind( )
                .add( 'value' , '' )
                .end( );

        this.vue( ).methods( )
            .add( 'open'  , ( scope : any ) => text.data( ).set( 'value' , scope.value ) )
            .add( 'save'  , ( scope : any ) => {
                scope.item[ scope.header.value ] = text.data( ).get( 'value' );
            } )
            .end( )
            .slot( )
                .add( 'input' , { component : text.build( ) } )
                .end( );
    }
}
