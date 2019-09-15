
import Vue from 'vue';

import fr from 'vuetify/src/locale/fr';

// @ts-ignore
import { Ripple } from 'vuetify/lib/directives'

import Vuetify, {
    VAppBar , VToolbarTitle , VContainer , VLayout, VFlex,
    VCard, VCardTitle, VCardText, VCardActions,
    VRow ,
    VEditDialog , VSnackbar ,
    VForm, VBtn, VTextField, VCheckbox, VSelect, VSwitch, VSimpleCheckbox ,
    VMenu,
    VList, VListItem , VListItemIcon , VListItemTitle , VListItemSubtitle , VListItemContent ,
    VTabs, VTab, VTabItem,
    VSpacer,
    VDialog, VTooltip ,
    VDataTable ,
    VIcon ,
    VPagination ,
    VProgressLinear,
} from 'vuetify/lib';

Vue.use( Vuetify , {
    icons: {
        iconfont: 'mdi',
    },
    lang: {
        locales: { fr },
        current: 'fr',
    },
    directives: {
        Ripple
    },
    components : {
        VAppBar , VToolbarTitle , VContainer , VLayout , VFlex ,
        VCard , VCardTitle , VCardText , VCardActions ,
        VRow ,
        VEditDialog , VSnackbar ,
        VForm , VBtn , VTextField , VCheckbox , VSelect , VSwitch , VSimpleCheckbox ,
        VMenu ,
        VList , VListItem , VListItemIcon , VListItemTitle , VListItemSubtitle , VListItemContent ,
        VTabs , VTab , VTabItem ,
        VSpacer ,
        VDialog ,
        VDataTable ,
        VTooltip ,
        VIcon ,
        VPagination ,
        VProgressLinear,
    }
} );

export default new Vuetify();