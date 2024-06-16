import {Button} from "@/components/ui/button.tsx";
import {useCatStore} from "@/store/catStore.ts";

export const CatBox = () => {
    const {cats, addBigCat, addSmallCat} = useCatStore(
        (state) => ({
            cats: state.cats,
            addBigCat: state.addBigCat,
            addSmallCat: state.addSmallCat,
        })
    );
    const summary = useCatStore((state) => state.summary);
    console.log(summary());
    return (
        <div>
            <h1>CatBox</h1>
            <div className={"flex justify-center flex-col mx-[40%]"}>
                <Button className={"my-2"} onClick={addBigCat}>Add Big Cat</Button>
                <h2>{cats.bigCats} 🐱</h2>
                <Button className={"my-2"} onClick={addSmallCat}>Add Small Cat</Button>
                <h2>{cats.smallCats} 🐱</h2>
            </div>
        </div>
    )
}