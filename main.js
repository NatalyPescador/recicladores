document.getElementById("ex").addEventListener("change", function() {
    var ocultarDiv = document.getElementById("visible");
  
    if (this.checked) {
        ocultarDiv.style.display = "block";
    } else {
        ocultarDiv.style.display = "none";
    }
});

function validacion() {
    let nombre = document.getElementById("name").value;
    let apellido = document.getElementById("lastname").value;
    let celular = document.getElementById("cel").value;
    let documentoTi = document.getElementById("ti").checked;
    let documentoCc = document.getElementById("cc").checked;
    let documentoEx = document.getElementById("ex").checked;
    let numeroDocumento = document.getElementById("num_id").value;
    let permisoSi = document.getElementById("si").checked;
    let permisoNo = document.getElementById("no").checked;
    let generoFemenino = document.getElementById("femenine").selected;
    let generoMasculino = document.getElementById("masculine").selected;
    let edad = parseInt(document.getElementById("age").value);
    let estrato1 = document.getElementById("uno").selected;
    let estrato2 = document.getElementById("dos").selected;
    let estrato3 = document.getElementById("tres").selected;
    let mensaje;
    let valido;

    if ((documentoTi) || (documentoCc) || (documentoEx && permisoSi)) {
        if ((generoFemenino && edad >= 18 && edad <= 57) || (generoMasculino && edad >= 20 && edad <= 63)) {
            if (estrato1 || estrato2 || estrato3) {
                mensaje = `<strong>Felicitaciones, usted ha sido contratado para trabajar en la campaña de reciclaje. Usted fue admitido en base a la siguiente información:</strong><br><br>
                <b>Nombre completo:</b> ${nombre} ${apellido} <br>
                <b>Número de documento:</b> ${numeroDocumento} <br>
                <b>Numero de celular:</b> ${celular}`;
            
            } else {
                mensaje = "Lo sentimos, usted no cumple con los requisitos para entrar a la campaña. Recuerde que está campaña está orientada a las personas de estratos 1, 2 y 3";
            }
        } else {
            if (generoFemenino && edad < 18 || generoMasculino && edad < 20) {
                mensaje = "Lo sentimos, usted no cumple con el requisito de minimo de edad para entrar a la campaña. Recuerde que la edad minima para mujeres es de 18 años y la edad minima para los hombre es de 20 años";
            } else {
                mensaje = "Lo sentimos, usted ya cumple con la edad para aplicar a la pensión. En este caso, no cumple con los requisitos para entrar a la campaña";
            } 
        }
    } else {
        mensaje = "Lo sentimos, usted no cumple con el requisito de residencia colombiana para entrar a la campaña";
    }

    document.getElementById("answer").innerHTML = mensaje;
}