
import { Vue } from "@lia/vue/vue";

export class HeadersNode extends Vue {

    constructor(  ) {
        super( );
        this.template( )
            .pug( require( './Headers-Node.pug' ) )
            ;


    }
}