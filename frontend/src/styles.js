import { makeStyles } from '@material-ui/core/styles';
import { amber, green } from '@material-ui/core/colors';

const Styles = makeStyles(theme => ({
 root: {
  height: '100vh',
 },
 image: {
  backgroundImage: 'url(https://source.unsplash.com/random)',
  backgroundRepeat: 'no-repeat',
  backgroundColor:
   theme.palette.type === 'dark'
    ? theme.palette.grey[900]
    : theme.palette.grey[50],
  backgroundSize: 'cover',
  backgroundPosition: 'center',
 },
 paper: {
  margin: theme.spacing(8, 4),
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
 },
 avatar: {
  margin: theme.spacing(1),
  backgroundColor: theme.palette.secondary.main,
 },
 form: {
  width: '100%', // Fix IE 11 issue.
  marginTop: theme.spacing(1),
 },
 field: {
  width: '100%',
  padding: '12px',
  border: '1px solid #ccc',
  borderRadius: '4px',
  resize: 'vertical',
 },
 submit: {
  margin: theme.spacing(3, 0, 2),
 },

 success: {
  backgroundColor: green[600],
 },
 error: {
  backgroundColor: theme.palette.error.dark,
 },
 info: {
  backgroundColor: theme.palette.primary.main,
 },
 warning: {
  backgroundColor: amber[700],
 },
 icon: {
  fontSize: 20,
 },
 iconVariant: {
  opacity: 0.9,
  marginRight: theme.spacing(1),
 },
 message: {
  display: 'flex',
  alignItems: 'center',
 },

 paperModal: {
  alignSelf: 'center',
  marginLeft: 'auto',
  marginRight: 'auto',
 },

 margin: theme.spacing(8, 4),
 display: 'flex',
 flexDirection: 'column',
 alignItems: 'center',
}));

export default Styles;
