import Hero from "../Components/hero";
import Pet from "../Components/pet";
import SearchPet from "../Components/searchpet";
import { PetsState } from "../Context/context";

function Landing() {
  const { petData, setPetData, tempPetData, isPending } = PetsState();

  // searching for specific Pet by it's name
  function searchPetName(name) {
    let tempData = tempPetData;
    if (name) {
      tempData = tempData.filter((pet) => {
        const smallName = pet.name.toLowerCase();
        if (smallName.includes(name.toLowerCase())) {
          return Pet;
        }
      });
    } else {
      tempData = tempPetData;
    }
    setPetData(tempData);
  }

  const allPets = petData.map((pet) => <Pet key={pet.id} petData={pet} />);
  return (
    <main className="w-full">
      <Hero />

      <section className="py-4">
        <h1 className="font-bold text-3xl w-full text-center my-10 capitalize">
          all Pets
        </h1>
        <SearchPet searchPetName={searchPetName} />
          <div className="container mx-auto flex flex-wrap items-center justify-center gap-7">
            {allPets}
          </div>
      </section>
    </main>
  );
}

export default Landing;
