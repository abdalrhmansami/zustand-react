import create from "zustand";
import { devtools, persist } from "zustand/middleware";

let peopleStore: any = (set: any) => ({
  people: ["Abood", "Osama", "Momen"],
  addPerson: (person: string) =>
    set((state: any) => ({
      people: [...state.people, person],
    })),
});

let settingsStore: any = (set: any) => ({
  dark: false,
  toggleDarkMode: () =>
    set((state: any) => ({
      dark: !state.dark,
    })),
});

settingsStore = devtools(settingsStore);
settingsStore = persist(settingsStore, { name: "user_settings" }); // persist used to localStorage save

peopleStore = devtools(peopleStore);
peopleStore = persist(peopleStore, { name: "people" }); // persist used to localStorage save

export const useSettingsStore = create(settingsStore);
export const usePeopleStore = create(peopleStore);
