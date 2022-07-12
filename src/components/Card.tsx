import { Link } from "react-router-dom"

interface CardProps {
  name: string;
  price: number;
}

export function Card(props: CardProps) {
  const { name, price } = props;

  return (
    <Link
      to={`/home/${name}`}
      className={`border-3 rounded-2xl bg-${name} bg-no-repeat bg-center bg-blue-400 hover:bg-red-500 hover:shadow-lg hover:shadow-gray-500 w-52 h-52 m-6 p-6 transition-colors flex flex-col`}
    >
      <strong>{name.toUpperCase()}</strong>
      <span>Preço: R$ {price}</span>
    </Link>
  )
}