
import { Vue , Events , Data , Props , Slots } from './Vue-Core';
import {VueFacade} from "@lia/vue/Vue-Facade";

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
        this.vue( ).props( )
            .push( 'scope' )
        ;
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