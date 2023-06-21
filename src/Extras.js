import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import ds1 from './asssets/ds1.png'
import Aos from 'aos';
import 'aos/dist/aos.css'

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#53eda5' : '#53ceed',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));



export default function Extras() {
  React.useEffect(()=>{
    Aos.init({duration : 2100});
  })
  
  return (
    <div style={{overflowX : 'hidden'}}>
      <br/><br/><br/><br/><br/><br/><br/>

      <div >
        <h1 style={{textAlign : 'center' , fontSize : 45}}><u>EXTRAS </u></h1>
        <br/><br/><br/>
        <p style = {{textAlign : 'center' , fontSize : 25 , marginLeft : '10%' , marginRight : '10%' }}>This section showcases my other skills and achievments and acts as a progress report on my part . <br/>Please spare a few minutes of your time as it showcases my other soft and technical skills</p>
      </div>
      <br/><br/><br/>
      <br/><br/><br/>
      <div>
      <Grid container spacing={10}>
        <Grid item xs={12} >
        <Box gridColumn="span 8" >
            <Item>
            <Card sx={{ display: 'flex' }} data-aos='fade-right' style={{overflowX : 'hidden'}}>
                <CardMedia
                    component="img"
                    sx={{ width: 350, height: 350 }}
                    image={ds1}
                    alt="Live from space album cover"
                />
                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <CardContent sx={{ flex: '1 0 auto' }}>
                    <Typography component="div" variant="h5">
                        PROJECT 
                    </Typography>
                    <Typography variant="subtitle1" color="text.secondary" component="div">
                        Data Structures and algorithm 
                    </Typography>
                    <br/>
                    <br/>
                    <p style={{fontSize : 20  }}>Implemented Johnson’s graph algorithm to find the shortest path between all pairs of nodes .Used different data structures as priority queues in the dijkstra subroutine namely 1D array, binary heap ,
binomial heap and fibonacci heap and analyzed their performance.
It was found that fibonacci heap was asymptotically superior than the rest specially in the case of dense
graphs,due to amortized extract min cost O(logn) and decrease key cost O(1).</p>
                    <br/>
                    Visit my github for more info
                    </CardContent>
                    <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
                    </Box>
                </Box>
                </Card>

            </Item>
            </Box>
        </Grid>
        <br/><br/><br/><br/><br/>
        <Grid item xs={12} >
          <Item>
          <Card data-aos='fade-left' style={{overflow : 'hidden'}}>
            <h1 style = {{textAlign : 'center' , fontSize : 35}}> Progress</h1><br/><br/>
          </Card>
          <Card sx={{ display: 'flex' }} data-aos='fade-left' style={{overflowX : 'hidden'}}>
            <span style={{textAlign : 'left' , marginLeft : '10%' , fontSize : 25}}>
              <li>CGPA : 9.75(current) , GPA : 9.25</li>
              <li>Recieved Recognition on standing 8th in entire department in the form of dean's list of merit</li>
              <li>Recieved top 3 rank twice and under rank 10 twice in the SCSE series of competitive contests hosted by Manipal University</li>
              <li>Rated 1014 on Codeforces</li>
              <li>Most skills certified on either HackerRank or Coursera</li>
              <li>50+ Problems solved on InterviewBit</li>
              <br/>

            
            </span>

            
                   

              
          </Card>

          </Item>
        </Grid>

        </Grid>
      </div>
      <br/><br/><br/><br/>
    </div>
  )
}
