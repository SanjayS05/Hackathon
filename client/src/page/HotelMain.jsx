// import React from "react";
// import Image from "../assets/mughal.jpeg";
// import FoodItem from "../components/FoodItem";
// import { Navigate, useNavigate } from "react-router-dom";
// import { useParams } from "react-router-dom";
// import '../styles/HotelMain.css';

// const HotelMain=()=>{
//     // const { hotelName } = useParams();

//     const navigate = useNavigate();

//     const handleClick=()=>{
//         navigate('/cart');
//     }

//     return(
//         <>
//             <nav className="navbar">
//                 <div className="logo">NOVA</div>    
//             </nav>
//             <div className="restaurant-menu">
//                 <div className="box">
//                     <div className="restaurant-info">
//                         <img src={Image} alt="Restaurant" className="restaurant-image" />
//                         <div className="restaurant-details">
//                         <h1>Conan</h1>
//                         <p>Continental, American</p>
//                         <p>Peelamedu</p>
//                         <div className="rating">
//                             <span className="star">&#9733;</span>
//                             <p>4.5</p>
//                         </div>
//                         </div>
//                     </div>
//                     <div className="menu">
//                         <h2>Menu</h2>
//                         <h3>Starters</h3>
//                         <div className="menu-item">
//                             <FoodItem></FoodItem>
//                             <FoodItem></FoodItem>
//                             <FoodItem></FoodItem>
//                             <FoodItem></FoodItem>
//                             <FoodItem></FoodItem>
//                             <FoodItem></FoodItem>
//                         </div>
//                     </div>
//                     <div className="cart-button" onClick={()=>handleClick()}>
//                         <button className="btn" >Cart</button>
//                     </div>
//                 </div>
                
//             </div>
//         </>
//     )
// }

// export default HotelMain

import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import '../styles/HotelMain.css';
import FoodItem from "../components/FoodItem";
import Image from "../assets/mughal.jpeg";
import { useState } from "react";
const HotelMain = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { hotel } = location.state || {}; // Get hotel details from state

  const handleClick = () => {
    navigate('/cart');
  };
  const [quantity, setQuantity] = useState(0);

  const incrementQuantity = () => {
    console.log(hotel);
    setQuantity(quantity + 1);
  };

  const decrementQuantity = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };
  return (
    <>
      <nav className="navbar">
        <div className="logo">NOVA</div>    
      </nav>
      <div className="restaurant-menu">
        <div className="box">
          <div className="restaurant-info">
            <img src={hotel?.image || Image} alt="Restaurant" className="restaurant-image" />
            <div className="restaurant-details">
              <h1>{hotel?.hname || "Hotel Name"}</h1>
              <p>{hotel?.cuisine || "Cuisine"}</p>
              <p>{hotel?.address || "Address"}</p>
              <div className="rating">
                <span className="star">&#9733;</span>
                <p>{hotel?.rating || "Rating"}</p>
              </div>
            </div>
          </div>
          <div className="menu">
            <h2>Menu</h2>
            <h3>Starters</h3>
            <div className="menu-item">
              <FoodItem 
                incrementQuantity={incrementQuantity} 
                decrementQuantity={decrementQuantity} 
                quantity={quantity} 
                rest_id={hotel.res_id}
              />
            </div>
          </div>
          <div className="cart-button" onClick={handleClick}>
            <button className="btn">Cart</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default HotelMain;

// import React, { useState, useEffect } from "react";
// import { useLocation, useNavigate } from "react-router-dom";
// import '../styles/HotelMain.css';
// import FoodItem from "../components/FoodItem";
// import Image from "../assets/mughal.jpeg";
// import axios from 'axios';

// const HotelMain = () => {
//   const location = useLocation();
//   const navigate = useNavigate();
//   const { hotel } = location.state || {}; // Get hotel details from state
//   const [foods, setFoods] = useState([]);

//   const fetchFoodData = async () => {
//     if (hotel?.id) { // Ensure the hotel ID is available
//       try {
//         const response = await axios.get(`http://localhost:5000/food/${hotel.id}`);
//         setFoods(response.data);
//       } catch (error) {
//         console.error('Error fetching food data:', error);
//       }
//     }
//   };

//   useEffect(() => {
//     fetchFoodData();
//   }, [hotel?.id]); // Fetch food data when the hotel ID changes

//   const handleClick = () => {
//     navigate('/cart');
//   };

//   return (
//     <>
//       <nav className="navbar">
//         <div className="logo">NOVA</div>    
//       </nav>
//       <div className="restaurant-menu">
//         <div className="box">
//           <div className="restaurant-info">
//             <img src={hotel?.image || Image} alt="Restaurant" className="restaurant-image" />
//             <div className="restaurant-details">
//               <h1>{hotel?.hname || "Hotel Name"}</h1>
//               <p>{hotel?.cuisine || "Cuisine"}</p>
//               <p>{hotel?.address || "Address"}</p>
//               <div className="rating">
//                 <span className="star">&#9733;</span>
//                 <p>{hotel?.rating || "Rating"}</p>
//               </div>
//             </div>
//           </div>
//           <div className="menu">
//             <h2>Menu</h2>
//             <h3>Starters</h3>
//             <div className="menu-item">
//               {foods.map((food, index) => (
//                 <FoodItem key={index} food={food} />
//               ))}
//             </div>
//           </div>
//           <div className="cart-button" onClick={handleClick}>
//             <button className="btn">Cart</button>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default HotelMain;

// import React, { useState, useEffect } from "react";
// import { useLocation, useNavigate } from "react-router-dom";
// import '../styles/HotelMain.css';
// import FoodItem from "../components/FoodItem";
// import Image from "../assets/mughal.jpeg";
// import axios from 'axios';

// const HotelMain = () => {
//   const location = useLocation();
//   const navigate = useNavigate();
//   const { hotel } = location.state || {}; // Get hotel details from state
//   const [foods, setFoods] = useState([]);

//   const fetchFoodData = async () => {
//     if (hotel?.id) { // Ensure the hotel ID is available
//       try {
//         const response = await axios.get(`http://localhost:5000/food/${hotel.id}`);
//         setFoods(response.data);
//       } catch (error) {
//         console.error('Error fetching food data:', error);
//       }
//     }
//   };

//   useEffect(() => {
//     fetchFoodData();
//   }, [hotel?.id]); // Fetch food data when the hotel ID changes

//   const handleClick = () => {
//     navigate('/cart');
//   };

//   return (
//     <>
//       <nav className="navbar">
//         <div className="logo">NOVA</div>    
//       </nav>
//       <div className="restaurant-menu">
//         <div className="box">
//           <div className="restaurant-info">
//             <img src={hotel?.image || Image} alt="Restaurant" className="restaurant-image" />
//             <div className="restaurant-details">
//               <h1>{hotel?.hname || "Hotel Name"}</h1>
//               <p>{hotel?.cuisine || "Cuisine"}</p>
//               <p>{hotel?.address || "Address"}</p>
//               <div className="rating">
//                 <span className="star">&#9733;</span>
//                 <p>{hotel?.rating || "Rating"}</p>
//               </div>
//             </div>
//           </div>
//           <div className="menu">
//             <h2>Menu</h2>
//             <h3>Starters</h3>
//             <div className="menu-item">
//               {foods.map((food, index) => (
//                 <FoodItem key={index} food={food} />
//               ))}
//             </div>
//           </div>
//           <div className="cart-button" onClick={handleClick}>
//             <button className="btn">Cart</button>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default HotelMain;

// import React, { useState, useEffect } from "react";
// import { useLocation, useNavigate } from "react-router-dom";
// import '../styles/HotelMain.css';
// import FoodItem from "../components/FoodItem";
// import Image from "../assets/mughal.jpeg";
// import axios from 'axios';

// const HotelMain = () => {
//   const location = useLocation();
//   const navigate = useNavigate();
//   const { hotel } = location.state || {}; // Get hotel details from state
//   const [foods, setFoods] = useState([]);

//   const fetchFoodData = async () => {
//     if (hotel?.id) { // Ensure the hotel ID is available
//       try {
//         const response = await axios.get(`http://localhost:5000/food/${hotel.id}`);
//         setFoods(response.data);
//       } catch (error) {
//         console.error('Error fetching food data:', error);
//       }
//     }
//   };

//   useEffect(() => {
//     fetchFoodData();
//   }, [hotel?.id]); // Fetch food data when the hotel ID changes

//   const handleClick = () => {
//     navigate('/cart');
//   };

//   return (
//     <>
//       <nav className="navbar">
//         <div className="logo">NOVA</div>    
//       </nav>
//       <div className="restaurant-menu">
//         <div className="box">
//           <div className="restaurant-info">
//             <img src={hotel?.image || Image} alt="Restaurant" className="restaurant-image" />
//             <div className="restaurant-details">
//               <h1>{hotel?.hname || "Hotel Name"}</h1>
//               <p>{hotel?.cuisine || "Cuisine"}</p>
//               <p>{hotel?.address || "Address"}</p>
//               <div className="rating">
//                 <span className="star">&#9733;</span>
//                 <p>{hotel?.rating || "Rating"}</p>
//               </div>
//             </div>
//           </div>
//           <div className="menu">
//             <h2>Menu</h2>
//             <h3>Starters</h3>
//             <div className="menu-item">
//               {foods.map((food, index) => (
//                 <FoodItem key={index} food={food} />
//               ))}
//             </div>
//           </div>
//           <div className="cart-button" onClick={handleClick}>
//             <button className="btn">Cart</button>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default HotelMain;
