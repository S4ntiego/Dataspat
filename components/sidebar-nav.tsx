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
    collectionFilter,
    categoriesFilter,
    releasePlatform,
    setScoreMin,
    setScoreMax,
    setDateMin,
    setDateMax,
    setCriticMin,
    setCriticMax,
    setComingSoon,
    setCategoriesFilter,
    setCollectionFilter,
    setReleasePlatform,
    setLeavingSoon,
    setRecentlyAdded,
    filteredGames,
    reset,
  } = useFilterStore();

  const platforms = ["Xbox 360", "Xbox One", "Xbox Series X"];
  const collections = ["EA Play", "Xbox Game Studios", "Bethesda Softworks"];

  return (
    <div className="w-full pr-8">
      <p className="text-muted-foreground text-sm">
        {filteredGames.length} {filteredGames.length === 1 ? "game" : "games"}
      </p>
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
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>Release Platform</AccordionTrigger>
          <AccordionContent>
            <div className="flex flex-col space-y-2">
              {platforms.map((platform: any) => (
                <div className="flex items-center space-x-2" key={platform}>
                  <Checkbox
                    id={platform}
                    onCheckedChange={(checked) => {
                      if (checked) {
                        setReleasePlatform([...releasePlatform, platform]);
                      } else {
                        setReleasePlatform(
                          releasePlatform.filter((c: any) => c !== platform)
                        );
                      }
                    }}
                  />
                  <label
                    htmlFor={platform}
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    {platform === "Xbox Series X"
                      ? "Xbox Series X | S"
                      : platform === "Xbox 360"
                      ? "Xbox 360 | Xbox"
                      : platform}
                  </label>
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>Collection</AccordionTrigger>
          <AccordionContent>
            <div className="flex flex-col space-y-2">
              {collections.map((collection: any) => (
                <div className="flex items-center space-x-2" key={collection}>
                  <Checkbox
                    id={collection}
                    onCheckedChange={(checked) => {
                      if (checked) {
                        setCollectionFilter([...collectionFilter, collection]);
                      } else {
                        setCollectionFilter(
                          collectionFilter.filter((c: any) => c !== collection)
                        );
                      }
                    }}
                  />
                  <label
                    htmlFor={collection}
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    {collection}
                  </label>
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>Availability</AccordionTrigger>
          <AccordionContent>
            <div className="flex flex-col space-y-2">
              <div className="flex items-center space-x-2" key={"ComingSoon"}>
                <Checkbox
                  id={"ComingSoon"}
                  onCheckedChange={(checked) => {
                    if (checked) {
                      setComingSoon(true);
                    } else {
                      setComingSoon(false);
                    }
                  }}
                />
                <label
                  htmlFor={"ComingSoon"}
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Coming Soon
                </label>
              </div>
              <div className="flex items-center space-x-2" key={"LeavingSoon"}>
                <Checkbox
                  id={"LeavingSoon"}
                  onCheckedChange={(checked) => {
                    if (checked) {
                      setLeavingSoon(true);
                    } else {
                      setLeavingSoon(false);
                    }
                  }}
                />
                <label
                  htmlFor={"LeavingSoon"}
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Leaving Soon
                </label>
              </div>
              <div
                className="flex items-center space-x-2"
                key={"RecentlyAdded"}
              >
                <Checkbox
                  id={"RecentlyAdded"}
                  onCheckedChange={(checked) => {
                    if (checked) {
                      setRecentlyAdded(true);
                    } else {
                      setRecentlyAdded(false);
                    }
                  }}
                />
                <label
                  htmlFor={"RecentlyAdded"}
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Recently Added
                </label>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
