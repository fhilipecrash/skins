import { Card } from "../components/Card";

import skins from "../utils/skins.json";

export function Home() {

  return (
    <div className="flex flex-col h-screen">
      <div className="m-6">
        <h1 className="text-3xl text-center text-white">Skins</h1>
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