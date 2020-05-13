import React, { useState } from 'react';
import Nav from '../../../components/nav';
import Modal from 'react-responsive-modal';
import { Linhas, Barra, Pizza } from '../../../components/graphics/index';
import { setJob, getJob, isAdministrator } from '../../../services/auth';
import { useAlert } from 'react-alert';
import Styles from './styles';

export default function Dashboard(props) {
 const alert = useAlert();
 const [modal, setModal] = useState(getJob() ? false : true);
 const [option, setOption] = useState('');

 function OpenOrCloseModal() {
  option
   ? setModal(!modal)
   : alert.error('Selecione uma empresa para continuar');
 }

 function handleSubmit(e) {
  e.preventDefault();
  OpenOrCloseModal();
  setJob(option);
 }
 function handleChange(e) {
  setOption(e.target.value);
 }

 return (
  <Styles>
   <Modal open={modal} onClose={OpenOrCloseModal} center>
    <div className="panel panel-default">
     <div className="panel-body">
      <div className="text-center">
       <h3>
        <i className="fa fa-building fa-4x" />
       </h3>
       <h2 className="text-center">ESCOLHA UMA EMPRESA</h2>
       <div className="panel-body">
        <form onSubmit={handleSubmit}>
         <div className="form-group">
          <div className="col-10">
           <select
            value={option}
            onChange={handleChange}
            name="selctJob"
            component="select"
            className="form-control"
            required>
            <option selected>Selecione...</option>
            {getJob()
             ? null
             : isAdministrator()
             ? props.history.push('/users')
             : props.history.location.state.data.map(empresa => {
                return (
                 <option key={empresa.id} value={empresa.id}>
                  {empresa.razaosocial}
                 </option>
                );
               })}
           </select>
          </div>
         </div>
         <div className="form-group">
          <div className="col-2">
           <input
            name="recover-submit"
            className="btn  btn-primary"
            value="Enviar"
            type="submit"
           />
          </div>
         </div>
        </form>
       </div>
      </div>
     </div>
    </div>
   </Modal>
   <Nav />
   <div className="main container">
    <div className="well">
     <Linhas />
    </div>
    <div className="container-fluid text-center">
     <div className="col-sm-6">
      <div className="well">
       <Barra />
      </div>
     </div>
     <div className="col-sm-6">
      <div className="well">
       <Barra />
      </div>
     </div>
     <div className="col-sm-4">
      <div className="well">
       <Pizza />
      </div>
     </div>
     <div className="col-sm-4">
      <div className="well">
       <Pizza />
      </div>
     </div>
     <div className="col-sm-4">
      <div className="well">
       <Pizza />
      </div>
     </div>
    </div>
   </div>
  </Styles>
 );
}
