
import { VueHolder } from "@lia/vuetify/datagrid/vues/Vue-Holder";
import { Vue       } from '@lia/vue/vue';


export class Top extends VueHolder < Vue >
{
    protected $items : { component : any }[ ] = [ ];

    prepare( ) {
        return ( new Vue( ) )
            .template( ).pug( require( './Top.pug' ) )
            ;

    }


    item( item : any ) {

        this.$items.push( { component : item } )

    }



}