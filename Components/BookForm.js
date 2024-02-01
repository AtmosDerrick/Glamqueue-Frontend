import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import DropdownSelect from "react-native-input-select";

const ServiceForm = ({ setModalVisible, modalVisible }) => {
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
      <View>
        <Text className="text-center mb-4 font-bold text-lg text-primary">
          Classic Hair Cut
        </Text>
        <Text className="text-center italic  underline mt-[-15px] mb-4">
          Book Service
        </Text>
      </View>
      <View className="mt-2">
        <DropdownSelect
          placeholder="Select Service Type"
          options={[
            { name: "Washing", code: "washing" },
            { name: "Corn Row", code: "cornrow" },
            { name: "Wigs", code: "wigs" },
            { name: "Pedicure", code: "pedicure" },
          ]}
          optionLabel={"name"}
          optionValue={"code"}
          selectedValue={serviceType}
          onValueChange={(itemValue) => setServiceType(itemValue)}
          dropdownStyle={{
            paddingVertical: 5,
            paddingHorizontal: 5,
            minHeight: 50,
            borderColor: "gray",
          }}
        />
      </View>

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
      />
      <View className="mb-4">
        <Text className="text-sm font-medium">
          Price: <Text className="text-red-500">Ghc 200</Text>
        </Text>
      </View>

      <TouchableOpacity
        className="bg-primary py-3 flex-row justify-center items-center rounded-xl"
        onPress={handleSubmit}>
        <Text style={styles.buttonText} className="text-white">
          Confirm Booking
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        className="border-primary border-2 text-primary py-3 flex-row justify-center items-center rounded-xl mt-6"
        onPress={() => setModalVisible(!modalVisible)}>
        <Text style={styles.buttonText} className="text-primary">
          Cancel
        </Text>
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
    fontWeight: "bold",
  },
});

export default ServiceForm;

// <Pressable
//   className="bg-red-500 py-2 px-4"
//   onPress={() => setModalVisible(!modalVisible)}>
//   <Text style={styles.textStyle}>Hide Modal</Text>
// </Pressable>;
