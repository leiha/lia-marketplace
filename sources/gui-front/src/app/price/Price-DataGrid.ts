
import * as base from "@lia/vuetify/datagrid/DataGrid";

export class DataGrid extends base.DataGrid {

    constructor( ) {
        super( );

        this.columns( )
        //.enableReOrder( )

            .column$( 'data1' )
            .end( )

            .column$( 'id' )
            .end( )

            .column$( 'editable' )
            // .header( ).vNode$( new base.Header     ).end( )
            // .cell  ( ).vNode$( new base.EditInline ).end( )
            .end( )
        ;

        this.menu( )
            .enable( )
            ;

        this.selection( )
            .enable( )
            ;

        this.search( )
            .enable( )
            ;

        this.order( )
            .enable( )
        ;

        this.pagination( )
            .enable( )
            ;

        this.header( )
            .enableDefault( false )
            ;

        this.sort( )
            .enable( true )
            .by    ( 'data1' )
            .by    ( 'editable' , 'desc' )
            ;



        this.items( ).set( ).all( [
            { id : 1 , editable : 'data4' , data1: 'data2' } ,
            { id : 2 , editable : 'data5' , data1: 'data2'} ,
            { id : 3 , editable : 'data3' , data1: 'data2'} ,
            { id : 4 , editable : 'data1' , data1: 'data'} ,
            { id : 5 , editable : 'data2' , data1: 'data2'} ,
            { id : 6 , editable : 'data4' , data1: 'data2' } ,
            { id : 7 , editable : 'data5' , data1: 'data2'} ,
            { id : 8 , editable : 'data3' , data1: 'data2'} ,
            { id : 9 , editable : 'data1' , data1: 'data'} ,
            { id : 10 , editable : 'data2' , data1: 'data2'} ,
        ] );
    }
}