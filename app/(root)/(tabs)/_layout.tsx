import {
  Icon,
  Label,
  NativeTabs,
  VectorIcon,
} from "expo-router/unstable-native-tabs";

import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

export default function TabsLayout() {
  return (
    <NativeTabs>
      <NativeTabs.Trigger name="index">
        <Icon
          sf="house.fill"
          src={<VectorIcon family={MaterialCommunityIcons} name="home" />}
        />
        <Label>Home</Label>
      </NativeTabs.Trigger>

      <NativeTabs.Trigger name="search">
        <Icon
          sf="magnifyingglass"
          src={<VectorIcon family={MaterialCommunityIcons} name="magnify" />}
        />
        <Label>Search</Label>
      </NativeTabs.Trigger>

      <NativeTabs.Trigger name="saved">
        <Icon
          sf="heart.fill"
          src={<VectorIcon family={MaterialCommunityIcons} name="heart" />}
        />
        <Label>Saved</Label>
      </NativeTabs.Trigger>

      <NativeTabs.Trigger name="profile">
        <Icon
          sf="person.fill"
          src={<VectorIcon family={MaterialCommunityIcons} name="account" />}
        />
        <Label>Profile</Label>
      </NativeTabs.Trigger>
    </NativeTabs>
  );
}
