import React, { useState } from "react";
import { Game } from "../../../src/components/Game";
import GameModal from "../../../src/components/GameModal";

export default () => {
    const [isModalOpen, setIsModalOpen] = useState<boolean>(true)
    return (
        <div>
          {isModalOpen ? <GameModal setIsModalOpen={setIsModalOpen}/> : <Game/>}
        </div>
    )
}