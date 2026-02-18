import React from "react";
import { Digits } from "./Digits";

export const Timer = ({count}) => {
    return (
        <div className="container-fluid vh-100 d-flex justify-content-center align-items-center bg-dark p-5">
            <div className="row">
                <div className="col-2">
                    <Digits value={Math.floor(count % 1000000 /100000)} />
                </div>
                <div className="col-2">
                    <Digits value={Math.floor(count % 100000 /10000)} />
                </div>
                <div className="col-2">
                    <Digits value={Math.floor(count % 10000 /1000)} />
                </div>
                <div className="col-2">
                    <Digits value={Math.floor(count % 1000 /100)} />
                </div>
                <div className="col-2">
                    <Digits value={Math.floor(count % 100/10)} />
                </div>
                <div className="col-2">
                    <Digits value={count % 10} />
                </div>
            </div>
        </div>
    )
}