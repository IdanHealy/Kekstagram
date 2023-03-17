import {randomNumberinInterval, getArrayRandomElement} from './utils.js';
'use strict'
const PHOTOS_COUNT = 25;

let photoDescriptions = [
  'Прекрасный день!',
  'Отдыхаем!',
  'Классное фото?',
  'Вау!',
  'Хотите сфотографирую?',
];

const Likes = {
  MIN: 15,
  MAX: 250,
};

const messages = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];

const commentsNames = [
  'Эвда Родриг',
  'Тейран Кёниг',
  'Эрбин Джонсон',
  'Murena Kirk',
  'Декий Ардер',
  'Алкей Валлериус',
];

const commentsArray = [];

const makeComments = () => {

  commentsArray.push({
    id: randomNumberinInterval(1,999),
    avatar: 'img/avatar-'+ randomNumberinInterval(1,6) +'.svg',
    message: getArrayRandomElement(messages),
    name: getArrayRandomElement(commentsNames),
  })
  return commentsArray;
};

makeComments();

let photosArray = [];

const makePhotoDescription = () => {
  for (let i = 0; i < PHOTOS_COUNT; i++) {
    photosArray.push({
      id: i,
      url: 'img/photos/' + (i + 1) + '.jpg',
      description: getArrayRandomElement(photoDescriptions),
      likes: randomNumberinInterval(Likes.MIN, Likes.MAX),
      comments: getArrayRandomElement(commentsArray),
    })
  }
  return photosArray;
};

export { makePhotoDescription };
