import react, {useState} from 'react';
import { StyleSheet, Text, TextInput, View, Button, FlatList } from 'react-native';

export default function App() {
  const [text, onChangeText] = useState("");
  const [data, setData] = useState([]);

  const addItem = () => {
    setData([...data, {key: text}]);
  }

  const clearItem = () => {
    setData([]);
  }

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
      />
      <Button onPress={addItem} title="ADD" color="#f194ff" style={styles.button}  ></Button>
      <Button onPress={clearItem} title="CLEAR"></Button>

      <View style={styles.containerTwo}>
        <Text style={{color: "blue", fontWeight: "bold", marginTop: 10}}>Shopping List</Text>
        <FlatList
          data={data}
          renderItem={({item}) =><Text>{item.key}</Text>}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 70,
  },

  containerTwo: {
    flex: 2,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  input: {
    height: 40,
    width: 100, 
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
