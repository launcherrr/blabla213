/**
 * Validates if the given string is a valid Solana address.
 * @param address - The address to validate.
 * @returns True if valid, otherwise false.
 */
export function isValidSolanaAddress(address: string): boolean {
  return /^[1-9A-HJ-NP-Za-km-z]{32,44}$/.test(address)
}

/**
 * Validates if the given amount is a valid token amount.
 * @param amount - The amount to validate.
 * @returns True if valid, otherwise false.
 */
export function isValidTokenAmount(amount: number): boolean {
  return amount >= 0
}

/**
 * Validates the token metadata.
 * @param metadata - The metadata to validate.
 * @returns True if valid, otherwise false.
 */
export function validateTokenMetadata(metadata: any): boolean {
  return metadata.name && metadata.symbol
}

/**
 * Sanitizes the input by escaping harmful characters.
 * @param input - The input to sanitize.
 * @returns The sanitized input.
 */
export function sanitizeInput(input: string): string {
  return input.replace(/[<>"'&]/g, '')
}

/**
 * Validates if the given URL is valid.
 * @param url - The URL to validate.
 * @returns True if valid, otherwise false.
 */
export function isValidUrl(url: string): boolean {
  return /^https?:\/\//.test(url)
}
