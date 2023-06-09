export const  dataScreenRouter  = [
    {
        path: "/data/screen",
        name: "数据大屏",
        component: () => import("@/views/dataScreen/index.vue"),
        meta: {
            requireAuth: true
        }
    },
    {
        path: "/system/data",
        name: "数据大屏",
        component: () => import("@/views/systemData/index.vue"),
        meta: {
            requireAuth: true
        }
    }
]