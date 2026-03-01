export interface MenuItem {
  label: string;
  icon: string;
  route?: string;
}

export const MENU_ITEMS: MenuItem[] = [
  { label: "Templates", icon: "📄", route: "/(tabs)/templates" },
  { label: "Destinatários", icon: "👥", route: "/(tabs)/destinatarios" },
  { label: "Perfil", icon: "👤" },
  { label: "Configurações", icon: "⚙️" },
];

// Mock data — substitua por dados reais futuramente
export const USER_NAME = "Caleb Porto";
export const USER_PLAN = "Plano Profissional";
export const PLAN_LIMIT = 5000;
export const EMAILS_USED = 3240;
