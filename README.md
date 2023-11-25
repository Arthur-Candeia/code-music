# Code Music
Projeto Electron feito com Next (typescript) e SASS. Trata-se de um player de música que pode ser instalado em seu computador (Windows, Linux e Mac). Possui funções de adicionar e remover músicas, controle de playlist e controle de música (play/pause, anterior/próxima, escolha de tempo). Esse projeto foi criado para aprimorar minhas habilidades na utilização do electron e electron-builder.

<p align="center">
<img src="https://github.com/Arthur-Candeia/code-music/blob/master/public/imgToReadme.png" >
</p>

### O que está presente na aplicação?
 - _Software 💻:_ Um software que funciona em diferentes Sistemas Operacionais!
 - _Velocidade ⚡:_ O Sofware é executado com uma excelente velocidade!

### Resumo dos arquivos
#### Public
Electron - Pasta onde estão os arquivos responsáveis pelo funcionamento do electron. <br />
Musics - Pastas onde ficam as músicas.

#### Src
app - Arquivos de inicialização da parte frontend. <br />
components - Componentes da aplicação (BottomBar, icons, MainScreen, ModalPlaylist, Toast) <br />
hooks - Hooks personalizados da aplicação <br />
interfaces - Interfaces para tipagem <br />
styles - Estilização da aplicação (SASS .scss) <br />
utilities - Arquivos para utilidades gerais da aplicação 

### Porque criei essa aplicação?
• Aprimorar minhas habilidades no uso de electron
• Praticar o empacotamento/criação de softwares com electron-builder

📄 Esse projeto não roda na web e portanto não pode ser hospedado! Para utilizá-lo, instale as dependências com o gerenciador de pacotes de sua preferência e rode o comando/script de acordo com o seu SO: <br />
Windows: `npm run electron-win` <br />
Linux: `npm run electron-linux` <br />
Mac: `npm run electron-mac` <br />
Após isso, basta instalar o executável que estará dentro da pasta dist.