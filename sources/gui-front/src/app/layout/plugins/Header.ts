
import { Vue } from '@lia/vue/Vue';

export interface Data {
    title : string
}

export class Header extends Vue < Data > {

    constructor( ) {
        super( );
        this.template( ).pug( require( './Header.pug' ) );
    }
}