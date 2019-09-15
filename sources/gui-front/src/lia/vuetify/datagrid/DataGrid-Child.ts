
import { DataGrid } from "./Datagrid";

export abstract class DataGridChild < TDataGrid extends DataGrid = DataGrid >
{
    // @ts-ignore
    protected $dataGrid : TDataGrid;

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

    workers( ) {
        return this.$dataGrid.plugins( ).get( 'workers' );
    }

    components( ) {
        return this.$dataGrid.plugins( ).get( 'components' );
    }
    
}