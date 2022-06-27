import { createStore, produce } from 'solid-js/store';

const [character, setCharacter] = createStore({
  name: '',
  abilities: {
    strength: 10,
    dexterity: 10,
    constitution: 10,
    wisdom: 10,
    intelligence: 10,
    charisma: 10,
  }
});

export function setName(name: string) {
  setCharacter(
    produce(c => {
      c.name = name;
    })
  )
}

export function setAbility(name: keyof Character['abilities'], value: number) {
  setCharacter(
    produce(c => {
      c.abilities[name] = value;
    })
  );
}

export { character };

export type Character = typeof character;