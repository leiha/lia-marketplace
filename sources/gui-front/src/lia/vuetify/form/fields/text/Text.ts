
import { Vue } from '@lia/vue/Vue';
import { Data , Props , Slots , Events } from './Text-Types';

export class Text extends Vue < Data , Slots , Props , Events > {

    constructor( ) {
        super( );
        this.template( ).pug( require( './Text.pug' ) );
    }

    name( ) {
        return 'Vuetify'+ this.constructor.name;
    }
}