
import * as $vue from './Vue';
import vue , { VueConstructor as Constructor } from "vue";
import { Accessors , DefaultComputed , DefaultMethods } from 'vue/types/options';

export interface Slot < TScope = any > {
    name      ?: string
    scope     ?: TScope
    vue       ?: $vue.Vue
    component ?: Constructor
    content   ?: string
}

export class TypedObject < TType , TVueComponent > {

    // @ts-ignore
    public $store : { [ k in keyof TType ] : TType[ k ] } = { };

    constructor( protected $builder : TVueComponent ) {

    }

    add < T extends keyof TType > ( name : T , value : TType[ T ] ) {
        if( ! this.has( name ) ) {
            this.set( name , value );
        }
        return this;
    }

    set < T extends keyof TType > ( name : T , value : TType[ T ] ) {
        this.$store[ name ] = value;
        return this;
    }

    has < T extends keyof TType > ( name : T ) {
        return !! this.$store[ name ];
    }

    get < T extends keyof TType > ( name : T ) : TType[ T ] {
        return  this.$store[ name ];
    }

    merge < T extends keyof TType > ( values : { [ k in T ] : TType[ T ] } ) {
        this.$store = Object.assign( this.$store , values );
        return this;
    }

    end ( ) {
        // @ts-ignore
        return this.$builder.end( );
    }
}

export class Props <
    TData   extends $vue.Data   ,
    TSlots  extends $vue.Slots  ,
    TProps  extends $vue.Props  ,
    TEvents extends $vue.Events ,
    TVue    extends $vue.Vue < TData , TSlots , TProps , TEvents >
    > {

    public $store : string[] = [ ];

    constructor( protected $builder : VueComponent < TData , TSlots , TProps , TEvents , TVue > ) {

    }

    add < T extends keyof TProps > ( name : T , value : TProps[ T ] ) {
        if( ! this.has( name ) ) {
            this.set( name , value );
        }
        return this;
    }

    has < T extends keyof TProps > ( name : T ) {
        //@ts-ignore
        return !! this.$store[ name ];
    }

    set < T extends keyof TProps > ( name : T , value : TProps[ T ] ) {

        //@ts-ignore
        if ( ! this.$builder.$data.has( name ) && ! this.$builder.$built )
            //@ts-ignore
            this.$store.push( (name == 'value' ? 'v-model' : ':'+ name ) +'="'+ 'data.'+name +'"' );

        //@ts-ignore
        this.$builder.$data.set( name , value );

        return this;
    }

    get < T extends keyof TProps > ( name : T ) :  TProps[ T ] {
        //@ts-ignore
        return this.$builder.$data.get( name );
    }

    end ( ) {
        return this.$builder.end( );
    }
}

export class VueComponent <
    TData   extends $vue.Data  ,
    TSlots  extends $vue.Slots ,
    TProps  extends $vue.Props ,
    TEvents extends $vue.Events ,
    TVue    extends $vue.Vue < TData , TSlots , TProps , TEvents > ,
    >
{
    public    $name       : string                           =  '';
    public    $template   : string                           =  '';
    public    $components : { [ k : string ] : Constructor } = { };
    public    $computed   : Accessors < DefaultComputed >    = { };
    public    $methods    : DefaultMethods < Constructor >   = { };
    public    $watches    : { [ k : string ] : Function  }   = { };
    public    $props      : string[]                         = [ ];
    protected $mixins     : any[]                            = [ ];
    public    $vBind      : Props < TData , TSlots , TProps , TEvents , TVue >;
    public    $vOn        : TypedObject < TEvents , VueComponent < TData , TSlots , TProps , TEvents , TVue > >;
    public    $slots      : TypedObject < TSlots  , VueComponent < TData , TSlots , TProps , TEvents , TVue > >;
    public    $data       : TypedObject < TData   , VueComponent < TData , TSlots , TProps , TEvents , TVue > >;

    // @ts-ignore
    public $built      : Constructor;
    // @ts-ignore
    public $instance      : Constructor;

    constructor( protected $vue : TVue )
        {
            this.$vBind = new Props < TData , TSlots , TProps , TEvents , TVue > ( this );
            this.$data  = new TypedObject < TData   , VueComponent < TData , TSlots , TProps , TEvents , TVue > > ( this );
            this.$vOn   = new TypedObject < TEvents , VueComponent < TData , TSlots , TProps , TEvents , TVue > > ( this );
            this.$slots = new TypedObject < TSlots  , VueComponent < TData , TSlots , TProps , TEvents , TVue > > ( this );
        }

    end ( ) : TVue {
        return this.$vue;
    }

    template ( ) {
        let $this = this;
        return  {
            pug ( tpl : string ) {
                return this.html( tpl.replace( /export default "(.*)"$/ , "$1" ).replace(/\\"/g,'"') );
            } ,
            html ( tpl : string ) {
                $this.$template = tpl;
                return $this.end( );
            },
            render( ) {
                return $this.$template.replace( /:\$vBind/ , $this.$vBind.$store.join( ' ' ) );
            }
        };
    }

    data ( )
    {
        // Vuex use computed getter and setter
        // so need only to return the object of local data
        return {
            data  : this.$data.$store ,
            slots : this.$slots.$store
        }
    }

    build ( )
    {
        if( ! this.$built ) {
            let $this = this;
            this.$built = vue.extend( {
                name       : this.$vue.name( ),
                template   : this.template( ).render( ) ,
                components : this.$components,
                computed   : this.$computed,
                methods    : this.$methods,
                mixins     : this.$mixins,
                props      : this.$props,
                // watches    : this.$watches,
                data ( ) {
                    // Vuex use computed getter and setter
                    // so need only to return the object of local data
                    return $this.data( );
                },
                beforeCreate ( ) {
                    // @ts-ignore
                    $this.$instance = this;
                    // @ts-ignore
                    $this.$instance.$vOn = $this.$vOn.$store;

                    $this.$vue.lifeCycle( ).fire( 'beforeCreate' );
                },
                created      ( ) { $this.$vue.lifeCycle( ).fire( 'created' );       },
                beforeMount  ( ) { $this.$vue.lifeCycle( ).fire( 'beforeMount' );   },
                mounted      ( ) {
                    // @ts-ignore
                    $this.$instance = this;
                    $this.$vue.lifeCycle( ).fire( 'mounted' );
                },
                beforeUpdate ( ) { $this.$vue.lifeCycle( ).fire( 'beforeUpdate' );  },
                updated      ( ) { $this.$vue.lifeCycle( ).fire( 'updated' );       },
                beforeDestroy( ) { $this.$vue.lifeCycle( ).fire( 'beforeDestroy' ); },
                destroyed    ( ) { $this.$vue.lifeCycle( ).fire( 'destroyed' );     },
            });
            this.$vue.lifeCycle( ).fire( 'built' );
            return this.$built;
        }
    }

    object < TType = CallableFunction > ( prop : '$data' | '$computed' | '$methods' | '$watches' | '$components' ) {
        let $builder = this;
        return {
            add ( name : string , cb : TType ) {
                // @ts-ignore
                $builder[ prop ][ name ] = cb;
                return this;
            },
            merge( methods : { [ k : string ] : TType } ) {
                // @ts-ignore
                $builder[ prop ] = Object.assign( $builder[ prop ] , methods );
                return this;
            },
            end ( ) {
                return $builder.end( );
            }
        }
    }

    array < TType = CallableFunction > ( prop : '$props' | '$mixins' ) {
        let $builder = this;
        return {
            push ( name : string ) {
                $builder[ prop ].push( name );
                return this;
            },
            merge( ...props : string[] ) {
                // @ts-ignore
                $builder[ prop ] = $builder[ prop ].concat( props );
                return this;
            },
            end ( ) {
                return $builder.end( );
            }
        }
    }
}