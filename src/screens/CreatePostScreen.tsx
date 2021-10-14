import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Button } from 'react-native-elements';

export const CreatePostScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Create Post Screen</Text>
      <Button title="作成" />
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
