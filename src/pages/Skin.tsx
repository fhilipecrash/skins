import { User } from "../components/User";
import { io } from "socket.io-client"
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import skins from "../utils/skins.json";

interface SkinProps {
  name: string;
  price: number;
}

interface BidProps {
  name: string;
  bid: number;
}

export function Skin() {
  let { skinid } = useParams();
  const navigate = useNavigate();
  const [bid, setBid] = useState(0);
  const [bidRecevied, setBidReceived] = useState([]);
  const [usersList, setUsersList] = useState<BidProps[]>([]);
  const [currentSkin, setCurrentSkin] = useState<SkinProps>({} as SkinProps);
  const userName = localStorage.getItem("name") ?? null;
  const socket = io("http://localhost:3001", { query: { room: skinid } });

  function getDataElement() {
    const skin = skins.filter(skin => skin.name === skinid);
    setCurrentSkin(skin[0]);
  }

  function makeBid() {
    if (usersList.length > 0) {
      const lastBid = usersList[usersList.length - 1].bid;

      if (bid <= lastBid) {
        alert("Informe um número maior que: " + lastBid)
      } else {
        socket.emit("makeBid", { name: userName, bid: bid });
        setBid(0);
      }
    } else {
      socket.emit("makeBid", { name: userName, bid: bid });
      setBid(0);
    }
  }

  useEffect(() => {
    getDataElement();

    socket.on("returnBid", (data) => {
      setBidReceived(data.bid);
    });

    socket.on("previousBids", (data) => {
      setUsersList(data);
      setBidReceived(data[data.length - 1].bid);
    });

    socket.on("updatedBids", (data) => {
      setUsersList(data);
    });

    if (userName === null) {
      navigate("/");
    }
  }, []);

  return (
    <div className="flex flex-col h-screen px-16 py-4">
      <div className="flex flex-row justify-between">
        {!!currentSkin.name && (
          <div
            className="rounded-2xl bg-blue-400 bg-no-repeat bg-center bg-contain w-[480px] h-[480px] mt-10 p-6 flex flex-col"
            style={{ backgroundImage: `url(/src/assets/${currentSkin.name}-lg.png)` }}
          >
            <strong className="text-2xl">{currentSkin.name.toUpperCase()}</strong>
            <span>Preço inicial: R$ {currentSkin.price}</span>
          </div>
        )}
        <div className="rounded-2xl bg-gray-700 w-[200px] h-[200px] mt-36 shadow-lg flex flex-col items-center justify-center">
          <span className="text-2xl font-bold mb-10">Maior lance</span>
          <span className="text-5xl">R$ {bidRecevied}</span>
        </div>
        <div className="rounded-2xl bg-purple-400 w-[480px] h-[480px] mt-10 p-6 flex flex-col">
          {
            usersList.slice(0).reverse().map((user: BidProps, index) => (
              <User name={user.name} bid={user.bid} key={index} />
            ))
          }
        </div>
      </div>
      <div className="h-10 mt-8 items-center w-full flex justify-center">
        <input
          type="number"
          value={bid}
          onChange={e => setBid(Number(e.target.value))}
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