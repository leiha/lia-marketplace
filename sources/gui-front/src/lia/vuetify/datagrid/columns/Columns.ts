
import { HeaderProps, Props } from "../Datagrid-Types";
import { DataGridChild }      from "../DataGrid-Child";
import { Column }             from "./Column";
import { HeadersNode }        from "./Headers-Node";
import { ArrayObjects }       from "@lia/array/ArrayObjects";
import {HeaderNode} from "@lia/vuetify/datagrid/columns/Header-Node";

export class Columns extends DataGridChild
{
    // @ts-ignore
    private $config  : ArrayObjects < Columns , HeaderProps > ;
    // @ts-ignore
    private $workers : ArrayObjects < Columns , Column      > ;

    // @ts-ignore
    private $vNode   : HeaderNode;

    workers( ) {
        if( ! this.$workers ) {
            this.$workers = new ArrayObjects( this , [ ] )
        }
        return this.$workers;
    }

    config( ) {
        if( ! this.$config ) {
            this.$config = new ArrayObjects( this , < HeaderProps[ ] > this.data( ).get( 'headers' ) )
        }
        return this.$config;
    }

    onLoaded ( ) {
        this.slots( ).get( 'headers' ).vue$( this.vNode( ) );
    }

    column$( name : string ) {
        let col = new Column( <string>name ).columns$( this );

        this.workers( ).push( col );

        this.config( )
            .push( {
                value   : name ,
                icons   : { sort : '' } ,
                classes : [ ]
            } );

        col.onLoaded( );

        return col;
    }

    vNode( ) {
        if( ! this.$vNode ) {
            this.$vNode = ( new HeadersNode( ) )
                .name$  ( 'Headers' )
                .methods( )
                    .add( 'component' , ( header : string ) => {
                        let h = this.workers( ).get( ).by( header , 'name' );
                        if( h ) {
                            return h.header( ).build( )
                        }
                    } )
                    .end( )
               ;
        }
        return this.$vNode;
    }
}