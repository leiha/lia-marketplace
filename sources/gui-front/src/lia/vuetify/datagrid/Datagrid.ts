
import * as ioc from "./ioc/Ioc";

import { VueFacade }                  from '@lia/vue/vue';
import { Data, Props, Slots, Events } from './Datagrid-Types';

import { Cell }       from './vues/cells/Cell'
import { CellSlot }   from "./slots/Cell";

import { Header }     from './vues/headers/Header'
import { HeaderSlot } from "./slots/Head";

import { EditInline } from "./vues/cells/editable/Editable";


export {
    Header , Cell ,
    HeaderSlot , CellSlot ,
    EditInline
}

export class DataGrid extends VueFacade < Data , Slots , Props , Events > {

    protected $plugins = new ioc.Ioc( )
        .injector$( ( plugin : any , container ) => {
            if( plugin.injector$ ) {
                plugin.injector$( container.injector( ) );
                return;
            }
            plugin.dataGrid$( this );
        } );

    constructor( ) {
        super( );
        this.vue( ).template( ).pug( require( './DataGrid.pug' ) );
        this.vue( ).vBind( )
            .set( 'headers' , [ ] )
            .set( 'items'   , [ ] )
            .set( 'options' , { } )
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