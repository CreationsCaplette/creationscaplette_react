import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import RootLayout from './pages/Root.jsx';
import AboutPage from './pages/About.jsx';
import ResumePage from './pages/Resume.jsx';
import ProjectsPage from './pages/Projects.jsx';
import ContactPage from './pages/Contact.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    //errorElement: <ErrorPage />,
    children: [
      { index: true, element: <AboutPage /> },
      { path: 'resume', element: <ResumePage /> },
      { path: 'projects', element: <ProjectsPage /> },
      { path: 'contact', element: <ContactPage /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App
