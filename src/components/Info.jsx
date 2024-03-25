import React from 'react';
import AppContext from "../context";

const Info = ({title, description, img}) => {
    const {setCartOpened} = React.useContext(AppContext)

    return (
            <div className="empty_drawer ">
                <div className="empty_drawer_up d-flex flex-column align-center">
                    <img className="" src={img} alt=""/>
                    <h3 className='text-center'>Empty cart</h3>
                </div>
                <p>{description}</p>
                <button onClick={()=>setCartOpened(false)} className="greenButton cu-p">Go back</button>
            </div>

    );
};

export default Info;