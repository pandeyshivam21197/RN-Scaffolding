import React, {FC} from 'react';
import {StyleSheet, Text, View} from 'react-native';

export const Home: FC<any> = (): React.ReactElement => {
  return (
    <View style={styles.container}>
      <Text>{'Home Screen'}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
