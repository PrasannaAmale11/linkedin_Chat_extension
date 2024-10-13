import { useState } from 'react';
import reactLogo from '@/assets/react.svg';
import wxtLogo from '/wxt.svg';
import './App.css';

function App() {
  const handleGetStartedClick = () => {
    
    chrome.runtime.sendMessage({ action: 'start_extension' }, (response) => {
      
      if (response.success) {
        console.log('Extension started successfully');
      } else {
        console.error('Failed to start the extension');
      }
    });
  };

  return (
    <>
      <div className="logo h-[380px] w-[300px]">
        <div className='flex flex-col items-center p-[30px] gap-3'>
          <img src={wxtLogo} alt="WXT Logo" className='h-8 w-8 bg-black rounded-full' />
          <h1 className='text-lg font-bold'>ChatGPT Writer</h1>
        </div>
        <div className='mt-4 flex justify-center items-center'>
          <button 
            onClick={handleGetStartedClick} 
            className='bg-black text-white py-[6px] px-[20px] rounded-md hover:bg-slate-950'
          >
            Get Started
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
