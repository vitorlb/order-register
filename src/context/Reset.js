import React,  { useContext, useState  } from 'react'

const ResetContext = React.createContext()
const SetToZeroContext = React.createContext()

export function ResetProvider({children}) {

    const [zerar, setZerar] = useState(false)

    function setToZero() {
        setZerar(0)
        console.log('zerado')
        console.log(this.state)
    }

    return (
        <ResetContext.Provider value={zerar}>
            <SetToZeroContext.Provider value={setToZero}>
            {children}
            </SetToZeroContext.Provider>
        </ResetContext.Provider>
    )
}

export function useZerar() {
    return useContext(ResetContext)
} 

export function useSetToZero() {
    return useContext(SetToZeroContext)
} 

