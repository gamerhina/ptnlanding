import { useEffect, useState } from 'react';
import MobilePage from './pages/MobilePage';
import DesktopPage from './pages/DesktopPage';

// Main App with Mobile Detection
function App() {
  const [isMobile, setIsMobile] = useState<boolean | null>(null);

  useEffect(() => {
    // Detect mobile device based on screen width
    const checkMobile = () => {
      const width = window.innerWidth;
      const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
      // Consider mobile if width < 1024px AND is touch device
      // OR if width < 768px (definitely mobile screen)
      const shouldBeMobile = (width < 1024 && isTouchDevice) || width < 768;
      setIsMobile(shouldBeMobile);
    };

    // Initial check
    checkMobile();
    
    // Listen for resize events (for desktop mode toggle on mobile)
    window.addEventListener('resize', checkMobile);
    
    // Also listen for orientation change (mobile specific)
    window.addEventListener('orientationchange', checkMobile);

    return () => {
      window.removeEventListener('resize', checkMobile);
      window.removeEventListener('orientationchange', checkMobile);
    };
  }, []);

  // Show loading while detecting
  if (isMobile === null) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-emerald-50">
        <div className="text-center">
          <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4" />
          <p className="text-text-muted text-sm">Memuat...</p>
        </div>
      </div>
    );
  }

  // Render mobile or desktop version
  return isMobile ? <MobilePage /> : <DesktopPage />;
}

export default App;

