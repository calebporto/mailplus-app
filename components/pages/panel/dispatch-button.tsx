import { PrimaryButton } from "@/components/ui/primary-button";
import { useRouter } from "expo-router";

export function DispatchButton() {
  const router = useRouter();

  return (
    <PrimaryButton
      label="Disparar e-mails"
      onPress={() => router.push("/(tabs)/disparar")}
      className="mb-6"
    />
  );
}
