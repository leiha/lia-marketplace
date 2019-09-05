
import * as iocs from '@lia/ioc/Ioc-Simple';

import { DataGrid } from '@lia/vuetify/datagrid/Datagrid';

class Columns implements iocs.IocServicesType < Columns >
{

}

class Services implements iocs.IocServicesType < Services >
{
    grid = {
        $object    : ( ) => new DataGrid ,
        $singleton : false
    };

    columns = {
        $object    : ( ) => new iocs.Ioc < Columns > ( new Columns ) ,
        $singleton : true
    };

}

export default new iocs.Ioc < Services > ( new Services );