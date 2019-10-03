
import * as vue from '@lia/vue/vue';
import {Column} from "@lia/vuetify/datagrid/columns/Column";

export interface HeaderProps {
    text     ?: string;
    value     : string;
    align    ?: 'start' | 'center' | 'end';
    sortable ?: boolean;
    divider  ?: boolean;
    class    ?: string | string[];
    width    ?: string | number;
    filter   ?: (value: any, search: string, item: any) => boolean;
    sort     ?: (a: any, b: any) => number;
    classes  ?: string[ ]
    icons    ?: {
        sort : string
    }
}

export interface Props extends vue.Props {
    calculateWidths    ?: boolean;
    caption            ?: string;
    customFilter       ?: ( value : any , search : string | null , item : any ) => boolean;
    customSort         ?: (items: any[], sortBy: string[], sortDesc: boolean[], locale: string, customSorters?: Record<string, Function>) => any[];
    dark               ?: boolean;
    dense              ?: boolean;
    disableFiltering   ?: boolean;
    disablePagination  ?: boolean;
    disableSort        ?: boolean;
    expandIcon         ?: string;
    expanded           ?: any[];
    fixedHeader        ?: boolean;
    footerProps        ?: Object;
    groupBy            ?: string | string[];
    groupDesc          ?: boolean | string[];
    headerProps        ?: Object;
    headers            ?: HeaderProps[];
    headersLength      ?: number;
    height             ?: number;
    hideDefaultFooter  ?: boolean;
    hideDefaultHeader  ?: boolean;
    itemKey            ?: string;
    items              ?: any[];
    itemsPerPage       ?: number;
    light              ?: boolean;
    loading            ?: boolean;
    loadingText        ?: string;
    locale             ?: string;
    mobileBreakpoint   ?: number;
    multiSort          ?: boolean;
    mustSort           ?: boolean;
    noDataText         ?: string;
    noResultsText      ?: string;
    options            ?: Object;
    page               ?: number;
    search             ?: string;
    serverItemsLength  ?: number;
    showExpand         ?: boolean;
    showGroupBy        ?: boolean;
    showSelect         ?: boolean;
    singleExpand       ?: boolean;
    singleSelect       ?: boolean
    sortBy             ?: string | string[];
    sortDesc           ?: boolean | boolean[];
    value              ?: any[];
    vModel             ?: any[];
}

export interface Events {
    'click:row'     : ( v : any ) => void
    'current-items' : ( v : any[ ] ) => void
    'input'         : ( v : any[ ] ) => void
    'item-expanded' : ( v : { item: any, value: boolean } ) => void
    'item-selected' : ( v : { item: any, value: boolean } ) => void
    'page-count'    : ( v : number ) => void
    'pagination'    : ( v : {
        page         : number
        itemsPerPage : number
        pageStart    : number
        pageStop     : number
        pageCount    : number
        itemsLength  : number
    } ) => void
    'update:expanded'  : ( v : any[] ) => void
    'update:group-by'  : ( v : string | string[] ) => void
    'update:group-desc': ( v : boolean | boolean[] ) => void
    'update:items-per-page' : ( v : number ) => void
    'update:multi-sort' : ( v : boolean ) => void
    'update:must-sort'  : ( v : boolean ) => void
    'update:options'    : ( v : {
        page         : number
        itemsPerPage : number
        sortBy       : string[]
        sortDesc     : boolean[]
        groupBy      : string[]
        groupDesc    : boolean[]
        multiSort    : boolean
        mustSort     : boolean
    } ) => void
    'update:page'      : ( v : number ) => void
    'update:sort-by'   : ( v : string | string[] ) => void
    'update:sort-desc' : ( v : boolean | boolean[] ) => void

    moved              : ( e : any ) => void
}

export interface Data extends Props {
    columns   : Column[ ]
    pageCount : number
    selection : {
        all : boolean
        indeterminate : boolean
    }
}

export interface Slots {
    'body'                   ?: vue.Slot
    'bodyAppend'             ?: vue.Slot
    'bodyPrepend'            ?: vue.Slot
    'footer'                 ?: vue.Slot
    'headerDataTableSelect'  ?: vue.Slot
    'header'                 ?: vue.Slot
    'progress'               ?: vue.Slot
    'itemDataTableSelect'    ?: vue.Slot
    'item.<name>'            ?: vue.Slot
    'noData'                 ?: vue.Slot
    'noResults'              ?: vue.Slot
    'top'                    ?: vue.Slot
}