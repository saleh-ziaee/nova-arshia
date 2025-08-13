import React from 'react';
import { CursorArrowRaysIcon } from "@heroicons/react/24/outline";

function MouseCursor({ color, text , textColor }) {
    return (
        <div className="flex flex-col items-center">
            <div>
                <CursorArrowRaysIcon className="w-[30px] h-[30px]" />
            </div>
            <div
                className="rounded-tr-lg rounded-br-lg rounded-bl-lg py-[2px] px-[8px] ml-16"
                style={{ backgroundColor: color , color:textColor }}
            >
                {text}
            </div>
        </div>
    );
}

export default MouseCursor;
