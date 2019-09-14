
import { Vue } from '@lia/vue/vue';

export interface Data {
    title : string
}

export class Header extends Vue < Data > {

    constructor( ) {
        super( );
        this.template( ).pug( require( './Header.pug' ) );
    }
}