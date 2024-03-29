import Card from "./components/Card";
import Header from "./components/Header";
import Drawer from "./components/Drawer/Drawer";
import React, {useState} from "react";
import axios from "axios";
import {Routes, Route} from "react-router-dom";
import Home from "./pages/Home"
import Favorites from "./pages/Favorites";
import favorites from "./pages/Favorites";
import AppContext from "./context";
import Orders from "./pages/Orders";


// const arr = [
//     {
//         "title": "Мужские Кроссовки Nike Blazer Mid Suede",
//         "price": 12999,
//         "img": "/img/all_sneakers/sneakers_1.jpg"
//     },
//     {
//         "title": "Мужские Кроссовки Nike Air Max 270",
//         "price": 16999,
//         "img": "/img/all_sneakers/sneakers_2.jpg"
//     },
//     {
//         "title": "Мужские Кроссовки Nike Blazer Mid Suede",
//         "price": 8999,
//         "img": "/img/all_sneakers/sneakers_3.jpg"
//     },
//     {
//         "title": "Кроссовки Puma X Aka Boku Future Rider",
//         "price": 5999,
//         "img": "/img/all_sneakers/sneakers_4.jpg"
//     }
//     ]


function App() {

    const [items, setItems] = React.useState([
    ])
    const [cartItems, setCartItems] = React.useState([
    ])
    const [favoritesList, setFavoritesList] = React.useState([])
    const [searchValue, setSearchValue] = React.useState('')
    const [cartOpened, setCartOpened] = React.useState(false)
    const [isLoading, setIsLoading] = React.useState(true)



    React.useEffect( ()=>{
        // Addiotional opt
        // fetch("https://65e48bdd3070132b3b24e941.mockapi.io/items").then(res =>{
        //     return res.json();
        // }).then(
        //     json => setItems(json)
        // );


        async function fetchData(){

            try{
                const itemsResponse = await axios.get("https://65e48bdd3070132b3b24e941.mockapi.io/items")
                const cartResponse = await axios.get("https://65e48bdd3070132b3b24e941.mockapi.io/cart")
                const favoritesResponse = await axios.get("https://65e48bdd3070132b3b24e941.mockapi.io/favoritesList")

                setIsLoading(false)
                setCartItems(cartResponse.data)
                setFavoritesList(favoritesResponse.data)
                setItems(itemsResponse.data)
            }
            catch (error){

            }
        }
        fetchData()
    }, [])

    const onAddToCart = async(obj)=>{

        try{
            const findItem = cartItems.find((item)=> Number(item.parentId) === Number(obj.id))
            if(findItem){
                setCartItems(prevState => prevState.filter(item => Number(item.parentId) !== Number(obj.id)))
                await axios.delete(`https://65e48bdd3070132b3b24e941.mockapi.io/cart/${findItem.id}`)
            }else{
                setCartItems((prevState)=>[...prevState, obj])
                const {data} = await axios.post("https://65e48bdd3070132b3b24e941.mockapi.io/cart", obj)
                setCartItems(prevState => prevState.map(item=>{
                    if(item.parentId === data.parentId){
                        return{
                            ...item,
                            id: data.id
                        }
                        return item
                    }
                }))
            }
        }catch (error){

        }
    }

    const onRemoveItem= async(id) => {
        try {
            axios.delete(`https://65e48bdd3070132b3b24e941.mockapi.io/cart/${id}`)
            setCartItems(prevState => prevState.filter(item => Number(item.id) !== Number(id)))
        }catch (error){

        }
    }

    const onAddToFavorites = async(obj)=>{
        try{
            if(favoritesList.find((favObj) => favObj.id === obj.id)){
                await axios.delete(`https://65e48bdd3070132b3b24e941.mockapi.io/favoritesList/${obj.id}`)

            }else{
                const {data} = await axios.post("https://65e48bdd3070132b3b24e941.mockapi.io/favoritesList", obj)
                setFavoritesList(prevState => [...prevState, data])
            }
        }catch (error){
            alert("have not added to favorite")
        }
    }


    const onChangeSearchInput = event =>{
        setSearchValue(event.target.value)
    }
    const isItemAdded = (id)=>{
        return cartItems.some((obj)=> Number(obj.parentId)=== Number(id))
    }
  return (
   <AppContext.Provider value={
       {
       cartItems,
       favoritesList,
       items,
       isItemAdded,
       setCartOpened,
       setCartItems,
       onAddToCart
       }
   }>
       <div className="wrapper clear">
           <Drawer
               items={cartItems}
               onClose={()=> setCartOpened(false)}
               onRemove={onRemoveItem}
               opened = {cartOpened}/>

           <Header onClickCartOpen={()=>setCartOpened(true)}/>

           <Routes>
               <Route path='' exact element={
                   <Home
                       items={items}
                       cartItems={cartItems}
                       searchValue = {searchValue}
                       setSearchValue={setSearchValue}
                       onChangeSearchInput={onChangeSearchInput}
                       onAddToFavorites={onAddToFavorites}
                       onAddToCart={onAddToCart}
                       isLoading={isLoading}/>
               }></Route>
               <Route path='favorites'  element={<Favorites
                   onAddToFavorites={onAddToFavorites}/>}>
               </Route>
               <Route path="orders" element={<Orders/>}>

               </Route>
           </Routes>


       </div>
   </AppContext.Provider>
  );
}

export default App;
