
import * as vue from "@lia/vue/vue";

export interface Props extends vue.Props {
    align           ?: string
    alignContent    ?: string
    alignContentLg  ?: string
    alignContentMd  ?: string
    alignContentSm  ?: string
    alignContentXl  ?: string
    alignLg         ?: string
    alignMd         ?: string
    alignSm         ?: string
    alignXl         ?: string
    dense           ?: boolean
    justify         ?: string
    justifyLg       ?: string
    justifyMd       ?: string
    justifySm       ?: string
    justifyXl       ?: string
    noGutters       ?: boolean
    tag             ?: string
}

export interface Data extends Props {
    items : any[ ]
}

export interface Slots {
    default ?: vue.Slot
}

export interface Events {

}