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
import data from "../public/updated_games_data.json";

export function SidebarNav() {
  const categories = data.categories;
  const {
    scoreMin,
    scoreMax,
    dateMin,
    dateMax,
    criticMin,
    criticMax,
    collectionFilter,
    timeMin,
    timeMax,
    setTimeMin,
    setTimeMax,
    availabilityFilter,
    setAvailabilityFilter,
    categoriesFilter,
    releasePlatform,
    setScoreMin,
    setScoreMax,
    setDateMin,
    setDateMax,
    setCriticMin,
    setCriticMax,
    setCategoriesFilter,
    setCollectionFilter,
    setReleasePlatform,
    filteredGames,
    setPage,
  } = useFilterStore();

  const platforms = ["Xbox 360", "Xbox One", "Xbox Series X"];
  const collections = ["Bethesda Softworks", "EA Play", "Xbox Game Studios"];
  const availabilities = ["ComingSoon", "LeavingSoon", "RecentlyAdded"];

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
                onKeyDown={(e) =>
                  (e.keyCode === 69 ||
                    e.keyCode === 187 ||
                    e.keyCode === 189) &&
                  e.preventDefault()
                }
                type="number"
                placeholder="from"
                value={scoreMin}
                aria-label="Min User Score"
                min="0"
                max="10"
                onChange={(e: any) => {
                  const value = parseFloat(e.target.value);
                  if (isNaN(value) || (value >= 0 && value <= 10)) {
                    setScoreMin(isNaN(value) ? null : value);
                  }
                }}
              />
              <span className="mx-2">{`-`}</span>
              <Input
                onKeyDown={(e) =>
                  (e.keyCode === 69 ||
                    e.keyCode === 187 ||
                    e.keyCode === 189) &&
                  e.preventDefault()
                }
                type="number"
                placeholder="to"
                min="0"
                max="10"
                value={scoreMax}
                aria-label="Max User Score"
                onChange={(e: any) => {
                  const value = parseFloat(e.target.value);
                  if (isNaN(value) || (value >= 0 && value <= 10)) {
                    setScoreMax(isNaN(value) ? null : value);
                  }
                }}
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
                onKeyDown={(e) =>
                  (e.keyCode === 69 ||
                    e.keyCode === 187 ||
                    e.keyCode === 188 ||
                    e.keyCode === 190 ||
                    e.keyCode === 189) &&
                  e.preventDefault()
                }
                type="number"
                placeholder="from"
                min="0"
                max="100"
                value={criticMin}
                aria-label="Min Critic Score"
                onChange={(e: any) => {
                  const value = parseInt(e.target.value, 10);
                  if (isNaN(value) || (value >= 0 && value <= 100)) {
                    setCriticMin(isNaN(value) ? null : value);
                  }
                }}
              />
              <span className="mx-2">{`-`}</span>
              <Input
                onKeyDown={(e) =>
                  (e.keyCode === 69 ||
                    e.keyCode === 187 ||
                    e.keyCode === 188 ||
                    e.keyCode === 190 ||
                    e.keyCode === 189) &&
                  e.preventDefault()
                }
                type="number"
                placeholder="from"
                min="0"
                max="100"
                value={criticMax}
                aria-label="Max Critic Score"
                onChange={(e: any) => {
                  const value = parseInt(e.target.value, 10);
                  if (isNaN(value) || (value >= 0 && value <= 100)) {
                    setCriticMax(isNaN(value) ? null : value);
                  }
                }}
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
                onKeyDown={(e) =>
                  (e.keyCode === 69 ||
                    e.keyCode === 187 ||
                    e.keyCode === 188 ||
                    e.keyCode === 190 ||
                    e.keyCode === 189) &&
                  e.preventDefault()
                }
                id="minReleaseYear"
                type="number"
                min="1993"
                max="2100"
                placeholder="from"
                value={dateMin}
                aria-label="Min Release Year"
                onChange={(e: any) => {
                  if (
                    e.target.value === "" ||
                    (e.target.value >= 0 && e.target.value <= 2100)
                  ) {
                    setDateMin(e.target.value === "" ? null : e.target.value);
                  }
                }}
              />
              <span className="mx-2">{`-`}</span>
              <Input
                onKeyDown={(e) =>
                  (e.keyCode === 69 ||
                    e.keyCode === 187 ||
                    e.keyCode === 188 ||
                    e.keyCode === 190 ||
                    e.keyCode === 189) &&
                  e.preventDefault()
                }
                type="number"
                placeholder="to"
                value={dateMax}
                min="1993"
                max="2100"
                aria-label="Max Release Year"
                onChange={(e: any) => {
                  if (
                    e.target.value === "" ||
                    (e.target.value >= 0 && e.target.value <= 2100)
                  ) {
                    setDateMax(e.target.value === "" ? null : e.target.value);
                  }
                }}
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
                    checked={categoriesFilter.includes(category)}
                    id={category}
                    onCheckedChange={(checked) => {
                      if (checked) {
                        setCategoriesFilter([...categoriesFilter, category]);
                        setPage(1);
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
                    checked={releasePlatform.includes(platform)}
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
                    checked={collectionFilter.includes(collection)}
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
              {availabilities.map((availability: any) => (
                <div className="flex items-center space-x-2" key={availability}>
                  <Checkbox
                    id={availability}
                    checked={availabilityFilter.includes(availability)}
                    onCheckedChange={(checked) => {
                      if (checked) {
                        setAvailabilityFilter([
                          ...availabilityFilter,
                          availability,
                        ]);
                      } else {
                        setAvailabilityFilter(
                          availabilityFilter.filter(
                            (c: any) => c !== availability
                          )
                        );
                      }
                    }}
                  />
                  <label
                    htmlFor={availability}
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    {availability === "ComingSoon"
                      ? "Coming Soon"
                      : availability === "RecentlyAdded"
                      ? "Recently Added"
                      : availability === "LeavingSoon"
                      ? "Leaving Soon"
                      : availability}
                  </label>
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>
            <div>
              Time To Beat{" "}
              <span className="text-muted-foreground">(Hours)</span>
            </div>
          </AccordionTrigger>
          <AccordionContent>
            <div className="flex justify-between items-center p-[1px]">
              <Input
                onKeyDown={(e) =>
                  (e.keyCode === 69 ||
                    e.keyCode === 187 ||
                    e.keyCode === 189) &&
                  e.preventDefault()
                }
                type="number"
                placeholder="from"
                value={timeMin}
                aria-label="Min Time To Complete"
                min="0"
                onChange={(e: any) => {
                  const value = parseFloat(e.target.value);
                  if (isNaN(value) || value >= 0) {
                    setTimeMin(isNaN(value) ? null : value);
                  }
                }}
              />
              <span className="mx-2">{`-`}</span>
              <Input
                onKeyDown={(e) =>
                  (e.keyCode === 69 ||
                    e.keyCode === 187 ||
                    e.keyCode === 189) &&
                  e.preventDefault()
                }
                type="number"
                placeholder="to"
                min="0"
                value={timeMax}
                aria-label="Max Time to Complete"
                onChange={(e: any) => {
                  const value = parseFloat(e.target.value);
                  if (isNaN(value) || value >= 0) {
                    setTimeMax(isNaN(value) ? null : value);
                  }
                }}
              />
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
