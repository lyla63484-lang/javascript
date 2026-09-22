let quartosDisponiveis = 5;
let reservaConfirmada = true;

let statusReserva = (reservaConfirmada && quartosDisponiveis > 0) ? "Reserva confirmada"
                :(quartosDisponiveis > 0) ? "Aguardamos confirmacao"
                :"Sem quartos disponiveis";
                
console.log(statusreserva); // saida: reserva confirmada
