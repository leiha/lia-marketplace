
import { DataGrid } from "./DataGrid-Grid";

export abstract class DataGridChild < TDataGrid extends DataGrid = DataGrid >
{
    /**
     * @private
     // @ts-ignore */
    $dataGrid : TDataGrid;

    dataGrid( ) {
        return this.$dataGrid;
    }

    dataGrid$( dataGrid : TDataGrid ) {
        this.$dataGrid = dataGrid;
        return this;
    }

    end( ) {
        return this.$dataGrid;
    }

    vBind( ) {
        return this.dataGrid( ).vue( ).vBind( );
    }

    data( ) {
        return this.dataGrid( ).vue( ).data( );
    }

    workers( ) {
        return this.dataGrid( ).plugins( ).get( 'workers' );
    }

    components( ) {
        return this.dataGrid( ).plugins( ).get( 'components' );
    }
    
}