import { BrowserRouter, Switch, Route } from "react-router-dom";
import Login from "pages/Login";
import Feira from "./pages/Feira/index";
import Carrinho from "pages/Carrinho";
import { UsuarioProvider } from "common/context/Usuario";
import { CarrinhoProvider } from "common/context/Carrinho";

function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <UsuarioProvider>
          <Route exact path="/">
            <Login />
          </Route>
          <CarrinhoProvider>
            <Route exact path="/feira">
              <Feira />
            </Route>
          </CarrinhoProvider>
        </UsuarioProvider>
        <Route path="/carrinho">
          <Carrinho />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default Router;
