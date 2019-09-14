
import { Vue } from '@lia/vue/vue';

export abstract class VueHolder < TVue extends Vue >
{
    // @ts-ignore
    private $vue : TVue;

    protected abstract prepare ( ) : TVue;

    protected constructor( ) {

    }

    vue( ) {
        if( ! this.$vue ) {
            this.$vue = this.prepare( );
        }
        return this.$vue;


    }

    build( ) {
        return this.vue( ).build( );
    }
}