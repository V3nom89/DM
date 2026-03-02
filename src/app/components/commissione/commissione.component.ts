import { Component } from '@angular/core';

@Component({
  selector: 'app-commissione',
  templateUrl: './commissione.component.html',
  styleUrls: ['./commissione.component.scss']
})
export class CommissioneComponent {
  steps = [
    {
      icon: '💬',
      title: 'Contattami',
      text: 'Scrivimi via email o compila il modulo. Raccontami la tua occasione, i sapori che ami e il design che immagini.'
    },
    {
      icon: '✏️',
      title: 'Consulenza & Preventivo',
      text: 'Organizziamo una breve chiamata per definire tutti i dettagli: dimensioni, gusti, decorazioni e consegna. Ti invio il preventivo.'
    },
    {
      icon: '🎨',
      title: 'Creazione',
      text: 'Con la conferma e il pagamento dell\'acconto, inizio la lavorazione. Ti mando aggiornamenti foto durante la preparazione.'
    },
    {
      icon: '🎁',
      title: 'Consegna',
      text: 'Il tuo dolce è pronto! Puoi ritirarlo in laboratorio o concordare la consegna a domicilio per la tua zona.'
    }
  ];

  dolci = [
    {
      icon: '🎂',
      name: 'Torte Personalizzate',
      desc: 'Torte su più strati con decorazioni in pasta di zucchero, crema al burro o ganache.',
      tags: ['Compleanni', 'Matrimoni', 'Battesimi', 'Anniversari']
    },
    {
      icon: '🧁',
      name: 'Cupcakes',
      desc: 'Mini dolcetti con frosting decorato, perfetti come bomboniere o per buffet dolci.',
      tags: ['Party', 'Bomboniere', 'Feste aziendali', 'Baby shower']
    },
    {
      icon: '🍪',
      name: 'Biscotti Decorati',
      desc: 'Biscotti con glassa royal icing nelle forme e nei colori che preferisci.',
      tags: ['Segnaposto', 'Regali', 'Feste tema', 'Natale']
    },
    {
      icon: '🍫',
      name: 'Cioccolatini & Praline',
      desc: 'Praline artigianali con ripieni personalizzati, tartufi e bark decorati.',
      tags: ['San Valentino', 'Pasqua', 'Regali aziendali', 'Matrimoni']
    }
  ];

  infos = [
    { icon: '⏱️', title: 'Tempi di Preparazione', text: 'Solitamente 5-10 giorni lavorativi. Per ordini complessi o grandi quantità consiglio di contattarmi con 2-3 settimane di anticipo.' },
    { icon: '💳', title: 'Pagamento', text: 'Acconto del 30% alla conferma dell\'ordine. Saldo al ritiro o alla consegna. Accetto bonifico, PayPal e contanti.' },
    { icon: '🚗', title: 'Ritiro e Consegna', text: 'Ritiro gratuito in laboratorio. Consegna a domicilio disponibile (costo variabile in base alla distanza).' }
  ];
}
