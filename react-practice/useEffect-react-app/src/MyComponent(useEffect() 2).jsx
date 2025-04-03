import React, {useEffect, useState} from "react";

function MyComponent(){

    const [width, setWidth] = useState(window.innerWidth);
    const [height, setHeight] = useState(window.innerHeight);

    window.addEventListener("resize", handleResize);
    console.log("event listener added")
    useEffect(() => {
        setWidth(window.innerWidth);
        setHeight(window.innerHeight);
    }, [])
        


    return (<>
    <p>Window Width: {width}px</p>
    <p>Window Height: {height}px</p>

    </>
    )
}