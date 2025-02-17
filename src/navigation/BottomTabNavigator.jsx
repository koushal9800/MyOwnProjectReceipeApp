import React from 'react';
import { View } from 'react-native';
import { useLinkBuilder, useTheme } from '@react-navigation/native';
import { Text, PlatformPressable } from '@react-navigation/elements';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import HistoryScreen from '../screens/HistoryScreen';
import ConfigurationScreen from '../screens/ConfigurationScreen';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

function MyTabBar({ state, descriptors, navigation }) {
  const { colors } = useTheme();
  const { buildHref } = useLinkBuilder();

  return (
    <View style={{ flexDirection: 'row', backgroundColor: colors.background,  }}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label = options.tabBarLabel ?? options.title ?? route.name;
        const isFocused = state.index === index;
        const Icon = options.tabBarIcon;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <PlatformPressable
            key={route.key}
            href={buildHref(route.name, route.params)}
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarButtonTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={{ flex: 1, alignItems: 'center', padding: 10,backgroundColor:'#DAE0E2' }}
          >
           {Icon && <Icon color={isFocused ? '#0ABDE3' : '#000' } size={20} />}
            <Text style={{ color: isFocused ? '#0ABDE3' : '#000' }}>
              {label}
            </Text>
          </PlatformPressable>
        );
      })}
    </View>
  );
}

export function MyTabs() {
  return (
    <Tab.Navigator tabBar={(props) => <MyTabBar {...props} />}>
         <Tab.Screen name="Configure" component={ConfigurationScreen} options={{headerShown:false,
        tabBarLabel: 'Configure',
        tabBarIcon: ({ color, size }) => <Ionicons name="settings-outline" size={size} color={color} />,
      }} />
      <Tab.Screen name="Home" component={HomeScreen}  options={{headerShown:false,
        tabBarLabel: 'Home',
        tabBarIcon: ({ color, size }) => <Ionicons name="home-outline" size={size} color={color} />,
      }} />
      <Tab.Screen name="History" component={HistoryScreen} options={{headerShown:false,
        tabBarLabel: 'History',
        tabBarIcon: ({ color, size }) => <Ionicons name="time-outline" size={size} color={color} />,
      }}/>
     
    </Tab.Navigator>
  );
}
