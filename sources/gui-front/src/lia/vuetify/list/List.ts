
import { Vue }                  from "@lia/vue/Vue-Core";
import { Data, Events, Props, Slots } from "./List-Types";

export class List extends Vue < Data , Slots , Props , Events >
{
    constructor( ) {
        super( );
        this.template( ).pug( require( './List.pug' ) )
    }

}