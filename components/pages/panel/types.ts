export interface MenuItem {
  label: string;
  icon: string;
}

export const MENU_ITEMS: MenuItem[] = [
  { label: "Templates", icon: "📄" },
  { label: "Destinatários", icon: "👥" },
  { label: "Perfil", icon: "👤" },
  { label: "Configurações", icon: "⚙️" },
];

// Mock data — substitua por dados reais futuramente
export const USER_NAME = "Caleb Porto";
export const USER_PLAN = "Plano Profissional";
export const PLAN_LIMIT = 5000;
export const EMAILS_USED = 3240;
