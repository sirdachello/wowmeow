import { StaticImageData } from 'next/image'


import YelisieievCat from 'public/images/AboutPage/Employees/YelisieievCat.png'
import GorelovCat from 'public/images/AboutPage/Employees/GorelovCat2.png'
import BielikCat from 'public/images/AboutPage/Employees/BielikCat.png'
import NovikovaCat from 'public/images/AboutPage/Employees/NovikovaCat.png'
import DavydovaCat from 'public/images/AboutPage/Employees/DavydovaCat.png'
import VoitikCat from 'public/images/AboutPage/Employees/VoitikCat.png'
import RybalchenkoCat from 'public/images/AboutPage/Employees/RybalchenkoCat.png'
import LenskaCat from 'public/images/AboutPage/Employees/LenskaCat.png'
import KholodCat from 'public/images/AboutPage/Employees/KhalodCat.png'
import BeztsinnyyCat from 'public/images/AboutPage/Employees/BestsinnyyCat.png'
import ZhezherCat from 'public/images/AboutPage/Employees/ZhezherCat.png'
import KliuchevCat from 'public/images/AboutPage/Employees/KliuchevCat.png'
import PoliushkoCat from 'public/images/AboutPage/Employees/PoliushkoCat.png'



import Yelisieiev from "public/images/AboutPage/Employees/Yeliseev.png"
import Gorelov from "public/images/AboutPage/Employees/Gorelov.png"
import Bielik from "public/images/AboutPage/Employees/Bielik.png"
import Novikova from "public/images/AboutPage/Employees/Novikova.png"
import Davydova from "public/images/AboutPage/Employees/Davydova.png"
import Voitik from "public/images/AboutPage/Employees/Voitik.png"
import Rybalchenko from "public/images/AboutPage/Employees/Rybalchenko.png"
import Lenska from "public/images/AboutPage/Employees/Lenska.png"
import Kliuchev from "public/images/AboutPage/Employees/Kliuchev.jpg"
import Kholod from "public/images/AboutPage/Employees/Kholod.png"
import Beztsinnyy from "public/images/AboutPage/Employees/Beztsinnyy.png"
import Zhezher from "public/images/AboutPage/Employees/Zhezher.png"
import Poliushko from "public/images/AboutPage/Employees/Poliushko.jpg"

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
    employeePhoto: Yelisieiev,
  },
  {
    id: "2",
    name: "Konstantin Gorelov",
    title: "Art Director & Co-founder",
    short_title: 'Art Director & CF',
    catImage: GorelovCat,
    employeePhoto: Gorelov,
  },
  {
    id: "3",
    name: "Maryna Bielik",
    title: "Game Designer",
    catImage: BielikCat,
    employeePhoto: Bielik,
  },
  {
    id: "4",
    name: "Karina Novikova",
    title: "Lead UI/UX Designer",
    catImage: NovikovaCat,
    employeePhoto: Novikova,
  },
  {
    id: "5",
    name: "Yuliia Davydova",
    title: "Narrative Designer",
    catImage: DavydovaCat,
    employeePhoto: Davydova,
  },
  {
    id: "6",
    name: "Vladislav Voitik",
    title: "QA Engineer",
    catImage: VoitikCat,
    employeePhoto: Voitik,
  },
  {
    id: "7",
    name: "Grigoryi Rybalchenko",
    title: "Motion Designer",
    catImage: RybalchenkoCat,
    employeePhoto: Rybalchenko,
  },
  {
    id: "8",
    name: "Alona Lenska",
    title: "Senior 2D Artist",
    catImage: LenskaCat,
    employeePhoto: Lenska,
  },
  {
    id: "13",
    name: "Danylo Poliushko",
    title: "Unity Developer",
    catImage: PoliushkoCat,
    employeePhoto: Poliushko,
  },
  {
    id: "12",
    name: "Valentine Kliuchev",
    title: "Front-End Developer",
    catImage: KliuchevCat,
    employeePhoto: Kliuchev,
  },
  {
    id: "9",
    name: "Daria Kholod",
    title: "UI/UX Designer",
    catImage: KholodCat,
    employeePhoto: Kholod,
  },
  {
    id: "10",
    name: "Oleksiy Beztsinnyy",
    title: "Marketing 2D Artist",
    catImage: BeztsinnyyCat,
    employeePhoto: Beztsinnyy,
  },
  {
    id: "11",
    name: "Oleksandr Zhezher",
    title: "Producer & Sound Designer",
    short_title: 'Producer & SFX', 
    catImage: ZhezherCat,
    employeePhoto: Zhezher,
  },
];