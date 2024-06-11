'use client'
import Editor from '@monaco-editor/react';
import { useState } from 'react';

const Compiler = () => {
    const [code, setCode] = useState("// some comment");
    const [selectedOption, setSelectedOption] = useState("");

    const handleSelectChange = (event) => {
        setSelectedOption(event.target.value);
    };

    return (
        <div className='flex flex-col m-2 p-2'>
            <p>Compiler</p>
            <select 
                value={selectedOption} 
                onChange={handleSelectChange} 
                className='mb-2 border border-black rounded-md bg-gray-300 p-2 w-40'
            >
                <option value="">Select an option</option>
                <option value="action">Action</option>
                <option value="another-action">Another action</option>
                <option value="something-else">Something else</option>
            </select>
            <Editor 
                defaultLanguage="javascript" 
                height="200px"
                width="400px"
                defaultValue="// some comment"
                value={code}
                onChange={(value) => setCode(value)}
                className='m-4 border border-black' 
            />
        </div>
    );
};

export default Compiler;
