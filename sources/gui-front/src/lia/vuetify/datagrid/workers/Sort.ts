
import { firstBy }          from "thenby";
import { DataGridChild }   from "../DataGrid-Child";
import { Events  }          from "../Datagrid-Types";

export class Sort extends DataGridChild
{
    private $data : {
        sortBy   : string [ ] ,
        sortDesc : boolean[ ]
    } = {
        sortBy   : [ ] ,
        sortDesc : [ ]
    };

    on < T extends 'update:sort-by' | 'update:sort-desc' >
    ( name : T ,  cb : Events[ T ] ) {
        this.dataGrid( ).vue( ).vOn( )
            .add( name , cb )
            ;

        return this;
    }

    get ( ) {
        return {
            sortBy   : ( ) => this.$data.sortBy ,
            sortDesc : ( ) => this.$data.sortDesc ,
        }
    }

    disable ( ) {
        this.vBind(  )
            .set( 'disableSort' , true )
            ;

        return this.end( );
    }

    enable ( multiple : boolean = false ) {
        this.vBind(  )
            .set( 'disableSort' , false )
            .set( 'sortBy'      , [ ] )
            .set( 'multiSort'   , multiple    )
            .set( 'sortDesc'    , [ ] )
            .set( 'customSort'  , (
                items         : any[ ]     ,
                sortBy        : string[ ]  ,
                sortDesc      : boolean[ ] ,
                locale        : string     ,
                customSorters : Record< string , Function > | undefined
            ) : any => {
                if( sortBy.length ) {
                    this.$data.sortBy   = sortBy;
                    this.$data.sortDesc = sortDesc;
                    let sort   = [ [ sortBy[ 0 ] , sortDesc[ 0 ] ] ];
                    let sorter = firstBy( sortBy[ 0 ] , sortDesc[ 0 ] ? -1 : 1 );
                    for( let i = 1; i < sortBy.length ; i++ ) {
                        sorter = sorter.thenBy( sortBy[ i ] , sortDesc[ i ] ? -1 : 1 );
                        sort.push( [ sortBy[ i ] , sortDesc[ i ] ] );
                    }
                    return items.sort( sorter );
                }
                return items;
            } );

        this.dataGrid( ).vue( ).methods( ).add( 'applySort' , ( header ) => {
            let index     = this.get( ).sortBy( ).indexOf( header.value );
            let desc      = this.get( ).sortDesc( );
            let direction =  index > -1 ? ( ! desc[ index ] ) : false;
            this.by( header.value , direction ? 'desc' : 'asc' );
        } );

        this.dataGrid( ).vue( ).methods( ).add( 'applySortIcon' , ( header ) => {
            let index     = this.get( ).sortBy( ).indexOf( header.value );
            let desc      = this.get( ).sortDesc( );
            let direction =  index > -1 ? ( ! desc[ index ] ) : false;
            return index > -1 ? desc[ index ] ? 'arrow_drop_down' : 'arrow_drop_up' : '' ;
        } );

        return this;
    }

    by ( field : string , way : 'desc' | 'asc' = 'asc' ) {

        let index = this.$data.sortBy.indexOf( field );

        if( index > -1 ) {
            this.$data.sortDesc[ index ] = way == 'desc' ;
        }
        else {
            this.$data.sortBy.push( field );
            this.$data.sortDesc.push( way == 'desc' );
        }

        this.data(  )
            .set( 'sortBy'   , this.$data.sortBy )
            .set( 'sortDesc' , this.$data.sortDesc )
        ;

        return this;
    }
}