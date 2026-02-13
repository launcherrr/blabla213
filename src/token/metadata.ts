/**
 * TokenMetadata class for building and managing token metadata.
 */
export class TokenMetadata {
  private name: string
  private symbol: string
  private description: string
  private image: string
  private externalUrl: string

  constructor() {
    this.name = ''
    this.symbol = ''
    this.description = ''
    this.image = ''
    this.externalUrl = ''
  }

  /**
   * Sets the name of the token.
   * @param name - The token name.
   */
  setName(name: string): this {
    this.name = name
    return this
  }

  /**
   * Sets the symbol of the token.
   * @param symbol - The token symbol.
   */
  setSymbol(symbol: string): this {
    this.symbol = symbol
    return this
  }

  /**
   * Sets the description of the token.
   * @param description - The token description.
   */
  setDescription(description: string): this {
    this.description = description
    return this
  }

  /**
   * Sets the image URL of the token.
   * @param image - The token image URL.
   */
  setImage(image: string): this {
    this.image = image
    return this
  }

  /**
   * Sets the external URL of the token.
   * @param url - The token external URL.
   */
  setExternalUrl(url: string): this {
    this.externalUrl = url
    return this
  }

  /**
   * Validates the metadata fields.
   * Throws an error if validation fails.
   */
  validate(): void {
    if (!this.name || !this.symbol) {
      throw new Error('Token name and symbol are required')
    }
    if (!/^https?:\/\//.test(this.image)) {
      throw new Error('Invalid image URL')
    }
    if (this.externalUrl && !/^https?:\/\//.test(this.externalUrl)) {
      throw new Error('Invalid external URL')
    }
  }

  /**
   * Builds the token metadata object.
   * @returns The token metadata object.
   */
  build(): object {
    this.validate()
    return {
      name: this.name,
      symbol: this.symbol,
      description: this.description,
      image: this.image,
      external_url: this.externalUrl,
    }
  }

  /**
   * Converts the metadata to a JSON string.
   * @returns The JSON string.
   */
  toJSON(): string {
    return JSON.stringify(this.build())
  }
}
