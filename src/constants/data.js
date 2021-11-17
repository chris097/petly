import { ReactComponent as DogIcon } from '../svgs/card-dog.svg';
// import { ReactComponent as CatIcon } from '../svgs/cat-icon.svg';
import { ReactComponent as BirdIcon } from '../svgs/bird-icon.svg';
import { ReactComponent as RabbitIcon } from '../svgs/rabbit-icon.svg';
import { ReactComponent as ReptileIcon } from '../svgs/reptile-icon.svg';

export const petTags = [
  { id: 1, avatar: <DogIcon />, name: 'Dogs'},
  { id: 2, avatar: <BirdIcon />, name: 'Bird'},
  { id: 3, avatar: <RabbitIcon />, name: 'Rabbit'},
  { id: 4, avatar: <ReptileIcon />, name: 'Reptile'},
];