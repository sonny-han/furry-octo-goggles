let day = ['Monday', 'Tuesday', 'Wedesnday', 'Thurdsay', 'Friday', 'Saturday', 'Sunday'];
let adjective = ['sweaty', 'sweet', 'seductive', 'agonizing', 'green'];
let noun = ['feet', 'steel', 'mold', 'coffee', 'gasoline'];
let verb = ['smiled', 'puked', 'jumped', 'winced', 'gasped', 'wondered', ]
const RandomDay = Math.floor(Math.random() * day.length);
const RandomAdjective = Math.floor(Math.random() * adjective.length);
const RandomNoun = Math.floor(Math.random() * noun.length);
const RandomVerb = Math.floor(Math.random() * verb.length);

document.write(`It was a cold ${RandomDay, day[RandomDay]} morning, when I woke up to the ${RandomAdjective, adjective[RandomAdjective]} smell of ${RandomNoun, noun[RandomNoun]} and ${RandomVerb, verb[RandomVerb]}.`)
