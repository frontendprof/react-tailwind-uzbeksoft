

import React,{useState} from 'react';
import data from '../data/footer';
import {FaGlobe} from "react-icons/fa";

const Footer = () => {
    const [links,setLinks]=useState(data)
    return (
        <footer className="bg-gray-200 px-8 py-4">
            {links.map(({id,title,hrefs})=>{
                return(
                    <div key={id} className="p-8">
                        <div className="mb-10">
                            <h4 className="font-semibold text-gray-600 ">{title}</h4>
                            {hrefs.map(href=>{
                                return <li key={href} className="text-gray-500 my-2 text-sm">{href}</li>
                            })}
                        </div>
                       
                    </div>
                )
            })}

            <div>
                <div className="flex items-center">
                    <FaGlobe className="mr-3" />
                    <p className="text-gray-500 text-sm">English (United States)</p>
                </div>

                <div>
                    <ul className="flex flex-wrap text-gray-500 text-sm mt-4">
                        <li className="mr-4">Sitemap</li>
                        <li className="mr-4">Contact Microsoft</li>
                        <li className="mr-4">Privacy</li>
                        <li className="mr-4">Terms of Use</li>
                        <li className="mr-4">Trademarks</li>
                        <li className="mr-4">Safety &amp; eco</li>
                        <li className="mr-4">About our ads</li>
                        <li className="mr-4">&copy; Uzbeksoft 2021</li>
                    </ul>
                </div>
            </div>
           
        </footer>
    )
}

export default Footer
