import React, { useCallback, useEffect, useState,useRef } from 'react';

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [characterAllowed, setCharacterAllowed] = useState(false);
  const [password, setPassword] = useState("");

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    
    if (numberAllowed) {
      str += "0123456789";
    }

    if (characterAllowed) {
      str += "!@#$%^&*()_+[]{}|;:,.<>?";
    }

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [length, numberAllowed, characterAllowed]);

  useEffect(() => {
    passwordGenerator();
  }, [length, numberAllowed, characterAllowed, passwordGenerator]); 

  //Use Ref Hook

  const passwordRef = useRef(null);
  const copyPasswordToClipboard =useCallback(() =>{
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 50); // For mobile devices
    window.navigator.clipboard.writeText(password)},[password]);


  return (
    <>
      
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500'>

        <div className='text-black text-center my-3'>Password Genrator</div>
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          

          <input type="text" value={password} className='outline-none w-full py-1 px-3' placeholder ='password' readOnly ref={passwordRef}>
          </input>
          <button className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'onClick={copyPasswordToClipboard}>Copy</button>
        </div>

        <div className='flex text-sm gap-x-2'> 
          <div className='flex items-center gap-x-1'>
            <input type="range" min={6} max={50} value={length} className='cursor-pointer' onChange={(e)=>{setLength(e.target.value)}} />
            <label className='text-black'>Length: {length}</label>
          </div>

          <div className='flex items-center gap-x-1'>
            <input type="checkbox" id='number' checked={numberAllowed} onChange={(e) => { setNumberAllowed(e.target.checked) }} />
            <label htmlFor='number'>Numbers</label>
            </div>

            <div className='flex items-center gap-x-1'>
            <input type="checkbox" id='character' checked={characterAllowed} onChange={(e) => { setCharacterAllowed(e.target.checked) }} />
            <label htmlFor='character'>Characters</label>
            </div>

        </div>

      </div>
    </>
  )
}

export default App
