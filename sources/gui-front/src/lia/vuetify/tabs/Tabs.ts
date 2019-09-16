
import { Vue }                  from "@lia/vue/Vue-Core";
import { Data, Events, Props, Slots } from "./Tabs-Types";

export class Tabs extends Vue < Data , Slots , Props , Events >
{
    constructor( ) {
        super( );
        this.template( ).pug( require( './Tabs.pug' ) )
    }

}