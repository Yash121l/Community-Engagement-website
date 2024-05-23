import React from "react";
import logo from './Colour01.png';

export default function Footer() {
    return (
        <>
            <div className=" bg-linear-pink-invert bg-zinc-100">
                <div className="mx-auto container pt-20 flex flex-col items-center justify-center">
                    <div className="text-black flex flex-col md:items-center f-f-l pt-3 w-full">
                        <img src={logo} alt="" className="h-12 lg:h-14 w-8/12 sm:w-auto self-center object-contain" />
                        <div className="my-6 text-base text-color f-f-l mx-4 opacity-60 text-center">
                            <b>Address:</b> Rishihood University<br />
                            Sonipat, 131021, Haryana, India<br />
                            <b>Email:</b> namaste@rishihood.edu.in<br /><b>Mobile:</b> 1800-120-6631
                        </div>
                        <div className="text-sm text-color mb-10 f-f-l self-center">
                            <span className="text-sm">
                                <a
                                    className=" sm:text-center sm:text-base transition-all ease-in-out"
                                >

                                </a>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
