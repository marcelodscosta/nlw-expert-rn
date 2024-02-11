import {
  Image,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import { Feather } from '@expo/vector-icons';

import colors from 'tailwindcss/colors';

type HeaderProps = {
  title: string,
  cartQuantityItems?: number,
};

export function Header({ title, cartQuantityItems = 0, ...rest }: HeaderProps) {
  return (
    <View className="flex-row items-center border-b border-slate-700 pb-5 mx-5" {...rest}>
      <View className="flex-1">

        <Image
          source={require("../assets/logo.png")}
          className="h-6 w-32 ml-1"
        />

        <Text className="font-heading text-white text-2xl my-2">{title}</Text>

      </View>
      {cartQuantityItems &&

        <TouchableOpacity className="relative" activeOpacity={0.7}>
          <View className="bg-lime-300 w-4 h-4 rounded-full items-center justify-center top-2 z-10 -right-3.5">
            <Text className="text-slate-900 font-bold text-xs">{cartQuantityItems}</Text>
          </View>

          <Feather name="shopping-bag" color={colors.white} size={24} />
        </TouchableOpacity>

      }
    </View>
  );
};