
import Sortable from "sortablejs"
import {Directive} from "@lia/vue/directives/Directive";

export class Draggable extends Directive {

    // @ts-ignore
    protected $element : ( el : any , binding : any , vnode : any ) => any;

    protected $options : Sortable.Options = { };

    protected $classes = {
        draggable : 'movable' ,
        disabled  : 'unmovable'
    };

    protected $emit = {
        dragged : 'moved'
    };

    public inside ( element : ( el : any , binding : any , vnode : any ) => any ) {
        this.$element = element;
        return this;
    }

    public create( ) {

        let $this = this;

        return {
            bind( el : any , binding : any , vnode : any ) {
                Object.assign( $this.$options , {
                    handle      : '.'+ $this.$classes.draggable ,
                    filter      : '.'+ $this.$classes.disabled  ,
                    animation   : 150,
                    onUpdate: function ( e : any ) {
                        vnode.child.$emit( $this.$emit.dragged , e );
                    },
                    onMove: function ( e  : any ) {
                        return e.related.className.indexOf( $this.$classes.disabled ) === -1;
                    }
                } );

                Sortable.create( $this.$element( el , binding , vnode ) , $this.$options )
            }
        }
    }
}