import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import mental from './asssets/mental.png'
import cinema from './asssets/cinema.png'
import Aos from 'aos';
import 'aos/dist/aos.css'

const Item = styled(Paper)(({ theme }) => ({
    // backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    backgroundColor: theme.palette.mode === 'dark' ? '#81cfe3' : '#e38181',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

// const cards = document.querySelectorAll('.card');
  
// const observer = new IntersectionObserver(
//     entries => {
//         entries.forEach(entry => {
//             entry.target.classList.toggle("show", entry.isIntersecting)
//             if (entry.isIntersecting) observer.unobserve(entry.target)
//         })
//     },
//     {
//         threshold : .5
//     }
// ) 

// cards.forEach(card => {
//     observer.observe(card);
// })
 
export default function Project() {
    React.useEffect(()=>{
        Aos.init({duration : 1900});
    })


  return (
    <div style={{overflowX : 'hidden'}} id='project-id'>
        <br/><br/><br/><br/><br/><br/><br/><br/><br/>
        <div >
            <h1 style={{textAlign : 'center' , fontSize : 45}}> <u> Projects </u></h1>
            <br/><br/>
            <p style = {{textAlign : 'center' , fontSize : 25 , marginLeft : '10%' , marginRight : '10%' }}>These projects show my growth as a front end developer each project which is a whole number is a milestone and serves as an implementation of the skills gained. Each project is a journey initself and you may find many more projects which display my other skills . 
                <br/><br/> <span style={{fontSize : 15}}> Just click on the link to visit the site </span></p>
        </div>
        <br/><br/><br/><br/>
        <Box sx={{ width: 1 }}>
            {/* <h1 stlye={{textAlign : 'center'}}>Projects</h1> */}
        <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={2} >
            <Box gridColumn="span 8">
            <Item>
            <Card sx={{ display: 'flex' }} className='card' data-aos='fade-right' style={{overflow : 'hidden'}}>
                <CardMedia
                    component="img"
                    sx={{ width: 350, height: 350 }}
                    image={mental}
                    alt="Live from space album cover"
                />
                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <CardContent sx={{ flex: '1 0 auto' }}>
                    <Typography component="div" variant="h5">
                        PROJECT 1
                    </Typography>
                    <Typography variant="subtitle1" color="text.secondary" component="div">
                        (mantrakshak - a mental health initiative)
                    </Typography>
                    <br/>
                    <br/>
                    <p style={{fontSize : 20}}>Manrakshak was devevloped overnight by a team of 4 using Html , CSS and JavaScript. It aims to improve the everyday mental health of common man , It has the potential of becoming a full fledged hosted website as various factors affecting practical implementation have been considered.</p>
                    </CardContent>
                    <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
                    </Box>
                </Box>
                </Card>

            </Item>
            </Box>
            <Box gridColumn="span 4" marginTop={6}>
                <Item>
                    <Card sx={{ display: 'flex' }} className='card' data-aos='fade-left' style={{overflow : 'hidden'}}>
                    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                        <CardContent sx={{ flex: '1 0 auto' }}>
                        <Typography component="div" variant="h5">
                            PROJECT 0.5
                        </Typography>
                        <Typography variant="subtitle1" color="text.secondary" component="div">
                            (Food Court - first web dev project ever)
                        </Typography>
                        <p style={{fontSize : 15}}>Worked on the front end development of a food ordering web based application as part of web technology lab.
The application is highly interactive and is implemented using HTML(bootstrap) , CSS and JavaScript.
A PHP login page has also been implemented.</p>
                        </CardContent>
                        <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
                        </Box>
                    </Box>
                    {/* <CardMedia
                        component="img"
                        sx={{ width: 350, height: 350 }}
                        image="/static/images/cards/live-from-space.jpg"
                        alt="Live from space album cover"
                    /> */}
                    </Card>
                </Item>
            </Box>
            <Box gridColumn="span 4" marginTop={4}>
            <Item>    
                <Card sx={{ display: 'flex' }} className='card' data-aos='fade-right' style={{overflow : 'hidden'}}>
                    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                        <CardContent sx={{ flex: '1 0 auto' }}>
                        <Typography component="div" variant="h5">
                            PROJECT 1.5
                        </Typography>
                        <Typography variant="subtitle1" color="text.secondary" component="div">
                            (Personalized Resume - old and deprecated)
                        </Typography>
                        <p stlye = {{fontSize : 15}}> Developed a highly customized and interactive resume frontend application.
Implemented through HTML , CSS , JavaScript. This a deprecated project to showcase my progress
</p>
                        </CardContent>
                        <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
                            </Box>
                    </Box>
                    {/* <CardMedia
                        component="img"
                        sx={{ width: 350, height: 350 }}
                        image="/static/images/cards/live-from-space.jpg"
                        alt="Live from space album cover"
                        /> */}
                    </Card>
                </Item>
            </Box>
            <Box gridColumn="span 8">
            <Item>
                    <Card sx={{ display: 'flex' }} className='card' data-aos='fade-left' style={{overflow : 'hidden'}}>
                    <CardMedia
                        component="img"
                        sx={{ width: 350, height: 350 }}
                        image={cinema}
                        alt="Live from space album cover"
                    />
                    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                        <CardContent sx={{ flex: '1 0 auto' }}>
                        <Typography component="div" variant="h5">
                            PROJECT 2
                        </Typography>
                        <Typography variant="subtitle1" color="text.secondary" component="div">
                            (Stream-Now : A streaming clone made using react)
                        </Typography>
                        <br/><br/>
                        <p style={{fontSize : 20}}> Worked on Front end Development of a streaming service.The app is highly interactive and responsive and was developed using JavaScript (React) , HTML (Bootstrap) and
CSS.Complete project comparable to actual streaming services.
</p>
                        </CardContent>
                        <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
                        </Box>
                    </Box>
                    </Card></Item>
            </Box>
        </Box>
        </Box>
        {/* <h1><u>Extras</u></h1> */}
        <br/><br/><br/><br/>
    </div>
  )
}
