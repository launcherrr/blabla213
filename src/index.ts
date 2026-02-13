import { TokenInfoService } from './services/token-info'
import { Logger } from './utils/logger'
import { NETWORK_ENDPOINTS } from './token/constants'
import { MINT_ADDRESS, TOKEN_NAME, TOKEN_SYMBOL } from './token/config'

if (require.main === module) {
  const rpcUrl = NETWORK_ENDPOINTS['mainnet-beta']
  const tokenInfoService = new TokenInfoService(rpcUrl)

  Logger.info(`Welcome to the ${TOKEN_NAME} (${TOKEN_SYMBOL}) token module!`)
  Logger.info(`Mint Address: ${MINT_ADDRESS}`)

  // Placeholder for additional startup logic
}

export * from './token/metadata'
export * from './token/config'
export * from './token/constants'
export * from './services/token-info'
export * from './services/monitor'
export * from './utils/validator'
export * from './utils/formatter'
export * from './utils/logger'
