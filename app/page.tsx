"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  ChevronLeft,
  ChevronRight,
  Check,
  Moon,
  Sun,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useToast } from "@/components/ui/use-toast";
import { Toaster } from "@/components/ui/toaster";

export default function Portfolio() {
  const [mounted, setMounted] = useState(false);
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const [activeSlide, setActiveSlide] = useState(0);
  const [autoplay, setAutoplay] = useState(true);
  const [copied, setCopied] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const { toast } = useToast();
  const projects = [
    {
      title: "NFTYDoor",
      description:
        "JOBS PROJECTS: Loan platform for US customers using MERN stack and AWS Serverless architecture.",
      image: "/nftydoor.png?height=300&width=600",
      link: "https://www.nftydoor.com/",
      tags: ["MERN Stack", "AWS Serverless", "DynamoDB"],
    },
    {
      title: "Clarify AI",
      description:
        "PERSONAL PROJECT: Automatize JIRA, Trello, Asana, etc... tickets with AI",
      image: "/clarify.png?height=300&width=600",
      link: "https://clarifyai.space/",
      tags: ["React", "Node.js", "Express", "ChatGPT"],
    },
    {
      title: "AI Chat Application",
      description:
        "PERSONAL PROJECT: Flashcards website to help you to get AWS certifications, still in development...",
      image: "/awscards.png?height=300&width=600",
      link: "disabled",
      tags: ["TypeScript", "NextJS", "React"],
    },
  ];

  useEffect(() => {
    setMounted(true);
    document.documentElement.classList.add("dark");
  }, []);

  useEffect(() => {
    if (mounted) {
      if (theme === "dark") {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    }
  }, [theme, mounted]);

  useEffect(() => {
    if (mounted && autoplay) {
      intervalRef.current = setInterval(() => {
        setActiveSlide((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
      }, 5000);
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [autoplay, mounted, projects.length]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
  };

  const nextSlide = () => {
    setActiveSlide((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setActiveSlide((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  };

  const handleSlideHover = (isHovering: boolean) => {
    setAutoplay(!isHovering);
  };
  const copyToClipboard = () => {
    navigator.clipboard.writeText("nicolasmatiasmuller19@gmail.com");
    setCopied(true);
    toast({
      title: "Email copied to clipboard",
      description: "nicolasmatiasmuller19@gmail.com",
    });
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="flex min-h-screen flex-col bg-white dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100">
      {mounted && (
        <>
          <button
            onClick={toggleTheme}
            className="fixed top-4 right-4 z-50 p-2 rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? (
              <Sun className="h-5 w-5" />
            ) : (
              <Moon className="h-5 w-5" />
            )}
          </button>

          <main className="flex-1 px-4 md:px-8 mx-auto w-full max-w-3xl py-12">
            <section className="space-y-6 pb-12 pt-6 md:pb-16 md:pt-10">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                <div className="flex flex-col items-start gap-4">
                  <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
                    Hello, I'm{" "}
                    <span className="text-red-500/80 dark:text-red-400/90">
                      Nicolas Muller
                    </span>
                  </h1>
                  <h2 className="text-xl text-zinc-600 dark:text-zinc-400">
                    🚀 Full Stack Developer{" "}
                    <span className="text-red-500/80 dark:text-red-400/90">
                      2+ years
                    </span>{" "}
                    | Backend & Frontend | Passionate about AI 💡
                  </h2>

                  <div className="flex flex-wrap gap-2 mt-4">
                    <Badge
                      variant="outline"
                      className="px-3 py-1 text-sm dark:border-zinc-700 dark:text-zinc-300"
                    >
                      TypeScript
                    </Badge>
                    <Badge
                      variant="outline"
                      className="px-3 py-1 text-sm dark:border-zinc-700 dark:text-zinc-300"
                    >
                      Node.js
                    </Badge>
                    <Badge
                      variant="outline"
                      className="px-3 py-1 text-sm dark:border-zinc-700 dark:text-zinc-300"
                    >
                      AWS Serverless
                    </Badge>
                    <Badge
                      variant="outline"
                      className="px-3 py-1 text-sm dark:border-zinc-700 dark:text-zinc-300"
                    >
                      MERN Stack
                    </Badge>
                    <Badge
                      variant="outline"
                      className="px-3 py-1 text-sm dark:border-zinc-700 dark:text-zinc-300"
                    >
                      React
                    </Badge>
                    <Badge
                      variant="outline"
                      className="px-3 py-1 text-sm dark:border-zinc-700 dark:text-zinc-300"
                    >
                      MongoDB
                    </Badge>
                  </div>
                </div>

                <div className="flex-shrink-0">
                  <div className="overflow-hidden rounded-full border-4 border-zinc-100 dark:border-zinc-700 shadow-md">
                    <Image
                      src="/profile.jpg"
                      alt="Nicolas Muller"
                      width={120}
                      height={120}
                      className="aspect-square object-cover"
                      priority
                    />
                  </div>
                </div>
              </div>

              <div className="prose prose-zinc dark:text-zinc-300 max-w-none">
                <p>
                  Hello! I'm a Full Stack Developer eager to continue growing
                  and learning constantly. I love facing new challenges and
                  working with innovative technologies. Recently, I've been
                  working with the MERN stack and AWS Serverless on a loan
                  project in the US (NFTYDoor), where I've been responsible for
                  solving production issues and taking on various tasks thanks
                  to the versatility of the Full Stack role.
                </p>
              </div>

              <div className="flex gap-4">
                <Dialog>
                  <DialogTrigger asChild>
                    <Button className="bg-red-500/80 hover:bg-red-600/80 text-white dark:bg-red-600/80 dark:hover:bg-red-700/80">
                      Contact Me
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-[425px] dark:bg-zinc-800 dark:text-zinc-100 dark:border-zinc-700">
                    <DialogHeader>
                      <DialogTitle>Get in touch</DialogTitle>
                      <DialogDescription className="dark:text-zinc-400">
                        Choose how you'd like to connect with me
                      </DialogDescription>
                    </DialogHeader>
                    <div className="grid grid-cols-2 gap-4 py-6">
                      <Button
                        onClick={copyToClipboard}
                        className="flex flex-col items-center justify-center h-24 gap-2 bg-zinc-100 hover:bg-zinc-200 text-zinc-900 dark:bg-zinc-700 dark:hover:bg-zinc-600 dark:text-zinc-100"
                      >
                        {copied ? (
                          <Check className="h-8 w-8" />
                        ) : (
                          <Mail className="h-8 w-8" />
                        )}
                        <span>Copy Email</span>
                      </Button>
                      <Button
                        onClick={() =>
                          window.open(
                            "https://www.linkedin.com/in/nicolasmmuller/",
                            "_blank"
                          )
                        }
                        className="flex flex-col items-center justify-center h-24 gap-2 bg-[#0077B5] hover:bg-[#0069a1] text-white"
                      >
                        <Linkedin className="h-8 w-8" />
                        <span>LinkedIn</span>
                      </Button>
                    </div>
                  </DialogContent>
                </Dialog>
              </div>
            </section>

            <section className="border-t border-zinc-200 dark:border-zinc-800 py-12">
              <h2 className="text-2xl font-bold mb-6">Strengths</h2>
              <ul className="space-y-2 text-zinc-600 dark:text-zinc-300">
                <li className="flex items-center gap-2">
                  <span className="text-green-500 dark:text-green-400">✅</span>{" "}
                  Production problem solving
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-500 dark:text-green-400">✅</span>{" "}
                  Teamwork 🤝 (what I enjoy most about programming)
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-500 dark:text-green-400">✅</span>{" "}
                  Continuous learning and adaptation to new technologies
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-500 dark:text-green-400">✅</span>{" "}
                  Passion for artificial intelligence 🤖
                </li>
              </ul>

              <div className="mt-6 prose prose-zinc dark:text-zinc-300 max-w-none">
                <p>
                  Goal: Continue growing personally and professionally,
                  exploring new tools and technologies that enhance my skills.
                  In my free time, I develop personal projects to keep learning.
                </p>
              </div>
            </section>

            <section className="border-t border-zinc-200 dark:border-zinc-800 py-12">
              <h2 className="text-2xl font-bold mb-6">Projects</h2>

              <div
                className="relative overflow-hidden rounded-lg border border-zinc-200 dark:border-zinc-700"
                onMouseEnter={() => handleSlideHover(true)}
                onMouseLeave={() => handleSlideHover(false)}
              >
                <div
                  className="flex transition-transform duration-500 ease-in-out"
                  style={{ transform: `translateX(-${activeSlide * 100}%)` }}
                >
                  {projects.map((project, index) => (
                    <div key={index} className="min-w-full">
                      <div className="relative aspect-video w-full bg-muted dark:bg-zinc-800">
                        <img
                          src={project.image || "/placeholder.svg"}
                          alt={project.title}
                          className="h-full w-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-6 text-white">
                          <h3 className="text-xl font-semibold">
                            {project.title}
                          </h3>
                          <p className="mt-2 text-sm text-white/80">
                            {project.description}
                          </p>
                          <div className="flex flex-wrap gap-2 mt-3">
                            {project.tags.map((tag, tagIndex) => (
                              <Badge
                                key={tagIndex}
                                variant="secondary"
                                className="bg-white/20 text-white border-none"
                              >
                                {tag}
                              </Badge>
                            ))}
                          </div>
                          <Link
                            href={project.link}
                            target="_blank"
                            className="mt-4 inline-flex items-center text-sm font-medium text-white hover:text-red-200"
                          >
                            View Project{" "}
                            <ExternalLink className="ml-1 h-3 w-3" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <button
                  onClick={prevSlide}
                  className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 dark:bg-zinc-800/80 p-2 rounded-full shadow-md hover:bg-white dark:hover:bg-zinc-700"
                  aria-label="Previous project"
                >
                  <ChevronLeft className="h-5 w-5 text-zinc-700 dark:text-zinc-300" />
                </button>

                <button
                  onClick={nextSlide}
                  className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 dark:bg-zinc-800/80 p-2 rounded-full shadow-md hover:bg-white dark:hover:bg-zinc-700"
                  aria-label="Next project"
                >
                  <ChevronRight className="h-5 w-5 text-zinc-700 dark:text-zinc-300" />
                </button>

                <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
                  {projects.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveSlide(index)}
                      className={`w-2 h-2 rounded-full ${
                        index === activeSlide ? "bg-red-500" : "bg-white/50"
                      }`}
                      aria-label={`Go to project ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
            </section>

            <section className="border-t border-zinc-200 dark:border-zinc-800 py-12">
              <h2 className="text-2xl font-bold mb-6">Experience</h2>

              <Card className="mb-6 border-zinc-200 dark:border-zinc-700 dark:bg-zinc-800">
                <CardContent className="p-6">
                  <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-start">
                    <div>
                      <h3 className="font-semibold text-lg">
                        Full Stack Developer
                      </h3>
                      <p className="text-zinc-600 dark:text-zinc-300">
                        Crombie
                      </p>
                    </div>
                    <div className="text-sm text-zinc-500 dark:text-zinc-400">
                      2+ years
                    </div>
                  </div>
                  <p className="mt-4 text-zinc-600 dark:text-zinc-300">
                    Development of web applications using the MERN stack.
                    Implementation of serverless solutions with AWS. Solving
                    production issues and teamwork to deliver high-quality
                    products.
                  </p>
                  <div className="flex flex-wrap gap-2 mt-4">
                    <Badge
                      variant="secondary"
                      className="px-2 py-0.5 text-xs dark:bg-zinc-700 dark:text-zinc-300"
                    >
                      TypeScript
                    </Badge>
                    <Badge
                      variant="secondary"
                      className="px-2 py-0.5 text-xs dark:bg-zinc-700 dark:text-zinc-300"
                    >
                      Node.js
                    </Badge>
                    <Badge
                      variant="secondary"
                      className="px-2 py-0.5 text-xs dark:bg-zinc-700 dark:text-zinc-300"
                    >
                      AWS
                    </Badge>
                    <Badge
                      variant="secondary"
                      className="px-2 py-0.5 text-xs dark:bg-zinc-700 dark:text-zinc-300"
                    >
                      React
                    </Badge>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-zinc-200 dark:border-zinc-700 dark:bg-zinc-800">
                <CardContent className="p-6">
                  <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-start">
                    <div>
                      <h3 className="font-semibold text-lg">
                        NFTYDoor Project
                      </h3>
                      <p className="text-zinc-600 dark:text-zinc-300">
                        Loan Platform in the US
                      </p>
                    </div>
                  </div>
                  <p className="mt-4 text-zinc-600 dark:text-zinc-300">
                    Development of a loan platform using MERN stack and AWS
                    Serverless. Solving production issues and adapting to new
                    requirements.
                  </p>
                  <div className="flex flex-wrap gap-2 mt-4">
                    <Badge
                      variant="secondary"
                      className="px-2 py-0.5 text-xs dark:bg-zinc-700 dark:text-zinc-300"
                    >
                      MERN Stack
                    </Badge>
                    <Badge
                      variant="secondary"
                      className="px-2 py-0.5 text-xs dark:bg-zinc-700 dark:text-zinc-300"
                    >
                      AWS Serverless
                    </Badge>
                    <Badge
                      variant="secondary"
                      className="px-2 py-0.5 text-xs dark:bg-zinc-700 dark:text-zinc-300"
                    >
                      MongoDB
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            </section>

            <section className="border-t border-zinc-200 dark:border-zinc-800 py-12">
              <h2 className="text-2xl font-bold mb-6">Education</h2>
              <div className="mb-4">
                <h3 className="font-semibold">
                  Information Technology Technician
                </h3>
                <p className="text-zinc-600 dark:text-zinc-300">
                  UTN (Universidad Tecnológica Nacional) <span>2022-2024</span>
                </p>
              </div>
            </section>

            <section className="border-t border-zinc-200 dark:border-zinc-800 py-12">
              <h2 className="text-2xl font-bold mb-6">Technologies</h2>
              <div className="flex flex-wrap gap-3">
                {/* Make all badges consistent with a contrasting color */}
                <Badge className="px-3 py-1 bg-red-500/80 hover:bg-red-600/80 text-white dark:bg-red-500/80 dark:hover:bg-red-600/80 dark:text-white">
                  TypeScript
                </Badge>
                <Badge className="px-3 py-1 bg-red-500/80 hover:bg-red-600/80 text-white dark:bg-red-500/80 dark:hover:bg-red-600/80 dark:text-white">
                  JavaScript
                </Badge>
                <Badge className="px-3 py-1 bg-red-500/80 hover:bg-red-600/80 text-white dark:bg-red-500/80 dark:hover:bg-red-600/80 dark:text-white">
                  Node.js
                </Badge>
                <Badge className="px-3 py-1 bg-red-500/80 hover:bg-red-600/80 text-white dark:bg-red-500/80 dark:hover:bg-red-600/80 dark:text-white">
                  React
                </Badge>
                <Badge className="px-3 py-1 bg-red-500/80 hover:bg-red-600/80 text-white dark:bg-red-500/80 dark:hover:bg-red-600/80 dark:text-white">
                  MongoDB
                </Badge>
                <Badge className="px-3 py-1 bg-red-500/80 hover:bg-red-600/80 text-white dark:bg-red-500/80 dark:hover:bg-red-600/80 dark:text-white">
                  Express
                </Badge>
                <Badge className="px-3 py-1 bg-red-500/80 hover:bg-red-600/80 text-white dark:bg-red-500/80 dark:hover:bg-red-600/80 dark:text-white">
                  AWS Serverless
                </Badge>
                <Badge className="px-3 py-1 bg-red-500/80 hover:bg-red-600/80 text-white dark:bg-red-500/80 dark:hover:bg-red-600/80 dark:text-white">
                  Lambda
                </Badge>
                <Badge className="px-3 py-1 bg-red-500/80 hover:bg-red-600/80 text-white dark:bg-red-500/80 dark:hover:bg-red-600/80 dark:text-white">
                  DynamoDB
                </Badge>
                <Badge className="px-3 py-1 bg-red-500/80 hover:bg-red-600/80 text-white dark:bg-red-500/80 dark:hover:bg-red-600/80 dark:text-white">
                  S3
                </Badge>
                <Badge className="px-3 py-1 bg-red-500/80 hover:bg-red-600/80 text-white dark:bg-red-500/80 dark:hover:bg-red-600/80 dark:text-white">
                  API Gateway
                </Badge>
                <Badge className="px-3 py-1 bg-red-500/80 hover:bg-red-600/80 text-white dark:bg-red-500/80 dark:hover:bg-red-600/80 dark:text-white">
                  HTML/CSS
                </Badge>
                <Badge className="px-3 py-1 bg-red-500/80 hover:bg-red-600/80 text-white dark:bg-red-500/80 dark:hover:bg-red-600/80 dark:text-white">
                  Git
                </Badge>
              </div>
            </section>

            <section className="border-t border-zinc-200 dark:border-zinc-800 py-12">
              <h2 className="text-2xl font-bold mb-6">Contact</h2>
              <div className="space-y-4">
                <a
                  href="mailto:nicolasmatiasmuller19@gmail.com"
                  className="flex items-center gap-2 hover:text-red-500/80 dark:hover:text-red-400/80 transition-colors"
                >
                  <Mail className="h-5 w-5 text-zinc-600 dark:text-zinc-400" />
                  <span>nicolasmatiasmuller19@gmail.com</span>
                </a>
                <a
                  href="https://www.linkedin.com/in/nicolasmmuller/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-red-500/80 dark:hover:text-red-400/80 transition-colors"
                >
                  <Linkedin className="h-5 w-5 text-zinc-600 dark:text-zinc-400" />
                  <span>linkedin.com/in/nicolasmmuller</span>
                </a>
                <a
                  href="https://github.com/NicolasMuller01"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-red-500/80 dark:hover:text-red-400/80 transition-colors"
                >
                  <Github className="h-5 w-5 text-zinc-600 dark:text-zinc-400" />
                  <span>github.com/NicolasMuller01</span>
                </a>
              </div>

              <div className="mt-8 prose prose-zinc dark:text-zinc-300 max-w-none">
                <p>
                  If you're looking for someone with a passion for technology,
                  eager to learn and solve challenges, let's talk! 🚀
                </p>
              </div>
            </section>
          </main>

          <footer className="border-t border-zinc-200 dark:border-zinc-800 py-6 px-4 md:px-8">
            <div className="mx-auto w-full max-w-3xl flex flex-col items-center justify-between gap-4 sm:flex-row">
              <p className="text-sm text-zinc-500 dark:text-zinc-400"></p>
              <div className="flex gap-4">
                <a
                  href="https://github.com/NicolasMuller01"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-8 w-8 dark:text-zinc-400 dark:hover:text-white dark:hover:bg-zinc-800"
                  >
                    <Github className="h-4 w-4" />
                  </Button>
                </a>
                <a
                  href="https://www.linkedin.com/in/nicolasmmuller/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-8 w-8 dark:text-zinc-400 dark:hover:text-white dark:hover:bg-zinc-800"
                  >
                    <Linkedin className="h-4 w-4" />
                  </Button>
                </a>
                <a href="mailto:nicolasmatiasmuller19@gmail.com">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-8 w-8 dark:text-zinc-400 dark:hover:text-white dark:hover:bg-zinc-800"
                  >
                    <Mail className="h-4 w-4" />
                  </Button>
                </a>
              </div>
            </div>
          </footer>
        </>
      )}
      {!mounted && (
        <div className="flex min-h-screen items-center justify-center">
          <div className="h-8 w-8 animate-spin rounded-full border-4 border-zinc-300 border-t-red-500"></div>
        </div>
      )}
      <Toaster />
    </div>
  );
}
