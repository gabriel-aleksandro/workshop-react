function Projetos(){
    return(
        <section id="projetos">
            <h2>Meus Projetos</h2>
            <div className="projetos-grid"></div>
                <div className="projeto-card">
                    <img src="https://i.ytimg.com/vi/L7bkfG7HY0o/maxresdefault.jpg" alt="Projeto 1"/>
                    <h3>Monkeynomics Live ft. Zambom</h3>
                    <p>Live desenvolvida em parceria com professor Antonio Carlos Zambom sobre economia no mundo dos macacos modernos</p>
                </div>
                
                <div className="projeto-card">
                    <img src="https://i.ytimg.com/vi/aQKjsFE6elo/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLAzhIPIZoL5shZQxZ5IakRJ0ctJkw" alt="Projeto 1"/>
                    <h3>queda da bolsa de valores 1929</h3>
                    <p>Fui responsavel pela queda da bolsa de 1929, para aumentar o valor das bananas</p>
                </div>
        </section>
    );
}

export default Projetos;