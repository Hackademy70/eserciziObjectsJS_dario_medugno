/* ES.1
   Creare un oggetto persona con diverse proprietà ed un metodo che permetta alla persona di salutare.
*/

let person = {
    'name': 'Dario',
    'surname': 'Medugno',
    'age': 33,
    'gender' : 'maschio',

     // Metodo
'sayHello': function(){
   return 'Ciao a tutti mi chiamo ' + this.name + ' ' + this.surname + '.';
  }
}
console.log(person.sayHello());

/* ES.2
   Creare un oggetto agenda con una proprietà che comprenda una lista di contatti con un nome e un numero di telefono, ed abbia
   diverse funzionalità tra cui:
   - mostrare tutti i contatti dell'agenda
   - mostrare un singolo contatto
   - eliminare un contatto dall'agenda
   - aggiungere un nuovo contatto
   - EXTRA: modificare un contatto esistente.
*/

let rubrica = {
    'contacts': [
        {'name' : 'Dario', 'number': 3764536728},
        {'name' : 'Nicole', 'number': 37675536698},
        {'name' : 'Pasquale', 'number': 37645369474},
        {'name' : 'Ottavio', 'number': 376453634286},
      ],

      // mostrare tutti i  contatti della rubrica
    'showContact': function(){
        this.contacts.forEach(element => console.log(`Nome: ${element.name}, Numero: ${element.number}`));
    },

    // mostrare un singolo contatto
    'singleContact': function(nome){
        let filtered = this.contacts.filter(element => nome == element.name);
        console.log(`Nome: ${filtered[0].name}, Numero: ${filtered[0].number}`);
    },
    
    // eliminare un contatto dalla rubrica
    'deleteContact': function(del){
     let filtered =this.contacts.filter(element => element.name !== del);
     console.log(filtered);
    },

    // aggiungere un nuovo contatto
    'addContact': function(newName, newNumber){
       this.contacts.push({'name': newName, 'number': newNumber});
     },

     // modificare un contatto esistente
     
     'changeContact': function(){
         let change = prompt("Quale contatto vuoi modificare?");
         let search = this.contacts.findIndex(element => element.name == change);
         if(search >= 0){
         let nameChange = prompt("inserisci il nome");
         let numberChange = prompt("inserisci il numero");
         this.contacts[search].name = nameChange;
         this.contacts[search].number = numberChange;
         rubrica.showContact();
         

        } else {
            console.log("Contatto non trovato");
        }

    
    } 

}

rubrica.changeContact();
     
     
    
/*
// mostrare singolo contatto
 console.log(rubrica.singleContact("Dario"));

// eliminare contatto
console.log(rubrica.deleteContact());

// aggiungere un nuovo contatto
let addName = prompt("Aggiungi un nome al nuovo contatto:");
let addNumber = prompt("Aggiungi un numero al nuovo contatto:");
rubrica.addContact(addName, addNumber);
console.log(rubrica.showContact());

// modificare un contatto esistente
rubrica.changeContact("Nicola"); */


