import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import ListEstados from "./components/estados/ListEstados";
import CreateEstado from "./components/estados/CreateEstado";
import UpdateEstado from "./components/estados/UpdateEstado";
import CreateCidade from "./components/cidades/CreateCidade";
import ListCidades from "./components/cidades/ListCidades";
import ListPessoas from "./components/Pessoas/ListPessoas";
import CreatePessoa from "./components/Pessoas/CreatePessoa";
import UpdatePessoa from "./components/Pessoas/UpdatePessoa";
import ListTiposSanguineos from "./components/TipoSanguineo/ListTipoSanguineo";
import CreateTipoSanguineo from "./components/TipoSanguineo/CreateTipoSanguineo";
import UpdateTipoSanguineo from "./components/TipoSanguineo/UpdateTipoSanguineo";
import UpdateCidade from "./components/cidades/UpdateCidade";
import ListLocalColetas from "./components/localColeta/ListLocalColeta";
import CreateLocalColeta from "./components/localColeta/CreateLocalColeta";
import UpdateLocalColetas from "./components/localColeta/UpdateLocalColeta";
import ListDoacoes from "./components/Doacoes/ListDoacoes";
import CreateDoacoes from "./components/Doacoes/CreateDoacoes";
import UpdateDoacoes from "./components/Doacoes/UpdateDoacoes";

const AppRoutes = () => {

    return(

        <BrowserRouter>
            
            <Routes>

                <Route path="/" element={<App/>} />
                <Route path="/estados" element = {<ListEstados />}/>
                <Route path="/estados/create" element = {<CreateEstado />} />
                <Route path="/estados/update/:id" element = {<UpdateEstado />} />
                <Route path="/cidades" element = {<ListCidades/>} /> 
                <Route path="/cidades/create" element ={<CreateCidade/>} />
                <Route path="/cidades/update/:id" element ={<UpdateCidade/>} />
                <Route path="/pessoas" element = {<ListPessoas/>} />
                <Route path="/pessoas/create" element = {<CreatePessoa/>} />
                <Route path="/pessoas/update/:id" element = {<UpdatePessoa/>} />
                <Route path="/locais_coleta" element = {<ListLocalColetas/>} />
                <Route path="/locais_coleta/create" element = {<CreateLocalColeta/>} />
                <Route path="/locais_coleta/update/:id" element = {<UpdateLocalColetas/>} />
                <Route path="/tipos_sanguineos"  element = {<ListTiposSanguineos/>} />
                <Route path="/tipos_sanguineos/create"  element = {<CreateTipoSanguineo/>} />
                <Route path="/tipos_sanguineos/update/:id"  element = {<UpdateTipoSanguineo/>} />
                <Route path="/doacoes" element = {<ListDoacoes/>} />
                <Route path="/doacoes/create" element = {<CreateDoacoes/>} />
                <Route path="/doacoes/update/:id" element = {<UpdateDoacoes/>} />
            </Routes>
        
        </BrowserRouter>
    );
}
export default AppRoutes;