
import React,{useState} from 'react';
import data from '../data/section3';

const Section2 = () => {
    const [cards,setCards]=useState(data)
    return (
        <>
            <h2 className="font-semibold text-2xl text-center mt-5 px-8">For Business</h2>

            <section className="section-2 md:grid grid-cols-2 xl:grid-cols-4 xl:mx-20">
            
                {cards.map(({id,image,title,desc,link})=>{
                    return(
                        <article key={id} className="p-8">
                            <div>
                                <img src={image} alt="card-image"/>
                                <h3 className="font-semibold text-xl mt-2 mb-1">{title}</h3>
                                <p>{desc}</p>
                                <button className="cursor-pointer text-red-600 font-semibold">{link}</button>
                            </div>
                        
                        </article>
                    )
                })}
            </section>
        </>
        
    )
}

export default Section2
