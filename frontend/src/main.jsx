import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {AuthContextprovider} from "./context/Auth.context.jsx"
import { SocketContextprovider } from './context/Socket.context.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthContextprovider>
    <SocketContextprovider>
    <App/>
    </SocketContextprovider>
    </AuthContextprovider>

  </StrictMode>,
)
