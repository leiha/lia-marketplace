
import * as base from "@lia/vuetify/datagrid/DataGrid";

export class DataGrid extends base.DataGrid {

    constructor( ) {
        super( );

        this.menu( )
            .enable( )
            ;

        this.selection( )
            .enable( )
            ;

        this.search( )
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
            .by    ( 'toto' )
            .by    ( 'name' , "desc" )
            ;

        this.columns( )
            .enableReOrder( )
            .add( {
                text  : 'Id',
                value : 'id'
            } ).end( )
            .add( {
                text  : 'Editable',
                value : 'name'
            } ).customize( )
                .cell( new base.EditInline )
                .head( new base.Header     )
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