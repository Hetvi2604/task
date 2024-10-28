import React, { useState, useEffect } from 'react';
import { View, TextInput, Button, Text } from 'react-native';
import { loadAllData } from '../utils/DataLoader';
import ProductList from '../components/ProductList';

const HomeScreen = ({ navigation }) => {
  const [products, setProducts] = useState([]);
  const [pincode, setPincode] = useState('');
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [provider, setProvider] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const data = await loadAllData();
      setProducts(data.products);
    };
    fetchData();
  }, []);

  const validatePincode = (code) => {
    const provider = pincodes[code]?.provider;
    if (!provider) {
      alert('Invalid Pincode');
      return null;
    }
    return provider;
  };

  const handleCheckDelivery = () => {
    const provider = validatePincode(pincode);
    if (provider) {
      setProvider(provider);
      navigation.navigate('Product', { selectedProduct, provider });
    }
  };

  return (
    <View>
      <ProductList products={products} onSelect={setSelectedProduct} />
      <TextInput
        placeholder="Enter pincode"
        value={pincode}
        onChangeText={setPincode}
        keyboardType="numeric"
      />
      <Button title="Check Delivery Date" onPress={handleCheckDelivery} />
    </View>
  );
};

export default HomeScreen;
