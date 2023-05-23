import { formatNumber } from "chart.js/helpers"
import { infoSales } from "./../../store/sales";
import {shallow} from "zustand/shallow";
import { useEffect, useState } from "react";
import Global from "../../Global";
import axios from "axios";


interface Sale {
    id: string
    active: boolean
    description: string
    value_start: number
    value_revu: number
    sales: number
}

const Sales = () => {

    const {sales} = infoSales((state) => ({
        sales: state.sales
    }), shallow);
    const { setInfoSales } = infoSales();


    useEffect(() => {
        (async () => {
            const url = Global.url;
            const request = "/json-server/sales.json";
            const { data:{sales} } = await axios.get(url + request)
            setInfoSales(sales)
        })()
    }, [])

    return (
        <div className="sales">
            <table className="sales_table">
                <thead className="sales_table-thead">
                    <tr>
                        <th style={{ borderRadius: '25px 0 0 0' }}>Cajas</th>
                        <th>Descripción</th>
                        <th>V. Inicial</th>
                        <th>V. Revu</th>
                        <th style={{ borderRadius: '0 25px 0 0 ' }}>Ventas</th>
                    </tr>
                </thead>
                <tbody className="sales_table-tbody">
                    {sales.map((sale)=>
                    <tr key={sale.id}>
                    <td style={{ borderRight: '1px solid #c4c4c4' }}>
                        <div className="sales_table-tbody_id">
                            <div> <span><b>{sale.id} </b></span></div>
                            <div>
                                <label className="switch">
                                    {sale.active ?
                                    <input type="checkbox" checked disabled />
                                    
                                    :
                                    <input type="checkbox" disabled/>
                                    }
                                    <span className="slider round"></span>
                                </label>
                            </div>
                        </div>

                    </td>
                    <td style={{ borderRight: '1px solid #c4c4c4' }}>
                        <div className="sales_table-tbody_description" >
                           {sale.description}
                        </div>
                    </td>
                    <td style={{ borderRight: '1px solid #c4c4c4' }}>${formatNumber(sale.value_start, 'COP')}</td>
                    <td style={{ borderRight: '1px solid #c4c4c4' }}>${formatNumber(sale.value_revu, 'COP')}</td>
                    <td>{sale.salesNumber}</td>
                </tr>
                    )}
                </tbody>
            </table>
        </div>
    )
}

export default Sales