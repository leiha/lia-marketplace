
import { firstBy }              from "thenby";
import { DataGridChild }        from "../DataGrid-Child";
import {Events, HeaderProps , Data}    from "../Datagrid-Types";
import { Column }               from "@lia/vuetify/datagrid/columns/Column";

export class Sort extends DataGridChild
{
    private $subscriber : { [ k : string ] : any } = { };

    private $config : Data[ 'sort' ] = {
        disabled : true  ,
        multiple : false ,
        sortBy   : [ ]   ,
        sortDesc : [ ]
    };

    config( ) {
        return this.$config;
    }

    onLoaded( ) {
        this.data( ).set( 'sort' , this.$config ).end( )
            .vBind( )
                .bind( 'disableSort' , 'sort.disabled' )
                .bind( 'multiSort'   , 'sort.multiple' )
                .bind( 'sortBy'      , 'sort.sortBy'   )
                .bind( 'sortDesc'    , 'sort.sortDesc' )
                .set ( 'customSort'  , ( ) => {
                    return this.sort( ).data( ).get( 'items' );
                } )
                .end( );
    }

    on < T extends 'update:sort-by' | 'update:sort-desc' >
    ( name : T ,  cb : Events[ T ] ) {
        this.dataGrid( ).vue( ).vOn( )
            .add( name , cb )
            ;

        return this;
    }

    by ( field : string , way : 'desc' | 'asc' = 'asc' ) {

        let index = this.$config.sortBy.indexOf( field );
        if( index > -1 ) {
            this.$config.sortDesc[ index ] = way == 'desc' ;
        }
        else {
            this.$config.sortBy.push( field );
            this.$config.sortDesc.push( way == 'desc' );
        }
        return this;
    }

    sort( ) {
        let sortBy   = this.$config.sortBy;
        let sortDesc = this.$config.sortDesc;
        if( sortBy.length ) {
            let sort   = [ [ sortBy[ 0 ] , sortDesc[ 0 ] ] ];
            let sorter = firstBy( sortBy[ 0 ] , sortDesc[ 0 ] ? -1 : 1 );
            for( let i = 1; i < sortBy.length ; i++ ) {
                sorter = sorter.thenBy( sortBy[ i ] , sortDesc[ i ] ? -1 : 1 );
                sort.push( [ sortBy[ i ] , sortDesc[ i ] ] );
            }
            ( < any[] > this.data( ).get( 'items' ) )
                .sort( sorter )
                ;
        }
        return this;
    }

    disable ( ) {
        this.$config.disabled = true;
        this.$config.sortBy   = [ ];
        this.$config.sortDesc = [ ];
        if( this.$subscriber ) {
            this.$subscriber.unsubscribe( )
        }
        return this.end( );
    }

    protected enableOn ( column : Column ) {
        let index     = this.$config.sortBy.indexOf( column.config( ).value );
        let desc      = this.$config.sortDesc;
        column
            .classes( )
            .add( 'sortable' )
            .end( )
            .icons( )
            .add( 'sort' , ( index > -1 ? desc[ index ]
                ? 'arrow_drop_down'
                : 'arrow_drop_up'
                : '' ) )
            .end( )
        ;
    }

    enable ( multiple : boolean = false ) {

        this.$config.disabled = false;
        this.$config.multiple = multiple;

        this.$dataGrid.vue( ).lifeCycle( )
            .subscribe( 'built' , ( ) => {

                let sorter = ( column : Column ) => {
                    let name      = column.config( ).value;
                    let index     = this.$config.sortBy.indexOf( name );
                    let desc      = this.$config.sortDesc;
                    let direction = ( ! desc[ index ] );
                    this.by  ( name , direction ? 'desc' : 'asc' );
                    this.sort( );
                };

                this.dataGrid().columns( ).workers( ).get( ).all( )
                    .forEach( ( column : Column ) => {

                        this.enableOn( column );

                        this.$subscriber = column.header( ).actions( )
                            .subscribe( 'click' , ( ) => sorter( column )  )
                                .and( ( ) => this.enableOn( column ) )
                                ;
                    } );
            } );

        return this;
    }
}