import React,{useState} from 'react'

const ShotCircit = () => {
    const [demo, setDemo] = useState('')
  return (
    <>
    <center>

  
    <h1>Short Circit Evalution</h1>

    <h1>{demo || <>
    <h1>Mast</h1>
    <p>You can do anything</p>
    </>}</h1>
    <h1>{demo && 'sukhdeb'}</h1>

    </center>
    
    </>
  )
}

export default ShotCircit