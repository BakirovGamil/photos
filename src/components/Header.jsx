import { Link } from "react-router-dom";
import { useState, useContext } from "react";
import Modal from "./UI/Modal/Modal";
import Auth from "./auth/Auth";
import { UserContext } from "../App"

function Header() {
    const [authVisible, setAuthVisible] = useState(false);
	const [user, setUser] = useContext(UserContext);

    return (
        <>
            <div className="fake-header"></div>
			<header className="header">
				<div className="container">
					<nav className="header__nav">
						<ul className="header__list">
							<li className="header__logo">
								<Link to="/">
									<span className="header__icon"><i className="gg-instagram"></i></span>
									<span className="header__name">Hezamgram</span>
								</Link>
							</li>
							{!!Object.keys(user).length &&
									<li><Link to="/search">Поиск</Link></li>
							}
							{!!Object.keys(user).length &&
									(user.isAdmin ? <li><Link to="/admin">Администрирование</Link></li> : <li><Link to="/profile">Профиль</Link></li>)
							}
							<li>
								{Object.keys(user).length
									? 
										<button onClick={()=>setUser({})}>Выйти</button>
									: 
										<button onClick={()=>setAuthVisible(true)}>
											Войти
										</button>
                            	}
							</li>
						</ul>
					</nav>
				</div>
			</header>
            <Modal visible={authVisible} setVisible={setAuthVisible}>
                <Auth setAuthVisible={setAuthVisible}/>
            </Modal>
        </>
    );
}

export default Header;