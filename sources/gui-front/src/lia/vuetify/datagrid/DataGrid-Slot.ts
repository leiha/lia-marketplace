
import * as vue              from '@lia/vue/vue';
import * as vueSlot          from '@lia/vue/Vue-Slot';
import { mixins }            from "@lia/core/oop/mixins";
import { DataGridChild }     from "./DataGrid-Child";

export abstract class DataGridSlot < TScope , TVue extends vue.Vue = vue.Vue >
    extends vueSlot.VueSlotHolder < TScope , TVue >
{

}

export interface DataGridSlot < TScope , TVue extends vue.Vue >
    extends vue.VueWorker < TVue > , DataGridChild {

}

mixins( DataGridSlot , [ vue.VueWorker , DataGridChild ] );