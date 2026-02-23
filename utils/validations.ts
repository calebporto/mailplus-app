export function validateEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
}

export function validatePassword(password: string): {
  valid: boolean;
  errors: string[];
} {
  const errors: string[] = [];
  if (password.length < 8) errors.push("Mínimo de 8 caracteres");
  if (!/[a-z]/.test(password)) errors.push("Ao menos uma letra minúscula");
  if (!/[A-Z]/.test(password)) errors.push("Ao menos uma letra maiúscula");
  if (!/[0-9]/.test(password)) errors.push("Ao menos um número");
  if (!/[^a-zA-Z0-9]/.test(password)) errors.push("Ao menos um caractere especial");
  return { valid: errors.length === 0, errors };
}