import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { FAQS } from "@/data/site";

export default function FAQ() {
  return (
    <section id="faq" className="py-28 bg-[#F2F1EE]">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-16 fade-up">
          <div
            className="text-xs font-semibold tracking-widest uppercase mb-4"
            style={{ color: "var(--mavrik-orange)", fontFamily: "'Plus Jakarta Sans', sans-serif" }}
          >
            FAQ
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold leading-tight" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
            Frequently asked <span className="gradient-text">questions.</span>
          </h2>
        </div>

        <div className="fade-up max-w-3xl mx-auto bg-white rounded-2xl border border-border px-8">
          <Accordion type="single" collapsible>
            {FAQS.map((item, i) => (
              <AccordionItem key={item.q} value={`item-${i}`}>
                <AccordionTrigger
                  className="text-base font-bold py-5"
                  style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                >
                  {item.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed text-[15px]">{item.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
