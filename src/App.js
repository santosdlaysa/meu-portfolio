
import './App.css';
import Header from './components/Header';
import Projetos from './components/Projetos';
import Section from './components/Section';


function App() {
  return (
    <div className="App">
     <Header />
     <main class="perfil">
            <div class="perfil-text">
                <h2>
                    <strong>Oi ​🙋‍♀️, meu nome é Laysa,</strong><br />
                    Desenvolvedora Front-end
                  </h2>
                  <p class="textp">
                      Sou bacharel em Direito com especialização em Direito Penal e Criminologia. Há um ano, migrei para a área de tecnologia da informação e estou cursando Análise e Desenvolvimento de Sistemas, com foco em desenvolvimento Frontend. Visando construir interfaces de usuário intuitivas e agradáveis. Estou animada com as oportunidades que a tecnologia oferece e espero continuar crescendo como desenvolvedora Frontend.👩‍💻
                  </p>
                  <a href="https://santosdlaysa.github.io/Portfolio-oficiall/assets/Curr%C3%ADculo%20-%20DEV.pdf" target="_blank" rel="noreferrer" class="buttonContatoCv">
                    <img src="https://santosdlaysa.github.io/Portfolio-oficiall/assets/icons8-pdf-50.png" alt="icon" class="iconcv"/> Curriculum
                </a>
            </div>
            
            <div>
                <img src="https://santosdlaysa.github.io/Portfolio-oficiall/assets/profile.jpg" alt="Laysa" id="fotoperfil" />
            </div>
           
          </main>

          <Section />
          <Projetos />

    </div>
    

    
  );
}

export default App;
