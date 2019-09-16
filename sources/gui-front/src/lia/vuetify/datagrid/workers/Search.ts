
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
        return this.dataGrid( ).vue( ).data( ).get( 'search' );
    }

    set ( $search : Props[ 'search' ] ) {
        this.dataGrid( ).vue( ).vBind( ).set( 'search' , $search );
        return this;
    }

    disable( ) {
        this.dataGrid( ).vue( ).vBind( ).set( 'disableFiltering' , true );
        return this;
    }

    enable( ) {
        this.dataGrid( ).vue( )
            .vBind( )
                .set( 'disableFiltering' , false )
                .set( 'search'           , '' )
                ;

        ( new TopSlot( ) ).owner( this.dataGrid( ).vue( ) ).attach( )
            .vue$( this.components( ).get( 'search' ) )
            ;

        return this;
    }

    custom( cb : any ) {
        this.dataGrid( ).vue( ).vBind( )
            .set( 'customFilter' , cb )
        ;
    }
}