import { Character, character, setName } from '../signals/character';

export interface Props {
  character: Character;
  onNameChange: (name: string) => void;
}

export function CharacterSheet({ character , onNameChange }: Props) {
  return (
    <article>
      <section>
        <label for="characterSheet__name">
          Name
          <input
            type="text"
            name="characterSheet__name"
            value={character.name}
            onKeyUp={e => onNameChange(e.currentTarget.value)}
          />
        </label>
      </section>
    </article>
  )
}

export default function CharacterSheetConnector() {
  return <CharacterSheet character={character} onNameChange={setName} />;
}