
import { Plugin    } from '../Plugin';
import { Search    } from "./Search";
import { Sort      } from "./Sort";
import { Selection } from "./Selection";
import { Items     } from "./Items";
import { Columns   } from "./Columns";
import { Header    } from "./Header";
import { Footer    } from "./Footer";

export class Workers extends Plugin {

    search = {
        $object    : ( ) => new Search( this.$dataGrid ) ,
        $singleton : true
    };

    sort = {
        $object    : ( ) => new Sort( this.$dataGrid ) ,
        $singleton : true
    };

    selection = {
        $object    : ( ) => new Selection( this.$dataGrid ) ,
        $singleton : true
    };

    items = {
        $object    : ( ) => new Items( this.$dataGrid ) ,
        $singleton : true
    };

    columns = {
        $object    : ( ) => new Columns( this.$dataGrid ) ,
        $singleton : true
    };

    header = {
        $object    : ( ) => new Header( this.$dataGrid ) ,
        $singleton : true
    };

    footer = {
        $object    : ( ) => new Footer( this.$dataGrid ) ,
        $singleton : true
    };

}