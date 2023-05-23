import { BiBuildings, BiMenu } from "react-icons/bi";
import { route, sidebarCollapse } from "./../../store/store";
import { useEffect } from "react";

const Header = () => {

    const { url } = route((state) => ({
        url: state.url,
    }))

    const { collapse } = sidebarCollapse((state) => ({
        collapse: state.collapse

    }));

    const { setCollapse } = sidebarCollapse();


    return (
        <header>
            {!collapse ?<BiMenu onClick={() => setCollapse(true)} className="menu" />: ''}
            <div className="header">
                <div className="header_title">
                    <BiBuildings className="header_icon" />
                    <h4>{url}</h4>
                </div>
                <div className="header_role">
                    <h4>Administrador</h4>
                </div>
            </div>

        </header>
    );
}

export default Header;