import { HackathonCard } from "@/components/hackathon-card";
import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import Marquee from "@/components/magicui/marquee";
import { ProjectCard } from "@/components/project-card";
import { ResumeCard } from "@/components/resume-card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { DATA } from "@/data/resume";
import Link from "next/link";
import Markdown from "react-markdown";
import HyperText from "@/components/magicui/hyper-text";
import TypingAnimation from "@/components/magicui/typing-animation";
import Head from "next/head";

const BLUR_FADE_DELAY = 0.04;

export default function Page() {
  return (
    <main className='flex flex-col min-h-[100dvh] space-y-10'>
      <section id='hero'>
        <div className='mx-auto w-full max-w-2xl space-y-8'>
          <div className='gap-2 flex justify-between'>
            <div className='flex-col flex flex-1 space-y-1.5'>
              <HyperText
                text='Helkem'
                className='text-5xl font-semibold font-inter text-transform: capitalize'
              />
              <BlurFadeText
                className='max-w-[600px] md:text-xl'
                delay={BLUR_FADE_DELAY}
                text={DATA.description}
              />
            </div>
            <BlurFade delay={BLUR_FADE_DELAY}>
              <Avatar className='size-28 border'>
                <AvatarImage alt={DATA.name} src={DATA.avatarUrl} />
                <AvatarFallback>{DATA.initials}</AvatarFallback>
              </Avatar>
            </BlurFade>
          </div>
        </div>
      </section>
      <section id='about'>
        <BlurFade delay={BLUR_FADE_DELAY * 3}>
          <h2 className='text-xl font-bold'>About</h2>
        </BlurFade>
        <BlurFade delay={BLUR_FADE_DELAY * 4}>
          <Markdown className='prose max-w-full text-pretty font-sans text-sm text-muted-foreground dark:prose-invert'>
            {DATA.summary}
          </Markdown>
        </BlurFade>
      </section>

      <section id='skills'>
        <div className='flex min-h-0 flex-col gap-y-3'>
          <BlurFade delay={BLUR_FADE_DELAY * 9}>
            <h2 className='text-xl font-bold'>Skills</h2>
          </BlurFade>
          <div className='flex flex-wrap gap-1'>
            {DATA.skills.map((skill, id) => (
              <BlurFade key={skill} delay={BLUR_FADE_DELAY * 10 + id * 0.05}>
                <Badge key={skill}>{skill}</Badge>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>
      <section id='projects'>
        <div className='space-y-12 w-full py-12'>
          <BlurFade delay={BLUR_FADE_DELAY * 11}>
            <div className='flex flex-col items-center justify-center space-y-4 text-center'>
              <div className='space-y-2'>
                <TypingAnimation
                  text='My Projects'
                  className='inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm'
                  duration={88}
                />
                <h2 className='text-3xl font-bold tracking-tighter sm:text-5xl'>
                  Check out my latest work
                </h2>

                <p className='text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed'>
                  Web3 side projects I`&apos;`ve developed and designed.
                </p>
              </div>
            </div>
          </BlurFade>
          <div className='grid grid-cols-1 gap-3 sm:grid-cols-2 max-w-[800px] mx-auto'>
            {DATA.projects.map((project, id) => (
              <BlurFade
                key={project.title}
                delay={BLUR_FADE_DELAY * 12 + id * 0.05}
              >
                <ProjectCard
                  href={project.href}
                  key={project.title}
                  dates={project.dates}
                  title={project.title}
                  description={project.description}
                  tags={project.technologies}
                  image={project.image}
                  links={project.links}
                />
              </BlurFade>
            ))}
          </div>
        </div>
      </section>

      <section id='contact'>
        <div className='grid items-center justify-center gap-4 px-4 text-center md:px-6 w-full py-12'>
          <BlurFade delay={BLUR_FADE_DELAY * 16}>
            <div className='space-y-3'>
              <TypingAnimation
                text='Contact'
                className='inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm'
                duration={100}
              />
              <h2 className='text-3xl font-bold tracking-tighter sm:text-5xl'>
                Get in Touch
              </h2>

              <p className='mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed'>
                Email{" "}
                <span className='text-black dark:text-white font-semibold hover:underline'>
                  helkemzero@gmail
                </span>{" "}
                or contact me on{" "}
                <Link
                  href={DATA.contact.social.X.url}
                  className='text-black dark:text-white hover:underline font-semibold'
                >
                  Twitter/X
                </Link>{" "}
                and I&apos;ll respond as soon as possible.
              </p>
            </div>
          </BlurFade>
        </div>
      </section>
    </main>
  );
}
