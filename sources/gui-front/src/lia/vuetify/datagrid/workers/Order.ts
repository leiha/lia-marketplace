
import { DataGridChild }                from "../DataGrid-Child";
import { Events , HeaderProps , Data }  from "../Datagrid-Types";
import { Column }                       from "../columns/Column";
import { Draggable }                    from "@lia/vue/directives/Draggable";

export class Order extends DataGridChild
{
    private $config : Data[ 'order' ] = {
        enabled : true ,
    };

    config( ) {
        return this.$config;
    }

    onLoaded( ) {
        this.data( )
            .set( 'order' , this.$config )
            .end( )
            ;
    }

    disable ( ) {
        this.$config.enabled = false;
        return this.end( );
    }

    enable ( ) {
        this.$config.enabled = true;

        this.dataGrid( ).vue( )
            .directives( )
            .add( 'sortable-table' , ( new Draggable( ) )
                .inside( ( el : any , binding : any , vnode : any ) => {
                    return ( el.querySelector('thead tr') );
                } )
            ).end( )
            // .vOn().add( 'moved' , ( e : any ) => {
            //     let h = this.data( ).get( 'headers' );
            //     // @ts-ignore
            //     let d = h.splice( e.oldIndex - 1  , 1 );
            //     // @ts-ignore
            //     h.splice( e.newIndex - 1  , 0 , d[ 0 ] )
            // } );

        this.dataGrid().columns( ).workers( ).get( ).all( )
            .forEach( ( column : Column ) => {
                column
                    .classes( )
                    .add( 'movable' )
                    .end( )
                    ;
            } );

        return this;
    }
}