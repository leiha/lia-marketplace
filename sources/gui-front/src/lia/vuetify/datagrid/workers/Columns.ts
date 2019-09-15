
import { HeaderProps, Props } from "../Datagrid-Types";
import { CellSlot }           from "../slots/Cell";
import { HeadSlot }           from "../slots/Head";
import { DataGridChild }     from "../DataGrid-Child";

export class Columns extends DataGridChild
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
                    head ( component : HeadSlot ) {
                        component.owner( $this.dataGrid( ).vue( ) ).attach( name );
                        return this;
                    } ,
                    cell ( component : CellSlot ) {
                        component.owner( $this.dataGrid( ).vue( ) ).attach( name );
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