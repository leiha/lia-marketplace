
import { Worker }             from './Worker';
import { HeaderProps, Props } from "../../Datagrid-Types";

export class Columns extends Worker
{
    set( columns : Props[ 'headers' ] ) {
        this.vue( ).data( ).$store['headers'] = columns;
        return this;
    }

    add( column : HeaderProps ) {
        // @ts-ignore
        this.vue( ).data( ).get( 'headers' ).push( column );
        return this;
    }

    get( ) {

        let $get     = this;
        let $columns = < HeaderProps[ ] > this.vue( ).data( ).get( 'headers' );

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