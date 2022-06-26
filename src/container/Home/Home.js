import React, { useContext, useEffect, useRef } from 'react';
import _ from 'lodash';
import './Home.css';
import ActualPeriod from '../ActualPeriod/ActualPeriod';
import Alerts from '../Alerts/Alerts';
import ChangePassword from '../ChangePassword/ChangePassword';
import Header from '../Header/Header';
import Historic from '../Historic/Historic';
import Main from '../Main/Main';
import { UserContext } from '../../context/UserContext';
import SpinnerV2 from '../../component/SpinnerV2/SpinnerV2';
import { AuthContext } from '../../context/AuthContext';

export default function Home(props) {
    const { user, loadUserById, loadCourseUserByUserId } = useContext(UserContext);
    const { authenticatedUser } = useContext(AuthContext);
    const isLoaded = useRef(false);
    // const [authenticatedUser, loading] = useAuthState(auth);

    useEffect(() => {
        if (!!authenticatedUser && isLoaded.current === false) {
            isLoaded.current = true;
            loadUserById(authenticatedUser.uid);
            loadCourseUserByUserId(authenticatedUser.uid);
        }
    }, [authenticatedUser]) //eslint-disable-line

    const renderMainComponent = () => {
        switch (props.main) {
            case "historic": return <Historic />;
            case "changepassword": return <ChangePassword />;
            case "actualperiod": return <ActualPeriod />;
            case "alert": return <Alerts />;
            default: return null;
        }
    }

    if (_.isEmpty(user)) return <SpinnerV2 />

    return (
        <section className="Home">
            <Header main={props.main} />
            <Main>
                {renderMainComponent()}
            </Main>
        </section>
    )
}