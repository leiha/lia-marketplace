
import { VueFacade } from "@lia/vue/vue";

export class Header extends VueFacade {

    constructor( ) {
        super( );

        this.vue( ).template( )
            .html( '<span>{{ scope.header.text }}</span>' )
            ;

    }
}