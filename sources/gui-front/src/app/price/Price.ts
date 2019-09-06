
import { DataGrid } from './Price-DataGrid';
import { Layout   } from '@app/layout/Layout';

export class Price extends Layout {

    protected $datagrid = new DataGrid( );

    header( ) {
        super.header( );
        this.$header.data( ).merge( {
            'title' : 'Price'
        } );
    }

    body ( ) {
        super.body( );
        this.slot( ).add( 'body' , { vue : this.$datagrid } );
    }

    footer( ) {
        super.footer( );
    }
}