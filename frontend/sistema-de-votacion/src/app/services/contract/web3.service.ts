
import {Injectable} from '@angular/core';
import { Subject } from 'rxjs';
import Web3 from 'web3';
import Web3Modal from "web3modal";
import WalletConnectProvider from "@walletconnect/web3-provider";
import { provider } from 'web3-core';
//import * as contractABI from '../../../../../../smart-contract/build/contracts/Election.json';

@Injectable({
  providedIn: 'root'
})
export class Web3Service {
  public accountsObservable = new Subject<string[]>();
  web3Modal;
  web3js:  any;
  provider: provider | undefined | any;
  accounts: string[] | undefined;
  balance: string | undefined;

  constructor() {
    const providerOptions = {
      injected: {
        display: {
          logo: 'https://upload.wikimedia.org/wikipedia/commons/3/36/MetaMask_Fox.svg',
          name: 'metamask',
          description: "Connect with the provider in your Browser"
        },
        package: null
      },
      walletconnect: {
        package: WalletConnectProvider, // required | aqui importamos el paquete que nos ayudara a usar soportar distintas wallets
        options: {
          infuraId: 'env', // cambia esto con tu apikey de infura
          description: 'Scan the qr code and sign in', // Puedes camnbiar los textos descriptivos en la seccion description
          qrcodeModalOptions: {
            mobileLinks: [
              'rainbow',
              'metamask',
              'argent',
              'trust',
              'imtoken',
              'pillar'
            ]
          }
        }
      }
    };

    this.web3Modal = new Web3Modal({
      network: "Ganache", // puedes cambiar a una red de pruebas o etc
      cacheProvider: false, // optional
      providerOptions, // required
      disableInjectedProvider: false,
      theme: {
        background: "rgb(39, 49, 56)",
        main: "rgb(199, 199, 199)",
        secondary: "rgb(136, 136, 136)",
        border: "rgba(195, 195, 195, 0.14)",
        hover: "rgb(16, 26, 32)"
      }
    });
  }

  public async connectAccount(): Promise<provider | undefined> {
    try {
      this.provider = await this.web3Modal.connect(); // set provider
      if (this.provider) {
        this.web3js = new Web3(this.provider);
      } // create web3 instance
    } catch (error) {
      console.log(error)
    }
    return this.web3js;
  }

  public async connectContract(): Promise<any>{
    throw new Error('Method not implemented.');
  }

  public async payFee(direccionWallet: string): Promise<string | null>{
    throw new Error('Method not implemented.');
  }

  public async agregarCandidato(direccionWallet: string, nombre: string, contractOwner: string): Promise<any>{
    throw new Error('Method not implemented.');
  }

  public async getContractOwner(): Promise<any>{
    throw new Error('Method not implemented.');
  }

  public async consultarCantidadDeCandidatos(){
    throw new Error('Method not implemented.');
  }


  public async registrarVotante(direccionWallet: string, contractOwner: string): Promise<any>{
    throw new Error('Method not implemented.');
  }


  public async iniciarVotacion(owner: string): Promise<void>{
    throw new Error('Method not implemented.');
  }

  public async finalizarVotacion(owner: string): Promise<void>{
    throw new Error('Method not implemented.');
  }

  public async consultarEstadoVotacion(): Promise<any>{
    throw new Error('Method not implemented.');
  }

  public async anunciarGanador(owner: string): Promise<any>{
    throw new Error('Method not implemented.');
  }

  public async votar(direccionCandidato: string, direccionVotante: string): Promise<any>{
    throw new Error('Method not implemented.');
  }


}
