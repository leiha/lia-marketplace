
import { VueSlot          } from "@lia/vue/Vue-Slot";
import { HeaderProps      } from "../../../Datagrid-Types";
import { SlotComponent    } from "./Slot";

export type Scope = {
    header : HeaderProps
}

export class HeadSlot extends VueSlot < Scope > {

}

export abstract class HeadComponent < THead extends HeadSlot = HeadSlot >
    extends SlotComponent < THead >
{
    attach( name: string ) {
        return super.attach( 'header.'+ name );
    }
}