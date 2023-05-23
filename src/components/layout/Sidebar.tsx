import { NavLink } from "react-router-dom";
import { BiBuildings, BiDesktop, BiStar, BiMessage, BiMenu } from "react-icons/bi";
import { sidebarCollapse } from "../../store/store";

const Sidebar = () => {

    const {collapse} = sidebarCollapse((state) =>({
        collapse: state.collapse
        
    }));

    const {setCollapse} = sidebarCollapse();
    

    return (
        <div className={`sidebar ${!collapse ? 'collapse' : ''}`} style={collapse ? {position: 'fixed', zIndex: '10'} : {}}>

            {/* //* TOP SIDEBAR */}

            <div className="sidebar_header">
                <img src="/logo-revu.jpeg"></img>
                {collapse ?
                <div className="sidebar_menu-icon">
                <BiMenu  className="icon" onClick={() => setCollapse(false)} />
                </div>
                :''}
            </div>

            {/* //* MENU SIDEBAR      */}

            <div className="sidebar_menu">

                <NavLink to="/" state={'Inicio'}>
                    <div className="sidebar_link">
                        <BiDesktop className="sidebar_icon" />
                        <span>Inicio</span>
                    </div>
                </NavLink>

                <NavLink to="/aliados" state={'Aliados Revu'}>
                    <div className="sidebar_link">
                        <BiBuildings className="sidebar_icon" />
                        <span>Aliados Revu</span>
                    </div>
                </NavLink>

                <NavLink to="/calificaciones" state={'Calificaciones'}>
                    <div className="sidebar_link">
                        <BiStar className="sidebar_icon" />
                        <span>Calificaciones</span>
                    </div>
                </NavLink>

                <NavLink to="/mensajes" state={'Mensajes'}>
                    <div className="sidebar_link">
                        <BiMessage className="sidebar_icon" />
                        <span>Mensajes</span>
                    </div>
                </NavLink>
                

            </div>

            {/* //* FOOTER SIDEBAR */}

            <div className="sidebar_footer">
                <button className="sidebar_btn">Salir</button>
            </div>
        </div >

    );
}
export default Sidebar;