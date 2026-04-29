import Header from './components/Header'
import SearchForm from './components/SearchForm'
import ResultCard from './components/Result'
import ToastNotification from './components/ToastNotification'
import { useState } from 'react'


function App() {
  const [inputValue, setInputValue] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)
  const [result, setResult] = useState(null)
  const [showReset, setShowReset] = useState(false)
  const [showToast, setShowToast] = useState(false)

  function handleReset(){
    setIsLoading(false)
    setInputValue('')
    setResult(null)
    setError(null)
    setShowReset(false)
  }

  async function handleSubmit(e){
    e.preventDefault()
    console.log('Submitted: ', inputValue)

    if(inputValue.trim() === ''){
      setShowToast(false)
      setError ('Searching for nothing 🙄. Very smart 😮‍💨😮‍💨😮‍💨. Try typing an ACTUAL word.')
      return
    }
    setIsLoading(true)
    setResult(null)
    setError(null)
    
    try{
      const dictResponse = await fetch(`/api/dictionary?word=${inputValue}`)
      const dictData = await dictResponse.json()
      if(!dictData.valid){
        setShowToast(false)
        throw new Error('try to use the ACTUAL word! 🤦‍♂️')
      }
      const groqResponse = await fetch('/api/groq',{
        method : 'POST',
        headers : {
          'Content-Type' : 'application/json'
        },
        body : JSON.stringify({
          word:dictData.word,
          definition: dictData.definition
        })
      })
      const groqData = await groqResponse.json()

      console.log(groqData)
      setResult({
        word : dictData.word,
        aiResponse : groqData.aiResponse
      })
      setShowReset(true)
      setShowToast(true)
    }catch(err){
      setError(err.message)
    }finally{
      setIsLoading(false)
    }

  }

  return (
    <div className='font-space m-0 p-0 box-border flex flex-col gap-2 bg-orange-500 h-screen'>
      <Header />
      <SearchForm
        inputValue = {inputValue}
        setInputValue = {setInputValue}
        isLoading = {isLoading}
        handleSubmit = {handleSubmit}
        handleReset={handleReset}
        showReset={showReset}
      />
      <ResultCard 
        result={result}
        error={error}
        isLoading={isLoading}
      />
      <ToastNotification 
        showToast = {showToast}
        setShowToast = {setShowToast}
      />
    </div>
  )
}

export default App