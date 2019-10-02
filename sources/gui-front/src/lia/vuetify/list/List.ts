
import { Vue }                  from "@lia/vue/vue";
import {Data, Events, Group, Item, Props, Slots} from "./List-Types";

export class List extends Vue < Data , Slots , Props , Events >
{
    constructor( ) {
        super( );
        this.template( ).pug( require( './List.pug' ) )
            .data( )
                .set( 'groups' , [ ] )
            .end( )
    }

    groups( ) {
        return this.vue( ).data( ).get( 'groups' );
    }

    group ( group : Group ) {

        let $this  = this;
        let groups = this.groups( );
        if( ! group.items ) {
            group.items = [ ];
        }
        groups.push( group );

        return {
            item( item : Item ) {
                // @ts-ignore
                group.items.push( item );
                return this;
            } ,
            end ( ) {
                return $this;
            }
        }
    }

    enableGroup ( id : string , enable : boolean = true )
    {
        this.groups( ).forEach( ( group : Group ) => {
            if( group.title == id ) {
                group.disabled = ! enable;
            }
        } );
    }
}