function getRegistros(event){
    event.preventDefault();
    
    const ans = !(document.getElementsByName('ans')[0].value) == true ? '-1' : document.getElementsByName('ans')[0].value;
    const cnpj = !(document.getElementsByName('cnpj')[0].value) == true ? '-1' : document.getElementsByName('cnpj')[0].value;
    const razaoSocial = !(document.getElementsByName('razaoSocial')[0].value) == true ? '-1' : document.getElementsByName('razaoSocial')[0].value;
    const nome = !(document.getElementsByName('nome')[0].value) == true ? '-1' : document.getElementsByName('nome')[0].value;
    const modalidade = !(document.getElementsByName('modalidade')[0].value) == true ? '-1' : document.getElementsByName('modalidade')[0].value;
    const email = !(document.getElementsByName('email')[0].value) == true ? '-1' : document.getElementsByName('email')[0].value;
    const representante = !(document.getElementsByName('representante')[0].value) == true ? '-1' : document.getElementsByName('representante')[0].value;
    const data = !(document.getElementsByName('dataRegistro')[0].value) == true ? '-1' : document.getElementsByName('dataRegistro')[0].value;
    const dataRegistro = data.replace('/', '%2F');

    axios.get(`http://localhost:5757/find/${ans}/${cnpj}/${razaoSocial}/${nome}/${modalidade}/${email}/${representante}/${dataRegistro}`)
        .then(response => {
            console.log(response.data)
            new Vue({
                el: '#registrosFiltrados',
                data:{
                    registros: response.data,
                },
            });
        })
        .catch(err => console.log('error', err))

    document.getElementById('registrosFiltrados').style.display = "flex"
    document.getElementById('form01').style.display = "none"
}

function newFind(){
    window.location.href = "/";
}
