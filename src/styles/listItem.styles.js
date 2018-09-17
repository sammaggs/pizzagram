import { StyleSheet } from 'react-native';

export default listItemStyles = StyleSheet.create({
    listItem: {
        paddingLeft: 10,
        paddingRight: 10,
        justifyContent: "center",
        height: 75,
        backgroundColor: "#fff",
    },
    listItemTitle: {
        color: "#333",
        fontSize: 16,
    },
    listItemSubtitle: {
        color: "#aaa",
        fontSize: 12,
    },
    listItemTextContainer: {
        flexDirection: "column",
        width: 200,
        paddingLeft: 5,
    },
});