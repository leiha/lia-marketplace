
import { Worker } from './Worker';
import { Events } from "../../Datagrid-Types";

export class Header extends Worker
{
    enableDefault( enable : boolean = true ) {
        this.vue( ).vBind( )
            .add( 'hideDefaultHeader' , ! enable )
        ;
    }
}