
import { Plugin } from '@lia/vuetify/datagrid/plugins/Plugin';
import { Text   } from '@lia/vuetify/form/fields/text/Text';

export class Search extends Plugin < Text >
{
    prepare( ) {
        return ( new Text( ) )
            .vBind( )
                .add( 'value'      , ''       )
                .add( 'appendIcon' , 'search' )
                .end( )
            .vOn( )
                .add( 'keyup' , ( v : KeyboardEvent ) => {
                    this.$datagrid.search( ).set( this.value( ) );
                } )
                .end( )
    }

    value ( ) {
        return this.$component.data( ).get( 'value' );
    }
}