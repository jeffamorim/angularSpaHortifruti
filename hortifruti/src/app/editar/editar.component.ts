import { Component, OnInit } from '@angular/core';
import { ProdutoService } from './../service/produto.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Produto } from '../model/Produto'

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {

  produto: Produto = new Produto()
  id:number;


  constructor(private produtosService: ProdutoService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params["id"];
    this.findById(this.id);
  }

  findById(id:number){
    this.produtosService.getByIdProduto(id).subscribe((resp: Produto)=>{
      this.produto=resp
    
    }, err => {
      console.log(`Erro cod: ${err.status}`)
    });
  }

  atualizar(){
  this.produtosService.putProduto(this.produto).subscribe((resp: Produto)=>{
    this.produto= resp;
    this.router.navigate(['/loja'])
  })
}

}
