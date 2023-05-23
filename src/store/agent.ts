import { create } from "zustand";


interface InfoAgent {
    name: string
    documentType: string
    document: string
    date: string
    phoneNumber: string
    email: string
    setInfoAgent: (name: string,
        documentType: string,
        document: string,
        date: string,
        phoneNumber: string,
        email: string)=>void
}

export const infoAgent = create<InfoAgent>((set) => ({
    name: '',
    documentType: '',
    document: '',
    date: '',
    phoneNumber: '',
    email: '',
    setInfoAgent: (name: string,
        documentType: string,
        document: string,
        date: string,
        phoneNumber: string,
        email: string) => set(state => ({
            name: name,
            documentType: documentType,
            document: document,
            date: date,
            phoneNumber: phoneNumber,
            email: email,
        }))

}))