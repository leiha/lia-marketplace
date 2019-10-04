
import { BodySlot }     from "../slots/Body";
import { HeaderSlot }   from "../slots/Header";
import { TopSlot }      from "../slots/Top";
import { CellSlot }     from "../slots/Cell";
import { HeadersSlot }  from "../slots/Headers";

export class IocSlots {

    top = {
        $object    : ( ) => ( new TopSlot( ) ) ,
        $singleton : true
    };

    headers = {
        $object    : ( ) => ( new HeadersSlot( ) ) ,
        $singleton : true
    };

    header = {
        $object    : ( ) => ( new HeaderSlot( ) ) ,
        $singleton : false
    };

    body = {
        $object    : ( ) => ( new BodySlot( ) ) ,
        $singleton : true
    };

    cell = {
        $object    : ( ) => ( new CellSlot( ) ) ,
        $singleton : false
    };

}