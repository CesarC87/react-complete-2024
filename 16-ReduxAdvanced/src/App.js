import { useDispatch, useSelector } from "react-redux";
import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import { cartSelector, isVisibleSelector, notificationSelector } from "./store/selectors/selectors";
import { useEffect } from "react";
import Notification from "./components/UI/Notification";
import { sendCardData } from "./store/actions/cartActions";

let firstRender = true

function App() {
  const toggle = useSelector(isVisibleSelector);
  const cart = useSelector(cartSelector);
  const notification = useSelector(notificationSelector);
  const dispatch = useDispatch()

  
  useEffect(() => {
    if(firstRender){
      firstRender = false
      return
    }
    dispatch(sendCardData(cart))
    
  }, [cart, dispatch]);
console.log('asd cart', cart)
  return (
    <>
      {notification && <Notification status={notification.status} title={notification.title} message={notification.message}/>}
      <Layout>
        {toggle && <Cart cartProducts={cart.items}/>}
        <Products />
      </Layout>
    </>
  );
}

export default App;
