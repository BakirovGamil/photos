import MyInput from "../UI/Input/MyInput";
import { UserContext } from "../../App"
import { useContext, useState } from "react";

function Auth({setAuthVisible}) {
    const [user, setUser] = useContext(UserContext);
    const [userName, setUserName] = useState("");
    const [userPassword, setUserPassword] = useState("");

    function handleSubmit(e) {
        e.preventDefault();
        setUser({
            name: userName,
            isAdmin: false,
            id: 1
        });
        setUserName("");
        setUserPassword("");
        setAuthVisible(false);
    }

    return (
        <div className="auth">
					<div className="auth__title">Авторизация</div>
                    <form onSubmit={handleSubmit} name="auth">
                        <MyInput 
                            placeholder="Введите логин" 
                            name="login" 
                            value={userName} 
                            onChange={(e) => setUserName(e.target.value)}
                        />
                        <MyInput 
                            type="password" 
                            name="password" 
                            placeholder="Введите пароль" 
                            value={userPassword} 
                            onChange={(e) => setUserPassword(e.target.value)}
                        />
						<div className="auth__subm-btn">
							<button>Войти</button>
						</div>
                    </form>
                </div>
    );
}

export default Auth;