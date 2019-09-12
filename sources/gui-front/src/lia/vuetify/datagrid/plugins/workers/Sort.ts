
import { Worker  } from './Worker';
import { Events  } from "../../Datagrid-Types";
import { firstBy } from "thenby";

export class Sort extends Worker
{
    on < T extends 'update:sort-by' | 'update:sort-desc' >
    ( name : T ,  cb : Events[ T ] ) {
        this.vue( ).vOn( )
            .add( name , cb )
            ;

        return this;
    }

    get ( ) {

    }

    disable ( ) {
        this.vue( ).vBind( )
            .add( 'disableSort' , true )
            ;

        return this.end( );
    }

    enable ( multiple : boolean = false ) {
        this.vue( ).vBind( )
            .add( 'disableSort' , false     )
            .add( 'sortBy'      , [ ]       )
            .add( 'multiSort'   , multiple  )
            .add( 'sortDesc'    , [ ]       )
            .add( 'customSort'  , (
                items         : any[ ] ,
                sortBy        : string[ ] ,
                sortDesc      : boolean[ ],
                locale        : string,
                customSorters : Record< string , Function > | undefined
            ) : any => {

                console.log( this.vue().data().get( 'options' ) )

                if( sortBy.length ) {
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
        this.vue( ).vBind( )
            .add( 'sortBy'   , field )
            .add( 'sortDesc' , way == 'asc' )
        ;

        return this;
    }
}