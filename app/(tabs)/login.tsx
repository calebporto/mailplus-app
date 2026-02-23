import { useAlert } from "@/components/alert-dialog";
import { validateEmail, validatePassword } from "@/utils/validations";
import { useState } from "react";
import {
    KeyboardAvoidingView,
    Platform,
    ScrollView,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";

export default function LoginScreen() {
  const alert = useAlert();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [touched, setTouched] = useState({ email: false, password: false });

  const isValidEmail = validateEmail(email);
  const { valid: passwordValid } = validatePassword(password);

  function handleSubmit() {
    if (!isValidEmail) {
        return alert("E-mail inválido", "Insira um endereço de e-mail válido.");
    }
    if (!passwordValid) {
        return alert("Senha inválida", "A senha não atende aos requisitos mínimos.");
    }
    alert("Sucesso", "Login realizado com sucesso!");
  }

  return (
    <KeyboardAvoidingView
      className="flex-1 bg-white"
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <ScrollView
        contentContainerClassName="flex-grow"
        keyboardShouldPersistTaps="handled"
      >
        {/* Header */}
        <View className="bg-red-600 w-full pt-20 pb-12 px-8 items-center rounded-b-[40px]">
          <View className="w-auto h-20 rounded-full bg-white items-center justify-center mb-4 p-4">
            <Text className="text-red-600 text-xl font-bold">Disparador de E-mails</Text>
          </View>
          <Text className="text-white text-3xl font-bold tracking-wide">
            Bem-vindo
          </Text>
          <Text className="text-red-200 text-sm mt-1">
            Faça login para continuar
          </Text>
        </View>

        {/* Form */}
        <View className="flex-1 px-8 pt-10 pb-8">
          {/* Email */}
          <View className="mb-5">
            <Text className="text-gray-700 text-sm font-semibold mb-2 ml-1">
              E-mail
            </Text>
            <TextInput
              className={`w-full bg-gray-50 border rounded-2xl px-4 py-4 text-gray-900 text-base ${
                (!isValidEmail && touched.email) ? "border-red-500" : "border-gray-200"
              }`}
              placeholder="seu@email.com"
              placeholderTextColor="#9ca3af"
              keyboardType="email-address"
              autoCapitalize="none"
              autoCorrect={false}
              value={email}
              onChangeText={setEmail}
              onBlur={() => setTouched((t) => ({ ...t, email: true }))}
            />
            {!isValidEmail && touched.email && (
              <Text className="text-red-500 text-xs mt-1 ml-1">
                Insira um e-mail válido
              </Text>
            )}
          </View>

          {/* Senha */}
          <View className="mb-2">
            <Text className="text-gray-700 text-sm font-semibold mb-2 ml-1">
              Senha
            </Text>
            <View className="relative">
              <TextInput
                className={`w-full bg-gray-50 border rounded-2xl px-4 py-4 text-gray-900 text-base pr-24 border-gray-200`}
                placeholder="Sua senha"
                placeholderTextColor="#9ca3af"
                secureTextEntry={!showPassword}
                value={password}
                onChangeText={setPassword}
                onBlur={() => setTouched((t) => ({ ...t, password: true }))}
              />
              <TouchableOpacity
                className="absolute right-4 top-0 bottom-0 justify-center"
                onPress={() => setShowPassword((v) => !v)}
                activeOpacity={0.7}
              >
                <Text className="text-red-500 text-xs font-semibold">
                  {showPassword ? "OCULTAR" : "MOSTRAR"}
                </Text>
              </TouchableOpacity>
            </View>

            {/* Erros de senha */}
            {/* {passwordError.length > 0 && (
              <View className="mt-2 ml-1">
                {passwordError.map((err) => (
                  <Text key={err} className="text-red-500 text-xs leading-5">
                    • {err}
                  </Text>
                ))}
              </View>
            )} */}
          </View>

          {/* Esqueci a senha */}
          <TouchableOpacity className="self-end mb-8 mt-2" activeOpacity={0.7}>
            <Text className="text-red-600 text-sm font-medium">
              Esqueceu a senha?
            </Text>
          </TouchableOpacity>

          {/* Botão de enviar */}
          <TouchableOpacity
            className={`w-full rounded-2xl py-4 items-center bg-red-600`}
            onPress={handleSubmit}
            activeOpacity={0.85}
          >
            <Text className="text-white text-base font-bold tracking-wide">
              Entrar
            </Text>
          </TouchableOpacity>

          {/* Rodapé */}
          <View className="flex-row justify-center mt-8">
            <Text className="text-gray-500 text-sm">Não tem uma conta? </Text>
            <TouchableOpacity activeOpacity={0.7}>
              <Text className="text-red-600 text-sm font-semibold">
                Cadastre-se
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}