
import ico     from '@plugins/lia.ioc'
import { Facade } from '@lia/vue/Vue';
import { Data, Props, Slots, Events, HeaderProps } from './Datagrid-Types';
import { Search } from './plugins/Search';

export class DataGrid extends Facade < Data , Slots , Props , Events > {

    constructor( ) {
        super( );

        this.$vue.template( ).pug( require( './DataGrid.pug' ) );

        this.$vue.vBind( )
            .add( 'headers' , [ ] )
            .add( 'items'   , [ ] )
            ;
    }

    columns( ) {

        let $this    = this;
        let $vue     = this.$vue;
        let $columns = < HeaderProps[ ] > $vue.data( ).get( 'headers' );

        return {
            set( columns : Props[ 'headers' ] ) {
                $vue.data( ).$store['headers'] = columns;
                return this;
            },
            add( column : HeaderProps ) {
                $columns.push( column );
                return this;
            },
            get( ) {

                let $get = this;

                return {
                    byIndex( index : number ) {
                        return $columns[ index ] || null;
                    },
                    byValue( value : any , key : keyof HeaderProps = 'value' ) : HeaderProps {
                        // @ts-ignore
                        let col : HeaderProps = null;
                        $columns.forEach( ( column : HeaderProps ) => {
                            if( column[ key ] != value ) {
                                col = column;
                            }
                        } );
                        return col;
                    },
                    all( ) {
                        return $columns;
                    },
                    end( ) {
                        return $get;
                    }
                };
            },
            end( ) {
                return $this;
            }
        }
    }

    header( ) {

        let $this = this;
        let $vue  = this.$vue;

        return {
            enableDefault( enable : boolean = true ) {
                $vue.vBind( )
                    .add( 'hideDefaultHeader' , ! enable )
                ;
            },
            end( ) {
                return $this;
            }
        }
    }

    footer( ) {

        let $this = this;
        let $vue  = this.$vue;

        return {
            enableDefault( enable : boolean = true ) {
                $vue.vBind( )
                    .add( 'hideDefaultFooter' , ! enable )
                ;
            },
            end( ) {
                return $this;
            }
        }
    }

    items( ) {

        let $this  = this;
        let $vue   = this.$vue;
        let $items = < any[ ] > $vue.data( ).get( 'items' );

        return {
            add( ) {

                let $add = this;

                return {
                    one( item : any ) {
                        $items.push( item );
                        return this;
                    },
                    many( items : any[ ] ) {
                        items.forEach( ( item : any ) => this.one( item ) );
                        return this;
                    },
                    end( ) {
                        return $add;
                    }
                };
            },
            set( ) {

                let $set = this;

                return {
                    byIndex( item : any , index : number ) {
                        $items[ index ] = item;
                        return this;
                    },
                    byValue( item : any , value : any , key : string = 'id' ) {
                        $items.forEach( ( item : any , index : number ) => {
                            if( item[ key ] == value ) {
                                this.byIndex( item , index );
                            }
                        } );
                        return this;
                    },
                    all( items : Props[ 'items' ] ) {
                        $vue.data( ).$store['items'] = items;
                        return this;
                    },
                    end( ) {
                        return $set;
                    }
                };
            },
            get( ) {

                let $get = this;

                return {
                    byIndex( index : number ) {
                        return $items[ index ] || null;
                    },
                    byValue( value : any , key : string = 'id' ) : any[ ] {
                        return $items.filter( ( item : any ) => item[ key ] == value );
                    },
                    all( ) {
                        return $items;
                    },
                    end( ) {
                        return $get;
                    }
                };
            },
            rm( ) {

                let $rm = this;

                return {
                    byIndex( index : number , limit : number = 1 ) {
                        $items.splice( index , limit );
                        return this;
                    },
                    byValue( value : any , key : string = 'id' ) {
                        $vue.data( ).$store['items'] = $items.filter( ( item : any ) => item[ key ] != value );
                        return this;
                    },
                    all( ) {
                        $vue.data( ).$store['items'] = [ ];
                        return this;
                    },
                    end( ) {
                        return $rm;
                    }
                };
            },
            end( ) {
                return $this;
            }
        }

    }

    search( ) {

        let $this   = this;
        let $vue    = this.$vue;
        let $search = $vue.data( ).get( 'search' );

        return {
            get ( ) {
                return $search;
            },
            set ( $search : Props[ 'search' ] ) {
                $vue.vBind( ).set( 'search' , $search );
                return this;
            },
            disable( ) {
                $vue.vBind( ).add( 'disableFiltering' , true );
                return this;
            },
            enable( ) {
                $vue.vBind( )
                    .add( 'disableFiltering' , false )
                    .add( 'search' , '' )
                    ;

                $vue.lifeCycle( ).subscribe( 'built' , ( ) => {
                    $vue.slot( ).add( 'top' , { component : ( new Search( $this ) ).build( ) } )
                } );

                return this;
            },
            custom( cb : any ) {
                $vue.vBind( )
                    .add( 'customFilter' , cb )
                    ;
            },
            end( ) {
                return $this;
            }
        }
    }

    sort( ) {

        let $this = this;
        let $vue  = this.$vue;

        return {
            on < T extends 'update:sort-by' | 'update:sort-desc' >
                ( name : T ,  cb : Events[ T ] ) {
                    $vue.vOn( )
                        .add( name , cb )
                        ;

                    return this;
            },
            get ( ) {

            },
            disable : ( ) => {
                $vue.vBind( )
                    .add( 'disableSort' , true )
                    ;

                return this;
            },
            enable ( multiple : boolean = false ) {
                $vue.vBind( )
                    .add( 'disableSort' , false     )
                    .add( 'sortBy'      , [ ]       )
                    .add( 'multiSort'   , multiple  )
                    .add( 'sortDesc'    , [ ]       )
                    ;

                return this;
            },
            by ( field : string , way : 'desc' | 'asc' = 'asc' ) {
                $vue.vBind( )
                    .add( 'sortBy'   , field )
                    .add( 'sortDesc' , way == 'asc' )
                    ;

                return this;
            } ,
            end( ) {
                return $this;
            }
        }
    }

    selection( )
    {
        let $this     = this;
        let $vue      = this.$vue;
        let $selected = < any[ ] > $vue.data( ).get( 'value' );

        return {
            on < T extends 'input' | 'item-selected' >
                ( name : T ,  cb : Events[ T ] ) {
                    $vue.vOn( ).add( name , cb );
                    return this;
            },
            get ( ) {
                return $selected;
            },
            disable ( ) {
                $vue.vBind( )
                    .add( 'showSelect'   , false )
                    .add( 'value'        , [ ]   )
                    .add( 'singleSelect' , false )
                    ;

                return this;
            },
            enable ( single : boolean = false ) {
                $vue.vBind( )
                    .add( 'showSelect'   , true   )
                    .add( 'value'        , [ ]    )
                    .add( 'singleSelect' , single )
                    ;

                return this;
            },
            end( ) {
                return $this;
            }
        };
    }
}