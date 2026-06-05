import { services } from "@/lib/portfolio-data";
import { IconPanel, SectionHeader } from "../portfolio-primitives";
import { Rocket } from "lucide-react";

export function ServicesSection() {
  return (
    <section id="services" className="portfolio-section">
      <div className="flex flex-col gap-10">
        <SectionHeader
          title="Services"
          description="Focused engineering help for teams and founders who need clarity, execution, and durable systems in ambiguous product environments."
        />

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => (
            <IconPanel key={service.title} icon={Rocket} title={service.title}>
              <p className="mt-4 text-sm leading-7 text-muted-foreground">
                {service.description}
              </p>
            </IconPanel>
          ))}
        </div>
      </div>
    </section>
  );
}
