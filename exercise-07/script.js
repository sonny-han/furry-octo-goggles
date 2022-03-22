let day = ['Monday', 'Tuesday', 'Wedesnday', 'Thurdsay', 'Friday', 'Saturday', 'Sunday'];
let adjective = ['sweaty', 'sweet', 'seductive', 'agonizing', 'green', 'blissful', 'musty', 'chocolatey', 'dank', 'sharp', 'earthy', 'delicious', 'citric'];
let noun = ['feet', 'steel', 'mold', 'coffee', 'gasoline', 'chocolate', 'the cat', 'the drywall', 'beer', 'wine', 'despair', 'bliss', 'milk', 'the outside', 'the inside', 'the kitchen', 'earthworms', 'the president', 'the squirrel', 'carrots'];
let verb = ['smiled', 'puked', 'jumped', 'winced', 'gasped', 'wondered', 'hurled', 'spat', 'chuckled', 'twitched', 'yawned', 'chortled', 'wept', 'screamed']
const RandomDay = Math.floor(Math.random() * day.length);
const RandomAdjective = Math.floor(Math.random() * adjective.length);
const RandomNoun = Math.floor(Math.random() * noun.length);
const RandomVerb = Math.floor(Math.random() * verb.length);

document.write(`It was a cold ${RandomDay, day[RandomDay]} morning, when I woke up to the ${RandomAdjective, adjective[RandomAdjective]} smell of ${RandomNoun, noun[RandomNoun]} and ${RandomVerb, verb[RandomVerb]}.`)
