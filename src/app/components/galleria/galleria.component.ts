import { Component } from '@angular/core';

interface GalleryItem {
  name: string;
  category: string;
  img: string;
  desc: string;
}

@Component({
  selector: 'app-galleria',
  templateUrl: './galleria.component.html',
  styleUrls: ['./galleria.component.scss']
})
export class GalleriaComponent {
  categories = ['Tutti', 'Torte', 'Cupcakes', 'Biscotti', 'Cioccolatini'];
  activeCategory = 'Tutti';
  lightboxItem: GalleryItem | null = null;

  items: GalleryItem[] = [
    { name: 'Torta Floreale Rosa',    category: 'Torte',       img: 'assets/images/gallery/torta-01.svg',      desc: 'Torta a tre strati con decorazioni floreali in pasta di zucchero.' },
    { name: 'Torta Matrimonio',       category: 'Torte',       img: 'assets/images/gallery/torta-02.svg',      desc: 'Elegante torta nuziale a cinque piani, bianca e oro.' },
    { name: 'Torta Compleanno',       category: 'Torte',       img: 'assets/images/gallery/torta-03.svg',      desc: 'Torta colorata per festeggiare in grande stile.' },
    { name: 'Cupcakes Arcobaleno',    category: 'Cupcakes',    img: 'assets/images/gallery/cupcake-01.svg',    desc: 'Cupcakes con frosting in burro colorato, perfetti per feste.' },
    { name: 'Cupcakes Red Velvet',    category: 'Cupcakes',    img: 'assets/images/gallery/cupcake-02.svg',    desc: 'Red velvet con crema al formaggio vellutata.' },
    { name: 'Cupcakes Limone',        category: 'Cupcakes',    img: 'assets/images/gallery/cupcake-03.svg',    desc: 'Freschi cupcakes al limone con meringa italiana.' },
    { name: 'Biscotti Decorati',      category: 'Biscotti',    img: 'assets/images/gallery/biscotto-01.svg',   desc: 'Biscotti con glassa royal icing su misura per ogni occasione.' },
    { name: 'Biscotti Natalizi',      category: 'Biscotti',    img: 'assets/images/gallery/biscotto-02.svg',   desc: 'Alberelli e fiocchi di neve in pasta frolla.' },
    { name: 'Biscotti San Valentino', category: 'Biscotti',    img: 'assets/images/gallery/biscotto-03.svg',   desc: 'Cuori glassati per un regalo dolcissimo.' },
    { name: 'Cioccolatini Assortiti', category: 'Cioccolatini',img: 'assets/images/gallery/cioccolato-01.svg', desc: 'Praline al fondente, al latte e bianco con ripieni artigianali.' },
    { name: 'Tartufi al Rum',         category: 'Cioccolatini',img: 'assets/images/gallery/cioccolato-02.svg', desc: 'Tartufi artigianali con cacao amaro e un tocco di rum.' },
    { name: 'Bark al Cioccolato',     category: 'Cioccolatini',img: 'assets/images/gallery/cioccolato-03.svg', desc: 'Bark di cioccolato bianco con frutti rossi e pistacchi.' }
  ];

  get filteredItems(): GalleryItem[] {
    if (this.activeCategory === 'Tutti') return this.items;
    return this.items.filter(i => i.category === this.activeCategory);
  }

  setCategory(cat: string) { this.activeCategory = cat; }
  openLightbox(item: GalleryItem) { this.lightboxItem = item; }
  closeLightbox() { this.lightboxItem = null; }
}
