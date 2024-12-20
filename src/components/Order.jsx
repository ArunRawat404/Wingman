import React from 'react';

const Table = ({ data }) => {
    return (
        <div className="flex flex-col justify-center py-8 mx-auto w-9/10">
            <h1 className="mb-8 w-[1252px] h-[38px] font-medium text-[32px] leading-[120%] flex items-center text-[#212636] tracking-[-0.02em]">
                Orders
            </h1>

            <div className="flex flex-col  bg-white border border-[#DCDFE4] rounded-lg">
                <div className="flex items-center h-[54px] bg-[#F9FAFB] border-b border-[#DCDFE4]">
                    <div className="flex-1 px-4">
                        <span className="text-sm text-[#667085]">Product</span>
                    </div>
                    <div className="flex-1 px-4">
                        <span className="text-sm text-[#667085]">Date</span>
                    </div>
                    <div className="flex-1 px-4">
                        <span className="text-sm text-[#667085]">Time spent</span>
                    </div>
                    <div className="flex-1 px-4">
                        <span className="text-sm text-[#667085]">Order Value</span>
                    </div>
                    <div className="flex-1 px-4">
                        <span className="text-sm text-[#667085]">Commission</span>
                    </div>
                    <div className="flex-1 px-4 text-right">
                        <span className="text-sm text-[#667085]"></span>
                    </div>
                </div>

                {data.map((row, index) => (
                    <div key={index} className="flex items-center h-[74px] border-b border-[#DCDFE4] last:border-b-0">
                        <div className="flex items-center flex-1 gap-4 px-4">
                            <img
                                src={row.product.image}
                                alt={row.product.name}
                                className="object-cover w-10 h-10 rounded-lg"
                            />
                            <span className="text-base text-[#212636] font-inter">{row.product.name}</span>
                        </div>
                        <div className="flex flex-col flex-1 px-4">
                            <span className="text-base text-[#212636] font-inter">{row.date}</span>
                            <span className="text-xs text-[#212636] font-inter">{row.time}</span>
                        </div>
                        <div className="flex-1 px-4">
                            <span className="text-base text-[#212636] font-inter">{row.timeSpent}</span>
                        </div>
                        <div className="flex-1 px-4">
                            <span className="text-base text-[#212636] font-inter">{row.orderValue}</span>
                        </div>
                        <div className="flex-1 px-4">
                            <span className="text-base font-bold text-[#212636] font-inter">{row.commission}</span>
                        </div>
                        <div className="flex justify-end flex-1 px-4">
                            <div className="flex items-center gap-3">
                                <span className="text-xs text-[#8A94A6]">View Chat</span>
                                <img src="../../public/assets/arrow_up_order.png" className="w-[10px] h-[10px] text-[#8A94A6]"></img>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};


export default Table;