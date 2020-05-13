import React, { useState } from 'react';

// import { Container } from './styles';

export default function jobs() {
 const [job, setJob] = useState(false);
 function OpenOrCloseJob() {
  setJob(!job);
 }

 return (
  <Modal open={job} onClose={OpenOrCloseJob} center>
   <div className="panel panel-default">
    <div className="panel-body">
     <div className="text-center">
      <h3>
       <i className="fa fa-lock fa-4x" />
      </h3>
      <h2 className="text-center">Alterar Senha</h2>
      <p>Digite um e-mail valido para alterar sua senha</p>
      <div className="panel-body">
       {empresas.length !== 0 &&
        empresas.map(empresa => {
         <p>{empresa.id}</p>;
        })}
      </div>
     </div>
    </div>
   </div>
  </Modal>
 );
}
