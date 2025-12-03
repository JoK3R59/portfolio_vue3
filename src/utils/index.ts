// Utility function to calculate age based on year of birth
export function calculateAge(yearOfBirth: number): number {
  const currentYear = new Date().getFullYear();
  return currentYear - yearOfBirth;
}