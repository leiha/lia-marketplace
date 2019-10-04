
export class ArrayObjects < TParent , TObject > {

    constructor ( protected $parent : TParent , protected $objects : TObject[ ] ) {

    }

    end( ) {
        return this.$parent;
    }

    push( config : TObject ) {
        this.$objects.push( config )
    }

    get ( ) {
        let $this = this;

        return {
            byIndex( index : number ) {
                return $this.$objects[ index ] || null;
            },
            by( value : any , key : keyof TObject ) : TObject {
                // @ts-ignore
                let col : TObject = null;
                $this.$objects.forEach( ( column : TObject ) => {
                    if( column[ key ] == value ) {
                        col = column;
                    }
                } );
                return col;
            },
            all( ) {
                return $this.$objects;
            }
        };
    }

    merge( target : any , source : any ) {
        const isObject = ( obj : any ) => obj && typeof obj === 'object';

        if (! isObject( target ) || ! isObject( source ) ) {
            return source;
        }

        Object.keys( source ).forEach( key => {
            const targetValue = target[ key ];
            const sourceValue = source[ key ];

            if( Array.isArray( targetValue ) && Array.isArray( sourceValue ) ) {
                target[ key ] = targetValue.concat( sourceValue );
            } else if ( isObject( targetValue ) && isObject( sourceValue ) ) {
                target[ key ] = this.merge( Object.assign( { } , targetValue ) , sourceValue );
            } else {
                target[ key ] = sourceValue;
            }
        });

        return target;
    }
}