
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
                return this.dataGrid( ).vue( ).data( ).get( 'value' );
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

    enable ( single : boolean = false ) {
        this.dataGrid( ).vue( ).vBind( )
            .set( 'showSelect'   , true   )
            .set( 'value'        , [ ]    )
            .set( 'singleSelect' , single )
        ;

        return this;
    }
}