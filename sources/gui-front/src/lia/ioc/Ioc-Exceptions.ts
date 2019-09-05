
import { Exception } from '@lia/exception/Exception';

export class IocException extends Exception
{

}

export class IocServiceNotFoundException extends IocException
{
    constructor( params : { [ k : string ] : any } ) {
        super( 'Service %(container)s:%(service)s unknown' , params );
    }
}

export class IocServiceImplementationException extends IocException
{
    constructor( params : { [ k : string ] : any } ) {
        super(
            'Service [ %(container)s:%(service)s ( %(object)s ) ] must implement ' +
            'method [ %(setter)s ] or have a property [ %(name)s ]' ,
            params
        );
    }
}

