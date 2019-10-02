
import { DataGridChild } from "../DataGrid-Child";

export class Header extends DataGridChild
{
    __init() {
        this.dataGrid( ).vue( ).methods( ).add( 'applyHeaderClasses' , ( header ) => {
            let classes = ['column sortable movable' ];
            return classes;
        } );
    }


    enableDefault( enable : boolean = true ) {
        this.vBind( )
            .set( 'hideDefaultHeader' , ! enable )
        ;
    }


}