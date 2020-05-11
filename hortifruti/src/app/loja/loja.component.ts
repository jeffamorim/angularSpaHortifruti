import { Component, OnInit } from '@angular/core';
import { ProdutoService } from './../service/produto.service';
import { Produto } from '../model/Produto'


@Component({
  selector: 'app-loja',
  templateUrl: './loja.component.html',
  styleUrls: ['./loja.component.css']
})
export class LojaComponent implements OnInit {

  key = 'data';
  reverse = true;

  listaProdutos: Produto[]

  produto: Produto = new Produto()
  id:number;

  constructor(private produtosService: ProdutoService) { }

  ngOnInit() {
    this.findAllProduto()
  }

  findAllProduto(){
    this.produtosService.getAllProduto().subscribe((resp: Produto[])=>{
      this.listaProdutos= resp
    })
  }

  findById(id: number){
    this.produtosService.getByIdProduto(id).subscribe((resp: Produto)=>{
      this.produto= resp
    })
  }

  publicar(){
    this.produtosService.postProduto(this.produto).subscribe((resp: Produto)=>{
      this.produto= resp;
      this.produto = new Produto();
      this.findAllProduto()
    })
  }

}
