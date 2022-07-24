import {
  Center,
  FlatList,
  Heading,
  HStack,
  IconButton,
  Text,
  useTheme,
  VStack,
} from "native-base";
import { ChatTeardropText, SignOut } from "phosphor-react-native";
import { useState } from "react";

import Logo from "../assets/logo_secondary.svg";
import { Button } from "../components/Button";
import { Filter } from "../components/Filter";
import { Order, OrderProps } from "../components/Order";

export function Home() {
  const { colors } = useTheme();
  const [selectedStatus, setSelectedStatus] = useState<"open" | "closed">(
    "open"
  );
  const [orders, setOrders] = useState<OrderProps[]>([]);
  // { id: "1", patrimony: "123", when: "18/07/2022 10:17", status: "open" },
  // { id: "2", patrimony: "123", when: "18/07/2022 10:17", status: "open" },
  // { id: "1", patrimony: "123", when: "18/07/2022 10:17", status: "closed" },
  // { id: "2", patrimony: "123", when: "18/07/2022 10:17", status: "closed" },

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

      <VStack flex={1} px={6} mb={6}>
        <HStack
          w="full"
          mt={8}
          mb={4}
          justifyContent="space-between"
          alignItems="center"
        >
          <Heading color="gray.100">Meus chamados</Heading>
        <Text color="gray.200" mb={2}>3</Text>
        </HStack>

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
          renderItem={({ item }) => <Order data={item} />}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 100 }}
          ListEmptyComponent={() => (
            <Center>
              <ChatTeardropText color={colors.gray[300]} size={60} />
              <Text color="gray.300" fontSize="xl" mt={6} textAlign="center">
                Você ainda não possui solicitações {selectedStatus ==='open' ?  "em aberto" : "finalizadas"}.
              </Text>
            </Center>
          )}
        />
        <Button title="Nova Solicitação" />
      </VStack>
    </VStack>
  );
}
