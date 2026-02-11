import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom'
import PdfPlayer from './components/PdfPlayer'
import VideoPlayer from './components/VideoPlayer'
import EpubPlayer from './components/EpubPlayer'
import QumlPlayer from './components/QumlPlayer'
import './App.css'

function Navigation() {
  const location = useLocation();

  return (
    <nav style={{
      background: '#2d3748',
      padding: '1rem',
      display: 'flex',
      gap: '1rem',
      justifyContent: 'center'
    }}>
      <Link
        to="/pdf"
        style={{
          padding: '0.5rem 1.5rem',
          background: location.pathname === '/pdf' ? '#667eea' : '#4a5568',
          color: 'white',
          textDecoration: 'none',
          borderRadius: '0.5rem',
          fontWeight: '500',
          transition: 'all 0.3s'
        }}
      >
        PDF Player
      </Link>
      <Link
        to="/video"
        style={{
          padding: '0.5rem 1.5rem',
          background: location.pathname === '/video' ? '#667eea' : '#4a5568',
          color: 'white',
          textDecoration: 'none',
          borderRadius: '0.5rem',
          fontWeight: '500',
          transition: 'all 0.3s'
        }}
      >
        Video Player
      </Link>
      <Link
        to="/epub"
        style={{
          padding: '0.5rem 1.5rem',
          background: location.pathname === '/epub' ? '#667eea' : '#4a5568',
          color: 'white',
          textDecoration: 'none',
          borderRadius: '0.5rem',
          fontWeight: '500',
          transition: 'all 0.3s'
        }}
      >
        ePub Player
      </Link>
      <Link
        to="/quml"
        style={{
          padding: '0.5rem 1.5rem',
          background: location.pathname === '/quml' ? '#667eea' : '#4a5568',
          color: 'white',
          textDecoration: 'none',
          borderRadius: '0.5rem',
          fontWeight: '500',
          transition: 'all 0.3s'
        }}
      >
        QUML Player
      </Link>
    </nav>
  );
}

function App() {
  return (
    <Router>
      <div className="App">
        <header style={{
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          padding: '2rem',
          color: 'white',
          textAlign: 'center'
        }}>
          <h1>Sunbird Players - Vite React Test</h1>
          <p>Testing web component integrations</p>
        </header>

        <Navigation />

        <main>
          <Routes>
            <Route path="/" element={<PdfPlayer />} />
            <Route path="/pdf" element={<PdfPlayer />} />
            <Route path="/video" element={<VideoPlayer />} />
            <Route path="/epub" element={<EpubPlayer />} />
            <Route path="/quml" element={<QumlPlayer />} />
          </Routes>
        </main>
      </div>
    </Router>
  )
}

export default App
