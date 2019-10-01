
import { Props }            from "../Datagrid-Types";
import { DataGridChild }   from "../DataGrid-Child";
import {TopSlot} from "@lia/vuetify/datagrid/slots/Top";

export class Search extends DataGridChild
{
    // on < T extends '' >
    // ( name : T ,  cb : Events[ T ] ) {
    //     this.dataGrid( ).vue( ).vOn( ).add( name , cb );
    //     return this;
    // }

    get ( ) {
        return this.data( ).get( 'search' );
    }

    set ( $search : Props[ 'search' ] ) {
        this.vBind( ).set( 'search' , $search );
        return this;
    }

    disable( ) {
        this.vBind( ).set( 'disableFiltering' , true );
        return this;
    }

    enable( ) {
        this.vBind( )
            .set( 'disableFiltering' , false )
            .set( 'search'           , '' )
            ;

        this.components( ).get( 'top' )
            .item( this.components( ).get( 'search' ) )
            ;

        return this;
    }

    custom( cb : any ) {
        this.dataGrid( ).vue( ).vBind( )
            .set( 'customFilter' , cb )
        ;
    }
}