
import { DataGridChild } from "../DataGrid-Child";

export class Footer extends DataGridChild
{
    enableDefault( enable : boolean = true ) {
        this.dataGrid( ).vue( ).vBind( )
            .set( 'hideDefaultFooter' , ! enable )
        ;
    }
}