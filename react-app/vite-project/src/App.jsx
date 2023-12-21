import { Cart, ItemListContainer, NavBar, ItemDetailContainer } from "./components"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { CartContextProvider } from "./context/CartContext"
import  Order  from "./components/Order/Order"



export const App = () => {
  return (
    <BrowserRouter>
      <CartContextProvider>  
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/category/:category" element={<ItemListContainer />} />
          <Route path="/item/:id" element={<ItemDetailContainer />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/terminar-compra" element={<Order />} />
        </Routes>
      </CartContextProvider>
    </BrowserRouter>
  )
}