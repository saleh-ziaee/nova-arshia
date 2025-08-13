import React from "react";
import { EnvelopeIcon } from "@heroicons/react/24/solid";
import {BoltIcon} from "@heroicons/react/24/outline";

function Action({ lineHeight, title, description }) {

    return (
        <div className="flex flex-col items-center justify-top">
            <div
                className="flex items-center justify-center p-2 rounded-lg w-16 h-16"
                style={{
                    border: "2px solid #017A68",
                    background:
                        "linear-gradient(0deg, rgba(1, 122, 104, 0.15) 0%, rgba(1, 122, 104, 0.15) 100%), linear-gradient(0deg, rgba(1, 122, 104, 0.70) -3.91%, rgba(1, 122, 104, 0.00) 40.62%), linear-gradient(180deg, #0D4752 0%, rgba(13, 71, 82, 0.00) 100%)",
                }}
            >
                <BoltIcon className="w-[40px] text-white" />
            </div>

            <div
                style={{
                    backgroundColor: "rgba(0, 145, 124, 0.56)",
                    height: lineHeight
                }}
                className="w-[1px]"
            />

            <div
                className="w-36 border-t pt-2 border-gray-500 text-right"
                style={{borderTopColor: 'rgba(0, 145, 124, 0.56)'}}
            >
                <div className="text-[#ffffff] font-semibold">{title}</div>
                <div className="text-gray-500 text-[14px]">{description}</div>
            </div>
        </div>
    );
}

export default Action;
