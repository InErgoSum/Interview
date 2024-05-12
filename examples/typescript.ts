// @ts-nocheck

// Напиши enum AnimalVoice, в котором будет два типа голосов: 'meow' и 'bark'


interface Animal {
  weight: number;
  voice: 'meow' | 'bark'
}

// Если убрать первую строку, будет ли где-то ошибка?
function nameCreature(animal: Animal, name: string): Animal & {name: string} {
  return {...animal, name};
}

const namedAnimal1 = nameCreature({voice: AnimalVoice.Bark, weight: 2, surname: 'Doggish'}, 'Charlie');
const namedAnimal2 = nameCreature({voice: AnimalVoice.Bark, weight: 2, childrenAmount: 1}, 'Sara');
const namedAnimal3 = nameCreature({voice: AnimalVoice.Meow, weight: 2, comment: 'Good cat'}, 'Venera');