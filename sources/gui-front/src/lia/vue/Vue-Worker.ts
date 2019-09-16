
import { Vue }       from '@lia/vue/Vue-Core';
import { VueHolder } from "@lia/vuetify/datagrid/vues/Vue-Holder";

export abstract class VueWorker < TVue extends Vue >
{
    // @ts-ignore
    private $vue : TVue;

    protected prepare ( ) : TVue {
        // @ts-ignore
        return new Vue( );
    }

    vue( ) {

        if( ! this.$vue ) {
            this.$vue = this.prepare( );
        }
        return this.$vue;
    }


    vue$( vue : Vue|VueHolder ) {
        // @ts-ignore
        this.$vue = vue;
        return this;
    }

    build( ) {
        return this.vue( ).build( );
    }
}