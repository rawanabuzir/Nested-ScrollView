import { ScrollView, StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <ScrollView style={styles.mainContainer}>

      <ScrollView style={styles.container} horizontal showsHorizontalScrollIndicator={false}>
        <View style={styles.innerContainer}>
          {Array.from({ length: 10 }).map((_, index) => (
            <View key={index} style={
              index % 3 === 0
                ? styles.box
                : index % 3 === 1
                  ? styles.box1
                  : styles.box2
            }>
              <Text style={{color:'white',fontWeight:'bold',fontSize:15}}>Hello World</Text>
            </View>
          ))}
        </View>
      </ScrollView>

      <View style={styles.afterScroll}>
        <Text style={{ fontSize: 18 }}>Hello World after scroll section</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#eee',
  },
  container: {
    paddingVertical: 40,
  },
  innerContainer: {
    flexDirection: 'row',
    paddingHorizontal: 10,
  },
  box: {
    width: 100,
    height: 100,
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 10,
    borderWidth: 2,
    borderColor: 'black',
  },
  box1: {
    width: 100,
    height: 100,
    backgroundColor: 'blue',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 10,
    borderBottomWidth: 2,
    borderBottomColor: 'red',
    elevation: 10,
  },
  box2: {
    width: 100,
    height: 100,
    backgroundColor: 'green',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 10,
    borderRadius: 15,
    borderWidth: 2,
    elevation: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  text: {
    color: '#fff',
    fontWeight: 'bold',
  },
  afterScroll: {
    padding: 20,
    alignItems: 'center',
  }
});
