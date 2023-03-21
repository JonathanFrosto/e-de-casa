import { Route, Routes } from "react-router-dom";
import { ProtectedRoute } from "../util/ProtectedRoute";
import { EditShoppingList } from "./EditShoppingList";
import { ListaPage } from "./Listas";
import { LoginPage } from "./Login";
import { RegistrationPage } from "./Registration";
import { ShoppingPage } from "./Shopping";

export function Router() {
  return (
    <Routes >
      <Route path="/login" element={<LoginPage/>} />
      <Route path="/registration" element={<RegistrationPage/>} />
      <Route path="/shopping" element={
          <ProtectedRoute>
            <ListaPage/>
          </ProtectedRoute>
        } />
      <Route path="/shopping/:shoppingListId" element={
        <ProtectedRoute>
          <ShoppingPage/>
        </ProtectedRoute>
      } />
      <Route path="/shopping/:shoppingListId/edit" element={
        <ProtectedRoute>
          <EditShoppingList/>
        </ProtectedRoute>
      } />
      <Route path="*" element={<h1>Page not found</h1>} />
    </Routes>
  )
} 