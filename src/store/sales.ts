import { create } from "zustand";


interface Sale {
    id: string
    active: boolean
    description: string
    value_start: number
    value_revu: number
    salesNumber: number
}

interface InfoSales {
    sales: Array<Sale>
    setInfoSales: (sale:Array<Sale>)=>void
}

export const infoSales = create<InfoSales>((set) => ({
    sales: [],
    setInfoSales: (sales:Array<Sale>) => set(state => ({
            ...sales, sales
        }))

}))