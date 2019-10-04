
import { ColumnChild }  from "./Column-Child";
import { HeaderNode }   from "./Header-Node";
import { Events }       from "@lia/core/async/Events";

export class Header extends ColumnChild {

    private $actions = new Events( { 'click' : [ ] } );

    actions( ) {
        return this.$actions;
    }

    vNode( ) {
        if( ! this.$vNode ) {
            this.$vNode = ( new HeaderNode( ) )
                .name$( 'Head-'+ this.column( ).name )
                .methods( )
                    .add( 'click' , ( ) => this.actions( ).fire( 'click' ) )
                    .end( );
        }
        return this.$vNode;
    }
}