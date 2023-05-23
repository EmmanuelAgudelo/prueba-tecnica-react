import { BiBuildings, BiMobile } from "react-icons/bi";
import { AiOutlineMail } from "react-icons/ai";
import { useEffect } from "react";
import { infoBusiness } from "./../../store/store";
import axios from "axios";
import Global from "../../Global";
import {shallow} from "zustand/shallow";

const InfoBusiness = () => {

  const info = infoBusiness((state) => ({
    category: state.category,
    city: state.city,
    department: state.department,
    address: state.address,
    phoneNumber: state.phoneNumber,
    active: state.active,
    branches: state.branches,
  }), shallow);

  const {setInfoBusiness} = infoBusiness()

  useEffect(() => {
    const url = Global.url;
    const request = "/json-server/business.json";
    axios.get(url + request).then(res => {
      const data = res.data.business
      setInfoBusiness(data.category, data.city, data.department, data.address, data.phoneNumber, data.active, data.branches)
    })
    
}, [])

  return (
    <div className="info-business_container-card">
      <div className="info-business_card-header">
        <img src="/logo-frisby.png" alt="" />
      </div>
      <div className="info-business_card-body">
        <div className="info-business_card-body_sede-active">
          <span className="info-business_card-body_title"><strong>Frisby</strong></span>
          <select name="sede" id="sede" disabled>
            <option value="">Sede 1</option>
          </select>
          {info.active ?
            <span className="info-business_card-body_state-true">Activo</span>
            :
            <span className="info-business_card-body_state-false">Inactivo</span>
          }
        </div>

        <div className="info-business_card-body_inputs">
          <input type="text" disabled value={info.category} className="info-business_card-body_input" />
          <input type="text" disabled value={info.city} className="info-business_card-body_input" />
          <input type="text" disabled value={info.department} className="info-business_card-body_input" />
          <input type="text" disabled value={info.address} className="info-business_card-body_input" />
          <input type="text" disabled value={info.phoneNumber} className="info-business_card-body_input" />
          <input type="text" disabled value={`Número de sedes: ${info.branches.length}`} className="info-business_card-body_input branch" />
        </div>
      </div>
      <div className="info-business_card-footer">
        <button className="info-business_btn-legal-doc">
          <BiBuildings className="btn-legal-do_icon" />
          <span>Documentos legales</span>
        </button>
        <div className="info-business_icons">
          <AiOutlineMail />
          <BiMobile />
        </div>
        <button className="info-business_btn-desactive">
          Desactivar establecimiento
        </button>
      </div>
    </div>
  );
}

export default InfoBusiness;