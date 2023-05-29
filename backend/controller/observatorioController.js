const consultasObservatorio = require("../repositorio/consultasObservatorio/consultasObservatorio");
const consultasUtilizacoes = require("../repositorio/consultasObservatorio/consultasUtilizacoes");

module.exports = {
    criar: (req, res) => {
        consultasObservatorio.criar(req.body);
        let idUltimo = consultasObservatorio.pegarOUltimo();
        console.log(idUltimo)
    },
    listarPorId: async (req, res) => {
        req.body = {
            nome: "TESTE",
            imagem: "TESTE",
            descricao: "TESTE"
        }
        let idUltimo = await consultasObservatorio.pegarOUltimo();
        console.log(idUltimo)
    }
}