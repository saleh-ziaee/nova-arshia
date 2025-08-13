import WorkflowSection from "@/app/sections/WorkflowSection";
import AiToData from "@/app/sections/AiToData";
import RunCore from "@/app/sections/RunCore";
import NovaComments from "@/app/sections/NovaComments";
import WhyNova from "@/app/sections/WhyNova";
import Actions from "@/app/sections/Actions";
import PopularPlatform from "@/app/sections/PopularPlatform";
import TryIt from "@/app/sections/TryIt";
import WorkflowTab from "@/app/sections/WorkflowTab";

export default function Home() {
    return (
        <div>
            <WorkflowSection/>
            <PopularPlatform/>
            <AiToData/>
            <RunCore/>
            <NovaComments/>
            <WhyNova/>
            <Actions/>
            <TryIt />
        </div>
    );
}
