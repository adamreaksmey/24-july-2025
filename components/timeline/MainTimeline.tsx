"use client";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { CalendarDaysIcon, ExternalLinkIcon } from "lucide-react";
import { motion } from "framer-motion";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { timeline } from "@/data/timelineData";

export default function MainTimeline() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-primary to-foreground bg-clip-text text-transparent">
          July 2025 Border Conflict
        </h2>
      </motion.div>

      <div className="relative">
        <div className="absolute left-1/2 h-full w-0.5 bg-gradient-to-b from-muted via-primary to-muted -translate-x-1/2" />

        {timeline.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
            viewport={{ once: true, margin: "-100px" }}
            className={`relative mb-12 flex w-full ${
              index % 2 === 0 ? "justify-start" : "justify-end"
            }`}
          >
            <div className="w-full max-w-md">
              <div
                className={`absolute top-6 flex items-center justify-center w-10 h-10 rounded-full bg-primary shadow-lg border-4 border-background ${
                  index % 2 === 0 ? "-right-5" : "-left-5"
                }`}
              >
                <span className="text-lg">{item.icon}</span>
              </div>

              <TooltipProvider delayDuration={200}>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Card className="relative overflow-hidden group cursor-pointer hover:shadow-lg transition-shadow">
                      <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <CardHeader className="pb-2">
                        <div className="flex justify-between items-center">
                          <h3 className="text-xl font-semibold tracking-tight">
                            {item.title}
                          </h3>
                          <div className="flex items-center text-sm text-muted-foreground">
                            <CalendarDaysIcon className="w-4 h-4 mr-1" />
                            {item.date}
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground">
                          {item.description}
                        </p>
                      </CardContent>
                    </Card>
                  </TooltipTrigger>
                  <TooltipContent
                    side={index % 2 === 0 ? "right" : "left"}
                    className="w-[320px] p-4 bg-background shadow-xl border border-muted"
                  >
                    <div className="space-y-3">
                      <h4 className="font-bold text-primary">
                        Additional Details
                      </h4>
                      <ul className="space-y-2 text-sm text-black">
                        {item.details.map((detail, i) => (
                          <li key={i} className="flex items-start">
                            {detail}
                          </li>
                        ))}
                      </ul>

                      <div className="pt-2 border-t border-muted">
                        <p className="text-xs font-semibold text-muted-foreground mb-2">
                          REFERENCES
                        </p>
                        <div className="space-y-2">
                          {item.references.map((ref, i) => (
                            <a
                              key={i}
                              href={ref.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center text-sm text-primary hover:underline"
                            >
                              <ExternalLinkIcon className="w-3 h-3 mr-2" />
                              {ref.name}
                            </a>
                          ))}
                        </div>
                      </div>
                    </div>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
