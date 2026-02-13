/**
 * Formats a SOL amount to a string with 2 decimal places.
 * @param amount - The amount in SOL.
 * @returns The formatted string.
 */
export function formatSOL(amount: number): string {
  return `${amount.toFixed(2)} SOL`
}

/**
 * Formats a lamport amount to SOL.
 * @param lamports - The amount in lamports.
 * @returns The formatted SOL string.
 */
export function formatLamports(lamports: number): string {
  return formatSOL(lamports / Math.pow(10, 9))
}

/**
 * Shortens a Solana address for display.
 * @param address - The full address.
 * @returns The shortened address.
 */
export function shortenAddress(address: string): string {
  return `${address.slice(0, 4)}...${address.slice(-4)}`
}

/**
 * Formats a market cap value.
 * @param cap - The market cap value.
 * @returns The formatted market cap.
 */
export function formatMarketCap(cap: number): string {
  return `$${cap.toLocaleString()}`
}

/**
 * Formats a percent change value.
 * @param change - The percent change.
 * @returns The formatted percent change.
 */
export function formatPercentChange(change: number): string {
  return `${change.toFixed(2)}%`
}

/**
 * Formats a timestamp to a readable date string.
 * @param timestamp - The timestamp to format.
 * @returns The formatted date string.
 */
export function formatTimestamp(timestamp: number): string {
  return new Date(timestamp).toLocaleString()
}

/**
 * Formats a number with commas as thousands separators.
 * @param number - The number to format.
 * @returns The formatted number string.
 */
export function formatNumber(number: number): string {
  return number.toLocaleString()
}
