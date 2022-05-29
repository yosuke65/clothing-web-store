import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { Routes, Route } from "react-router";
import Home from "./routes/home/home.component";
import Navigation from "./routes/navigation/navigation.component";
import Authentication from "./routes/authentication/authentication.component";
import Shop from "./routes/shop/shop.component";
import Checkout from "./routes/checkout/checkout.component";
import { checkUserSession } from "./store/user/user.action";

import { GlobalStyle } from "./global.styles";

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(checkUserSession());
  }, [dispatch]);

  return (
    <>
    <GlobalStyle/>
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />}></Route>
        <Route path="shop/*" element={<Shop />}></Route>
        <Route path="auth" element={<Authentication />}></Route>
        <Route path="checkout" element={<Checkout />}></Route>
      </Route>
    </Routes>
    </>
  );
};

export default App;
