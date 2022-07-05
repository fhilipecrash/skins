import { User } from "../components/User";

export function Skin() {
  const users = [
    {
      id: 1,
      name: "Jane ",
    }, {
      id: 2,
      name: "Fhilipe"
    }, {
      id: 3,
      name: "Bruce"
    }, {
      id: 4,
      name: "Dave"
    }
  ];

  return (
    <div className="flex flex-col h-screen px-16 py-4">
      <div className="flex flex-row justify-between">
        <div className="rounded-2xl bg-blue-400 w-[480px] h-[480px] mt-10 p-6 flex flex-col">
          <strong className="text-2xl">Nome da skin</strong>
          <span>Preço inicial: $300</span>
          <span>Maior lance atual: $500</span>
        </div>
        <div className="rounded-2xl bg-green-400 w-[480px] h-[480px] mt-10 p-6 flex flex-col">
          {
            users.map((user) => (
              <User name={user.name}/>
            ))
          }
        </div>
      </div>
      <div className="h-10 mt-8 items-center w-full">
        <input
          type="text"
          placeholder="Informe o valor do lance"
          className="bg-gray-600 text-white placeholder:text-gray-400 rounded p-3 w-full"
        />
      </div>
    </div>
  )
}