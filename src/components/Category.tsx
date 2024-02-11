import {
  Pressable,
  PressableProps,
  Text
} from "react-native";

import { clsx } from 'clsx';

type CategoryProps = {
  title: string,
  isSelected?: boolean,
} & PressableProps;

export function Category({ title, isSelected, ...rest }: CategoryProps) {
  return (
    <Pressable
      className={clsx("bg-slate-800 px-4 justify-center h-10 rounded-md", isSelected && "border-2 border-lime-300")}
      {...rest}
    >
      <Text className="text-slate-100 font-subtitle text-sm">{title}</Text>
    </Pressable>
  );
};