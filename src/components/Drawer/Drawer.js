import React from 'react';
import "./Drawer.scss"
import Info from "../Info";
import AppContext from "../../context";
import axios from "axios";

const delay = ()=> new Promise((resolve, reject)=> setTimeout(resolve, 1000))
const Drawer = ({onRemove, onClose, items=[]}) => {
    const [isOrderCompleted,setIsOrderCompleted ] = React.useState(false)
    const [orderId,setOrderId ] = React.useState(null)
    const {setCartItems, cartItems} = React.useContext(AppContext)
    const [isLoading, setIsLoading] = React.useState(false)
    const onClickOrder= async ()=>{
        try{
            setIsLoading(true)
            const {data} = await axios.post("https://65e48bdd3070132b3b24e941.mockapi.io/orders", {
                items: cartItems
            })
            setOrderId(data.id)
            setIsOrderCompleted(true)
            setCartItems([])
            for(let i = 0; i < cartItems.length; i++){
                const item = cartItems[i]
                await  axios.delete("https://65e48bdd3070132b3b24e941.mockapi.io/cart/" + item.id)
                await delay()
            }

        }catch (error){
            alert("Cant submit orders")
        }
        setIsLoading(false)
    }
    return (
        <div className="overlay" style={{}}>
            <div className="drawer">
                <h2 className='mb-30 d-flex justify-between'>
                    Корзина
                    <img
                        onClick={onClose}
                        className='removeBtn cu-p'
                        src="/img/btn_remove.svg"
                        alt="remove"
                    />
                </h2>
                {
                    items.length > 0? <div className="have_items d-flex flex-column flex">
                        <div className="items" style={{flex:1}}>
                            {
                                items.map(obj=> (
                                    <div key={obj.id} className="cartItem d-flex align-center mb-20">
                                        <div
                                            style={{ backgroundImage: `url(${obj.img})`}}
                                            className="cartItemImg">
                                        </div>
                                        <div className='mr-20 flex'>
                                            <p className='mb-5'>{obj.title}</p>
                                            <b>{obj.price} rub</b>
                                        </div>
                                        <img
                                            className='removeBtn'
                                            src="/img/btn_remove.svg"
                                            alt="remove"
                                            onClick={()=>{onRemove(obj.id)}}
                                        />
                                    </div>
                                ))
                            }
                        </div>
                        <div className="cartTotalBlock">
                            <ul>
                                <li className='d-flex'>
                                    <span>Итого</span>
                                    <div></div>
                                    <b>21 498 rub</b>
                                </li>
                                <li className='d-flex'>
                                    <span>Налог 5%</span>
                                    <div></div>
                                    <b>1074 rub</b>
                                </li>
                            </ul>

                            <button disabled={isLoading} className="greenButton" onClick={onClickOrder}>Оформить заказ <img src='/img/button_pointer.svg' alt='pointer'/></button>
                        </div>
                    </div>:<Info
                        title={isOrderCompleted ? "Order Sent": "Empty cart"}
                        description={isOrderCompleted ? `Order Sent with number #${orderId}`:"Please add at least one item, so then you can see it"}
                        img={isOrderCompleted ?"/img/orderSent.svg" : "/img/empty_cart.svg"}
                    />
                }
            </div>
        </div>
    );
};

export default Drawer;