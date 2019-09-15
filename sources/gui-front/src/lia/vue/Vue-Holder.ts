
import { Vue        } from './Vue-Core';
import { VueWorker  } from './Vue-Worker';
import { mixins     } from "@lia/core/oop/mixins";

export abstract class VueHolder < TVue extends Vue >
{
    protected constructor( ) {

    }
}

export interface VueHolder < TVue extends Vue > extends VueWorker < TVue > {

}

mixins( VueHolder , [ VueWorker ] );