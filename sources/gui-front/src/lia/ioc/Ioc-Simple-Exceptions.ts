
import { IocException } from '@lia/ioc/Ioc-Exceptions';

export class IocServiceNotFoundException extends IocException
{
    constructor( params : { [ k : string ] : any } ) {
        super( 'Service %(service)s unknown' , params );
    }
}

export class IocServiceImplementationException extends IocException
{
    constructor( params : { [ k : string ] : any } ) {
        super(
            'Service [ %(service)s ( %(object)s ) ] must implement ' +
            'method [ %(setter)s ] or have a property [ %(name)s ]' ,
            params
        );
    }
}

