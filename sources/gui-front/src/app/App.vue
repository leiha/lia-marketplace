<template>
  <v-app>
    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script lang="ts">
  import ioc        from '@plugins/lia.ioc'
  import { extend } from "@lia/vue/vue";

  export default extend( [ ] , {
    name: 'App',
    data: () => ({

    }),
  } ).vue( );
</script>
