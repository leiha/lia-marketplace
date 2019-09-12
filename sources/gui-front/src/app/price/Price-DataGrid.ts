
import * as dataGrid from "@lia/vuetify/datagrid/Datagrid";

export class DataGrid extends dataGrid.DataGrid {

    constructor( ) {
        super( );

        this.selection( )
            .enable( )
            ;

        this.search( )
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
            } )
            .add( {
                text  : 'qqffq',
                value : 'name'
            } )
            .add( {
                text  : 'csssc',
                value : 'toto'
            } );

        this.items( ).set( ).all( [
            { id : 1 , name : 'toto4' , toto : 'toto2' } ,
            { id : 2 , name : 'toto5' , toto : 'toto2'} ,
            { id : 3 , name : 'toto3' , toto : 'toto2'} ,
            { id : 4 , name : 'toto1' , toto : 'toto'} ,
            { id : 5 , name : 'toto2' , toto : 'toto2'} ,
        ] );
    }
}