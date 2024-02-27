function Card(){
    return(<div className="card">
        <div className='favorite'>
            <img src="/img/heart_unliked.svg" alt="heart"/>
        </div>
        <img width={133} height={112} src="/img/all_sneakers/sneakers_1.jpg" alt="sneakers"/>
        <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
        <div className="d-flex justify-between align-center">
            <div className='d-flex flex-column'>
                <span>price</span>
                <b>12, 999 rub</b>
            </div>
            <button className='button'>
                <img width={11} height={11} src="/img/plus_button.svg" alt="plus"/>
            </button>
        </div>
    </div>)
}

export default Card