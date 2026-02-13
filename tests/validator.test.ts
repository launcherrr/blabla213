import { describe, it, expect } from 'vitest'
import { isValidSolanaAddress, isValidTokenAmount, sanitizeInput, isValidUrl } from '../src/utils/validator'

describe('Validator Functions', () => {
  it('should validate a correct Solana address', () => {
    expect(isValidSolanaAddress('HCBqJDAcAMHP8bYCF6ds3KcvfSkQJnRVCcmdUEvmd6Cx')).toBe(true)
  })

  it('should invalidate an incorrect Solana address', () => {
    expect(isValidSolanaAddress('InvalidAddress123')).toBe(false)
  })

  it('should validate a correct token amount', () => {
    expect(isValidTokenAmount(1000)).toBe(true)
  })

  it('should invalidate a negative token amount', () => {
    expect(isValidTokenAmount(-1000)).toBe(false)
  })

  it('should sanitize input correctly', () => {
    expect(sanitizeInput('<script>alert(1)</script>')).toBe('scriptalert(1)/script')
  })

  it('should validate a correct URL', () => {
    expect(isValidUrl('https://solana.com')).toBe(true)
  })

  it('should invalidate an incorrect URL', () => {
    expect(isValidUrl('ftp://solana.com')).toBe(false)
  })
})
