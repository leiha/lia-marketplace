
import { Data , Events, Props, Slots } from "./Menu-Types";
import { Vue }                  from "@lia/vue/vue";
import { DefaultSlot }          from "@lia/vuetify/menu/slots/Default";
import { List }                 from "@lia/vuetify/list/List";
import {ActivatorSlot} from "@lia/vuetify/menu/slots/Activator";
import {Button} from "@lia/vuetify/form/buttons/Button";

export class Menu extends Vue < Data , Slots , Props , Events >
{
    private $list      = ( new List( ) );
    private $activator = new Button( );

    constructor( ) {
        super( );

        this.vue( )
            .template( ).pug( require( './Menu.pug' ) )
            .vBind( )
                .add( 'value'   , false )
                .end( );

        this.$activator
                .vBind()
                    .add( 'icon' , true )
                    .end( )
                .data( )
                    .add( 'iconName' , 'menu' )
                    .end( )
                .vOn( )
                    .add( 'click' , ( ) => {
                        this.data( ).set( 'value' , ! this.data( ).get( 'value' ) );
                    } )
                    .end( );

        this.list( )
            .vBind( )
                .add( 'dense' , true )
                .end( );

        ( new DefaultSlot( )   ).owner( this.vue( ) ).vue$( this.$list ).attach( );
        ( new ActivatorSlot( ) ).owner( this.vue( ) ).vue$( this.$activator ).attach( );

    }

    public list( ) {
        return this.$list;
    }


}

