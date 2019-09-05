
import { Vue } from './Vue';
import vue     from "vue";

export let extend = function ( components : Vue[ ] , config : any )
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