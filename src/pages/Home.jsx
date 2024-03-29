import React from 'react';
import Card from "../components/Card";

const Home = ({items,
              searchValue,
              setSearchValue,
              onChangeSearchInput,
              onAddToFavorites,
              onAddToCart,
              cartItems,
                  isLoading}) => {


    const renderItems =()=>{
        const filtredItems = items.filter((item)=> item.title.toLowerCase().includes(searchValue.toLowerCase()))
        return(
            isLoading ? [...Array(4)] : filtredItems)
                .map((item, index)=>
                    (<Card
                        key={index}
                        {...item}
                        loading={isLoading}
                        onClickFavorite={(obj)=> onAddToFavorites(obj)}
                        onClickPlus   = {(obj)=> onAddToCart(obj)}
                    />)
        )
    }
    return (
        <div className="content p-40">
            <div className="mb-40 d-flex align-center justify-between">
                <h1>
                    All shoes
                </h1>
                <div className='search-block'>
                    <img src="img/search_icon.svg" alt="search"/>
                    {searchValue &&<img
                        className='clear cu-p'
                        src="img/btn_remove.svg"
                        alt="clear"
                        onClick={()=> setSearchValue("")}/>}
                    <input onChange={onChangeSearchInput} value={searchValue} placeholder="search" type="text"/>
                </div>
            </div>
            <div className="d-flex flex-wrap">
                {
                    renderItems()
                }
            </div>
        </div>
    );
};

export default Home;