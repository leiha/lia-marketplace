
import { ColumnChild } from "./Column-Child";
import { CellNode }    from "./Cell-Node";

export class Cell extends ColumnChild {

    public classes : string[ ] = [ ];

    vNode( ) {
        if( ! this.$vNode ) {
            this.$vNode = ( new CellNode( ) ).name$( 'Cell-'+ this.column( ).name )
        }
        return this.$vNode;
    }

}