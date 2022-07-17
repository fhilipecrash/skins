import { FormEvent, useState } from "react"
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";

export function Login() {
  const navigate = useNavigate();
  const [name, setName] = useState("");

  function handleSubscribe(event: FormEvent) {
    event.preventDefault();
    localStorage.setItem("name", name); 
    navigate("/home");
  }

  return (
    <div>
      <div className="flex justify-center">
        <img src={logo} className="w-32 h-16 mt-6"></img>  
      </div>
      <div className="flex flex-col justify-center items-center m-32">
        <div className="p-3">
          <form className="flex flex-col" onSubmit={handleSubscribe}>
            <input
              onChange={event => setName(event.target.value)}
              type="text"
              placeholder="Digite seu nome"
              className="bg-gray-600 text-white placeholder:text-gray-400 rounded p-3 w-96"
            />
            <div className="flex justify-center items-center p-3">
              <button
                className="text-white w-16 h-10 rounded bg-red-500 hover:bg-red-400">
                Entrar
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}