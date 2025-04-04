// useState() = re renders the component when the state value changes

// useRef() = "use Reference" does not cause re renders when its value hcanges
//             when wanted to remember some info, but u dont want tht info to
//             trigger new renders
//             1. accessing/interact with dom elements
//             2. handling focus, animations, transitions
//             3. managing timers and intervals

import React, {useState, useEffect, useRef} from 'react'

function MyComponent() {

    const  inputRef1 = useRef(null);
    const  inputRef2 = useRef(null);
    const  inputRef3 = useRef(null);
    useEffect(() => {
        console.log("Component rendered");
    })

    function handleClick1(){
        inputRef1.current.focus();
        inputRef1.current.style.backgroundColor = "green"
    }
    function handleClick2(){
        inputRef2.current.focus();
        inputRef2.current.style.backgroundColor = "red"
    }
    function handleClick3(){
        inputRef3.current.focus();
        inputRef3.current.style.backgroundColor = "blue"
    }
  return (
    <div>
    <button onClick={handleClick1} >
        Click Me 1!
    </button>
    <input ref={inputRef1}/>
    <button onClick={handleClick2} >
        Click Me 2!
    </button>
    <input ref={inputRef2}/>
    <button onClick={handleClick3} >
        Click Me 3!
    </button>
    <input ref={inputRef3}/>
    </div>
  )
}

export default MyComponent