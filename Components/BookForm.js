import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { Picker } from "@react-native-picker/picker";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import Dropdown from "react-native-input-select";

const ServiceForm = () => {
  const [serviceType, setServiceType] = useState("");
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [isTimePickerVisible, setTimePickerVisibility] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleDateConfirm = (date) => {
    hideDatePicker();
    setSelectedDate(date);
  };

  const showTimePicker = () => {
    setTimePickerVisibility(true);
  };

  const hideTimePicker = () => {
    setTimePickerVisibility(false);
  };

  const handleTimeConfirm = (time) => {
    hideTimePicker();
    setSelectedTime(time);
  };

  const handleSubmit = () => {
    // Perform actions with form data
    console.log("Service Type:", serviceType);
    console.log("Selected Date:", selectedDate);
    console.log("Selected Time:", selectedTime);
  };

  return (
    <View style={styles.container}>
      <Dropdown
        label="Country"
        placeholder="Select an option..."
        options={[
          { label: "Washing", value: "washing" },
          { label: "Corn Row", value: "cornrow" },
          { label: "Twist", value: "twist" },
          { label: "Pedicure", value: "perdicure" },
          { label: "Makeup", value: "markup" },
        ]}
        selectedValue={serviceType}
        onValueChange={(value) => setServiceType(value)}
        primaryColor={"green"}
      />
      <TouchableOpacity style={styles.input} onPress={showDatePicker}>
        <Text>
          {selectedDate ? selectedDate.toDateString() : "Select Date"}
        </Text>
      </TouchableOpacity>
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        onConfirm={handleDateConfirm}
        onCancel={hideDatePicker}
      />

      <TouchableOpacity style={styles.input} onPress={showTimePicker}>
        <Text>
          {selectedTime ? selectedTime.toTimeString() : "Select Time"}
        </Text>
      </TouchableOpacity>
      <DateTimePickerModal
        isVisible={isTimePickerVisible}
        mode="time"
        onConfirm={handleTimeConfirm}
        onCancel={hideTimePicker}
        className="text-black"
      />

      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 16,
  },
  picker: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 16,
    paddingHorizontal: 8,
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 16,
    paddingHorizontal: 8,
    justifyContent: "center",
  },
  button: {
    backgroundColor: "blue",
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
  },
});

export default ServiceForm;

// <Pressable
//   className="bg-red-500 py-2 px-4"
//   onPress={() => setModalVisible(!modalVisible)}>
//   <Text style={styles.textStyle}>Hide Modal</Text>
// </Pressable>;
