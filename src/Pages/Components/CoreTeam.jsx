import React from "react";
import sahilimg from './Img/team/Sahil-Aggarwal.jpg'
import Soumya from './Img/team/Soumya-Aggarwal.jpg'
import Sanjeev from './Img/team/Sanjeev-Kumar.jpg'
import Alka from './Img/team/Alka-Siwach.jpg'


export default function CoreTeam() {
    const cc = [
        {
            avatar: `${sahilimg}`,
            name: "Sahil-Aggarwal",
            position: "CEO",
        },
        {
            avatar: `${Soumya}`,
            name: "Soumya-Aggarwal",
            position: "COO",
        },
        {
            avatar: `${Sanjeev}`,
            name: "Sanjeev-Kumar",
            position: "Dean and Professor",
        },
        {
            avatar:`${Alka}`,
            name: "Alka-Siwach",
            position: "Coordinator",
        },
    ];
    return (
        <div className="flex flex-col w-full items-center my-10 md:my-14 static" id="team">
            <p className="text-4xl font-bold">Core Team</p>
            <p className="text-gray-500 text-xl w-full md:w-8/12 text-center my-4 static">
                People who are leading the program.
            </p>
            <div className="w-max-[90vw] w-full md:w-8/12 overflow-x-auto static">
                <div className="flex flex-row w-max flex-wrap">
                    {/* Card */}
                    {cc.map((cc, index) => (
                        <div
                            key={index}
                            className="flex flex-col items-center m-2 p-4 py-10 brightness-90 rounded-md w-56 "
                        >
                            <img
                                src={cc.avatar}
                                alt=""
                                className="rounded-full w-20 h-20 md:w-28 md:h-28 object-cover ring ring-zinc-200"
                            />
                            <p className="font-medium mt-2 text-lg opacity-75 static">{cc.name}</p>
                            <p className="text-zinc-500 static">{cc.position}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
