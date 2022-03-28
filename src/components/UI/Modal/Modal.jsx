import React from "react";
import { useEffect } from "react";
import classes from "./Modal.module.css"

function MyModal({children, visible, setVisible}) {
    const rootClasses = [classes.myModal];

    if(visible) {
        rootClasses.push(classes.active);
    }

    function handleKeyUp(e) {
        if(e.code === "Escape") {
            setVisible(false);
        }
    }

    useEffect(() => {
        if(visible)
            document.addEventListener("keyup", handleKeyUp);
            
        return () => document.removeEventListener("keyup",  handleKeyUp);
    });


    return (
        <div className={rootClasses.join(" ")} onMouseDown={() => setVisible(false)}>
            <div className={classes.myModalContent} onMouseDown={(e) => e.stopPropagation()}>
                {children}
            </div>
        </div>
    );
}

export default MyModal;