function Header(){
    return(
        <div className="bg-white border-cyan-950 border-4 flex flex-col gap-0.5 p-5 w-3/4 my-2.5 mx-auto shadow-[5px_8px] shadow-blue-950 
        hover:shadow-none transition-all duration-400">
            <h1 className="text-3xl font-extrabold text-center">nOt - A <span className="text-orange-500 font-extrabold">DicTionary</span></h1>
            <p className="text-xs text-center font-bold text-slate-600 uppercase">Because reality wasn't disappointing enough already.</p>
        </div>
    )
}

export default Header