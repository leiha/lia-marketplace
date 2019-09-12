
import * as ioc from "@lia/ioc/Ioc-Simple";

import { Facade } from '@lia/vue/Vue';
import { Data, Props, Slots, Events } from './Datagrid-Types';
import { Plugins } from "./plugins/Plugins";

export class DataGrid extends Facade < Data , Slots , Props , Events > {

    protected $plugins = new ioc.Ioc < Plugins > ( new Plugins( this ) );

    constructor( ) {
        super( );
        this.$vue.template( ).pug( require( './DataGrid.pug' ) );
        this.$vue.vBind( )
            .add( 'headers' , [ ] )
            .add( 'items'   , [ ] )
            .add( 'options' , { } )
            ;
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

    sort( ) {
        return this.$plugins.get( 'workers' ).get( 'sort' );
    }

    selection( ) {
        return this.$plugins.get( 'workers' ).get( 'selection' );
    }
}