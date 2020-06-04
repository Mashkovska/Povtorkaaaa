import React, { Component } from "react";

import {
  StyleSheet,
  View,
  AppRegistry,
  Button,
  Text,
  FlatList,
} from "react-native";

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      dataSource: [],
    };
  }

  renderItem = () => {
    <View>
      <Text>{item.name}</Text>
      <Text>{item.name}</Text>
      <Text>{item.name}</Text>
    </View>;
  };

  componentDidMount() {
    const url =
      "http://www.json-generator.com/api/json/get/cfBkjqdzuG?indent=2";
    fetch(url)
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          dataSource: responseJson.teachers,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }
  render() {
    return (
      <View style={styles.container}>
        <FlatList data={this.state.dataSource} renderItem={this.renderItem} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    justifyContent: "center",
    alignItems: "center",
  },
});
