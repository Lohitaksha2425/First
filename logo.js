import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

const MyComponent = () => {
  return (
    <View style={styles.container}>
      {/* Replace 'logo.png' with the path to your logo image */}
      <Image source={require("doggy3.jpg")} style={styles.logo} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 200, // Set the desired width
    height: 200, // Set the desired height
  },
});

export default MyComponent;
