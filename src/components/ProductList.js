import React from 'react';
import { FlatList, Button, View, Text } from 'react-native';

const ProductList = ({ products, onSelect }) => (
  <FlatList
    data={products}
    keyExtractor={(item) => item.id.toString()}
    renderItem={({ item }) => (
      <View style={{ padding: 10 }}>
        <Text>{item.name}</Text>
        <Button title="Select" onPress={() => onSelect(item)} />
      </View>
    )}
  />
);

export default ProductList;
