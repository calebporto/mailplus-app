export interface Template {
  id: string;
  name: string;
  description: string;
  icon: string;
  lastEdited: string;
}

export const MOCK_TEMPLATES: Template[] = [
  {
    id: "1",
    name: "Boas-vindas",
    description: "E-mail de boas-vindas para novos usuários",
    icon: "👋",
    lastEdited: "Hoje",
  },
  {
    id: "2",
    name: "Promoção sazonal",
    description: "Campanha de descontos e ofertas especiais",
    icon: "🎯",
    lastEdited: "Ontem",
  },
  {
    id: "3",
    name: "Newsletter mensal",
    description: "Resumo de novidades e conteúdos do mês",
    icon: "📰",
    lastEdited: "20/02/2026",
  },
  {
    id: "4",
    name: "Recuperação de carrinho",
    description: "Lembrete para usuários com compras abandonadas",
    icon: "🛒",
    lastEdited: "15/02/2026",
  },
  {
    id: "5",
    name: "Confirmação de pedido",
    description: "Notificação automática após compra realizada",
    icon: "✅",
    lastEdited: "10/02/2026",
  },
];
