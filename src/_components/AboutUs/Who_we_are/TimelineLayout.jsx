"use client";
import React from "react";
import {
  Timeline,
  TimelineItem,
  TimelineConnector,
  TimelineIcon,
  Typography,
  TimelineHeader,
} from "@material-tailwind/react";
import { PiBuildingsThin, PiGlobeHemisphereEastThin } from "react-icons/pi";
import { LiaUniversitySolid } from "react-icons/lia";
import { GiGraduateCap } from "react-icons/gi";

export default function TimelineLayout() {
  const milestones = [
    {
      title: "2010",
      description: "Establishment in the UK.",
      icon: <PiBuildingsThin className="h-5 w-5" />,
    },
    {
      title: "Early 2010s",
      description:
        "Expanded operations to serve Bangladeshi students, aiming at placing them in prestigious global universities.",
      icon: <PiGlobeHemisphereEastThin className="h-5 w-5" />,
    },
    {
      title: "2013-2015",
      description:
        "The company began working with top-tier universities, including those from the Russell Group in the UK, marking a major expansion in its portfolio of partners.",
      icon: <LiaUniversitySolid className="h-5 w-5" />,
    },
    {
      title: "2020s",
      description:
        "Shabuj Global continued to grow, placing over 145,000 students worldwide, and expanded its services to facilitate student transfers between universities.",
      icon: <GiGraduateCap className="h-5 w-5" />,
    },
  ];

  return (
    <div className="w-full flex flex-col gap-6 relative">
        <div className="absolute top-0 bottom-0  left-9 h-full w-1 bg-gray-200"></div>
      {milestones?.map((data) => (
        <Timeline>
          <TimelineItem className="h-full ">
            <TimelineConnector className="!w-[78px]" />
            <TimelineHeader className="relative rounded-xl border border-blue-gray-50 bg-white py-3 pl-4 pr-8 shadow-lg shadow-blue-gray-900/5">
              <TimelineIcon className="p-3" variant="ghost">
                {data?.icon}
              </TimelineIcon>
              <div className="flex flex-col gap-1">
                <Typography variant="h6" color="blue-gray">
                  {data?.title}
                </Typography>
                <Typography
                  variant="small"
                  color="gray"
                  className="font-normal"
                >
                  {data?.description}
                </Typography>
              </div>
            </TimelineHeader>
          </TimelineItem>
        </Timeline>
      ))}
    </div>
  );
}
