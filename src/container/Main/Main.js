import SideMenu from '../SideMenu/SideMenu';
import './Main.css'

export default function Main(props) {
    return (
        <div className="Main__container">
            <SideMenu />
            <div className="Main__content">
                {props.children}
            </div>
        </div>
    );
}