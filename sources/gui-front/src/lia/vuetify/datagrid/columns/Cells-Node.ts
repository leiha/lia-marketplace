
import { Vue } from "@lia/vue/vue";

export class CellsNode extends Vue {

    constructor(  ) {
        super( );
        this.template( )
            .pug( require( './Cells-Node.pug' ) )
            ;


    }
}