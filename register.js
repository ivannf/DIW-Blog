let buscador = document.getElementById('buscador');

buscador.addEventListener('click', () => {
    let input = document.createElement('input');
    buscador.appendChild(input);
    input.setAttribute('type','text');
    input.setAttribute('placeholder','Buscar...');
    input.setAttribute('id','inputBuscador');
    let a = document.createElement('a');
    buscador.appendChild(a);
    a.setAttribute('id','cerrarBuscador');
    let svg = document.createElement('svg');
    a.appendChild(svg);
    svg.setAttribute('xmlns','http://www.w3.org/2000/svg');
    svg.setAttribute('width','16');
    svg.setAttribute('height','16');
    svg.setAttribute('fill','currentColor');
    svg.setAttribute('class','bi bi-x-circle');
    svg.setAttribute('viewBox','0 0 16 16');

    let cerrarBusca = document.getElementById('cerrarBuscador');

    cerrarBusca.addEventListener('click', () => {
        svg.remove();
        input.remove();
    });

},{once:true});