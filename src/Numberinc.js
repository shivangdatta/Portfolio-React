import React, { useEffect, useState, useRef } from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { FaBrain } from 'react-icons/fa';
import { AiOutlineFundProjectionScreen } from 'react-icons/ai';
import { BsCodeSlash, BsSignDeadEndFill } from 'react-icons/bs';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#8415e6' : '#a65eb8',
  ...theme.typography.body2,
  textAlign: 'center',
  color: 'white'
}));

const NumberInc = () => {
  const counterNumbers = [
    { number: 300, count: 0 },
    { number: 5, count: 0 },
    { number: 700, count: 0 },
  ];

  const maxTargetNumber = Math.max(...counterNumbers.map((numObj) => numObj.number));
  const incrementNumber = Math.trunc(maxTargetNumber / 200);

  const [counts, setCounts] = useState(counterNumbers.map((numObj) => numObj.count));
  const [isVisible, setIsVisible] = useState(false);
  const gridRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (gridRef.current) {
      observer.observe(gridRef.current);
    }

    return () => {
      if (gridRef.current) {
        observer.unobserve(gridRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (isVisible) {
      const interval = setInterval(() => {
        setCounts((prevCounts) =>
          prevCounts.map((count, index) => {
            const targetNumber = counterNumbers[index].number;
            const newCount = Math.min(count + incrementNumber, targetNumber);
            return newCount;
          })
        );
      }, 25);

      return () => clearInterval(interval);
    }
  }, [isVisible]);

  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={0}>
          <Grid item xs={12} ref={gridRef}>
            <Item>
              <Grid container spacing={0}>
                {counterNumbers.map((numObj, index) => (
                  <Grid item xs={4} key={index} style={{ marginLeft: '0%' }}>
                    <Item>
                      {index === 0 && <FaBrain style={{ fontSize: 40 }} />}
                      {index === 1 && <AiOutlineFundProjectionScreen style={{ fontSize: 40 }} />}
                      {index === 2 && <BsCodeSlash style={{ fontSize: 40 }} />}
                      <h1 className="counter-numbers" data-number={numObj.number} style={{ fontSize: 25 }}>
                        {counts[index]}+

                      </h1>
                      <h2 style={{ textAlign: 'center', fontSize: 30 }}>
                        {index === 0
                          ? 'Problems solved'
                          : index === 1
                            ? 'Projects Completed'
                            : 'Hours spent coding'}
                      </h2>
                    </Item>
                  </Grid>
                ))}
              </Grid>
            </Item>
          </Grid>
        </Grid>
         <br/><br/><br/><br/><br/><br/><br/>                     
      </Box>
    </div>
  );
}
export default NumberInc;