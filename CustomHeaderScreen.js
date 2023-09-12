import React from 'react';
import { View, Text } from 'react-native';

function CustomHeaderScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>This is a screen with a custom header</Text>
      <Button
        title="Go Back"
        onPress={() => navigation.goBack()}
      />
    </View>
  );
}

export default CustomHeaderScreen;
