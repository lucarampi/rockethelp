import { VStack, Heading, Icon, useTheme} from "native-base";
import {useState} from 'react';

import Logo from '../assets/logo_primary.svg'
import { Input } from "../components/Input";
import { Button } from "../components/Button";

import {Envelope, Key} from "phosphor-react-native"

export function SignIn(){
    const [name, setName] =useState("")
    const [password, setPassword] =useState("")

    const {colors} = useTheme()
    return(
        <VStack flex={1} alignItems="center" bg="gray.600" px={8} pt={24}>
            <Logo/>
            <Heading color="gray.100" fontSize="xl" mt={20} mb={6}>
                Acesse sua conta
            </Heading>
            <Input
            mb={4}
            placeholder="E-mail" 
            value={name}
            onChangeText={setName}
            InputLeftElement={<Icon as={<Envelope color={colors.gray[300]}/>} ml={4}/>}
            />
            <Input
            mb={4}
            placeholder="Senha"
            value={password}
            onChangeText={setPassword} 
            InputLeftElement={<Icon as={<Key color={colors.gray[300]}/>} ml={4}/>}
            secureTextEntry
            />
        <Button title="Entrar" w="full" mt={6}/>
        </VStack>
    );
}