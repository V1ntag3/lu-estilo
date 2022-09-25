import { createWebHistory, createRouter } from "vue-router";
import SelecionarUnidade from "../view/SelecionarUnidade.vue"
import PaginaLoja from "../view/PaginaLoja.vue"
import DetalhesDoProduto from "../view/DetalhesDoProduto.vue"
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
  },{
    path: "/produto",
    name: "DetalhesDoProduto",
    component: DetalhesDoProduto,
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;