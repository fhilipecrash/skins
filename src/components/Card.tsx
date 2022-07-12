import { Link } from "react-router-dom"

export function Card(props: any) {
  if(props.isAuctionBid) {
    return (
      <Link
        to={"/home/123"}
        className="border-3 rounded-2xl bg-blue-400 hover:bg-red-500 hover:shadow-lg hover:shadow-gray-500 w-52 h-52 m-6 p-6 transition-colors flex flex-col"
      >
        <div className="bg-weapon-1">
          <strong>Nome da skin</strong>
          <span>Preço: $300</span>
          <span>Seu lance: $500</span>
          <span>Usuário cobriu seu lance</span>
        </div>
      </Link>
    )
  } else {
    return (
      <Link
        to={"/home/321"}
        className="border-3 rounded-2xl bg-blue-400 hover:bg-red-500 hover:shadow-lg hover:shadow-gray-500 w-52 h-52 m-6 p-6 transition-colors flex flex-col"
      >
        <strong>Nome da skin</strong>
        <span>Preço: $300</span>
      </Link>
    )
  }
}