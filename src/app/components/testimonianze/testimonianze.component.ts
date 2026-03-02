import { Component } from '@angular/core';

interface Review {
  name: string;
  initials: string;
  occasion: string;
  rating: number;
  text: string;
  date: string;
}

@Component({
  selector: 'app-testimonianze',
  templateUrl: './testimonianze.component.html',
  styleUrls: ['./testimonianze.component.scss']
})
export class TestimonianzeComponent {
  reviews: Review[] = [
    { name: 'Laura B.',      initials: 'LB', occasion: 'Torta di matrimonio',   rating: 5, text: 'Sofia ha creato la torta dei miei sogni! Elegante, deliziosa e perfettamente in tema con il nostro matrimonio. Tutti gli ospiti erano senza parole. La consiglio a occhi chiusi!', date: 'Gennaio 2025' },
    { name: 'Marco F.',      initials: 'MF', occasion: 'Compleanno bimba',       rating: 5, text: 'Cupcakes a tema unicorno per il quarto compleanno di mia figlia. La piccola era entusiasta! I colori erano vivacissimi e il sapore ancora migliore. Torneremo sicuramente!', date: 'Dicembre 2024' },
    { name: 'Giulia R.',     initials: 'GR', occasion: 'Baby shower',            rating: 5, text: 'Ho ordinato biscotti e cupcakes per un baby shower. Tutto perfetto, consegnato in anticipo e imballato magnificamente. Sofia è super disponibile e professionale.', date: 'Novembre 2024' },
    { name: 'Antonio M.',    initials: 'AM', occasion: 'Anniversario',           rating: 5, text: 'Torta a due piani per il nostro 10° anniversario. Decorata con i nostri fiori del matrimonio! Mia moglie ha pianto di gioia. Il gusto cioccolato e lampone era divino.', date: 'Ottobre 2024' },
    { name: 'Chiara V.',     initials: 'CV', occasion: 'Feste aziendali',        rating: 4, text: 'Abbiamo ordinato 60 cupcakes per la festa aziendale di Natale. Tutti deliziosi e presentati in modo impeccabile. Unica piccola cosa: la consegna era leggermente in ritardo.', date: 'Dicembre 2024' },
    { name: 'Roberto S.',    initials: 'RS', occasion: 'Battesimo',              rating: 5, text: 'Torta a tre piani per il battesimo di nostra figlia. Rosa pastello con fiori in pasta di zucchero, esattamente come avevo immaginato. Servizio eccellente dalla consulenza alla consegna.', date: 'Settembre 2024' },
    { name: 'Elena T.',      initials: 'ET', occasion: 'San Valentino',          rating: 5, text: 'Box di cioccolatini personalizzati con il nome del mio ragazzo. Un regalo unico e originale. La confezione era bellissima e il gusto superlativo. Già prenotato per quest\'anno!', date: 'Febbraio 2025' },
    { name: 'Francesco P.',  initials: 'FP', occasion: 'Compleanno adulto',      rating: 5, text: 'Torta tematica con decorazione in stile vintage per i 50 anni di mia madre. Ha pianto di gioia! Il gusto vaniglia e frutti di bosco era straordinario. Grazie Sofia!', date: 'Marzo 2025' },
    { name: 'Valentina C.',  initials: 'VC', occasion: 'Comunione',              rating: 5, text: 'Biscotti e torta per la comunione di mia nipote. Tema bianco e oro stupendo. Tutto perfettamente eseguito, comunicazione chiara e professionale. Il mio punto di riferimento per i dolci!', date: 'Maggio 2025' }
  ];

  ratingBars = [
    { stars: 5, count: 7, pct: 78 },
    { stars: 4, count: 1, pct: 11 },
    { stars: 3, count: 1, pct: 11 },
    { stars: 2, count: 0, pct: 0 },
    { stars: 1, count: 0, pct: 0 }
  ];

  getStars(n: number): number[]      { return Array(Math.floor(n)).fill(0); }
  getEmptyStars(n: number): number[] { return Array(5 - Math.floor(n)).fill(0); }
}
