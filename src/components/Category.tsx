import { Pressable, PressableProps, Text } from "react-native";

type CategoryProps = {
  title: string,
  isSelected?: boolean,
} & PressableProps;

export function Category({ title, isSelected, ...rest }: CategoryProps) {
  return (
    <Pressable
      className="bg-slate-800 px-4 justify-center h-10 rounded-md"
      {...rest}
    >
      <Text className="text-slate-100 font-subtitle text-sm">{title}</Text>
    </Pressable>
  );
};