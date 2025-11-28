import { Link, Tabs } from "expo-router";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import { SimpleLineIcons } from "@expo/vector-icons";

const TabLayout = () => {
  type HeaderButtonProps = React.ComponentProps<typeof Link> & {
    name: React.ComponentProps<typeof SimpleLineIcons>["name"];
  };

  const HeaderButton = (props: HeaderButtonProps) => {
    const { name, ...rest } = props;

    return (
      <Link asChild {...rest}>
        <TouchableOpacity>
          <SimpleLineIcons name={name} size={24} color="#1f99b0" />
        </TouchableOpacity>
      </Link>
    );
  };

  const LogoTitle = () => {
    return <Text>地图导航</Text>;
  };

  return (
    <Tabs
      screenOptions={{
        headerTitleAlign: "center",
        headerTitle: () => <LogoTitle />,
        headerLeft: () => <HeaderButton name="bell" href="/articles" style={style.headerLeft} />,
        headerRight: () => (
          <>
            <HeaderButton name="magnifier" href="/login" style={style.headerRight} />
            <HeaderButton name="options" href="/settings" style={style.headerRight} />
          </>
        ),
      }}>
      <Tabs.Screen name="map" options={{ title: "地图" }} />
      <Tabs.Screen name="user" options={{ title: "用户" }} />
    </Tabs>
  );
};

const style = StyleSheet.create({
  headerLeft: {
    marginLeft: 10,
  },
  headerRight: {
    marginRight: 10,
  },
})

export default TabLayout;
