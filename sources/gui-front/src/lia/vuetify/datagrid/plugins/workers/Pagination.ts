
import { Worker } from './Worker';
import {Events, Props} from "../../Datagrid-Types";

import * as search from '../components/Search';

export class Pagination extends Worker
{
    on < T extends 'page-count' | 'update:items-per-page' | 'update:page' >
    ( name : T ,  cb : Events[ T ] ) {
        this.dataGrid( ).vue( ).vOn( ).add( name , cb );
        return this;
    }

    disable( ) {
        this.dataGrid( ).vue( ).vBind( ).add( 'disablePagination' , true );
        return this;
    }

    get( ) {

        return {
            currentPage : ( ) => {
                return this.dataGrid( ).vue( ).data( ).get( 'page' );
            } ,
            itemsPerPage : ( ) => {
                return this.dataGrid( ).vue( ).data( ).get( 'itemsPerPage' );
            } ,
            totalPages : ( ) => {
                return this.dataGrid( ).vue( ).data( ).get( 'pageCount' );
            }
        }
    }

    set( ) {

        let $this = this;

        return {
            currentPage ( page : number ) {
                $this.dataGrid( ).vue( ).data( ).set( 'page' , page );
                return this;
            } ,
            itemsPerPage ( number : number ) {
                $this.dataGrid( ).vue( ).data( ).set( 'itemsPerPage' , number );
                return this;
            } ,
            totalPages ( number : number ) {
                $this.dataGrid( ).vue( ).data( ).set( 'pageCount' , number );
                return this;
            } ,
            end ( ) {
              return $this;
            }
        }
    }

    enable( ) {
        this.dataGrid( ).vue( ).vBind( )
            .add( 'disablePagination' , false )
            .add( 'page'              , 1     )
            .add( 'itemsPerPage'      , 10    )
            .end( )
        .data( )
            .add( 'pageCount'         , 0     )
            .end( )
        .vOn( )
            .add( 'page-count'            , ( v : number ) => this.set( ).totalPages  ( v ) )
            .add( 'update:items-per-page' , ( v : number ) => this.set( ).itemsPerPage( v ) )
            .add( 'update:page'           , ( v : number ) => this.set( ).currentPage ( v ) )
            .end( )
            ;

        return this;
    }
}