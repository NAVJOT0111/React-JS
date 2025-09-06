import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import './App.css';
import FoodItems from "./components/Fooditems";
import ErrorMessage from "./components/ErrorMessage";

function App() {

  // let foodItems = ["Fruits",'Milk','Green Vegetable','Sabji','Roti']
  // let foodItems = [];

  // if(foodItems.length === 0){
  //   return <h3>I am still Hungry</h3>
  // }

  // let emptyMessage = foodItems.length === 0 ? <h3>I am still Hungry</h3> : null ;
  // {foodItems.length === 0 ? <h3>I am still Hungry</h3> : null};
  // {foodItems.length === 0 && <h3>I am still Hungry</h3> }; 


  return (
    <React.Fragment>

      <h1>Healthy Foods</h1>
      
      {/* {emptyMessage} */}
    <FoodItems> </FoodItems>
    <ErrorMessage> </ErrorMessage>

    </React.Fragment>
  );
}

export default App;
