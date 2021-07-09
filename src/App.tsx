import 'aos/dist/aos.css';
import AOS from 'aos';
import { lazy, Suspense, useEffect } from 'react';
import Loader from 'components/Loader';

const Landing = lazy(() => import('pages/Landing'));

function App() {
  useEffect(() => AOS.init(), []);
  return (
    <>
      <Suspense fallback={<Loader />}>
        <Landing />
      </Suspense>
    </>
  );
}

export default App;
