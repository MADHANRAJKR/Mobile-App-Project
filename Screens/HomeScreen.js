import React from "react";
import { View, Text, Button, StyleSheet, FlatList } from "react-native";

const items = [
  { id: "1", name: "Item 1", description: "This is item 1" },
  { id: "2", name: "Item 2", description: "This is item 2" },
  { id: "3", name: "Item 3", description: "This is item 3" }
];

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Home Screen</Text>

      <FlatList
        data={items}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text>{item.name}</Text>
            <Button
              title="View Details"
              onPress={() => navigation.navigate("Detail", { item })}
            />
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontSize: 22, marginBottom: 10 },
  card: {
    padding: 15,
    borderWidth: 1,
    marginBottom: 10,
    borderRadius: 5,
  },
});
