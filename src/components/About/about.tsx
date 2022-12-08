
import { Container } from './about.styles'
import { FaHtml5, FaCss3Alt } from 'react-icons/fa'
import { IoLogoJavascript } from 'react-icons/io5'

const About = () => {
  return (
    <Container>
      <h3>Quer aprender programação porém não sabe como ?, Você está no lugar certo!,
          você conhecerá as principais linguagens de programação, técnicas de estudo, e também como iniciar na área de programção mesmo não conhecendo nada sobre.
      </h3>
      <h2>O que é Programação ?</h2>
      <p>Programação é o processo de escrita, teste e manutenção de um programa de computador. O programa é escrito em uma linguagem de programação, embora seja possível, com alguma dificuldade, o escrever diretamente em linguagem de máquina. Diferentes partes de um programa podem ser escritas em diferentes linguagens.</p>
      <h2>Lógica de Programação:</h2>
      <p>Lógica de Programação é o modo como se escrevem programas de computador através de uma sequência de passos para executar uma ou várias funções, esta sequência é o algoritmo.

Algoritmo é basicamente uma “receita” para executar uma tarefa ou resolver um problema, ele tem começo meio e fim, assim como a receita de bolo, se você seguir os passos descritos, terá um resultado. Assim como na atividade de fazer um bolo, utilizando o algoritmo, você pode fazer atividades repetitivas ou ao mesmo tempo, pode delegar funções ou esperar um passo ser concluído para iniciar outro, desde que seja algo finito existem várias possibilidades.

Para se escrever um texto é necessário entender a linguagem. A língua que o computador entende são sequências lógicas de zeros e uns, ou seja, um sistema binário, apenas dois elementos. Para desenvolver a lógica de programação é necessário escrever utilizando uma linguagem de programação a qual será “traduzida”, nesse caso, será compilada e posteriormente transformada em código binário, para que a máquina entenda a sequência de comandos e execute uma tarefa.

A lógica de programação em geral baseia-se em uma lógica computacional compartilhada por humanos e máquinas, que é o que exploramos a medida que continuamos a interagir com as novas tecnologias. Com isso em mente, é possível desenvolver definições mais específicas de uma lógica de programação, à base de um trecho de código.</p>

<h3>Agora vamos conhecer um pouco de HTML, CSS & JAVASCRIPT</h3>
<h1>HTML <FaHtml5 size={30}/></h1>
<p>Para definir o que é HTML, é preciso entender a sigla primeiro. Ela significa Hyper Text Markup Language, ou seja, linguagem de marcação de hipertexto (elementos como textos, imagens e vídeos conectados entre si).

Trata-se de uma linguagem de marcação para desenvolver páginas e documentos eletrônicos para a internet, fornecendo informações para usuários, navegadores e mecanismos de busca.</p>
<p>Pode ser usado em :</p>
<ul>
  <li>desenvolvimento frontend, ou seja, na parte visual das aplicações web;</li>
  <li>desenvolvimento frontend, ou seja, na parte visual das aplicações web;</li>
  <li>desenvolvimento de jogos;</li>
</ul>
<h3>Agora vamos conhecer um pouco da parte de estilização da página</h3>
<h1>CSS <FaCss3Alt size={30}/></h1>
<p>CSS é chamado de linguagem Cascading Style Sheet e é usado para estilizar elementos escritos em uma linguagem de marcação como HTML. O CSS separa o conteúdo da representação visual do site. Pense  na decoração da sua página. Utilizando o CSS é possível alterar a cor do texto e do fundo, fonte e espaçamento entre parágrafos. Também pode criar tabelas, usar variações de layouts, ajustar imagens para suas respectivas telas e assim por diante.</p>
<h1>JAVASCRIPT <IoLogoJavascript size={30}/> </h1>
<p>JavaScript é uma linguagem de programação de alto nível criada, a princípio, para ser executada em navegadores e manipular comportamentos de páginas web.
Com seus scripts é possível incluir, em uma página estática, elementos dinâmicos como mapas, formulários, operações numéricas, animações, infográficos interativos e muito mais.

O JavaScript é uma das mais importantes tecnologias voltadas para o front-end e, unindo-se ao trio HTML, CSS e PHP, formam um grupo de linguagens que abrangem praticamente todas as exigências do desenvolvimento de uma página completa, dinâmica e com boa performance.

Do final dos anos 90 até meados dos anos 2000, o JS ganhou grande popularidade ao ser utilizado por grandes empresas para a construção de seus sites, como o Facebook, por exemplo.
</p>
<h1>Próximos Passos</h1>
<p>Após conhecer um pouco sobre essas linguagens, pesquise profundamente sobre cada uma delas, estude algumas horas por dia, e pratique bastante todo o conhecimento que receber estudando essas linguagens</p>
<p>Entendendo o básico de cada linguagem você estará apto para estudar um framwork ou seja la qual for a linguagem mais complexa que você escolherá.</p>
<p>Linguagens como :</p>
<ul>
  <li>React.js</li>
  <li>Next.js</li>
  <li>Angular</li>
  <li>Vue</li>
</ul>
<p>E lembre-se: ESTUDO, FOCO, PRATICA. VOCÊ CONSEGUE!</p>
    </Container>
  )
}

export default About
