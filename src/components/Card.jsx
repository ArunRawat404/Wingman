import React from "react";
import { cardItems } from "../constants/index";

const Card = () => {
    return (
        <div className="flex flex-col justify-center py-8 mx-auto w-9/10">
            <div className="container mx-auto">
                {/* Header Section */}
                <div className="flex items-center justify-between">
                    <h1 className="mb-8 h-[38px] font-medium text-[32px] leading-[120%] flex items-center text-[#212636] tracking-[-0.02em]">
                        At a glance
                    </h1>
                    {/* 7 Days Dropdown */}
                    <button className="px-3 py-1 text-sm text-black transition bg-white rounded-md hover:bg-gray-300">
                        7 days ▼
                    </button>
                </div>

                {/* Cards Section */}
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {cardItems.map((item) => (
                        <div
                            key={item.id}
                            className="flex flex-col justify-between p-6 bg-white rounded-lg shadow-md"
                        >
                            {/* Title Section */}
                            <div className="flex items-center space-x-2 text-sm font-medium text-gray-500">
                                <img
                                    src={item.path}
                                    alt={item.name}
                                    className="w-[10px] h-[10px]"
                                />
                                <span className="tracking-wide uppercase">{item.title}</span>
                            </div>

                            {/* Value Section */}
                            <div className="mt-3">
                                <span className="text-[32px] font-semibold text-gray-900 leading-[40px]">
                                    {item.value}
                                </span>
                            </div>

                            {/* Status Section */}
                            <div className="flex items-center mt-2 text-sm font-medium">
                                <span
                                    className="flex items-center gap-2"
                                    style={{
                                        color:
                                            item.status === "increase"
                                                ? "#15B79F"
                                                : "#F04438",
                                    }}
                                >
                                    {item.status === "increase" ? (
                                        <img
                                            src={item.trendPath}
                                            className="mr-1 text-lg w-[21px] h-[13.5px]"
                                        />
                                    ) : (
                                        <img
                                            src={item.trendPath}
                                            className="mr-1 text-lg w-[21px] h-[13.5px]"
                                        />
                                    )}
                                    {item.statusValue}{" "}
                                    {item.status === "increase"
                                        ? "Increase"
                                        : "Decrease"}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Card;
