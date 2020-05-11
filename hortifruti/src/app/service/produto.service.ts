import { Produto } from '../model/Produto'
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'


@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  constructor(private http: HttpClient) { }

  getAllProduto(){
    return this.http.get('http://31.220.57.121:9080/produtos')
  }

  getByIdProduto(id:number){
    return this.http.get(`http://31.220.57.121:9080/produtos/${id}`)
  }

  postProduto(Produto: Produto){
    return this.http.post('http://31.220.57.121:9080/produtos/', Produto)
  }

  putProduto(Produto: Produto){
    return this.http.put('http://31.220.57.121:9080/produtos/', Produto)
  }

  delete(id: number){
    return this.http.delete(`http://31.220.57.121:9080/produtos/${id}`)
  }

}
