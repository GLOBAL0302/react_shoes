import Card from "./components/Card";
import Header from "./components/Header";
import Drawer from "./components/Drawer";
import React, {useState} from "react";


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
    const [cartOpened, setCartOpened] = React.useState(false)

    React.useEffect(()=>{
        fetch("https://65e48bdd3070132b3b24e941.mockapi.io/items").then(res =>{
            return res.json();
        }).then(
            json => setItems(json)
        )
    }, [])

    const onAddToCart = (obj)=>{
        setCartItems(prevState => [...prevState, obj])
    }
  return (
    <div className="wrapper clear">
        {cartOpened && <Drawer items={cartItems} onClose={()=> setCartOpened(false)}/>}
        <Header onClickCartOpen={()=>setCartOpened(true)}/>
      <div className="content p-40">
     <div className="mb-40 d-flex align-center justify-between">
         <h1>
             All shoes
         </h1>
         <div className='search-block'>
             <img src="/img/search_icon.svg" alt="search"/>
             <input placeholder="search" type="text"/>
         </div>
     </div>
          <div className="d-flex flex-wrap">
              {
                  items.map(item=>
                      (<Card
                          title = {item.title}
                          price={item.price}
                          img = {item.img}
                          onClickFavorite={()=> console.log("Added to favorite")}
                          onClickPlus   = {onAddToCart}
                      />))
              }
          </div>
      </div>
    </div>
  );
}

export default App;
