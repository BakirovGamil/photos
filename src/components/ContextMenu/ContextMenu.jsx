import { useEffect } from "react";

function ContextMenu({isActive, 
    setIsActive, 
    anchor = {top: 0, left: 0}, 
    actions, 
    id})
{
    let contextClass = "context-menu";
    if(isActive) {
        contextClass += " context-menu__active"; 
    }

    function handleClose(e) {
        setIsActive(false);
    }

    useEffect(() => {
        document.addEventListener("click", handleClose);
        document.addEventListener("scroll", handleClose);
        document.addEventListener("contextmenu", handleClose);
        return () => {
            document.removeEventListener("click", handleClose);
            document.removeEventListener("scroll", handleClose);
            document.removeEventListener("contextmenu", handleClose);
        };
    }, []);

    return (
        <div className={contextClass} style={{top: anchor.top, left: anchor.left}}>
            <ul className="context-menu__list">
                <li><button onClick={() => actions["open"](id)}>
                        <span>Открыть</span>
                        <span className="context-menu__icon">
                            <i className="gg-open-collective"></i>
                        </span>
                    </button></li>
                <li><button onClick={() => actions["edit"](id)}>
                    <span>Изменить</span>
                    <span className="context-menu__icon">
                        <i className="gg-pen"></i>
                    </span>
                </button></li>
                <li><button onClick={() => actions["delete"](id)}>
                    <span>Удалить</span>
                    <span className="context-menu__icon">
                        <i className="gg-trash"></i>
                    </span>
                </button></li>
            </ul>
        </div>
    );
}

export default ContextMenu;