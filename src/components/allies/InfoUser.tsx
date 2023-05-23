import {shallow} from "zustand/shallow";
import { infoAgent } from "../../store/agent";
import { useEffect } from "react";
import Global from "../../Global";
import axios from "axios";

const InfoUser = () => {

    const agent = infoAgent((state) => ({
        name: state.name,
        documentType: state.documentType,
        document: state.document,
        date: state.date,
        phoneNumber: state.phoneNumber,
        email: state.email,
    }), shallow);

    const { setInfoAgent } = infoAgent()

    useEffect(() => {
        (async () => {
            const url = Global.url;
            const request = "/json-server/profile.json";
            const { data:{agent} } = await axios.get(url + request)
            setInfoAgent(agent.name, agent.documentType, agent.document, agent.date, agent.phoneNumber, agent.email)
        })()
    }, [])


    return (
        <>
            <div className="info-user">
                <div className="info-user_card">
                    <div className="info-user_box-inputs">

                        <input type="text" className="info-user_input info-user_input-title" disabled value={'Perfil del representante'} />
                        <input type="text" className="info-user_input" disabled value={agent.name} />
                        <input type="text" className="info-user_input" disabled value={`${agent.documentType}: ${agent.document}`} />
                        <input type="text" className="info-user_input" disabled value={agent.date} />
                        <input type="text" className="info-user_input info-user_input-none-border" disabled value={agent.phoneNumber} />
                        <input type="text" className="info-user_input info-user_input-none-border" disabled value={agent.email} />

                    </div>
                </div>
            </div>

        </>
    );
}

export default InfoUser;