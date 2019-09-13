
import { Vue             } from '@lia/vue/Vue';
import { ComponentPlugin } from "../../../plugins/components/Component";

export abstract class SlotComponent < TComponent extends Vue >
    extends ComponentPlugin < TComponent > {

    attach( name : string ) {
        this.dataGrid( ).vue( ).lifeCycle( ).subscribe( 'built' , ( ) => {
            // @ts-ignore
            this.dataGrid( ).vue( ).slot( ).add( name ,{ component : this } );
        } );
    }
}