import cls from "./MyInput.module.css"

function MyInput({placeholder, type, name, className="", ...props}) {
    return (
        <div className={cls["form__group"]}>
            <input {...props} type={type} className={[cls["form__field"], className].join(" ")} placeholder={placeholder} name={name} id={name} required autoComplete="off"/>
            <label htmlFor={name} className={cls["form__label"]}>{placeholder}</label>
        </div>
    );
}

export default MyInput;