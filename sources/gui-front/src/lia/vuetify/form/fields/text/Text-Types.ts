
import * as vue from '@lia/vue/vue';

export interface Props extends vue.Props {
    appendIcon         ?: string;
    appendOuterIcon    ?: string;
    autofocus          ?: boolean;
    backgroundColor    ?: string;
    clearIcon          ?: string;
    clearable          ?: boolean;
    color              ?: string;
    counter            ?: boolean | number | string;
    dark               ?: boolean;
    disabled           ?: boolean;
    error              ?: boolean;
    errorCount         ?: number | string;
    errorMessages      ?: string | string[];
    filled             ?: boolean;
    flat               ?: boolean;
    fullWidth          ?: boolean;
    height             ?: number | string;
    hideDetails        ?: boolean;
    hint               ?: string;
    id                 ?: string;
    label              ?: string;
    light              ?: boolean;
    loaderHeight       ?: number | string;
    loading            ?: boolean | string;
    messages           ?: string | string[];
    outlined           ?: boolean;
    persistentHint     ?: boolean;
    placeholder        ?: string;
    prefix             ?: string;
    prependIcon        ?: string;
    prependInnerIcon   ?: string;
    readonly           ?: boolean;
    reverse            ?: boolean;
    rounded            ?: boolean;
    rules              ?: Function[];
    shaped             ?: boolean;
    singleLine         ?: boolean;
    solo               ?: boolean;
    soloInverted       ?: boolean;
    success            ?: boolean;
    successMessages    ?: string | string[];
    suffix             ?: string;
    type               ?: string;
    validateOnBlur     ?: boolean;
    value              ?: string;
    vModel             ?: string;
}

export interface Events {
    'blur'                : ( v : boolean ) => void;
    'change'              : ( v : string ) => void;
    'click:append'        : ( v : Event ) => void;
    'click:append-outer'  : ( v : Event ) => void;
    'click:clear'         : ( v : Event ) => void;
    'click:prepend'       : ( v : Event ) => void;
    'click:prepend-inner' : ( v : Event ) => void;
    'focus'               : ( v : boolean ) => void;
    'input'               : ( v : string ) => void;
    'keyup'               : ( v : KeyboardEvent ) => void;
    'keydown'             : ( v : KeyboardEvent ) => void;

}

export interface Data extends Props {

}

export interface Slots {
    'append'         ?: vue.Slot
    'appendOuter'    ?: vue.Slot
    'default'        ?: vue.Slot
    'label'          ?: vue.Slot
    'prepend'        ?: vue.Slot
    'prependInner'   ?: vue.Slot
    'progress'       ?: vue.Slot

}