import { AboutCard } from "@/components/card/aboutCard";
import { CurriculumCard } from "@/components/card/curriculumCard";
import { EmailCard } from "@/components/card/emailCard";
import { LinkedinCard } from "@/components/card/linkedinCard";
import { PortfolioCard } from "@/components/card/portfolioCard";
import { WhatsappCard } from "@/components/card/whatsappCard";
import { Profile } from "@/components/profile/profile";
import { GithubCard } from "@/components/card/githubCard";
import { InstagramCard } from "@/components/card/instagramCard";
import { InstagramdevCard } from "@/components/card/instagramdevCard";

export default function Home() {
    return (
        <main className="min-h-screen bg-gradient-to-b from-[var(--color-dark)] to-[#383C46] flex justify-center">

            <section className="px-4 py-10 flex flex-col items-center gap-6">

                <Profile />
                <PortfolioCard />
                <LinkedinCard />
                <GithubCard />
                <InstagramCard />
                <div className="flex gap-3">
                    <WhatsappCard />
                    <EmailCard />
                    <CurriculumCard />
                </div>
                <InstagramdevCard />
                <AboutCard />
                

                {/* portfolio,linkedin, github, insta, instaPortfolio
                whatsapp, email, curriculo
                sobre */}

            </section>

        </main>
    )
}