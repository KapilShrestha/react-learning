import { useState, useCallback, useEffect, useRef } from "react";

import "./App.css";

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [symbolAllowed, setSymbolAllowed] = useState(false);
  const [password, setPassword] = useState("");
  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numberAllowed) str += "0123456789";
    if (symbolAllowed) str += "!@#$%^&*()_+";
    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [length, numberAllowed, symbolAllowed, setPassword]);

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 100);
    window.navigator.clipboard.writeText(password);
  }, [password]);

  useEffect(() => {
    passwordGenerator();
  }, [length, numberAllowed, symbolAllowed, passwordGenerator]);

  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-4 my-8 bg-orange-500">
        <h1 className="text-white text-center">Password Generator</h1>
        <div className="flex gap-4">
          <input
            type="text"
            value={password}
            className="outline-none w-full py-2 px-3 rounded-lg"
            placeholder="password"
            readOnly
            ref={passwordRef}
          />
          <button
            className="outline-none bg-blue-400 text-white px-3 py-5 shrink-0 rounded-lg hover:bg-blue-900"
            onClick={copyPasswordToClipboard}
          >
            Copy
          </button>
        </div>

        <div className="flex text-sm gap-x-2">
          <div>
            <input
              type="range"
              min={6}
              max={100}
              value={length}
              className="cursor-pointer"
              onChange={(e) => {
                setLength(e.target.value);
              }}
            />
            <label>Length: {length}</label>
          </div>
          <div>
            <input
              type="checkbox"
              checked={numberAllowed}
              onChange={() => {
                setNumberAllowed((prev) => !prev);
              }}
            />
            <label>Numbers</label>
          </div>
          <div>
            <input
              type="checkbox"
              checked={symbolAllowed}
              onChange={() => {
                setSymbolAllowed((prev) => !prev);
              }}
            />
            <label>Characters</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
