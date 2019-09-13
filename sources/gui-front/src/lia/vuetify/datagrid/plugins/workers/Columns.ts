
import { Worker }             from './Worker';
import { HeaderProps, Props } from "../../Datagrid-Types";
import { CellComponent }      from "../components/slots/Cell";
import { HeadComponent }      from "../components/slots/Head";

export class Columns extends Worker
{
    set( columns : Props[ 'headers' ] ) {
        this.dataGrid( ).vue( ).data( ).$store['headers'] = columns;
        return this;
    }

    add( column : HeaderProps ) {

        let $this = this;
        let name  = column.value;
        // @ts-ignore
        this.dataGrid( ).vue( ).data( ).get( 'headers' ).push( column );
        return {
            customize ( ) {

                let $add = this;

                return {
                    head ( component : HeadComponent ) {
                        component.attach( name );
                        return this;
                    } ,
                    cell ( component : CellComponent ) {
                        component.attach( name );
                        return this;
                    } ,
                    end( ) {
                        return $add;
                    }
                }
            } ,
            editable ( ) {

                let $add = this;

                return {
                    enable ( component : CellComponent ) {
                        component.attach( name );
                        return this;
                    } ,
                    end( ) {
                        return $add;
                    }
                }
            } ,
            end( ) {
                return $this;
            }
        };
    }

    get( ) {

        let $get     = this;
        let $columns = < HeaderProps[ ] > this.dataGrid( ).vue( ).data( ).get( 'headers' );

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
    }
}