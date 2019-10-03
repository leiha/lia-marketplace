
import { Vue , VueFacade }    from '@lia/vue/vue';
import { HeaderProps, Props } from "../Datagrid-Types";
import { CellSlot }           from "../slots/Cell";
import { HeaderSlot }         from "../slots/Head";
import { DataGridChild }      from "../DataGrid-Child";
import {Draggable} from "@lia/vue/directives/Draggable";

export class Columns extends DataGridChild
{
    set( columns : Props[ 'headers' ] ) {
        this.data( ).$store['headers'] = columns;
        return this;
    }

    enableReOrder( ) {

        this.dataGrid( ).vue( )
            .directives( )
            .add( 'sortable-table' , ( new Draggable( ) )
                .inside( ( el : any , binding : any , vnode : any ) => {
                    return ( el.querySelector('thead tr') );
                } )
            );

        this.dataGrid( ).vue( )
            .vOn().add( 'moved' , ( e : any ) => {

                let h = this.dataGrid( ).vue( ).data( ).get( 'headers' );

                // @ts-ignore
                let d = h.splice( e.oldIndex - 1  , 1 );
                // @ts-ignore
                h.splice( e.newIndex - 1  , 0 , d[ 0 ] )
            } );

        return this;
    }

    add( column : HeaderProps ) {

        let col = this.dataGrid( ).plugins( ).get( 'column' )
            .config$( column )
            ;

       this.data( ).get( 'columns' ).push( col );

       return col;

        // return {
        //     customize ( ) {
        //
        //         let $add = this;
        //
        //         return {
        //             head ( component : Vue|VueFacade ) {
        //                 // ( new HeaderSlot ).vue$( component.vue( ) ).owner( $this.dataGrid( ).vue( ) ).attach( name );
        //                 return this;
        //             } ,
        //             cell ( component : Vue|VueFacade ) {
        //                 ( new CellSlot ).vue$( component.vue( ) ).owner( $this.dataGrid( ).vue( ) ).attach( name );
        //                 return this;
        //             } ,
        //             end( ) {
        //                 return $add;
        //             }
        //         }
        //     } ,
        //     end( ) {
        //         return $this;
        //     }
        // };
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