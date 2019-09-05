
import { Ioc , IocServicesType } from '@lia/ioc/Ioc';
export { Ioc , IocServicesType }

import vue     from '@lia/vue/vue-Ioc';
import vuetify from '@lia/vuetify/vuetify-Ioc';


class Services implements IocServicesType < Services >
{
    vue     = vue;
    vuetify = vuetify;
}

export default new Ioc < Services > ( new Services( ) );