
import { Vue , VueFacade }    from '@lia/vue/vue';
import { HeaderProps, Props } from "../Datagrid-Types";
import { CellSlot }           from "../slots/Cell";
import { HeaderSlot }         from "../slots/Head";
import { DataGridChild }      from "../DataGrid-Child";

export class Columns extends DataGridChild
{
    set( columns : Props[ 'headers' ] ) {
        this.data( ).$store['headers'] = columns;
        return this;
    }

    add( column : HeaderProps ) {

        let $this = this;
        let name  = column.value;
        // @ts-ignore
        this.data( ).get( 'headers' ).push( column );
        return {
            customize ( ) {

                let $add = this;

                return {
                    head ( component : Vue|VueFacade ) {
                        ( new HeaderSlot ).vue$( component.vue( ) ).owner( $this.dataGrid( ).vue( ) ).attach( name );
                        return this;
                    } ,
                    cell ( component : Vue|VueFacade ) {
                        ( new CellSlot ).vue$( component.vue( ) ).owner( $this.dataGrid( ).vue( ) ).attach( name );
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
        let $columns = < HeaderProps[ ] > this.data( ).get( 'headers' );

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