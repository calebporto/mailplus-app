export interface Recipient {
  id: string;
  name: string;
  email: string;
}

export const MOCK_RECIPIENTS: Recipient[] = [
  { id: "1",  name: "Ana Lima",          email: "ana.lima@email.com" },
  { id: "2",  name: "Bruno Souza",       email: "bruno.souza@email.com" },
  { id: "3",  name: "Carla Mendes",      email: "carla.mendes@email.com" },
  { id: "4",  name: "Diego Ferreira",    email: "diego.ferreira@email.com" },
  { id: "5",  name: "Elisa Rocha",       email: "elisa.rocha@email.com" },
  { id: "6",  name: "Fábio Alves",       email: "fabio.alves@email.com" },
  { id: "7",  name: "Gabriela Nunes",    email: "gabriela.nunes@email.com" },
  { id: "8",  name: "Henrique Costa",    email: "henrique.costa@email.com" },
  { id: "9",  name: "Isabela Martins",   email: "isabela.martins@email.com" },
  { id: "10", name: "João Batista",      email: "joao.batista@email.com" },
  { id: "11", name: "Karen Oliveira",    email: "karen.oliveira@email.com" },
  { id: "12", name: "Lucas Pereira",     email: "lucas.pereira@email.com" },
  { id: "13", name: "Mariana Castro",    email: "mariana.castro@email.com" },
  { id: "14", name: "Nicolas Teixeira",  email: "nicolas.teixeira@email.com" },
  { id: "15", name: "Olivia Barbosa",    email: "olivia.barbosa@email.com" },
  { id: "16", name: "Pedro Carvalho",    email: "pedro.carvalho@email.com" },
  { id: "17", name: "Quelen Ribeiro",    email: "quelen.ribeiro@email.com" },
  { id: "18", name: "Rafael Gomes",      email: "rafael.gomes@email.com" },
  { id: "19", name: "Sabrina Dias",      email: "sabrina.dias@email.com" },
  { id: "20", name: "Thiago Nascimento", email: "thiago.nascimento@email.com" },
];

export const PAGE_SIZE = 10;
