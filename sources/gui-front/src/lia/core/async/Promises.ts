

export type PromiseType = ( resolve : ( value : any ) => void , reject ?: ( error : any ) => void ) => void;

export class Promises {

    protected $promises : Promise < any >[] = [];

    add (  )
    {
        let $this = this;
        return  {
            one ( cb : PromiseType ) {
                $this.$promises.push( new Promise < any > ( cb ) );
                return $this;
            },
            many ( cbs : PromiseType[ ] ) {
                cbs.forEach( ( cb ) => this.one( cb ) );
                return $this;
            }
        }
    }

    all ( ) {
        return Promise.all( this.$promises );
    }

    race ( ) {
        return Promise.race( this.$promises );
    }

}