import { Navigate } from "react-router"

export const ShowonLogin = ({children})=>{
    if(sessionStorage.getItem("19thdec") != null){
        return children
    }
    else return null
}

export const ShowonLogout = ({children})=>{
    if(sessionStorage.getItem("19thdec") == null){
        return children
    }
    else return null
}

export const ProtectedAdmin = ({children})=>{
    if(sessionStorage.getItem("19thdec") != null){
        let obj = JSON.parse(sessionStorage.getItem("19thdec"))
        if(obj.role=="0") return children
        return <Navigate to='/' replace />
    }
    else return <Navigate to='/login' replace />
}

export const Protected = ({children})=>{
    if(sessionStorage.getItem("19thdec") != null){
        let obj = JSON.parse(sessionStorage.getItem("19thdec"))
        if(obj.role=="1") return children
        return <Navigate to='/login' replace />
    }
    else return <Navigate to='/login' replace />
}