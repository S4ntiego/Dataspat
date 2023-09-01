"use client";
import { useFilterStore } from "@/context/filterStore";
import { Input } from "./ui/input";
import { Separator } from "./ui/separator";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Checkbox } from "./ui/checkbox";

export function SidebarNav({ categories }: string[]) {
  const {
    scoreMin,
    scoreMax,
    dateMin,
    dateMax,
    criticMin,
    criticMax,
    categoriesFilter,
    searchTerm,
    setScoreMin,
    setScoreMax,
    setDateMin,
    setDateMax,
    setCriticMin,
    setCriticMax,
    setCategoriesFilter,
    setSearchTerm,
  } = useFilterStore();

  return (
    <div className="w-full">
      <div className="p-1">
        <Input
          type="text"
          placeholder="Search..."
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <Separator className="mt-4" />
      <Accordion type="single" defaultValue="item-1" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>
            <div>
              User Score <span className="text-muted-foreground">(0-10)</span>
            </div>
          </AccordionTrigger>
          <AccordionContent>
            <div className="flex justify-between items-center">
              <Input
                type="number"
                placeholder="from"
                value={scoreMin}
                aria-label="Min User Score"
                onChange={(e) =>
                  setScoreMin(
                    e.target.value !== "" ? Number(e.target.value) : null
                  )
                }
              />
              <span className="mx-2">{`-`}</span>
              <Input
                type="number"
                placeholder="to"
                value={scoreMax}
                aria-label="Max User Score"
                onChange={(e) =>
                  setScoreMax(
                    e.target.value !== "" ? Number(e.target.value) : null
                  )
                }
              />
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
      <Accordion type="single" defaultValue="item-1" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>
            <div>
              Critic Score{" "}
              <span className="text-muted-foreground">(0-100)</span>
            </div>
          </AccordionTrigger>
          <AccordionContent>
            <div className="flex justify-between items-center p-1">
              <Input
                type="number"
                placeholder="from"
                value={criticMin}
                aria-label="Min Critic Score"
                onChange={(e) =>
                  setCriticMin(
                    e.target.value !== "" ? Number(e.target.value) : null
                  )
                }
              />
              <span className="mx-2">{`-`}</span>
              <Input
                type="number"
                placeholder="to"
                value={criticMax}
                aria-label="Max Critic Score"
                onChange={(e) =>
                  setCriticMax(
                    e.target.value !== "" ? Number(e.target.value) : null
                  )
                }
              />
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
      <Accordion type="single" defaultValue="item-1" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>Release Year</AccordionTrigger>
          <AccordionContent>
            <div className="flex justify-between items-center p-1">
              <Input
                id="minReleaseYear"
                type="number"
                placeholder="from"
                value={dateMin}
                aria-label="Min Release Year"
                onChange={(e) =>
                  setDateMin(e.target.value !== "" ? e.target.value : null)
                }
              />
              <span className="mx-2">{`-`}</span>
              <Input
                type="number"
                placeholder="to"
                value={dateMax}
                aria-label="Max Release Year"
                onChange={(e) =>
                  setDateMax(e.target.value !== "" ? e.target.value : null)
                }
              />
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
      <Accordion type="single" defaultValue="item-1" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>Category</AccordionTrigger>
          <AccordionContent>
            <div className="flex flex-col space-y-2">
              {categories.map((category) => (
                <div className="flex items-center space-x-2" key={category}>
                  <Checkbox
                    id={category}
                    onCheckedChange={(checked) => {
                      if (checked) {
                        setCategoriesFilter([...categoriesFilter, category]);
                      } else {
                        setCategoriesFilter(
                          categoriesFilter.filter((c) => c !== category)
                        );
                      }
                    }}
                  />
                  <label
                    htmlFor={category}
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    {category}
                  </label>
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
