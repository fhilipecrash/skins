import { Link } from "react-router-dom"

interface CardProps {
  name: string;
  price: number;
}

export function Card(props: CardProps) {  
  return (
    <Link
      to={`/home/${props.name}`}
      state={props}
      className="border-3 rounded-2xl bg-no-repeat bg-center bg-blue-400 hover:bg-red-500 hover:shadow-lg hover:shadow-gray-500 w-52 h-52 m-6 p-6 transition-colors flex flex-col"
      style={{ backgroundImage: `url(/src/assets/${props.name}.png)` }}
    >
      <strong>{props.name.toUpperCase()}</strong>
      <span>Preço: R$ {props.price}</span>
    </Link>
  )
}
