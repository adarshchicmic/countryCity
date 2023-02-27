import {StyleSheet} from 'react-native';

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#dfe3ee'
    
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
    marginTop: '4%',
  },
  button: {
    borderWidth: 2,
    borderColor: 'black',
    backgroundColor: '#3b5998',
    padding: 10,
    marginBottom: 10,
    borderRadius: 15,
  },
  buttonText: {
    fontSize: 25,
    color: '#fff',
    borderBottomWidth: 2,
    borderBottomColor: 'black',
    fontWeight: 'bold',
    alignSelf: 'center',
  },
  oneMoreButton: {
    height: '8%',
    borderWidth: 4,
    borderColor: '#3b5998',
    backgroundColor: '#3b5998',
    borderRadius: 10,
    width: '95%',
    marginBottom: '6%',
    paddingTop: '2%',
    marginLeft: '2.5%',
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10,
    alignSelf: 'center',
  },
  dropdownSelector: {
    width: '95%',
    height: 60,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#3b5998',
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: 15,
    paddingRight: 15,
    marginLeft: '2.5%',
    marginBottom: '5%',
  },
  icon: {
    width: '5%',
    height: '20%'
  },
  dropDownArea:{
    width: '90%', 
    height: 580,
    borderRadius: 10,
    marginTop: 20,
    backgroundColor: '#dfe3ee', 
    elevation: 5,
    alignSelf: 'center',
  },
  searchInput: {
    width: '100%', 
    height: 50,
    borderRadius: 10, 
    borderWidth: 2,
    borderColor: '#3b5998',
    marginTop: 20, 
    paddingLeft: 15, 
    alignSelf:'center',
    marginBottom: 10
  },
  profileText: {
    color: '#3b5998',
    fontSize: 30,
    fontWeight: 500,
    textAlign: 'center',
    borderBottomWidth: 10,
    borderBottomColor: 'black',
  }
});
