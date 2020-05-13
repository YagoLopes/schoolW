import React from 'react';
import { withSnackbar, useSnackbar } from 'notistack';
function Notification({ message }) {
 const { enqueueSnackbar } = useSnackbar();

 const handleShowMessage = () => {
  enqueueSnackbar();
 };

 return <React.Fragment>{handleShowMessage(message)}</React.Fragment>;
}

export default withSnackbar(Notification);
