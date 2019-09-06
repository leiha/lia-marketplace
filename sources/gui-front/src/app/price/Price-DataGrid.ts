
import * as dataGrid from "@lia/vuetify/datagrid/Datagrid";

export class DataGrid extends dataGrid.DataGrid {

    constructor( ) {
        super( );

        this.selection( ).enable( );

        this.search   ( ).enable( );

        this.sort( )
            .enable( )
            .by    ( 'id' )
            .on( 'update:sort-by' , ( v ) => {

            } );


        this.columns( )
            .add( {
                text  : 'sqdsqdqdssdqdq',
                value : 'id'
            } )
            .add( {
                text  : 'qqffq',
                value : 'name'
            } );

        this.items( ).set( ).all( [
            { id : 1 , name : 'toto' }
        ] );
    }
}