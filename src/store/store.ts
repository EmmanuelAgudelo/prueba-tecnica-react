import { create } from "zustand";

interface Route {
    url: string
    setUrl: (name: string) => void
}

interface Collapse{
    collapse: boolean
    setCollapse: (value:boolean) => void
}

interface Branch {
    nombre: string
    address: string
    phone: number
}

interface InfoBusiness {
    category: string
    city: string
    department: string
    address: string
    phoneNumber: string
    active: boolean
    branches: Array<Branch>
    setInfoBusiness: (category: string
        , city: string
        , department: string
        , address: string
        , phoneNumber: string
        , active: boolean
        , branches: Array<Branch>)=>void
}


export const route = create<Route>((set) =>
({
    url: "/",
    setUrl: (name: string) => set((state) => ({
        url: name,
    }))
}))


export const infoBusiness = create<InfoBusiness>((set) => ({
    category: '',
    city: '',
    department: '',
    address: '',
    phoneNumber: '',
    active: true,
    branches: [],
    setInfoBusiness: (category: string
        , city: string
        , department: string
        , address: string
        , phoneNumber: string
        , active: boolean
        , branches: Array<Branch>) => set(state => ({
            category: category,
            city: city,
            department: department,
            address: address,
            phoneNumber: phoneNumber,
            active: active,
            branches: branches,
        }))

}))

export const sidebarCollapse = create<Collapse>((set) => ({
    collapse: false,
    setCollapse: (value:boolean) => set(state => ({
        collapse: value        
    }))
}))

