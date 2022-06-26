import { useNavigate } from 'react-router';

function useNavigation() {
    const navigate = useNavigate();

    function goHome() {
        navigate('/home');
    }

    function goHistoric() {
        navigate('/home/historic');
    }
    
    function goActualPeriod() {
        navigate('/home/actualperiod');
    }

    function goAlerts() {
        navigate('/home/alerts');
    }

    function goChangePassword() {
        navigate(`/home/changepassword`);
    }

    function goLoginPage() {
        navigate(`/`);
    }

    return {
        goHome,
        goHistoric,
        goActualPeriod,
        goAlerts,
        goChangePassword,
        goLoginPage
    }
}

export default useNavigation;