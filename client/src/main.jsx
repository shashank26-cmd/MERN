import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { AuthProvider } from './store/auth.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  
  <AuthProvider>

<BrowserRouter>
    <App />
  </BrowserRouter>

  </AuthProvider>
  
)
