
import * as base from "@lia/vuetify/datagrid/Datagrid";

export class Ass extends base.TextEditSlot {

    constructor( ) {
        super( );
        this.template( )
            .pug( require( './fieldh.pug' ) )
        ;
    }
}