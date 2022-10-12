import { Web3Service } from 'src/app/services/contract/web3.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-votacion',
  templateUrl: './votacion.component.html',
  styleUrls: ['./votacion.component.css']
})
export class VotacionComponent implements OnInit {


  constructor(private web3Service: Web3Service) { }

  async ngOnInit() {
  }

  public async conectarWallet() {
    const result = await this.web3Service.connectAccount();
    console.log(result)
  }

}
