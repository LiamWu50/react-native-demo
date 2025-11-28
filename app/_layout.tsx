import { Stack } from "expo-router";

const Layout = () => {
  return (
    <Stack
      screenOptions={{
        title: "",
        headerTitleAlign: "center", // 安卓标题栏居中
        animation: "slide_from_right", // 安卓使用左右切屏
        headerTintColor: "#1f99b0", // 导航栏文字、按钮、标题颜色
        headerTitleStyle: {
          fontWeight: "400",
          color: "#2a2929", // 导航栏标题颜色
          fontSize: 14,
        },
        headerBackButtonDisplayMode: "minimal", // 设置返回按钮只显示图标
      }}>
      {/* tabs */}
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />

      {/* cards */}
      <Stack.Screen name="map/index" options={{ title: "地图" }} />
      <Stack.Screen name="user/index" options={{ title: "用户" }} />
    </Stack>
  );
};

export default Layout;
