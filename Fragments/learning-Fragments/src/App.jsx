import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import './App.css';

function App() {

  let foodItems = ["Fruits",'Milk','Green Vegetable','Sabji','Roti'];
  // let foodItems = [];

  // if(foodItems.length === 0){
  //   return <h3>I am still Hungry</h3>
  // }

  let emptyMessage = foodItems.length === 0 ? <h3>I am still Hungry</h3> : null ;

  return (
    <React.Fragment>

      <h1>Healthy Foods</h1>

      {/* {foodItems.length === 0 ? <h3>I am still Hungry</h3> : null} */}
      {/* {foodItems.length === 0 && <h3>I am still Hungry</h3> }; */}
      {emptyMessage};

      <ul className="list-group">
        {foodItems.map(item => <li key={item} class="list-group-item">{item}</li>)}
      </ul>

    </React.Fragment>
  );
}

export default App;
