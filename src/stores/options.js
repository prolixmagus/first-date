import { computed, ref } from 'vue';
import { defineStore } from 'pinia';
import { useRoute } from 'vue-router';
import { v4 as uuidv4 } from 'uuid';

export const useOptionsStore = defineStore('options', () => {
  const route = useRoute();
  const isHidden = ref(true);

  const oldPaths = [`/adventure/left`];
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
      paragraphs: [
        {
          text: 'It’s been a hard few months - bone dry conversations, forgettable restaurants, so many ghosts you could legally identify as a cemetery. You were just about to trade in your phone for a state-of-the-art spatula when suddenly, a match! They’re gorgeous, witty, down-to-earth, and seem eager to meet you.'
        }
      ],
      decision: 'You stand before the sliding doors of your local grocery store...',
      choices: [
        { text: 'go right', slug: 'right' },
        { text: 'return home', slug: 'start' }
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

  // watch(
  //   () => route.path,
  //   (newPath, oldPath) => {
  //     console.log(oldPath);
  //     if (oldPaths.includes(oldPath)) {
  //       isHidden.value = false;
  //     } else {
  //       isHidden.value = true;
  //     }
  //   }
  // );

  // watch(
  //   () => isHidden.value,
  //   (newValue, oldValue) => {
  //     console.log(newValue);
  //   }
  // );

  return { current };
});
