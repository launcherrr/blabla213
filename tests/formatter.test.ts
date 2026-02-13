import { describe, it, expect } from 'vitest'
import { formatSOL, formatLamports, shortenAddress, formatMarketCap, formatPercentChange, formatTimestamp, formatNumber } from '../src/utils/formatter'

describe('Formatter Functions', () => {
  it('should format SOL correctly', () => {
    expect(formatSOL(10.123456)).toBe('10.12 SOL')
  })

  it('should format lamports to SOL correctly', () => {
    expect(formatLamports(10123456)).toBe('0.01 SOL')
  })

  it('should shorten an address correctly', () => {
    expect(shortenAddress('HCBqJDAcAMHP8bYCF6ds3KcvfSkQJnRVCcmdUEvmd6Cx')).toBe('HCBq...d6Cx')
  })

  it('should format market cap correctly', () => {
    expect(formatMarketCap(1000000)).toBe('$1,000,000')
  })

  it('should format percent change correctly', () => {
    expect(formatPercentChange(12.3456)).toBe('12.35%')
  })

  it('should format timestamp correctly', () => {
    const date = new Date('2023-01-01T00:00:00Z')
    expect(formatTimestamp(date.getTime())).toBe('1/1/2023, 12:00:00 AM')
  })

  it('should format numbers correctly', () => {
    expect(formatNumber(123456789)).toBe('123,456,789')
  })
})
