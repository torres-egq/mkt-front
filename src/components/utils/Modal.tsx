import React, { ReactElement } from 'react';

interface ModalProps {
    isOpen: boolean;
    header: string;
    toggle: (bool?: boolean) => void;
    className?: string;
    children?: React.ReactNode;
}

export function Modal({ isOpen, 
    header, 
    toggle, 
    className = '', 
    children  }: ModalProps): ReactElement{
    return (

        <div
            id='modal'
            className={`bg-gray-700  z-50 bg-opacity-90 backdrop-blur-sm w-screen h-screen fixed top-0 left-0 flex justify-center items-center transition-all duration-300 transform ${isOpen ? 'opacity-100 scale-100 visible' : 'opacity-0 scale-105 invisible'}`}
        >
            <div className={`bg-white w-5/6 md:w-auto h-4/5 md:h-auto fixed opacity-120 rounded-lg transition-all duration-300 transform ${isOpen ? 'translate-y-0' : 'translate-y-[-50px]'} ${className}`} >
                <div className='h-12 flex items-center justify-between'>
                    <div className='w-8 h-8 mx-2'></div>
                    <div className='w-full my-2 py-2 text-center border-b-2 border-neutral-500'>{header || 'Header'}</div>
                    <div className='w-8 h-8 mx-2 opacity-50 cursor-pointer flex items-start justify-start hover:opacity-100 hover:text-red-800' onClick={() => toggle(false)}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </div>
                   
                </div>
                <div className='p-5 overflow-y-scroll max-h-[calc(90vh-10rem)] break-words overflow-hidden'>{children}</div>
            </div>
        </div>
    )
}
