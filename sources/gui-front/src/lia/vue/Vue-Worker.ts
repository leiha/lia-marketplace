
import { Vue } from '@lia/vue/Vue-Core';

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


    vue$( vue : TVue ) {
        this.$vue = vue;
        return this;
    }

    build( ) {
        return this.vue( ).build( );
    }
}