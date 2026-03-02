import { Component } from '@angular/core';

@Component({
  selector: 'app-chi-sono',
  templateUrl: './chi-sono.component.html',
  styleUrls: ['./chi-sono.component.scss']
})
export class ChiSonoComponent {
  timeline = [
    { year: '2008', title: 'La Prima Torta', text: 'Ho preparato la mia prima torta decorata per il compleanno di mia sorella. Da quel momento non ho più smesso.' },
    { year: '2012', title: 'Diploma Alberghiero', text: 'Conseguito il diploma presso l\'Istituto Alberghiero di Firenze con specializzazione in pasticceria.' },
    { year: '2015', title: 'Parigi & Perfezionamento', text: 'Corso avanzato di patisserie francese a Parigi. Ho imparato le tecniche del cioccolatino e della pasta choux.' },
    { year: '2018', title: 'Apertura Laboratorio', text: 'Ho aperto il mio laboratorio artigianale e iniziato a ricevere commissioni ufficiali per eventi privati.' },
    { year: '2022', title: 'Dolce Momento Nasce', text: 'Con il lancio del sito e dei social, Dolce Momento diventa un brand riconoscibile nella mia città.' },
    { year: 'Oggi', title: 'Nuove Creazioni', text: 'Ogni giorno sperimento nuove ricette e tecniche decorative. La passione non smette mai di crescere.' }
  ];
}
