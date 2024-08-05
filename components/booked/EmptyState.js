import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';

const EmptyState = ({ message }) => (
    <View style={styles.emptyStateContainer}>
        <Text style={styles.emptyStateMessage}>{message}</Text>
    </View>
);

export default EmptyState;
