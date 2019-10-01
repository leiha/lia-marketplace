
import {Events }            from "../Datagrid-Types";
import { DataGridChild }   from "../DataGrid-Child";

export class Pagination extends DataGridChild
{
    on < T extends 'page-count' | 'update:items-per-page' | 'update:page' >
    ( name : T ,  cb : Events[ T ] ) {
        this.dataGrid( ).vue( ).vOn( ).add( name , cb );
        return this;
    }

    disable( ) {
        this.vBind( ).add( 'disablePagination' , true );
        return this;
    }

    get( ) {

        return {
            currentPage : ( ) => {
                return this.data( ).get( 'page' );
            } ,
            itemsPerPage : ( ) => {
                return this.data( ).get( 'itemsPerPage' );
            } ,
            totalPages : ( ) => {
                return this.data( ).get( 'pageCount' );
            }
        }
    }

    set( ) {

        let $this = this;

        return {
            currentPage ( page : number ) {
                $this.data( ).set( 'page' , page );
                return this;
            } ,
            itemsPerPage ( number : number ) {
                $this.data( ).set( 'itemsPerPage' , number );
                return this;
            } ,
            totalPages ( number : number ) {
                $this.data( ).set( 'pageCount' , number );
                return this;
            } ,
            end ( ) {
              return $this;
            }
        }
    }

    enable( ) {
        this.dataGrid( ).vue( )
            .vBind( )
                .set( 'disablePagination' , false )
                .set( 'page'              , 1     )
                .set( 'itemsPerPage'      , 10    )
                .end( )
            .data( )
                .set( 'pageCount'         , 0     )
                .end( )
            .vOn( )
                .set( 'page-count'            , ( v : number ) => this.set( ).totalPages  ( v ) )
                .set( 'update:items-per-page' , ( v : number ) => this.set( ).itemsPerPage( v ) )
                .set( 'update:page'           , ( v : number ) => this.set( ).currentPage ( v ) )
                .end( )
                ;

        return this;
    }
}