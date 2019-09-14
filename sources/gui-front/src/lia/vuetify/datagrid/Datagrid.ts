
import * as ioc from "@lia/ioc/Ioc-Simple";

import { VueFacade } from '@lia/vue/vue';
import { Data, Props, Slots, Events } from './Datagrid-Types';
import { Plugins  } from "./plugins/Plugins";
import { CellSlot } from "./slots/Cell";
import { HeadSlot } from "./slots/Head";
import { EditSlot , TextEditSlot } from "./dialogs/edit/Edit";

export {
    HeadSlot ,
    CellSlot , EditSlot , TextEditSlot
}

export class DataGrid extends VueFacade < Data , Slots , Props , Events > {

    protected $plugins = new ioc.Ioc < Plugins > ( new Plugins( this ) );

    constructor( ) {
        super( );
        this.vue( ).template( ).pug( require( './DataGrid.pug' ) );
        this.vue( ).vBind( )
            .add( 'headers' , [ ] )
            .add( 'items'   , [ ] )
            .add( 'options' , { } )
            ;
    }

    plugins( ) {
        return this.$plugins;
    }

    header( ) {
        return this.$plugins.get( 'workers' ).get( 'header' );
    }

    footer( ) {
        return this.$plugins.get( 'workers' ).get( 'footer' );
    }

    columns( ) {
        return this.$plugins.get( 'workers' ).get( 'columns' );
    }

    items( ) {
        return this.$plugins.get( 'workers' ).get( 'items' );
    }

    search( ) {
        return this.$plugins.get( 'workers' ).get( 'search' );
    }

    pagination( ) {
        return this.$plugins.get( 'workers' ).get( 'pagination' );
    }

    sort( ) {
        return this.$plugins.get( 'workers' ).get( 'sort' );
    }

    selection( ) {
        return this.$plugins.get( 'workers' ).get( 'selection' );
    }
}