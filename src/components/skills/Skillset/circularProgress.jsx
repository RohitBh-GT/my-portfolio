import React , { useState } from 'react';
import PropTypes from 'prop-types';
import CircularProgress from '@material-ui/core/CircularProgress';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

function CircularProgressWithLabel(props) {
  const c = ["black","red","#f516db","yellow","orange","#5ef507"];
  return (
    <Box position="relative" display="inline-flex">
      <CircularProgress style={{color:c[Math.round(props.value/20)]}} variant="determinate" {...props} />
      <Box
        top={0}
        left={0}
        bottom={0}
        right={0}
        color="white"
        position="absolute"
        display="flex"
        alignItems="center"
        justifyContent="center">
        <Typography variant="caption" component="div">{`${
          props.value/20
        }/5`}</Typography>
      </Box>
    </Box>
  );
}

CircularProgressWithLabel.propTypes = {
  value: PropTypes.number.isRequired,
};

export default function CircularStatic({maxScore}) {
  const [progress, setProgress] = useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) => (prevProgress >= maxScore ? prevProgress : prevProgress + 10));
    }, 800);
    return () => {
      clearInterval(timer);
    };
  }, []);

  return <CircularProgressWithLabel value={progress} />;
}