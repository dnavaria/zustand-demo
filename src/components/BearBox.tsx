import {Button} from "@/components/ui/button.tsx";
import {useBearStore} from "@/store/bearStore.ts";


function BearBox() {
    const {bears, increasePopulation, removeAllBears} = useBearStore(
        (state) => ({
            bears: state.bears,
            increasePopulation: state.increasePopulation,
            removeAllBears: state.removeAllBears,

        })
    );
    return (
        <div>
            <h1>BearBox</h1>
            <div className={"flex justify-center flex-col mx-[40%]"}>
                <Button className={"my-2"} onClick={increasePopulation}>Add Bear</Button>
                <h2>{bears} 🐻</h2>
                <Button className={"my-2"} onClick={removeAllBears}>Remove All Bear</Button>
            </div>
        </div>
    );
}

export default BearBox;