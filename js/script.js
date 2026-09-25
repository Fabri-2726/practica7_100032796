document.getElementById('btnDatos').addEventListener('click', function () {
    const nombre = 'Fernando Fabricio Rodríguez López';
    const matricula = '100032796';
    const carrera = 'Licenciatura en Sistemas Computacionales (LSC)';
    const semestre = '5°K';
    const mensaje = `Nombre: ${nombre} | Matrícula: ${matricula} | Carrera: ${carrera} | Semestre: ${semestre}`;
    document.getElementById('parDatos').textContent = mensaje;
    
    console.log('Datos mostrados:', nombre, matricula);
});

document.getElementById('btnCalc').addEventListener('click', function () {
    const p1 = parseFloat(document.getElementById('p1').value);
    const p2 = parseFloat(document.getElementById('p2').value);
    const p3 = parseFloat(document.getElementById('p3').value);

    if (isNaN(p1) || isNaN(p2) || isNaN(p3)) {
        alert('Por favor ingresa los tres parciales.');
        return;
    }

    const promedio = (p1 + p2 + p3) / 3;
    const parCalc = document.getElementById('parCalc');
    
    console.log('Promedio calculado:', promedio.toFixed(2));

    if (promedio >= 70) {
        parCalc.textContent = `Promedio: ${promedio.toFixed(2)} - Aprobado`;
        parCalc.style.color = 'green';
    } else {
        parCalc.textContent = `Promedio: ${promedio.toFixed(2)} - Reprobado`;
        parCalc.style.color = 'red';
    }
});

document.getElementById('btnAgregar').addEventListener('click', function () {
    const valor = document.getElementById('inputItem').value.trim();
    if (valor === '') return;

    const li = document.createElement('li');
    li.className = 'list-group-item';
    li.textContent = valor;
    document.getElementById('milista').appendChild(li);
    document.getElementById('inputItem').value = '';
    
    console.log('Elemento agregado a la lista:', valor);
});

document.getElementById('btnLimpiar').addEventListener('click', function () {
    document.getElementById('milista').innerHTML = '';
});

function cambiarFondo(color) {
    document.getElementById('sec-estilos').style.backgroundColor = color;
}