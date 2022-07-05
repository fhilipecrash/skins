import { Card } from "../components/Card";

export function Home() {
  return (
    <div className="flex flex-col h-screen">
      <div className="m-6">
        <h1 className="text-3xl text-center text-white">Skins</h1>
        <h2 className="text-3xl">Bem vindo(a), { localStorage.getItem("name") }</h2>
      </div>
      <span className="m-6">Seus lances</span>
      <div className="flex">
        <Card isAuctionBid={true}/>
        <Card isAuctionBid={true}/>
        <Card isAuctionBid={true}/>
        <Card isAuctionBid={true}/>
      </div>
      <span className="m-6">Skins disponíveis</span>
      <div className="flex flex-wrap">
        <Card isAuctionBid={false}/>
        <Card isAuctionBid={false}/>
        <Card isAuctionBid={false}/>
        <Card isAuctionBid={false}/>
        <Card isAuctionBid={false}/>
        <Card isAuctionBid={false}/>
        <Card isAuctionBid={false}/>
      </div>
      <div>

      </div>
    </div>
  )
}