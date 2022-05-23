import profilePicture from '../images/foto-perfil.jpg'
import profilePicture2 from '../images/outra-foto-perfil.jpg'

export default function Home() {
  return <div className="home" id='home'>
    <div className='profile-content'>
      <div className='img-container'>
        <img src={profilePicture} alt="Andrews Matsubara" />
      </div>
      <div className='first-content'>
        <h1>Quem sou eu?</h1>
        <p>Olá, me chamo Andrews Matsubara, muito prazer!</p>
        <p>Vou contar uma breve história da minha vida para que a gente possa se conhecer melhor. Nasci no dia 19 de junho de 1995 na cidade de São Paulo e logo me aventurei em terras internacionais(ainda no berço) com os meus pais, mais especificamente no Japão, mais especificamente ainda na cidade de Chiba, uma região pertinho de Tokyo, onde fiquei por 4 anos.</p>
        <p>Depois desse tempo, acabei voltando para a minha terra natal, mas dessa vez na cidade de Mongaguá para ficar com os meus avós(e sem saber falar português). Nessa cidade litorânea que fica perto de Santos e Praia Grande, comecei a me alfabetizar e logo começaria a esquecer um pouco da língua japonesa, sendo lentamente substituída pelo português(mas sim, ainda sei algumas palavrinhas).</p>
        <p>Quando completei 6 anos de idade, depois de ter feito o ensino infantil nessa cidade, voltei a morar com os meus pais que voltariam do Japão e se estabeleceriam em São José dos Campos, onde passei 11 anos da minha vida, essencialmente na escola e fazendo minha bagunça, desde andar de skate até ter minhas bandinhas de colégio.</p>
        <p>No colegial, assim como a maioria das pessoas, comecei a me perguntar o que fazer depois de sair da escola e, num lapso de desespero misturado com algumas leituras pontuais, acabei escolhendo a geografia como meu mais novo desafio e, então, em 2013, ingressei na Universidade de São Paulo para fazer o bacharelado na área escolhida.</p>
      </div>
    </div>
    <div className='profile-content-2'>
      <div className='second-content'>
        <p>Depois de alguns altos e baixos durante a faculdade, desde questões de saúde, desânimos e afins, concluí o curso em setembro de 2021(ufa!), mas senti por boa parte da graduação que, apesar de ter passados bons momentos e aprendido coisas muito importantes durante essa trajetória, eu não estava 100% feliz por ter investido esses anos com aquelas matérias. Na verdade, talvez eu possa afirmar que não estava com sequer 50% de satisfação.</p>
        <p>Foi nesse momento que acabei conhecendo pessoas e trocando figurinhas com aqueles que eu já conhecia e estavam se inserindo no mercado de tecnologia. Por uns breves meses tentei ao máximo não pensar em transição de carreira, porque parecia que meus anos de geografia teriam sido em vão, mas já comecei a ficar atento nas movimentações desse ramo, fazendo alguns pequenos estudos de algumas linguagens de programação, nada muito aprofundado, mas por conta, comecei a estudar um pouquinho de desenvolvimento de jogos com C#, C++ e Java.</p>
        <p>Até que em junho de 2021 decidi entrar no curso da Trybe para estudar desenvolvimento web e posso dizer que é algo que tem mudado a minha vida desde então. Comecei a saber aplicar os conhecimentos prévios e adquirir novos e dessa forma me prendi ao estímulo de começar a resolver novos problemas. Ainda me frustro bastante por parecer não saber o suficiente, mas a adrenalina e a felicidade de conseguir solucionar novas questões valem cada segundo dos momentos estudando programação!</p>
        <p>E essa é a minha trajetória da vida até a entrada na área que peguei tanto gosto. Alguns detalhes eu decidi esconder para que você, leitor, caso queira, possa vir conversar comigo pessoalmente(ou digitalmente), mas vou deixar mais algumas curiosidades sobre mim em uma seção separada, tá bom? Espero que goste de todo o conteúdo que virem por aqui e obrigado pela atenção!</p>
      </div>
      <div className='img-container-2'>
        <img src={profilePicture2} alt="Andrews Matsubara" />
      </div>
    </div>
  </div>
}
