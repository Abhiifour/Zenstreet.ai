import {create} from 'zustand'

export type State = {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;     
    pinCode: string;
    houseNumber: string;
    street: string;
  
    district: string;
    state: string;
    preference: string;
    internships : boolean;
    openSource : boolean;
}

type Actions = {
    updateState : ({}:State) => void;
}

export const useFormsState = create<State & Actions>((set) => ({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",     
    pinCode: "",
    houseNumber:  "",
    street: "",
    district: "",
    state: "",
    preference: "",
    internships : false,
    openSource : false,
    updateState : (newState: State) => set(() => ({...newState}))
}))


export const useThemeState = create((set) => ({
    theme: true,
    setTheme: (theme: string) => set(() => ({ theme }))
}))