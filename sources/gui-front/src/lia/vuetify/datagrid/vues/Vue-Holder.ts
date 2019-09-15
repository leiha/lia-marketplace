
import * as vue              from '@lia/vue/vue';
import { mixins }            from "@lia/core/oop/mixins";
import { DataGridChild }    from "../DataGrid-Child";

export abstract class VueHolder < TVue extends vue.Vue = vue.Vue >
{
    constructor( ) {

    }
}

export interface VueHolder < TVue extends vue.Vue >
    extends vue.VueWorker < TVue > , DataGridChild {

}

mixins( VueHolder , [ vue.VueWorker , DataGridChild ] );