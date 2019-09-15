
import { Data, Events, Props, Slots } from "./Inline-Types";
import { CellSlot }                   from "../../../Datagrid";
import { Text }                       from "@lia/vuetify/form/fields/text/Text";

export class EditSlot extends CellSlot < Data , Slots , Props , Events > {

    constructor( ) {
        super( );
        this.template( ).pug( require( './Inline.pug' ) );
    }
}

export class TextEditSlot extends EditSlot {

    constructor( ) {
        super( );

        let text = ( new Text( ) )
            .vBind( )
                .add( 'value' , '' )
                .end( );

        this.methods( )
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
