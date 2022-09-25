import { createWebHistory, createRouter } from "vue-router";
import SelecionarUnidade from "../view/SelecionarUnidade.vue"
import PaginaLoja from "../view/PaginaLoja.vue"
const routes = [
     {
    path: "/",
    name: "Home",
    component: SelecionarUnidade,
  },
  {
    path: "/loja/:slug",
    name: "PaginaLoja",
    component: PaginaLoja
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;