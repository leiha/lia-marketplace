
import { DataGrid  } from '@lia/vuetify/datagrid/Datagrid';

export class Plugin {

    constructor ( protected $dataGrid : DataGrid ) {

    }

    protected dataGrid ( ) {
        return this.$dataGrid;
    }

}