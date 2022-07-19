import {
  FlatList,
  Heading,
  HStack,
  IconButton,
  Text,
  useTheme,
  VStack,
} from "native-base";
import { SignOut } from "phosphor-react-native";
import { useState } from "react";

import Logo from "../assets/logo_secondary.svg";
import { Filter } from "../components/Filter";
import { Order, OrderProps } from "../components/Order";

export function Home() {
  const { colors } = useTheme();
  const [selectedStatus, setSelectedStatus] = useState<"open" | "closed">(
    "open"
  );
  const [orders, setOrders] = useState<OrderProps[]>([
    { id: "1", patrimony: "123", when: "18/07/2022 10:17", status: "open" },
  ]);

  return (
    <VStack flex={1} pb={1} bg="gray.700">
      <HStack
        w="full"
        justifyContent="space-between"
        alignItems="center"
        bg="gray.600"
        pt={10}
        pb={4}
        px={6}
      >
        <Logo />
        <IconButton icon={<SignOut size={26} color={colors.gray[300]} />} />
      </HStack>

      <VStack flex={1} px={6}>
        <HStack
          w="full"
          mt={8}
          mb={4}
          justifyContent="space-between"
          alignItems="center"
        >
          <Heading color="gray.100">Meus chamados</Heading>
        </HStack>
        <Text color="gray.200" mb={2}>
          {" "}
          Numero de solicitações em aberto{" "}
        </Text>

        <HStack space={2} mb={8}>
          <Filter
            title="Em andamento"
            type="open"
            onPress={() => setSelectedStatus("open")}
            isActive={selectedStatus === "open"}
          />
          <Filter
            title="Finalizados"
            type="closed"
            onPress={() => setSelectedStatus("closed")}
            isActive={selectedStatus === "closed"}
          />
        </HStack>
        <FlatList
          data={orders}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <Order data={item} /> }
        />
      </VStack>
    </VStack>
  );
}
