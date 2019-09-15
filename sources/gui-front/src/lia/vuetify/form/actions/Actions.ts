
import { Vue } from "@lia/vue/vue";
import * as o from "@lia/core/$object/$Object";
import {Action} from "@lia/vuetify/form/actions/Action";

export class Events extends o.Events {

}

export interface Props {
    actions : Action[ ];
}

export interface Slots {

}


export interface Data extends Props {

}

export class Actions <
    TData  extends Data  = Data ,
    TSlots extends Slots = Slots ,
    TProps extends Props = Props ,
    TEvents extends Events = Events
    > extends Vue < TData , TSlots , TProps , TEvents  > {

    constructor( ) {
        super( );
        this.template( )
            .pug( 'v-flex( :$vBind v-on="$vOn" )' )
            ;

        this.vBind( )
            .set( 'actions' , [ ] )
            ;
    }


}