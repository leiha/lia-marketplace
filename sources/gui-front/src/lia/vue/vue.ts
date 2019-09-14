
import vue           from "vue";
import { VueFacade } from "./Vue-Facade";
import { VueHolder } from "@lia/vue/Vue-Holder";
import { VueSlot , VueSlotFacade } from "./Vue-Slot";
import { Vue , Data , Props , Events , LifeCycle , Slots , Slot } from "./Vue-Core";

export {
    Vue     , VueFacade , VueHolder ,
    VueSlot , VueSlotFacade , Slot , Slots ,
    Data , Props , Events , LifeCycle ,
}

export let extend = function (components : Vue[ ] , config : any )
{
    config.components = { };
    components.forEach( ( c ) => {
        config.components[ c.name( ) ] = c.build( );
    } );

    return {
        vue   ( ) { return vue.extend( config ); },
        debug ( ) {
            let debug : { [ k : string ] : Vue } = { };
            Object.keys( config.components ).forEach( ( name : string , i : number ) => {
                //@ts-ignore
                debug[ name ] = components[ i ].$component;
            } );

            console.log( debug );

            return this.vue( );
        }
    };
};