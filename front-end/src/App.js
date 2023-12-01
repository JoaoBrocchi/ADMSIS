import Navbaar from "../src/components/layouts/Navbar";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Container from "./components/layouts/Container";
import Input from "./components/form/Input";
import Form from "./components/form/Form";
import RegisterForm from "./components/form/RegisterForm"
function App() {
  return (
    <Router>
      <Navbaar/>
      <Container>
        <Routes>
          
          <Route path="/login" element={<Form/>} />
          <Route path="/register" element={<RegisterForm/>} />
        </Routes>
      </Container>
    </Router>
  );
}

export default App;
