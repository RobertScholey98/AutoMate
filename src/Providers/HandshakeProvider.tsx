import React, { ReactNode, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { handshake } from '../api/handshake';
import { View, Text } from 'react-native';
import { ActivityIndicator } from 'react-native-paper';

const AppLoadedProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const hashCode = 'yourHashCode';
    handshake(hashCode)(dispatch).then(() => setLoading(false));
  }, [dispatch]);

  if (loading) {
    return <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <ActivityIndicator size="large" />
    </View>;
  }
  return <>{children}</>;
};

export default AppLoadedProvider;