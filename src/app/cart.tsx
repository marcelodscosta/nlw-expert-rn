import { Header } from "@/components/Header";
import { Alert, ScrollView, Text, View } from "react-native";

import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

import { Button } from "@/components/Button";
import { Input } from "@/components/Input";
import { LinkButton } from "@/components/Link-Button";
import { Product } from "@/components/Product";
import { ProductCartProps, useCartStore } from "@/stores/cart-store";
import { formatCurrency } from "@/utils/functions/format-currency";
import { Feather } from "@expo/vector-icons";
import { useState } from "react";


export default function Cart() {

  const [address, setAddress] = useState("");

  function handleOrder() {
    if (address.trim().length === 0) {
      return Alert.alert('Pedido', 'Informe os dados da entrega.');
    }

    const products = cartStore.products.map((product) => `\n ${product.quantity} ${product.title}`)
      .join("")

    const message = `
      NOVO PEDIDO
      \n Entregar em: ${address}
      ${products}
      \n Valor total: ${total}
      `;
    console.log(message);

  }


  const cartStore = useCartStore();

  const total = formatCurrency(cartStore.products.reduce((total, product) => total +
    product.price * product.quantity, 0));

  function handleProductRemove(product: ProductCartProps) {
    Alert.alert('Remover', `Deseja remover ${product.title} do carrinho?`, [
      { text: 'Cancelar' },
      { text: 'Remover', onPress: () => cartStore.remove(product.id) }
    ])
  };

  return (
    <View className="flex-1 pt-8">
      <Header title="Seu carrinho" />
      <KeyboardAwareScrollView>
        <ScrollView>
          <View className="p-5 flex-1 ">
            {cartStore.products.length > 0 ?
              <View className="border-b border-slate-700">
                {cartStore.products.map((item) => (
                  <Product
                    data={item}
                    key={item.id}
                    onPress={() => handleProductRemove(item)} />
                ))}
              </View>
              : <Text className="font-body text-slate-400 text-center my-8">Seu carrinho está vazio</Text>
            }

            <View className="flex-row gap-2 items-center mt-5 mb-4">
              <Text className="text-white text-xl font-subtitle">Total:</Text>
              <Text className="text-lime-400 text-2xl font-heading">{total}</Text>
            </View>
            <Input
              placeholder="Informe o endereço de entrega com rua, bairro, cep, número e complemento"
              onChangeText={setAddress}
            />
          </View>
        </ScrollView>
      </KeyboardAwareScrollView>
      <View className="p-5 gap-5">
        <Button onPress={handleOrder}>
          <Button.Text>
            Enviar Pedido
          </Button.Text>
          <Button.Icon>
            <Feather name="arrow-right-circle" size={20} />
          </Button.Icon>
        </Button>
        <LinkButton href="/" title="Voltar ao cardápio" />
      </View>

    </View>
  );
};