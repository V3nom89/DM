import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  featured = [
    {
      name: 'Torta Floreale',
      category: 'Torte',
      desc: 'Decorazioni floreali in pasta di zucchero, personalizzabile in ogni colore.',
      img: 'assets/images/gallery/torta-01.svg'
    },
    {
      name: 'Cupcakes Arcobaleno',
      category: 'Cupcakes',
      desc: 'Cupcakes colorati con frosting in burro, perfetti per feste e compleanni.',
      img: 'assets/images/gallery/cupcake-01.svg'
    },
    {
      name: 'Biscotti Decorati',
      category: 'Biscotti',
      desc: 'Biscotti artigianali con glassa royal icing, forme su misura.',
      img: 'assets/images/gallery/biscotto-01.svg'
    }
  ];

  whyUs = [
    { icon: '🌸', title: 'Tutto Artigianale', text: 'Ogni dolce è preparato a mano con ricette tradizionali e ingredienti di prima qualità.' },
    { icon: '✨', title: 'Personalizzato', text: 'Realizzo il dolce dei tuoi sogni: colori, sapori e decorazioni su misura per te.' },
    { icon: '💝', title: 'Con Passione', text: 'Ogni creazione è un atto d\'amore. La cura nei dettagli si vede e si assaggia.' },
    { icon: '🎂', title: 'Per Ogni Occasione', text: 'Compleanni, matrimoni, battesimi, anniversari: il dolce giusto per ogni momento.' }
  ];
}
