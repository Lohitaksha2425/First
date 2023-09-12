import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet, Button, Pressable } from "react-native";
import { useDispatch, useSelector } from "react-redux"; // Import Redux hooks
import { addDetails, deleteDetails } from "./redux/reducer"; // Import your Redux actions

const Task2 = () => {
  const [data, setData] = useState(['Suggestion 1', 'Suggestion 2', 'Suggestion 3', 'Suggestion 4', 'Suggestion 5']);
  const [suggestion, setSuggestion] = useState('');
  const [show, setShow] = useState(false);

  // Redux state and dispatch setup
  const dispatch = useDispatch();
  const selectedSuggestions = useSelector((state) => state.details.details); // Replace 'details' with your Redux slice name

  const handlePress = (item) => {
    setSuggestion(item);
  };

  const handleSave = () => {
    if (suggestion) {
      dispatch(addDetails.addDetails([...selectedSuggestions, suggestion])); // Dispatch the Redux action to add a suggestion
    }
    setShow(true);
  };

  const handleDelete = (item) => {
    dispatch(deleteDetails.deleteDetails(item)); // Dispatch the Redux action to delete a suggestion
  };

  return (
    <View style={styles.container}>
      <Text style={styles.consultation}>Consultation</Text>
      <Text style={styles.word}>Chief Complaints</Text>
      <TextInput
        style={styles.inputt}
        placeholder="Suggestion"
        onChangeText={setSuggestion}
        value={suggestion}
      />
      <Text style={styles.word}>Suggestions</Text>
      <View style={{ flexDirection: 'row', flexWrap: 'wrap', marginBottom: 10 }}>
        {data.map((item) => (
          <Pressable
            key={item}
            style={[
              styles.button,
              suggestion === item && { backgroundColor: "#378efa" },
            ]}
            onPress={() => handlePress(item)}
          >
            <Text
              style={[
                styles.text,
                suggestion === item && { color: "white" },
              ]}
            >
              {item}
            </Text>
          </Pressable>
        ))}
      </View>
      <Button title="Save" onPress={handleSave} style={styles.save} />
      {show && selectedSuggestions.length > 0 && (
        <View>
          <Text>Selected Suggestions:</Text>
          {selectedSuggestions.map((selected, index) => (
            <View key={index}>
              <Text onPress={() => handleDelete(selected)} >{selected}</Text>
            </View>
          ))}
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    gap: 20,
  },
  consultation: {
    fontSize: 30,
    fontWeight: "bold",
    margin: 30,
    marginTop: 30,
    color: "black",
  },
  word: {
    fontSize: 20,
    fontWeight: "bold",
    margin: 7,
    color: "black",
    gap: 20,
  },
  inputt: {
    borderWidth: 1,
    padding: 10,
    backgroundColor: "#F4F7FF",
  },
  button: {
    backgroundColor: '#f2f2f2',
    padding: 12,
    margin: 10,
    borderRadius: 19,
  },
  text: {
    color: '#378efa'
  },
});

export default Task2;
