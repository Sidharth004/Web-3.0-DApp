import React,{useEffect , useState } from 'react';
import { ethers } from 'ethers';

import { contractABI, contractAddress } from '../utils/constants';

export const TransactionContext = React.createContext();
{/*using metamask we are getting access to the ethereum object , to get  it:*/}
const { ethereum } = window;

{/*to fetch ehtereum contract :-*/}
const getEthereumContract = () => {
    const provider =new ethers.providers.Web3Provider(ethereum);{/*//passing the ethereum object*/}
    const signer = provider.getSigner();
    const transactionContract = new ethers.Contract(contractAddress , contractABI , signer);//needed to fetch our contract

    console.log({
        provider,
        signer,
        transactionContract
    });
}

{/*//to call the above const*/}
export const TransactionProvider = ({ children }) => {
    const [currentAccount, setCurrentAccount] = useState()



    const checkIfWalletIsConnected =async () =>{
     try{
        if(!ethereum) return alert("Please install metmask");
     
        const accounts=await ethereum.request({method: 'eth_accounts'});

        if(accounts.length){
            setCurrentAccount(accounts[0]);
        }else{
            console.log("No accounts found");
         }

     }catch(error){
        throw new Error("No ethereum object.")

     }
     
    }

    const connectWallet = async () => {
        try {
          if(!ethereum) return alert("Please install metamask"); 
          
          const accounts = await ethereum.request({ method: 'eth_requestAccounts'});
          {/* state */}
          setCurrentAccount(accounts[0]);
        } catch (error) {
            console.log(error);

            throw new Error("No ethereum object.")


        }
    }
    useEffect(() => {
      checkIfWalletIsConnected();  
    }, []);
    
    return(
        <TransactionContext.Provider value={{connectWallet ,currentAccount }}>
            {children}
        </TransactionContext.Provider>
    );
}