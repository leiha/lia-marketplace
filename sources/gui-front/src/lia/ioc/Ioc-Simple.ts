
import { IocServicesType } from './Ioc-Simple-Types';
import { IocServiceImplementationException , IocServiceNotFoundException } from './Ioc-Simple-Exceptions';
import { ucFirst } from '@lia/string/String';

export { IocServicesType }

export class Ioc < TServices extends IocServicesType < TServices > >
{
    protected $singletons : { [ k in keyof TServices ] ?: any } = { };

    constructor( protected $services : TServices ) {

    }

    public get
        < T extends keyof TServices >
    ( serviceName : T )
        // @ts-ignore
        : ReturnType < TServices[ T ]['$object'] >
    {
        if ( ! this.$services[ serviceName ] ) {
            throw new IocServiceNotFoundException( {
                service : serviceName
            } );
        }

        let service = this.$services[ serviceName ];
        return this.getSingleton( serviceName , service )
            || this.inject < T > ( service , service.$object( ) )
            ;
    }

    protected getSingleton < T extends keyof TServices > ( serviceName : T , service : any ) {
        if ( service.$singleton ) {
            if ( ! this.$singletons[ serviceName ] ) {
                this.$singletons[ serviceName ] = this.inject < T > ( service , service.$object( ) );
            }
            return this.$singletons[ serviceName ];
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
                            service   : params.$s ,
                            name      : name ,
                            setter    : setter
                        } );
                    }
                    o[ name ] = this.get( params.$s );
                }
                else {
                    o[ setter ]( this.get( params.$s ) );
                }
            }
        }
        return o;
    }
}