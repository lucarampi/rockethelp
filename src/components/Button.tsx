import { Button as NativeBaseButton, IButtonProps, Heading } from "native-base";

interface ButtonProps extends IButtonProps {
  title: string;
}

export function Button({ title, ...rest }: ButtonProps) {
  return (
    <NativeBaseButton
      bg="purple.600"
      h={14}
      fontSize="sm"
      rounded="md"
      _pressed={{
        bg: "purple.500",
      }}
      {...rest}
    >
      <Heading color="white" fontSize="lg">
        {title}
      </Heading>
    </NativeBaseButton>
  );
}
