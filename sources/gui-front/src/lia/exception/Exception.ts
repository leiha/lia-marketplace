
import { sprintf } from 'sprintf-js'

export class Exception extends Error
{
    constructor( message : string , params : { [ k : string ] : any } ) {
        super( params ? sprintf( message , params ) : message );
        if ( Error.captureStackTrace ) {
            Error.captureStackTrace( this , this.constructor );
        }
        this.name = this.constructor.name;
    }
}