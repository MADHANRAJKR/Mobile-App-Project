import AsyncStorage from '@react-native-async-storage/async-storage';

/*
 Save data to local storage
*/
export const saveData = async (key, value) => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem(key, jsonValue);
    console.log("Data saved successfully");
  } catch (error) {
    console.log("Error saving data:", error);
  }
};

/*
 Get data from local storage
*/
export const getData = async (key) => {
  try {
    const jsonValue = await AsyncStorage.getItem(key);
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (error) {
    console.log("Error retrieving data:", error);
  }
};

/*
 Remove data from local storage
*/
export const removeData = async (key) => {
  try {
    await AsyncStorage.removeItem(key);
    console.log("Data removed");
  } catch (error) {
    console.log("Error removing data:", error);
  }
};

/*
 Clear all stored data
*/
export const clearStorage = async () => {
  try {
    await AsyncStorage.clear();
    console.log("Storage cleared");
  } catch (error) {
    console.log("Error clearing storage:", error);
  }
};
