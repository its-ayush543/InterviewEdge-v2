"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useCallback } from "react";
import { useRouter } from "next/navigation";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "@/firebase/client";

const LandingPage = () => {
  const router = useRouter();

  const handleSignInRedirect = useCallback(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      unsubscribe(); // cleanup
      if (user) {
        router.push("/dashboard");
      } else {
        router.push("/sign-in");
      }
    });
  }, [router]);

  return (
    <div className="min-h-screen flex flex-col text-white bg-dark-100">
      {/* Navigation */}
      <nav className="flex items-center justify-between px-16 py-6 max-sm:px-4">
        <Link href="/" className="flex items-center gap-2">
          <Image src="/logo.svg" alt="Logo" width={38} height={32} />
          <h2 className="text-primary-100 font-semibold">Interview Edge</h2>
        </Link>
        <div className="flex items-center gap-4">
          <button
                onClick={handleSignInRedirect}
                className="text-primary-100 hover:text-primary-200 transition"
              >
                Sign In
              </button>
          <Link
            href="/sign-up"
            className="btn-primary text-dark-100 bg-primary-200 px-5 py-2 rounded-xl hover:bg-primary-100 transition"
          >
            Get Started
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="flex-1 flex items-center justify-center px-16 max-sm:px-4">
        <section className="card-cta flex flex-col-reverse md:flex-row items-center justify-between max-w-7xl mx-auto gap-12">
          <div className="flex flex-col gap-8 max-w-2xl">
            <h1 className="text-5xl max-sm:text-4xl font-bold leading-tight">
              Get Interview Ready with{" "}
              <span className="text-primary-200">AI-Powered</span> Practice and
              Feedback
            </h1>
            <p className="text-xl text-light-100 leading-relaxed">
              Practice on real Interview Questions and get AI-Powered Feedback
              to improve your performance.
            </p>
            <div className="flex gap-4 max-sm:flex-col">
              <Link
                href="/sign-up"
                className="btn-primary bg-primary-200 text-dark-100 text-lg px-8 py-4 rounded-xl hover:bg-primary-100 transition"
              >
                Start Practicing Now
              </Link>
              <button
                onClick={handleSignInRedirect}
                className="border border-primary-200 text-primary-200 text-lg px-8 py-4 rounded-xl hover:bg-primary-200 hover:text-dark-100 transition"
              >
                Sign In to Continue
              </button>
            </div>
          </div>
          <div className="flex-shrink-0">
            <Image
              src="/robot.png"
              alt="AI Interview Assistant"
              width={500}
              height={500}
              className="max-sm:hidden"
              priority
            />
          </div>
        </section>
      </main>

      {/* Features Section */}
      <section className="px-16 py-16 max-sm:px-4 max-sm:py-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">
            Why Choose Interview Edge?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: "/ai-avatar.png",
                title: "AI-Powered Feedback",
                desc: "Get detailed, personalized feedback on your interview performance from our advanced AI system.",
              },
              {
                icon: "/calendar.svg",
                title: "Real Interview Questions",
                desc: "Practice with actual interview questions from top companies across various industries.",
              },
              {
                icon: "/star.svg",
                title: "Track Progress",
                desc: "Monitor your improvement over time and identify areas that need more practice.",
              },
            ].map((feature, idx) => (
              <div key={idx} className="text-center">
                <div className="w-16 h-16 bg-primary-200 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Image
                    src={feature.icon}
                    alt={feature.title}
                    width={32}
                    height={32}
                  />
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-light-100">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-16 py-16 max-sm:px-4 max-sm:py-8 bg-dark-200/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Ace Your Next Interview?
          </h2>
          <p className="text-xl text-light-100 mb-8">
            Join thousands of professionals who have improved their interview
            skills with Interview Edge.
          </p>
          <Link
            href="/sign-up"
            className="btn-primary bg-primary-200 text-dark-100 text-lg px-8 py-4 rounded-xl hover:bg-primary-100 transition"
          >
            Get Started for Free
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-16 py-8 border-t border-border max-sm:px-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center max-sm:flex-col max-sm:gap-4">
          <div className="flex items-center gap-2">
            <Image src="/logo.svg" alt="Logo" width={24} height={20} />
            <span className="text-primary-100 font-semibold">
              Interview Edge
            </span>
          </div>
          <p className="text-light-400 text-sm">
            © 2025 Interview Edge. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
