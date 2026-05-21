// Footer appears at the bottom of every page (included in the root layout)
export default function Footer() {
  return (
    <footer className="text-white mt-16" style={{ backgroundColor: "rgba(0, 91, 187)" }}>
      {/* Three-column grid: lab info | contact | map */}
      <div className="max-w-7xl mx-auto px-4 py-5 grid grid-cols-1 md:grid-cols-3 gap-6">

        {/* Column 1 — Lab name, department, and copyright */}
        <div>
          <p className="font-bold text-xl mb-3">
            Wireless Robotics and Embedded Systems (WiRES) Lab
          </p>
          <p className="text-blue-100 text-base leading-relaxed">
            Department of Computer Science and Engineering
            <br />
            <a
              href="https://www.buffalo.edu"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white underline"
            >
              University at Buffalo, SUNY
            </a>
          </p>
          {/* Copyright year is computed automatically so it stays up to date */}
          <p className="text-blue-200 text-sm mt-4">
            &copy; {new Date().getFullYear()} WiRES Lab. All rights reserved.
          </p>
        </div>

        {/* Column 2 — Mailing address and email */}
        <div>
          <p className="font-bold text-xl mb-3">Contact</p>
          <address className="not-italic text-blue-100 text-base leading-relaxed">
            113I Davis Hall
            <br />
            105 White Rd, Buffalo, NY 14260
            <br />
            <a
              href="mailto:roshana@buffalo.edu"
              className="hover:text-white underline"
            >
              roshana@buffalo.edu
            </a>
          </address>
        </div>

        {/* Column 3 — Embedded Google Maps showing Davis Hall location */}
        <div>
          <p className="font-semibold mb-2">Find Us</p>
          <iframe
            title="Davis Hall, University at Buffalo"
            src="https://www.google.com/maps?q=Davis+Hall+University+at+Buffalo+105+White+Rd+Buffalo+NY+14260&output=embed"
            width="100%"
            height="160"
            style={{ border: 0, borderRadius: "8px" }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </footer>
  );
}
