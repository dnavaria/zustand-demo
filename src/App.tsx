import {Button} from "@/components/ui/button.tsx";
import {create} from "zustand";
import BearBox from "@/components/BearBox.tsx";
import {CatBox} from "@/components/CatBox.tsx";

const useStore = create<{
    count: number;
    inc: () => void;
    dec: () => void;
}>((set) => ({
    count: 0,
    inc: () => set((state) => ({count: state.count + 1})),
    dec: () => set((state) => ({count: state.count - 1}))
}));

function App() {
    const store = useStore();
    return (
        <>
            <div className={"text-center"}>
                <div className={"text-2xl text-center mb-5"}>Zustand Demo</div>
                <Button onClick={store.inc}>+</Button>
                <Count/>
                <Button onClick={store.dec}>-</Button>
            </div>
            <div className={"text-center my-10"}><BearBox/></div>
            <div className={"text-center"}><CatBox/></div>
        </>
    )
}

function Count() {
    const store = useStore();
    return <span className={"text-black mx-5"}>{store.count}</span>
}

export default App
