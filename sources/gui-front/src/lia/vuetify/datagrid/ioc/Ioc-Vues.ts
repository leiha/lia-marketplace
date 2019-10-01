
import { Search } from "../vues/Search";
import { Top    } from "../vues/Top/Top";
import { Menu   } from "../vues/Top/Menu/Menu";

export class IocVues {

    top = {
        $object    : ( ) => ( new Top( ) ) ,
        $singleton : true
    };

    menu = {
        $object    : ( ) => ( new Menu( ) ) ,
        $singleton : true
    };

    search = {
        $object    : ( ) => ( new Search( ) ) ,
        $singleton : true
    }

}