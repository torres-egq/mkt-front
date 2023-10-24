import { useState, ReactNode } from 'react'
import Select from 'react-select'

interface MenuProps {
  children: ReactNode;
}

import Logo from '/logo.png'

import BrasilFlag from './brasil.png';
import UKFlag from './usa.png';
import FrancaFlag from './france.png';



export function Menu(props: MenuProps) {

  const [checked, setChecked] = useState(true);

  const [languageSelected, setLanguageSelected] = useState(null)

  const options = [
    { value: 'pt-br', label: 'PT-BR', flag: BrasilFlag },
    { value: 'en', label: 'English', flag: UKFlag },
    { value: 'fr', label: 'Français', flag: FrancaFlag }
  ];

  const CustomOption = ({ innerProps, label, data }) => (
    <div className='flex' {...innerProps}>
      <img src={data.flag} alt={label} width="20" style={{ marginRight: '10px' }} />
      {label}
    </div>
  );

  return (
    <>
      <div className='h-12  z-40 bg-slate-400  fixed w-screen flex justify-between'>

        <div className=' w-24 h-12  bg-slate-50 ' >
          {checked ?
            <div className='flex justify-center py-3 cursor-pointer' onClick={() => setChecked(!checked)}>
              <div className='font-sans text-sm mx-1 pt-1 '>

                Menu
              </div>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15" />
              </svg>


            </div>
            :
            <>

              {/* MENU */}
              <div className={` ${checked ? 'sr-only' : 'not-sr-only'} z-40 transition-all shadow-2xl opacity-90 fixed w-full   h-screen lg:w-80 overflow-y-auto max-h-full bg-gradient-to-r from-slate-400 to-slate-100 `}>
                <div className='flex flex-col h-full justify-between content-between align-middle'>
                  <div className="flex flex-col  justify-start">
                    <div className='flex justify-end cursor-pointer p-3 lg:w-80' onClick={() => setChecked(!checked)}>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 9V4.5M9 9H4.5M9 9L3.75 3.75M9 15v4.5M9 15H4.5M9 15l-5.25 5.25M15 9h4.5M15 9V4.5M15 9l5.25-5.25M15 15h4.5M15 15v4.5m0-4.5l5.25 5.25" />
                      </svg>


                      <div className='font-sans text-sm mx-1 pt-1'>
                        Fechar
                      </div>
                    </div>
                    <nav className='flex justify-center'>
                      <img src={Logo} style={{ width: '200px' }} />

                    </nav>

                    <div className="content-start " >
                      <ul >
                        <li className='m-2 p-3 rounded-lg bg-slate-50 border transition duration-150 ease-in-out hover:bg-slate-200 shadow-2xl'>Projetos</li>
                        <li className='m-2 p-3 rounded-lg bg-slate-50 border transition duration-150 ease-in-out hover:bg-slate-200'>Relatórios</li>
                        <li className='m-2 p-3 rounded-lg bg-slate-50 border transition duration-150 ease-in-out hover:bg-slate-200'>Formulários</li>
                        <li className='m-2 p-3 rounded-lg bg-slate-50 border transition duration-150 ease-in-out hover:bg-slate-200'>Dashboard</li>


                      </ul>
                    </div>
                  </div>

                  <div className=' flex flex-col  items-center mb-3'>
                    <div style={{ height: '2px' }} className='w-4/5 bg-slate-700 mb-3 opacity-20'></div>
                    <div className='flex h-12 w-full justify-between flex-wrap content-center px-3'>
                      <div className='bg-slate-700 w-10 h-10 rounded-full opacity-50 cursor-pointer ring-4 ring-slate-700 ring-opacity-50 hover:ring-5 hover:ring-slate-500  hover:ring-opacity-90 flex items-center justify-center hover:opacity-100 hover:text-white'>

                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                        </svg>

                      </div>
                      <div className='flex flex-col  items-center  '>
                        <div> Diego Pereira Torres</div>
                        <div className='w-full font-sans text-sm px-4 font-semibold flex justify-around'>

                          <div className='text-red-500'>Sair</div>
                        </div>
                      </div>
                      <div className='bg-slate-700 w-10 h-10 rounded-full opacity-50 cursor-pointer ring-4 ring-slate-700 ring-opacity-50 hover:ring-5 hover:ring-slate-500  hover:ring-opacity-90 flex items-center justify-center hover:opacity-100 hover:text-white'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z" />
                        </svg>

                      </div>
                    </div>


                  </div>
                </div>
              </div>
            </>

          }


        </div>

        <div className='flex h-12 gap-4 mr-5 items-center'>
          <div >Tutoriais</div>
          
          <div className='flex items-center'>
           
            {/* {languageSelected?.flag !== null ? <img src={languageSelected.flag}: '' />} */}
           
            <Select
            className='w-40 z-0'
              options={options}
              isSearchable={false}
              components={{
                Option: CustomOption
              }}
              onChange={(e) => setLanguageSelected(e)}
            />
             <div className='items-center ' >
            {languageSelected !== null ? <img className='items-center ' src={languageSelected.flag} alt={languageSelected.label} width="30" style={{ marginLeft: '10px' }} />: ''}
        
            </div>
          </div>
        </div>
      </div>




      {/* CORPO */}
      <div className={`pt-16 min-h-screen  bg-slate-100 border-0 p-8`}>
        {props.children}
      </div>


    </>
  )
}