
import { VueFacade } from "@lia/vue/vue";

export class Cell extends VueFacade {

    constructor( ) {
        super( );

        this.vue( ).template( )
            .html( '<span>{{ scope.value }}</span>' )
            ;

    }
}