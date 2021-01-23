import React,   {useState, useRef} from 'react'
import styled from 'styled-components';
import { makeStyles } from '@material-ui/core/styles';
import Fade from '@material-ui/core/Fade';
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > * + *': {
      marginLeft: theme.spacing(2),
    },
  },
}));

const loadStyle = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    button: {
      margin: theme.spacing(2),
    },
    placeholder: {
      height: 40,
    },
  }));


const Wrapper = styled.div`
display: flex;
flex-direction:column;
width: 60vw;
height: 100%;
justify-content:center;
margin:auto;
padding:50px;
`
const JobHeader = styled.h1``
const JobList = styled.div``


export default function BaseLayout({children}) {

    const classes = useStyles();
    const load = useStyles(loadStyle);
    const [loading, setLoading] = useState(false);
    const [query, setQuery] = useState('idle');
    const timerRef = useRef();
  
    React.useEffect(
        () => () => {
          clearTimeout(timerRef.current);
        },
        [],
      );

    return (
       <Wrapper>
        <JobHeader>Job-listings</JobHeader>
        <JobList className={load.root}>
        <Fade
          in={loading}
          style={{
            transitionDelay: loading ? '800ms' : '0ms',
          }}
          unmountOnExit
        >
          <CircularProgress />
        </Fade>
        {children}</JobList>
       </Wrapper>
    )
}
