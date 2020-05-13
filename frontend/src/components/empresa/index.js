import React from 'react';
function Empresa(props) {
 return (
  <tr key={props.empresa.id}>
   <td>{props.empresa.razaosocial}</td>
   <td>
    {props.empresa.cnpj.replace(
     /^(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/,
     '$1.$2.$3/$4-$5'
    )}
   </td>
   <td>{props.empresa.ativo}</td>
   <td>
    {props.empresa.ip.replace(/^(\d{3})(\d{3})(\d{3})(\d{3})/, '$1.$2.$3.$4')}
   </td>
   <td>{props.empresa.porta}</td>
   <td>{props.empresa.caminho}</td>
   <td>
    <p data-placement="top" data-toggle="tooltip" title="Editar">
     <button className="btn btn-primary btn-circle" onClick={props.editEvent}>
      <span className="glyphicon glyphicon-pencil" />
     </button>
    </p>
   </td>
   <td>
    <p data-placement="top" data-toggle="tooltip" title="Excluir">
     <button className="btn btn-danger btn-circle" onClick={props.delEvent}>
      <span className="glyphicon glyphicon-trash" />
     </button>
    </p>
   </td>
  </tr>
 );
}

export default Empresa;
