import cls from "./Loader.module.css";

function Loader() {
    return (
        <div className={cls["mosaic-loader"]}>
            <div className={[cls.cell, cls["d-0"]].join(" ")}></div>
            <div className={[cls.cell, cls["d-1"]].join(" ")}></div>
            <div className={[cls.cell, cls["d-2"]].join(" ")}></div>
            <div className={[cls.cell, cls["d-3"]].join(" ")}></div>
            <div className={[cls.cell, cls["d-1"]].join(" ")}></div>
            <div className={[cls.cell, cls["d-2"]].join(" ")}></div>
            <div className={[cls.cell, cls["d-3"]].join(" ")}></div>
            <div className={[cls.cell, cls["d-4"]].join(" ")}></div>
            <div className={[cls.cell, cls["d-2"]].join(" ")}></div>
            <div className={[cls.cell, cls["d-3"]].join(" ")}></div>
            <div className={[cls.cell, cls["d-4"]].join(" ")}></div>
            <div className={[cls.cell, cls["d-5"]].join(" ")}></div>
            <div className={[cls.cell, cls["d-3"]].join(" ")}></div>
            <div className={[cls.cell, cls["d-4"]].join(" ")}></div>
            <div className={[cls.cell, cls["d-5"]].join(" ")}></div>
            <div className={[cls.cell, cls["d-6"]].join(" ")}></div>
        </div>
    );
}

export default Loader;