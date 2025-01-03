import { Stack } from "expo-router";

const _layout = () => {
  return (
    <Stack initialRouteName="Welcome" screenOptions={{headerShown:false}}>
      <Stack.Screen name="Welcome" />
      <Stack.Screen name="Home" />
    </Stack>
  );
};

export default _layout;
