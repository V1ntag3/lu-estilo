import { createWebHistory, createRouter } from "vue-router";
import PaginaLoja from "../view/PaginaLoja.vue"
import DetalhesDoProduto from "../view/DetalhesDoProduto.vue"
import SelecionarUnidade from "@/view/SelecionarUnidade.vue";
import CarrinhoDeProdutos from "@/view/CarrinhoDeProdutos.vue"
import CadastroLogin from "@/view/CadastroLogin.vue"
import LoginDaLoja from "@/view/LoginDaLoja.vue"
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
  }, {
    path: "/loja",
    name: "PaginaLojaVoltar",
    component: PaginaLoja
  }, 
    {
    path: "/produto/:id",
    name: "DetalhesDoProduto",
    component: DetalhesDoProduto,
  },{
    path: "/carrinho",
    name: "CarrinhoDeProdutos",
    component: CarrinhoDeProdutos,
  }, {
      path: "/cadastroLogin",
    name: "CadastroLogin",component: CadastroLogin
  }, {
      path: "/login",
    name: "LoginDaLoja",component: LoginDaLoja
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;