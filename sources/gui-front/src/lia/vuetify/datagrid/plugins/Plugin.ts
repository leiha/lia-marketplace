
import { DataGrid } from '@lia/vuetify/datagrid/Datagrid';
import { Vue } from '@lia/vue/Vue';

export abstract class Plugin < TComponent extends Vue > {

    //@ts-ignore
    $component : TComponent ;

    constructor ( protected $datagrid : DataGrid ) {

    }

    abstract prepare ( ) : TComponent

    build( ) {
        this.$component = this.prepare( );

        return this.$component.build( );
    }
}