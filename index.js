const telefoneForum = '551134894458'
const urlContato = `https://wa.me/${telefoneForum}`

const fncAbreContato = () => {
    console.log('abrindo...')
    window.open(urlContato, "_blank");
}

const fncTutorialCelular = () => {
    console.log('Abrindo manual de acesso para celular...')
    window.open('tutoriais/acessandoPeloCelular.pdf','_blank');
}

const fncTutorialComputador = () => {
    console.log('Abrindo manual de acesso para computador...')
    window.open('tutoriais/acessandoPeloComputador.pdf','_blank');
}