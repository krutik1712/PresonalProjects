import React, { useCallback, useEffect, useRef, useState } from 'react';

export default function PasswordGenerator() {

    const [length, setLength] = useState(0);

    const [number, setNumber] = useState(false);

    const [char, setChar] = useState(false);

    const [password, setPassword] = useState('');

    const passGenerating = useRef(null);
    
    let passwordGenerator = useCallback(() => {

        let passGenerator = '';

        let string = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';

        if (number) string += '0123456789';

        if (char) string += '!@#$%^&*-_+=[]{}~`';

        for (let i = 0; i < length; i++) {
            let generator = Math.floor(Math.random() * string.length);
            passGenerator += string.charAt(generator);
        }

        setPassword(passGenerator);

    }, [length, number, char]);

    let copyText = useCallback(() => {
        passGenerating.current?.select();
        // passGenerating.current?.setSelectionRange(0, Infinity)
        window.navigator.clipboard.writeText(password);
    }, [password]);

    useEffect(() => {
        passwordGenerator();
    }, [length, number, char, passwordGenerator]);

    return (
        <>
            <div className='w-full max-w-md px-4 rounded-lg mx-auto shadow-md py-3 my-8 bg-gray-800 text-yellow-500'>
                <h1 className='text-3xl mb-5 text-center text-white'>Password Generator</h1>
                <div className='flex shadow rounded-lg overflow-hidden mb-4'>
                    <input
                        type="text"
                        value={password}
                        className='outline-none text-gray-800 w-full py-1 px-3'
                        placeholder='Password is generating....'
                        readOnly
                        ref={passGenerating}
                    />
                    <button
                        className='outline-none bg-green-500 hover:border-green-500 text-cyan-50 px-3 py-0.5 shrink-0'
                        onClick={copyText}
                    >
                        Copy
                    </button>
                </div>
                <div className='flex text-sm gap-x-2'>
                    <div className='flex items-center gap-x-1'>
                        <label>Length: {length}</label>
                        <input
                            type="range"
                            min={8}
                            max={50}
                            className='cursor-pointer'
                            value={length}
                            onChange={(e) => setLength(e.target.value)}
                        />
                    </div>
                    <div className='flex items-center gap-x-1'>
                        <input
                            type="checkbox"
                            checked={number}
                            id='numberInput'
                            onChange={() => setNumber((prev) => !prev)}
                        />
                        <label htmlFor='numberInput'>Number</label>
                    </div>
                    <div className='flex items-center gap-x-1'>
                        <input
                            type="checkbox"
                            checked={char}
                            id='characterInput'
                            onChange={() => setChar((prev) => !prev)}
                        />
                        <label htmlFor='characterInput'>Character</label>
                    </div>
                </div>
            </div>
        </>
    );
}