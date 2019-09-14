
import { Vue  } from '@lia/vue/vue';
import { Page } from '@lia/vuetify/page/Page';

export abstract class Plugin < TComponent extends Vue = Vue > {

    //@ts-ignore
    $component : TComponent ;

    constructor ( protected $page : Page ) {

    }

    abstract prepare ( ) : TComponent

    build( ) {
        this.$component = this.prepare( );

        return this.$component.build( );
    }
}