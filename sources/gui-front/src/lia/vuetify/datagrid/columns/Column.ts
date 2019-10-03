
import { HeaderProps   } from "../Datagrid-Types";
import { Header }        from "./Header";
import { Cell }          from "./Cell";
import { ColumnsChild }  from "./Columns-Child";


export class Column extends ColumnsChild {

    // @ts-ignore
    protected $header : Header;

    // @ts-ignore
    protected $cell   : Cell;

    constructor ( public name : string) {
        super( );
    }

    onLoaded ( ) {
        this.dataGrid( ).sort( )
            .get( ).sortBy( ).forEach( ( name ) => {

                if( this.name == name ) {
                    this.config( )
                }

            } );
    };

    icons ( ) {

        let $this   = this;
        let $config = this.config( );

        return {

            add (  name : string , value : string ) {
                // @ts-ignore
                $config.icons[ name ] = value;
                return this;
            } ,

            end( ) {
                return $this;
            }
        }
    }

    classes ( ) {

        let $this   = this;
        let $config = this.config( );

        return {

            add (  name : string ) {
                // @ts-ignore
                if ( $config.classes.indexOf( name ) === -1 ) {
                    // @ts-ignore
                    $config.classes.push( name );
                }
                return this;
            } ,

            end( ) {
                return $this;
            }
        }
    }

    public config( ) {
        return this.columns( ).config( ).get( ).byValue( this.name );
    }

    public header ( ) {
        if( ! this.$header ) {
            this.$header = ( new Header( ) )
                .column$( this )
                ;
        }
        return this.$header;
    }

    public cell ( ) {
        if( ! this.$cell ) {
            this.$cell = ( new Cell( ) )
                .column$( this )
                ;
        }
        return this.$cell;
    }









}