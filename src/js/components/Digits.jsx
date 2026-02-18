import React from "react";

export const Digits = ({value}) => {
    return (
        <div className="display-1 fw-bold bg-primary border rounded-2 border-secondary p-5">
            <span>{value}</span>
        </div>
    )
}