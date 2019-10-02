
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
        let $this = this;

        this.dataGrid( ).vue( ).vBind( )
            .set( 'showSelect'   , true   )
            .set( 'value'        , [ ]    )
            .set( 'singleSelect' , single )
            ;

        this.dataGrid( ).vue( ).data()
            .set( 'selection' , {
                all           : false ,
                indeterminate : false
            } );

        let selection = this.dataGrid( ).vue( ).data().get( 'selection');

        this.dataGrid( ).vue( ).methods().add( 'selectAll' , function(  ) {
            // @ts-ignore
            $this.data( ).set( 'value' , selection.all ? $this.data( ).get('items').slice( ) : [ ] );
        } );

        this.on( 'input' , ( item ) => {
            // @ts-ignore
            let selected = this.get( ).selected( ).length;
            // @ts-ignore
            let values   = $this.data( ).get('items').length;

            this.components().get( 'menu' )
                .enable( 'selection' , selected  > 0 )
                ;

            selection.indeterminate = selected > 0 && selected < values;
            selection.all = selected == values;
        } );

        return this;
    }
}