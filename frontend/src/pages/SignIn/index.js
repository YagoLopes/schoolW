import React, { useEffect, useState } from 'react';
import { Form, Input } from '@rocketseat/unform';
import {
 Typography,
 Box,
 Grid,
 Paper,
 Avatar,
 Button,
 CssBaseline,
 Link,
} from '@material-ui/core';
import Styles from '../../styles';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Copyright from '../../components/Copyright';
import schema from './schema';
import { api } from '../../services/api';
import { isAuthenticated, setToken } from '../../services/auth';
import { useAlert } from 'react-alert';
import dictionary from '../../util/dictionary';
import ForgotPassword from '../../components/ForgotPassword';

export default function SignIn({ history }) {
 const alert = useAlert();
 const styles = Styles();
 useEffect(() => {
  isAuthenticated() ? history.push('/home') : null;
 }, []);

 const [open, setOpen] = useState(false);

 async function handleSubmit(data) {
  try {
   const response = await api.post('/sessions', data);
   setToken(response.data.token);
   history.push('/home');
  } catch (err) {
   alert.error('Houve um problema com o login, verifique suas credenciais.');
  }
 }

 return (
  <Grid container component="main" className={styles.root}>
   <CssBaseline />
   <Grid item xs={false} sm={4} md={7} className={styles.image} />
   <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
    <div className={styles.paper}>
     <Avatar className={styles.avatar}>
      <LockOutlinedIcon />
     </Avatar>
     <Typography component="h1" variant="h5">
      {dictionary.login}
     </Typography>
     <Form schema={schema} onSubmit={handleSubmit} className={styles.form}>
      <Input label={dictionary.email} name="email" className={styles.field} />
      <Input
       name="password"
       label={dictionary.password}
       type="password"
       className={styles.field}
      />
      <Button
       type="submit"
       fullWidth
       variant="contained"
       color="primary"
       className={styles.submit}>
       {dictionary.next}
      </Button>
     </Form>
     <Box mt={5}>
      <ForgotPassword open={open} setOpen={setOpen} />
      <Link href="##" onClick={() => setOpen(true)} variant="body2">
       {dictionary.forgotPassword}
      </Link>
     </Box>
     <Box mt={5}>
      <Copyright />
     </Box>
    </div>
   </Grid>
  </Grid>
 );
}
