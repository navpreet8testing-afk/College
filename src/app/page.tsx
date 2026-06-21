"use client";

import { RouterProvider, useRouter, type PageKey } from "@/components/site/router";
import { SiteHeader } from "@/components/site/header";
import { SiteFooter } from "@/components/site/footer";
import { Preloader } from "@/components/site/preloader";
import { Chatbot } from "@/components/site/chatbot";
import { HomePage } from "@/components/site/pages/home";
import { AboutPage } from "@/components/site/pages/about";
import { AcademicsPage } from "@/components/site/pages/academics";
import { AdmissionsPage } from "@/components/site/pages/admissions";
import { CampusLifePage } from "@/components/site/pages/campus-life";
import { ResearchPage } from "@/components/site/pages/research";
import { ContactPage } from "@/components/site/pages/contact";
import { AlumniPage } from "@/components/site/pages/alumni";
import { CareersPage } from "@/components/site/pages/careers";
import { NewsPage } from "@/components/site/pages/news";
import { EventsPage } from "@/components/site/pages/events";
import { PortalPage } from "@/components/site/pages/portal";
import { StudentPortalPage } from "@/components/site/pages/student-portal";
import { FacultyPortalPage } from "@/components/site/pages/faculty-portal";
import { LibraryPage } from "@/components/site/pages/library";
import { DownloadsPage } from "@/components/site/pages/downloads";
import { GrievancePage } from "@/components/site/pages/grievance";

const PAGE_COMPONENTS: Record<PageKey, () => React.JSX.Element> = {
  home: HomePage,
  about: AboutPage,
  academics: AcademicsPage,
  admissions: AdmissionsPage,
  "campus-life": CampusLifePage,
  research: ResearchPage,
  contact: ContactPage,
  alumni: AlumniPage,
  careers: CareersPage,
  news: NewsPage,
  events: EventsPage,
  portal: PortalPage,
  "student-portal": StudentPortalPage,
  "faculty-portal": FacultyPortalPage,
  library: LibraryPage,
  downloads: DownloadsPage,
  grievance: GrievancePage,
};

function AppShell() {
  const { page, navId } = useRouter();

  const PageComponent = PAGE_COMPONENTS[page];

  return (
    <div className="flex min-h-screen flex-col bg-white">
      {/* Preloader on every page: remounts via `key={navId}` so it
          re-animates on the initial load AND on every navigation. */}
      <Preloader key={navId} initial={navId === 1} />

      <SiteHeader />
      <main className="flex-1">
        {/* `key={page}` forces a fresh mount so `.page-enter` animates on
            every navigation and scroll-reveal re-runs for the new page. */}
        <div key={page} className="page-enter">
          <PageComponent />
        </div>
      </main>
      <SiteFooter />

      {/* Floating chatbot assistant — visible on every page */}
      <Chatbot />
    </div>
  );
}

export default function Home() {
  return (
    <RouterProvider>
      <AppShell />
    </RouterProvider>
  );
}
