"use client";

import { useFloorEditor } from "@/modules/floor-table/hooks/useFloorEditor";
import { EditorTopNav } from "@/modules/floor-table/components/floor-editor/EditorTopNav";
import { FurnitureSidebar } from "@/modules/floor-table/components/floor-editor/FurnitureSidebar";
import { CanvasArea } from "@/modules/floor-table/components/floor-editor/CanvasArea";
import { PropertiesSidebar } from "@/modules/floor-table/components/floor-editor/PropertiesSidebar";

export function FloorEditorPage() {
  const {
    objects,
    selectedId,
    setSelectedId,
    zoom,
    setZoom,
    searchQuery,
    setSearchQuery,
    selectedObj,
    updateObj,
    handleDrag,
    handleDelete,
    handleDuplicate,
  } = useFloorEditor();

  return (
    <div className="flex flex-col h-screen bg-[#f5f0eb] font-sans overflow-hidden">
      <EditorTopNav />

      <div className="flex flex-1 overflow-hidden">
        <FurnitureSidebar
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
        />

        <CanvasArea
          objects={objects}
          selectedId={selectedId}
          setSelectedId={setSelectedId}
          handleDrag={handleDrag}
          zoom={zoom}
          setZoom={setZoom}
          selectedObj={selectedObj}
        />

        <PropertiesSidebar
          selectedObj={selectedObj}
          handleDelete={handleDelete}
          updateObj={updateObj}
          handleDuplicate={handleDuplicate}
        />
      </div>
    </div>
  );
}
