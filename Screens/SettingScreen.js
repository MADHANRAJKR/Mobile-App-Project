import React, { useState } from "react";
import { View, Text, Switch, StyleSheet } from "react-native";

export default function SettingsScreen() {
  const [notifications, setNotifications] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Settings</Text>

      <View style={styles.row}>
        <Text>Enable Notifications</Text>
        <Switch
          value={notifications}
          onValueChange={(value) => setNotifications(value)}
        />
      </View>

      <View style={styles.row}>
        <Text>Dark Mode</Text>
        <Switch
          value={darkMode}
          onValueChange={(value) => setDarkMode(value)}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontSize: 22, marginBottom: 20 },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
});
