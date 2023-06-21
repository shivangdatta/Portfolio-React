
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import img1 from './asssets/profile_pic.png'
import './Introduction.css'
import {FaGithubSquare} from 'react-icons/fa'
import { AiFillLinkedin } from 'react-icons/ai';
import Aos from 'aos';
import 'aos/dist/aos.css'

const Item = styled(Paper)(({ theme }) => ({
  // backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  border : 'solid transparent',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'center',
  // color: theme.palette.text.secondary,
}));

const imgstyler = {
  maxWidth : '100%' , height : '20%' , borderRadius : '30%' , marginBottom : '0%' , border: 'solid 1px black',
  backgroundColor : '#2C5364'
}    


export default function Introduction() {
  React.useEffect(()=>{
    Aos.init({duration : 1900});
  })
  return (
    <div className='first' style={{marginTop : '10%' , overflowX : 'hidden'}}>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={0.5}>
          <Grid item xs={8}>
            {/* <Item>xs=8</Item> */}
            <Grid container justifyContent="center" spacing={0.5}>
              <Grid container spacing={0.5}> 
                  <Grid item xs={12} >
                    {/* <Item> xs = 3 </Item> */}<p>
                     <span style={{textAlign : 'left', fontSize:30}}>Hi im , </span><br/><span style={{fontSize: 55 ,color : '#fcba03'}}>Shivang Datta</span>
                      <br/>
                      <br/>
                      <br/>
                    </p>
                  </Grid>
                  <Grid item xs={12} >
                    {/* <Item>  */}
                    <div className="main">
                    <h1 className='h2'>These are the roles I currently fit in : <div className="roller">
                      <span id="rolltext">Front End Developer<br/>
                      Aspiring full stack dev<br/>
                      Competitve Programmer<br/>
                      Software Engineer<br/>
                      </span>
                 
                      </div>
                      </h1>
                    </div>
                    <br/><br/>
                    {/* </Item> */}
                  </Grid>
                  <Grid item xs={12}  style={{ alignItems:'left'}}>
                    {/* <Item > */}
                      <AiFillLinkedin style={{height:55 , width:55 }}/>
                      <FaGithubSquare style={{height:53 , width:53 , marginLeft : '3%'}}/>
                    {/* </Item> */}
                  </Grid>
              </Grid> 
             
            </Grid>
          </Grid>
          <Grid item xs={4}>
            <Grid container justifyContent="center" style={{marginBottom : '30%' }} className='imgcontainer'>
              <img src={img1} style={imgstyler} className='img1' data-aos='fade-left'/>
            </Grid>
          </Grid>
        </Grid>
    </Box>
    </div>
    )
  }
  
  
  
//  '#fcba03'