
import { DataGridChild } from "../DataGrid-Child";

export class Menu extends DataGridChild
{
    disable( ) {
        return this;
    }

    enable( ) {
        this.components( ).get( 'top' )
            .item( this.components( ).get( 'menu' ) )
            ;

        return this;
    }
}