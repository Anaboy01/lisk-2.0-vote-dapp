import { ethers } from "ethers";
import address from '@/artifacts/contractAddress.json'
import abi from '@/artifacts/contracts/DappVotes.sol/DappVotes.json'


const ContractAddress = address.address
const ContractAbi = abi.abi

let ethereum: any
let tx: any


if (typeof window !== 'undefined'){
    ethereum = (window as any)
}