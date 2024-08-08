import { computed, watch, ref } from 'vue';
import { defineStore } from 'pinia';
import { useRoute } from 'vue-router';
import { v4 as uuidv4 } from 'uuid';

export const useOptionsStore = defineStore('options', () => {
  const route = useRoute();
  const isHidden = ref(true);
  const finalePaths = [`/adventure/finale-gaye`];

  const list = [
    {
      id: uuidv4(),
      slug: 'start',
      heading: 'Dating is Awful',
      paragraphs: [
        {
          text: 'It’s been a hard few months - bone dry conversations, forgettable restaurants, so many ghosts you could legally identify as a cemetery. You were just about to trade in your phone for a state-of-the-art spatula when suddenly, a match! They’re gorgeous, witty, down-to-earth, and seem eager to meet you.'
        },
        {
          text: '“I’m sick of going out all the time,” they say.'
        },
        {
          text: '“What if I cooked for you?” you reply.'
        },
        {
          text: '“That sounds amazing! Just don’t murder me, okay?”'
        }
      ],
      decision: 'You stand before the sliding doors of your local grocery store...',
      choices: [
        { text: 'Enter and embrace the air conditioning.', slug: 'enter-store' },
        { text: 'Turn around. This is too stressful.', slug: 'turn-around' }
      ]
    },
    {
      id: uuidv4(),
      slug: 'turn-around',
      heading: 'Turn Around',
      paragraphs: [
        {
          text: 'A feeling of dread washes over you. The sensation only increases as more people enter and leave. The flourescent light, the wooshing sound of the doors, the endles possibilities. Fish Tacos? Penne Pasta? Eggplant Stir Fry? You desperately want to flee, but you stand still, clearly blocking the way.'
        },
        {
          text: 'Fortunately, out of the corner of your eyes, you see a Girl Scout approaching. Ain’t nobody got time for that. You turn swiftly and head home, laughing at her distant pleas.'
        },
        {
          text: 'After an uneventful drive, you arrive home. The same as it ever was. You have a few hours to kill before your date arrives. Plenty of time to order in.'
        },
        {
          text: 'A few google-ations later and your order is on its way. Burritos - can’t go wrong with that.'
        }
      ],
      decision: 'So, what should you do to pass the time?',
      choices: [
        { text: 'Check out that new documentary about cheese on Netflix.', slug: 'watch-netflix' },
        { text: 'Doom scroll [insert-social-media-app]', slug: 'doom-scroll' },
        {
          text: 'Clean the apartment and set the table like a boss',
          slug: 'set-the-mood'
        }
      ]
    },
    {
      id: uuidv4(),
      slug: 'watch-netflix',
      heading: 'Watch Netflix',
      paragraphs: [
        {
          text: 'You sit down on the couch, only to realize that the remote is on a chair across the room. This shouldn’t be a big deal, but you’re already on edge from the grocery store and that wretched Girl Scout. You turn on the documentary.'
        },
        {
          text: '“I didn’t realize there are 2,000 varieties of cheese!” you say to the empty apartment. “I can’t wait to learn more cool cheese facts!”'
        },
        {
          text: 'A text message.'
        },
        {
          text: '“We still on for tonight?,”'
        },
        {
          text: 'Suddenly, you don’t feel very well.'
        },
        {
          text: '“Sorry, something came up. Rain check?”'
        },
        {
          text: 'You toss the phone to the side, not caring to read the response. You have hours and hours of cheese-filled wonder ahead of you. Who needs love when you have streaming?'
        }
      ],
      decision: 'Ya cheesed it.',
      choices: [{ text: 'Restart', slug: 'start' }]
    },
    {
      id: uuidv4(),
      slug: 'doom-scroll',
      heading: 'Doom Scroll',
      paragraphs: [
        {
          text: 'You open up [[social-media-app]] and begin to scroll. Look, a video about a dog. Look, a video about a baby. Look, a video about a baby dog. Screaming people running out of a burning building. A helicopter joy-ride over the Rocky Mountains. A person commenting on a video game streamer commenting on a thirst trap. At some point, the food comes, but you were on your phone so you didn’t look up. Beauty and makeup tips to look ultra cottege-core. Top 10 assassinations in history. A lorem. A lorem ipsum. A lorem ipsum dolor sit amet, consectetur adipisicing elittttzzzzzzzzzzzzzzzzzzz...'
        }
      ],
      decision: 'You awaken to a loud knock!',
      choices: [{ text: 'Your date must be here! Shit!', slug: 'fell-asleep' }]
    },
    {
      id: uuidv4(),
      slug: 'fell-asleep',
      heading: 'Fell Asleep',
      paragraphs: [
        {
          text: 'You rush to answer the door.'
        },
        {
          text: '“H-Hey! Hi! Come in!”'
        },
        {
          text: '“You ok? You look like you just woke up.”'
        },
        {
          text: '“I guess I took a nap and lost track of time...”'
        },
        {
          text: 'Aside from the initial stumble, the night proceeds fine. It is slightly awkward that you are wearing sweatpants while your date is all dressed up, but what can you do. You have good conversation over an ice-breaker board game. When it comes time for dinner, you arrange it just like a homemade meal, tossing the to-go containers in the trash.'
        }
      ],
      decision: '“Wow, I can’t believe you made this from scratch!”, they say.',
      choices: [
        { text: 'Lie. “Yup! Been cooking since I was a baby.”', slug: 'lie' },
        { text: 'Be honest. “I wanted to make a good impression, so I ordered in.”', slug: 'truth' }
      ]
    }
  ];

  const current = computed(function () {
    const found = list.find(function (option) {
      return option.slug === route.params.slug;
    });
    if (found) {
      return found;
    }
    return list[0];
  });

  watch(
    () => route.path,
    (finalePath, oldPath) => {
      console.log(oldPath);
      if (finalePaths.includes(finalePath)) {
        isHidden.value = false;
      } else {
        isHidden.value = true;
      }
    }
  );

  watch(
    () => isHidden.value,
    (newValue, oldValue) => {
      console.log(newValue);
    }
  );

  return { current, isHidden, finalePaths };
});
