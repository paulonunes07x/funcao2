function nomeAleatorio() {
    const nomes = ["paulo", "henrique", "pedro", "diego", "elisa", "fernando", "joana", "carlos", "isabela", "bruno"];
    const indiceAleatorio = Math.floor(Math.random() * nomes.length);
    return nomes[indiceAleatorio];
}
console.log(nomeAleatorio());
