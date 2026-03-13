import Header from "@/components/Header";
import { useState } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";

export default function App() {
  const [tasks, setTask] = useState([
    { name: "clean the house", id: "1" },
    { name: "buy groceries", id: "2" },
    { name: "do homework", id: "3" },
  ]);

  return (
    <View>
      <Header />
      <View style={styles.container}>
        <FlatList
          data={tasks}
          renderItem={({ item }) => <Text>{item.name}</Text>}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 40,
  },
});
