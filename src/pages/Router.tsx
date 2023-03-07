import { Route, Routes } from "react-router-dom";
import { ListaPage } from "./Listas";
import { LoginPage } from "./Login";
import { ShoppingPage } from "./Shopping";

export function Router() {
  return (
    <Routes >
      <Route path="/" element={<LoginPage/>} />
      <Route path="/lista" element={<ListaPage/>} />
      <Route path="/shopping" element={<ShoppingPage/>} />
    </Routes>
  )
}