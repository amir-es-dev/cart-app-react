import {Slider} from 'antd';
import { useState } from 'react';
import './AddItem.css'

const AddItem = ({data, setData}) => {
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [discount, setDiscount] = useState(0);

    const createItem = () => {
        console.log(typeof price)
        if(!name || !price || typeof price !== 'number') {
            alert('please insert valid information');
            setPrice('');
            setDiscount('');
            return;
        };
        const item = {name, price, discount, finalPrice: price * (100 - discount) / 100};
        const updatedData = [...data, item];
        setData(updatedData);
        setName('');
        setPrice('');
        setDiscount(0);
    }



    return (
        <div className='add-box'>
            <h4>Name</h4>
            <input type="text" id="item-name" value={name} onChange={(e) => setName(e.target.value)}/>
            <h4>Price</h4>
            <input type="text" id="item-price" value={price ? price : ''} onChange={(e) => setPrice(parseFloat(e.target.value))} />
            <h4>Discount</h4>
            <Slider defaultValue={100} value={discount} onChange={(value) => setDiscount(value)} />
            <div className='final-price'>
                <span>Final Price: </span>
                <h4>{price ? `${(price * (100 - discount) / 100).toFixed(2)} $` : null}</h4>
            </div>
            <button onClick={createItem}>Add</button>
        </div>
    )
}

export default AddItem;