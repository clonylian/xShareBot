import * as VueRouter from "vue-router";

const routes = [
  {
    path: "/",
    component: () => import("../view/home.vue"),
  },
  {
    path: "/Stake",
    name: "Stake",
    component: () => import("../view/staking.vue"),
  },
  {
    path: "/Airdrop",
    name: "Airdrop",
    component: () => import("../view/airdrop.vue"),
  },
];

const router = VueRouter.createRouter({
  history: VueRouter.createWebHashHistory(),
  routes,
  scrollBehavior(to) {
    if (to.hash) {
      const element = document.querySelector(to.hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
        return false; // 阻止默认的滚动行为
      }
    }
    return { top: 0 }; // 默认滚动到页面顶部
  },
});

export default router;
