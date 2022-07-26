import { VStack } from 'native-base';
import { Button } from '../components/Button';
import { Header } from '../components/Header';
import { Input } from '../components/Input';

export function Register() {
  return (
    <VStack flex={1} p={6} bg="gray.600">
      <Header title="Nova solicitação"/>
      <Input 
      placeholder='Número do patrimônio'
      flex={1}
      mt={4}
      multiline
      textAlign='vertical'
      />
      <Header title="Nova solicitação"/>
      <Input 
      placeholder='Descrição do problema'
      flex={1}
      mt={5}
      multiline
      textAlign='vertical'
      />
      <Button
      title='Cadastrar'
      mt={5}
      />
    </VStack>
  );
}