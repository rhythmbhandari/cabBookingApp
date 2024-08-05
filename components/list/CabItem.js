import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import styles from './styles';

const CabItem = ({ cab, onPress }) => {
    return (
        <TouchableOpacity onPress={onPress} style={styles.itemTouchable}>
            <View style={styles.itemContainer}>
                <Image source={{ uri: cab.imageUrl }} style={styles.image} />
                <View style={styles.textContainer}>
                    <Text style={styles.companyName}>{cab.companyName}</Text>
                    <Text style={styles.model}>{cab.modelName}</Text>
                </View>
            </View>
        </TouchableOpacity>
    );
};

export default CabItem;
