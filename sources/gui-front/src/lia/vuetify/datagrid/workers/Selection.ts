
import { Events }         from "../Datagrid-Types";
import { DataGridChild } from "../DataGrid-Child";

export class Selection extends DataGridChild
{
    on < T extends 'input' | 'item-selected' >
    ( name : T ,  cb : Events[ T ] ) {
        this.dataGrid( ).vue( ).vOn( ).add( name , cb );
        return this;
    }

    get ( ) {

        return {
            selected : ( ) => {
                return this.data( ).get( 'value' );
            }
        }
    }

    disable ( ) {
        this.dataGrid( ).vue( ).vBind( )
            .set( 'showSelect'   , false )
            .set( 'value'        , [ ]   )
            .set( 'singleSelect' , false )
        ;

        return this;
    }

    enable ( single : boolean = false )
    {
        this.dataGrid( ).vue( ).vBind( )
            .set( 'showSelect'   , true   )
            .set( 'value'        , [ ]    )
            .set( 'singleSelect' , single )
        ;

        this.on( 'input' , ( item ) => {
            this.components().get( 'menu' )
                // @ts-ignore
                .enableGroup( 'selection' ,  this.get( ).selected( ).length > 0 )
                ;
        } );

        return this;
    }
}