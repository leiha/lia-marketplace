
import { DataGrid } from './Price-DataGrid';
import { Layout   } from '@app/layout/Layout';
import {Menu} from "@lia/vuetify/menu/Menu";
import {Dialog} from "@lia/vuetify/dialog/Dialog";

export class Price extends Layout {

    protected $dataGrid = new DataGrid( );

    header( ) {
        super.header( );
        this.$header.data( ).merge( {
            'title' : 'Price'
        } );
    }

    body ( ) {
        super.body( );
        this.slot( ).add( 'body' , { vue : this.$dataGrid } );
        // this.slot( ).add( 'body' , { vue : (new Menu()) } );
    }

    footer( ) {
        super.footer( );
    }
}