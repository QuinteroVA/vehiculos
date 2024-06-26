import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10
  },
  inputs: {
    width: "90%"
  },
  buttons: {
    width: "40%",
    margin: 10,
  },
  buttons2: {
    flexDirection: 'row',
    justifyContent: 'center'
  },
  textNavigation: {
    marginTop: 10,
    fontSize: 15,
    color: '#976fc4',
    fontWeight: 'bold'
  },
  contentCar: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  contentHome: {
    flex: 1,
    marginVertical: 50,
    marginHorizontal: 20
  },
  headerHome: {
    flexDirection: 'row',
    gap: 15,
    alignItems: 'center'
  },
  modal: {
    paddingHorizontal: 20,
    paddingVertical: 20,
    backgroundColor: '#efe2ff',
    marginHorizontal: 20,
    borderRadius: 10
  },
  headerModal: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  icon: {
    flex: 1,
    alignItems: 'flex-end'
  },
  card: {
    marginBottom: 6,
    marginTop: 6,
    elevation: 4,
    borderRadius: 10,
    backgroundColor: '#efe2ff',
  },
  image: {
    width: '80%',
    height: '15%',
    margin: 30,
  },
  imageLogo: {
    width: '80%',
    height: '15%',
    margin: 30,
  },
  imageCar: {

    width: '80%',
    height: '150%',
    margin: 30,
    padding: 30

  },
  containerImg: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    resizeMode: 'stretch',
    paddingVertical: 20
  },
  image1: {
    flex: 1,
    width: '100%',
    backgroundColor: '#0553',
  },

  contentDetailCar: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: '#fff',
    gap: 20
  },
  textDescriptions: {
    marginBottom: 10,
    fontWeight: 'bold',
    fontSize: 18
  },
  modelCar: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10
  },
  fab: {
    position: 'absolute',
    margin: 16,
    right: 10,
    bottom: 5,
    borderRadius: 30
  }
})