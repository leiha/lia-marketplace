
import { DataGridChild } from "../DataGrid-Child";
import {HeaderProps} from "@lia/vuetify/datagrid/Datagrid-Types";



export class Header extends DataGridChild
{
    __init() {

        // this.dataGrid( ).vue( ).methods( )
        //     .add( 'applyHeaderClick' , ( header : HeaderProps ) => {
        //         this.$headerCbActions.forEach( ( cb : Function ) => {
        //             cb( header );
        //         } );
        //     } );
        //
        // this.dataGrid( ).vue( ).methods( ).add( 'applyHeaderClasses' , ( header : HeaderAction ) => {
        //     let classes = ['column sortable movable' ];
        //     return classes;
        // } );
    }


    enableDefault( enable : boolean = true ) {
        this.vBind( )
            .set( 'hideDefaultHeader' , ! enable )
        ;
    }


}