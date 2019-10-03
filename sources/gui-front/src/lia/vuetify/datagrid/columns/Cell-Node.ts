
import { Vue } from "@lia/vue/vue";

export class CellNode extends Vue {

    constructor(  ) {
        super( );
        this.template( )
            .pug( require( './Cell-Node.pug' ) )
            ;
    }
}