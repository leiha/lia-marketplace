
import * as events from '../async/Events';

export class Events {

}

export class $Object <
    TEvents extends Events = Events
    >
{
    private readonly $events : events.Events < TEvents > ;

    constructor( $events ?: TEvents ) {
        //@ts-ignore
        this.$events = new events.Events < TEvents > ( $events || new Events );
    }

    events( ) {
        return this.$events;
    }
}