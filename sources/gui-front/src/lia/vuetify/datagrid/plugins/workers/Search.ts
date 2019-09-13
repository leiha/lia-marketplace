
import { Worker } from './Worker';
import {Events, Props} from "../../Datagrid-Types";

import * as search from '../components/Search';

export class Search extends Worker
{
    // on < T extends '' >
    // ( name : T ,  cb : Events[ T ] ) {
    //     this.dataGrid( ).vue( ).vOn( ).add( name , cb );
    //     return this;
    // }

    get ( ) {
        return this.dataGrid( ).vue( ).data( ).get( 'search' );
    }

    set ( $search : Props[ 'search' ] ) {
        this.dataGrid( ).vue( ).vBind( ).set( 'search' , $search );
        return this;
    }

    disable( ) {
        this.dataGrid( ).vue( ).vBind( ).add( 'disableFiltering' , true );
        return this;
    }

    enable( ) {
        this.dataGrid( ).vue( ).vBind( )
            .add( 'disableFiltering' , false )
            .add( 'search'           , '' )
        ;

        this.dataGrid( ).vue( ).lifeCycle( ).subscribe( 'built' , ( ) => {
            this.dataGrid( ).vue( ).slot( ).add( 'top' , { component : ( new search.SearchComponent( this.$dataGrid ) ).build( ) } )
        } );

        return this;
    }

    custom( cb : any ) {
        this.dataGrid( ).vue( ).vBind( )
            .add( 'customFilter' , cb )
        ;
    }
}