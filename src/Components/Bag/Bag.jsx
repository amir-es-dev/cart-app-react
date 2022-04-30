import "./Bag.css";
import Total from "../Total/Total";
import Delete from "../Delete/Delete";
import Edit from "../Edit/Edit";

const Bag = ({ data, setData }) => {
  console.log("bag rendered");

  return (
    <div className="bag-box">
      <div className="item-container">
        {data.map((item) => (
          <div className="item-box" key={item.id}>
            <div>
              <p>Name</p>
              <p>{item.name}</p>
            </div>
            <div>
              <p>Price</p>
              <p>{item.price}$</p>
            </div>
            <div>
              <p>Count</p>
              <p>{item.count}x</p>
            </div>
            <div>
              <p>Discount</p>
              <p>{item.discount}%</p>
            </div>
            <div>
              <p>Final Price</p>
              <p>{item.finalPrice}$</p>
            </div>
            <div>
              <p>Action</p>
              <Delete selectedItem={item} data={data} setData={setData} />
              <Edit selectedItem={item} data={data} setData={setData} />
            </div>
          </div>
        ))}
      </div>
      <Total data={data} />
    </div>
  );
};

export default Bag;
