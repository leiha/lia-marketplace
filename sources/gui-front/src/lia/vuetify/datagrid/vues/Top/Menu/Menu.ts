
import { VueHolder     } from "../../Vue-Holder";
import { Menu as Base } from "@lia/vuetify/menu/Menu";

export class Menu extends VueHolder < Base > {

    protected prepare( ) : Base {

        let vue = ( new Base( ) );

        vue.vBind( )
            .add( 'closeOnClick' , false )
            .add( 'offsetY' , true )
            .add( 'bottom'  , true )
            // .add( 'left'    , true )
            .add( 'right'    , true )
            .end( )
            ;

        vue.list().group( { } )
            .item( {
                title : 'Create' ,
                subtitle : 'sdqdqsqsdqsd',
                icon  : 'create' ,
                click : ( e : any ) => { console.log( e ); }
            } );

        vue.list().group( { title : 'selection' , disabled : true } )
            .item( {
                title : 'Delete' ,
                subtitle : 'sfqfsqfsf',
                icon  : 'delete' ,
                click : ( e : any ) => { console.log( e ); }
            } );

        return vue;
    }

    enable ( id : string , enable : boolean = true ) {
       this.vue( ).list( )
           .enableGroup( id , enable )
            ;
    }

}