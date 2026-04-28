function ResultCard({isLoading, result, error}){
    if(isLoading){
        return(
            <div className="flex flex-col justify-center my-auto mx-auto w-3/4 text-center">
                <p>hmm, looking your weird word . . .</p>
            </div>
        )
    }

    if(error){
        return(
            <div className="flex flex-col justify-center my-auto mx-auto w-3/4 text-center">
                <p>{error}</p>
            </div>
        )
    }

    if(result){
        const parts = result.aiResponse.split('|')
        const wordType = parts[0].trim()
        const theDefinition = parts[1].trim()
        return(
            <div 
            className="flex flex-col justify-center bg-white border-4 border-blue-950 p-0 my-6 mx-auto w-3/4 shadow-[5px_8px] shadow-blue-950" > 
                <h3 className="px-4 py-2 text-left  text-white bg-blue-950 m-0 font-bold text-xl uppercase tracking-widest">{result.word}  
                    <span className="text-xs lowercase tracking-wide">_[{wordType}]_</span></h3>
                <p className="p-4 text-left bg-amber-100 font-medium" >{theDefinition}</p>
            </div>
        )
    }

    return(
        <div className="flex flex-col justify-center my-auto mx-auto w-3/4 text-center">
            <h1>🤦🏻‍♂️</h1>
            <p>Type a word up there. I know reading instructions is hard, but you can do it. Probably.</p>
        </div>
    )
}

export default ResultCard