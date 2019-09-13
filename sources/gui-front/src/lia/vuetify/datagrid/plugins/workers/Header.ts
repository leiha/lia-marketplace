
import { Worker } from './Worker';
import { Events } from "../../Datagrid-Types";

export class Header extends Worker
{
    enableDefault( enable : boolean = true ) {
        this.dataGrid( ).vue( ).vBind( )
            .add( 'hideDefaultHeader' , ! enable )
        ;
    }
}