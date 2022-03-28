import cls from "./CircleButton.module.css";

function CircleButton({children, className, ...props}) {
    return (
        <button {...props} className={[cls.btn, className].join(" ")}>
            <span className={cls["btn-text"]}>{children}</span>
        </button>
    );
}

export default CircleButton;