
import ico     from '@plugins/lia.ioc'
import { Vue } from '@lia/vue/Vue';
import { Data , Props , Slots , Events } from '@lia/vuetify/datagrid/Datagrid-Types';
import { Search } from '@lia/vuetify/datagrid/plugins/Search';

export class DataGrid extends Vue < Data , Slots , Props , Events > {

    constructor( ) {
        super( );
        this.template( ).pug( require( './DataGrid.pug' ) );

        this.selection( ).enable( );
        this.search   ( ).enable( );
        this.sort     ( ).enable( ).by( 'id' )
            .events( )
                .change( ( v ) => console.log( v ) )
                .desc( ( v ) => console.log( v ) )
        ;

        this.vBind( ).add( 'headers' , [
            {
                text  : 'sqdsqdqdssdqdq',
                value : 'id'
            }
        ] );

        this.vBind( ).add( 'items' , [
            { id : 1 , name : 'toto' }
        ] );
    }

    enableDefaultHeader( enable : boolean = true ) {
        this.vBind( )
            .add( 'hideDefaultHeader' , ! enable )
            ;
    }

    enableDefaultFooter( enable : boolean = true ) {
        this.vBind( )
            .add( 'hideDefaultFooter' , ! enable )
            ;
    }

    search( ) {
        let $this = this;
        return {
            disable : ( ) => {
                this.vBind( ).add( 'disableFiltering' , true );
                return this;
            },
            enable ( ) {
                $this.vBind( )
                    .add( 'disableFiltering' , false )
                    .add( 'search' , '' )
                    ;

                $this.lifeCycle( ).subscribe( 'built' , ( ) => {
                    $this.slot( ).add( 'top' , { component : ( new Search( $this ) ).build( ) } )
                } );

                return this;
            },
            custom ( cb : any ) {
                $this.vBind( ).add( 'customFilter' , cb );
            },
            // events( ) {
            //     let $this2 = this;
            //     return {
            //
            //     }
            // },
            end( ) {
                return $this;
            }
        }
    }

    sort( ) {
        let $this = this;
        return {
            disable : ( ) => {
                this.vBind( ).add( 'disableSort' , true );
                return this;
            },
            enable ( multiple : boolean = false ) {
                $this.vBind( )
                    .add( 'disableSort' , false     )
                    .add( 'sortBy'      , [ ]       )
                    .add( 'multiSort'   , multiple  )
                    .add( 'sortDesc'    , [ ]       )
                    ;
                return this;
            },
            by ( field : string , way : 'desc' | 'asc' = 'asc' ) {
               $this.vBind( ).add( 'sortBy'   , field );
               $this.vBind( ).add( 'sortDesc' , way == 'asc' );
               return this;
            } ,
            events( ) {
                let $this2 = this;
                return {
                    change ( cb : Events[ 'update:sort-by' ] ) {
                        $this.vOn( ).add( 'update:sort-by' , cb );
                        return this;
                    },
                    desc ( cb : Events[ 'update:sort-desc' ] ) {
                        $this.vOn( ).add( 'update:sort-desc' , cb );
                        return this;
                    },
                    end( ) {
                        return $this2;
                    }
                }
            },
            end( ) {
                return $this;
            }
        }
    }

    selection( )
    {
        let $this = this;
        return {
            disable : ( ) => {
                this.vBind( )
                    .add( 'showSelect'   , false )
                    .add( 'value'        , [ ]   )
                    .add( 'singleSelect' , false )
                    ;
                return this;
            },
            enable ( single : boolean = false ) {
                $this.vBind( )
                    .add( 'showSelect'   , true   )
                    .add( 'value'        , [ ]    )
                    .add( 'singleSelect' , single )
                    ;
                return this;
            },
            events( ) {
                let $this2 = this;
                return {
                    change ( cb : Events[ 'input' ] ) {
                        $this.vOn( ).add( 'input' , cb );
                        return this;
                    },
                    selectOne ( cb : Events[ 'item-selected' ] ) {
                        $this.vOn( ).add( 'item-selected' , cb );
                        return this;
                    },
                    end( ) {
                        return $this2;
                    }
                }
            },
            end( ) {
                return $this;
            }
        };
    }
}