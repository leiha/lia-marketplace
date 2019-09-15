
import { Search } from "../vues/Search";

export class IocVues {

    search = {
        $object    : ( ) => ( new Search( ) ) ,
        $singleton : true
    }

}