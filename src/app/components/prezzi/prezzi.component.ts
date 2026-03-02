import { Component } from '@angular/core';

@Component({
  selector: 'app-prezzi',
  templateUrl: './prezzi.component.html',
  styleUrls: ['./prezzi.component.scss']
})
export class PrezziComponent {
  pricingCategories = [
    {
      icon: '🎂',
      name: 'Torte',
      items: [
        { name: 'Torta base 1 piano (6-8 persone)',    desc: 'Pasta frolla o pan di spagna, farcia classica',          price: 'da €40' },
        { name: 'Torta 2 piani (12-15 persone)',       desc: 'Decorazione personalizzata inclusa',                     price: 'da €75' },
        { name: 'Torta 3 piani (20-25 persone)',       desc: 'Struttura con dowel, decorazione avanzata',              price: 'da €130' },
        { name: 'Wedding Cake (per preventivo)',       desc: 'Torta nuziale multi-piano su misura',                    price: 'su richiesta' }
      ]
    },
    {
      icon: '🧁',
      name: 'Cupcakes',
      items: [
        { name: 'Cupcakes classici (min. 12)',         desc: 'Frosting in burro, colore a scelta',                     price: '€3,50 cad.' },
        { name: 'Cupcakes tematici',                   desc: 'Decorazione personalizzata in pasta di zucchero',        price: '€5 cad.' },
        { name: 'Box da 6',                            desc: 'Scatola regalo inclusa',                                price: 'da €22' },
        { name: 'Box da 12',                           desc: 'Scatola regalo inclusa',                                price: 'da €40' }
      ]
    },
    {
      icon: '🍪',
      name: 'Biscotti',
      items: [
        { name: 'Biscotti decorati (min. 10)',         desc: 'Forma standard, glassa monocromo',                       price: '€2,50 cad.' },
        { name: 'Biscotti personalizzati',             desc: 'Forma su misura, illustrazione dettagliata',             price: '€4 cad.' },
        { name: 'Set da 20 (confezionati)',            desc: 'Sacchetto con nastro incluso',                           price: 'da €55' }
      ]
    },
    {
      icon: '🍫',
      name: 'Cioccolatini',
      items: [
        { name: 'Box praline (9 pezzi)',               desc: 'Assortimento fondente, latte, bianco',                   price: 'da €18' },
        { name: 'Box praline (18 pezzi)',              desc: 'Confezione regalo con nastro',                           price: 'da €32' },
        { name: 'Tartufi artigianali (min. 10)',       desc: 'Al cacao, rum, pistacchio o nocciola',                   price: '€2 cad.' },
        { name: 'Bark al cioccolato (200g)',           desc: 'Decorato con frutti e frutta secca',                     price: 'da €12' }
      ]
    }
  ];

  extras = [
    { icon: '🌸', name: 'Fiori in pasta di zucchero', price: '+€8–20 cad.' },
    { icon: '✍️', name: 'Scritta personalizzata',      price: '+€5' },
    { icon: '🖼️', name: 'Foto commestibile su cialda',  price: '+€10' },
    { icon: '✨', name: 'Decorazione oro/argento',     price: '+€15' },
    { icon: '🍓', name: 'Frutta fresca decorativa',    price: '+€8–15' },
    { icon: '🚗', name: 'Consegna a domicilio',         price: 'da €8' }
  ];
}
