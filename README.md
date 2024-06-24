# Shopping-list

Este projeto tem como objetivo a aprendizagem sobre front-end com frameworks, criando uma plataforma de lista de compras com registro do produto, histórico, preços, datas e previsões de futuras compras. 

O frontend da aplicação foi desenvolvido com Angular e o backend foi simulado pela implementação de uma API Fake, usando o JSON Server.

## Endereço de Deploy - GitHub Pages

https://rafaelsedor.github.io/DFF-Shopping-list/

-----------------------------------

## Protótipo

https://www.figma.com/proto/zxvSPCILm122sEB4SQA5pS/Shopping-list?page-id=0%3A1&type=design&node-id=1-69&viewport=470%2C601%2C0.6&t=Ww8RP8Afc85JxEsL-1&scaling=min-zoom&starting-point-node-id=1%3A48&mode=design

## Apresentação Assíncrona

https://youtu.be/mmiJWBoYUlg

## Checklist
#### RA1 - Prototipar e projetar interfaces gráficas de usuário, considerando princípios de usabilidade e experiência do usuário.
- [X] ID1: O aluno desenvolveu protótipos de interfaces que demonstram compreensão das diretrizes de usabilidade.
- [x] ID2: O aluno projetou interfaces responsivas que se adaptam a diferentes tamanhos de tela.
#### RA2 - Criar e reutilizar componentes em frameworks frontend, desenvolvendo interfaces modulares, responsivas e estilizadas.
- [x] ID3: O aluno desenvolveu componentes reutilizáveis que são aplicáveis em diferentes contextos da aplicação, garantindo que se adaptem de maneira responsiva em vários tamanhos de tela.
- [x] ID4: O aluno incorporou componentes de frameworks CSS para aprimorar a aparência e funcionalidade da aplicação de maneira consistente.
- [x] ID5: O aluno aplicou diretivas estruturais para renderizar elementos de forma condicional, permitindo a exibição ou ocultação de conteúdo com base em condições dinâmicas.
- [x] ID6: O aluno utilizou diretivas estruturais para repetir elementos de interface de maneira dinâmica, a fim de criar listas, galerias ou outras visualizações baseadas em conjuntos de dados.
- [x] ID7: O aluno aplicou Pipes de maneira eficaz para formatar a apresentação de dados, garantindo que as informações exibidas sejam legíveis, esteticamente agradáveis e atendam aos requisitos de apresentação específicos para cada contexto.
#### RA3 - Sincronizar dados entre a interface gráfica e o modelo de dados, aplicando técnicas de binding para manter a consistência.
- [x] ID8: O aluno demonstrou a compreensão e a aplicação de técnicas de one-way data binding, como Interpolation e Property Binding, para exibir e atualizar dados na interface gráfica de maneira unidirecional.
- [x] ID9: O aluno demonstrou a aplicação de técnicas de event binding para capturar eventos do usuário na interface e interagir com o modelo de dados, mantendo a consistência e a sincronização entre os dois.
- [x] ID10: O aluno implementou a técnica de two-way data binding para criar uma sincronização bidirecional automática entre a interface e o modelo de dados, permitindo uma atualização eficiente dos dados em ambos os lados.
- [x] ID11: O aluno fez uso eficaz de variáveis de template para manipulação dinâmica dos dados na interface gráfica, demonstrando a capacidade de exibir informações de maneira flexível e adaptável.
#### RA4 - Implementar comunicação eficaz entre componentes, utilizando padrões de comunicação e serviços para compartilhar lógica e dados.
- [x] ID12: O aluno criou comunicação entre componentes não relacionados hierarquivamente por meio de serviços através do mecanismo de injeção de dependência, compartilhando lógica ou informações.
- [x] ID13: O aluno utilizou efetivamente as diretivas @Input e @Output para estabelecer uma comunicanção em uma hierarquia de componentes, passando e recebendo dados entre componentes de maneira segura e consistente.
#### RA5 - Criar interfaces de navegação intuitivas e responsivas, implementando roteamento em aplicações de página única (SPA).
- [x] ID14: O aluno configurou rotas para diferentes partes da aplicação, permitindo a navegação entre páginas distintas.
- [x] ID15: O aluno demonstrou a habilidade de passar dados entre componentes que representam diferentes telas usando parâmetros de rotas, garantindo uma troca eficiente de informações.
- [x] ID16: O aluno criou uma estrutura de navegação aninhada para representar hierarquias de conteúdo.
- [x] ID17: O aluno aplicou guardas de rotas para controlar o acesso a rotas específicas da aplicação, assegurando que somente usuários autorizados possam acessar determinadas partes da interface.
#### RA6 - Realizar requisições assíncronas para serviços web, compreendendo os protocolos e formatos de troca de dados, tratando respostas e erros.
- [x] ID18: O aluno fez requisições assíncronas a uma API pública, compreendendo os protocolos HTTP e formatos de dados para no mínimo a operação GET.
- [x] ID19: O aluno fez requisições assíncronas a uma API simulada, compreendendo os protocolos HTTP e formatos de dados para as operações GET, POST, PUT, PATCH e DELETE.
- [x] ID20: O aluno tratou respostas de sucesso e erros das requisições assíncronas de forma apropriada.
- [x] ID21: O aluno aplicou validações de entrada nos campos do formulário, utilizando técnicas como expressões regulares (REGEX), e apresentou mensagens de erro claras e informativas para auxiliar os usuários a corrigir entradas incorretas.
- [x] ID22: O aluno desabilitou adequadamente o botão de submit enquanto o formulário continha campos inválidos, promovendo uma experiência de usuário mais intuitiva e evitando a submissão de dados incorretos.
- [x] ID23: O aluno demonstrou a capacidade de utilizar Promises para tratar respostas assíncronas.
- [x] ID24: O aluno demonstrou a capacidade de utilizar Observables para tratar respostas assíncronas.
#### RA7 - Gerenciar o código-fonte de maneira eficiente, implementar boas práticas de controle de versão e colaborar em projetos de desenvolvimento.
- [x] ID25: O aluno criou um repositório no GitHub utilizando a estrutura do Gitflow, estabelecendo as branches "main" e "develop", demonstrando proficiência em boas práticas de controle de versão e organização do projeto.
- [x] ID26: O aluno colaborou de maneira efetiva com outros membros do projeto, realizando fusões (merges) e resolução de conflitos de código de forma adequada e alinhada às práticas de desenvolvimento colaborativo.
- [x] ID27: O aluno planejou, configurou e executou o processo de build da aplicação, preparando-a para produção e realizou o deploy em um ambiente de hospedagem, tornando-a prontamente acessível para uso.


### RA1 - Prototipar e projetar interfaces gráficas de usuário

#### ID1: Protótipos de interfaces com diretrizes de usabilidade
**Explicação**: Ao adicionar labels e placeholders descritivos em formulários, estamos seguindo diretrizes de usabilidade que melhoram a acessibilidade, permitindo que os usuários compreendam melhor os campos e ações necessárias.
**Exemplo**:
```html
<form>
  <label for="productName">Nome do Produto</label>
  <input id="productName" name="productName" placeholder="Digite o nome do produto" />
</form>
```

#### ID2: Interfaces responsivas
**Explicação**: Utilizar media queries garante que a interface se adapte a diferentes tamanhos de tela, proporcionando uma experiência de usuário consistente em dispositivos móveis e desktops.
**Exemplo**:
```css
@media (max-width: 600px) {
  .container {
    flex-direction: column;
  }
}
```

### RA2 - Criar e reutilizar componentes em frameworks frontend

#### ID3: Componentes reutilizáveis e responsivos
**Explicação**: Desenvolver componentes modulares e reutilizáveis permite que sejam usados em diferentes partes da aplicação, garantindo responsividade e eficiência no desenvolvimento.
**Exemplo**:
```typescript
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent {
  @Input() product: any;
}
```

#### ID4: Componentes de frameworks CSS
**Explicação**: Utilizar frameworks CSS, como Bootstrap, ajuda a estilizar componentes de forma consistente e profissional, aprimorando a aparência e a funcionalidade da aplicação.
**Exemplo**:
```html
<div class="card">
  <div class="card-body">
    <h5 class="card-title">{{ product.name }}</h5>
    <p class="card-text">{{ product.description }}</p>
  </div>
</div>
```

#### ID5: Diretivas estruturais para renderização condicional
**Explicação**: As diretivas estruturais como `*ngIf` permitem exibir ou ocultar elementos com base em condições dinâmicas, tornando a interface mais interativa e dinâmica.
**Exemplo**:
```html
<div *ngIf="product.inStock">Em Estoque</div>
```

#### ID6: Diretivas estruturais para repetição de elementos
**Explicação**: A diretiva `*ngFor` facilita a criação de listas dinâmicas a partir de conjuntos de dados, como exibir produtos em um catálogo.
**Exemplo**:
```html
<ul>
  <li *ngFor="let product of products">{{ product.name }}</li>
</ul>
```

#### ID7: Aplicação de Pipes para formatação de dados
**Explicação**: Os Pipes permitem formatar dados de forma consistente e estética, como converter preços para o formato de moeda, melhorando a legibilidade.
**Exemplo**:
```html
<p>Preço: {{ product.price | currency }}</p>
```

### RA3 - Sincronizar dados entre a interface gráfica e o modelo de dados

#### ID8: One-way data binding
**Explicação**: A interpolação de dados (`{{ }}`) exibe informações na interface a partir do modelo de dados de forma unidirecional, garantindo a consistência da apresentação.
**Exemplo**:
```html
<h1>{{ title }}</h1>
```

#### ID9: Event binding
**Explicação**: O event binding (`(evento)`) captura eventos do usuário, como cliques, para interagir com a lógica da aplicação, atualizando o modelo de dados conforme necessário.
**Exemplo**:
```html
<button (click)="addToCart(product)">Adicionar ao Carrinho</button>
```

#### ID10: Two-way data binding
**Explicação**: A ligação bidirecional de dados (`[(ngModel)]`) sincroniza automaticamente a interface e o modelo de dados, permitindo atualizações em ambos os lados simultaneamente.
**Exemplo**:
```html
<input [(ngModel)]="product.name" />
```

#### ID11: Variáveis de template
**Explicação**: As variáveis de template (`#var`) permitem manipular dados dinamicamente na interface, facilitando a exibição e interação flexível de informações.
**Exemplo**:
```html
<input #productNameInput />
<button (click)="logName(productNameInput.value)">Log Nome</button>
```

### RA4 - Implementar comunicação eficaz entre componentes

#### ID12: Comunicação entre componentes não relacionados
**Explicação**: Os serviços compartilhados permitem que componentes não relacionados hierarquicamente comuniquem dados e lógica, facilitando a reutilização de código.
**Exemplo**:
```typescript
@Injectable({ providedIn: 'root' })
export class ProductService {
  private products = new BehaviorSubject<Product[]>([]);
  products$ = this.products.asObservable();

  addProduct(product: Product) {
    this.products.next([...this.products.value, product]);
  }
}
```

#### ID13: Uso de @Input e @Output
**Explicação**: As diretivas `@Input` e `@Output` permitem comunicação segura entre componentes pai e filho, passando e recebendo dados de maneira eficiente.
**Exemplo**:
```typescript
@Component({
  selector: 'app-parent',
  template: `<app-child [childData]="parentData" (notify)="onNotify()"></app-child>`
})
export class ParentComponent {
  parentData = "Data from Parent";
  onNotify() {
    console.log("Notification from Child");
  }
}

@Component({
  selector: 'app-child',
  template: `<button (click)="notifyParent()">Notify Parent</button>`
})
export class ChildComponent {
  @Input() childData: string;
  @Output() notify = new EventEmitter();
  notifyParent() {
    this.notify.emit();
  }
}
```

### RA5 - Criar interfaces de navegação intuitivas e responsivas

#### ID14: Configuração de rotas
**Explicação**: Definir rotas no módulo de roteamento facilita a navegação entre diferentes componentes da aplicação, criando uma experiência de usuário fluida.
**Exemplo**:
```typescript
const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'product/:id', component: ProductDetailComponent }
];
```

#### ID15: Passagem de dados entre componentes via rotas
**Explicação**: O uso de parâmetros de rota permite passar dados entre componentes, melhorando a interação e a troca de informações na aplicação.
**Exemplo**:
```typescript
// No componente ProductDetailComponent
this.route.paramMap.subscribe(params => {
  this.productId = params.get('id');
});
```

#### ID16: Estrutura de navegação aninhada
**Explicação**: Configurar rotas aninhadas ajuda a representar hierarquias de conteúdo na navegação, mantendo a organização e a clareza na interface.
**Exemplo**:
```typescript
const routes: Routes = [
  {
    path: 'products', component: ProductsComponent,
    children: [
      { path: ':id', component: ProductDetailComponent }
    ]
  }
];
```

#### ID17: Aplicação de guardas de rota
**Explicação**: As guardas de rota (`AuthGuard`) protegem rotas sensíveis, assegurando que somente usuários autorizados possam acessar determinadas partes da aplicação.
**Exemplo**:
```typescript
const routes: Routes = [
  { path: 'admin', component: AdminComponent, canActivate: [AuthGuard] }
];

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(): boolean {
    if (this.authService.isLoggedIn()) {
      return true;
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }
}
```

### RA6 - Realizar requisições assíncronas para serviços web

#### ID18: Requisições assíncronas a uma API pública
**Explicação**: Realizar uma requisição GET a uma API pública usando `HttpClient` permite buscar dados externos, enriquecendo a aplicação com informações atualizadas.
**Exemplo**:
```typescript
this.http.get('https://api.example.com/products')
  .subscribe(data => {
    this.products = data;
  });
```

#### ID19: Requisições assíncronas a uma API simulada
**Explicação**: Implementar operações CRUD (GET, POST, PUT, DELETE) em uma API simulada com `HttpClient` permite testar e desenvolver funcionalidades com dados fictícios.
**Exemplo**:
```typescript
getProducts(): Observable<Product[]> {
  return this.http.get<Product[]>('http://localhost:3000/products');
}

addProduct(product: Product): Observable<Product> {
  return this.http.post<Product>('http://localhost:3000/products', product);
}

updateProduct(product: Product): Observable<Product> {
  return this.http.put<Product>(`http://localhost:3000/products/${product.id}`, product);
}

deleteProduct(id: number): Observable<void> {
  return this.http.delete<void>(`http://localhost:3000/products/${id}`);
}
```

#### ID20: Tratamento de respostas e erros
**Explicação**: Manejar adequadamente respostas e erros em requisições HTTP assegura que a aplicação lida com falhas de maneira robusta e inform

### RA6 - Realizar requisições assíncronas para serviços web

#### ID20: Tratamento de respostas e erros
**Explicação**: Lidar com respostas e erros em requisições HTTP é crucial para assegurar que a aplicação possa lidar com falhas de rede ou problemas no servidor de forma robusta, melhorando a resiliência e a experiência do usuário.
**Exemplo**:
```typescript
this.http.get('https://api.example.com/products')
  .subscribe({
    next: data => this.products = data,
    error: error => console.error('Erro ao buscar produtos', error)
  });
```

#### ID21: Validações de entrada nos campos do formulário
**Explicação**: Implementar validações de entrada usando expressões regulares garante que os dados inseridos pelo usuário sejam válidos, prevenindo erros e garantindo a integridade dos dados.
**Exemplo**:
```typescript
productForm = new FormGroup({
  name: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z ]*')]),
  price: new FormControl('', [Validators.required, Validators.min(0)])
});
```

#### ID22: Desabilitar botão de submit com campos inválidos
**Explicação**: Desabilitar o botão de submit até que todos os campos do formulário sejam válidos ajuda a evitar a submissão de dados incorretos, melhorando a usabilidade e prevenindo erros.
**Exemplo**:
```html
<button [disabled]="!productForm.valid">Submit</button>
```

#### ID23: Uso de Promises para tratar respostas assíncronas
**Explicação**: Utilizar Promises para tratar respostas assíncronas é uma maneira eficaz de gerenciar operações assíncronas, proporcionando um controle mais fácil sobre a execução de código após a conclusão de uma requisição.
**Exemplo**:
```typescript
this.http.get('https://api.example.com/products').toPromise()
  .then(data => this.products = data)
  .catch(error => console.error('Erro ao buscar produtos', error));
```

#### ID24: Uso de Observables para tratar respostas assíncronas
**Explicação**: Utilizar Observables permite o controle reativo de dados, oferecendo suporte a operações assíncronas contínuas e uma maneira eficaz de gerenciar fluxos de dados.
**Exemplo**:
```typescript
this.http.get<Product[]>('https://api.example.com/products')
  .subscribe(products => this.products = products);
```

### RA7 - Gerenciar o código-fonte de maneira eficiente

#### ID25: Estrutura do Gitflow
**Explicação**: Adotar a estrutura de branches do Gitflow facilita a organização do desenvolvimento, permitindo um fluxo de trabalho claro e eficiente com branches específicas para features, releases e hotfixes.
**Exemplo**:
```plaintext
main
develop
feature/atividade-17
release/v1.0.0
hotfix/fix-bug
```

#### ID26: Colaboração efetiva e resolução de conflitos
**Explicação**: Utilizar comandos para merge e resolução de conflitos é essencial para a colaboração em equipe, garantindo que múltiplos desenvolvedores possam integrar suas mudanças de forma suave e eficiente.
**Exemplo**:
```bash
git fetch origin
git checkout feature/atividade-17
git merge origin/develop
# Resolver conflitos manualmente
git add .
git commit -m "Resolved merge conflicts"
git push origin feature/atividade-17
```

#### ID27: Planejamento, configuração e execução do build e deploy
**Explicação**: Configurar scripts de build e deploy no `package.json` automatiza o processo de preparação da aplicação para produção e seu envio para um ambiente de hospedagem, facilitando a manutenção e atualização contínua da aplicação.
**Exemplo**:
```json
"scripts": {
  "build": "ng build --prod",
  "deploy": "npm run build && angular-cli-ghpages --dir=dist/Shopping-list"
}
```
# Manual de Execução da Aplicação Shopping-list

## Pré-requisitos

- Node.js e npm instalados na máquina.
- Acesso ao GitHub para clonar o repositório.

## Passos para Configurar e Executar a Aplicação

### 1. Clonar o Repositório

Clone o repositório do projeto para seu ambiente local:
```bash
git clone https://github.com/RafaelSedor/DFF-Shopping-list.git
```

### 2. Navegar até o Diretório do Projeto

Entre no diretório do projeto:
```bash
cd DFF-Shopping-list
```

### 3. Instalar Dependências

Instale todas as dependências necessárias utilizando o npm:
```bash
npm install
```

### 4. Executar o JSON Server (API Fake)

Em uma nova janela de terminal, navegue até o diretório do projeto e execute o JSON Server:
```bash
npx json-server --watch db.json
```

### 5. Executar a Aplicação

Para iniciar o servidor de desenvolvimento, use o comando:
```bash
npm start
```
A aplicação estará disponível em `http://localhost:4200`.

### 6. Executar Testes

Para rodar os testes configurados no projeto, use:
```bash
npm test
```

### 7. Build e Deploy

Para construir a aplicação para produção e fazer o deploy no GitHub Pages:
```bash
npm run build
npm run deploy
```

## Endereço de Deploy

A aplicação pode ser acessada em:
[https://rafaelsedor.github.io/DFF-Shopping-list/](https://rafaelsedor.github.io/DFF-Shopping-list/)

Seguindo esses passos, você conseguirá configurar, executar e fazer o deploy da aplicação "Shopping-list". Se encontrar algum problema, verifique a documentação do Angular ou consulte o README do projeto para mais detalhes.
