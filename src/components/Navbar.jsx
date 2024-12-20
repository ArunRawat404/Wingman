import React from "react";
import { headerItems } from "../constants/index"; // Path to constants file

const NavBar = () => {
    return (
        <div className="flex items-center px-[40px] py-[24px] gap-[12px] border-b border-[#DCDFE4]  h-[94px] w-full">
            {headerItems.map((item) => (
                <div
                    key={item.id}
                    className={`flex flex-col justify-center items-start py-[12px] gap-[12px] w-[${item.isBg ? "137px" : "102px"}] h-[46px] ${item.isBg ? "bg-[#CCFBEF] rounded-full" : ""
                        }`}
                >
                    <a
                        href={item.href}
                        className="flex items-center px-[12px] gap-[12px] w-full h-[22px]"
                    >
                        <img src={item.path} alt={item.name} className="w-[20px] h-[20px]" />
                        <span
                            className={`text-[18px] font-medium leading-[120%] ${item.isBg ? "text-[#212636]" : "text-[#8A94A6]"
                                }`}
                        >
                            {item.name}
                        </span>
                    </a>
                </div>
            ))}
        </div>
    );
};

export default NavBar;

