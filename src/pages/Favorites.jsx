import React from 'react';
import Card from "../components/Card";
import AppContext from "../context";

const Favorites = ({onAddToFavorites}) => {
    const {favoritesList} = React.useContext(AppContext)
    return (
        <div className="content p-40">
            <div className="mb-40 d-flex align-center justify-between">
                <h1>Saved ones</h1>
            </div>
            <div className="d-flex flex-wrap">
                {
                    favoritesList
                        .map((item, index)=>
                            (<Card
                                key={index}
                                title = {item.title}
                                price={item.price}
                                img = {item.img}
                                id = {item.id}
                                favorited={true}
                                onClickFavorite={onAddToFavorites}
                            />))
                }
            </div>
        </div>
    );
};

export default Favorites;