
import { VueHolder } from './Vue-Holder';
import { Text      } from '../../form/fields/text/Text';

export class Search extends VueHolder < Text >
{
    prepare( ) {
        return ( new Text( ) )
            .name$( 'SearchBox' )
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