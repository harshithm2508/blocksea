import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Navbar from "../src/components/Navbar.tsx"
import ThemeProvider from "./components/ThemeProvider.tsx";

function App(){
  return(
    <ThemeProvider>
      <PageRoutes/>
    </ThemeProvider>
  )
}


function PageRoutes(){
  return(
    <BrowserRouter>
      <Navbar/>      
      <Routes>
        <Route path="/" element={<Dashboard/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App;