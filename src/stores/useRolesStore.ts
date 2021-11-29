import { reactive } from 'vue'

export type Roles = 'samarbejder'|'forsker'|'kommunikator'|'sundhedsfremmer'|'leder'|'professionel'|'ekspert'
export type RolesObject = {[role in Roles]: boolean}

export const isRole: RolesObject = reactive({
    samarbejder: true,
    forsker: true,
    kommunikator: true,
    sundhedsfremmer: true,
    leder: true,
    professionel: true,
    ekspert: true
})

export const isHover: RolesObject = reactive({
    samarbejder: false,
    forsker: false,
    kommunikator: false,
    sundhedsfremmer: false,
    leder: false,
    professionel: false,
    ekspert: false
})

export const toggleRole = function(role: Roles){
    if (Object.values(isRole).every((v) => v === true)) {
        Object.keys(isRole).forEach((v) => isRole[v as Roles] = false)
    }
    isRole[role] = !isRole[role]
    if (Object.values(isRole).every((v) => v === false)) {
        Object.keys(isRole).forEach((v) => isRole[v as Roles] = true)
    }
}

export const changeRole = function(role: Roles){
    Object.keys(isRole).forEach((v) => isRole[v as Roles] = false)
    isRole[role] = true
}

export const toggleHover = function(role: Roles, value: boolean){
    isHover[role] = value
}