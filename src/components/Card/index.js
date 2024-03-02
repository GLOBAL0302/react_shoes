import cardStyles from "./Card.module.scss";

function Index({title, price, img, onClick}){

    const onClickButton = ()=>{
        alert("hello")
    }
    return(<div className={cardStyles.card}>
        <div className='favorite'>
            <img src="/img/heart_unliked.svg" alt="heart"/>
        </div>
        <img width={133} height={112} src={img} alt="sneakers"/>
        <h5>{title}</h5>
        <div className="d-flex justify-between align-center">
            <div className='d-flex flex-column'>
                <span>price</span>
                <b>{price} rub</b>
            </div>
            <button className='button' onClick={onClick}>
                <img width={11} height={11} src="/img/plus_button.svg" alt="plus"/>
            </button>
        </div>
    </div>)
}

export default Index