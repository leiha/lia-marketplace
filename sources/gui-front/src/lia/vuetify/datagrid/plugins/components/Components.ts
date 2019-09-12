
import { Plugin } from '@lia/vuetify/datagrid/plugins/Plugin';

import { Search } from "./Search";

export class Components extends Plugin {

    search = {
        $object    : ( ) => new Search( this.$dataGrid ) ,
        $singleton : true
    }

}