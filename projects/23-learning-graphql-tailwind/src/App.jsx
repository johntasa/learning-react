import { Characters } from "./components/Characters.jsx";

export default function App() {
  return (
    <div className="container mx-auto p-4 flex flex-col justify-center items-center">
      <h2 className="text-xl font-bold">My first Apollo app 🚀</h2>
      <br/>
      <Characters />
    </div>
  );
}
