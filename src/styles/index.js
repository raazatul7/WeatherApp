import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  errorText: {
    fontSize: 60,
  },
  headTempText: {
    fontSize: 130,
  },
  bodyText: {
    fontSize: 20,
  },
  topContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorContainer: {
    marginTop: 150,
    paddingHorizontal: 20,
  },
  cityContainer: {
    alignItems: 'center',
  },
  listContainer: {
    flex: 1,
    padding: 30,
  },
  itemContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 20,
  },
  seperator: {
    borderBottomWidth: 1,
  },
  btnContainer: {
    marginTop: '40%',
    width: '30%',
    height: '10%',
    borderWidth: 1,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export {styles};
