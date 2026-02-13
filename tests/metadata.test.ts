import { describe, it, expect } from 'vitest'
import { TokenMetadata } from '../src/token/metadata'

describe('TokenMetadata', () => {
  it('should build a valid metadata object', () => {
    const metadata = new TokenMetadata()
      .setName('blabla213')
      .setSymbol('BLABLA123')
      .setDescription('blabla1231231')
      .setImage('https://example.com/image.png')
      .setExternalUrl('https://example.com')
      .build()

    expect(metadata.name).toBe('blabla213')
    expect(metadata.symbol).toBe('BLABLA123')
  })

  it('should throw an error for invalid metadata', () => {
    const metadata = new TokenMetadata()
    expect(() => metadata.build()).toThrow('Token name and symbol are required')
  })

  it('should serialize metadata to JSON', () => {
    const metadata = new TokenMetadata()
      .setName('blabla213')
      .setSymbol('BLABLA123')
      .setDescription('blabla1231231')
      .setImage('https://example.com/image.png')
      .toJSON()

    expect(metadata).toContain('blabla213')
  })
})
