import { RevealOnScroll } from "../RevealOnScroll";

export const About = () => {

    const frontendSkills = ["React", "JavaScript", "TypeScript", "Figma", "Tailwind", "Bootstrap"];
    const backendSkills = ["PHP", "SQL","Python", "MySQL", "Laravel"];

    return (
        <section
        id="about"
        className="min-h-screen flex items-center justify-center relative py-20"
        >
            <RevealOnScroll>
            <div className="max-w-3xl mx-auto px-4">
                 <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">About me</h2>

                <div className="rounded-xl p-8 border-white/10 border hover:translate-y-1 transition-all">
                    <p className="text-gray-300 mb-6">
                        passionate developer with expertise in building scalable web application and creating innovative solutions.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="rounded p-6">
                            <h3 className="text-xl font-bold mb-4">Front-end</h3>
                            <div className="flex flex-wrap gap-2">
                                {frontendSkills.map((tech, key) =>
                                    <span 
                                    key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bgoblue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition">
                                    {tech}
                                    </span>
                                )}
                            </div>
                        </div>

                        <div className="rounded p-6">
                            <h3 className="text-xl font-bold mb-4">Back-end</h3>
                            <div className="flex flex-wrap gap-2">
                                {backendSkills.map((tech, key) =>
                                    <span 
                                    key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bgoblue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition">
                                    {tech}
                                    </span>
                                )}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                    <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
                        <h3 className="text-xl font-bold mb-4">🎓 Education</h3>
                        <ul className="list-disc">
                            <li>
                                <strong>BSc in Computer Science </strong> - Rivers State University (2015 - 2019)
                            </li>
                            <li>
                                <strong>SSCE </strong> - Immaculate Group of Schools  (2000 - 2005)
                            </li>
                            <li>
                                <strong>FSLC </strong> - St. Stephen Primary School  (1995 - 1999)
                            </li>
                        </ul>
                    </div>
                    <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
                        <h3 className="text-xl font-bold mb-4">💼 Work Experience</h3>
                        <div className="space-y-4 text-gray-300">
                            <div>
                                <h4>UI/UX Designer at Copaly (2025)</h4>
                                <h4>Frontend web Dev. at Koxbite (2024)</h4>
                                <h4>ICT Director. at Liverygems (2024)</h4> 
                                <h4>Tech Lead at Rexsons Ltd (2023)</h4>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            </RevealOnScroll>
        </section>
    );
};