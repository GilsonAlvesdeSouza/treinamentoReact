/*
O import do css foi feito de forma global dentro da pasta _app
pois o react não permite fazer o import direto  
 */
export default function integracao() {
  return (
    <div className="container integracao1">
      <div className="vermelho">Branco</div>
      <div className="azul">Amarelo</div>
      <div className="verde">Preto</div>
      <div className="Preto">Marron</div>
      <div className="Branco">Azul</div>
      <div className="Marron">Rosa</div>
      <div className="Rosa">Verde</div>
    </div>
  );
}
