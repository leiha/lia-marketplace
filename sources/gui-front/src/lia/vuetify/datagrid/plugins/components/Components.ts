
import { Plugin          } from '../Plugin';
import { SearchComponent } from "./Search";

export class Components extends Plugin {

    search = {
        $object    : ( ) => new SearchComponent( this.$dataGrid ) ,
        $singleton : true
    }

}