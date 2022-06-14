import { html } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { View } from '../../views/view';
import '@vaadin/text-field';
import '@vaadin/button';
import '@vaadin/grid';
import '@vaadin/combo-box';
import '@vaadin/vertical-layout';
import '@vaadin/horizontal-layout';
import '@vaadin/notification';
import '@vaadin/icon';
import '@vaadin/icons';
import { ComboBox, ComboBoxDataProviderCallback, ComboBoxDataProviderParams } from '@vaadin/combo-box';
import { repeat } from 'lit/directives/repeat.js';
import Personne from 'Frontend/generated/com/example/application/Personne';
import { searchPersonne } from 'Frontend/generated/AppEndpoint';

//tests
import '@vaadin/list-box';
import '@vaadin/item';
import '@vaadin/text-field';


@customElement('list-view')
export class ListView extends View {
  connectedCallback() {
    super.connectedCallback();
    this.classList.add(
      'box-border',
      'flex',
      'flex-col',
      'p-m',
      'gap-s',
      'w-full',
      'h-full'
    );
  }
  
  @state()
  private persons: Personne[] = [];

  @state()
  private selectedPersons: Personne[] = [];

  render() {
    return html`
      <vaadin-vertical-layout theme="spacing">
        <div class="toolbar flex gap-s w-full items-end stylingApp">

          <vaadin-combo-box 
            label="search" 
            
            item-label-path="appellation"
            item-value-path="mail"
            class="comboBox"
            
            @change=${this.selectPerson}
            .dataProvider=${this.dataProvider}
          >
          <!--
            .items="${this.persons}" 
            @filter-changed=${this.filterChanged} 
          -->
          </vaadin-combo-box>
        </div>
        
        <vaadin-horizontal-layout style="flex-wrap: wrap" theme="spacing">
          ${repeat(
          this.selectedPersons,
          (Person) => Person.email,
          (Person) => html`
            <span class="hovertext" theme="badge pill contrast">
              <span>
                ${Person.email}
              </span>
              <vaadin-button
                theme="contrast tertiary-inline"
                style="margin-inline-start: var(--lumo-space-xs)"
                @click="${() => this.deletePerson(Person)}"
              >
                <vaadin-icon icon="vaadin:close-small"></vaadin-icon>
              </vaadin-button>
            </span>
          `
          )}
        </vaadin-horizontal-layout>
      </vaadin-vertical-layout>
    `;
  }

  async dataProvider(params: ComboBoxDataProviderParams, callback: ComboBoxDataProviderCallback<Personne>){
    const filter = params.filter;
    var jsonResult = await searchPersonne(filter);
    if (jsonResult !== undefined) {
      jsonResult.forEach(person => {
        if (person !== undefined) {
          // console.log("person !== undefined", person);
          if (this.personExistInList(person,this.persons) == false) {
            // console.log("personExistInList == false")
            this.persons.push(person);
          }
        }
      });
    }
    console.log(this.persons);
    callback(this.persons,this.persons.length);
    
  }
  async filterChanged(e: CustomEvent) { // fonction faisant un appel à l'api de l'annuaireWS (situé dans le backend Java)
    this.clearPersons();
    const filter = e.detail.value as string;
    var jsonResult = await searchPersonne(filter);
    if (jsonResult !== undefined) {
      jsonResult.forEach(person => {
        if (person !== undefined) {
          // console.log("person !== undefined", person);
          if (this.personExistInList(person,this.persons) == false) {
            // console.log("personExistInList == false")
            this.persons.push(person);
          }
        }
      });
    }
    console.log(this.persons);
  }

  personExistInList(personToCheck:Personne, listToCheck: Personne[]){ // Fonction permettant de savoir si une personne se trouve dans une liste de personne
    var result = false;
    listToCheck.forEach(person => {
      if (person.email == personToCheck.email) {
        result = true
      }
    });
    return result;
  }

  clearPersons(){
    this.persons.splice(0,this.persons.length);
  }
  
  selectPerson({target}:Event){ // ajoute une personne dans le tableau des personnes selectionnées
    var { selectedItem } = target as ComboBox;
    if (selectedItem == null) {
      return;
    }
    var checking = this.personExistInList(selectedItem as Personne, this.selectedPersons); // false = la personne n'est pas déjà dans le tableau
    if (checking == false) {
      const personneSelectionne = selectedItem as Personne;
      this.selectedPersons.unshift(personneSelectionne);
      (target as ComboBox).selectedItem = null;
      this.persons = [];
    }
    
  }

  deletePerson(person:Personne) { // enleve une personne du tableau des personnes selectionnées
    if (person) {
      this.selectedPersons = this.selectedPersons.filter((p) => p !== person);
    }
  }
  
}
