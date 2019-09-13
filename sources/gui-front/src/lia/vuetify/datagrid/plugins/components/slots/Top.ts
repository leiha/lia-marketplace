
import { VueSlot          } from "@lia/vue/Vue-Slot";
import {SlotComponent     } from "./Slot";

export type Scope = {

}

export class TopSlot extends VueSlot < Scope > {

}

export abstract class TopComponent < TTop extends TopSlot = TopSlot >
    extends SlotComponent < TTop >
{
    attach( ) {
        return super.attach( 'top' );
    }
}