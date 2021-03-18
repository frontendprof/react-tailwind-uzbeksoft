
import React,{useState} from 'react';
import data from '../data/section1';

const ChooseYourMs = () => {
    const [cards,setCards]=useState(data)
    return (
        <section>
            {cards.map(({id,image,text})=>{
                return(
                    <article key={id} className="flex items-center px-6 py-2">
                        <img src={image} alt="card-image"/>
                        <p className="mx-3 hover:underline cursor-pointer font-semibold">{text}</p>
                    </article>
                )
            })}
        </section>
    )
}

export default ChooseYourMs
