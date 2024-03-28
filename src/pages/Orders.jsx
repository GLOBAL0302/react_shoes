import React from 'react';
import Card from "../components/Card";
import AppContext from "../context";
import axios from "axios";

const Orders = () => {
    const [orders, setOrders] = React.useState([])
    const {onAddToFavorites,onAddToCart} = React.useContext(AppContext)
    const [isLoading, setIsLoading] = React.useState(true)


    React.useEffect(()=>{
       async function fetchOrders(){
           try{
               const{data} = await axios.get("https://65e48bdd3070132b3b24e941.mockapi.io/orders")
               setOrders(data.reduce((prev, obj)=>[...prev, ...obj.items],[]))
               setIsLoading(false)
           }catch (error){
               console.log("no orders", error)
           }

       }
       fetchOrders()
    },[])

    return (
        <div className="content p-40">
            <div className="mb-40 d-flex align-center justify-between">
                <h1>My orders</h1>
            </div>
            <div className="d-flex flex-wrap">
                {
                    isLoading ? [...Array(4)] : orders
                        .map((item, index)=>
                            (<Card
                                key={index}
                                {...item}
                                loading={isLoading}

                            />))
                }
            </div>
        </div>
    );
};

export default Orders;