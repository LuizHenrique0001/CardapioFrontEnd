import { useState } from 'react';

import {useFoodDataMutate} from "../hooks/useFoodDataMutate.ts";
import type {FoodData} from "../interface/FoodData.ts";

interface InputProps {
    label: string,
    value: string | number,
    updateValue(value: string): void
}

const Input = ({ label, value, updateValue }: InputProps) => {
    return (
        <>
            <label>{label}</label>
            <input value={value} onChange={event => updateValue(event.target.value)}></input>
        </>
    )
}

export function FormCard(){
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState(0);
    const [img, setImg] = useState("");
    const { mutate} = useFoodDataMutate();

    const submit = () => {
        const foodData: FoodData = {
            title,
            price,
            img
        }
        mutate(foodData)
    }


    return(
        <div >
            <div >
                <h2>Cadastre um novo item no cardápio</h2>
                <form >
                    <Input label="title" value={title} updateValue={setTitle}/>
                    <Input label="price" value={price} updateValue={(value) => setPrice(Number(value)) }/>
                    <Input label="image" value={img} updateValue={setImg}/>
                </form>
                <button onClick={submit} >
                    Cadastrar
                </button>
            </div>
        </div>
    )
}