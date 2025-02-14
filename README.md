# Gerador de Assinatura de Email

## Descrição
O **Gerador de Assinatura de Email** é uma aplicação web que permite criar assinaturas personalizadas para emails de forma rápida e intuitiva. O usuário pode inserir seus dados profissionais e gerar uma assinatura formatada automaticamente, podendo copiá-la como HTML ou baixá-la como imagem PNG.

## Recursos
- Formulário interativo para inserir dados pessoais e profissionais.
- Formatação automática do telefone.
- Geração de assinatura em HTML com visualização prévia.
- Opção para copiar o código HTML.
- Download da assinatura como imagem PNG.
- Layout responsivo e amigável.

## Tecnologias Utilizadas
- **HTML5**: Estrutura da aplicação.
- **CSS3**: Estilização do site.
- **JavaScript (ES6)**: Manipulação de eventos, geração de HTML dinâmico e download da imagem.
- **html2canvas**: Biblioteca para converter HTML em imagem PNG.

## Como Usar
1. Clone este repositório:
   ```sh
   git clone https://github.com/seu-usuario/gerador-assinatura-email.git
   ```
2. Acesse a pasta do projeto:
   ```sh
   cd gerador-assinatura-email
   ```
3. Abra o arquivo `index.html` em um navegador.
4. Preencha o formulário com seu nome, cargo, email e telefone.
5. Clique no botão **"Gerar Assinatura"** para visualizar o resultado.
6. Copie o código HTML ou baixe a assinatura como PNG.

## Estrutura do Projeto
```
│── assets/
│   ├── css/
│   │   ├── style.css
│   ├── js/
│   │   ├── script.js
│   ├── ass.html
│── images/
│   ├── sua-logo.png
│   ├── ffundo.png
│── docs/
│   ├── README.md
│── index.html

```

## Personalização
- Para modificar a logo e o fundo da assinatura, substitua os arquivos `sua-logo.png` e `ffundo.png` na pasta `images/`.
- Para alterar o layout ou cores, edite o arquivo `styles.css`.

## Contribuição
Sinta-se à vontade para contribuir com melhorias!
1. Faça um fork do repositório.
2. Crie uma nova branch (`git checkout -b feature-nova-funcionalidade`).
3. Faça suas alterações e comite (`git commit -m 'Adiciona nova funcionalidade'`).
4. Envie para o repositório (`git push origin feature-nova-funcionalidade`).
5. Abra um Pull Request.

## Licença
Este projeto está sob a licença MIT - veja o arquivo [LICENSE](LICENSE) para mais detalhes.

