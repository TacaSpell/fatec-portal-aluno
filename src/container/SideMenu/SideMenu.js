import './SideMenu.css';
import '../../style/global.css';
import { useContext, useRef } from 'react';
import { UserContext } from '../../context/UserContext';
import { logout, sendPasswordReset } from '../../services/api/authAction';
import { postCourseUser } from '../../services/api/courseUserAction';
import { AuthContext } from '../../context/AuthContext';
import { toast } from 'react-toastify';

export default function SideMenu() {
    const { user, courseUser } = useContext(UserContext);
    const { authenticatedUser } = useContext(AuthContext);
    const clickedOnImport = useRef(false);

    const handleResetPassword = async () => {
        await sendPasswordReset(user.email);
    }

    return (
        <div className="SideMenu__container">
            <div className="SideMenu__profile">
                <div className="SideMenu__profile_img">
                    <img src={user.profile_img} alt="profile_image" />
                </div>

                <h3>{user.name}</h3>
                <h5>{user.email}</h5>

                <div className="SideMenu__profile_register">
                    <div className="SideMenu__profile_performance_indicator">
                        <strong>RA: </strong>
                        <span>{user.student_ra}</span>
                    </div>
                    <div className="SideMenu__profile_performance_indicator">
                        <strong>Ciclo:</strong>
                        <span>6</span>
                    </div>
                </div>

                <h4>Rendimento no Curso</h4>

                <div className="SideMenu__profile_performance">
                    <div className="SideMenu__profile_performance_indicator">
                        <strong>PP:</strong>
                        <span>67.68%</span>
                    </div>
                    <div className="SideMenu__profile_performance_indicator">
                        <strong>PR:</strong>
                        <span>8.12</span>
                    </div>
                    <div className="SideMenu__profile_performance_indicator">
                        <strong>Maior PR:</strong>
                        <span>0.00</span>
                    </div>
                </div>

                <h4>Prazo de Integralização</h4>

                <div className="SideMenu__profile_coursed">
                    <div className="SideMenu__profile_performance_indicator">
                        <strong>Cursado:</strong>
                        <span>3/10</span>
                    </div>

                </div>
            </div>
            <ul>
                <li>
                    <button type="button" className="SideMenu__button">Avisos</button>
                    <button type="button" className="SideMenu__button">Upload Carteira Vacinação</button>
                    <button type="button" className="SideMenu__button" onClick={handleResetPassword}>Alterar Senha</button>
                    <button type="button" className="SideMenu__button" onClick={() => {
                        clickedOnImport.current === false ?
                            postCourseUser(authenticatedUser.uid, courseUser) :
                            toast.warning('Os templates de cursos já foram adicionados para este usuário.');

                        clickedOnImport.current = true;

                    }
                    }>Ajuda</button>
                    <button type="button" className="SideMenu__button" onClick={logout}>Sair</button>
                </li>
            </ul>
        </div>
    );
}