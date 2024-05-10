import books from "@/db/books";
import { generateRandomList } from "@/lib/utils";
import { IBook } from "@/types/Book";
import { create } from "zustand";

export interface IState {
  books: IBook[]
  you_might_like: IBook[]
  popular: IBook[]
  missing_your_collection: IBook[]
  we_are_loving: IBook[]
  more_to_discover: IBook[]
}

export interface IAction {
  loadBooks: (books: IBook[]) => void
  setRest: () => void
}

const initialState: IState = {
  books: [],
  you_might_like: generateRandomList(books, 10),
  popular: generateRandomList(books, 6),
  missing_your_collection: generateRandomList(books, 10),
  we_are_loving: generateRandomList(books, 10),
  more_to_discover: generateRandomList(books, 10),
}

const useBookStore = create<IState & IAction>((set) => ({
  ...initialState,
  loadBooks: (books: IBook[]) => set((state)=> ({
    ...state,
    books,
  })),
  setRest: () => set(()=> (initialState)),
}))

export default useBookStore;
