
import { Column } from "./Column";
import { Vue }    from "@lia/vue/Vue-Core";

export abstract class ColumnChild < TColumn extends Column = Column >
{
    /**
     * @private
     // @ts-ignore */
    $column : TColumn;

    /**
     * @private
     // @ts-ignore */
    $vNode : Vue;

    
    column( ) {
        return this.$column;
    }

    column$( column : TColumn ) {
        this.$column = column;
        return this;
    }

    dataGrid( ) {
        return this.column( ).dataGrid( );
    }

    end( ) {
        return this.column( );
    }

    vNode$( vNode : ColumnChild['$vNode'] ) {
        this.$vNode = vNode;
        return this;
    }

   abstract vNode( ) : Vue

    build( ) {
        if( ! this.vNode( ).isBuilt( ) ) {
            this.vNode( )
                .methods( ).add( 'config' , ( ) => this.column( ).config( ) )
                .end( );
        }
        return this.vNode( ).build( );
    }
    
}