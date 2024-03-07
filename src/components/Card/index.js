import cardStyles from "./Card.module.scss";
import React from "react";

function Card({title, price, img, onClickPlus, onClickFavorite}){
    const[isAdded, setIsAdded] = React.useState(false)

    const onPlusBtn = ()=>{
        onClickPlus({title, price, img})
        setIsAdded(prevState => !prevState)
    }



    return(<div className={cardStyles.card}>
        <div className='favorite' onClick={onClickFavorite}>
            <img src="/img/heart_unliked.svg" alt="heart"/>
        </div>
        <img width={133} height={112} src={img} alt="sneakers"/>
        <h5>{title}</h5>
        <div className="d-flex justify-between align-center">
            <div className='d-flex flex-column'>
                <span>price</span>
                <b>{price} rub</b>
            </div>
            <img
                className={cardStyles.plus}
                src={isAdded?"/img/btn-check.svg":"/img/btn-plus.svg"}
                alt="plus"
                onClick={onPlusBtn}/>
        </div>
    </div>)
}

export default Card