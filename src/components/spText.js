import React, { useEffect } from "react";

export const SText = (props) => {
    return (
        <>
            {props.value.split("").map((a, i) => (
                <div className={props.className} key={a + i}>
                    {a === " " ? "\u00A0" : a}
                </div>
            ))}
        </>
    );
}

