
import { ComponentPlugin } from './Component';
import { Text            } from '@lia/vuetify/form/fields/text/Text';

export class SearchComponent extends ComponentPlugin < Text >
{
    prepare( ) {
        return ( new Text( ) )
            .vBind( )
                .add( 'value'      , ''       )
                .add( 'appendIcon' , 'search' )
            .end( )
            .vOn( )
                .add( 'keyup' , ( v : KeyboardEvent ) => {
                    this.$dataGrid.search( ).set( this.value( ) );
                } )
            .end( )
            ;
    }

    value ( ) {
        return this.$component.data( ).get( 'value' );
    }
}