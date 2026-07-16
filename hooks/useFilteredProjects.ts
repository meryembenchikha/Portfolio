"use client";

import { useMemo, useState } from "react";
import type { Project } from "@/types/project";

const ALL_FILTER = "All";

export function useFilteredProjects(projects: Project[]) {
  const [activeFilter, setActiveFilter] = useState<string>(ALL_FILTER);

  const filteredProjects = useMemo(() => {
    if (activeFilter === ALL_FILTER) {
      return projects;
    }

    return projects.filter((project) =>
      project.technologies.includes(activeFilter)
    );
  }, [projects, activeFilter]);

  return { activeFilter, setActiveFilter, filteredProjects, ALL_FILTER };
}