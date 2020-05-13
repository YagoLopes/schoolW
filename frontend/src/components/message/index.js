import React, { useState } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import IconButton from '@material-ui/core/IconButton';
import WarningIcon from '@material-ui/icons/Warning';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import ErrorIcon from '@material-ui/icons/Error';
import InfoIcon from '@material-ui/icons/Info';
import CloseIcon from '@material-ui/icons/Close';
import Snackbar from '@material-ui/core/SnackbarContent';
import Styles from '../../styles';
const variantIcon = {
 success: CheckCircleIcon,
 warning: WarningIcon,
 error: ErrorIcon,
 info: InfoIcon,
};

export default function Message({ message, variant }) {
 const styles = Styles();
 const Icon = variantIcon[variant];
 const [open, setOpen] = useState(true);

 return (
  <Snackbar
   className={clsx(styles[variant])}
   aria-describedby="client-snackbar"
   open={open}
   message={
    <span
     id="client-snackbar"
     className={styles.message}
     onClick={() => {
      setOpen(false);
     }}>
     <Icon className={clsx(styles.icon, styles.iconVariant)} />
     {message}
    </span>
   }
   action={[
    <IconButton
     key="close"
     aria-label="close"
     color="inherit"
     onClick={() => setOpen(false)}>
     <CloseIcon className={styles.icon} />
    </IconButton>,
   ]}
  />
 );
}

Message.propTypes = {
 className: PropTypes.string,
 message: PropTypes.string,
 variant: PropTypes.oneOf(['error', 'info', 'success', 'warning']).isRequired,
};
