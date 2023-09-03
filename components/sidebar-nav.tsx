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

export function SidebarNav({ categories }: any) {
  const {
    scoreMin,
    scoreMax,
    dateMin,
    dateMax,
    criticMin,
    criticMax,
    categoriesFilter,
    setScoreMin,
    setScoreMax,
    setDateMin,
    setDateMax,
    setCriticMin,
    setCriticMax,
    setCategoriesFilter,
    filteredGames,
    reset,
  } = useFilterStore();

  return (
    <div className="w-full pr-4">
      <p>{filteredGames.length} games</p>
      <Separator className="mt-3" />
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>
            <div>
              User Score <span className="text-muted-foreground">(0-10)</span>
            </div>
          </AccordionTrigger>
          <AccordionContent>
            <div className="flex justify-between items-center p-[1px]">
              <Input
                type="number"
                placeholder="from"
                value={scoreMin}
                aria-label="Min User Score"
                onChange={(e: any) => setScoreMin(e.target.value)}
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
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>
            <div>
              Critic Score{" "}
              <span className="text-muted-foreground">(0-100)</span>
            </div>
          </AccordionTrigger>
          <AccordionContent>
            <div className="flex justify-between items-center p-[1px]">
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
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>Release Year</AccordionTrigger>
          <AccordionContent>
            <div className="flex justify-between items-center p-[1px]">
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
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>Category</AccordionTrigger>
          <AccordionContent>
            <div className="flex flex-col space-y-2">
              {categories.map((category: any) => (
                <div className="flex items-center space-x-2" key={category}>
                  <Checkbox
                    id={category}
                    onCheckedChange={(checked) => {
                      if (checked) {
                        setCategoriesFilter([...categoriesFilter, category]);
                      } else {
                        setCategoriesFilter(
                          categoriesFilter.filter((c: any) => c !== category)
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
