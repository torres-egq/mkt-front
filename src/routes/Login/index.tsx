
import { Link } from 'react-router-dom';
import logo from '/logo.png'

export function Login() {


 
    // eslint-disable-next-line @typescript-eslint/no-explicit-any

    return (
        <div className="flex h-screen bg-slate-50">
        <div className="m-auto">
        
          <div className="bg-white p-8 shadow-md flex flex-col rounded-md">
          <img src={logo} style={{width:'300px'}} />
            <input className="p-2 m-2 border border-slate-500 rounded-md focus:outline-none focus:ring-1 focus:ring-slate-500" type="email" placeholder="Email" />
            <input className="p-2 m-2 border border-slate-500 rounded-md focus:outline-none focus:ring-1 focus:ring-slate-500" type="password" placeholder="Password" />
            <button className="m-2 py-2 bg-slate-400 shadow-md rounded-md hover:bg-slate-500 text-white" >
              <Link to='/'>Login</Link>
              </button>
          </div>
        </div>
      </div>
          
    );
}