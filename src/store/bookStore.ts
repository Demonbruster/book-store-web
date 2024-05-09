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
  setYouMightLikeBooks: (books: IBook[]) => void
  setPopularBooks: (books: IBook[]) => void
  setMissingYourCollection: (books: IBook[]) => void
  setWeAreLoving: (books: IBook[]) => void
  setMoreToDiscover: (books: IBook[]) => void
  setRest: () => void
}

const initialState: IState = {
  books: [],
  you_might_like: [],
  popular: [],
  missing_your_collection: [],
  we_are_loving: [],
  more_to_discover: [],
}

const useBookStore = create<IState & IAction>((set) => ({
  ...initialState,
  loadBooks: (books: IBook[]) => set((state)=> ({
    ...state,
    books,
  })),
  setYouMightLikeBooks: (books: IBook[]) => set((state)=> ({
    ...state,
    you_might_like:books,
  })),
  setPopularBooks: (books: IBook[]) => set((state)=> ({
    ...state,
    popular: books,
  })),
  setMissingYourCollection: (books: IBook[]) => set((state)=> ({
    ...state,
    missing_your_collection: books,
  })),
  setWeAreLoving: (books: IBook[]) => set((state)=> ({
    ...state,
    we_are_loving: books,
  })),
  setMoreToDiscover: (books: IBook[]) => set((state)=> ({
    ...state,
    more_to_discover: books,
  })),
  setRest: () => set(()=> (initialState)),
}))

export default useBookStore;
