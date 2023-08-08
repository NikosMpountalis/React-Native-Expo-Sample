import React from "react";
import { Button } from "react-native";
import { FC } from "react";

export interface GenericButtonProps {
  testID: string;
  title: string;
  onPress: () => void;
}

const GenericButton: FC<GenericButtonProps> = ({
  title,
  testID,
  onPress,
  ...restProps
}) => {
  return (
    <Button testID={testID} title={title} onPress={onPress} {...restProps} />
  );
};

export default GenericButton;
