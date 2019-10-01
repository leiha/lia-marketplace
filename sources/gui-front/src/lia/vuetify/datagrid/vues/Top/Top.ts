
import { Data, Props, Slots } from "@lia/vuetify/datagrid/vues/Top/Top-Types";
import { TopSlot            } from "@lia/vuetify/datagrid/slots/Top";
import { Vue                } from "@lia/vue/vue";

export class Top extends TopSlot < Vue < Data , Slots , Props >  >
{
    prepare ( ) {
        return super.prepare( )
            .template( ).pug( require( './Top.pug' ) )
            .vBind( )
                .set( 'items' , [ ] )
            .end( )
        ;
    }

    item( item : any ) {
        console.log( item );

        this.vue( ).data( ).get( 'items' ).push( { component : item } );
        return this;
    }
}