
import { HeaderProps, Props } from "../Datagrid-Types";
import { DataGridChild }      from "../DataGrid-Child";
import { Column }             from "./Column";

import { merge }         from "lodash"
import {HeadersSlot} from "@lia/vuetify/datagrid/slots/Headers";
import {HeadersNode} from "@lia/vuetify/datagrid/columns/Headers-Node";

export class Columns extends DataGridChild
{
    private $workers : Column[ ] = [ ];

    onLoaded ( ) {

        ( new HeadersSlot( ) )
            .owner( this.dataGrid( ) )
            .vue$ ( ( new HeadersNode( ) )
                .methods( ).add( 'component' , ( header : string ) => {
                    let h = this.worker( ).get( ).byName( header );
                    if( h ) {
                        return h.header( )
                    }
                } ).end( ) )
            .attach( );

    }

    column( name : string ) {
        let col = new Column( <string>name ).columns$( this );
        this.config( ).push( { value : name , icons : { sort : '' } , classes : [ ] } );
        this.$workers.push( col );
        col.onLoaded( );
        return col;
    }

    worker( ) {

        let $this    = this;
        let $columns = this.$workers;
        return {
            end( ) {
                return $this;
            } ,
            push( config : Column ) {
                $columns.push( config )
            } ,
            get ( ) {
                let $get = this;

                return {
                    byIndex( index : number ) {
                        return $columns[ index ] || null;
                    },
                    byName( name : any ) : Column {
                        // @ts-ignore
                        let col : Column = null;
                        $columns.forEach( ( column : Column ) => {
                            if( column.name == name ) {
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
    }

    config( ) {

        let $this    = this;
        let $columns = < HeaderProps[ ] > this.data( ).get( 'headers' );
        return {
            end( ) {
                return $this;
            } ,
            push( config : HeaderProps ) {
                $columns.push( config )
            } ,
            get ( ) {
                let $get = this;

                return {
                    byIndex( index : number ) {
                        return $columns[ index ] || null;
                    },
                    byValue( value : any , key : keyof HeaderProps = 'value' ) : HeaderProps {
                        // @ts-ignore
                        let col : HeaderProps = null;
                        $columns.forEach( ( column : HeaderProps ) => {
                            if( column[ key ] == value ) {
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
    }
}