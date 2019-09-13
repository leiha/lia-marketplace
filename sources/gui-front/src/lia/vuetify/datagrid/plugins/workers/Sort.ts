
import { Worker  } from './Worker';
import { Events  } from "../../Datagrid-Types";
import { firstBy } from "thenby";

export class Sort extends Worker
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
        this.dataGrid( ).vue( ).vBind( )
            .add( 'disableSort' , true )
            ;

        return this.end( );
    }

    enable ( multiple : boolean = false ) {
        this.dataGrid( ).vue( ).vBind( )
            .add( 'disableSort' , false )
            .add( 'sortBy'      , this.$data.sortBy )
            .add( 'multiSort'   , multiple    )
            .add( 'sortDesc'    , this.$data.sortDesc )
            .add( 'customSort'  , (
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

        return this;
    }

    by ( field : string , way : 'desc' | 'asc' = 'asc' ) {
        if( this.$data.sortBy.indexOf( field ) < 0 ){
            this.$data.sortBy.push( field );
            this.$data.sortDesc.push( way == 'asc' );
            this.dataGrid( ).vue( ).vBind( )
                .push( 'sortBy'   , this.$data.sortBy )
                .push( 'sortDesc' , this.$data.sortDesc )
            ;
        }
        return this;
    }
}