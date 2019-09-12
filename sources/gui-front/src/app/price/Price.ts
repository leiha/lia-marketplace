
import { DataGrid } from './Price-DataGrid';
import { Layout   } from '@app/layout/Layout';

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
    }

    footer( ) {
        super.footer( );
    }
}