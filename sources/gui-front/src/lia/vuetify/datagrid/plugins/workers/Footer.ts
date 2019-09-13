
import { Worker } from './Worker';
import { Events } from "../../Datagrid-Types";

export class Footer extends Worker
{
    enableDefault( enable : boolean = true ) {
        this.dataGrid( ).vue( ).vBind( )
            .add( 'hideDefaultFooter' , ! enable )
        ;
    }
}