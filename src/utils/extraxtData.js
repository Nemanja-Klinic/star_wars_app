
export const extraxtData = (resources, type) => {return resources.map((res)=>{
    if(type === 'planets') {
      return {
        title: res.name,
        description: `Terrain: ${res.terrain}; Population: ${res.population}; Climate: ${res.climate}`
      }
    }
    else if(type === 'people') {
        return {
          title: res.name,
          description: `Gender: ${res.gender}; Height: ${res.height}; Birth_year: ${res.birth_year}`
        }
      }
      else if(type === 'films') {
        return {
          title: res.title,
          description: res.opening_crawl
        }
      }
      else if(type === 'starships') {
        return {
          title: res.name,
          description: `Model: ${res.model}; Manufacturer: ${res.manufacturer}; Starship class: ${res.starship_class}`
        }
      }
      else if(type === 'vehicles') {
        return {
          title: res.name,
          description: `Model: ${res.model}; Manufacturer: ${res.manufacturer}; Vehicle class: ${res.vehicle_class}`
        }
      }
      else if(type === 'species') {
        return {
          title: res.name,
          description: `Skin color: ${res.skin_color}; Language: ${res.language}; Average height: ${res.average_height}`
        }
      }
  }) }
