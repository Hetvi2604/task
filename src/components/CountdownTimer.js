import React from 'react';
import Countdown from 'react-native-countdown-component';

const CountdownTimer = ({ until }) => (
  <Countdown
    until={until}
    onFinish={() => alert('Cutoff time passed')}
    size={20}
  />
);

export default CountdownTimer;
