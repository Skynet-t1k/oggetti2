// Crea un oggetto agenda con una proprietà che comprenda una lista di contatti con un nome e un numero di telefono, ed abbia diverse funzionalità tra cui:
// mostrare tutti i contatti dell’agenda
// mostrare un singolo contatto
// eliminare un contatto dall’agenda
// aggiungere un nuovo contatto
// modificare un contatto esistente  

let rubrica = {
    'contacts': [
        {'nome': 'Nicola', 'telefono': '3331111111'},
        {'nome': 'Lorenzo', 'telefono': '3332222222'},
        {'nome': 'Paola', 'telefono': '3333333333'},
        {'nome': 'Jenny', 'telefono': '3334444444'}
    ],

    mostraContatti : function(){
       console.log(this.contacts);
    },

    mostraContatto : function(nomeFunz){
        let contact = this.contacts.find((contact)=> contact.nome === nomeFunz);
        if (contact){
            console.log(contact);
        }else{
            console.log(`Contatto ${nomeFunz} non trovato`);
        }
    },

    eliminaContatto : function(nomeFunz){
        let index = this.contacts.findIndex((contact)=> contact.nome === nomeFunz);
        if (index >=0){
            console.log(`Contatto ${nomeFunz} eliminato`);
            this.contacts.splice(index, 1);
        }else{
            console.log(`Contatto ${nomeFunz} non trovato`);
        }
    },

    aggiungiContatto : function(nome, telefono){
        this.contacts.push({nome, telefono})
    },

    aggiornaContatto : function(oldNome, nuovoNome, nuovoNumero){
        let contact = this.contacts.find(contact => contact.nome === oldNome);
        if (contact) {
             contact.nome = nuovoNome;
             contact.telefono = nuovoNumero;
             console.log(`Contatto ${oldNome} aggiornato`);
        }else{
        console.log(`Contatto ${oldNome} non trovato`);
    }
    },

}

  


// rubrica.mostraContatti();
// rubrica.mostraContatto("Giuseppe");
// rubrica.mostraContatto("Nicola");
// rubrica.eliminaContatto("Giuseppe");
// rubrica.eliminaContatto("Nicola");
// rubrica.mostraContatti();
// rubrica.aggiungiContatto("Debora", "3335555");
// rubrica.mostraContatti();
// rubrica.aggiornaContatto("LichKing", "Giorgia", "345345345");
// rubrica.aggiornaContatto("Paola", "Giorgia", "345345345");
// rubrica.mostraContatti();
