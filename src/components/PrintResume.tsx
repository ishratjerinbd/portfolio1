import { Mail, Phone, Linkedin, MapPin, Globe } from "lucide-react";

export default function PrintResume() {
  return (
    <div className="hidden print:block print:bg-white print:text-black min-h-screen text-[12px] leading-relaxed font-sans px-8 py-10" id="print-resume-canvas">
      {/* Printable Header Section */}
      <div className="border-b-2 border-slate-950 pb-5 mb-6 flex justify-between items-end">
        <div>
          <h1 className="text-3xl font-black tracking-tight uppercase text-slate-950 mb-1">
            Ishrat Jerin
          </h1>
          <p className="font-mono text-sm uppercase text-zinc-600 font-bold tracking-widest">
            Research & Statistical Scientist
          </p>
        </div>
        <div className="text-right space-y-1 text-zinc-700 font-mono text-[10px] uppercase">
          <div className="flex items-center justify-end gap-1.5">
            <Phone className="w-3.5 h-3.5 text-zinc-600" />
            <span>+8801575341064</span>
          </div>
          <div className="flex items-center justify-end gap-1.5 flex-wrap">
            <Mail className="w-3.5 h-3.5 text-zinc-600" />
            <span className="lowercase">ishrat.jerin.bd@gmail.com</span>
          </div>
          <div className="flex items-center justify-end gap-1.5">
            <Linkedin className="w-3.5 h-3.5 text-zinc-600" />
            <span className="text-[9px] lowercase">linkedin.com/in/ishrat-jerin-9518a317b</span>
          </div>
          <div className="flex items-center justify-end gap-1.5">
            <MapPin className="w-3.5 h-3.5 text-zinc-600" />
            <span>Mirpur, Dhaka-1216, Bangladesh</span>
          </div>
        </div>
      </div>

      {/* Metadata Brief Grid */}
      <div className="grid grid-cols-3 gap-4 mb-6 py-2 px-3 bg-zinc-100 border border-zinc-200">
        <div>
          <span className="font-mono text-[9px] font-bold text-zinc-500 uppercase block">Nationality</span>
          <span className="font-sans font-extrabold text-[11px] uppercase">Bangladeshi</span>
        </div>
        <div>
          <span className="font-mono text-[9px] font-bold text-zinc-500 uppercase block">Date Of Birth</span>
          <span className="font-sans font-extrabold text-[11px] uppercase">31st March, 1995</span>
        </div>
        <div>
          <span className="font-mono text-[9px] font-bold text-zinc-500 uppercase block">Primary Expertise</span>
          <span className="font-sans font-extrabold text-[11px] uppercase">Statistical Surveys & Modeling</span>
        </div>
      </div>

      {/* Professional Summary */}
      <div className="mb-6 break-inside-avoid">
        <h2 className="text-sm font-black uppercase tracking-wider text-slate-950 border-b border-zinc-300 pb-1 mb-2.5">
          Professional Summary
        </h2>
        <ul className="list-disc pl-4 space-y-2 text-zinc-800">
          <li>
            More than <strong>06 years of experience</strong> in market and social research, with 02 years in the development sector focused on Education, Child Protection, Public Health, Food and Nutrition, Agriculture, Gender Equity, Gender-based Violence, Social Inclusion, WASH (Water, Sanitation, and Hygiene), Climate Change, and Environmental Risk Mitigation.
          </li>
          <li>
            Collaborated extensively with international organizations, funding agencies, and prestigious academies including <strong>Michigan State University, Columbia University, DPHE, World Bank, Gallup, D3, UNICEF, USAID, BBC, and ASK Africa</strong>. Adhered strictly to rigorous reporting standards, scripting robust survey pipelines in <strong>SurveyCTO, SurveyToGo, RCT, and Kobo Toolbox</strong>.
          </li>
          <li>
            Extensive modeling capabilities analyzing datasets using <strong>R Language, Python, SPSS, and STATA</strong>; advanced knowledge in structuring performance dashboards using <strong>Power BI and Excel</strong>.
          </li>
        </ul>
      </div>

      {/* Research Lab Engagement */}
      <div className="mb-6 break-inside-avoid">
        <h2 className="text-sm font-black uppercase tracking-wider text-slate-950 border-b border-zinc-300 pb-1 mb-2.5">
          Research Experience
        </h2>
        <div className="space-y-4">
          <div className="break-inside-avoid">
            <div className="flex justify-between items-baseline mb-1">
              <h3 className="font-black text-xs uppercase text-slate-950">
                Theoretical and Applied Statistical Innovation Lab (TASi Lab)
              </h3>
              <span className="font-mono text-[10px] text-zinc-600 font-bold uppercase">July 2025 – Present</span>
            </div>
            <div className="italic text-[11px] text-emerald-700 font-bold uppercase mb-2">Researcher</div>
            <ul className="list-disc pl-4 space-y-1 text-zinc-850">
              <li>Designing multi-variable experiments and developing research plans based on targeted analytical requirements.</li>
              <li>Executing robust data processing and hypothesis-testing pipelines in statistical software R and Python.</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Work Experiences */}
      <div className="mb-6">
        <h2 className="text-sm font-black uppercase tracking-wider text-slate-950 border-b border-zinc-300 pb-1 mb-2.5">
          Work Experiences
        </h2>
        <div className="space-y-4">
          <div className="break-inside-avoid">
            <div className="flex justify-between items-baseline mb-1">
              <h3 className="font-black text-xs uppercase text-slate-950">
                Centre for Development Innovation and Practices (CDIP)
              </h3>
              <span className="font-mono text-[10px] text-zinc-600 font-bold uppercase">Oct 2025 – Mar 2026</span>
            </div>
            <div className="italic text-[11px] text-emerald-700 font-bold uppercase mb-2">MIS (Management Information System) Officer</div>
            <ul className="list-disc pl-4 space-y-1 text-zinc-850">
              <li>Developed and maintaned scheduled credit reporting tools; ensured clean, accurate data quality streams.</li>
              <li>Wrote Python automation scripts and complex SQL queries to clean and analyze financial ledger models.</li>
              <li>Built real-time interactive business reporting displays inside Power BI and Microsoft Excel Solver.</li>
              <li>Prepared loan audits under the direct compliance of regulation groups including CIB and MRA.</li>
            </ul>
          </div>

          <div className="break-inside-avoid">
            <div className="flex justify-between items-baseline mb-1">
              <h3 className="font-black text-xs uppercase text-slate-950">
                NGO Forum for Public Health
              </h3>
              <span className="font-mono text-[10px] text-zinc-600 font-bold uppercase">Oct 2023 – July 2025</span>
            </div>
            <div className="italic text-[11px] text-emerald-700 font-bold uppercase mb-2">Research Officer</div>
            <ul className="list-disc pl-4 space-y-1 text-zinc-850">
              <li>Coordinated baseline, midterm, and periodical Impact Evaluation surveys on water quality, safety, and hygiene (WASH).</li>
              <li>Processed and analyzed survey results utilizing SPSS, STATA, and R to identify socio-environmental risk patterns.</li>
              <li>Programmed automated, dynamic skip-logic questionnaire sheets on SurveyCTO and Kobo Toolbox servers.</li>
              <li>Conducted focus groups, structured Key Informant Interviews (KII), and processed project budgets.</li>
            </ul>
          </div>

          <div className="break-inside-avoid">
            <div className="flex justify-between items-baseline mb-1">
              <h3 className="font-black text-xs uppercase text-slate-950">
                Nexel Research Ltd.
              </h3>
              <span className="font-mono text-[10px] text-zinc-600 font-bold uppercase">Jan 2023 – Aug 2023</span>
            </div>
            <div className="italic text-[11px] text-emerald-700 font-bold uppercase mb-2">Research Analyst</div>
            <ul className="list-disc pl-4 space-y-1 text-zinc-850">
              <li>Supported proposal development and drafted comprehensive research summary files for clients.</li>
              <li>Programmed Kobo Toolbox survey logic files and transcripted FGDs and case history records.</li>
            </ul>
          </div>

          <div className="break-inside-avoid">
            <div className="flex justify-between items-baseline mb-1">
              <h3 className="font-black text-xs uppercase text-slate-950">
                Org-Quest Research Limited
              </h3>
              <span className="font-mono text-[10px] text-zinc-600 font-bold uppercase">Mar 2020 – Dec 2022</span>
            </div>
            <div className="italic text-[11px] text-emerald-700 font-bold uppercase mb-2">Programmer</div>
            <ul className="list-disc pl-4 space-y-1 text-zinc-850">
              <li>Cleaned, coded, and categorized qualitative data using custom spreadsheets and SPSS data flows.</li>
              <li>Monitored survey server telemetry via SurveyCTO, Survey Solution, and SurveyToGo.</li>
            </ul>
          </div>

          <div className="break-inside-avoid">
            <div className="flex justify-between items-baseline mb-1">
              <h3 className="font-black text-xs uppercase text-slate-950">
                Org-Quest Research Limited
              </h3>
              <span className="font-mono text-[10px] text-zinc-600 font-bold uppercase">July 2019 – Nov 2019</span>
            </div>
            <div className="italic text-[11px] text-emerald-700 font-bold uppercase mb-2">Data Quality Auditor</div>
            <ul className="list-disc pl-4 space-y-1 text-zinc-850">
              <li>Designed automated auditing rules to prevent false data rows and ensure flawless data integrity on devices.</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Internship & Academic Projects */}
      <div className="grid grid-cols-2 gap-6 mb-6 break-inside-avoid">
        <div>
          <h2 className="text-sm font-black uppercase tracking-wider text-slate-950 border-b border-zinc-300 pb-1 mb-2.5">
            Internship
          </h2>
          <div className="mb-2">
            <span className="font-bold block text-slate-950 uppercase text-[11px]">Crown Cement Company Limited</span>
            <span className="font-mono text-[10px] text-zinc-500 font-bold block uppercase">March – April 2018</span>
            <span className="text-zinc-700 mt-1 block">Completed professional research on <i>"Business Research on Brand Equity"</i>.</span>
          </div>
        </div>
        <div>
          <h2 className="text-sm font-black uppercase tracking-wider text-slate-950 border-b border-zinc-300 pb-1 mb-2.5">
            Academic Projects
          </h2>
          <ul className="list-disc pl-4 space-y-1.5 text-zinc-850">
            <li>A Study on The Behaviour of Autistic Babies, to find The Reason of Autism and Way to Its Remedy.</li>
            <li>Factors Affecting Mobile Banking in Bangladesh.</li>
          </ul>
        </div>
      </div>

      {/* Academic Qualifications */}
      <div className="mb-6 break-inside-avoid">
        <h2 className="text-sm font-black uppercase tracking-wider text-slate-950 border-b border-zinc-300 pb-1 mb-2.5">
          Academic Qualifications
        </h2>
        <table className="w-full border-collapse text-[11px] text-left">
          <thead>
            <tr className="border-b border-zinc-300 font-mono text-[9px] uppercase font-bold text-zinc-500">
              <th className="py-1.5 pr-2">Degree</th>
              <th className="py-1.5">Group / Major</th>
              <th className="py-1.5 align-right text-right">GPA/CGPA</th>
              <th className="py-1.5">Completing Year</th>
              <th className="py-1.5 pl-2">Institution / Board</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-zinc-200">
            <tr>
              <td className="py-2 pr-2 font-bold text-slate-950 uppercase">M.Sc.</td>
              <td className="py-2">Statistics</td>
              <td className="py-2 font-mono text-right pr-4 font-bold">3.48 / 4.00</td>
              <td className="py-2 font-mono">2018</td>
              <td className="py-2 pl-2">Jahangirnagar University</td>
            </tr>
            <tr>
              <td className="py-2 pr-2 font-bold text-slate-950 uppercase">B.Sc.</td>
              <td className="py-2">Statistics</td>
              <td className="py-2 font-mono text-right pr-4 font-bold">3.31 / 4.00</td>
              <td className="py-2 font-mono">2017</td>
              <td className="py-2 pl-2">Jahangirnagar University</td>
            </tr>
            <tr>
              <td className="py-2 pr-2 font-bold text-slate-950 uppercase">HSC</td>
              <td className="py-2">Science</td>
              <td className="py-2 font-mono text-right pr-4 font-bold">5.00 / 5.00</td>
              <td className="py-2 font-mono">2012</td>
              <td className="py-2 pl-2">B A F Shaheen College, Tejgaon (Dhaka Board)</td>
            </tr>
            <tr>
              <td className="py-2 pr-2 font-bold text-slate-950 uppercase">SSC</td>
              <td className="py-2">Science</td>
              <td className="py-2 font-mono text-right pr-4 font-bold">5.00 / 5.00</td>
              <td className="py-2 font-mono">2010</td>
              <td className="py-2 pl-2">Sher-e-Bangla Nagar Govt. Girls’ High School (Dhaka Board)</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Technical Skillsets & Languages */}
      <div className="grid grid-cols-2 gap-6 mb-6 break-inside-avoid">
        <div>
          <h2 className="text-sm font-black uppercase tracking-wider text-slate-950 border-b border-zinc-300 pb-1 mb-2.5">
            Technical Skillsets
          </h2>
          <div className="space-y-2 text-zinc-800">
            <div>
              <strong className="font-mono text-[9px] text-zinc-500 uppercase block font-bold">Analytical Softwares:</strong>
              <span>SPSS, STATA, R, Python, MySQL, ArcGIS</span>
            </div>
            <div>
              <strong className="font-mono text-[9px] text-zinc-500 uppercase block font-bold">Mobile Surveys:</strong>
              <span>Kobo Toolbox, SurveyCTO, SurveyToGo, Survey Solution, Go.data</span>
            </div>
            <div>
              <strong className="font-mono text-[9px] text-zinc-500 uppercase block font-bold">Utility suites:</strong>
              <span>MS Excel, Word, PowerPoint, Outlook</span>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-sm font-black uppercase tracking-wider text-slate-950 border-b border-zinc-300 pb-1 mb-2.5">
            Language Proficiency
          </h2>
          <div className="space-y-2.5 text-zinc-800">
            <div>
              <span className="font-bold text-slate-950 uppercase block text-[11px]">Bangla</span>
              <span className="text-zinc-600 font-mono text-[10px] uppercase">Native Proficiency</span>
            </div>
            <div>
              <span className="font-bold text-slate-950 uppercase block text-[11px]">English</span>
              <span className="text-zinc-600 font-mono text-[10px] uppercase">Highly Proficient (Speaking, Listening, Reading, Writing)</span>
            </div>
          </div>
        </div>
      </div>

      {/* References */}
      <div className="mb-6 break-inside-avoid">
        <h2 className="text-sm font-black uppercase tracking-wider text-slate-950 border-b border-zinc-300 pb-1 mb-2.5">
          References
        </h2>
        <div className="grid grid-cols-2 gap-6">
          <div className="p-3 border border-zinc-250 bg-zinc-50 text-[11px]">
            <span className="font-black block uppercase text-slate-950">Md. Ahasan Habib, PhD</span>
            <span className="text-zinc-600 font-mono text-[9px] uppercase block mb-1">Director, Research, Monitoring & Evaluation</span>
            <span className="text-zinc-700 block uppercase font-bold text-[9px]">NGO Forum for Public Health</span>
            <span className="block mt-1 font-mono text-[10px]">Mobile: +8801917232200</span>
            <span className="block font-mono text-[10px] lowercase">Email: ahasan@ngof.org</span>
          </div>

          <div className="p-3 border border-zinc-250 bg-zinc-50 text-[11px]">
            <span className="font-black block uppercase text-slate-950">Md. Rashid Omor</span>
            <span className="text-zinc-600 font-mono text-[9px] uppercase block mb-1">Manager, Analysis and Research Department</span>
            <span className="text-zinc-700 block uppercase font-bold text-[9px]">Org-Quest Research Limited</span>
            <span className="block mt-1 font-mono text-[10px]">Mobile: +8801735783112</span>
            <span className="block font-mono text-[10px] lowercase">Email: r.omor@orgquest.com</span>
          </div>
        </div>
      </div>

      {/* Authenticity Pledge */}
      <div className="border-t border-zinc-300 pt-3 text-center break-inside-avoid">
        <p className="italic text-[10px] text-zinc-500 uppercase">
          "I do hereby declare that all information provided in this document is true to the best of my knowledge."
        </p>
        <span className="font-bold block mt-2 text-[11px] text-slate-950 uppercase tracking-widest">
          Ishrat Jerin
        </span>
      </div>
    </div>
  );
}
