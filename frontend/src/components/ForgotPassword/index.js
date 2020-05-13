import React from 'react';

import { redirect_url, apiReset } from '../../services/api';
import {
 CardContent,
 Typography,
 Card,
 Grid,
 Button,
 CssBaseline,
 Modal,
 Backdrop,
} from '@material-ui/core';
import { Form, Input } from '@rocketseat/unform';
import Styles from '../../styles';
import dictionary from '../../util/dictionary';
import schema from './schema';

export default function ForgotPassword({ open, setOpen }) {
 const styles = Styles();

 async function handleSubmit(data) {
  const email = data;
  await apiReset.post('/forgot', { email, redirect_url });
 }

 return (
  <Modal
   open={open}
   BackdropComponent={Backdrop}
   onClose={() => setOpen(false)}
   BackdropProps={{
    timeout: 500,
   }}>
   <Grid container component="main" className={styles.root}>
    <CssBaseline />
    <Grid item className={styles.paperModal}>
     <Card>
      <CardContent>
       <Typography component="h1" variant="h5">
        {dictionary.forgotPassword}
       </Typography>
       <Form schema={schema} className={styles.form} onSubmit={handleSubmit}>
        <Input className={styles.field} label={dictionary.email} name="email" />
        <Button
         type="submit"
         className={styles.submit}
         fullWidth
         variant="contained"
         color="primary">
         {dictionary.next}
        </Button>
        <Button
         type="button"
         className={styles.submit}
         fullWidth
         variant="contained"
         color="danger"
         onClick={() => setOpen(false)}>
         Close
        </Button>
       </Form>
      </CardContent>
     </Card>
    </Grid>
   </Grid>
  </Modal>
 );
}
