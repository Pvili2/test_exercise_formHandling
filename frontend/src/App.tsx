import { Route, createBrowserRouter,createRoutesFromElements, RouterProvider } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import FormWrapper from './layouts/FormWrapper';
import CompanyList from './scenes/CompanyShower';
function App() {
  
  const router = createBrowserRouter(createRoutesFromElements(
    <Route path='/' element={<MainLayout/>}>
      <Route path='/' element={<FormWrapper/>}/>
      <Route path="/company" element={<CompanyList />}/>
    </Route>
  ))
  
  return (
    <RouterProvider router={router}/>  
  );
}

export default App;
