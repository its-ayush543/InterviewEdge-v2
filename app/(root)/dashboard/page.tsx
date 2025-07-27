import InterviewCard from "@/components/InterviewCard";
import { Button } from "@/components/ui/button";
import { getCurrentUser } from "@/lib/actions/auth.action";
import {
  getInterviewsByUserId,
  getLatestInterviews,
} from "@/lib/actions/general.action";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Page = async () => {
  const user = await getCurrentUser();
  const [userInterviews, allInterviews] = await Promise.all([
    getInterviewsByUserId(user?.id!),
    getLatestInterviews({ userId: user?.id! }),
  ]);

  const hasPastInterviews = userInterviews?.length! > 0;
  const hasUpComingInterviews = allInterviews?.length! > 0;

  return (
    <main className="min-h-screen">
      {/* Hero Section with background */}
      <section className="card-cta flex flex-col lg:flex-row justify-between items-center gap-10 rounded-2xl p-10 bg-muted shadow-sm mx-16 max-sm:mx-4">
        <div className="flex flex-col gap-6 max-w-xl">
          <h1 className="text-4xl font-bold leading-tight">
            Get Interview Ready with AI-Powered Practice and Feedback
          </h1>
          <p className="text-lg text-muted-foreground">
            Practice on real Interview Questions and get AI-Powered Feedback to
            improve your performance.
          </p>
          <Button asChild className="w-fit px-6 py-3 text-base rounded-xl">
            <Link href="/interview">Start an Interview</Link>
          </Button>
        </div>

        <Image
          src="/robot.png"
          alt="AI Robot"
          width={400}
          height={400}
          className="max-sm:hidden object-contain"
        />
      </section>

      {/* Past Interviews Section */}
      <section className="mt-16 flex flex-col gap-6 px-16 max-sm:px-4">
        <h2 className="text-3xl font-semibold">Your Interviews</h2>
        <div className="interviews-section">
          {hasPastInterviews ? (
            userInterviews?.map((interview) => (
              <InterviewCard {...interview} key={interview.id} />
            ))
          ) : (
            <p className="text-muted-foreground">
              You haven&apos;t taken any interviews yet.
            </p>
          )}
        </div>
      </section>

      {/* Upcoming Interviews Section */}
      <section className="mt-16 flex flex-col gap-6 px-16 max-sm:px-4">
        <h2 className="text-3xl font-semibold">Take an Interview</h2>
        <div className="interviews-section">
          {hasUpComingInterviews ? (
            allInterviews?.map((interview) => (
              <InterviewCard {...interview} key={interview.id} />
            ))
          ) : (
            <p className="text-muted-foreground">
              There are no interviews available.
            </p>
          )}
        </div>
      </section>
    </main>
  );
};

export default Page;
