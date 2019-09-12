
import { Worker } from './Worker';
import { Events } from "../../Datagrid-Types";

export class Selection extends Worker
{
    on < T extends 'input' | 'item-selected' >
    ( name : T ,  cb : Events[ T ] ) {
        this.vue( ).vOn( ).add( name , cb );
        return this;
    }

    get ( ) {
        return this.vue( ).data( ).get( 'value' );
    }

    disable ( ) {
        this.vue( ).vBind( )
            .add( 'showSelect'   , false )
            .add( 'value'        , [ ]   )
            .add( 'singleSelect' , false )
        ;

        return this;
    }

    enable ( single : boolean = false ) {
        this.vue( ).vBind( )
            .add( 'showSelect'   , true   )
            .add( 'value'        , [ ]    )
            .add( 'singleSelect' , single )
        ;

        return this;
    }
}