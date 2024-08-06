import { ref, computed } from 'vue';
import { defineStore } from 'pinia';
import { useRoute } from 'vue-router';
import { v4 as uuidv4 } from 'uuid';

export const useOptionsStore = defineStore('options', () => {
  const route = useRoute();
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
        { text: 'Go left', slug: 'left' },
        { text: 'Enter cave', slug: 'right' }
      ]
    },
    {
      id: uuidv4(),
      slug: 'left',
      heading: 'Left Path',
      text: 'You encounter a river.',
      direction: 'Do you want to swim across or walk along the river?',
      choices: [
        { text: 'Swim across', slug: 'swim-across' },
        { text: 'Walk along', slug: 'walk-along' }
      ]
    },
    {
      id: uuidv4(),
      slug: 'right',
      heading: 'Right Path',
      text: 'You find a cave. Do you want to enter the cave or continue walking?',
      choices: [
        { text: 'Enter the cave', slug: 'enter-cave' },
        { text: 'Continue walking', slug: 'continue-walking' }
      ]
    }
    // Add more choices as needed
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

  return { current };
});
