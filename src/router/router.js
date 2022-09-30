import { createWebHistory, createRouter } from "vue-router";
import PaginaLoja from "../view/PaginaLoja.vue"
import DetalhesDoProduto from "../view/DetalhesDoProduto.vue"
import SelecionarUnidade from "@/view/SelecionarUnidade.vue";
import CarrinhoDeProdutos from "@/view/CarrinhoDeProdutos.vue"
import CadastroLogin from "@/view/CadastroLogin.vue"
import LoginNaLoja from "@/view/LoginNaLoja.vue"
import CadastroPasso1 from "@/view/CadastroPasso1.vue"
import CadastroPasso2 from "@/view/CadastroPasso2.vue"
import CadastroPasso3 from "@/view/CadastroPasso3.vue"
import FinalizarCompraEndereco from "@/view/FinalizarCompraEndereco.vue"
import FinalizarCompraTipoPagamento from "@/view/FinalizarCompraTipoPagamento.vue"
import FinalizarCompraConferir from "@/view/FinalizarCompraConferir.vue"
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
    name: "LoginNaLoja",component: LoginNaLoja
  }, {
      path: "/cadastro",
    name: "CadastroPasso1",component: CadastroPasso1
  }, {
      path: "/cadastro",
    name: "CadastroPasso2",component: CadastroPasso2
  }, {
      path: "/cadastro",
    name: "CadastroPasso3",component: CadastroPasso3
  }, {
      path: "/finalizar",
    name: "FinalizarCompraEndereco",component: FinalizarCompraEndereco
  }, {
      path: "/finalizar",
    name: "FinalizarCompraTipoPagamento",component: FinalizarCompraTipoPagamento
  }, {
      path: "/finalizar",
    name: "FinalizarCompraConferir",component: FinalizarCompraConferir  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;