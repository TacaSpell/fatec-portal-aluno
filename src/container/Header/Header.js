import React, { useContext } from 'react';

import './Header.css';
import useNavigation from '../../hooks/useNavigation';
import { UserContext } from '../../context/UserContext';
import { logout } from '../../services/api/authAction';

function Header(props) {
    const { goHistoric, goActualPeriod } = useNavigation();
    const { user } = useContext(UserContext);

    const handleLogout = () => {
        logout();
    }

    return (
        <header className="Header__container">
            <div className="Header">
                <div className="Header__col1">
                    <div className="Header__logo">
                        <img
                            src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpj6HsqspBQf07aSFmSxZ7hm4LiKKHZgmQ9HJa5fcRxWrwtCeacgj-8jWJgogii9k1HeY&usqp=CAU'}
                            alt="logo"
                            onError={() =>
                                console.error('img not loaded')
                            }
                        />
                    </div>
                </div>
                <>
                    <div className="Header__col Header__col2">
                        <button
                            className={`Header__btn-actualperiod ${props.main === 'actualperiod' ? 'Header__btn--active' : ''}`}
                            onClick={() => {
                                goActualPeriod();
                            }}
                        >
                            Período Atual
                        </button>
                    </div>
                    <div className="Header__col Header__col3">
                        <button
                            className={`Header__btn-historic ${props.main === 'historic' ? 'Header__btn--active' : ''}`}
                            onClick={() => {
                                goHistoric();
                            }}
                        >
                            Histórico
                        </button>
                    </div>
                </>
                <div className="Header__col4">

                </div>
                <div className="Header__col5">

                </div>
                <div className="Header__col6">
                    Seja bem vindo, {user.name?.split(' ')[0]} <span className="Header__btn-logout" onClick={handleLogout}> (sair)</span>
                </div>
            </div>
        </header>
    );
}

export default Header;