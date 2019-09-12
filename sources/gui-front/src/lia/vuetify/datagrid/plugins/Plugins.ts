
import * as ioc       from "@lia/ioc/Ioc-Simple";
import { Plugin     } from './Plugin';
import { Workers    } from './workers/Workers';
import { Components } from './components/Components';

export class Plugins
    extends Plugin
    implements ioc.IocServicesType < Plugins >
{
    workers = {
        $object    : ( ) => new ioc.Ioc < Workers > ( new Workers( this.$dataGrid ) ) ,
        $singleton : true

    };

    components = {
        $object    : ( ) => new ioc.Ioc < Components > ( new Components( this.$dataGrid ) ) ,
        $singleton : true
    };
}