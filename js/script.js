// Creare un oggetto che descriva uno studente, con le seguenti proprietà: nome, cognome e età.
const studenteClasse1 = {
    nome: 'Giorgio',
    cognome: 'Rossi',
    eta: 15
}

// Stampare a schermo attraverso un ciclo for-in tutte le proprietà dell'oggetto.
for (let key in studenteClasse1) {
    console.log(studenteClasse1[key]);
}

// Creare un array di oggetti di studenti.
const classe1 = [

    studenteClasse1,

    {
        nome: 'Anna',
        cognome: 'Verdi',
        eta: 16
    },   

    {
        nome: 'Massimo',
        cognome: 'Bianchi',
        eta: 17
    }
]

// Ciclare su tutti gli studenti e stampare per ognuno di essi, nome e cognome.

for (let i=0; i < classe1.length; i++) {

    const thisStudent = classe1[i];
    // console.log(thisStudent.nome + ' ' + thisStudent.cognome);
    
    // Alternative solution 

    // const PropertiesExtraction = {
    //     nome: thisStudent.nome,
    //     cognome: thisStudent.cognome,
    // };
    
    // console.log(PropertiesExtraction); 
}

// Dare la possibilità all’utente, attraverso 3 prompt(), di aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età.

let newStudentName = prompt ('Inserisci il nome');
let newStudentSurname = prompt ('Inserisci il cognome');
let newStudentAge = prompt parseInt(('Inserisci l\'eta'));

let newStudent = {
    nome: newStudentName,
    cognome: newStudentSurname,
    eta: newStudentAge
}

classe1.push(newStudent);

console.log(classe1);
