import {StyleSheet} from "react-native";

export default  styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: '5%',
        marginRight: '5%',
    },
    inputText: {
        height: '8%',
        width: '95%',
        borderWidth: 4,
        borderColor: '#6666C0',
        borderRadius: 3,
        marginBottom: '4%',
        fontSize: 20,
        fontWeight: 'bold',
        borderRadius: 15,
    }, 
    oneText: {
        fontSize: 25,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: '4%',
        marginTop: '4%'

    }, 
    button : {
        borderWidth: 2,
        borderColor: 'black',
        backgroundColor: '#6666C0',
        padding: 10,
        marginBottom: 10,
        borderRadius: 15
    },
    buttonText : {
        fontSize: 25,
        color: 'white',
        fontWeight: 'bold',
        alignSelf: 'center',

    },
    oneMoreButton: {
        height: '8%',
        borderWidth: 4,
        borderColor: 'black',
        backgroundColor: 'pink',
        borderRadius: 10,
        width: '95%',
        marginBottom: '6%',
        paddingTop: "2%",

    }

})