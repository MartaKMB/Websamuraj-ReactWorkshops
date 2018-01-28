import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, FlatList } from 'react-native'; // tu dodjajemy elementy, które będziemy używać
import { Constants} from 'expo'; // inf o urządzeniu, np. wielkość ekranu

export default class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      value: '',
      items: []
    }
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleClick() {
    this.setState(prevState => ({
      value: '',
      items: [...prevState.items, prevState.value]
    }))
  }

  handleChange(value) {
    this.setState({
      value: value
    })
  }

  handleDelete(index) {
    this.setState((prevState) => ({
      items: prevState.items.filter((item, key) => {
        if(key !== index) {
          return true;
        }
      })
    }))
  }

  render() {
    console.log(this.state.items);
    return (
      <View style={styles.container}>

        <View style={{height: 80}}>
          <TextInput
            style={styles.input} 
            onChangeText={this.handleChange} 
            value={this.state.value}/>
          <Button 
            title="Dodaj" 
            onPress={this.handleClick}>
            <Text>DODAJ</Text>
          </Button>
        </View>

        <View style={{flex: 1, backgroundColor: 'lightblue'}}>
          <FlatList
          data={this.state.items}
          keyExtractor={(item, index) => index}
          renderItem= {({item, index}) => (
            <View style={styles.item}>
              <Text>{item}</Text>
              <Button title="x" onPress={() => this.handleDelete(index)}><Text>X</Text></Button>
          </View> )}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    flexDirection: 'column',
    flex: 1,
    justifyContent: 'space-between'
  },
  input: {
    borderColor: '#000',
    borderWidth: 1,
    height: 40
  },
  item: {
    height: 50,
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-between',
  }
});
