const texto = `<html><head><title>Gulliver Traveller - Roteiros</title></head><body><b>->1 - Roteiros para *São Paulo*</b><br>A Terra da Garoa!<br>Fundada em 25 de janeiro de 1554, a cidade tem hoje cerca de 12 milhões de habitantes e é considerada o centro financeiro do Brasil. Aqui vão três dicas de roteiros obrigatórios para aqueles que passam pela capital paulista<br>#Roteiro A | Região: Avenida Paulista<br>MASP; Parque Trianon; Rua Augusta<br>#Roteiro B | Região: Centro<br>Catedral da Sé; Pátio do Colégio; Rua Augusta<br>#Roteiro C | Região: Vila Madalena<br>Beco do Batman; Feirinha da Benedito Calixto; Livraria da Vila<br> <b>->2 - Roteiros para *Las Vegas*</b><br>Viva Las Vegas!<br>       A cidade mais populosa e mais densamente povoada do estado de Nevada, Las Vegas foi fundada em 1905. É considerada oficialmente como uma cidade desde 1911 e conta com mais de meio milhão de habitantes. Venha conhecer a capital dos jogos de azar!<br>#Roteiro A | Região: Las Vegas Boulevard South<br>Fonte do Bellagio; Principais Cassinos; Madame Tussauds<br>#Roteiro B | Região: Downtown<br>; Fremont; Las Vegas Art Museum; Museu Nacional do Crime Organizado; <br>#Roteiro C | Região: Las Vegas Boulevard North<br>Outlet Premium North; Stratosphere; Apple Fashion Show<br><b>->3 - Roteiros para *Moscou*</b><br>Privet!<br>A capital russa fica situada às margens do Rio Moscou e, apesar de ser a cidade mais cosmopolita da Rússia, grande parte de sua história está preservada<br>#Roteiro A | Região: Praça Vermelha<br>Museu Histórico do Estado; Catedral de São Basílico; Mausoléu de Lênin<br>#Roteiro B | Região: Centro<br>Teatro Bolshoi; Monumento a Karl Marx; Rio Moscou<br>#Roteiro C | Região: Obras pela cidade<br>Metrô de Moscou; As Sete Irmãs; Moscow Leningradsky Railway Station  <br></body></html>`;

// Extrair o nome das cidades avaliadas
const getCidadesAvaliadas = (texto) => {
  const cidades = texto.match(/Roteiros para \*(.*?)\*/g).map(cidade => cidade.match(/\*(.*?)\*/)[1]);
  return cidades;
};

// Extrair o conteúdo do roteiro A de cada cidade avaliada
const getConteudoRoteiroA = (texto) => {
  const roteiros = texto.match(/#Roteiro A \| Região: .*?<br>(.*?)<br>/gs).map(roteiro => roteiro.match(/#Roteiro A \| Região: .*?<br>(.*?)<br>/s)[1]);
  return roteiros;
};

// Extrair a quantidade de locais citados no roteiro A de cada cidade
const getQuantidadeLocaisRoteiroA = (conteudoRoteiroA) => {
  const quantidadeLocais = conteudoRoteiroA.map(roteiro => roteiro.split(';').length);
  return quantidadeLocais;
};

// Extrair o nome dos pontos turísticos localizados no bairro Centro da cidade de São Paulo
const getPontosTuristicosCentroSP = (conteudoRoteiroA) => {
  const pontosTuristicos = conteudoRoteiroA[0].split(';').map(local => local.trim());
  return pontosTuristicos;
};

// Extrair o nome dos pontos turísticos localizados no bairro Downtown da cidade de Las Vegas
const getPontosTuristicosDowntownLA = (conteudoRoteiroA) => {
  const pontosTuristicos = conteudoRoteiroA[1].split(';').map(local => local.trim());
  return pontosTuristicos;
};

// Exibir os resultados
const cidadesAvaliadas = getCidadesAvaliadas(texto);
const conteudoRoteiroA = getConteudoRoteiroA(texto);
const quantidadeLocaisRoteiroA = getQuantidadeLocaisRoteiroA(conteudoRoteiroA);
const pontosTuristicosCentroSP = getPontosTuristicosCentroSP(conteudoRoteiroA);
const pontosTuristicosDowntownLA = getPontosTuristicosDowntownLA(conteudoRoteiroA);

console.log('Cidades avaliadas:', cidadesAvaliadas);
console.log('Conteúdo do roteiro A de cada cidade:', conteudoRoteiroA);
console.log('Quantidade de locais no roteiro A de cada cidade:', quantidadeLocaisRoteiroA);
console.log('Pontos turísticos de São Paulo:', pontosTuristicosCentroSP);
console.log('Pontos turísticos de Las Vegas:', pontosTuristicosDowntownLA);


