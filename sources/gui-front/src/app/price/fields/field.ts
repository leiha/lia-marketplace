
import * as base from "@lia/vuetify/datagrid/Datagrid";

export class Ass extends base.TextEditInline {

    constructor( ) {
        super( );
        this.vue( ).template( )
            .pug( require( './fieldh.pug' ) )
        ;
    }
}