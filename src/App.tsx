import './App.css'
import {useFoodData} from "./hooks/useFoodData.ts";
import {useState} from "react";
import FoodCard from "./Components/FoodCard.tsx";
import {FormCard} from "./Components/FormCard.tsx";


function App() {

    const { data } = useFoodData();
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleModalOpen = () => {
        setIsModalOpen(prevState => !prevState);
    }

    return (
        <div className="bg-slate-600 w-screen h-screen flex flex-col text-center items-center">
            <h1 className="p-6 text-4xl text-white">Cardapio</h1>
            <div className="bg-slate-400 w-full h-screen flex justify-center items-center">
                {data?.map((foods) => ( <FoodCard img={foods.img} price={foods.price} title={foods.title} />))}
            </div>
            {isModalOpen && <FormCard/>}
            <button onClick={handleModalOpen}>Novo</button>
        </div>
    )
}

export default App
