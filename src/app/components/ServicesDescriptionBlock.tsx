import { services } from "../lib/services";
import ServicesItem from "./ServicesItem";

export default function ServicesDescriptionBlock() {
    return (
        <section className="bg-customBackground px-[8vw] pt-[80px] pb-[100px] 2xl:px-[240px]">
        <h1 className="text-customWhite mb-[30px] text-center text-(length:--font-lg) font-bold uppercase">
          Our services
        </h1>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-[20px] md:gap-x-[30px] lg:gap-x-[60px] 2xl:gap-x-[120px] gap-y-[60px]">
          {services.map(item => 
            <li key={item.id}>
              <ServicesItem title={item.title} description={item.description}/>
            </li>
          )}
        </ul>
      </section>
    )
}