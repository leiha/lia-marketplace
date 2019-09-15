
import { DataGridChild } from "../DataGrid-Child";

export class Header extends DataGridChild
{
    enableDefault( enable : boolean = true ) {
        this.dataGrid( ).vue( ).vBind( )
            .set( 'hideDefaultHeader' , ! enable )
        ;
    }
}