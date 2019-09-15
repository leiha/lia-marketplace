
import * as ioc        from '@lia/core/ioc/Ioc-Simple';
import { IocWorkers }  from "./Ioc-Workers";
import { IocVues }     from "./Ioc-Vues";

export class Services implements ioc.IocServicesType < Services >
{
    workers = {
        $object    : ( ) => new ioc.Ioc < IocWorkers > ( new IocWorkers( ) ) ,
        $singleton : true

    };

    components = {
        $object    : ( ) => new ioc.Ioc < IocVues > ( new IocVues( ) ) ,
        $singleton : true
    };

}

export class Ioc extends ioc.Ioc < Services > {

    constructor ( ) {
        super( new Services );
    }

}

export default new Ioc;