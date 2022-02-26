import { useCallback, useEffect, useState } from "react";
import WorldSummaryList from "../../Components/WorldSummaryList";
import WorldTodaySummary from "../../Components/WorldTodaySummary/WorldTodaySummary";
import { httpGetWorldSummary } from "../../httpAPI";


// Korea.tsx랑 비슷한 구조이니 Korea에서 확인
const World = () => {
    const [worldSummary, setWorldSummary] = useState<WorldSummaryType>();

    const getWorldSummary = useCallback(async () => {
      
      const worldSummary = await httpGetWorldSummary()
      setWorldSummary(worldSummary)
    }, []);
  
    useEffect(() => {
      getWorldSummary();
    }, []);

    return (
        <>
            <WorldTodaySummary summary={worldSummary}/>
            <WorldSummaryList summary={worldSummary}/>
        </>
    )
}

export default World