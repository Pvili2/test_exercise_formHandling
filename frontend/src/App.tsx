import { Route, createBrowserRouter,createRoutesFromElements, RouterProvider } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import CompanyForm from './scenes/CompanyForm';
function App() {
  
  const router = createBrowserRouter(createRoutesFromElements(
    <Route path='/' element={<MainLayout/>}>
      <Route path='/' element={<CompanyForm/>}/>
      <Route path='/:id' element={<></>}/>
    </Route>
  ))
  
  return (
    <RouterProvider router={router}/>  
  );
}

export default App;
