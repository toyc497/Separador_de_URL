const protocoloParagrafo = document.querySelector("#protocolo");
const dominioParagrafo = document.querySelector("#dominio");
const caminhoParagrafo = document.querySelector("#caminho");
const urlInput = document.querySelector("#url");
const btn = document.querySelector("#btn");

function getCaminho(url){
    const armURL = url.split("/");
    let strUrl = "";

    for(let i=1; i < armURL.length; i++){
        strUrl += `/${armURL[i]}`;
    }

    return strUrl
}

function getDominio(url){
    const armazenaDominio = url.split("/");
    return armazenaDominio;
}

function getProtocolo(url){
    const armazenaProtocolo = url.split("://");
    return armazenaProtocolo;
}

btn.addEventListener("click", (e) =>{
    e.preventDefault();
    const url = urlInput.value;
    const protocolo = protocoloParagrafo;
    const dominio = dominioParagrafo;
    const caminho = caminhoParagrafo;
    
    const protocoloURL = getProtocolo(url);
    const dominioURL = getDominio(protocoloURL[1]);
    const caminhoURL = getCaminho(protocoloURL[1]);

    protocolo.textContent = `Protocolo: ${protocoloURL[0]}://`;
    dominio.textContent = `Domínio: ${dominioURL[0]}`;
    caminho.textContent = `Caminho: ${caminhoURL}`;
});