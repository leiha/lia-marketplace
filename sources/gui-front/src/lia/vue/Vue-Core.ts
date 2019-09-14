

import * as events           from '../async/Events';
import * as o                from "../$object/$Object";

import { VueBuilder , Slot } from './Vue-Builder';

export { Slot }

export class LifeCycle
{
    built         : Function[] = [];
    beforeCreate  : Function[] = [];
    created       : Function[] = [];
    beforeMount   : Function[] = [];
    mounted       : Function[] = [];
    beforeUpdate  : Function[] = [];
    updated       : Function[] = [];
    beforeDestroy : Function[] = [];
    destroyed     : Function[] = [];
}

export class Events extends o.Events {

}

export interface Props {

}

export interface Slots {

}


export interface Data {

}

export class Vue <
    TData   extends Data   = Data  ,
    TSlots  extends Slots  = Slots ,
    TProps  extends Props  = Props ,
    TEvents extends Events = Events
    > extends o.$Object < TEvents >
{
    private $lifeCycle = new events.Events < LifeCycle > ( ) ;
    protected $component : VueBuilder  < TData , TSlots , TProps , TEvents , Vue < TData , TSlots , TProps , TEvents > > ;

    constructor( $events ?: TEvents ) {
        super( $events );
        this.$component = new VueBuilder ( this );
        this.methods( )
            .add( 'console' , ( value : any ) => console.log( value ) )
        ;
    }

    lifeCycle( ) {
        return this.$lifeCycle;
    }

    build( ) {
        return this.$component.build( );
    }

    template ( ) {
        return this.$component.template( );
    }

    computed   < TType = CallableFunction > ( ) { return this.$component.object < TType > ( '$computed'   ); }
    methods    < TType = CallableFunction > ( ) { return this.$component.object < TType > ( '$methods'    ); }
    watches    < TType = CallableFunction > ( ) { return this.$component.object < TType > ( '$watches'    ); }
    components < TType = CallableFunction > ( ) { return this.$component.object < TType > ( '$components' ); }
    props      < TType = CallableFunction > ( ) { return this.$component.array  < TType > ( '$props'      ); }
    mixins     < TType = CallableFunction > ( ) { return this.$component.array  < TType > ( '$mixins'     ); }

    vBind( ) {
        return this.$component.$vBind;
    }

    vOn( ) {
        return this.$component.$vOn;
    }

    data ( ) {
        return this.$component.$data;
    }

    slot ( ) {
        return  this.$component.$slots;

    }
}

