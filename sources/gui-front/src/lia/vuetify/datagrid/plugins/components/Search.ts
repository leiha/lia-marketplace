
import { VueHolder } from '../../vue/Vue-Holder';
import { Text      } from '@lia/vuetify/form/fields/text/Text';

export class SearchComponent extends VueHolder < Text >
{
    prepare( ) {
        return ( new Text( ) )
            .vBind( )
                .add( 'value'      , ''       )
                .add( 'appendIcon' , 'search' )
            .end( )
            .vOn( )
                .add( 'keyup' , ( v : KeyboardEvent ) => {
                    this.dataGrid( ).search( ).set( this.value( ) );
                } )
            .end( )
            ;
    }

    value ( ) {
        return this.vue( ).data( ).get( 'value' );
    }
}