
import { Plugin } from '../Plugin';
import { Vue    } from '@lia/vue/Vue';

export abstract class Component < TComponent extends Vue > extends Plugin {

    //@ts-ignore
    $component : TComponent ;

    abstract prepare ( ) : TComponent

    build( ) {
        this.$component = this.prepare( );

        return this.$component.build( );
    }
}