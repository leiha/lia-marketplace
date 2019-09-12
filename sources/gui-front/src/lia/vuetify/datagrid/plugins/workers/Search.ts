
import { Worker } from './Worker';
import { Props  } from "../../Datagrid-Types";

import * as search from '../components/Search';

export class Search extends Worker
{
    get ( ) {
        return this.vue( ).data( ).get( 'search' );
    }

    set ( $search : Props[ 'search' ] ) {
        this.vue( ).vBind( ).set( 'search' , $search );
        return this;
    }

    disable( ) {
        this.vue( ).vBind( ).add( 'disableFiltering' , true );
        return this;
    }

    enable( ) {
        this.vue( ).vBind( )
            .add( 'disableFiltering' , false )
            .add( 'search' , '' )
        ;

        this.vue( ).lifeCycle( ).subscribe( 'built' , ( ) => {
            this.vue( ).slot( ).add( 'top' , { component : ( new search.Search( this.$dataGrid ) ).build( ) } )
        } );

        return this;
    }

    custom( cb : any ) {
        this.vue( ).vBind( )
            .add( 'customFilter' , cb )
        ;
    }
}