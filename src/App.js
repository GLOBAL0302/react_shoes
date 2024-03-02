import Index from "./components/Card";
import Header from "./components/Header";
import Drawer from "./components/Drawer";


const arr = [
    {
        title: "Мужские Кроссовки Nike Blazer Mid Suede",
        price: 12999,
        img: "/img/all_sneakers/sneakers_1.jpg"
    },
    {
        title: "Мужские Кроссовки Nike Air Max 270",
        price: 16999,
        img: "/img/all_sneakers/sneakers_2.jpg"
    },
    {
        title: "Мужские Кроссовки Nike Blazer Mid Suede",
        price: 8999,
        img: "/img/all_sneakers/sneakers_3.jpg"
    },
    {
        title: "Кроссовки Puma X Aka Boku Future Rider",
        price: 5999,
        img: "/img/all_sneakers/sneakers_4.jpg"
    }
    ]

function App() {
  return (
    <div className="wrapper clear">
        <Drawer/>
        <Header/>
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
          <div className="d-flex">
              {
                  arr.map(item=>
                      (<Index
                          title = {item.title}
                          price={item.price}
                          img = {item.img}
                          onClick = {()=> console.log(item)}
                      />))
              }
          </div>
      </div>
    </div>
  );
}

export default App;
