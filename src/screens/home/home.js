import { Button } from "@mui/material";
import { useState } from "react";
import React from "react";
import "./home.css";
import Card2Component from "../../components/card/card2";
import CardData from "../../assets/data/cardData";

import {
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableBody,
  TableCell,
  Paper
} from "@mui/material";

function Home(props) {
  const [count, setCount] = useState(0);

  function decrementCount() {
    if (count != 0) {
      setCount(count - 1);
    } else {
      alert("not possible");
    }
  }
  function incrementCount() {
    setCount(count + 1);
  }
  const tableData = [
    {
      id: 1,
      first_name: "Harry",
      last_name: "Starkey",
      email: "hstarkey0@wsj.com",
      gender: "Male",
      ip_address: "62.97.142.225"
    },
    {
      id: 2,
      first_name: "Candida",
      last_name: "Valler",
      email: "cvaller1@europa.eu",
      gender: "Female",
      ip_address: "174.171.207.179"
    },
    {
      id: 3,
      first_name: "Arty",
      last_name: "Leishman",
      email: "aleishman2@icio.us",
      gender: "Male",
      ip_address: "135.56.15.11"
    },
    {
      id: 4,
      first_name: "Beau",
      last_name: "Beynke",
      email: "bbeynke3@geocities.com",
      gender: "Male",
      ip_address: "41.21.31.53"
    },
    {
      id: 5,
      first_name: "Elvis",
      last_name: "Dawnay",
      email: "edawnay4@wired.com",
      gender: "Male",
      ip_address: "189.165.16.55"
    },
    {
      id: 6,
      first_name: "Aurilia",
      last_name: "Zanitti",
      email: "azanitti5@google.cn",
      gender: "Female",
      ip_address: "214.162.217.232"
    },
    {
      id: 7,
      first_name: "Dud",
      last_name: "Bedenham",
      email: "dbedenham6@lycos.com",
      gender: "Male",
      ip_address: "222.36.62.232"
    },
    {
      id: 8,
      first_name: "Rancell",
      last_name: "Farragher",
      email: "rfarragher7@tinyurl.com",
      gender: "Male",
      ip_address: "147.181.7.70"
    },
    {
      id: 9,
      first_name: "Tull",
      last_name: "Trevan",
      email: "ttrevan8@desdev.cn",
      gender: "Male",
      ip_address: "169.10.145.237"
    },
    {
      id: 10,
      first_name: "Pyotr",
      last_name: "Sisson",
      email: "psisson9@weather.com",
      gender: "Male",
      ip_address: "148.48.45.196"
    }
  ];
  

  let [apiData, setApiData] = useState([]);

  // If (loader) {
  //   return <h2>loader</h2>
  //         }
  //         else{
  //           setLoader(false)
  //         }

  return (
    <>
      <div>
        <h2
          style={{
            color: "#009900",
            display: "flex",
            justifyContent: "center"
          }}
        >
          Counter
        </h2>
        <div className="counter">
          <Button variant="contained" color="error" onClick={decrementCount}>
            decrement
          </Button>
          <h1> {count} </h1>
          <Button variant="contained" color="success" onClick={incrementCount}>
            increment
          </Button>
        </div>
      </div>

      {/* <CardData apiData={apiData} setApiData={setApiData}  /> */}
      <CardData setApiData={setApiData} />
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-around"
        }}
      >
        {apiData.map((data, i) => (
          <Card2Component
            key={i}
            id={data.id}
            image={data.images[0]}
            title={data.title}
            price={data.price}
            description={data.description}
          ></Card2Component>
        ))}
      </div>
    </>
  );
}


export default Home;