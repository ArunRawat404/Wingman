import React from "react";
import { sidebarItems } from "../constants/index";

const Sidebar = () => {
    return (
        <div className="flex flex-col justify-between items-center w-[60px] h-[1080px] bg-[#115E56] border-r border-[#DCDFE4]">
            {/* Top Section */}
            <div className="flex flex-col items-center gap-[30px] pt-[24px]">
                {sidebarItems
                    .filter((item) => item.isTop || !item.type)
                    .map((item,) => (
                        <React.Fragment key={item.id}>
                            <div
                                key={item.id}
                                className={`flex justify-center items-center w-[36px] h-[36px] p-[8px] rounded-[8px] ${item.isActive
                                    ? item.type === "logo"
                                        ? "bg-gradient-to-r from-[#3FDCCDCC] via-[#09544D] to-[#09544D] shadow-[inset_0px_-3.6px_8.28px_#47978F]"
                                        : "bg-[#FFFFFF]"
                                    : ""
                                    }`}
                            >
                                <img
                                    src={item.path}
                                    alt={item.name}
                                    className="w-[20px] h-[20px] object-contain"
                                />
                            </div>
                            {
                                item.type === "logo" && (
                                    <div className="w-[28px] border border-[#134E48]"></div>
                                )
                            }
                        </React.Fragment>
                    ))}

            </div>

            {/* Bottom Section */}
            <div className="flex flex-col items-center gap-[30px] pb-[24px]">
                {sidebarItems
                    .filter((item) => item.type === "bottom")
                    .map((item) => (
                        <div
                            key={item.id}
                            className="flex justify-center items-center w-[36px] h-[36px] p-[8px] rounded-[8px]"
                        >
                            <img
                                src={item.path}
                                alt={item.name}
                                className="w-[20px] h-[20px] object-contain"
                            />
                        </div>
                    ))}
            </div>
        </div >
    );
};

export default Sidebar;