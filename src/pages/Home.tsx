import { Card } from "../components/Card";

export function Home() {

  return (
    <div className="flex flex-col h-screen">
      <div className="m-6">
        <h1 className="text-3xl text-center text-white">Skins</h1>
        <h2 className="text-3xl">Bem vindo(a), { localStorage.getItem("name") }</h2>
      </div>
      <span className="m-6">Skins disponíveis</span>
      <div className="flex flex-wrap">
        <Card name={'ak47'} price={300}/>
        <Card name={'karambit'} price={280}/>
        <Card name={'p90'} price={150}/>
        <Card name={'m4a1'} price={600}/>
        <Card name={'awp'} price={1500}/>
      </div>
    </div>
  )
}