import {
    createContext,
    useCallback,
    useContext,
    useState,
    type ReactNode,
} from "react";
import { Modal, Text, TouchableOpacity, View } from "react-native";

interface AlertButton {
  text?: string;
  onPress?: () => void;
  style?: "default" | "cancel" | "destructive";
}

interface AlertState {
  visible: boolean;
  title: string;
  message?: string;
  buttons: AlertButton[];
}

interface AlertContextType {
  alert: (title: string, message?: string, buttons?: AlertButton[]) => void;
}

const AlertContext = createContext<AlertContextType | null>(null);

export function AlertProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<AlertState>({
    visible: false,
    title: "",
    message: undefined,
    buttons: [],
  });

  const alert = useCallback(
    (title: string, message?: string, buttons?: AlertButton[]) => {
      setState({
        visible: true,
        title,
        message,
        buttons: buttons?.length ? buttons : [{ text: "OK" }],
      });
    },
    []
  );

  function handlePress(btn: AlertButton) {
    setState((s) => ({ ...s, visible: false }));
    btn.onPress?.();
  }

  return (
    <AlertContext.Provider value={{ alert }}>
      {children}
      <Modal
        transparent
        animationType="fade"
        visible={state.visible}
        onRequestClose={() => setState((s) => ({ ...s, visible: false }))}
      >
        <View className="flex-1 bg-black/50 items-center justify-center px-8">
          <View className="w-full bg-white rounded-3xl overflow-hidden shadow-xl">
            {/* Título */}
            <View className="px-6 pt-6 pb-2">
              <Text className="text-gray-900 text-lg font-bold text-center">
                {state.title}
              </Text>
              {state.message && (
                <Text className="text-gray-500 text-sm text-center mt-2">
                  {state.message}
                </Text>
              )}
            </View>

            {/* Divisor */}
            <View className="h-px bg-gray-100 mt-4" />

            {/* Botões */}
            <View
              className={`flex-row ${state.buttons.length > 1 ? "divide-x divide-gray-100" : ""}`}
            >
              {state.buttons.map((btn, i) => (
                <TouchableOpacity
                  key={i}
                  className="flex-1 py-4 items-center"
                  onPress={() => handlePress(btn)}
                  activeOpacity={0.7}
                >
                  <Text
                    className={`text-base font-semibold ${
                      btn.style === "destructive"
                        ? "text-red-600"
                        : btn.style === "cancel"
                          ? "text-gray-400"
                          : "text-red-600"
                    }`}
                  >
                    {btn.text ?? "OK"}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>
        </View>
      </Modal>
    </AlertContext.Provider>
  );
}

export function useAlert() {
  const ctx = useContext(AlertContext);
  if (!ctx) throw new Error("useAlert must be used within AlertProvider");
  return ctx.alert;
}
