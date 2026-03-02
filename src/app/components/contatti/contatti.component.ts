import { Component } from '@angular/core';

@Component({
  selector: 'app-contatti',
  templateUrl: './contatti.component.html',
  styleUrls: ['./contatti.component.scss']
})
export class ContattiComponent {
  submitted = false;

  form = {
    nome: '',
    email: '',
    tipo: '',
    occasione: '',
    messaggio: ''
  };

  tipiDolce = ['Torta personalizzata', 'Cupcakes', 'Biscotti decorati', 'Cioccolatini & Praline', 'Altro'];

  contactInfo = [
    { icon: '📧', label: 'Email',    value: 'ciao@dolcemomento.it' },
    { icon: '📱', label: 'Telefono', value: '+39 347 123 4567' },
    { icon: '📸', label: 'Instagram',value: '@dolce.momento' }
  ];

  onSubmit() {
    this.submitted = true;
  }

  resetForm() {
    this.submitted = false;
    this.form = { nome: '', email: '', tipo: '', occasione: '', messaggio: '' };
  }
}
