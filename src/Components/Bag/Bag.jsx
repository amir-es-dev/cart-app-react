import './Bag.css';

const Bag = ({data}) => {
    return (
        <div className="bag-box">
            {
                data.map((item, i) => (
                    <div className='item-box' key={i}>
                        <div>
                            <p>Name</p>
                            <p>{item.name}</p>
                        </div>
                        <div>
                            <p>Price</p>
                            <p>{item.price}$</p>
                        </div>
                        <div>
                            <p>Discount</p>
                            <p>{item.discount}%</p>
                        </div>
                        <div>
                            <p>Final Price</p>
                            <p>{item.finalPrice}$</p>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default Bag;