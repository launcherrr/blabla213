import { EventEmitter } from 'events'

/**
 * TokenMonitor class to observe token events.
 */
export class TokenMonitor extends EventEmitter {
  private interval: NodeJS.Timeout | null = null
  private pollingInterval: number

  constructor(pollingInterval = 10000) {
    super()
    this.pollingInterval = pollingInterval
  }

  start(): void {
    if (this.interval) return
    this.interval = setInterval(() => {
      // Placeholder for polling logic
      this.emit('priceChange', { price: Math.random() * 100 })
    }, this.pollingInterval)
  }

  stop(): void {
    if (this.interval) {
      clearInterval(this.interval)
      this.interval = null
    }
  }

  onPriceChange(callback: (data: any) => void): void {
    this.on('priceChange', callback)
  }

  onNewHolder(callback: (data: any) => void): void {
    this.on('newHolder', callback)
  }

  getStatus(): string {
    return this.interval ? 'Running' : 'Stopped'
  }
}
