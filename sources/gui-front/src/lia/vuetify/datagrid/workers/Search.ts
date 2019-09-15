
import { Props }            from "../Datagrid-Types";
import { DataGridChild }   from "../DataGrid-Child";

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
        this.dataGrid( ).vue( ).vBind( )
            .set( 'disableFiltering' , false )
            .set( 'search'           , '' )
        ;

        this.dataGrid( ).vue( ).lifeCycle( ).subscribe( 'built' , ( ) => {
            this.dataGrid( ).vue( )
                .slot( ).add( 'top' , { component : ( this.components( ).get( 'search' ) ).build( ) } )
        } );

        return this;
    }

    custom( cb : any ) {
        this.dataGrid( ).vue( ).vBind( )
            .set( 'customFilter' , cb )
        ;
    }
}