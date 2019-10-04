
import {Data, Events} from "../Datagrid-Types";
import { DataGridChild } from "../DataGrid-Child";

export class Selection extends DataGridChild
{
    private $config : Data[ 'selection' ] = {
        enabled       : false  ,
        all           : false  ,
        indeterminate : false  ,
        single        : false  ,
        items         : [ ]
    };

    config( ) {
        return this.$config;
    }

    onLoaded( ) {
        this.data( ).set( 'selection' , this.$config ).end( )
            .vBind( )
            .bind( 'showSelect'   , 'selection.enabled' )
            .bind( 'value'        , 'selection.items'   )
            .bind( 'singleSelect' , 'selection.single'  )
            .end( );
    }

    on < T extends 'input' | 'item-selected' >
    ( name : T ,  cb : Events[ T ] ) {
        this.dataGrid( ).vue( ).vOn( ).add( name , cb );
        return this;
    }

    disable ( ) {
        this.$config.enabled  = false;
        this.$config.items    = [ ];
        this.$config.single   = false;
        return this;
    }

    enable ( single : boolean = false )
    {
        let $this = this;
        this.$config.enabled  = true;
        this.$config.items    = [ ];
        this.$config.single   = single;

        this.dataGrid( ).columns( ).vNode( )
            .methods( )
                .add( 'selection' , ( ) => {
                    return {
                        config : this.$config ,
                        events : {
                            selectAll : function(  ) {
                                let items = [ ];
                                if( $this.$config.all ) {
                                    items = ( < any[ ] > $this.data( ).get('items') ).slice( );
                                }
                                $this.$config.items = items;
                            }
                        }
                    };
                } )
                .end( );

        this.on( 'input' , ( item ) => {
            // @ts-ignore
            let selected = this.$config.items.length;
            // @ts-ignore
            let values   = $this.data( ).get('items').length;

            this.components().get( 'menu' )
                .enable( 'selection' , selected  > 0 )
                ;

            this.$config.indeterminate = selected > 0 && selected < values;
            this.$config.all = selected == values;
        } );

        return this;
    }
}