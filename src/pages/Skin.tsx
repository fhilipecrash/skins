import { User } from "../components/User";
import { io } from "socket.io-client"
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

interface SkinProps {
  name: string;
  price: number;
}

export function Skin() {
  const users = [
    {
      name: "John",
      bid: 100
    }, {
      name: "Jane",
      bid: 200
    }, {
      name: "Jack",
      bid: 300
    }, {
      name: "Jill",
      bid: 400
    }
  ];
  const socket = io("http://localhost:3001");
  const [bid, setBid] = useState("");
  const [bidRecevied, setBidReceived] = useState([]);
  const skins = useLocation().state as SkinProps;

  function makeBid() {
    socket.emit("make_bid", { name: localStorage.getItem("name"), bid: bid });
  }
  
  useEffect(() => {
    socket.on("return_bid", (data) => {
      setBidReceived(data.bid);
      users.push(data);
      console.log(data);
    })
    console.log(users);
  }, [socket])

  return (
    <div className="flex flex-col h-screen px-16 py-4">
      <div className="flex flex-row justify-between">
        <div 
          className="rounded-2xl bg-blue-400 bg-no-repeat bg-center bg-contain w-[480px] h-[480px] mt-10 p-6 flex flex-col"
          style={{ backgroundImage: `url(/src/assets/${skins.name}-lg.png)` }}
        >
          <strong className="text-2xl">{skins.name.toUpperCase()}</strong>
          <span>Preço inicial: R$ {skins.price}</span>
        </div>
        <div className="rounded-2xl bg-gray-700 w-[200px] h-[200px] mt-36 shadow-lg flex flex-col items-center justify-center">
          <span className="text-2xl font-bold mb-10">Maior lance</span>
          <span className="text-5xl">R$ {bidRecevied}</span>
        </div>
        <div className="rounded-2xl bg-purple-400 w-[480px] h-[480px] mt-10 p-6 flex flex-col">
          {
            users.map((user) => (
              <User name={user.name} bid={user.bid}/>
            ))
          }
        </div>
      </div>
      <div className="h-10 mt-8 items-center w-full flex justify-center">
        <input
          type="text"
          onChange={event => setBid(event.target.value)}
          placeholder="Informe o valor do lance"
          className="bg-gray-600 text-white placeholder:text-gray-400 rounded p-3 w-96"
        />
        <button
          className="text-white w-28 h-12 rounded bg-red-500 hover:bg-red-400 mx-8"
          onClick={makeBid}
        >
          Fazer lance
        </button>
      </div>
    </div>
  )
}