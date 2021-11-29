import { Roles, RolesObject } from './useRolesStore'
import { ref } from 'vue'

interface ActivityBasic {
    tags: Roles[]
    headline: string
    description: string
    startTime: Date
    endTime: Date
}

export interface Activity extends ActivityBasic {
    expanded: boolean
}

const activityListMasterBasic: ActivityBasic[] = [
    {
        tags: ['kommunikator', 'leder'],
        headline: 'PUST',
        description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem saepe eaque soluta enim porro qui inventore vero cum facilis. Amet voluptas fuga quibusdam porro maiores quasi exercitationem quidem vero eum?',
        startTime: new Date(2016,6,12),
        endTime: new Date(2020,7,15)
    },
    {
        tags: ['ekspert', 'leder'],
        headline: 'MUF',
        description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem saepe eaque soluta enim porro qui inventore vero cum facilis. Amet voluptas fuga quibusdam porro maiores quasi exercitationem quidem vero eum?',
        startTime: new Date(2018,6,12),
        endTime: new Date(2020,7,15)
    },
    {
        tags: ['samarbejder', 'leder', 'kommunikator'],
        headline: 'Tutor',
        description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem saepe eaque soluta enim porro qui inventore vero cum facilis. Amet voluptas fuga quibusdam porro maiores quasi exercitationem quidem vero eum?',
        startTime: new Date(2014,6,12),
        endTime: new Date(2018,7,15)
    },
    {
        tags: ['sundhedsfremmer', 'kommunikator', 'forsker'],
        headline: 'Prospektivet',
        description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem saepe eaque soluta enim porro qui inventore vero cum facilis. Amet voluptas fuga quibusdam porro maiores quasi exercitationem quidem vero eum?',
        startTime: new Date(2018,6,12),
        endTime: new Date(2018,7,15)
    },
    {
        tags: ['ekspert', 'kommunikator', 'forsker'],
        headline: 'Vikarforlæser på VIA',
        description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem saepe eaque soluta enim porro qui inventore vero cum facilis. Amet voluptas fuga quibusdam porro maiores quasi exercitationem quidem vero eum?',
        startTime: new Date(2018,6,12),
        endTime: new Date(2018,7,15)
    },
    {
        tags: ['ekspert', 'forsker'],
        headline: 'Frivillig studenterforskning',
        description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem saepe eaque soluta enim porro qui inventore vero cum facilis. Amet voluptas fuga quibusdam porro maiores quasi exercitationem quidem vero eum?',
        startTime: new Date(2017,6,12),
        endTime: new Date(2017,7,15)
    }
]

const activityListMaster: Activity[] = activityListMasterBasic.map(v => ({...v, expanded: false})).sort((a,b) => (a.endTime < b.endTime)? 1:-1)


export const activityList = ref(activityListMaster)

export const filterActivities = function(rolesObject: RolesObject){
    const roleList: Roles[] = []
    const activityListTemp: Activity[] = []
    Object.keys(rolesObject).forEach((v) => rolesObject[v as Roles]?roleList.push(v as Roles):'')
    activityListMaster.forEach((activity)=>{
        if (roleList.some((role) => activity.tags.includes(role))) {
            activityListTemp.push(activity)   
        }
    activityList.value = activityListTemp.sort((a,b) => (a.endTime < b.endTime)? 1:-1)
    })  
}