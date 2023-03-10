import { BigNumber } from 'ethers'
import { HexString } from './wagmiTypes'

export interface TokenProviderProps {
  children?: React.ReactNode
}

export interface TokenReturnTypes {
  tokenAddress?: HexString
  tokenSettings?: [string, string, BigNumber]
}
