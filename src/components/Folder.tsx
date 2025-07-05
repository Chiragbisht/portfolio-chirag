import React, { useState } from "react";
import "./Folder.css";

interface ProjectData {
  id: number;
  title: string;
  description: string;
  image: string;
  link: string;
}

interface FolderProps {
  color?: string;
  size?: number;
  projects?: ProjectData[];
  className?: string;
}

const darkenColor = (hex: string, percent: number): string => {
  let color = hex.startsWith("#") ? hex.slice(1) : hex;
  if (color.length === 3) {
    color = color
      .split("")
      .map((c) => c + c)
      .join("");
  }
  const num = parseInt(color, 16);
  let r = (num >> 16) & 0xff;
  let g = (num >> 8) & 0xff;
  let b = num & 0xff;
  r = Math.max(0, Math.min(255, Math.floor(r * (1 - percent))));
  g = Math.max(0, Math.min(255, Math.floor(g * (1 - percent))));
  b = Math.max(0, Math.min(255, Math.floor(b * (1 - percent))));
  return (
    "#" +
    ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1).toUpperCase()
  );
};

const defaultProjects: ProjectData[] = [
  {
    id: 1,
    title: "Soft Edge Web",
    description: "Modern web application",
    image: "/assets/Screenshot from 2025-07-05 13-34-18.png",
    link: "https://soft-edge-web.vercel.app/"
  },
  {
    id: 2,
    title: "Humanizer",
    description: "AI-powered text humanizer",
    image: "/assets/Screenshot from 2025-07-05 13-34-26.png",
    link: "https://humanizer-olive.vercel.app/"
  },
  {
    id: 3,
    title: "Chatroom",
    description: "Real-time chat application",
    image: "/assets/Screenshot from 2025-07-05 13-38-21.png",
    link: "https://chatroom-os4ddry5.b4a.run/"
  }
];

const Folder: React.FC<FolderProps> = ({
  color = "#5227FF",
  size = 1,
  projects = defaultProjects,
  className = "",
}) => {
  const maxItems = 3;
  const projectItems = projects.slice(0, maxItems);
  
  const [open, setOpen] = useState(false);
  const [paperOffsets, setPaperOffsets] = useState<{ x: number; y: number }[]>(
    Array.from({ length: maxItems }, () => ({ x: 0, y: 0 }))
  );

  const folderBackColor = darkenColor(color, 0.08);
  const paper1 = darkenColor("#ffffff", 0.1);
  const paper2 = darkenColor("#ffffff", 0.05);
  const paper3 = "#ffffff";

  const handleClick = () => {
    setOpen((prev) => !prev);
    if (open) {
      setPaperOffsets(Array.from({ length: maxItems }, () => ({ x: 0, y: 0 })));
    }
  };

  const handlePaperMouseMove = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>,
    index: number
  ) => {
    if (!open) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const offsetX = (e.clientX - centerX) * 0.08;
    const offsetY = (e.clientY - centerY) * 0.08;
    setPaperOffsets((prev) => {
      const newOffsets = [...prev];
      newOffsets[index] = { x: offsetX, y: offsetY };
      return newOffsets;
    });
  };

  const handlePaperMouseLeave = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>,
    index: number
  ) => {
    setPaperOffsets((prev) => {
      const newOffsets = [...prev];
      newOffsets[index] = { x: 0, y: 0 };
      return newOffsets;
    });
  };

  const handleProjectClick = (project: ProjectData) => {
    if (project.link) {
      window.open(project.link, "_blank");
    }
  };

  const folderStyle: React.CSSProperties = {
    "--folder-color": color,
    "--folder-back-color": folderBackColor,
    "--paper-1": paper1,
    "--paper-2": paper2,
    "--paper-3": paper3,
  } as React.CSSProperties;

  const folderClassName = `folder ${open ? "open" : ""}`.trim();
  const scaleStyle = { transform: `scale(${size})` };

  return (
    <div style={scaleStyle} className={className}>
      <div
        className={folderClassName}
        style={folderStyle}
        onClick={handleClick}
      >
        <div className="folder__back">
          {projectItems.map((project, i) => (
            <div
              key={project.id}
              className={`paper paper-${i + 1} project-paper`}
              onMouseMove={(e) => handlePaperMouseMove(e, i)}
              onMouseLeave={(e) => handlePaperMouseLeave(e, i)}
              onClick={(e) => {
                e.stopPropagation();
                handleProjectClick(project);
              }}
              style={
                open
                  ? ({
                      "--magnet-x": `${paperOffsets[i]?.x || 0}px`,
                      "--magnet-y": `${paperOffsets[i]?.y || 0}px`,
                    } as React.CSSProperties)
                  : {}
              }
            >
              <div className="project-content">
                <div className="project-image-full">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = "/placeholder.svg";
                    }}
                  />
                </div>
              </div>
            </div>
          ))}
          <div className="folder__front"></div>
          <div className="folder__front right"></div>
        </div>
      </div>
    </div>
  );
};

export default Folder; 