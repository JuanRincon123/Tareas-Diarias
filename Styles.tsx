import { StyleSheet, Dimensions } from 'react-native';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    padding: 20,
  },
  title: {
    fontSize: 20,
    color: '#6f6f6f',
    marginTop: 30,
  },
  text: {
    fontSize: 16,
    color: '#6f6f6f',
  },
  textDone: {
    fontSize: 16,
    color: 'green',
    textDecorationLine: 'line-through',
  },
  whiteText: {
    fontSize: 16,
    color: '#fff',
  },
  textIpunt: {
    borderColor: '#6f6f6f',
    borderWidth: 1,
    width: Dimensions.get('screen').width * 0.6,
    borderRadius: 10,
    paddingLeft: 10,
  },
  inputContainer: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  addButton: {
    width: Dimensions.get('screen').width * 0.2,
    backgroundColor: '#5897fb',
    justifyContent: 'center',
    padding: 10,
    alignItems: 'center',
    borderRadius: 10,
  },
  scrollContainer: {
    marginTop: 20,
  },
  itemContainer: {
    paddingVertical: 20,
    borderBottomColor: '#e4e4e4',
    borderBottomWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  removeButton: {
    backgroundColor: '#f33d3d',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 15,
    borderRadius: 10,
  },
});

export default styles;