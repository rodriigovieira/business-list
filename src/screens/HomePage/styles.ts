import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    alignItems: 'center',
  },

  header: {
    marginTop: 20,
    marginBottom: 10,
    width: '100%',
    alignItems: 'center',
  },

  headerText: {
    fontSize: 16,
    marginBottom: 10,
  },

  button: {
    borderRadius: 8,
    backgroundColor: 'grey',
    width: '70%',
    padding: 10,
    margin: 8,
  },

  buttonText: {
    fontSize: 16,
    color: 'white',
    textAlign: 'center',
    textTransform: 'uppercase',
    fontWeight: '700',
  },
});
