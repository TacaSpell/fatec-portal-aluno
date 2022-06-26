import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';

import './NoRouteFound.css';
import useNavigation from '../../hooks/useNavigation';
import { auth } from '../../firebase-config';

function NoRouteFound(props) {
    const { goHome } = useNavigation();
    const navigate = useNavigate();
    const location = useLocation();
    const [user, loading] = useAuthState(auth);

    useEffect(() => {
        if (loading) {
            return;
        }

        if (user) navigate("/home/historic");
    }, [user, loading, navigate]);

    return (
        <div className="NoRouteFound">
            <h1>Página não encontrada</h1>
            <div>A página ou rota: {location.pathname} não pode ser encontrada.</div>
            <div>
                <span className="NoRouteFound__link pointer text-noselect text-semibold" onClick={goHome}>Voltar para a Home</span>.
            </div>
        </div>
    );
}

export default NoRouteFound;