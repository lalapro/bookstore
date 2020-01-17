import {Platform, Dimensions} from 'react-native';
import AppImages from '../assets/AppImages';

const ANDROID = Platform.OS === 'android';
const DIMENSIONS = Dimensions.get('window');
const WIDTH = DIMENSIONS.width;
const HEIGHT = DIMENSIONS.height;
const IPHONEX = HEIGHT >= 800;
const RETINA20 = DIMENSIONS.height === 667;
const RETINA55 = DIMENSIONS.width > 375;
const RETINA35 = DIMENSIONS.height === 480;
const RETINA4 = DIMENSIONS.width < 375 && DIMENSIONS.height < 570;
const SMALLSCREEN = DIMENSIONS.height < 570;
const TOP_PADDING = SMALLSCREEN ? 35 : 100;
const SEARCH_BAR_HEIGHT = ANDROID ? 55 : 25;
const FOOTER_HEIGHT = 100;
const TITLE_CONTAINER = 90;
const MARGIN_HEIGHT = ANDROID ? 80 : 60;
const SCROLLVIEW_HEIGHT = HEIGHT - TOP_PADDING - FOOTER_HEIGHT - SEARCH_BAR_HEIGHT - TITLE_CONTAINER - MARGIN_HEIGHT // height of screen minus other components and margins
// console.log('SCROLLVIEW_HEIGHT', SCROLLVIEW_HEIGHT)
const fieldConfig = {
  TOP_PADDING,
  SEARCH_BAR_HEIGHT,
  SCROLLVIEW_HEIGHT,
  FOOTER_HEIGHT,
  TITLE_CONTAINER
};
const config = {
  MAIN_NAVIGATION: [
    'Biography',
    'Business',
    'Cookbooks',
    'Fiction',
    'Health & Fitness',
    'History',
    'Religion & Inspiration',
    'Self-Improvement'
  ],
  SUB_NAVIGATION: [
    'African American Fiction',
    'Anthologies',
    'Christian Fiction',
    'Drama',
    'Essays',
    'Fiction & Literature Classics',
    'Fiction Subjects',
    'Folklore & Mythology',
    'Graphic Novels & Comic Books',
    'Historical Fiction',
    'Horror',
    'Humorous Fiction',
    'Letters',
    'Literary Criticism',
    'Mystery & Crime',
    'Nautical & Maritime Fiction',
    'Novels & Short Stories',
    'People & Cultures',
    'Poetry',
    'Romance',
    'Science Fiction & Fantasy',
    'Short Stories',
    'Teen Fiction',
    'Thrillers',
    'War & Military Fiction',
    'Westerns',
    "Women's Fiction",
    'World Literature'
  ],
  BOOKS: [
    {
      name: 'The Psychopath Test',
      image: AppImages.book1,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
      price: '$12.34',
      author: 'Jon Ronson'
    },
    {
      name: '1000 Black Umbrellas',
      image: AppImages.book2,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
      price: '$22.12',
      author: 'Daniel McGinn'
    },
    {
      name: 'The Washington Connection',
      image: AppImages.book3,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
      price: '$34.12',
      author: 'Noam Chomsky'
    },
    {
      name: 'Annihilation',
      image: AppImages.book4,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
      price: '$14.58',
      author: 'Jeff Vandermeer'
    },
    {
      name: 'The Pale King',
      image: AppImages.book5,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
      price: '$15.69',
      author: 'David Wallace'
    },
    {
      name: 'The Colossus of Maroussi',
      image: AppImages.book6,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
      price: '$23.21',
      author: 'Henry Miller'
    },
    {
      name: 'Smothered in Hugs',
      image: AppImages.book7,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
      price: '$17.00',
      author: 'Dennis Cooper'
    },
    {
      name: 'The Science of the Bottom Line',
      image: AppImages.book8,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
      price: '$82.12',
      author: 'Marina Krokovsky'
    },
    {
      name: 'How I killed',
      image: AppImages.book9,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
      price: '$19.17',
      author: 'Mike Brown'
    },
    {
      name: 'The Visible Man',
      image: AppImages.book10,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
      price: '$13.37',
      author: 'Chuck Klosterman'
    },
  ]

};
export default {
  ...fieldConfig,
  ...config,
};
