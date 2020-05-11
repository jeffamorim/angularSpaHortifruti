import { Component, OnInit } from '@angular/core';
import { ProdutoService } from '../service/produto.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Produto } from '../model/Produto';

@Component({
  selector: 'app-deletar',
  templateUrl: './deletar.component.html',
  styleUrls: ['./deletar.component.css']
})
export class DeletarComponent implements OnInit {

  produto = new Produto()

  constructor(private produtosService: ProdutoService, private router: Router, private route: ActivatedRoute ) { }

  ngOnInit() {
    let id:number = this.route.snapshot.params["id"];
      this.findById(id)
  }

  findById(id:number){
    this.produtosService.getByIdProduto(id).subscribe((resp: Produto)=>{
      this.produto= resp
    })
  }

  btnSim(){
    this.produtosService.delete(this.produto.id).subscribe(()=>{
      this.router.navigate(['/loja']);
    })
  }

  btnNao(){
    this.router.navigate(['/loja']);
  }

}
