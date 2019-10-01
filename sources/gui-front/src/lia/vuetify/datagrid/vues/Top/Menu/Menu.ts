
import { VueHolder     } from "../../Vue-Holder";
import { Menu as Base } from "@lia/vuetify/menu/Menu";
import {Group} from "@lia/vuetify/list/List-Types";

export class Menu extends VueHolder < Base > {

    protected prepare( ) : Base {

        let vue = new Base( );

        vue.list().group( { } )
            .item( {
                title : 'Create' ,
                subtitle : 'sdqdqsqsdqsd',
                icon  : 'create' ,
                click : ( e ) => { console.log( e ); }
            } );

        vue.list().group( { title : 'selection' , disabled : true } )
            .item( {
                title : 'Delete' ,
                subtitle : 'sfqfsqfsf',
                icon  : 'delete' ,
                click : ( e ) => { console.log( e ); }
            } );

        return vue;
    }

    enableGroup ( id : string , enable : boolean = true ) {

        this.vue( ).list( ).groups( ).forEach( ( group : Group ) => {
            if( group.title == id ) {

                console.log( enable );

                group.disabled = ! enable;
            }
        } );
    }

}