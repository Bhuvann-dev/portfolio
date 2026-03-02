import React from 'react';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import { DarkModeProvider } from '@/contexts/DarkModeContext';
import { Toaster } from '@/components/ui/toaster';
import ScrollToTop from '@/components/ScrollToTop';
import HomePage from '@/pages/HomePage';

function App() {
  return (
    <DarkModeProvider>
      <Router>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
        <Toaster />
      </Router>
    </DarkModeProvider>
  );
}

export default App;