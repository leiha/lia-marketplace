
import { Vue } from "@lia/vue/vue";

export class HeaderNode extends Vue {

    constructor(  ) {
        super( );
        this.template( )
            .pug( require( './Header-Node.pug' ) )
            ;
    }
}