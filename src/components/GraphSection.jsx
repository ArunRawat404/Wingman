import React from "react";

const GraphSection = () => {
    return (
        <div className="flex flex-col justify-center py-8 mx-auto w-9/10">
            <h1 className="mb-8  h-[38px] font-medium text-[32px] leading-[120%] flex items-center text-[#212636] tracking-[-0.02em]">
                Insights
            </h1>

            <div className="grid grid-cols-12 gap-32 ">
                <div
                    className="flex flex-col col-span-6 gap-6 p-4 bg-white rounded-lg shadow-sm isolation-auto"
                    style={{
                        boxShadow: "0px 0px 0px 1px rgba(0, 0, 0, 0.06), 0px 5px 22px rgba(0, 0, 0, 0.04)",
                        borderRadius: "20px",
                    }}
                >
                    {/* Title */}
                    <h3 className="mb-4 text-sm font-semibold text-gray-700">CONSULTATIONS</h3>

                    {/* Graph Container */}
                    <div className="flex items-center justify-center bg-white rounded-lg">
                        <img src="../../public/assets/chart.png" alt="Chart" />
                    </div>

                    {/* Horizontal Line */}
                    <div className="w-full border-t border-gray-200"></div>

                    {/* Legend Section */}
                    <div className="flex justify-between text-xs text-gray-500" >
                        <div className="flex items-center gap-2">
                            <img src="../../public/assets/incoming.svg" alt="icon" className="w-4 h-1" />
                            Incoming
                        </div>
                        <div className="flex items-center gap-2">
                            <img src="../../public/assets/answer.svg" alt="icon" className="w-4 h-1" />
                            Answered
                        </div>
                        <div className="flex items-center gap-2">
                            <img src="../../public/assets/expert.svg" alt="icon" className="w-4 h-1" />
                            Experts online
                        </div>
                    </div>
                </div>

                {/* VS Past Period */}
                <div className="col-span-3 p-4 bg-white rounded-lg shadow-sm">
                    <h3 className="mb-2 text-sm font-semibold text-gray-700">
                        VS PAST PERIOD
                    </h3>
                    <div className="flex items-center justify-center bg-white rounded-lg ">
                        <img src="../../public/assets/barchart.png"></img>
                    </div>
                    {/* Horizontal Line */}
                    <div className="w-full mt-12 mb-6 border-t border-gray-200"></div>
                    <div className="flex justify-between text-xs text-gray-500">
                        <div className="flex items-center gap-2">
                            <img src="../../public/assets/consultation.svg" alt="icon" className="w-4 h-1" />
                            Consultations
                        </div>
                        <div className="flex items-center gap-2">
                            <img src="../../public/assets/order_close.svg" alt="icon" className="w-4 h-1" />
                            Orders closed
                        </div>
                    </div>
                </div>

                {/* Forecasts */}
                <div
                    className="flex flex-col items-start p-6 gap-6 w-[260px] h-[455px] bg-gradient-to-b from-[#15B79F] to-[#0E9382] shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_5px_22px_rgba(0,0,0,0.04)] rounded-[20px] relative isolate"
                >
                    {/* Forecast Header */}
                    <div className="flex flex-col justify-center items-start gap-2 w-[212px] h-[30px]">
                        <div className="flex flex-row items-center w-full gap-2">
                            <img src="../../public/assets/forecast.png" alt="icon" className="w-[9.38px] h-[9.38px]" />
                            <h3 className="font-['Inter'] font-semibold text-[12px] leading-[30px] uppercase tracking-[0.5px] text-[#CCFBEF]">
                                Forecasts
                            </h3>
                        </div>
                    </div>

                    {/* Circles Background */}
                    <div className="absolute w-[561px] h-[561px] top-[-37px] left-[-150px] opacity-20 rotate-[135deg] z-0">
                        <div className="absolute w-[561px] h-[561px] bg-gradient-to-b from-[#FFFFFF] to-transparent rounded-full shadow-[0px_3px_14px_rgba(158,158,158,0.03)]"></div>
                        <div className="absolute w-[366px] h-[366px] bg-gradient-to-b from-[#FFFFFF] to-transparent rounded-full shadow-[0px_3px_14px_rgba(158,158,158,0.03)]"></div>
                        <div className="absolute w-[179px] h-[179px] bg-gradient-to-b from-[#FFFFFF] to-transparent opacity-50 rounded-full shadow-[0px_3px_14px_rgba(158,158,158,0.03)]"></div>
                    </div>

                    {/* Stat 1 */}
                    <div className="flex flex-col gap-3 relative z-10 w-[212px]">
                        <div className="flex flex-row justify-center items-start gap-2 w-full h-[67px]">
                            <h1 className="font-['Inter'] font-medium text-[56px] leading-[120%] tracking-[-0.01em] text-[#FFFFFF] shadow-[0px_3px_14px_rgba(0,0,0,0.08)]">
                                +15%
                            </h1>
                            <div className="flex w-[35px] h-[35px]">
                                <img src="../../public/assets/up_white.png" alt="icon" className="w-[30px] h-[20px]" />
                            </div>
                        </div>
                        <p className="font-['Inter'] font-normal text-[14px] leading-[157%] tracking-[-0.01em] text-[#FFFFFF]">
                            Forecasted increase in your sales closed by the end of the current
                            month
                        </p>
                    </div>

                    {/* Stat 2 */}
                    <div className="flex flex-col gap-3 relative z-10 w-[212px]">
                        <div className="flex flex-row justify-center items-start gap-2 w-full h-[67px]">
                            <h1 className="font-['Inter'] font-medium text-[56px] leading-[120%] tracking-[-0.01em] text-[#FFFFFF] shadow-[0px_3px_14px_rgba(0,0,0,0.08)]">
                                +20%
                            </h1>
                            <div className="flex w-[35px] h-[35px]">
                                <img src="../../public/assets/up_white.png" alt="icon" className="w-[30px] h-[20px]" />
                            </div>
                        </div>
                        <p className="font-['Inter'] font-normal text-[14px] leading-[157%] tracking-[-0.01em] text-[#FFFFFF]">
                            Forecasted increase in consultations by the end of the current month
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GraphSection;
