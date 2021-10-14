import { CepService } from './../../services/cep.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-api',
  templateUrl: './api.page.html',
  styleUrls: ['./api.page.scss'],
})
export class ApiPage implements OnInit {
  cep: string = "91530034"
  resultado : any = {cep:'', logradouro: ''}
  constructor(private cepService: CepService) { }

  ngOnInit() {
  }

  consultarCEP() {
    this.cepService.obterEndereco(this.cep).then((json) => {
      this.resultado = json
    }).catch((err) => {
      console.log(err)
    })
  }

}
