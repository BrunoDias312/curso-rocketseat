import { StyleSheet } from 'react-native';


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  iten: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
    backgroundColor: '#262626',
    marginBottom: 8,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#333',
    elevation: 3,
  },
  label: {
    flex: 1,
    paddingHorizontal: 16,
    color: '#F2F2F2',
  },
  labelChecked: {
    flex: 1,
    paddingHorizontal: 16,
    color: '#808080',
    textDecorationLine: 'line-through'
  },
  imgAddButton: {
    height: 18,
    width: 18,
  },
  boxNoTask: {
    width: '100%',
    alignItems: 'center',
    paddingTop: 48,
    paddingBottom: 48,
    paddingLeft: 20,
    paddingRight: 20
  },
  textNoTask: {
    fontSize: 14,
    fontWeight: '400',
    color: '#808080',
    textAlign: 'center',
    lineHeight: 30,
  },
  textNoTaskWeight: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#808080',
    textAlign: 'center',
    marginTop: 16
  }
});

export default styles;