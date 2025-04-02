import React from 'react'
import styles from './Button.module.css'
// styling react components with css
// 1. External(using index.css and importing)
// 2. Modules(using Button.module.css from Button folder and importing)
// 3. Inline (inside the component)
function Button() {

  // const styles = {
  //   backgroundColor: "hsla(197, 74.00%, 19.60%, 0.46)",
  //   color:"aliceblue",
  //   padding: "10px 20px",
  //   borderRadius: "5px",
  //   border: "none",
  //   cursor: "pointer"
  //    }
  
  //    return (<button>Click Me</button>);
  return (               // .module.css
    <button className={styles.button}>Click Me</button>
  )
}
export default Button                       