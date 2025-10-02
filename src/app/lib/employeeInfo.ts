import { StaticImageData } from 'next/image'

import YelisieievCat from 'public/images/AboutPage/Employees/YelisieievCat.png'
import GorelovCat from 'public/images/AboutPage/Employees/GorelovCat2.png'
import NovikovaCat from 'public/images/AboutPage/Employees/NovikovaCat.png'
import RybalchenkoCat from 'public/images/AboutPage/Employees/RybalchenkoCat.png'
import KholodCat from 'public/images/AboutPage/Employees/KhalodCat.png'
import ZhezherCat from 'public/images/AboutPage/Employees/ZhezherCat.png'
import KliuchevCat from 'public/images/AboutPage/Employees/KliuchevCat.png'
import PoliushkoCat from 'public/images/AboutPage/Employees/PoliushkoCat.png'

import Yelisieiev from "public/images/AboutPage/Employees/Yeliseev.png"
import Gorelov from "public/images/AboutPage/Employees/Gorelov.png"
import Novikova from "public/images/AboutPage/Employees/Novikova.png"
import Rybalchenko from "public/images/AboutPage/Employees/Rybalchenko.png"
import Kliuchev from "public/images/AboutPage/Employees/Kliuchev.jpg"
import Kholod from "public/images/AboutPage/Employees/Kholod.png"
import Zhezher from "public/images/AboutPage/Employees/Zhezher.png"
import Poliushko from "public/images/AboutPage/Employees/Poliushko.jpg"


import ViktoriaVizorCat from 'public/images/AboutPage/Employees/ViktoriaVizorCat.png'
import ViktoriaVizor from 'public/images/AboutPage/Employees/ViktoriaVizor.png'

import AnnaErmakovaCat from 'public/images/AboutPage/Employees/AnnaErmakovaCat.png'
import AnnaErmakova from 'public/images/AboutPage/Employees/AnnaErmakova.png'

import ArturGorelov from 'public/images/AboutPage/Employees/ArturGorelov.png'
import ArturGorelovCat from 'public/images/AboutPage/Employees/ArturGorelovCat.png'

import RinaSamsonova from 'public/images/AboutPage/Employees/RinaSamsonova.png'
import RinaSamsonovaCat from 'public/images/AboutPage/Employees/RinaSamsonovaCat.png'

import MariyaShusharina from 'public/images/AboutPage/Employees/MariyaShusharina.png'
import MariyaShusharinaCat from 'public/images/AboutPage/Employees/MariyaShusharinaCat.png'

import MarinaVovna from 'public/images/AboutPage/Employees/MarinaVovna.png'
import MarinaVovnaCat from 'public/images/AboutPage/Employees/MarinaVovnaCat.png'

import IvannaSharak from 'public/images/AboutPage/Employees/IvannaSharak.png'
import IvannaSharakCat from 'public/images/AboutPage/Employees/IvannaSharakCat.png'

import DimaZhavoronkov from 'public/images/AboutPage/Employees/DimaZhavoronkov.png'
import DimaZhavoronkovCat from 'public/images/AboutPage/Employees/DimaZhavoronkovCat.png'

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
    name: "Viktoria Vizor",
    title: "Art Manager",
    catImage: ViktoriaVizorCat,
    employeePhoto: ViktoriaVizor,
  },
  
  {
    id: "4",
    name: "Oleksandr Zhezher",
    title: "Producer & Sound Designer",
    short_title: 'Producer & SFX', 
    catImage: ZhezherCat,
    employeePhoto: Zhezher,
  },
  {
    id: "5",
    name: "Artur Gorelov",
    title: "AI Artist",
    catImage: ArturGorelovCat,
    employeePhoto: ArturGorelov,
  },
  {
    id: "6",
    name: "Karina Novikova",
    title: "Lead UI/UX Designer",
    catImage: NovikovaCat,
    employeePhoto: Novikova,
  },
  {
    id: "7",
    name: "Dima Zhavoronkov",
    title: "Lead QA",
    catImage: DimaZhavoronkovCat,
    employeePhoto: DimaZhavoronkov,
  },
  {
    id: "8",
    name: "Anna Ermakova",
    title: "2D Artist",
    catImage: AnnaErmakovaCat,
    employeePhoto: AnnaErmakova,
  },
  {
    id: "9",
    name: "Grigoryi Rybalchenko",
    title: "Motion Designer",
    catImage: RybalchenkoCat,
    employeePhoto: Rybalchenko,
  },
  {
    id: "10",
    name: "Danylo Poliushko",
    title: "Unity Developer",
    catImage: PoliushkoCat,
    employeePhoto: Poliushko,
  },
  {
    id: "11",
    name: "Marina Vovna",
    title: "UI/UX Designer",
    catImage: MarinaVovnaCat,
    employeePhoto: MarinaVovna,
  },
  {
    id: "12",
    name: "Valentine Kliuchev",
    title: "Front-End Developer",
    catImage: KliuchevCat,
    employeePhoto: Kliuchev,
  },
  {
    id: "13",
    name: "Daria Kholod",
    title: "UI/UX Designer",
    catImage: KholodCat,
    employeePhoto: Kholod,
  },
  {
    id: "14",
    name: "Ivanna Sharak",
    title: "2D Artist",
    catImage: IvannaSharakCat,
    employeePhoto: IvannaSharak,
  },
  {
    id: "15",
    name: "Rina Samsonova",
    title: "Lead 2D Artist",
    catImage: RinaSamsonovaCat,
    employeePhoto: RinaSamsonova,
  },
  {
    id: "16",
    name: "Mariya Shusharina",
    title: "Front-End Developer",
    catImage: MariyaShusharinaCat,
    employeePhoto: MariyaShusharina,
  },
];