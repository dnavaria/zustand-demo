import create from 'zustand';
import {immer} from "zustand/middleware/immer";

type TCatStoreState = {
    cats: {
        bigCats: number;
        smallCats: number;
    }
    addBigCat: () => void;
    addSmallCat: () => void;
    summary: () => void;
}

// export const useCatStore = create<TCatStoreState>()(
//     set => ({
//         cats: {
//             bigCats: 0,
//             smallCats: 0
//         },
//         addBigCat: () =>
//             set(
//                 (state) => ({
//                     cats: {
//                         ...state.cats,
//                         bigCats: state.cats.bigCats + 1
//                     }
//                 })
//             ),
//         addSmallCat: () =>
//             set(
//                 (state) => ({
//                     cats: {
//                         ...state.cats,
//                         smallCats: state.cats.smallCats + 1
//                     }
//                 })
//             )
//     })
// )

export const useCatStore = create<TCatStoreState>()
(immer((set, get) => ({
        cats: {
            bigCats: 0,
            smallCats: 0
        },
        addBigCat: () =>
            set(
                (state) => {
                    state.cats.bigCats++;
                }
            ),
        addSmallCat: () =>
            set(
                (state) => {
                    state.cats.smallCats++;
                }
            ),
        summary: () => {
                const total = get().cats.bigCats + get().cats.smallCats;
                return `Total: ${total} 🐱`;
            }

    }))
)