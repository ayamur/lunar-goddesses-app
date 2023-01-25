import './App.css';

function App() {
  const goddesses - [
    {
      name: 'Hecate',
      about: 'a goddess in ancient Greek religion and mythology, most often shown holding a pair of torches, a key, snakes, or accompanied by dogs,[1] and in later periods depicted as three-formed or triple-bodied. She is variously associated with crossroads, entrance-ways, night, light, magic, witchcraft, the Moon, knowledge of herbs and poisonous plants, graves, ghosts, necromancy, and sorcery.',
      visitations: [
        {
          phase: 'Crescent Waning',
          intensity: 77
        },
        {
          phase: 'Half Moon Waxing',
          intensity: 92
        },
        {
          phase: 'New Moon',
          intensity: 68
        }
      ]
    },
    {
      name: 'Selene',
      about: 'is the personification of the Moon. Also known as Mene, she is traditionally the daughter of the Titans Hyperion and Theia, and sister of the sun god Helios and the dawn goddess Eos. She drives her moon chariot across the heavens. Several lovers are attributed to her in various myths, including Zeus, Pan, and the mortal Endymion. In post-classical times, Selene was often identified with Artemis, much as her brother, Helios, was identified with Apollo. Selene and Artemis were also associated with Hecate and all three were regarded as moon and lunar goddesses, but only Selene was regarded as the personification of the Moon itself. Her Roman equivalent is Luna.',
      visitations: [
        {
          phase: 'Full Moon',
          intensity: 88
        },
        {
          phase: 'New Moon',
          intensity: 79
        },
        {
          phase: '2019-02-23',
          intensity: 91
        },
        {
          phase:'Crescent Waxing',
          intensity: 95
        }
      ]
    },
    {
      name: 'Artemis',
      about: 'is the goddess of the hunt, the wilderness, wild animals, nature, vegetation, childbirth, care of children, and chastity. She was heavily identified with Selene, the Moon, and Hecate, another Moon goddess, and was thus regarded as one of the most prominent lunar deities in mythology, alongside the aforementioned two. She would often roam the forests of Greece, attended by her large entourage, mostly made up of nymphs, some mortals, and hunters. The goddess Diana is her Roman equivalent.',
      visitations: [
        {
          phase: 'Quarter Moon Waning',
          intensity: 62
        },
        {
          phase: 'Half Moon Waning',
          intensity: 74
        },
        {
          phase: 'Full Moon',
          intensity: 85
        }
      ]
    }
  ]
  return (
    <div>
      <GoddessList goddesses={goddesses}/>
    </div>
    )
  }
  
  export default App;
  
