import React, { Component } from "react";

import { StyleSheet, View, AppRegistry, Text, FlatList } from "react-native";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      dataSource: [],
    };
  }

  renderItem = ({ item }) => {
    return (
      <View>
        <View>
          <Text style={{ fontSize: 18, color: "green", marginBottom: 15 }}>
            {item.lastname}
          </Text>
          <Text style={{ fontSize: 18, color: "green", marginBottom: 15 }}>
            {item.rating}
          </Text>
          <Text style={{ fontSize: 18, color: "green", marginBottom: 15 }}>
            {item.name}
          </Text>
          <Text style={{ fontSize: 18, color: "green", marginBottom: 15 }}>
            {item.lecture}
          </Text>
        </View>
      </View>
    );
  };

  componentDidMount() {
    const url =
      "http://www.json-generator.com/api/json/get/bVNaScGmJK?indent=2";
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
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
});
