window.addEventListener('load', function () {
    var form = document.querySelector('.registro');

    form.addEventListener('submit', function (e) {

            e.preventDefault();

            if (!this.nombre.value) {
                alert('Falta el nombre');
            } else if (!this.apellido.value) {
                alert('Falta el apellido');
            } else if (!this.dire.value) {
                alert('Falta dirección');
            } else if (!this.dni.value) {
                alert('Falta DNI');
            } else if (!this.tel.value) {
            alert('Falta Tel');
        } else {
            console.log('OK');
        }
    })
});