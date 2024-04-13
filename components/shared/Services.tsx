import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { servicesData } from "@/lib/constants";

const Services = () => {
  return (
    <div className="md:h-screen w-screen mx-auto max-w-7xl flex flex-col items-center mt-5 rounded-2xl justify-center">
      <div className="border-solid border-darkerTeal mt-10 px-10 md:mx-96 border-2 rounded-lg text-center">
        <h1 className="text-base m-2 md:text-5xl uppercase">Services</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-3 md:gap-8 w-full px-10 mt-10 md:mt-20">
        {servicesData.map(({ items }, index) =>
          items.map((item, i) => (
            <Accordion
              key={index + "-" + i}
              type="single"
              collapsible
              className="w-full"
            >
              <AccordionItem value={item.description}>
                <AccordionTrigger>{item.condition}</AccordionTrigger>
                <AccordionContent>{item.description}</AccordionContent>
              </AccordionItem>
            </Accordion>
          ))
        )}
      </div>
    </div>
  );
};

export default Services;
