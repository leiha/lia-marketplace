
import { HeaderProps , Props } from "../Datagrid-Types";
import { DataGridChild }      from "../DataGrid-Child";

export class Items extends DataGridChild
{
    add( ) {

        let $this  = this;
        let $items = < any[ ] > this.dataGrid( ).vue( ).data( ).get( 'items' );

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
                return $this;
            }
        };
    }

    set( ) {

        let $this  = this;
        let $items = < any[ ] > this.dataGrid( ).vue( ).data( ).get( 'items' );

        return {
            byIndex( index : number , item : any ) {
                $items[ index ] = item;
                return this;
            },
            byValue( value : any , item : any , key : string = 'id' ) {
                $items.forEach( ( item : any , index : number ) => {
                    if( item[ key ] == value ) {
                        this.byIndex( item , index );
                    }
                } );
                return this;
            },
            all( items : Props[ 'items' ] ) {
                $this.dataGrid( ).vue( ).data( ).$store['items'] = items;
                return this;
            },
            end( ) {
                return $this;
            }
        };
    }

    get( ) {

        let $this  = this;
        let $items = < any[ ] > this.dataGrid( ).vue( ).data( ).get( 'items' );

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
                return $this;
            }
        };
    }

    rm( ) {

        let $this  = this;
        let $items = < any[ ] > this.dataGrid( ).vue( ).data( ).get( 'items' );

        return {
            byIndex( index : number , limit : number = 1 ) {
                $items.splice( index , limit );
                return this;
            },
            byValue( value : any , key : string = 'id' ) {
                $this.dataGrid( ).vue( ).data( ).$store['items'] = $items.filter( ( item : any ) => item[ key ] != value );
                return this;
            },
            all( ) {
                $this.dataGrid( ).vue( ).data( ).$store['items'] = [ ];
                return this;
            },
            end( ) {
                return $this;
            }
        };
    }
}