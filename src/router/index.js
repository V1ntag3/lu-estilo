import { createWebHistory, createRouter } from "vue-router";
import SelecionarUnidade from "../view/SelecionarUnidade.vue"

const routes = [
     {
    path: "/",
    name: "Home",
    component: SelecionarUnidade,
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;