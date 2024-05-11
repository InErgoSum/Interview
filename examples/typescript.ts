// @ts-nocheck

// Напиши enum AnimalVoice, в котором будет два типа голосов: 'meow' и 'bark'


interface Animal {
  weight: number;
  voice: 'meow' | 'bark'
}

// Если убрать первую строку, будет ли где-то ошибка?
function nameCreature(animal: Animal): Animal & {name: string} {
  return {...animal, name: 'Bobby'};
}

const namedAnimal1 = nameCreature({voice: AnimalVoice.Bark, weight: 2, surname: 'Doggish'});
const namedAnimal2 = nameCreature({voice: AnimalVoice.Bark, weight: 2, childrenAmount: 1});
const namedAnimal3 = nameCreature({voice: AnimalVoice.Meow, weight: 2, comment: 'Good cat'});