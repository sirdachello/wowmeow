import { StaticImageData } from 'next/image'


import Valentine from 'public/images/AboutPage/Employees/Valentine.jpg'

import YelisieievCat from 'public/images/AboutPage/Employees/YelisieievCat.png'
import GorelovCat from 'public/images/AboutPage/Employees/GorelovCat2.png'
import BielikCat from 'public/images/AboutPage/Employees/BielikCat.png'
import NovikovaCat from 'public/images/AboutPage/Employees/NovikovaCat.png'
import DavydovaCat from 'public/images/AboutPage/Employees/DavydovaCat.png'
import VoitikCat from 'public/images/AboutPage/Employees/VoitikCat.png'
import RybalchenkoCat from 'public/images/AboutPage/Employees/RybalchenkoCat.png'
import LenskaCat from 'public/images/AboutPage/Employees/LenskaCat.png'
import KholodCat from 'public/images/AboutPage/Employees/KhalodCat.png'
import BeztsinnyyCat from 'public/images/AboutPage/Employees/Bestsinnyy.png'


export type Employee = {
  id: string;
  name: string;
  title: string;
  short_title?: string;
  catImage: StaticImageData;
  employeePhoto: StaticImageData;
};


export const employees: Employee[] = [
  {
    id: "1",
    name: "Oleksandr Yelisieiev",
    title: "CTO & Co-founder",
    catImage: YelisieievCat,
    employeePhoto: Valentine,
  },
  {
    id: "2",
    name: "Konstantin Gorelov",
    title: "Art Director & Co-founder",
    short_title: 'Art Director & CF',
    catImage: GorelovCat,
    employeePhoto: Valentine,
  },
  {
    id: "3",
    name: "Maryna Bielik",
    title: "Game Designer",
    catImage: BielikCat,
    employeePhoto: Valentine,
  },
  {
    id: "4",
    name: "Karina Novikova",
    title: "Lead UI/UX Designer",
    catImage: NovikovaCat,
    employeePhoto: Valentine,
  },
  {
    id: "5",
    name: "Yuliia Davydova",
    title: "Narrative Designer",
    catImage: DavydovaCat,
    employeePhoto: Valentine,
  },
  {
    id: "6",
    name: "Vladislav Voitik",
    title: "QA Engineer",
    catImage: VoitikCat,
    employeePhoto: Valentine,
  },
  {
    id: "7",
    name: "Grigoryi Rybalchenko",
    title: "Motion Designer",
    catImage: RybalchenkoCat,
    employeePhoto: Valentine,
  },
  {
    id: "8",
    name: "Alona Lenska",
    title: "Senior 2D Artist",
    catImage: LenskaCat,
    employeePhoto: Valentine,
  },
  {
    id: "9",
    name: "Daria Kholod",
    title: "UI/UX Designer",
    catImage: KholodCat,
    employeePhoto: Valentine,
  },
  {
    id: "10",
    name: "Oleksiy Beztsinnyy",
    title: "Marketing 2D Artist",
    catImage: BeztsinnyyCat,
    employeePhoto: Valentine,
  },
];