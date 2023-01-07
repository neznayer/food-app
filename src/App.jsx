import { useState } from "react";
import { Cart } from "./components/Cart/Cart";
import { Header } from "./components/Layout/Header";
import { Meals } from "./components/Meals/Meals";

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };
  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  return (
    <>
      <Header onShowCart={showCartHandler} onHideCart={hideCartHandler} />
      {cartIsShown && <Cart onCartHide={hideCartHandler} />}
      <main>
        <Meals />
      </main>
    </>
  );
}

export default App;
