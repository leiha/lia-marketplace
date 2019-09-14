
import * as vue              from '@lia/vue/vue';
import { DataGrid }          from "@lia/vuetify/datagrid/Datagrid";
import { VueHolder as Base } from "@lia/vue/Vue-Holder";

export abstract class VueHolder < TVue extends vue.Vue >
    extends Base < TVue >
{
    constructor( ) {
        super( );
    }

    // @ts-ignore
    private $dataGrid : DataGrid;

    dataGrid( ) {
        return this.$dataGrid;
    }

    dataGrid$( dataGrid : DataGrid ) {
        this.$dataGrid = dataGrid;
        return this;
    }
}