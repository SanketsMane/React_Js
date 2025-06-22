import React from "react";
import { use } from "react";
import { useState, useEffect } from "react";

function Github(){
    const [data, setData] = useState(null);

    useEffect(() =>{fetch('https://api.github.com/users/SanketsMane')
        .then(Response => Response.json())
        .then(data => console.log(data))
        setData(data);
    },[])
        return(
            <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
                <h1 className="text-6xl font-bold text-blue-600 mb-4">Github</h1>
                <h2>Github id : {data.id}</h2>
                <img src={data.avtar_url} alt="Git pic" className="w-32 h-32 rounded-full mb-4" />
                <a
                    href="https://github.com/SanketsMane"
                    className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Visit Github
                </a>
            </div>
        );
}
export default Github;