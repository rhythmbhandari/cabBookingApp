import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f4f4f4',
    },
    listContent: {
        padding: 15,
    },
    cabItemContainer: {
        marginBottom: 20,
        backgroundColor: '#fff',
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 6,
        elevation: 5,
        overflow: 'hidden',
    },
    cabDetailsContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 15,
    },
    cabImage: {
        width: 150,
        height: 90,
        borderRadius: 10,
        resizeMode: 'contain',
    },
    textContainer: {
        flex: 1,
        marginLeft: 15,
    },
    cabCompanyName: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#333',
    },
    cabModel: {
        fontSize: 16,
        color: '#666',
    },
    cabDetail: {
        fontSize: 14,
        color: '#444',
        marginVertical: 2,
    },
    cancelButton: {
        padding: 12,
        backgroundColor: '#FF4D4D',
        borderRadius: 5,
        alignItems: 'center',
        margin: 15,
        marginBottom: 10,
    },
    cancelButtonText: {
        color: '#fff',
        fontSize: 16,
    },
    emptyStateContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    emptyStateMessage: {
        fontSize: 18,
        color: '#888',
        textAlign: 'center',
    },
    loaderContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});
