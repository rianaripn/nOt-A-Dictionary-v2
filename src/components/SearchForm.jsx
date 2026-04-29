function SearchForm ({inputValue, setInputValue, isLoading, handleSubmit, handleReset, showReset}){
    return(
        <div>
            <form className="flex flex-col w-full gap-4" onSubmit={handleSubmit}>
                <input 
                type="text" 
                placeholder="go ahead, type your word . . ." 
                className="border-blue-950 border-3 px-4 py-2 w-3/5 mx-auto my-0 shadow-[5px_5px] shadow-blue-950 bg-white text-slate-800 font-bold
                focus:bg-amber-200 focus:text-blue-950 hover:shadow-none hover:transition-all duration-300 hover:bg-amber-200"
                value={inputValue}
                onChange={(e)=>setInputValue(e.target.value)}/>
                <button 
                type="submit" 
                className="border-3 border-blue-950 bg-cyan-500 text-white w-1/5 my-0 mx-auto py-1.5 font-black shadow-[5px_5px] shadow-blue-950 cursor-pointer
                hover:bg-amber-300 hover:text-orange-500 hover:shadow-none hover:transition-all duration-300 hover:w-1/6"
                disabled={isLoading}
                >{isLoading ? 'hold up . . .' : 'define it'}</button>
                {showReset && (
                    <button type="button"
                    className="border-3 border-blue-950 bg-pink-500 text-white w-2/5 my-0 mx-auto py-1.5 font-black shadow-[5px_5px] shadow-blue-950 cursor-pointer
                    hover:bg-amber-300 hover:text-orange-500 hover:shadow-none hover:transition-all duration-300 hover:w-2/5"
                    onClick={handleReset}
                    >
                        find another word
                    </button>
                )}
            </form>
        </div>
    )
}

export default SearchForm