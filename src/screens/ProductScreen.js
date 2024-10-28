import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import CountdownTimer from '../components/CountdownTimer';
import { calculateDeliveryDate } from '../utils/DateUtils';

const ProductScreen = ({ route }) => {
  const { selectedProduct, provider } = route.params;
  const [deliveryDate, setDeliveryDate] = useState('');
  const [timer, setTimer] = useState(null);

  useEffect(() => {
    const currentTime = dayjs();
    const estimatedDate = calculateDeliveryDate(provider, currentTime);
    setDeliveryDate(estimatedDate);

    if (provider === 'Provider A') {
      setTimer(5 * 60 * 60); // Timer for Provider A (5 PM cutoff)
    } else if (provider === 'Provider B') {
      setTimer(9 * 60 * 60); // Timer for Provider B (9 AM cutoff)
    }
  }, [provider]);

  return (
    <View>
      <Text>Product: {selectedProduct.name}</Text>
      <Text>Estimated Delivery Date: {deliveryDate}</Text>
      {timer && <CountdownTimer until={timer} />}
    </View>
  );
};

export default ProductScreen;
