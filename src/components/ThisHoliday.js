
import React from 'react';
import ThisHolidayImg from "../images/this_holiday_539.png"

const ThisHoliday = () => {
    return (
        <section>
            <div>
                <img src={ThisHolidayImg} alt="holiday_img"/>
            </div>

            <div className="bg-gray-800 text-center px-10 py-20 text-white">
                <h2 className="font-semibold text-xl mb-2">This Holiday, find your joy</h2>
                <p className="mb-2">Follow the story of Rufus, a pup whose dream takes him into Microsoft World like Minecraft, Flight Simulator, Teams and Halo.</p>
                <button className="mr-4 bg-white text-black py-2 px-5 hover:underline hover:bg-opacity-80">Watch Now</button>
                
            </div>
            
        </section>
    )
}

export default ThisHoliday
