import { create } from "zustand"

interface Rating{
    rating: Array<number>
    setRating: (value:Array<number>) => void
}



export const infoRating = create<Rating>((set) => ({
    rating: [],
    setRating: (value:Array<number>)=> set(state => ({
        rating : value,
    }))
}))