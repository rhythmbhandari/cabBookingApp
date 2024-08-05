import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#4CAF50',
        padding: 10,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
        margin: 15,
    },
    buttonText: {
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: 'bold',
    },
    cabDetailsContainer: {
        backgroundColor: '#ffffff',
        padding: 20,
        borderRadius: 15,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.15,
        shadowRadius: 6,
        elevation: 8,
        alignItems: 'center',
        margin: 15,
        borderWidth: 1,
        borderColor: '#ddd',
    },
    image: {
        width: 300,
        height: 150,
        borderRadius: 10,
        marginBottom: 15,
        resizeMode: 'contain',
    },
    title: {
        fontSize: 26,
        fontWeight: '700',
        color: '#333',
        marginBottom: 8,
    },
    subtitle: {
        fontSize: 20,
        color: '#666',
        marginBottom: 12,
    },
    detailRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 8,
        paddingHorizontal: 10,
    },
    detail: {
        fontSize: 18,
        color: '#444',
        marginLeft: 10,
    },
    icon: {
        fontSize: 20,
        color: '#007BFF',
    },
});

export default styles;
