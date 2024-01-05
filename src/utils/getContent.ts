import fs from "fs";
import matter from "gray-matter";
import { getURLSlug } from "./misc";

const root = process.cwd();

export interface PlantFrontmatter {
  title: string;
  date?: string;
  tags?: string[];
  unlisted?: boolean;
}
export interface Plant {
  frontmatter: PlantFrontmatter;
  content: string;
}

export function getPlants(): Plant[] {
  const plantNames = fs
    .readdirSync(root + "/content/garden")
    .filter((route: string) => route.endsWith(".md"));

  return plantNames.map((plantName: string) => {
    const res = matter(
      fs.readFileSync(`${root}/content/garden/${plantName}`, "utf-8")
    );
    return {
      frontmatter: {
        ...(res.data as PlantFrontmatter),
        title: plantName.replace(/\.md?$/, ""),
      },
      content: res.content,
    };
  });
}
export function getSortedPlantsByDate() {
  // note: need to enforce that all frontmatter have dates
  const allPlants = getPlants();
  return allPlants
    .filter((plant: any) => plant.frontmatter.date)
    .sort((a: any, b: any) => {
      a.month = a.frontmatter.date.split("-")[0];
      a.year = a.frontmatter.date.split("-")[1];
      b.month = b.frontmatter.date.split("-")[0];
      b.year = b.frontmatter.date.split("-")[1];
      if (a.year === b.year) {
        return a.month < b.month ? 1 : -1;
      } else {
        return a.year < b.year ? 1 : -1;
      }
    });
}
export function getFilteredPlants(filter: any) {
  const allPlants = getPlants();
  const filteredPlants = allPlants.filter((plant: any) => {
    for (const key in filter) {
      if (plant[key] !== filter[key]) {
        return false;
      }
    }
    return true;
  });
  return filteredPlants;
}

// O(n) makes me sad :(
// unless i have like literally thousands of articles i think this should be fine
export function getPlantBySimplifiedSlug(
  simplifiedSlug: string
): Plant | undefined {
  const allPlants = getPlants();
  const plant = allPlants.find(
    (plant: any) => getURLSlug(plant.frontmatter.title) === simplifiedSlug
  );
  return plant;
}
