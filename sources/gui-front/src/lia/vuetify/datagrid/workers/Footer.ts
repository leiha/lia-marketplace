
import { DataGridChild } from "../DataGrid-Child";

export class Footer extends DataGridChild
{
    enableDefault( enable : boolean = true ) {
        this.vBind( )
            .set( 'hideDefaultFooter' , ! enable )
        ;
    }
}