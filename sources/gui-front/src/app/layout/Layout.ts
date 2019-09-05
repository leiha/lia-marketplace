
import { Page   } from '@lia/vuetify/page/Page';
import { Header } from '@app/layout/plugins/Header';

export class Layout extends Page {

    protected $header = new Header( );

    header () : void {
        this.slot( ).add( 'header' , { vue : this.$header } );
    }

    body () : void {

    }

    footer () : void {

    }
}