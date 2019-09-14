
import { Plugin } from "../Plugin";

export abstract class Worker extends Plugin {

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