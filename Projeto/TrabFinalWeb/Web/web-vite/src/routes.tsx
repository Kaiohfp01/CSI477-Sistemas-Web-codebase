import { Routes, Route, BrowserRouter } from 'react-router-dom';
import App from './App';


import LoginUser from './components/Usuario/User';
import ListPessoa from './components/Pessoa/ListPessoa';
import CreatePessoa from './components/Pessoa/CreatePessoa';
import UpdatePessoa from './components/Pessoa/UpdatePessoa';
import ListPet from './components/Pet/ListPet';
import CreatePet from './components/Pet/CreatePet';
import UpdatePet from './components/Pet/UpdatePet';
import ListVeterinario from './components/Veterinario/ListVeterinario';
import CreateVeterinario from './components/Veterinario/CreateVeterinario';
import UpdateVeterinario from './components/Veterinario/UpdateVeterinario';
import ListConsultas from './components/Consulta/ListConsulta';
import CreateConsultas from './components/Consulta/CreateConsulta';
import UpdateConsultas from './components/Consulta/UpdateConsulta';

const AppRoutes = () => {

    return (

        <BrowserRouter>
            <Routes>
                <Route path="/" element={ <App /> } />

                <Route path="/pessoas" element={ <ListPessoa /> } />
                <Route path='/pessoas/create' element = {<CreatePessoa/>} />
                <Route path='/pessoas/update/:id'element = {<UpdatePessoa/>} />
                <Route path='/pets' element = {<ListPet/>} />
                <Route path='/pets/create' element = {<CreatePet/>} />
                <Route path='/pets/update/:id' element = {<UpdatePet/>} />
                <Route path='/veterinarios' element = {<ListVeterinario/>} />
                <Route path='/veterinarios/create' element = {<CreateVeterinario/>} />
                <Route path='/veterinarios/update/:id' element = {<UpdateVeterinario/>} />
                <Route path='/consultas' element = {<ListConsultas/>} />
                <Route path='/consultas/create' element ={<CreateConsultas/> } />
                <Route path='/consultas/update/:id' element ={<UpdateConsultas/>} />

                

                <Route path="/login" element={<LoginUser/>} />

            </Routes>
        </BrowserRouter>

    );

}

export default AppRoutes;