import React from 'react';
import { View, Text, Image } from 'react-native';
import styles from './styles'; // Ensure this path is correct
import Icon from 'react-native-vector-icons/FontAwesome'; // Example for icons

const CabInfo = ({ companyName, cabModel, cabImage, cabDetails }) => (
    <View style={styles.cabDetailsContainer}>
        <Image source={{ uri: cabImage }} style={styles.image} />
        <Text style={styles.title}>{companyName}</Text>
        <Text style={styles.subtitle}>{cabModel}</Text>
        <View style={styles.detailRow}>
            <Icon name="users" style={styles.icon} />
            <Text style={styles.detail}>Passengers Allowed: {cabDetails.passenger}</Text>
        </View>
        <View style={styles.detailRow}>
            <Icon name="star" style={styles.icon} />
            <Text style={styles.detail}>Rating: {cabDetails.rating}/10</Text>
        </View>
        <View style={styles.detailRow}>
            <Icon name="dollar" style={styles.icon} />
            <Text style={styles.detail}>Cost: ${cabDetails.cost}/hrs</Text>
        </View>
    </View>
);

export default CabInfo;
