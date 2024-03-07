import React from 'react';

const Drawer = ({onClose, items=[]}) => {
    return (
        <div className="overlay" style={{}}>
            <div className="drawer">
                <h2 className='mb-30 d-flex justify-between'>
                    Корзина
                    <img
                        onClick={onClose}
                        className='removeBtn cu-p'
                        src="/img/btn_remove.svg"
                        alt="remove"
                    />
                </h2>
                <div className="items" style={{flex:1}}>
                    {
                        items.map(obj=> (
                            <div className="cartItem d-flex align-center mb-20">
                                <div
                                    style={{ backgroundImage: `url(${obj.img})`}}
                                    className="cartItemImg">
                                </div>
                                <div className='mr-20 flex'>
                                    <p className='mb-5'>{obj.title}</p>
                                    <b>{obj.price} rub</b>
                                </div>
                                <img
                                    className='removeBtn'
                                    src="/img/btn_remove.svg"
                                    alt="remove"
                                />
                            </div>
                        ))
                    }
                </div>
                <div className="cartTotalBlock">
                    <ul>
                        <li className='d-flex'>
                            <span>Итого</span>
                            <div></div>
                            <b>21 498 rub</b>
                        </li>
                        <li className='d-flex'>
                            <span>Налог 5%</span>
                            <div></div>
                            <b>1074 rub</b>
                        </li>
                    </ul>
                    <button className="greenButton">Оформить заказ <img src='/img/button_pointer.svg' alt='pointer'/></button>
                </div>
            </div>
        </div>
    );
};

export default Drawer;