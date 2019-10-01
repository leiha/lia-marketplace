
import * as vue from '@lia/vue/vue';

export interface Props extends vue.Props {
    absolute         ?: boolean;
    activeClass      ?: string;
    append           ?: boolean;
    block            ?: boolean;
    bottom           ?: boolean;
    color            ?: string;
    dark             ?: boolean;
    depressed        ?: boolean;
    disabled         ?: boolean;
    elevation        ?: number | string;
    exact            ?: boolean;
    exactActiveClass ?: string;
    fab              ?: boolean;
    fixed            ?: boolean;
    height           ?: number | string;
    href             ?: string | object;
    icon             ?: boolean;
    inputValue       ?: any;
    large            ?: boolean;
    left             ?: boolean;
    light            ?: boolean;
    link             ?: boolean;
    loading          ?: boolean;
    maxWidth         ?: number | string;
    minHeight        ?: number | string;
    minWidth         ?: number | string;
    nuxt             ?: boolean;
    outlined         ?: boolean;
    replace          ?: boolean;
    right            ?: boolean;
    ripple           ?: boolean | object;
    rounded          ?: boolean;
    small            ?: boolean;
    tag              ?: string;
    target           ?: string;
    text             ?: boolean;
    tile             ?: boolean;
    to               ?: string | object;
    top              ?: boolean;
    type             ?: string;
    value            ?: any;
    width            ?: number | string;
    xLarge           ?: boolean;
    xSmall           ?: boolean;
}

export interface Events {
    click : Function
}

export interface Data extends Props {
    iconName : string
}

export interface Slots {
    'default' ?: vue.Slot
    'loader'  ?: vue.Slot
}