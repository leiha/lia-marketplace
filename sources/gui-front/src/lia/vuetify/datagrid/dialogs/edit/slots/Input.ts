
import { VueSlot          } from "@lia/vue/Vue-Slot";
import { SlotComponent    } from "./Slot";
import {Data, Events, Props, Slots} from "@lia/vue/Vue";

export type Scope = {

}

export class InputSlot <
    TData   extends Data   = Data ,
    TSlots  extends Slots  = Slots ,
    TProps  extends Props  = Props ,
    TEvents extends Events = Events
    > extends VueSlot < Scope , TData , TSlots , TProps , TEvents > {

}

export abstract class InputComponent < TSlot extends InputSlot = InputSlot >
    extends SlotComponent < TSlot >
{

}