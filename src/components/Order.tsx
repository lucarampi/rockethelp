import {
  Box,
  Circle,
  HStack,
  Text,
  useTheme,
  VStack,
  Pressable,
  IPressableProps,
} from "native-base";
import {
  CircleWavyCheck,
  ClockAfternoon,
  Hourglass,
} from "phosphor-react-native";

export interface OrderProps {
  id: string;
  patrimony: string;
  when: string;
  status: "open" | "closed";
}

interface Props extends IPressableProps {
  data: OrderProps;
}

export function Order({ data, ...rest }: Props) {
  const { id, patrimony, status, when } = data;
  const { colors } = useTheme();
  const statusColor =
    status === "open" ? colors.secondary[700] : colors.green[300];

  return (
    <Pressable {...rest}>
      <HStack
        bg="gray.600"
        mb={4}
        alignItems="center"
        justifyContent="space-between"
        rounded="md"
        overflow="hidden"
      >
        <Box h="full" w={2} bg={statusColor} />

        <VStack flex={1} my={5} ml={5}>
          <Text color="gray.100" fontSize="md">
            Patrimônio: {patrimony}
          </Text>
          {/* <Text color="gray.100" fontSize="md">
            ID: {id}
          </Text>
          <Text color="gray.100" fontSize="md">
            STATUS: {status}
          </Text> */}
          <HStack alignItems="center">
            <ClockAfternoon size={15} color={colors.gray[200]} />
            <Text color="gray.100" fontSize="xs" ml={1.5}>
              {when}
            </Text>
          </HStack>
        </VStack>
        <Circle bg="gray.500" h={12} w={12} mr={5}>
          {status === "closed" ? (
            <CircleWavyCheck size={28} color={statusColor} />
          ) : (
            <Hourglass size={28} color={statusColor} />
          )}
        </Circle>
      </HStack>
    </Pressable>
  );
}
