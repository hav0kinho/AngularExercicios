import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appMyIf]'
})
export class MyifDirective {
  /*
    Diretivas estruturais são diretivas que podem modificar a estrutura do HTML do componente.
    Elas podem ser chamadas tanto em uma tag HTML normal, utilizando o * (ex: *appMyIf) ou em um <ng-template> (sem utilizar o *),
    que é oque é feito no final das contas pelo angular, já que ele converte os elementos com diretivas estruturais
    em <ng-template>!

    Para realização de uma diretiva estrutural é necessário injetar duas dependências no construtor, sendo elas:

    TemplateRef -> Responsável por dizer oque o elemento é, pegando o elemento que está usando a Diretiva, no exemplo, uma <div>.

    ViewContainerref -> Responsável por algumas funcionalidades e administração da View/Template que funciona, entre aspas,
    como uma container/caixa, podendo ter vários elementos.

    A injeção de dependência pode ser vista abaixo:
  */
  constructor(private templateRef: TemplateRef<any>, private viewContainerRef: ViewContainerRef) { }

  /*
    Com isso agora podemos criar um @Input, que será usado para representar a diretiva em qualquer elemento HTML.
    Esse Input deve ser uma função com um parâmetro, que será passado pela diretiva.

    @Input() appMyIf(condition: boolean){
      //logica
    }

    Como queremos que a lógica da diretiva seja feita toda vez que o valor passado para ela mudar (assim como é feito
    no *ngIf), precisamos criar uma função setter para a propriedade, fazendo isso da seguinte forma:

    @Input() set appMyIf(condition: boolean){
      //logica
    }

    Perfeito, mas qual é a lógica que deve ser feita? Temos que verificar a condição passada, se ela for verdadeira,
    a função deve renderizar o HTML, caso não, não deve renderizar nada. Para isso, temos que utilizar o método
    createEmbeddedView para renderizar o conteúdo do templateRef ou não, podemos fazer isso com o código completo
    abaixo:
  */
  @Input() set appMyIf(condition: boolean) { // Declarei um Input que executa uma função toda vez que ela muda
    if (condition) {
      this.viewContainerRef.createEmbeddedView(this.templateRef); // Se a condição é favorecida, renderiza o template
    } else {
      this.viewContainerRef.clear(); // Se não, apenas limpa o container
    }
  }

}
