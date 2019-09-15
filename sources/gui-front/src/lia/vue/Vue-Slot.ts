
import { Vue , Events , Data , Props , Slots } from './Vue-Core';
import { VueFacade }                           from "./Vue-Facade";
import {VueHolder} from "@lia/vue/Vue-Holder";

export class Scope {

}

export class VueSlot <
    TScope  extends Scope  = Scope ,
    TData   extends Data   = Data  ,
    TSlots  extends Slots  = Slots ,
    TProps  extends Props  = Props ,
    TEvents extends Events = Events
    > extends Vue < TData , TSlots , TProps , TEvents >
{
    //@ts-ignore
    protected $owner : TOwner;

    constructor( ) {
        super( );
        this.props( )
            .push( 'scope' )
            ;
    }

    owner ( owner : Vue|VueFacade ) {
        this.$owner = owner;
        return this;
    }

    scope ( ) : TScope {
        //@ts-ignore
        return this.$component.$instance.scope;
    }

    attach( name : string ) {
        this.$owner.lifeCycle( ).subscribe( 'built' , ( ) => {
            // @ts-ignore
            this.$owner.slot( ).add( name , { component : this.build( ) } );
        } );
    }
}

export class VueSlotFacade <
    TScope  extends Scope  = Scope ,
    TData   extends Data   = Data  ,
    TSlots  extends Slots  = Slots ,
    TProps  extends Props  = Props ,
    TEvents extends Events = Events
    > extends VueFacade < TData , TSlots , TProps , TEvents >
{
    //@ts-ignore
    protected $owner : TOwner;

    constructor( ) {
        super( );

    }

    owner ( owner : Vue|VueFacade ) {
        this.$owner = owner;
        return this;
    }

    scope ( ) : TScope {
        //@ts-ignore
        return this.$vue.$component.$instance.scope;
    }

    attach( name : string ) {
        this.$owner.lifeCycle( ).subscribe( 'built' , ( ) => {
            // @ts-ignore
            this.$owner.slot( ).add( name , { component : this.build( ) } );
        } );
    }
}

export class VueSlotHolder < TScope extends Scope = Scope , TVue extends Vue = Vue >
    extends VueHolder < TVue >
{
    //@ts-ignore
    protected $owner : Vue|VueHolder;

    constructor( ) {
        super( );
    }

    owner ( owner : Vue|VueHolder ) {
        this.$owner = owner;
        return this;
    }

    scope ( ) : TScope {
        //@ts-ignore
        return this.$vue.$component.$instance.scope;
    }

    attach( name : string ) {
        this.$owner.vue( ).lifeCycle( ).subscribe( 'built' , ( ) => {

            this.vue( ).vue( ).props( ).push( 'scope' );

            // @ts-ignore
            this.$owner.vue( ).slot( ).add( name , { component : this.build( ) } );
        } );
        return this;
    }
}