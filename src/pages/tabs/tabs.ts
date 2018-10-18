import { Component } from '@angular/core';

import { CardapioPage } from '../cardapio/cardapio';
import { ContatoPage } from '../contato/contato';
import { LojasPage } from '../lojas/lojas';


@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = CardapioPage;
  tab2Root = LojasPage;
  tab3Root = ContatoPage;

  constructor() {

  }
}
