import { ReactNode } from "react";
import { Text, TouchableOpacity, TouchableOpacityProps } from "react-native";

type ButtonIconProps = {
  children: ReactNode,
};

type ButtonTextProps = {
  children: string,
};

type ButtonProps = {
  children: ReactNode,
} & TouchableOpacityProps;

function Button({ children, ...rest }: ButtonProps) {
  return (
    <TouchableOpacity
      className="bg-lime-400 rounded-md items-center justify-center flex-row h-12"
      activeOpacity={0.7}
      {...rest}
    >
      {children}
    </TouchableOpacity>
  );
};

function ButtonText({ children }: ButtonTextProps) {
  return (
    <Text className="text-black font-heading text-base mx-2">{children}</Text>
  );
};

function ButtonIcon({ children }: ButtonIconProps) {
  return children;
}

Button.Text = ButtonText;
Button.Icon = ButtonIcon;

export { Button };
