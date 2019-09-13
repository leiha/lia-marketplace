
import { VueSlot          } from "@lia/vue/Vue-Slot";
import { HeaderProps      } from "../../../Datagrid-Types";
import { SlotComponent    } from "@lia/vuetify/datagrid/plugins/components/slots/Slot";
import {Data, Events, Props, Slots} from "@lia/vue/Vue";

export type Scope = {
    item   : { [ k : string ] : any }
    header : HeaderProps
    value  : any
}

export class CellSlot <
    TData   extends Data   = Data ,
    TSlots  extends Slots  = Slots ,
    TProps  extends Props  = Props ,
    TEvents extends Events = Events
    > extends VueSlot < Scope , TData , TSlots , TProps , TEvents > {


}

export abstract class CellComponent < TCell extends CellSlot = CellSlot >
    extends SlotComponent < TCell >
{
    attach( name: string ) {
        return super.attach( 'item.'+ name );
    }
}