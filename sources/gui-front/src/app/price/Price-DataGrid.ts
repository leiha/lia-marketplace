
import * as base from "@lia/vuetify/datagrid/Datagrid";

import * as vue from "@lia/vue/vue";
import {Ass} from "@app/price/fields/field";



export class Hss extends base.HeadSlot {

    constructor( ) {
        super( );
        this.template( )
            .html( '<span>{{ scope.header.text }}</span>' )
            ;
    }
}

export class Eee extends base.TextEditSlot {

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
                .cell( new Ass( )  )
                .head( new Hss( )  )
                .end( )
                // .editable( )
                //     .enable( new Eee( ) )
                //     .end( )
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