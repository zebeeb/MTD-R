# Specs

these are the specs for the main navigation in the app, only three tabs; Today, tomorrow, All tasks

General requirements

- font size 10px
- font: roboto

### Tabs

- you can find the icon in assets/cal icon
- for today/tomorrow tabs, inside the icon there is the day number (e.g. if the date is 23rd of march, then 23)
- when active make the number bold


### initial code

import React from "react";
import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import dayjs from "dayjs";

const NavigationBar = () => {
  const navigation = useNavigation();
  const today = dayjs();
  const tomorrow = today.add(1, "day");
  const [activeTab, setActiveTab] = React.useState("Today");

  const renderTab = (title: string, date?: dayjs.Dayjs) => {
    const isActive = activeTab === title;
    return (
      <TouchableOpacity
        style={[styles.tab, isActive && styles.activeTab]}
        onPress={() => {
          setActiveTab(title);
          navigation.navigate(title);
        }}
      >
        <View style={styles.iconContainer}>
          <Image source={require("../assets/cal_icon.png")} style={styles.icon} />
          {date && (
            <Text style={[styles.dateNumber, isActive && styles.activeDateNumber]}>
              {date.format("D")}
            </Text>
          )}
        </View>
        <Text style={[styles.tabText, isActive && styles.activeTabText]}>{title}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.navbar}>
      {renderTab("Today", today)}
      {renderTab("Tomorrow", tomorrow)}
      {renderTab("All Tasks")}
    </View>
  );
};

const styles = StyleSheet.create({
  navbar: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    height: 60,
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  tab: {
    alignItems: "center",
    paddingVertical: 8,
  },
  activeTab: {
    borderBottomWidth: 2,
    borderBottomColor: "#007AFF",
  },
  iconContainer: {
    position: "relative",
    alignItems: "center",
  },
  icon: {
    width: 24,
    height: 24,
    resizeMode: "contain",
  },
  dateNumber: {
    position: "absolute",
    top: 6,
    fontSize: 10,
    fontFamily: "Roboto",
    color: "#666",
  },
  activeDateNumber: {
    fontWeight: "bold",
    color: "#000",
  },
  tabText: {
    fontSize: 10,
    fontFamily: "Roboto",
    color: "#666",
  },
  activeTabText: {
    color: "#007AFF",
    fontWeight: "bold",
  },
});

export default NavigationBar;
