
import { Promises , PromiseType } from '../async/Promises';

export class Events < TEvents >
{
    protected $registry : { [ k : string ] : PromiseType[ ] } = { };

    constructor( protected $events ?: TEvents ) {
        this.reset( );
    }

    reset ( ) {
        this.$registry = { };
        if ( this.$events ) {
            Object.keys( this.$events ).forEach( ( event : string ) => {
                // @ts-ignore
                this.$registry[ event ] = Array.isArray( this.$events[ event ] ) ? this.$events[ event ] : [ ] ;
            } );
        }
    }

    fire ( event : keyof TEvents ) {

        let p = new Promises( );

        // @ts-ignore
        if( this.$registry[ event ] ) {
            // @ts-ignore
            p.add( ).many( this.$registry[ event ] );
        }
        return p.all( );
    }

    subscribe ( event : keyof TEvents , cb : Function ) {

        // @ts-ignore
        if( ! this.$registry[ event ] ) this.$registry[ event ] = [ ];

        // @ts-ignore
        let length = this.$registry[ event ].push( cb );

        return {
            unsubscribe : ( ) => {
                // @ts-ignore
                this.$registry[ event ].splice( length - 1 , 1 );
                return this;
            }
        };
    }
}