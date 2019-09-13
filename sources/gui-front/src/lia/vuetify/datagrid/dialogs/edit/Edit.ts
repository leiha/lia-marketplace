
import { Data, Events, Props, Slots } from "./Edit-Types";
import { CellComponent, CellSlot }    from "../../Datagrid";

export class EditSlot extends CellSlot < Data , Slots , Props , Events > {

    constructor( $events ?: Events ) {
        super( $events );
        this.template( ).pug( require( './Edit.pug' ) );
    }
}
