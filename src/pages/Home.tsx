import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Card } from "../components/Card";
import skins from "../utils/skins.json";
import logo from "../assets/logo.png";

export function Home() {
  const navigate = useNavigate();
  const userName = localStorage.getItem("name") ?? null;

  useEffect(() => {
    if (userName === null) {
      navigate("/");
    }
  })
  return (
    <div className="flex flex-col h-screen">
      <div className="m-6">
        <div className="flex justify-center">
          <img src={logo} className="w-32 h-16"></img>  
        </div>
        <h2 className="text-3xl">Bem vindo(a), { localStorage.getItem("name") }</h2>
      </div>
      <span className="m-6">Skins disponíveis</span>
      <div className="flex flex-wrap">
        {
          skins.map((skin, index) => (
            <Card name={skin.name} price={skin.price} key={index} />
          ))
        }
      </div>
    </div>
  )
}