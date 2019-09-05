
import { IocServicesType } from './Ioc-Types';
import { IocServiceImplementationException , IocServiceNotFoundException } from '@lia/ioc/Ioc-Exceptions';
import { ucFirst } from '@lia/string/String';

export { IocServicesType }

export class Ioc < TServices extends IocServicesType < TServices > >
{
    protected $singletons : { [ k in keyof TServices ] ?: any } = { };

    constructor( protected $services : TServices ) {

    }

    public get
        < T extends keyof TServices , TT extends keyof TServices[ T ] >
    ( containerName : T , serviceName : TT )
        // @ts-ignore
        : ReturnType < TServices[ T ][ TT ]['$object'] >
    {
        if ( ! this.$services[ containerName ] || ! this.$services[ containerName ][ serviceName ] ) {
            throw new IocServiceNotFoundException( {
                container : containerName ,
                service   : serviceName
            } );
        }

        let service = this.$services[ containerName ][ serviceName ];
        return this.getSingleton( containerName , serviceName , service )
            || this.inject < T > ( service , service.$object( ) )
            ;
    }

    protected getSingleton
        < T extends keyof TServices , TT extends keyof TServices[ T ] >
    ( containerName : T , serviceName : TT , service : any )
    {
        if ( service.$singleton ) {
            if ( ! this.$singletons[ containerName ] ) {
                this.$singletons[ containerName ] = { };
            }

            if ( ! this.$singletons[ containerName ][ serviceName ] ) {
                this.$singletons[ containerName ][ serviceName ] = this.inject < T > ( service , service.$object( ) );
            }

            return this.$singletons[ containerName ][ serviceName ];
        }
    }

    protected inject < T extends keyof TServices > ( service : any , o : any ) {
        if ( service.$inject ) {
            for ( let i in service.$inject ) {
                // @ts-ignore
                let params = service.$inject[ i ];
                let name   = ( params.as || params.$s );
                let setter = 'set'+ ucFirst( name );
                if ( ! o[ setter ] ) {
                    if ( ! o.hasOwnProperty( name ) ) {
                        throw new IocServiceImplementationException( {
                            object    : o.constructor.name ,
                            container : params.$c ,
                            service   : params.$s ,
                            name      : name ,
                            setter    : setter
                        } );
                    }
                    o[ name ] = this.get( params.$c , params.$s );
                }
                else {
                    o[ setter ]( this.get( params.$c , params.$s ) );
                }
            }
        }
        return o;
    }
}