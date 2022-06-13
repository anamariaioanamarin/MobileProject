import { createContext, useContext } from "react";

export interface IGym{
    id:string;
    name:string;
    city: string;
}

export interface IGymContext{
    allGym: IGym [];
}

const GymContext=createContext<IGymContext>({
    allGym:[]
});

export const useGymContext= () : IGymContext => useContext(GymContext);

export const useGymList=(): IGym[] => {
    const{allGym}=useContext(GymContext);
    return allGym;
}

export default GymContext;