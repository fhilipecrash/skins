export function Card() {
  return (
    <a
      href="#"
      className="border-3 rounded-2xl bg-blue-400 hover:bg-red-500 hover:shadow-lg hover:shadow-gray-500 w-52 h-52 m-6 p-6 transition-colors flex flex-col"
    >
      <strong>Nome da skin</strong>
      <span className="align-bottom">Preço: $300</span>
    </a>
  )
}