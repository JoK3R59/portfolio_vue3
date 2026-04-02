// Utility function to calculate age based on year of birth
export function calculateAge(
  yearOfBirth: number
): number {
  const currentYear = new Date().getFullYear();
  return currentYear - yearOfBirth;
}

// Converts a numeric month and year into a readable French date string. Example: ("06", "2022") → "Juin 2022"
export function formatDateFR(
  month: string,
  year: string
): string {
  const months = [
    'Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin',
    'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'
  ]

  const monthIndex = parseInt(month, 10) - 1

  if (monthIndex < 0 || monthIndex > 11 || !year) {
    return 'Date invalide'
  }

  return `${months[monthIndex]} ${year}`
}

// Calculates the duration between two month/year pairs (inclusive). Example: 01/2017 → 03/2017 = 3 months
export function calculateDuration(
  startMonth: string,
  startYear: string,
  endMonth: string,
  endYear: string
): string {
  const startM = parseInt(startMonth, 10)
  const startY = parseInt(startYear, 10)
  const endM = parseInt(endMonth, 10)
  const endY = parseInt(endYear, 10)

  if (
    isNaN(startM) || isNaN(startY) ||
    isNaN(endM) || isNaN(endY) ||
    startM < 1 || startM > 12 ||
    endM < 1 || endM > 12
  ) {
    return 'Invalid date'
  }

  const totalMonths =
    (endY - startY) * 12 +
    (endM - startM) +
    1

  if (totalMonths <= 0) {
    return 'Invalid date range'
  }

  const years = Math.floor(totalMonths / 12)
  const months = totalMonths % 12

  return formatDurationFR(years, months)
}

// Formats a duration into a readable French string.
function formatDurationFR(
  years: number,
  months: number
): string {
  if (years === 0) {
    return `${months} MOIS`
  }

  if (months === 0) {
    return `${years} AN${years > 1 ? 'S' : ''}`
  }

  return `${years} AN${years > 1 ? 'S' : ''} et ${months} MOIS`
}