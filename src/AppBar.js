import React from 'react';
import './App.css';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © HackCville'}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles(theme => ({
  '@global': {
    body: {
      backgroundColor: theme.palette.common.white,
    },
    ul: {
      margin: 0,
      padding: 0,
    },
    li: {
      listStyle: 'none',
    },
  },
  appBar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  toolbar: {
    flexWrap: 'wrap',
  },
  toolbarTitle: {
    flexGrow: 1,
  },
  link: {
    margin: theme.spacing(1, 1.5),
  },
  heroContent: {
    padding: theme.spacing(8, 0, 6),
  },
  cardHeader: {
    backgroundColor: theme.palette.grey[200],
  },
  cardPricing: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'baseline',
    marginBottom: theme.spacing(2),
  },
  footer: {
    borderTop: `1px solid ${theme.palette.divider}`,
    marginTop: theme.spacing(8),
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
    [theme.breakpoints.up('sm')]: {
      paddingTop: theme.spacing(6),
      paddingBottom: theme.spacing(6),
    },
  },
}));

// const tiers = [
//   {
//     title: 'Free',
//     price: '0',
//     description: ['10 users included', '2 GB of storage', 'Help center access', 'Email support'],
//     buttonText: 'Sign up for free',
//     buttonVariant: 'outlined',
//   },
//   {
//     title: 'Pro',
//     subheader: 'Most popular',
//     price: '15',
//     description: [
//       '20 users included',
//       '10 GB of storage',
//       'Help center access',
//       'Priority email support',
//     ],
//     buttonText: 'Get started',
//     buttonVariant: 'contained',
//   },
//   {
//     title: 'Enterprise',
//     price: '30',
//     description: [
//       '50 users included',
//       '30 GB of storage',
//       'Help center access',
//       'Phone & email support',
//     ],
//     buttonText: 'Contact us',
//     buttonVariant: 'outlined',
//   },
// ];

// const footers = [
//   {
//     title: 'Company',
//     description: ['Team', 'History', 'Contact us', 'Locations'],
//   },
//   {
//     title: 'Features',
//     description: ['Cool stuff', 'Random feature', 'Team feature', 'Developer stuff', 'Another one'],
//   },
//   {
//     title: 'Resources',
//     description: ['Resource', 'Resource name', 'Another resource', 'Final resource'],
//   },
//   {
//     title: 'Legal',
//     description: ['Privacy policy', 'Terms of use'],
//   },
// ];

export default function Pricing() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position="static" color="default" elevation={0} className={classes.appBar}>
        <Toolbar className={classes.toolbar}>
          <Typography variant="h6" color="inherit" noWrap className={classes.toolbarTitle}>
            VOTING MAP
          </Typography>
          <nav>
            <Link variant="button" color="textPrimary" href="#" className={classes.link}>
              William
            </Link>
            <Link variant="button" color="textPrimary" href="#" className={classes.link}>
              Jazlene
            </Link>
            <Link variant="button" color="textPrimary" href="#" className={classes.link}>
              Renzo
            </Link>
            <Link variant="button" color="textPrimary" href="#" className={classes.link}>
              Avery
            </Link>
          </nav>
          {/* <Button href="http://localhost:8888" color="primary" variant="outlined" className={classes.link}>
            Spotify Login
          </Button> */}
        </Toolbar>
      </AppBar>

      {/* Hero unit */}
      <Container maxWidth="sm" component="main" className={classes.heroContent}>
        <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
          Welcome
        </Typography>
        <Typography variant="h5" align="center" color="textSecondary" component="p">
          Interactive map that allows you to check voting location information worldwide!
        </Typography>
      </Container>
      {/* End hero unit */}

    </React.Fragment>
  );
}