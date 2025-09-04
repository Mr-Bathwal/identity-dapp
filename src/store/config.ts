import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export const CONTRACT_KEYS = [
  'UserIdentityRegistry',
  'CertificateManager',
  'OrganizationRegistry',
  'GlobalCredentialAnchor',
  'CrossChainManager',
  'RecognitionManager',
  'VerificationLogger',
] as const

export type ContractKey = typeof CONTRACT_KEYS[number]

type Address = `0x${string}`

interface ConfigState {
  chainId: number
  addresses: Partial<Record<ContractKey, Address>>
  setAddress: (key: ContractKey, addr: string) => void
  setChainId: (id: number) => void
}

export const useConfigStore = create<ConfigState>()(
  persist(
    (set) => ({
      chainId: 11155111, // sepolia default
      addresses: {
        UserIdentityRegistry: '0x0545f18C6F76ed2dCb6E0037D4aAc67F89cF166f' as Address,
        CertificateManager: '0xf89cdAc39eb5deA30216Dcab7a3c5d4C32581F38' as Address,
        OrganizationRegistry: '0x7040B4b606C819663a7530c7e1B37bC02de2AdB6' as Address,
        GlobalCredentialAnchor: '0xc19490dA04e143b390f63799cfC7D1df282384A1' as Address,
        CrossChainManager: '0xc2A8577BD15679868285737C968C622f351ec7cd' as Address,
        RecognitionManager: '0x5B94b8F67561fe1e0B85557D9D1c45c11251778e' as Address,
        VerificationLogger: '0x49BFE3ff46C52857b3dAb20B85F2742F7b017d45' as Address,
      },
      setAddress: (key, addr) =>
        set((s) => ({ addresses: { ...s.addresses, [key]: addr as Address } })),
      setChainId: (id) => set({ chainId: id }),
    }),
    { name: 'identity-dapp-config' }
  )
)

