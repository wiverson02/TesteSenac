import './App.css';

function App() {
  return (
    <>
    <div className="App">
      <nav className="BarraTopo">
        <div className="Zoom">
          <a href="/">A-</a>
          <a href="/">A+</a>
        </div>

        <div className="Links">
          <a href="/">Mapa do site</a>
          <a href="/">Acessibilidade</a>
          <a href="/">Alto Contraste</a>
          <a href="/">Libras</a>
        </div>
        <div className="Links">
          <a href="/">Pesquisar</a>
        </div>
      </nav>
      

      <section>
        <div className="TopoFull">
          <div className="Logo">
            <img src="img/senac-logo.png" alt="/"></img>
          </div>
          <t1 className="Titulo">Piauí</t1>
          <div className="BarraLateral">
            <a href="/ " className="PortalIcon">
              <y>Portal do Aluno</y>
              <img src="img/graduation.png" alt="/"></img>
            </a>
            <div className="LinksIcons">
              <a href="/" className="PortalIcon">
                <img src="img/instagram.png" alt="/"></img>
              </a>
              <a href="/" className="PortalIcon">
                <img src="img/twitter.png" alt="/"></img>
              </a>
              <a href="/" className="PortalIcon">
                <img src="img/facebook.png" alt="/"></img>
              </a>
              <a href="/" className="PortalIcon">
                <img src="img/linkedin.png" alt="/"></img>
              </a>
            </div>       
          </div>
        </div>        
      </section>

      <hr></hr>  
    </div>
    <nav className="MenuInstitucional">
      <a href="/" className="LinksMenu">
        <y>Institucional</y>
        <img src="img/arrow.png" alt="/"></img>
      </a>
      <a href="/" className="LinksMenu">
        <y>Cursos</y>
      </a>
      <a href="/" className="LinksMenu">
        <y>Para Empresas</y>
        <img src="img/arrow.png" alt="/"></img>
      </a>
      <a href="/" className="LinksMenu">
        <y>Contato</y>
        <img src="img/arrow.png" alt="/"></img>
      </a>
    </nav> 
  
  
  </>
  );
}

export default App;
