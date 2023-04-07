{/* <main class="MainPjt">
        <div class="pjt"> 
            <main class="Lpjt">
                <a href="https://hemolife.devosalliance.com/pages/index.html"><img src="imgs/hemolifeprint.png" alt=""></a>
                <div id="btn-pjt">
                    <a href="https://hemolife.devosalliance.com/pages/index.html"><button class="btn-yl">Ver site</button></a>
                    <a href="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2022-2-e1-proj-web-t2-hemolife"><button class="btn-trans-branco">Ver diretório</button></a>
                </div>   
            </main>  

            <Main class="Rpjt">
                <h3>Projeto:</h3><aside>Hemo Life</aside>
                <h3>Descrição:</h3>
                <p>O projeto foi premiado como destaque acadêmico na Pontifícia Universidade Católica de Minas Gerais. Essa plataforma conecta doadores de sangue a pacientes que necessitam de transfusão sanguínea, com o objetivo de reduzir o tempo de espera para doação e, consequentemente, salvar vidas.</p>
            </Main>
        </div>
    </main> */}

    var db = {
        dados: [
            {
                projeto: "1",
                text: `<main class="MainPjt">
                        <div class="pjt"> 
                            <main class="Lpjt">
                                <a href="https://hemolife.devosalliance.com/pages/index.html"><img src="imgs/hemolifeprint.png" alt=""></a>
                                <div id="btn-pjt">
                                    <a href="https://hemolife.devosalliance.com/pages/index.html"><button class="btn-yl">Ver site</button></a>
                                    <a href="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2022-2-e1-proj-web-t2-hemolife"><button class="btn-trans-branco">Ver diretório</button></a>
                                </div>   
                            </main>  
                
                            <Main class="Rpjt">
                                <h3>Projeto:</h3><aside>Hemo Life</aside>
                                <h3>Descrição:</h3>
                                <p>O projeto foi premiado como destaque acadêmico na Pontifícia Universidade Católica de Minas Gerais. Essa plataforma conecta doadores de sangue a pacientes que necessitam de transfusão sanguínea, com o objetivo de reduzir o tempo de espera para doação e, consequentemente, salvar vidas.</p>
                            </Main>
                        </div>
                    </main>`
            },
            {
                projeto: "2",
                text: `<main class="MainPjt">
                        <div class="pjt"> 
                            <main class="Lpjt">
                                <a href="https://reislucasf.github.io/Calculadora-de-IMC-JS/"><img src="imgs/imcframe.png" alt=""></a>
                                <div id="btn-pjt">
                                    <a href="https://hemolife.devosalliance.com/pages/index.html"><button class="btn-yl">Ver site</button></a>
                                    <a href="https://github.com/ReisLucasF/Calculadora-de-IMC-JS"><button class="btn-trans-branco">Ver diretório</button></a>
                                </div>   
                            </main>  
                
                            <Main class="Rpjt">
                                <h3>Projeto:</h3><aside>Calculadora de IMC</aside>
                                <h3>Descrição:</h3>
                                <p>Este é um projeto pessoal que desenvolvi não só para treinar, mas para que a minha namorada, que é nutricionista, possa fazer os cálculos de IMC sem ter que recorrer a um app terceito. Tenho como objetivo expandir o meu conhecimento a ponto de criar um sistema totalmente destinado ao uso dela em seu ofício.</p>
                            </Main>
                        </div>
                    </main>`,        
            },
            {
                projeto: "3",
                text: `<main class="MainPjt">
                            <div class="pjt"> 
                                <main class="Lpjt">
                                    <a href="https://icei-puc-minas-pmv-ads.github.io/pmv-ads-2023-1-e2-proj-int-t2-time4-forkfinder/"><img src="imgs/forkf.png" alt=""></a>
                                    <div id="btn-pjt">
                                        <a href="https://icei-puc-minas-pmv-ads.github.io/pmv-ads-2023-1-e2-proj-int-t2-time4-forkfinder/"><button class="btn-yl">Ver protótipo</button></a>
                                        <a href="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e2-proj-int-t2-time4-forkfinder"><button class="btn-trans-branco">Ver diretório</button></a>
                                    </div>   
                                </main>  
                    
                                <Main class="Rpjt">
                                    <h3>Projeto:</h3><aside>Fork Finder</aside>
                                    <h3>Descrição:</h3>
                                    <p>O Fork Finder é uma aplicação desenvolvida para auxiliar as pessoas na busca pelo restaurante ideal. Com o uso da aplicação, é possível filtrar as opções de acordo com a preferência de alimentos e tipo de cozinha, além de acessar informações como horário de funcionamento, fotos e avaliações de outros clientes. O projeto tem previsão de término para o final do primeiro semestre de 2023.</p>
                                </Main>
                            </div>
                        </main>`, 
            }
    
        ]
    }
    // Obtem os hemocentro informados pelo usuário nos filtros
    var fr = document.querySelector(".name");
    function Srcprojeto(fr) {
    
        // limpa a lista
        $("#projeto").empty();
    
        // Popula a tabela com os registros do banco de dados
        document.getElementById('nomeProjeto').innerHTML = fr;
        for (let index = 0; index < db.dados.length; index++) {
            const indice = db.dados[index];
            if ((indice.projeto == fr) || (fr == '')) {
                $("#projeto").append(
                    `<div class="projeto">
                     <p>${indice.text}<br>
                    </div>`
                );
            }
        };
    
    }

    