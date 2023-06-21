import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {AiFillHtml5} from 'react-icons/ai'
import {DiReact , DiJavascript , DiPython} from 'react-icons/di'
import {FaCss3 ,FaBootstrap , FaPhp , FaJava} from 'react-icons/fa'
import {SiTailwindcss ,SiCplusplus,SiMysql} from 'react-icons/si'
import aiart from './asssets/aiart.png'
import CardActions from '@mui/material/CardActions';
import CardMedia from '@mui/material/CardMedia';




const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#7F7FD5' : 'lavender',
    ...theme.typography.body2,
    // padding: theme.spacing(0),
    padding : 0,
    textAlign: 'left',
    color: theme.palette.text.secondary,
    border : 'none '
  }));
const bull = (
    <Box
      component="span"
      sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >
      
    </Box>
  );

export default function About() {
  return (
    <Box sx={{ flexGrow: 1 }} id='about-id'>
    <Grid container spacing={1} style={{border : 'none'}}>
      <Grid item xs={12} >
        <Item>
            <h1 style={{marginLeft : '2%'}}>
                Technical Stack:
            </h1>
            <br/><br/>
            <Grid container spacing={1} style={{border : 'none'}}>
                <Grid item xs={3} style={{border : 'none'}}>
                    <Item style={{border : 'none'}} >
                    <Card sx={{ maxWidth: 275 , marginLeft: '5%' , marginTop: '1%' }} style={{border : 'none'}}>
                    <CardContent>
                        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                        FRONT END
                        </Typography>
                        <AiFillHtml5 style={{height : 40 , width : 40 , marginLeft : '2%'}} /> 
                        <DiReact style={{height : 40 , width : 40 , marginLeft : '5%'}}/>
                        <FaCss3 style={{height : 40 , width : 40 , marginLeft : '5%'}}/>
                        <DiJavascript style={{height : 40 , width : 40 , marginLeft : '5%'}}/>
                        <FaBootstrap style={{height : 40 , width : 40 , marginLeft : '2%'}}/>
                        <SiTailwindcss style={{height : 40 , width : 40 , marginLeft : '5%'}}/>
                       
                    </CardContent>
                    </Card>
                    
                    </Item>
                </Grid>
                <Grid item xs={3} >
                    <Item style={{padding : 0}}> 
                    <Card sx={{ maxWidth: 275 , marginLeft: '5%' , marginTop: '1%' }}>
                    <CardContent>
                        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                        BACK END
                        </Typography>
                        <FaPhp style={{height : 40 , width : 40 , marginLeft : '5%'}}/>
                        <br/><br/><br/>
                    </CardContent>
                    </Card>
                       
                    </Item>
                </Grid>
                <Grid item xs={3}>
                    <Item>
                    <Card sx={{ maxWidth: 275 , marginLeft: '5%' , marginTop: '1%' }}>
                    <CardContent>
                        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                        LANGUAGES
                        </Typography>
                        <SiCplusplus style={{height : 40 , width : 40 , marginLeft : '5%'}}/>
                        <FaJava style={{height : 40 , width : 40 , marginLeft : '5%'}}/>
                        <DiJavascript style={{height : 40 , width : 40 , marginLeft : '5%'}}/>
                        <DiPython style={{height : 40 , width : 40 , marginLeft : '5%'}}/>
                        <br/><br/><br/>
                    </CardContent>
                    </Card>
                     
                    
                    </Item>
                </Grid>
                <Grid item xs={3}>
                    <Item>
                    <Card sx={{ maxWidth: 275 , marginLeft: '5%' , marginTop: '1%' }}>
                    <CardContent>
                        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                        DATABASES
                        </Typography>
                        <SiMysql style={{height : 40 , width : 40 , marginLeft : '5%'}}/>
                        <br/>
                        <br/>
                        <br/>
                    </CardContent>
                    </Card>
                      
                    
                    </Item>
                </Grid>
            </Grid>
      <br/><br/>
            </Item>
  
      </Grid>
    </Grid>
    <br/><br/><br/><br/><br/><br/><br/>
    <h1 style={{textAlign : 'center', fontSize : 45 }}> <u>About Me</u></h1>
    <br/><br/><br/>
    <Card sx={{ display: 'flex' , alignSelf : 'center' , justifyContent : 'center' , paddingX : 10 , paddingY : 10}}>
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
          <CardContent sx={{ flex: '1 0 auto' }}>
            <Typography component="div" variant="h4">
              My Journey 
            </Typography>
            <Typography variant="subtitle1" color="text.secondary" component="div">
              last updated : a day ago
            </Typography>
          </CardContent>
          <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 , fontSize :25}}>
              I am a 20 years old college student driven by passion, always eager to take on new challenges, explore and learn new technologies and gain valuable experiences. It is my hope that my work will have a real-world impact. Therefore, there are a few things I am looking for in my next role like a challenging workplace and a cohesive work team. Additionally, any work that expands my technical skill set is greatly appreciated, as I am committed to expanding my knowledge. While I am flexible regarding working hours and willing to work at any schedule, I am looking for remote employment/internships.
          </Box>
        </Box>
        <CardMedia
          component="img"
          sx={{ width: 300, height : 300 , marginLeft : 2}}
          image={aiart}
          alt="Live from space album cover"
        />  
      </Card>
    </Box>
  );
}

// 'C:/work/DEV/REACT/portfolio/src/asssets/aiart.png'