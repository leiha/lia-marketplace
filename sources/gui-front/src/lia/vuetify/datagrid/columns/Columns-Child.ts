
import {Columns} from "./Columns";

export abstract class ColumnsChild < TColumns extends Columns = Columns >
{
    /**
     * @private
     // @ts-ignore */
    $columns : TColumns;

    abstract onLoaded( ) : void;
    
    columns( ) {
        return this.$columns;
    }

    columns$( columns : TColumns ) {
        this.$columns = columns;
        return this;
    }

    dataGrid( ) {
        return this.columns( ).dataGrid( );
    }

    end( ) {
        return this.columns( );
    }
    
}