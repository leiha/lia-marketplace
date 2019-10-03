
import { ColumnChild } from "./Column-Child";
import {HeaderNode} from "@lia/vuetify/datagrid/columns/Header-Node";
import {HeaderProps} from "@lia/vuetify/datagrid/Datagrid-Types";

export class Header extends ColumnChild {

    public $actions : {
        click : ( ( header : HeaderProps ) => void )[ ]
    } = {
        click : [ ]
    };

    action( name : string ) {
        // @ts-ignore
        this.$actions[ name ].forEach( ( cb : Function ) => cb( this.column( ).config( ) ) );
    }

    vNode( ) {
        if( ! this.$vNode ) {
            this.$vNode = ( new HeaderNode( ) )
                .name$( 'Head-'+ this.column( ).name )
                .methods( ).add( 'click' , ( ) => this.action( 'click' ) ).end( );
        }
        return this.$vNode;
    }

}