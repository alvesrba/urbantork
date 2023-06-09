/** ATIVAR LINKS DO MENU */
const links = document.querySelectorAll('.header-menu a');

function ativarLink(link){
    const url = location.href;
    const href = link.href;

    if (url.includes(href)){
        link.classList.add('ativo');
        console.log(link);
    }
}

links.forEach(ativarLink);

/** ATIVAR ITEM NO ORÇAMENTO CONFORME ESCOLHA DO CLIENTE*/
const parametros = new URLSearchParams(location.search);

function ativarProduto(parametro){
    const elemento = document.getElementById(parametro);
    if(elemento){
        elemento.checked = true;
    }
}
parametros.forEach(ativarProduto)

/** PERGUNTAS FREQUENTES */
const perguntas = document.querySelectorAll('.perguntas button');


function ativarPergunta(event){
    const pergunta = event.currentTarget;
    const controls = pergunta.getAttribute('aria-controls');
    const resposta = document.getElementById(controls);
    resposta.classList.toggle('ativa')
    if(resposta.classList.contains("ativa")){
        pergunta.setAttribute('aria-expanded','true');
    }else{
        pergunta.setAttribute('aria-expanded','false');
    }
    
    console.log(pergunta);
    console.log(controls);
}

function eventosPerguntas(pergunta){
    pergunta.addEventListener('click', ativarPergunta);
}

perguntas.forEach(eventosPerguntas);


/** GALERIA */
const galeria = document.querySelectorAll('.moto-imagens img');
const galeriaContainer = document.querySelector('.moto-imagens');

function trocarImagem(event){
    const img = event.currentTarget;
    const media = matchMedia('(min-width: 1000px)').matches
    if(media){
        galeriaContainer.prepend(img);
    }
}

function eventosGaleria(img){
    img.addEventListener('click',trocarImagem);
}

galeria.forEach(eventosGaleria);