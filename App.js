import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import MyComponent from './logo';

const App = () => {
  return (
    <View style={styles.container}>
      <Text>Welcome to My React Native App</Text>
      <MyComponent /> {/* Include your MyComponent here */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
