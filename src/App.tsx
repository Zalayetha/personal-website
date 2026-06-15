import { useEffect, useRef } from "react";
import {
  Sprout,
  House,
  FolderKanban,
  UserPen,
  Link,
  FingerprintPattern,
  ChartScatter,
  GraduationCap,
} from "lucide-react";
import Typed from "typed.js";
import "./App.css";

function App() {
  const nameRef = useRef<HTMLSpanElement>(null);
  const taglineRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const nameTyped = new Typed(nameRef.current, {
      strings: ["I'm Zaghy Zalayetha."],
      typeSpeed: 50,
      showCursor: false,
    });

    const taglineTyped = new Typed(taglineRef.current, {
      strings: ["I Help Businesses and Founders Build Software That Works."],
      typeSpeed: 50,
      showCursor: false,
      startDelay: 1000,
    });

    return () => {
      nameTyped.destroy();
      taglineTyped.destroy();
    };
  }, []);

  return (
    <div>
      <header className="border-b-2 border-gray-300 sticky top-0 z-50 w-full bg-gray-100">
        <nav className="flex flex-row justify-between px-8 py-4 items-center">
          {/*Icon Web*/}
          <div className="flex flex-row items-center border-2 border-gray-300 rounded-full p-2">
            <Sprout className="w-6 h-6 shrink-0" />
          </div>
          {/*Navigation*/}
          <div className="flex flex-row lg:gap-6 gap-2">
            <a href="#home">
              <div className="items-center font-newsreader border-2 p-2 rounded-lg flex flex-row lg:text-lg text-sm gap-1 border-gray-300 transition delay-50 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-[#191919] hover:text-white hover:border-white">
                <House className="w-5 h-5 shrink-0" />
                <span className="hidden lg:inline text-sm font-medium">
                  Home
                </span>
              </div>
            </a>

            <a href="#academic">
              <div className="items-center font-newsreader border-2 p-2 rounded-lg flex flex-row lg:text-lg text-sm gap-1 border-gray-300 transition delay-50 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-[#191919] hover:text-white hover:border-white">
                <GraduationCap className="w-5 h-5 shrink-0" />
                <span className="hidden lg:inline text-sm font-medium">
                  Academic
                </span>
              </div>
            </a>

            <a href="#projects">
              <div className="items-center font-newsreader border-2 p-2 rounded-lg flex flex-row lg:text-lg text-sm gap-1 border-gray-300 transition delay-50 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-[#191919] hover:text-white hover:border-white">
                <FolderKanban className="w-5 h-5 shrink-0" />
                <span className="hidden lg:inline text-sm font-medium">
                  Projects
                </span>
              </div>
            </a>

            <a href="#contact">
              <div className="items-center font-newsreader border-2 p-2 rounded-lg flex flex-row lg:text-lg text-sm gap-1 border-gray-300 transition delay-50 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-[#191919] hover:text-white hover:border-white">
                <UserPen className="w-5 h-5 shrink-0" />
                <span className="hidden lg:inline text-sm font-medium">
                  Contact
                </span>
              </div>
            </a>
          </div>
        </nav>
      </header>

      <main>
        <section
          id="home"
          className="flex lg:flex-row flex-col lg:gap-24 sm:gap-8 lg:p-32 items-center pt-32"
        >
          <img
            src="./assets/profile_picture.png"
            alt="Profile Picture"
            className="lg:w-62.5 lg:h-83 w-60 h-80 object-cover rounded-4xl border-4 border-gray-300 lg:items-start items-center transition delay-50 hover:-translate-y-1 duration-300 ease-in-out hover:scale-110"
          />

          <div className="space-y-4 my-6 px-4">
            <div className="flex flex-row lg:min-h-12 lg:justify-start justify-center min-h-4">
              <span
                ref={nameRef}
                className="font-newsreader lg:text-3xl text-xl lg:text-start text-center"
              />
            </div>

            <div className="flex flex-row lg:min-h-14 lg:justify-start justify-center min-h-12">
              <span
                ref={taglineRef}
                className="font-newsreader lg:text-3xl lg:text-start text-xl text-center"
              />
            </div>

            <div className="flex flex-row min-h-12 gap-4 lg:justify-start justify-center">
              <a
                href="https://www.linkedin.com/in/mohammad-zaghy-zalayetha-sofjan/"
                target="_blank"
              >
                <img src="assets/mdi_linkedin.png" alt="LinkedIn" width="32" />
              </a>
              <a href="https://github.com/Zalayetha" target="_blank">
                <img src="assets/mdi_github.png" alt="LinkedIn" width="32" />
              </a>
            </div>
          </div>
        </section>

        <section
          id="about"
          className="flex flex-col lg:px-32 lg:py-8 px-12 py-8"
        >
          <div className="font-newsreader text-3xl font-bold">About</div>

          <div className="h-1 rounded-full bg-gray-200 my-4"></div>
          <div className="font-manrope text-md font-medium">
            Software Developer with 3+ years of experience, experiencing in
            Mobile App Development, Machine Learning, Full-Stack Development.
            Skilled in building scalable mobile applications, building machine
            learning models, and building REST API. Experienced in team
            leadership, project management, and ensuring project success and
            team harmony. Passionate about building meaningful software and
            achieving impactful results.
          </div>
        </section>

        <section
          id="experience"
          className="flex flex-col lg:px-32 lg:py-8 px-12 py-8"
        >
          <div className="font-newsreader text-3xl font-bold">Experience</div>

          <div className="h-1 rounded-full bg-gray-200 my-4"></div>

          <div className="mt-4">
            <div className="grid lg:grid-cols-2 grid-cols-1 gap-8">
              <div className="font-manrope font-semibold text-md text-gray-500">
                C3ARBON
              </div>
              <div className="flex flex-col gap-4">
                <div className="font-manrope font-semibold text-md">
                  Full-Stack Engineer
                </div>
                <div className="font-manrope font-semibold text-md text-gray-500">
                  Indonesia • Remote • March 2026 - Present
                </div>
              </div>
            </div>

            <div className="h-0.5 rounded-full bg-gray-200 my-4"></div>

            <div className="grid lg:grid-cols-2 grid-cols-1 gap-8">
              <div className="font-manrope font-semibold text-md text-gray-500">
                Universitas Budi Luhur
              </div>
              <div className="flex flex-col gap-4">
                <div className="font-manrope font-semibold text-md">
                  Mobile Developer
                </div>
                <div className="font-manrope font-semibold text-md text-gray-500">
                  Indonesia • Hybrid • September 2023 - April 2026
                </div>
              </div>
            </div>

            <div className="h-0.5 rounded-full bg-gray-200 my-4"></div>

            <div className="grid lg:grid-cols-2 grid-cols-1 gap-8">
              <div className="font-manrope font-semibold text-md text-gray-500">
                Bangkit Academy
              </div>
              <div className="flex flex-col gap-4">
                <div className="font-manrope font-semibold text-md">
                  Mobile Developer Cohort
                </div>
                <div className="font-manrope font-semibold text-md text-gray-500">
                  Indonesia • Remote • February 2024 - July 2024
                </div>
              </div>
            </div>

            <div className="h-0.5 rounded-full bg-gray-200 my-4"></div>

            <div className="grid lg:grid-cols-2 grid-cols-1 gap-8">
              <div className="font-manrope font-semibold text-md text-gray-500">
                English Space
              </div>
              <div className="flex flex-col gap-4">
                <div className="font-manrope font-semibold text-md">
                  Web Developer
                </div>
                <div className="font-manrope font-semibold text-md text-gray-500">
                  Indonesia • Remote • June 2022 - March 2023
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          id="academic"
          className="flex flex-col lg:px-32 lg:py-8 px-12 py-8"
        >
          <div className="font-newsreader text-3xl font-bold">Academic</div>
          <div className="h-1 rounded-full bg-gray-200 my-4"></div>

          <div className="font-newsreader text-xl font-semibold mt-4">
            Education
          </div>
          <div className="mt-4">
            <div className="grid lg:grid-cols-2 grid-cols-1 gap-8">
              <div className="font-manrope font-semibold text-md">
                Universitas Budi Luhur
                <div className="font-manrope font-normal text-sm text-gray-500">
                  Jakarta, Indonesia • September 2021 - August 2025
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <div className="font-manrope font-semibold text-md">
                  Bachelor of Computer Science, Informatics Engineering
                </div>
                <div className="font-manrope text-sm text-gray-600">
                  Cumulative GPA: 3.96/4.0
                </div>
                <div className="font-manrope text-sm text-gray-600 italic">
                  The Best Graduate of Informatics Engineering 2025
                </div>
              </div>
            </div>

            <div className="h-0.5 rounded-full bg-gray-200 my-4"></div>

            <div className="grid lg:grid-cols-2 grid-cols-1 gap-8">
              <div className="font-manrope font-semibold text-md">
                SMA Negeri 7 Tangerang
                <div className="font-manrope font-normal text-sm text-gray-500">
                  Tangerang, Indonesia • October 2018 - May 2021
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <div className="font-manrope font-semibold text-md">
                  Science
                </div>
                <div className="font-manrope text-sm text-gray-600">
                  Final Examination Score: 81.64/100
                </div>
              </div>
            </div>
          </div>

          <div className="font-newsreader text-xl font-semibold mt-8">
            Certifications
          </div>
          <div className="flex flex-wrap gap-2 pt-4">
            <div className="bg-[#191919] rounded-full px-3 py-1 shrink-0">
              <div className="text-white px-4 py-2 font-manrope text-xs">
                Dev Certification For Android – dev.id
              </div>
            </div>
            <div className="bg-[#191919] rounded-full px-3 py-1 shrink-0">
              <div className="text-white px-4 py-2 font-manrope text-xs">
                Bangkit Academy 2024 batch 1 – Google, Tokopedia, Gojek,
                Traveloka
              </div>
            </div>
            <div className="bg-[#191919] rounded-full px-3 py-1 shrink-0">
              <div className="text-white px-4 py-2 font-manrope text-xs">
                English for Business Communication (92%) – The British Institute
              </div>
            </div>
            <div className="bg-[#191919] rounded-full px-3 py-1 shrink-0">
              <div className="text-white px-4 py-2 font-manrope text-xs">
                Docker Foundations Professional Certificate – Docker
              </div>
            </div>
            <div className="bg-[#191919] rounded-full px-3 py-1 shrink-0">
              <div className="text-white px-4 py-2 font-manrope text-xs">
                Career Essentials in GitHub – GitHub
              </div>
            </div>
            <div className="bg-[#191919] rounded-full px-3 py-1 shrink-0">
              <div className="text-white px-4 py-2 font-manrope text-xs">
                CyberOps Associate – Cisco Networking Academy
              </div>
            </div>
          </div>

          <div className="font-newsreader text-xl font-semibold mt-8">
            Publications
          </div>
          <div className="mt-4 border-2 border-gray-300 rounded-2xl p-6">
            <div className="font-manrope font-semibold text-md">
              IMPLEMENTASI SISTEM VERIFIKASI E-KTP BERBASIS OCR DAN CNN UNTUK
              ADMINISTRASI AKADEMIK
            </div>
            <div className="font-manrope text-sm text-gray-600 mt-2">
              Sofjan, M. Z. Z., & Soetanto, H. (2025)
            </div>
            <div className="font-manrope text-sm text-gray-500 mt-1">
              Prosiding Seminar Nasional Mahasiswa Fakultas Teknologi Informasi
              (SENAFTI), 4(2), 269–278
            </div>
            <a
              href="https://senafti.budiluhur.ac.id/senafti/article/view/1624"
              target="_blank"
              className="inline-flex items-center gap-2 mt-3 text-[#191919] hover:underline font-manrope text-sm"
            >
              <Link className="w-4 h-4" />
              View Publication
            </a>
          </div>
        </section>

        <section
          id="skills"
          className="flex flex-col lg:px-32 lg:py-8 px-12 py-8"
        >
          <div className="font-newsreader text-3xl font-bold">My Skills</div>

          <div className="h-1 rounded-full bg-gray-200 my-4"></div>

          <div className="flex flex-wrap gap-2 pt-8">
            <div className="bg-[#191919] rounded-full px-3 py-1 shrink-0">
              <div className="text-white px-4 py-2 font-manrope text-xs">
                Full-Stack Web Development
              </div>
            </div>
            <div className="bg-[#191919] rounded-full px-3 py-1 shrink-0">
              <div className="text-white px-4 py-2 font-manrope text-xs">
                Mobile Development
              </div>
            </div>
            <div className="bg-[#191919] rounded-full px-3 py-1 shrink-0">
              <div className="text-white px-4 py-2 font-manrope text-xs">
                Project Management
              </div>
            </div>
            <div className="bg-[#191919] rounded-full px-3 py-1 shrink-0">
              <div className="text-white px-4 py-2 font-manrope text-xs">
                UI/UX Design
              </div>
            </div>
          </div>

          <div className="flex flex-wrap gap-8 pt-8">
            <div className="bg-gray-200 rounded-full border-2 border-[#191919] px-3 py-1 shrink-0">
              <div className="text-[#191919] px-4 py-2 text-xs font-manrope font-semibold">
                Critical Thinking
              </div>
            </div>
            <div className="bg-gray-200 rounded-full border-2 border-[#191919] px-3 py-1 shrink-0">
              <div className="text-[#191919] px-4 py-2 font-manrope text-xs font-semibold">
                Effective Communication
              </div>
            </div>
            <div className="bg-gray-200 rounded-full border-2 border-[#191919] px-3 py-1 shrink-0">
              <div className="text-[#191919] px-4 py-2 font-manrope text-xs font-semibold">
                Leadership
              </div>
            </div>
          </div>
        </section>

        <section
          id="projects"
          className="flex flex-col lg:px-32 lg:py-8 px-12 py-8"
        >
          <div className="font-newsreader text-3xl font-bold">Projects</div>
          <div className="font-newsreader text-lg font-semibold mt-4 text-gray-500">
            Check out my latest work, hope you like it.
          </div>

          <div className="h-1 rounded-full bg-gray-200 my-4"></div>

          <div className="grid lg:grid-cols-2 grid-cols-1 lg:gap-x-32 lg:gap-y-18 gap-y-8 justify-center lg:px-32 px-4 mt-8">
            <div className="border-2 border-gray-300 flex flex-col rounded-2xl p-8 transition delay-50 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-[#191919] hover:text-white hover:border-white">
              <img
                src="assets/student-icon.png"
                alt="Logo Student Budi Luhur"
                width="80"
              />
              <div className="my-4 font-manrope font-semibold">
                Student Budi Luhur
              </div>
              <div className="font-manrope text-gray-500">
                Mobile Application that provides student of Budi Luhur
                University with easy access to essential academic information.
              </div>
              <a
                href="https://apps.apple.com/fi/app/student-budi-luhur/id6478258562"
                target="_blank"
              >
                <div className="flex flex-row gap-2 mt-4">
                  <Link className="w-6 h-6 shrink-0" />
                  <div className="font-manrope font-semibold">App Store</div>
                </div>
              </a>
            </div>
            <div className="border-2 border-gray-300 flex flex-col rounded-2xl p-8 transition delay-50 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-[#191919] hover:text-white hover:border-white">
              <img
                src="./assets/employee-icon.png"
                alt="Logo Employee Budi Luhur"
                width="80"
              />
              <div className="my-4 font-manrope font-semibold transition delay-50 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-[#191919] hover:text-white hover:border-white">
                Employee Budi Luhur
              </div>
              <div className="font-manrope text-gray-500">
                Mobile app for Budi Luhur University employees and lecturers to
                access employment data and manage student academic information.
              </div>
              <a
                href="https://apps.apple.com/app/employee-budi-luhur/id6499570674"
                target="_blank"
              >
                <div className="flex flex-row gap-2 mt-4">
                  <Link className="w-6 h-6 shrink-0" />
                  <div className="font-manrope font-semibold">App Store</div>
                </div>
              </a>
            </div>
            <div className="border-2 border-gray-300 flex flex-col rounded-2xl p-8 transition delay-50 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-[#191919] hover:text-white hover:border-white">
              <FingerprintPattern className="w-8 h-8 shrink-0" />
              <div className="my-4 font-manrope font-semibold">
                E-KTP Verification System
              </div>
              <div className="font-manrope text-gray-500">
                Mobile Application to automate the verification and validation
                of Indonesian E-KTP (identity cards).
              </div>

              <a href="https://github.com/Zalayetha/verif-ktp" target="_blank">
                <div className="flex flex-row gap-2 mt-4">
                  <Link className="w-6 h-6 shrink-0" />
                  <div className="font-manrope font-semibold">GitHub</div>
                </div>
              </a>
            </div>
            <div className="border-2 border-gray-300 flex flex-col rounded-2xl p-8 transition delay-50 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-[#191919] hover:text-white hover:border-white">
              <ChartScatter className="w-8 h-8 shrink-0" />
              <div className="my-4 font-manrope font-semibold">Santana</div>
              <div className="font-manrope text-gray-500">
                Mobile Application to classify disaster-related text and
                identify key attributes of natural disasters using advanced
                machine learning techniques.
              </div>

              <a href="https://github.com/Zalayetha/SANTANA" target="_blank">
                <div className="flex flex-row gap-2 mt-4">
                  <Link className="w-6 h-6 shrink-0" />
                  <div className="font-manrope font-semibold">GitHub</div>
                </div>
              </a>
            </div>
          </div>
        </section>

        <div className="h-1 rounded-full bg-gray-200 my-4 mx-32"></div>

        <section id="contact" className="flex flex-col items-center">
          <div className="font-newsreader font-semibold text-3xl my-4">
            Let's Work Together
          </div>
          <div className="font-manrope font-medium text-lg text-gray-500 text-center px-4">
            Have a project in mind? Feel free to reach out and let's discuss how
            we can collaborate.
          </div>
          <a
            href="mailto:zaghy@zalsoft.com"
            className="rounded-full px-8 py-4 bg-[#191919] border border-gray-300 text-white my-8 transition delay-50 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-white hover:text-[#191919] hover:border-[#191919]"
          >
            Get in touch
          </a>
        </section>

        <div className="h-1 rounded-full bg-gray-200 my-4 mx-32"></div>
      </main>

      <footer className="flex flex-row lg:px-32 lg:py-8 px-4 py-8 justify-center">
        <div className="font-newsreader text-lg text-gray-500">
          © 2026 Zaghy Zalayetha. All rights reserved.
        </div>
      </footer>
    </div>
  );
}

export default App;
