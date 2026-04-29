import { useEffect } from "react";

function ToastNotification ({showToast, setShowToast}){
    useEffect(()=>{
        if(showToast){
            const timer = setTimeout(()=>{
                setShowToast(false)
            },15000)
            return()=> clearTimeout(timer)
        }
    },[showToast])
    if(!showToast) return null

    return (
        <div className="fixed bottom-10 left-1/2 -translate-x-1/2 bg-white w-1/2 px-8 py-5 text-center 
            border-blue-950 border-2 shadow-[5px_5px]">
            <p className="font-black">YOU'RE WELCOME, I GUESS. 🥱</p>
        </div>
    )
}

export default ToastNotification