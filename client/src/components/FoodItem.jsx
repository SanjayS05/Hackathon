// import React,{useEffect, useState} from 'react';
// import '../styles/FoodItem.css';
// import axios from "axios";

// const FoodItem = ({decrementQuantity,incrementQuantity,quantity,res_id}) => {

//   const [foodItems , setFoodItem] = useState([]);

//   const display = async () => {
//     try {
//       const response = await axios.get('http://localhost:5000/food/getFood', { param: {res_id} });
//       setFoodItem(response.data);
//     } catch (error) {
//       console.error('Error fetching Food Item data:', error);
//     }
//   }

//   useEffect(() => {
//     display();
//   }, [res_id]);
  
//   return (
//   {foodItems.map((hotel, index) =>(
//     <div className="food-item" key={index}>
//       <div className="details">
//         <div className="name">{hotel.name}</div>
//         <div className="price">{hotel.price}</div>
//         <div className="veg-icon">●</div>
//       </div>
//       <div className="controls">
//         <button className="decrement" onClick={decrementQuantity}>−</button>
//         <div className="quantity">{quantity}</div>
//         <button className="increment" onClick={incrementQuantity}>+</button>
//       </div>
//     </div>
//   ))}
//   );
// }

// export default FoodItem;


import React, { useEffect, useState } from 'react';
import '../styles/FoodItem.css';
import axios from "axios";

const FoodItem = ({ decrementQuantity, incrementQuantity, quantity, rest_id }) => {

  const [foodItems, setFoodItems] = useState([]);

  const display = async () => {
    try {
      const response = await axios.get('http://localhost/food/getFood', { params: { rest_id } });
      console.log(response)
      setFoodItems(response.data);
    } catch (error) {
      console.error('Error fetching food item data:', error);
    }
  }

  useEffect(() => {
    display();
  }, []);

  return (
    <div>
      {foodItems.map((item, index) => (
        <div className="food-item" key={index}>
          <div className="details">
            <div className="name">{item.name}</div>
            <div className="price">Rs.{item.price}</div>
            <div className="veg-icon">●</div>
          </div>
          <div className="controls">
            <button className="decrement" onClick={decrementQuantity}>−</button>
            <div className="quantity">{quantity}</div>
            <button className="increment" onClick={incrementQuantity}>+</button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default FoodItem;

// import React, { useEffect, useState } from 'react';
// import '../styles/FoodItem.css';
// import axios from "axios";

// const FoodItem = ({ decrementQuantity, incrementQuantity, quantity, res_id }) => {
//   const [foodItems, setFoodItems] = useState([]);

//   const display = async () => {
//     try {
//       const response = await axios.get('http://localhost:5000/food/getFood', { params: { res_id }});
//       setFoodItems(response.data);
//     } catch (error) {
//       console.error('Error fetching food item data:', error);
//     }
//   };

  
//   return (
//     <div>
//       {foodItems.map((item, index) => (
//         <div className="food-item" key={index}>
//           <div className="details">
//             <div className="name">{item.name}</div>
//             <div className="price">Rs.{item.price}</div>
//             <div className="veg-icon">●</div>
//           </div>
//           <div className="controls">
//             <button className="decrement" onClick={decrementQuantity}>−</button>
//             <div className="quantity">{quantity}</div>
//             <button className="increment" onClick={incrementQuantity}>+</button>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// }

// export default FoodItem;
 