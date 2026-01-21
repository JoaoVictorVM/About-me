import { AboutCard } from "@/components/card/aboutCard";
import { LinkedinCard } from "@/components/card/linkedinCard";
import { PortfolioCard } from "@/components/card/portfolioCard";
import { Profile } from "@/components/profile/profile";

export default function Home() {
    return (
        <main className="min-h-screen bg-[var(--color-dark)] flex justify-center">

            <section className="w-full px-4 py-10 flex flex-col items-center gap-6">

                <Profile />

                <PortfolioCard />
                <LinkedinCard />
                <AboutCard />
                

                {/* portfolio,linkedin, github, insta, instaPortfolio
                whatsapp, email
                sobre */}

            </section>

        </main>
    )
}