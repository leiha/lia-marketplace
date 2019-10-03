
import { VueFacade } from "@lia/vue/vue";
import {HeaderProps} from "@lia/vuetify/datagrid/Datagrid-Types";

export type HeaderAction = ( header : HeaderProps ) => void;

export class Header extends VueFacade {

    protected $actions : { [ k : string ] : HeaderAction } = { };

    constructor(  ) {
        super( );

        this.vue( ).template( )
            .html( '<span>{{ scope.header.text }}</span>' )
            ;
    }

    actions( ) {

        let $this = this;

        return {
            click( ) {

                let $click = this;

                return {
                    set( name : string , cb : HeaderAction ) {
                        $this.$actions[ name ] = cb ;
                        return this;
                    } ,
                    run( name : string ) {
                        $this.$actions[ name ]( );
                    }

                }
            },
            end( ) {
                return $this;
            }
        }
    }
}