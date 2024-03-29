import cardStyles from "./Card.module.scss";
import React from "react";
import ContentLoader from "react-content-loader"
import AppContext from "../../context";

function Card({
                  id,
                  title,
                  price,
                  img,
                  onClickPlus,
                  onClickFavorite,
                  favorited = false,
                  loading= false}){

    const {isItemAdded} = React.useContext(AppContext)
    const[isFavorite, setIsFavorite] = React.useState(favorited)
    const obj = {
        id,
        parentId: id,
        title,
        price,
        img}

    const onPlusBtn = ()=>{
        console.log()
        onClickPlus(obj)
    }
    const favoriteBtn = ()=>{
        onClickFavorite(obj)
        setIsFavorite(prevState => !prevState)
    }

    return(
        <div className={cardStyles.card}>
            {onClickFavorite && loading ? <ContentLoader
                speed={2}
                width={150}
                height={265}
                viewBox="0 0 155 265"
                backgroundColor="#f3f3f3"
                foregroundColor="#ecebeb"
            >
                <rect x="1" y="0" rx="10" ry="10" width="155" height="155" />
                <rect x="0" y="167" rx="5" ry="5" width="155" height="15" />
                <rect x="0" y="187" rx="5" ry="5" width="100" height="15" />
                <rect x="1" y="234" rx="5" ry="5" width="80" height="25" />
                <rect x="124" y="230" rx="10" ry="10" width="32" height="32" />
            </ContentLoader>:<>
                {onClickFavorite && <div className='favorite'>
                    <img src={isFavorite ? "img/heart_liked.svg" : "img/heart_unliked.svg"} alt='img'
                         onClick={favoriteBtn}/>
                </div>}
                <img width={133} height={112} src={img} alt="sneakers"/>
                <h5>{title}</h5>
                <div className="d-flex justify-between align-center">
                    <div className='d-flex flex-column'>
                        <span>price</span>
                        <b>{price} rub</b>
                    </div>

                    {onClickPlus && <img
                        className={cardStyles.plus}
                        src={isItemAdded(id) ? "img/btn-check.svg" : "img/btn-plus.svg"}
                        alt="plus"
                        onClick={onPlusBtn}/>}
                </div>
            </>}

    </div>
    )
}

export default Card