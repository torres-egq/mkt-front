import { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import { Menu } from "../components/menu";
import { Modal } from '../components/utils/Modal'
import Select, { SelectOptionActionMeta } from 'react-select'


import SparklineComponent from '../components/utils/charts/sparkline'
import Combinado from '../components/utils/charts/combinado'
import Heatmap from '../components/utils/charts/heatmap'
export function Page() {

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [isOpen, setIsOpen] = useState(false); // O modal começa fechado

  const [listaInstituicoes, setListaInstituicoes] = useState([])
  const [instituicao, setInstituicao] = useState(null)

  const [listaProjetos, setListaProjetos] = useState([])
  const [projeto, setProjeto] = useState(null)

  const [listaCampanhas, setListaCampanhas] = useState([])
  const [campanha, setCampanha] = useState(null)
  
  const [listaRelatorios,setListaRelatorios] = useState([])
  const [listaFormularios,setListaFormularios] = useState([])

  const [grid,setGrid] = useState('md:grid-cols-1')

  const toggleModal = (bool) => {
    if (bool === undefined) {
      setIsOpen(!isOpen);
    } else {
      setIsOpen(bool);
    }
  }

  return (
    <Menu >
      <div className={`grid  md:grid-flow-col md:auto-cols-auto  gap-4`}>
        <div className="bg-white rounded-md  shadow-lg text-center p-3 flex flex-col justify-between z-20" id="page">
          <div className='flex flex-col'>
            <div className='text-3xl uppercase font-bold text-slate-600 flex justify-between'>
              <div>
                Instituicões
              </div>
              <div className='text-sm'>Ver Tudo</div>
            </div>
            <div className='mt-3'>
              <div className='h-8 px-4 bg-slate-300 flex items-center justify-between mt-2 rounded-sm'>
                <div>Instituicao 1</div>
                <div className='text-sm font-bold flex items-center text-gray-600 '>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 3.75H6.912a2.25 2.25 0 00-2.15 1.588L2.35 13.177a2.25 2.25 0 00-.1.661V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18v-4.162c0-.224-.034-.447-.1-.661L19.24 5.338a2.25 2.25 0 00-2.15-1.588H15M2.25 13.5h3.86a2.25 2.25 0 012.012 1.244l.256.512a2.25 2.25 0 002.013 1.244h3.218a2.25 2.25 0 002.013-1.244l.256-.512a2.25 2.25 0 012.013-1.244h3.859M12 3v8.25m0 0l-3-3m3 3l3-3" />
                  </svg>
                  <div className='ml-1'>Arquivar</div>
                </div>
              </div>
              <div className='h-8 px-4 bg-slate-300 flex items-center justify-between mt-2 rounded-sm'>
                <div>Instituicao 2</div>
                <div className='text-sm font-bold flex items-center text-gray-600 '>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 3.75H6.912a2.25 2.25 0 00-2.15 1.588L2.35 13.177a2.25 2.25 0 00-.1.661V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18v-4.162c0-.224-.034-.447-.1-.661L19.24 5.338a2.25 2.25 0 00-2.15-1.588H15M2.25 13.5h3.86a2.25 2.25 0 012.012 1.244l.256.512a2.25 2.25 0 002.013 1.244h3.218a2.25 2.25 0 002.013-1.244l.256-.512a2.25 2.25 0 012.013-1.244h3.859M12 3v8.25m0 0l-3-3m3 3l3-3" />
                  </svg>
                  <div className='ml-1'>Arquivar</div>
                </div>
              </div>
            </div>
            <div className='w-64 mt-3 z-0'>
              <Select className=' z-0' placeholder='Selecione a Instituição' options={[
                { label: 'Instituicao 1', value:1 },
                { label: 'Instituicao 2', value:2 },
              
              ]} 
              onChange={(e) => setInstituicao(e)}
              />
            </div>
          </div>
          <div className='flex justify-end ml-auto items-center'>
            <div className='flex justify-end ml-auto items-center' onClick={() => toggleModal(true)}>
            <div className='mr-2 font-semibold'>Nova Instituição</div>
            <div className='h-9 w-9 bg-green-900 text-white rounded-lg shadow-2xl flex justify-center items-center ml-auto'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
              </svg>
            </div>
            </div>
          </div>
        </div>
        <div className={`bg-white rounded-md  shadow-lg text-center p-3 flex flex-col justify-between  z-20 transition-all duration-300 transform ${instituicao !== null ? 'opacity-100 scale-100 visible' : 'sr-only opacity-0 scale-105 invisible'}`} id="page">
          <div className='flex flex-col'>
            <div className='text-3xl uppercase font-bold text-slate-600 flex justify-between'>
              <div>
                Projetos
              </div>
              <div className='text-sm'>Ver Tudo</div>
            </div>
            <div className='mt-3'>
              <div className='h-8 px-4 bg-slate-300 flex items-center justify-between mt-2 rounded-sm'>
                <div>teste1</div>
                <div className='text-sm font-bold flex items-center text-gray-600 '>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 3.75H6.912a2.25 2.25 0 00-2.15 1.588L2.35 13.177a2.25 2.25 0 00-.1.661V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18v-4.162c0-.224-.034-.447-.1-.661L19.24 5.338a2.25 2.25 0 00-2.15-1.588H15M2.25 13.5h3.86a2.25 2.25 0 012.012 1.244l.256.512a2.25 2.25 0 002.013 1.244h3.218a2.25 2.25 0 002.013-1.244l.256-.512a2.25 2.25 0 012.013-1.244h3.859M12 3v8.25m0 0l-3-3m3 3l3-3" />
                  </svg>
                  <div className='ml-1'>Arquivar</div>
                </div>
              </div>
              <div className='h-8 px-4 bg-slate-300 flex items-center justify-between mt-2 rounded-sm'>
                <div>teste1</div>
                <div className='text-sm font-bold flex items-center text-gray-600 '>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 3.75H6.912a2.25 2.25 0 00-2.15 1.588L2.35 13.177a2.25 2.25 0 00-.1.661V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18v-4.162c0-.224-.034-.447-.1-.661L19.24 5.338a2.25 2.25 0 00-2.15-1.588H15M2.25 13.5h3.86a2.25 2.25 0 012.012 1.244l.256.512a2.25 2.25 0 002.013 1.244h3.218a2.25 2.25 0 002.013-1.244l.256-.512a2.25 2.25 0 012.013-1.244h3.859M12 3v8.25m0 0l-3-3m3 3l3-3" />
                  </svg>
                  <div className='ml-1'>Arquivar</div>
                </div>
              </div>
            </div>
            <div className='w-64 mt-3 z-20'>
              <Select className=' z-20' placeholder='Selecione a Projeto' options={[
                { label: 'teste1' },
                { label: 'teste2' },
                { label: 'teste3' },
              ]} 
              onChange={(e) => setProjeto(e)}
              />
            </div>
          </div>
          <div className='flex justify-end ml-auto items-center'>
            <div className='mr-2 font-semibold'>Novo Projeto</div>
            <div className='h-9 w-9 bg-green-900 text-white rounded-lg shadow-2xl flex justify-center items-center ml-auto'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
              </svg>
            </div>
          </div>
        </div>
        <div className={`bg-white rounded-md  shadow-lg text-center p-3 flex flex-col justify-between   transition-all duration-300 transform ${projeto !== null ? 'opacity-100 scale-100 visible' : 'sr-only opacity-0 scale-105 invisible'}`} id="page">
          <div className='flex flex-col'>
            <div className='text-3xl uppercase font-bold text-slate-600 flex justify-between'>
              <div>
                Campanhas
              </div>
              <div className='text-sm'>Ver Tudo</div>
            </div>
            <div className='mt-3'>
              <div className='h-8 px-4 bg-slate-300 flex items-center justify-between mt-2 rounded-sm'>
                <div>teste1</div>
                <div className='text-sm font-bold flex items-center text-gray-600 '>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 3.75H6.912a2.25 2.25 0 00-2.15 1.588L2.35 13.177a2.25 2.25 0 00-.1.661V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18v-4.162c0-.224-.034-.447-.1-.661L19.24 5.338a2.25 2.25 0 00-2.15-1.588H15M2.25 13.5h3.86a2.25 2.25 0 012.012 1.244l.256.512a2.25 2.25 0 002.013 1.244h3.218a2.25 2.25 0 002.013-1.244l.256-.512a2.25 2.25 0 012.013-1.244h3.859M12 3v8.25m0 0l-3-3m3 3l3-3" />
                  </svg>
                  <div className='ml-1'>Arquivar</div>
                </div>
              </div>
              <div className='h-8 px-4 bg-slate-300 flex items-center justify-between mt-2 rounded-sm'>
                <div>teste1</div>
                <div className='text-sm font-bold flex items-center text-gray-600 '>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 3.75H6.912a2.25 2.25 0 00-2.15 1.588L2.35 13.177a2.25 2.25 0 00-.1.661V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18v-4.162c0-.224-.034-.447-.1-.661L19.24 5.338a2.25 2.25 0 00-2.15-1.588H15M2.25 13.5h3.86a2.25 2.25 0 012.012 1.244l.256.512a2.25 2.25 0 002.013 1.244h3.218a2.25 2.25 0 002.013-1.244l.256-.512a2.25 2.25 0 012.013-1.244h3.859M12 3v8.25m0 0l-3-3m3 3l3-3" />
                  </svg>
                  <div className='ml-1'>Arquivar</div>
                </div>
              </div>
            </div>
            <div className='w-64 mt-3 z-0'>
              <Select className=' z-0' placeholder='Selecione a Campanha' options={[
                { label: 'teste1' },
                { label: 'teste2' },
                { label: 'teste3' },
              ]} 
              onChange={(e) => setCampanha(e)}
              />
            </div>
          </div>
          <div className='flex justify-end ml-auto items-center'>
            <div className='mr-2 font-semibold'>Nova Campanha</div>
            <div className='h-9 w-9 bg-green-900 text-white rounded-lg shadow-2xl flex justify-center items-center ml-auto'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      
        <div className={`grid grid-cols-1 md:grid-cols-2 gap-4 mt-4  transition-all duration-300 transform ${campanha !== null ? 'opacity-100 scale-100 visible z-0' : 'opacity-0 scale-105 invisible'}`}>
          <div className={`bg-white rounded-md  shadow-lg text-center p-3 flex flex-col justify-between`} id="page">
            <div className='flex flex-col'>
              <div className='text-3xl uppercase font-bold text-slate-600 flex justify-between'>
                <div>
                  Relatórios
                </div>
                <div className='text-sm'>Ver Tudo</div>
              </div>
              <div className='mt-3'>
                <div className='h-8 px-4 bg-slate-300 flex items-center justify-between mt-2 rounded-sm'>
                  <div>teste1</div>
                  <div className='text-sm ml-auto mr-5 font-bold flex items-center text-gray-600 '>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>

                    <div className='ml-1'>Ver</div>
                  </div>
                  <div className='text-sm font-bold flex items-center text-gray-600 '>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 3.75H6.912a2.25 2.25 0 00-2.15 1.588L2.35 13.177a2.25 2.25 0 00-.1.661V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18v-4.162c0-.224-.034-.447-.1-.661L19.24 5.338a2.25 2.25 0 00-2.15-1.588H15M2.25 13.5h3.86a2.25 2.25 0 012.012 1.244l.256.512a2.25 2.25 0 002.013 1.244h3.218a2.25 2.25 0 002.013-1.244l.256-.512a2.25 2.25 0 012.013-1.244h3.859M12 3v8.25m0 0l-3-3m3 3l3-3" />
                    </svg>
                    <div className='ml-1'>Arquivar</div>
                  </div>
                </div>
                <div className='h-8 px-4 bg-slate-300 flex items-center justify-between mt-2 rounded-sm'>
                  <div>teste1</div>
                  <div className='text-sm ml-auto mr-5 font-bold flex items-center text-gray-600 '>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>

                    <div className='ml-1'>Ver</div>
                  </div>
                  <div className='text-sm font-bold flex items-center text-gray-600 '>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 3.75H6.912a2.25 2.25 0 00-2.15 1.588L2.35 13.177a2.25 2.25 0 00-.1.661V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18v-4.162c0-.224-.034-.447-.1-.661L19.24 5.338a2.25 2.25 0 00-2.15-1.588H15M2.25 13.5h3.86a2.25 2.25 0 012.012 1.244l.256.512a2.25 2.25 0 002.013 1.244h3.218a2.25 2.25 0 002.013-1.244l.256-.512a2.25 2.25 0 012.013-1.244h3.859M12 3v8.25m0 0l-3-3m3 3l3-3" />
                    </svg>
                    <div className='ml-1'>Arquivar</div>
                  </div>
                </div>
              </div>

            </div>
            <div className='flex justify-end ml-auto items-center mt-3'>
              <div className='mr-2 font-semibold'>Novo Relatório</div>
              <div className='h-9 w-9 bg-green-900 text-white rounded-lg shadow-2xl flex justify-center items-center ml-auto'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                </svg>
              </div>
            </div>
          </div>
          <div className={`bg-white rounded-md  shadow-lg text-center p-3 flex flex-col justify-between`} id="page">
            <div className='flex flex-col'>
              <div className='text-3xl uppercase font-bold text-slate-600 flex justify-between'>
                <div>
                  Formularios
                </div>
                <div className='text-sm'>Ver Tudo</div>
              </div>
              <div className='mt-3'>
                <div className='h-8 px-4 bg-slate-300 flex items-center justify-between mt-2 rounded-sm'>
                  <div>teste1</div>
                  <div className='text-sm font-bold flex items-center text-gray-600 '>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 3.75H6.912a2.25 2.25 0 00-2.15 1.588L2.35 13.177a2.25 2.25 0 00-.1.661V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18v-4.162c0-.224-.034-.447-.1-.661L19.24 5.338a2.25 2.25 0 00-2.15-1.588H15M2.25 13.5h3.86a2.25 2.25 0 012.012 1.244l.256.512a2.25 2.25 0 002.013 1.244h3.218a2.25 2.25 0 002.013-1.244l.256-.512a2.25 2.25 0 012.013-1.244h3.859M12 3v8.25m0 0l-3-3m3 3l3-3" />
                    </svg>
                    <div className='ml-1'>Arquivar</div>
                  </div>
                </div>
                <div className='h-8 px-4 bg-slate-300 flex items-center justify-between mt-2 rounded-sm'>
                  <div>teste1</div>
                  <div className='text-sm font-bold flex items-center text-gray-600 '>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 3.75H6.912a2.25 2.25 0 00-2.15 1.588L2.35 13.177a2.25 2.25 0 00-.1.661V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18v-4.162c0-.224-.034-.447-.1-.661L19.24 5.338a2.25 2.25 0 00-2.15-1.588H15M2.25 13.5h3.86a2.25 2.25 0 012.012 1.244l.256.512a2.25 2.25 0 002.013 1.244h3.218a2.25 2.25 0 002.013-1.244l.256-.512a2.25 2.25 0 012.013-1.244h3.859M12 3v8.25m0 0l-3-3m3 3l3-3" />
                    </svg>
                    <div className='ml-1'>Arquivar</div>
                  </div>
                </div>
              </div>

            </div>
            <div className='flex justify-end ml-auto items-center'>
              <div className='mr-2 font-semibold'>Novo Formulário</div>
              <div className='h-9 w-9 bg-green-900 text-white rounded-lg shadow-2xl flex justify-center items-center ml-auto'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                </svg>
              </div>
            </div>
          </div>



        </div>
        <div className={`grid grid-cols-1 mt-4 transition-all duration-300 transform  ${campanha !== null ? 'opacity-100 scale-100 visible z-0' : 'opacity-0 scale-105 invisible'}`}>
          <div className="bg-white rounded-md shadow-lg text-center p-5">
            <div className="text-2xl">Dashboard</div>
            <div className='mt-3'>
            <div className='grid grid-cols-1 gap-8  '>
              <SparklineComponent />
              
</div>
<br/>
<br/>
<br/>
<br/>
                <div className='grid grid-cols-2'>
                <Combinado />
                <Heatmap />
</div>
            </div>
          </div>
        </div>

      
      {/* <button onClick={()=>setAbreModal(true)}>abrir modal</button> */}
      

      <Modal isOpen={isOpen} header='CRIAR INSTITUIÇÃO' className='w-72' toggle={toggleModal}>
        <div className='bg-red w-96 h-96 flex flex-col justify-center'> 
        <input className="p-2 m-2 border border-slate-500 rounded-md focus:outline-none focus:ring-1 focus:ring-slate-500" type="text" placeholder="NOME" />
            <input className="p-2 m-2 border border-slate-500 rounded-md focus:outline-none focus:ring-1 focus:ring-slate-500" type="text" placeholder="CNPJ" />
            <button className="m-2 py-2 bg-slate-400 shadow-md rounded-md hover:bg-slate-500 text-white" >CRIAR INSTITUIÇÃO</button>
        </div>
        

      </Modal>

    </Menu>

  );
}