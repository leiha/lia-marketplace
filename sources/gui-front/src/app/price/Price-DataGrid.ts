
import * as base from "@lia/vuetify/datagrid/Datagrid";
import {Text} from "@lia/vuetify/form/fields/text/Text";
import {VueSlot} from "@lia/vue/Vue-Slot";

export class Ass extends base.CellComponent {
    prepare ( ) : base.CellSlot {
        let c = new base.CellSlot;
        c.template( ).html( '<span style="color: green">{{ scope.value }}</span>' );
        return c;
    }
}

export class Hss extends base.HeadComponent {
    prepare ( ) : base.HeadSlot {
        let c = new base.HeadSlot;
        c.template( ).html( '<span>{{ scope.header.text }}</span>' );
        return c;
    }
}

export class Eee extends base.CellComponent {
    prepare ( ) : base.EditSlot {
        let c = new base.EditSlot( );

        let text = ( new Text( ) );
        text
            .vBind( )
                .set( 'value' , '' )
                .end( )
            .props()
                .push( 'scope' );

        c.methods( ).add( 'open' , ( scope : any ) => {
            text.data( ).set( 'value' , scope.value )
        } );

        c.slot( ).add( 'input' , { component : text.build( ) } );

        return c;
    }
}

export class DataGrid extends base.DataGrid {

    constructor( ) {
        super( );

        this.selection( )
            .enable( )
            ;

        this.search( )
            .enable( )
            ;

        this.pagination( )
            .enable( )
            ;

        this.sort( )
            .enable( true )
            .by    ( 'id' )
            ;

        this.columns( )
            .add( {
                text  : 'sqdsqdqdssdqdq',
                value : 'id'
            } ).end( )
            .add( {
                text  : 'Editable',
                value : 'name'
            } ).customize( )
                //.cell( new Ass( this )  )
                .head( new Hss( this )  )
                .end( )
                .editable( )
                    .enable( new Eee( this ) )
                    .end( )
                .end( )
            .add( {
                text  : 'csssc',
                value : 'toto'
            } ).end( )
            ;

        this.items( ).set( ).all( [
            { id : 1 , name : 'toto4' , toto : 'toto2' } ,
            { id : 2 , name : 'toto5' , toto : 'toto2'} ,
            { id : 3 , name : 'toto3' , toto : 'toto2'} ,
            { id : 4 , name : 'toto1' , toto : 'toto'} ,
            { id : 5 , name : 'toto2' , toto : 'toto2'} ,
            { id : 6 , name : 'toto4' , toto : 'toto2' } ,
            { id : 7 , name : 'toto5' , toto : 'toto2'} ,
            { id : 8 , name : 'toto3' , toto : 'toto2'} ,
            { id : 9 , name : 'toto1' , toto : 'toto'} ,
            { id : 10 , name : 'toto2' , toto : 'toto2'} ,
        ] );
    }
}