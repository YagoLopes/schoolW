import React, { useState, useEffect } from 'react';
import { api } from '../../services/api';
import { useAlert } from 'react-alert';
import Modal from 'react-responsive-modal';
function Usuario(props) {
 const alert = useAlert();
 const [empresas, setEmpresas] = useState([]);
 const [modal, setModal] = useState(false);

 useEffect(() => {
  _pushJobUser(props.usuario.id);
 }, []);

 async function _pushJobUser(id) {
  try {
   const response = await api.get(`/usersempresa/${id}`);
   setEmpresas(response.data);
  } catch (err) {
   alert.error(err);
  }
 }
 function OpenOrCloseModal() {
  setModal(!modal);
 }
 return (
  <tr id="user" key={props.usuario.id}>
   <Modal open={modal} onClose={OpenOrCloseModal} center>
    <div className="panel panel-default">
     <div className="panel-body">
      <div className="text-center">
       <h3>
        <i className="fa fa-building fa-4x" />
       </h3>
       <h2 className="text-center">Empresas</h2>
       <div className="panel-body">
        <table className="table table-hover">
         <tbody>
          {empresas.map(empresa => (
           <tr key={empresa.id}>
            <td>{empresa.razaosocial}</td>
           </tr>
          ))}
         </tbody>
        </table>
       </div>
       <div className="panel-footer">
        <form novalidate>
         <select searchable="Search here..">
          <option value="" disabled selected>
           Choose your country
          </option>
          <option value="1">USA</option>
          <option value="2">Germany</option>
          <option value="3">France</option>
          <option value="4">Poland</option>
          <option value="5">Japan</option>
         </select>
         <button>Adicionar</button>
        </form>
       </div>
      </div>
     </div>
    </div>
   </Modal>
   <td>{props.usuario.username}</td>
   <td>{props.usuario.email}</td>
   <td>
    <p
     data-placement="top"
     data-toggle="tooltip"
     title="Empresas que usuario pertence"
    >
     <button type="button" onClick={OpenOrCloseModal}>
      Empresas
     </button>
    </p>
   </td>
  </tr>
 );
}
export default Usuario;
