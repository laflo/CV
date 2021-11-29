<template>
  <q-page class="row justify-evenly">
    <roles-component class="q-ma-md" style="max-height: 50vh"/>
    <activity-component/>
  </q-page>
</template>

<script lang="ts">
import RolesComponent from 'components/Roles.vue';
import ActivityComponent from 'components/Activity.vue'
import {defineComponent} from 'vue'

export default defineComponent({
  name: 'PageIndex',
  components: { RolesComponent, ActivityComponent },
});
</script>