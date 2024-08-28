import { cartActions } from "../slices/cartSlice"
import { uiActions } from "../slices/uiSlice"

export const sendCardData = (cart) => {
    return async (dispatch) => { // El arg dispatch lo da automaticamente Redux
        dispatch(uiActions.showNotification({
            status:'pending',
            title:'Sending...',
            message:'Sending card data!',
        }))
        
        const sendRequest = async () => {
            console.log('asd uiAct', uiActions.showNotification)
            const response = await fetch("https://react2024max-5132d-default-rtdb.firebaseio.com/cart.json", {
              method: "PUT",
              body: JSON.stringify(cart),
            });
            if(!response.ok){
              throw new Error('No se pudo enviar la información')
            }

        }
        try {
            await sendRequest() 
            dispatch(uiActions.showNotification({
              status:'success',
              title:'Success',
              message:'Card data sent!',
            }))
            // const responseData = response.json()
        } catch (error) {
            dispatch(uiActions.showNotification({
                status:'error',
                title:'Error!',
                message:'Sending card data failed!',
              }))
        }
    }
  }

export const fetchCardData = (cart) => {
    return async (dispatch) => { // El arg dispatch lo da automaticamente Redux
        const fetchData = async () => {
            const response = await fetch("https://react2024max-5132d-default-rtdb.firebaseio.com/cart.json");
            if(!response.ok){
              throw new Error('No se pudo obrtener la información')
            }
            const data = await response.json();
            return data
        }
        try {
            const cardData = await fetchData() 
            dispatch(cartActions.replaceCart({
              items: cardData.items || [],
              totalQty: cardData.totalQty
            }))
        } catch (error) {
            dispatch(uiActions.showNotification({
                status:'error',
                title:'Error!',
                message:'Sending card data failed!',
              }))
        }
    }
  }