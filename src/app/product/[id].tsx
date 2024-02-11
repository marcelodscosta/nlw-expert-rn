import { useLocalSearchParams } from 'expo-router';
import { View } from "react-native";

type ProductProps = {
  id: string,
};

export default function Product() {

  const { id } = useLocalSearchParams<ProductProps>();
  console.log(id);

  return (
    <View className="flex-1"></View>
  );
};