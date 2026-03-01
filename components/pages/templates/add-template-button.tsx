import { PrimaryButton } from "@/components/ui/primary-button";

interface AddTemplateButtonProps {
  onPress?: () => void;
}

export function AddTemplateButton({ onPress }: AddTemplateButtonProps) {
  return (
    <PrimaryButton
      label="Adicionar template"
      icon="＋"
      onPress={onPress}
      className="mb-6"
    />
  );
}
