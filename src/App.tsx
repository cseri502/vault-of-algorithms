import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { AlgorithmPage } from './pages/AlgorithmPage';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white dark:bg-zinc-900 text-zinc-900 dark:text-white font-display flex flex-col">
        <Header />
        <main className="container mx-auto px-4 py-8 flex-grow">
          <div className="max-w-6xl mx-auto">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/algorithm/:id" element={<AlgorithmPage />} />
            </Routes>
          </div>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App