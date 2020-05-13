import React, { useState, useEffect } from 'react';
import Styles from './styles';
import { api } from '../../services/api';
import Empresa from '../../components/empresa';
import { Form, Input, Select } from '@rocketseat/unform';
import Modal from 'react-responsive-modal';
import Nav from '../../components/nav';
import { useAlert } from 'react-alert';

export default function CRUDCompany() {
 const [modal, setModal] = useState(false);
 const [companys, setCompanys] = useState([]);
 const [infoCompany, setInfoCompany] = useState({});
 const [empresa, setEmpresa] = useState({});
 const [page, setPage] = useState(1);
 const [id, setId] = useState(null);
 const alert = useAlert();

 const options = [
  { id: 'S', title: 'Sim' },
  { id: 'N', title: 'Não' },
 ];

 useEffect(() => {
  listCompany();
 }, []);

 async function listCompany(page = 1) {
  const response = await api.get(`/empresas?page=${page}`);
  const { data, ...infoUsuarios } = response.data;
  setCompanys(data);
  setInfoCompany(infoUsuarios);
  setPage(page);
 }
 function OpenOrCloseModal() {
  setModal(!modal);
 }

 function prevPage() {
  if (page === 1) return;

  const pageNumber = page - 1;
  listCompany(pageNumber);
 }
 function nextPage() {
  if (page === infoCompany.pages) return;
  const pageNumber = page + 1;
  listCompany(pageNumber);
 }

 async function deleteCompany(id) {
  const con = global.confirm('Deseja excluir essa empresa?');
  if (con) {
   try {
    await api.delete(`/empresas/${id}`);
    listCompany();
   } catch (err) {
    alert.error('Não foi possivel excluir essa empresa.');
   }
  }
 }
 function editCompany(data) {
  setId(data.id);
  setEmpresa(data);
  OpenOrCloseModal();
 }

 function addCompany() {
  setId(null);
  setEmpresa({});
  OpenOrCloseModal();
 }

 async function handleSubmit(data) {
  const cnpj = ClearString(data.cnpj);
  const ip = ClearString(data.ip);
  const { razaosocial, ativo, porta, caminho, idicodempresa } = data;
  if (
   !razaosocial ||
   !cnpj ||
   !ativo ||
   !ip ||
   !porta ||
   !caminho ||
   !idicodempresa
  ) {
   alert.error('Preencha todos os campos para continuar!');
  } else {
   const data = {
    razaosocial,
    cnpj,
    ativo,
    ip,
    porta,
    caminho,
    idicodempresa,
   };
   try {
    await api.postOrPut('/empresas', id, data);
    listCompany();
    OpenOrCloseModal();
   } catch (err) {
    alert.error(
     'Houve um problema com o cadastro, verifique se todos os dados estão corretos.'
    );
   }
  }
 }

 function ClearString(data) {
  let stringLimpa = data.replace(/[^\d]+/g, '');
  return stringLimpa;
 }

 return (
  <Styles>
   <Modal open={modal} onClose={OpenOrCloseModal} center>
    <div className="panel panel-default">
     <div className="panel-heading">
      <h4 id="titulo">Dados da Empresa</h4>
     </div>
     <div className="panel-body">
      <Form initialData={empresa} onSubmit={handleSubmit}>
       <div className="row">
        <div className="col-md-7">
         <div className="form-group">
          <Input
           type="text"
           name="razaosocial"
           className="form-control"
           required
           placeholder="Razão Social"
          />
         </div>
        </div>
        <div className="col-md-5">
         <div className="form-group">
          <div className="row">
           <div className="col-md-4">
            <label>Ativo</label>
           </div>
           <div className="col-md-8">
            <Select
             name="ativo"
             component="select"
             className="form-control"
             required
             options={options}
            />
           </div>
          </div>
         </div>
        </div>
       </div>
       <div className="row">
        <div className="col-md-8">
         <div className="form-group">
          <Input className="form-control" placeholder="CNPJ" name="cnpj" />
         </div>
        </div>
        <div className="col-md-8">
         <div className="form-group">
          <Input name="ip" className="form-control" placeholder="Endereço IP" />
         </div>
        </div>
       </div>
       <div className="row">
        <div className="col-md-6">
         <div className="form-group">
          <Input
           type="number"
           name="porta"
           className="form-control"
           required
           placeholder="PORTA"
          />
         </div>
        </div>
        <div className="col-md-6">
         <div className="form-group">
          <Input
           type="number"
           name="idicodempresa"
           className="form-control"
           required
           placeholder="ID EMPRESA"
          />
         </div>
        </div>
       </div>
       <div className="form-group">
        <Input
         type="text"
         name="caminho"
         component="textarea"
         className="form-control"
         placeholder="CAMINHO (URL)"
         required
        />
       </div>
       <div className="actions">
        <p data-placement="top" data-toggle="tooltip" title="Guardar Registro">
         <button type="submit" className="btn btn-primary">
          <span className="glyphicon glyphicon-ok" /> Salvar
         </button>
        </p>
       </div>
      </Form>
     </div>
    </div>
   </Modal>
   <Nav />
   <br />
   <div className="form-gap" />
   <div className="container">
    <div className="row">
     <div className="col-md-12">
      <div className="panel panel-default">
       <div className="panel-heading">
        <div className="col-8 ">
         <div className="row">
          <div className="col-sm-4">
           <form>
            <div className="input-group">
             <input
              type="text"
              className="form-control"
              placeholder="CNPJ ou Razão Social"
             />
             <div className="input-group-btn">
              <button className="btn btn-default" type="submit">
               <i className="glyphicon glyphicon-search" />
              </button>
             </div>
            </div>
           </form>
          </div>
          <div className="col-sm-2">
           <p
            data-placement="top"
            data-toggle="tooltip"
            title="Adicionar Usuario"
           >
            <button className="btn btn-primary btn-circle" onClick={addCompany}>
             <span className="glyphicon glyphicon-plus" /> Adicionar Novo
            </button>
           </p>
          </div>
         </div>
        </div>
       </div>

       <div className="panel-body">
        <div className="text-left">
         <div className="table-responsive">
          <table className="table table-hover">
           <thead>
            <tr>
             <th>RAZÃO SOCIAL</th>
             <th>CNPJ</th>
             <th>STATUS</th>
             <th>IP</th>
             <th>PORTA</th>
             <th>CAMINHO</th>
             <th>Editar</th>
             <th>Excluir</th>
            </tr>
           </thead>
           <tbody>
            {companys.map(empresa => {
             return (
              <Empresa
               key={empresa.id}
               empresa={empresa}
               delEvent={() => deleteCompany(empresa.id)}
               editEvent={() => editCompany(empresa)}
              />
             );
            })}
           </tbody>
          </table>
         </div>
        </div>
       </div>
       <div className="panel-footer">
        <ul className="pager">
         <li className="previous">
          <a onClick={prevPage}>Anterior</a>
         </li>
         <li className="next">
          <a onClick={nextPage}>Próximo</a>
         </li>
        </ul>
       </div>
      </div>
     </div>
    </div>
   </div>
  </Styles>
 );
}

/*import React, { Component, Fragment } from "react";
import { withRouter } from "react-router-dom";
import Styles from "./styles";
import { api } from "../../services/api";
import Empresa from "../../components/empresa";
import { Formik, Form, Field, ErrorMessage } from "formik";

import Modal from "react-responsive-modal";
import Nav from "../../components/nav";
class View4 extends Component {
  state = {
    query: "",
    controlaLista: false,
    empresas: [],
    infoEmpresas: {},
    selecEmpresa: {},
    infoEmpresaSelec: {},
    errorDelete: "",
    errorSelect: "",
    page: 1,
    modal: false,
    empresEdit: null,
    mensagem: ""
  };
  componentDidMount() {
    this.listEmpresas();
  }
  listEmpresas = async (page = 1) => {
    const response = await api.get(`/empresas?page=${page}`);
    const { data, ...infoEmpresas } = response.data;
    this.setState({ empresas: data, infoEmpresas, page });
  };

 

  editEmpresa = empresa => {
    this.setState({ empresEdit: empresa });
    this.Modal();
  };
  addEmpresa = () => {
    this.setState({
      empresEdit: {
        razaosocial: "",
        cnpj: "",
        ativo: "",
        ip: "",
        porta: "",
        caminho: "",
        idicodempresa: ""
      }
    });
    this.Modal();
  };

  pesquisaEmpresa = async empresa => {
    try {
      const response = await api.get(`/empresas/${empresa.id}`);
      const { data, ...infoEmpresaSelec } = response;
      this.setState({ selecEmpresa: data, infoEmpresaSelec });
      this.setState({ controlaLista: true });
    } catch (err) {
      this.setState({
        errorSelect: "Não foi possivel selecionar essa empresa."
      });
    }
  };

  


  

  

  

   

  render() {
    const empresa = this.state.empresEdit;
    return (
      <Styles>
        <Formik
          enableReinitialize={true}
          initialValues={empresa}
          validate={values => {
            let errors = [];
            if (!values.razaosocial) errors.razaosocial = "Campo Obrigatório";
            if (!values.cnpj) errors.cnpj = "Campo Obrigatório";
            if (!values.ativo) errors.ativo = "Campo Obrigatório";
            if (!values.ip) errors.ip = "Campo Obrigatório";
            if (!values.porta) errors.porta = "Campo Obrigatório";
            if (!values.idicodempresa)
              errors.idicodempresa = "Campo Obrigatório";
            if (!values.caminho) errors.caminho = "Campo Obrigatório";
            return errors;
          }}
          onSubmit={this.handleSubmit}
          render={formProps => {
            return (
              
            );
          }}
        />
        <Fragment>
          <Nav />
          <br />

          {this.state.errorDelete && (
            <div className="alert alert-danger" role="alert">
              {this.state.errorSelect}
            </div>
          )}
          {this.state.errorDelete && (
            <div className="alert alert-danger" role="alert">
              {this.state.errorDelete}
            </div>
          )}
          {this.state.errorEdit && (
            <div className="alert alert-danger" role="alert">
              {this.state.errorEdit}
            </div>
          )}

          <div className="form-gap" />
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="panel panel-default">
                  <div className="panel-heading">
                    <div className="col-8 ">
                      <div className="row">
                        <div className="col-sm-4">
                          <form onSubmit={this.selecionaEmpresa}>
                            <div className="input-group">
                              <input
                                value={this.setState.query}
                                onChange={e =>
                                  this.setState({ query: e.target.value }) ||
                                  this.setState({ controlaLista: false })
                                }
                                ref="search"
                                type="text"
                                className="form-control"
                                placeholder="CNPJ ou Razão Social"
                              />
                              <div className="input-group-btn">
                                <button
                                  className="btn btn-default"
                                  type="submit"
                                >
                                  <i className="glyphicon glyphicon-search" />
                                </button>
                              </div>
                            </div>
                          </form>
                        </div>
                        <div className="col-sm-2">
                          <p
                            data-placement="top"
                            data-toggle="tooltip"
                            title="Adicionar Empresa"
                          >
                            <button
                              className="btn btn-primary btn-circle"
                              onClick={this.addEmpresa}
                            >
                              <span className="glyphicon glyphicon-plus" />{" "}
                              Adicionar Novo
                            </button>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="panel-body">
                    <div className="text-left">
                      <div className="table-responsive">
                        <table className="table table-hover">
                          <thead>
                            <tr>
                              <th>RAZÃO SOCIAL</th>
                              <th>CNPJ</th>
                              <th>STATUS</th>
                              <th>IP</th>
                              <th>PORTA</th>
                              <th>CAMINHO</th>
                              <th>Editar</th>
                              <th>Excluir</th>
                            </tr>
                          </thead>
                          <tbody>
                            {(this.state.controlaLista && (
                              <Empresa
                                key={this.state.selecEmpresa.id}
                                empresa={this.state.selecEmpresa}
                                delEvent={this.deleteEmpresa.bind(
                                  this,
                                  this.state.selecEmpresa.id
                                )}
                                editEvent={this.editEmpresa.bind(
                                  this,
                                  this.state.selecEmpresa
                                )}
                              />
                            )) ||
                              this.state.empresas.map(empresa => {
                                return (
                                  <Empresa
                                    key={empresa.id}
                                    empresa={empresa}
                                    delEvent={this.deleteEmpresa.bind(
                                      this,
                                      empresa.id
                                    )}
                                    editEvent={this.editEmpresa.bind(
                                      this,
                                      empresa
                                    )}
                                  />
                                );
                              })}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                  <div className="panel-footer">
                    <ul className="pager">
                      <li className="previous">
                        <a onClick={this.paginaAnterior}>Anterior</a>
                      </li>
                      <li className="next">
                        <a onClick={this.proximaPagina}>Próximo</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Fragment>
      </Styles>
    );
  }
}
export default withRouter(View4);
*/
