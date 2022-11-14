import { Route, Routes } from "react-router-dom";
import { Home, Product, PageNotFound } from ".";

export default function Router() {
  return (
    <>
      <Routes>
        <Route index path="/" element={<Home />}></Route>
    
        <Route path="/product/:productID" element={<Product />}></Route>
        <Route path="*" element={<PageNotFound />}></Route>
      </Routes>
    </>
  );
}
