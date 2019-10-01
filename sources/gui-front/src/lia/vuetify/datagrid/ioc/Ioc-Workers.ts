
import { Search     } from "../workers/Search";
import { Sort       } from "../workers/Sort";
import { Selection  } from "../workers/Selection";
import { Items      } from "../workers/Items";
import { Columns    } from "../workers/Columns";
import { Header     } from "../workers/Header";
import { Footer     } from "../workers/Footer";
import { Pagination } from "../workers/Pagination";
import {Menu} from "@lia/vuetify/datagrid/workers/Menu";

export class IocWorkers {

    search = {
        $object    : ( ) => new Search( ) ,
        $singleton : true
    };

    menu = {
        $object    : ( ) => new Menu( ) ,
        $singleton : true
    };

    sort = {
        $object    : ( ) => new Sort( ) ,
        $singleton : true
    };

    selection = {
        $object    : ( ) => new Selection( ) ,
        $singleton : true
    };

    items = {
        $object    : ( ) => new Items( ) ,
        $singleton : true
    };

    columns = {
        $object    : ( ) => new Columns( ) ,
        $singleton : true
    };

    header = {
        $object    : ( ) => new Header( ) ,
        $singleton : true
    };

    footer = {
        $object    : ( ) => new Footer( ) ,
        $singleton : true
    };

    pagination = {
        $object    : ( ) => new Pagination( ) ,
        $singleton : true
    };

}