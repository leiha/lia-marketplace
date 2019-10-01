
import * as ioc                       from "./ioc/Ioc";
import * as iocBase                   from '@lia/core/ioc/Ioc-Simple';
import { VueFacade }                  from '@lia/vue/vue';
import { DataGridSlot               } from "./DataGrid-Slot";
import { DataGridChild              } from "./DataGrid-Child";
import { Data, Props, Slots, Events } from './Datagrid-Types';
import { VueHolder                  } from "./vues/Vue-Holder";

export class DataGrid extends VueFacade < Data , Slots , Props , Events > {

    protected $plugins = new ioc.Ioc( )
        .injector$( ( plugin : any , container ) => {

            if( plugin instanceof iocBase.Ioc ) {
                plugin.injector$( container.injector( ) );
                return;
            }

            if( plugin instanceof DataGridChild || VueHolder ) {
                plugin.dataGrid$( this );
            }

            if( plugin instanceof DataGridSlot ) {
                // @ts-ignore
                plugin.owner( this.vue( ) ).attach( );
            }

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

    build( )  {
        return super.build( );
    }

    plugins( ) {
        return this.$plugins;
    }

    menu( ) {
        return this.$plugins.get( 'workers' ).get( 'menu' );
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