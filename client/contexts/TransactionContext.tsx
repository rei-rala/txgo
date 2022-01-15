import React, { createContext, useEffect, useState } from 'react'
import { Contract, ethers } from 'ethers'
import { ExternalProvider, JsonRpcFetchFunc, Web3Provider } from '@ethersproject/providers'

import { CONTRACT_ABI, CONTRACT_ADDRESS } from '../utils/constants'
import { Loader } from '../components';

let ethereum: any = null;
export const Transactions = createContext({})

declare global {
  interface Window {
    ethereum: ExternalProvider | JsonRpcFetchFunc
  }
}

export const TransactionContext = (props: any) => {
  const [provider, setProvider] = useState<Web3Provider>()
  const [signer, setSigner] = useState<ethers.providers.JsonRpcSigner>()
  const [transactionContract, setTransactionContract] = useState<Contract>()

  useEffect(() => {
    ethereum = window.ethereum
    const newProvider = new ethers.providers.Web3Provider(ethereum)
    const newSigner = newProvider.getSigner()
    const newTransactionContract = new ethers.Contract(CONTRACT_ADDRESS, CONTRACT_ABI, newSigner)

    setProvider(newProvider)
    setSigner(newSigner)
    setTransactionContract(newTransactionContract)
  }, [])

  return (
    <Transactions.Provider
      value={{
        provider,
        signer,
        transactionContract,
      }}>
      {
        ethereum === undefined || transactionContract === undefined
          ? <Loader />
          : props.children
      }
    </Transactions.Provider>
  )
}