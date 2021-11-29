<template>
    <q-card 
      v-ripple 
      clickable 
      @click="activity.expanded = !activity.expanded" 
      v-for="activity, index in activityList" 
      :key="index" 
      class="my-card q-ma-xs"
    >
      <q-card-actions class="row">
        <div row class="text-overline text-grey q-px-sm">
          <div class="my-year" >&nbsp;{{activity.startTime.getFullYear()}}</div>
          <div v-if="activity.startTime.getFullYear()!=activity.endTime.getFullYear()" class="my-year" >-{{activity.endTime.getFullYear()}}</div>
        </div>

        <q-separator vertical/>
        
        <div class="text-subtitle1 q-px-sm">{{activity.headline}}</div>

        <q-space />
        
        <div>
          <q-chip 
            v-for="tag in activity.tags" 
            :key="tag" 
            clickable 
            @click.stop="changeRole(tag)" 
            size="sm" 
            color="grey" 
            text-color="white"
          >
            {{tag}}
          </q-chip>

          <q-icon
            color="grey"
            size="sm"
            :name="activity.expanded ? 'keyboard_arrow_up' : 'keyboard_arrow_down'"
          ></q-icon>
        </div>
      </q-card-actions>

      <q-slide-transition>
        <div v-show="activity.expanded">
          <q-separator />
          <q-card-section class="text-subitle2">
            {{ activity.description }}
          </q-card-section>
        </div>
      </q-slide-transition>
        <!-- <q-card-section>
            

            <q-chip v-for="tag in activity.tags" :key="tag" clickable @click="changeRole(tag)" size="sm" color="teal" text-color="white">{{tag}}</q-chip>
            <div class="q-mt-xs">
                {{ activity.description }}
            </div>
        </q-card-section> -->
    </q-card>
</template>

<script lang="ts">
import { defineComponent, watch } from 'vue'
import { isRole, changeRole } from 'src/stores/useRolesStore'
import { filterActivities, activityList } from 'src/stores/useActivityStore'

export default defineComponent({
  name: 'activity',
  setup(){
    watch(()=> isRole,(isRole) => filterActivities(isRole),{ deep: true })
    return {activityList, changeRole}
  }
});
</script>

<style scoped>
.my-card{
  width: 90vw;
  max-width: 800px;
  background: #dfdfdf;
}
.my-card:hover{
  width: 90vw;
  max-width: 800px;
  background: #cfcfcf;
}

.my-year{
  line-height: normal;
}
</style>