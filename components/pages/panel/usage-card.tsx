import { Text, View } from "react-native";

interface UsageCardProps {
  planLimit: number;
  emailsUsed: number;
}

export function UsageCard({ planLimit, emailsUsed }: UsageCardProps) {
  const emailsRemaining = planLimit - emailsUsed;
  const usagePercent = Math.round((emailsUsed / planLimit) * 100);

  return (
    <>
      <Text className="text-gray-500 text-xs font-semibold uppercase tracking-wider mb-3 mt-3">
        Uso do plano
      </Text>

      <View className="bg-white rounded-3xl p-5 shadow-sm mb-4">
        {/* Métricas */}
        <View className="flex-row justify-between mb-4">
          <View className="items-center flex-1">
            <Text className="text-3xl font-bold text-red-600">
              {emailsUsed.toLocaleString("pt-BR")}
            </Text>
            <Text className="text-gray-400 text-xs mt-1">E-mails enviados</Text>
          </View>

          <View className="w-px bg-gray-100 mx-3" />

          <View className="items-center flex-1">
            <Text className="text-3xl font-bold text-gray-800">
              {emailsRemaining.toLocaleString("pt-BR")}
            </Text>
            <Text className="text-gray-400 text-xs mt-1">Disponíveis</Text>
          </View>

          <View className="w-px bg-gray-100 mx-3" />

          <View className="items-center flex-1">
            <Text className="text-3xl font-bold text-gray-800">
              {planLimit.toLocaleString("pt-BR")}
            </Text>
            <Text className="text-gray-400 text-xs mt-1">Limite do plano</Text>
          </View>
        </View>

        {/* Barra de progresso */}
        <View className="mt-1">
          <View className="flex-row justify-between mb-1">
            <Text className="text-xs text-gray-400">Utilização</Text>
            <Text className="text-xs font-semibold text-red-600">
              {usagePercent}%
            </Text>
          </View>
          <View className="w-full h-3 bg-gray-100 rounded-full overflow-hidden">
            <View
              className="h-3 rounded-full bg-red-500"
              style={{ width: `${usagePercent}%` }}
            />
          </View>
        </View>
      </View>
    </>
  );
}
