"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

type Props = {
  query: string;
  level: string;
  topic: string;
};

const TOPICS = ["all", "alphabet", "numbers", "colors", "animals", "days"];

export function VideoSearchForm({ query, level, topic }: Props) {
  const router = useRouter();
  const [draftQuery, setDraftQuery] = useState(query);
  const [draftLevel, setDraftLevel] = useState(level || "all");
  const [draftTopic, setDraftTopic] = useState(topic || "all");

  function submitForm() {
    const params = new URLSearchParams();
    if (draftQuery.trim()) params.set("q", draftQuery.trim());
    if (draftLevel !== "all") params.set("level", draftLevel);
    if (draftTopic !== "all") params.set("topic", draftTopic);
    const path = params.toString() ? `/?${params.toString()}` : "/";
    router.push(path);
  }

  function clearAll() {
    setDraftQuery("");
    setDraftLevel("all");
    setDraftTopic("all");
    router.push("/");
  }

  return (
    <div className="grid gap-3">
      <div className="grid gap-3 md:grid-cols-[1fr_180px_160px]">
        <Input
          value={draftQuery}
          onChange={(event) => setDraftQuery(event.target.value)}
          placeholder="Search in English..."
          className="h-10 bg-muted"
        />
        <Select value={draftTopic} onValueChange={setDraftTopic}>
          <SelectTrigger className="h-10 bg-muted">
            <SelectValue placeholder="Topic" />
          </SelectTrigger>
          <SelectContent>
            {TOPICS.map((item) => (
              <SelectItem key={item} value={item}>
                {item === "all" ? "All topics" : item}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <Button onClick={submitForm} className="h-10">Find videos</Button>
      </div>
      <div className="flex flex-wrap items-center justify-between gap-3">
        <Tabs value={draftLevel} onValueChange={setDraftLevel}>
          <TabsList className="bg-muted">
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="A1">A1</TabsTrigger>
            <TabsTrigger value="A2">A2</TabsTrigger>
          </TabsList>
        </Tabs>
        <Button variant="outline" onClick={clearAll}>
          Reset filters
        </Button>
      </div>
    </div>
  );
}
