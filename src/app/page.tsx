// Home page — the first page visitors see at the root URL "/"
import { Metadata } from "next";
import Carousel from "@/components/home/Carousel";
import NewsSidebar from "@/components/home/NewsSidebar";
import ResearchCard from "@/components/research/ResearchCard";
import { researchAreas } from "@/data/research";

// Metadata shown in the browser tab
export const metadata: Metadata = {
  title: "WiRES Lab - Home",
  description:
    "Wireless Robotics and Embedded Systems Lab at the University at Buffalo.",
};

export default function HomePage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-10">

      {/* Hero section — two columns on large screens: main content + sidebar */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-14">

        {/* Main content column: lab intro, carousel, and description paragraphs */}
        <div className="lg:col-span-2 space-y-6">
          <div>
            <h1 className="text-3xl font-bold text-ub-darkblue mb-3">
              Wireless Robotics and Embedded Systems Lab
            </h1>
            <p className="text-gray-700 leading-relaxed">
              We are a dynamic research group at the{" "}
              <a
                href="https://www.buffalo.edu"
                target="_blank"
                rel="noopener noreferrer"
                className="text-ub-blue hover:underline"
              >
                University at Buffalo
              </a>
              . Our mission is to advance the integration of wireless systems
              into robotics, focusing on innovative solutions for challenges such
              as radar-based sensing, Wi-Fi-based localization, and their
              applications in robotics and autonomous systems.
            </p>
          </div>

          {/* Image slideshow carousel */}
          <Carousel />

          {/* Additional description paragraphs about the lab's focus areas */}
          <div className="space-y-4 text-gray-700 leading-relaxed text-sm">
            <p>
              One of our key focuses is developing innovative localization
              solutions for tiny robots that lack traditional sensors such as
              encoders. By leveraging wireless signals, including Wi-Fi RSSI
              (Received Signal Strength Indicator), we aim to achieve precise
              and robust localization in environments where traditional methods
              are impractical. This enables the deployment of cost-effective,
              lightweight robots in a variety of applications.
            </p>
            <p>
              Additionally, we are scaling these tiny robots into cooperative
              swarm systems, exploring decentralized control, communication, and
              mapping strategies. By combining Wi-Fi localization with swarm
              robotics principles, we aim to enhance multi-robot coordination
              for tasks like search-and-rescue, environmental monitoring, and
              warehouse automation.
            </p>
            <p>
              In addition, our lab is pioneering the use of RF imaging
              technology for plastic waste recycling. Traditional camera systems
              often struggle to detect and classify materials beneath surface
              layers, limiting their effectiveness in sorting processes. By
              utilizing RF imaging, we can penetrate these upper layers and
              obtain critical information about the composition and location of
              buried plastics. This innovative approach has the potential to
              revolutionize waste recycling by improving sorting accuracy and
              efficiency, ultimately contributing to more sustainable practices
              in waste management.
            </p>
            <p>
              Furthermore, we are exploring the use of Wi-Fi as a robust sensor
              for localization, especially in environments where traditional
              sensors like cameras face limitations. Cameras often struggle in
              challenging lighting conditions, such as low light, glare, or
              excessive brightness. Wi-Fi-based localization offers a resilient
              alternative that is not affected by visual disruptions, providing
              consistent and reliable positioning even in dynamic and
              unpredictable environments.
            </p>
            <p>
              Our mission is to push the boundaries of robotics and wireless
              systems, creating scalable, impactful solutions for real-world
              challenges while contributing to advancements in technology and
              sustainability.
            </p>
          </div>
        </div>

        {/* Sidebar column: news feed */}
        <div className="lg:col-span-1">
          <NewsSidebar />
        </div>
      </div>

      {/* Research highlights section — shows all research area cards in a 2-column grid */}
      <section>
        <h2 className="text-2xl font-bold text-ub-darkblue mb-6">
          Research Areas
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {researchAreas.map((area) => (
            <ResearchCard key={area.slug} area={area} />
          ))}
        </div>
      </section>
    </div>
  );
}
