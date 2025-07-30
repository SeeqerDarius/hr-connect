// speakers data

export interface Speaker {
  id: number;
  name: string;
  title: string;
  bio: string;
  imageUrl: string;
  category?: string;
  company?: string;
  linkedin?: string;
  twitter?: string;
  website?: string;
  facebook?: string;
  instagram?: string;
  session?: string;
  keyPoints?: string[];
}

export const speakers: Speaker[] = [
  {
    id: 1,
    name: 'Patricia Obo-Nai',
    title: 'CEO of Telecel Ghana',
    linkedin: 'https://gh.linkedin.com/in/ing-patricia-obo-nai-7a4a9214',
    twitter: 'https://twitter.com/PatriciaOboNai', 
    website: '', 
    bio: `Ing. Patricia Obo-Nai is an electrical engineer and the first Ghanaian CEO of Vodafone Ghana, 
        now Telecel Ghana.  
        Ing. Obo-Nai holds a BSc. in Electrical and Electronic Engineering from Kwame Nkrumah 
        University of Science and Technology (KNUST), an Executive MBA in Project Management from 
        University of Ghana Business School and has completed executive education programmes at 
        the Kellogg School of Management USA, London Business School, and INSEAD in France.  
        She has over two decades of experience in IT and Telecommunications, working as Technology 
        Director in both Millicom Ghana Limited (Tigo) and Telecel Ghana. She also led the Fixed Business 
        and Customer Operations of Telecel Ghana prior to becoming CEO.  
        She's recognized for her leadership and has numerous awards to her credit. She is passionate 
        about the future of the youth and women in the digital age and has been on several local and 
        international platforms including the UN General Assembly panel sessions advocating for youth 
        and women.  
        A passionate advocate for STEM, she serves on several boards, including the KNUST Engineering 
        Education Project, ABSA Bank Ghana and the Global Young Academy Advisory Board, 
        Germany.  
        She is married with 3 children.`,

    imageUrl: '/images/speakers/PATRICIA-OBO-NAI.jpg',
    category: 'Leadership'
  },
  {
    id: 2,
    name: 'Oscar Bimpong',
    title: 'Founder, Train2inspire Consultancy',
    linkedin: '',
    twitter: '',
    bio: `Oscar Bimpong, the Founder and CEO of Train2inspire Consultancy, a distinguished 
        business training and development firm with operations in both the UK and Ghana. Oscar is an 
        internationally recognised Mindset Transformation Consultant, Corporate Trainer, and 
        Keynote Speaker, with over 17 years of experience in coaching, training, and speaking 
        engagements across the globe. 
        He is the author of the internationally acclaimed book, “Mindset Revolution: Re-engineering 
        Your Mind from Prison to Purpose”. The book underscores a powerful message: the most 
        dangerous prison is not one with physical walls, but the prison of the mind. As Oscar powerfully 
        articulates, an imprisoned mind results in an imprisoned life. In addition to this seminal work, he 
        has authored three other books, all centred on empowering individuals and organisations to 
        realise their full potential through mindset transformation. 
        The central objective of his writings and training programs is to reshape negative thought 
        patterns into goal-oriented mindsets, enabling individuals to align their personal aspirations 
        with the vision, mission, and core values of their organisations. 
        Oscar is also BBC-trained in radio operations and media production, having contributed 
        extensively to community radio and educational initiatives in the UK. His commitment to 
        corporate mindset transformation and youth empowerment has earned him numerous 
        awards and recognitions in the UK and beyond. 
        Currently, he serves as an Associate Lecturer at Arden University, Nelson College, and the 
        Global Banking School in London, where he imparts his expertise to the next generation of 
        business professionals. His work also extends deeply into Africa, where he continues to lead 
        initiatives aimed at promoting mindset transformation across the continent.`,
    imageUrl: '/images/speakers/Oscar-Bimpong.jpg',
    category: 'Mindset'
  },
  {
    id: 3,
    name: 'Kojo Amissah',
    title: 'Strategy & Performance Consultant - CITAM',
    bio: `Kojo Amissah is a Strategy and Performance Consultant at CITAM, where he leads high-impact training, consulting, and staffing services. He also serves as the lead instructor for the SHRM-CP and SHRM-SCP certification prep courses.
        Kojo brings extensive consulting and training experience in areas such as strategic planning, leadership and change management, performance management, competency management, and compensation and benefits. He has worked across various sectors, including oil and gas, mining, manufacturing, finance, and the public sector, supporting a wide range of organizational development initiatives.
        He holds a BS in Computer Science, an MBA in Entrepreneurship, and professional certifications including SHRM-SCP and SPHR.
        Kojo simply loves all things HR.`,
    imageUrl: '/images/speakers/Mr-Kojo-Amissah.jpg',
    category: 'HR Strategy'
  },
  {
    id: 4,
    name: 'Patricia Abena Kissi',
    title: 'CEO SEDAT Consult',
    bio: `Patricia is the Founder, Lead Consultant, and CEO of SEDAT Consult Ltd., a leading HR consulting firm based in Ghana. With over 18 years of experience in human resource consulting and practice, Patricia is known for delivering practical, results-driven solutions that empower organisations to align people strategies with workplace needs and business outcomes.

Patricia is a highly skilled strategist with deep expertise in strategic human resource management, talent acquisition and development, performance management, employee engagement, organisational restructuring and development, and change management. Her strength lies in transforming complex workforce challenges into clear, actionable strategies that align people with purpose, processes with performance, and talent with long-term value.

Patricia is an IFC-certified trainer with a passion for capacity building. She has successfully worked with organisations across diverse sectors—including banking, insurance, healthcare, manufacturing, technology, and hospitality—helping them navigate workforce dynamics, improve organisational performance, and drive sustainable growth. Her approach is people-centred, business-focused, and grounded in a deep understanding of Ghana's evolving workplace landscape.

Patricia holds a Master’s degree in Human Resource Development and a Bachelor’s degree in Educational Foundations from the University of Cape Coast. She also has an Executive Master’s in Organisational Development from AMPRO. At her core, Patricia is passionate about helping people and businesses thrive―empowering teams, leaders, and institutions to unlock their full potential.`,
    imageUrl: '/images/speakers/Patricia-Ama-Kissi.jpg',
    category: 'Technology'
  },
  {
    id: 5,
    name: 'ERIC KOJO VAN-ESS KURANCHIE',
    title: 'AI Research Lead, TechFuture',
    bio: `Kojo is a Strategic Human Resources Management, Recruitment, Talent & Competency Management, Performance Management and Learning & Development expert. He has over 15 years’ experience and mastery in Change Management, Strategy & Policy Development, Coaching & Mentorship, Diversity Management and International Human Resources Management, Compensation & Benefits, Labour & Industrial Relations, and Succession Planning.
He currently is the Group Head, Human Resources and Administration at the Bank of Africa Ghana where he has been responsible for the entire strategic direction of the Bank’s human resources and physical assets and security. 
Kojo is responsible for the drafting and development of the Strategic HR and Administration plan, Capital and Operating Expenditure Budget for the Bank.
Prior to him joining Bank of Africa Ghana, he was the Head of Human Capital Resourcing and Talent Management at the defunct ProCredit SLC.
Kojo has assisted companies like NND Digital, JINS SLC, Bidvest Microfinance, South Akim Rural Bank, Silverbird Cinemas, Millenium Insurance and many more as an HR Consultant to develop Human Capital related policies, Customer Service Policies and Procedures and recruited members of staff for some of them.
He has also headed the Service Excellence and the Marketing and Corporate Communications departments of the Bank and at one time was the Bank’s Country Coordinator for Sustainable Management.
He is also Citi FM’s HR Resource person for their yearly Corporate Business Bootcamp and lectures on pertinent HR related issues.
Kojo compliments any team with excellent experience in Customer Service Management, Product Development, Research, Corporate Communication & Branding, Administrative Management, and many more which adds to his business acumen as an HR.
He is among the Bank’s C-Suite decision makers.
He holds an MSc certificate in Development Management from the Kwame Nkrumah University of Science and Technology (KNUST), and an Executive MBA certificate in Human Resources Management from the University of Ghana. He also has a BSc. Business Management and Administration (HRM OPTION) from the Central University and an HND Mechanical Engineering certificate from the Takoradi Polytechnic.
`,
    imageUrl: '/images/speakers/ERIC-KOJO-VAN-ESS-KURANCHIE-1.jpg',
    category: 'Technology'
  },
  {
    id: 6,
    name: 'Commander James Emmanuel Kwegyir Aggrey-Orleans',
    title: 'Trauma & Orthopaedic Surgeon',
    bio: `Commander James Emmanuel Kwegyir Aggrey-Orleans
          Ghanaian Navy
          Trauma & Orthopaedic Surgeon
          Commander James Emmanuel Kwegyir Aggrey-Orleans is a
          senior officer of the Ghana Navy and is organic to Ghana
          Armed Forces Medical Services where he serves as a
          Trauma and Orthopaedic surgeon, Medical Support planner
          and instructor.`,
    imageUrl: '/images/speakers/comander.jpg',
    category: 'Healthcare'
  },
  {
    id: 7,
    name: 'Rosie Ebe-Arthur',
    title: 'Chartered Fellow of the Chartered Institute of Personnel and Development (CIPD)',
    bio: ` Rosie 
Ebe-Arthur is a Chartered Fellow of the Chartered Institute of Personnel and Development (CIPD) UK and 
Board Director on a couple of Boards in Ghana.  She brings with her a plethora of experience from the United 
Kingdom and Africa.  Rosie joined Ernst & Young Ghana in 2003 on her return from the UK and moved to South 
Africa in 2006 to take up the role of Associate Director of People Services, Africa Projects with responsibility for 
HR across EY’s 19 countries in Sub Saharan Africa.  Ms. Ebe-Arthur then worked with Ecobank Transnational 
Incorporated as Group Human Resources Business Partner for Domestic Bank working across 33 countries.  Rosie 
moved to Standard Chartered Bank, Ghana and rose to Head of Human Resources, West Africa with 
responsibility for Nigeria, Ghana, Cote D’Ivoire, Cameroun, Gambia and Sierra Leone and was based out of 
Nigeria.  In 2018, Rosie joined First Bank Nigeria & Subsidiaries as Group Head, Human Capital Management & 
Development with accountability for setting the People Strategy across the Bank’s footprint in Africa, United 
Kingdom and the representative offices in France and China. Rosie left FirstBank at the end of 2021.
 • Having left corporate life at the end of 2021, Rosie continues to contribute to Africa, as Board Director on 
Scancom Plc. (MTN) FirstBank Ghana Ltd. and Petra Trust; and through speaking engagements across Africa.   
Rosie runs RE-HR, a forward-looking HR Consultancy with a focus on shifting culture to deliver organizational 
strategy and optimum productivity . Rosie is passionate about people development and to deepen this 
competency, she has embarked on the ICF coaching certification. This Results Coaching approach will ensure she 
continues to contribute to her community.   Rosie currently works with individuals as well as organizations e.g. 
Diageo.
 • Rosie walks at least 5km a day, spends time in the gym consistently, loves dancing, entertaining at home and 
gardening however, her best times are with her creative son and together, they challenge each other on their 
career journeys.`,
    imageUrl: '/images/speakers/Rosie Ebe-Arthur.jpg',
    category: 'Leadership'
  },
  {
    id: 8,
    name: 'Paa Kwesi-Barnes',
    title: 'Moderator',
    linkedin: 'https://web.facebook.com/paakwesi.barnes',
    bio: `Paa Kwesi Barnes stands as a seasoned Digital Technology Expert, boasting over 15 years of immersive experience across diverse roles encompassing information technology strategy and consulting, sales, and business management. His extensive journey has equipped him with formidable skills and insights, particularly in domains like core banking transformation, digital engagement, credit origination and appraisal, customer experience solutions, human capital solutions, quality assurance, and software testing. With a track record spanning the Telecom, Banking, and other financial sectors, Paa Kwesi has been deeply involved in mentorship, coaching, and training initiatives, not only within finance but also extending his reach into the HR sector.

Throughout his career, Paa Kwesi has consistently assumed leadership positions, showcasing his unwavering dedication and expertise in the field. His profound industry knowledge, coupled with an unyielding commitment to excellence and client satisfaction, has consistently positioned him as a trusted ally in businesses' journey towards growth and success.

He is currently the Director for Business Development and Managing Consultant at Senrab ConsulTech Limited in Ghana. Paa Kwesi spearheads strategic initiatives and consultancy efforts, driving the company towards new heights of innovation and impact. Beyond his professional endeavours, Paa Kwesi finds fulfilment in his role as a devoted husband and father to three wonderful children.
.`,
    imageUrl: '/images/speakers/Paa-Kwesi-Barnes-moderator.jpg',
    category: 'PR'
  },
  {
    id: 9,
    name: 'Yvonne Wiredu-Akpabli',
    title: 'HR Consultant/ Coporate Trainer-SHRM',
    linkedin: 'https://www.linkedin.com/in/mary-bennett-chartered-mcipd-73382656/',
    bio: `Yvonne is a highly trained HR professional with over 16years of experience in the practice of managing a broad spectrum of human resources programs, services, and functions; She possesses a strong command on performance management, employment laws, recruitment & selection, benefit plans, training and development; and compliance issues.
She has significant experience managing various HR assignments for public sector organisations, NGOs, Telecommunication, financial, national, shipping, and multinational companies. 
Yvonne holds an MBA in Human Resource Management from the Ghana Institute of Management and Public Administration (GIMPA). She also has a BA in English and French from the University of Cape Coast. In 2017, she was certified as a global HR professional after passing her SPHRi from HRCI. HR Focus also adjudged her as one of the top 40 HR Practitioners in Ghana in the same year. She also holds an LLB from GIMPA and an LLM in Labour Law from the University of Ghana Law School. She is a member of SHRM, a global HR forum, ACHR Ghana and a Fellow at CIHRP Ghana. She is a facilitator of HR courses at the HR Certification Centre and the Chartered Institute of Human Resource Managers (CIHRM) Ghana. She was adjudged the HR Personality of the year by the HRCC in 2023.
`,
    imageUrl: '/images/speakers/yvonne.jpg',
    category: 'PR'
  },
  {
    id: 10,
    name: 'Dr. Cheryl Arutt',
    title: 'Moderator',
    bio: `Dr. Cheryl Arutt is a licensed clinical & forensic psychologist, TEDx speaker, media consultant and Certified EMDRIA Therapist & Consultant based in Los Angeles. A specialist in creative resilience & post-traumatic growth, Dr. Cheryl offers EMDR Intensives & Adjunct EMDR via telehealth. She graduated summa cum laude from UCLA and holds a Doctor of Psychology (PsyD) degree from CSPP-LA, where she was awarded Outstanding Clinical Dissertation. A passionate advocate for survivors of trauma, Dr. Cheryl has served on several Boards dedicated to helping survivors, and consults with clinicians and organizations about effectively treating complex and developmental trauma. Dr. Cheryl is Access Hollywood’s go-to psychologist for trauma issues, a frequent psychological expert on networks including CNN, HLN and DiscoveryID, and speaks internationally about trauma, creativity and post-traumatic growth. For more information, please visit askdrcheryl.com and CreativeEMDR.com .`,
    imageUrl: '/images/speakers/Dr.-Cheryl-Arutt.jpg',
    category: 'PR'
  },
  {
    id: 11,
    name: 'Mary Bennett',
    title: 'Moderator',
    linkedin: 'https://www.linkedin.com/in/mary-bennett-chartered-mcipd-73382656/',
    bio: `Mary Bennett is a globally experienced professional specializing in Organizational Development, Learning & Development, and Human Resource Management. Her diverse certifications include being an IFC-LPI TPMA Certified Trainer, an ILM Certified Training & Development Professional, and a qualified Insights Discovery Practitioner. She is also an active member of the Chartered Institute of Personnel and Development (CIPD).
Mary’s cross-industry expertise spans Oil and Gas, Telecommunications, IT, Health, Education, and Government sectors, where she has consistently advised and influenced leadership from mid-level management to the boardroom. Her professional journey includes roles at notable organizations such as Tullow Oil, Ericsson AB, iBurst Africa, Finsbury Orthopedics, and Age Concern, among others.
With a passion for human-centered growth, Mary is committed to helping individuals and organizations unlock their full potential through transformational learning and strategic people development.
.`,
    imageUrl: '/images/speakers/Mary-Bennett.jpg',
    category: 'Moderator'
  },
  {
    id: 12,
    name: 'Isidore Kpotufe',
    title: 'Founder and CEO, RiviaCo (Rivia)',
    bio: ` Isidore is a technology entrepreneur with a track record in building ventures across
 finance, transportation, and healthcare in Africa.
 He is one of the few technology founders in Africa to have exited their startup in a
 million-dollar deal through the sale of his startup, stabus, to Canada-based company
 Treepz.
 As the Founder and CEO of RiviaCo (Rivia), Isidore leads a healthcare venture that
 operates a network of “smart clinics” offering differentiated primary care services in
 Ghana. Rivia uses technology to personalise patient treatment and broaden access to
 quality healthcare services. Rivia currently operates 6 clinics in Ghana serving th
 Before his role at Rivia, Isidore served as the Chief Marketing Officer of Treepz, a
 Canadian-based mobility startup specialising in developing technology solutions for
 various use cases, including rentals, ticketing, payment, and fleet management. This
 position followed the sale of Isidore's company, Stabus, to Treepz in a million-dollar
 deal. Isidore also founded Westacpe, which provides a platform for consumers to
 compare financial services like insurance. Westcape’s assets were sold to a local
 microfinance institution in Ghana.
 Isidore's diverse background also includes a stint as the Director of Communications at
 IMANI Africa, one of Ghana's esteemed think tanks. He is a founding member of the
 Alliance for the Future of Healthcare in Africa (AFHA), which advocates for quality
 healthcare in Africa through resource mobilisation, stakeholder engagements and
 clinical research.
 As afirmbeliever in the catalytic power of education, Isidore runs book donations and
 scholarship to primary-JHS pupils, yearly on his birthday, which falls on the 4th
 Driven by a firm belief in the power of technology, Isidore is dedicated to scaling the
 impact of innovative business models that address Africa's most pressing challenges,
 while simultaneously advancing the frontiers of innovation through rigorous scientific
 research`,
    imageUrl: '/images/speakers/isidore-kpotufe.jpg',
    category: 'Entrepreneurship'
  },
   {
    id: 13,
    name: 'Marc Voi Chiuli',
    title: 'Founder, People Edge Consulting',
    linkedin: 'https://www.linkedin.com/in/marc-voi-chiuli-msc-hrm-assoc-cipd-mihrm-37963110/',
    bio: `Marc founded People Edge Consulting, to provide HR services to the small/medium business 
community.  He has 25+ years of diverse human resources and management experience that 
spans start-ups and established organizations, providing leadership and guidance to managers 
and executives. He has led engagements in areas of HR Audits, HR Metrics, Competency 
Assessment, Organizational Culture Surveys, Job Evaluation, Performance Management 
Systems and HR Transformation for clients both in public and private sector. 
Prior to founding People Edge Consulting., Marc held human resources leadership positions at 
Mumias Sugar Company and  Kenya Tourism Board.  
Marc holds a Master of Science Degree in Human Resources from the University of Manchester 
(UK) and a Bachelor of Arts Degree from the University of Nairobi, and a Higher National 
Diploma in Human Resources Management from the College of Human Resources 
Management (K). He is a member of IHRM (K) and an Associate Member of CIPD (UK). He is also 
a Certified HR Practitioner. Marc loves travelling and has travelled to France, United Kingdom, 
Canada and Japan.`,
    imageUrl: '/images/speakers/marc-voi-chiuli.jpg',
    category: 'Panel Member'
  },
 
  {
    id: 14,
    name: 'Dr. George Ayee',
    title: 'Organisation Change Enabling Expert',
    linkedin: 'https://www.linkedin.com/in/george-ayee/',
    bio: `George Ayee is an organizational development/effectiveness, change enablement and business transformation consultant, transformational speaker, corporate trainer, facilitator, and certified coach. He worked with Price Waterhouse as Senior Consultant, Deloitte an Associate Consultant, Managing Consultant with Achievement Motivation Group in East Africa, International Director of Media Productions, Deputy Vice Chancellor of Kampala International University and Director of Kampala University in East Africa. 
George has facilitated various meetings and provided consulting services to corporate bodies and organizations including International Conference for International Union for Conservation of Nature (IUCN), World Bank, Ecotrust, African Wildlife Foundation, Financial Institutions, The Ministry of Water, Lands and Environment, Oxfam, Kisoro District Local Administration, Care International, ActionAid, on-site and off-site meetings for Senior Leadership teams, Boards, and many others. George spends his time facilitating change and transformation programs, coaching leaders to work through change and transformation successfully. George has facilitated meetings in Canada, Australia, USA, England, Uganda, Kenya, Tanzania, Rwanda, Malawi, Zimbabwe, and Ghana. 
George was the architect behind the setup of the Change Management and Business Transformation office at Husky Energy where he led the function and provided oversight for all change and business transformation initiatives. He also led the organizational change management function at the Calgary Board of Education specifically ensuring the successful rollout of the Enterprise Portal. 
George is a Certified Professional Coach (CPC) Leadership Circle Profile 360, Collective Leadership Assessment, Lumina Leader and Lumina Spark, Certified Change Management Professional (CCMP), Master Change Management Professional (MCMP) and Prosci ADKAR Change Management.
George provides leadership and oversight in Organizational Development in People Strategy and Partnerships at the City of Calgary, Alberta, Canada. He travels internationally to give talks on Transformation, Change, and Resilience. 
George holds a Doctor of Business Administration degree from Australia; Master of Business Administration (MBA) from London, England; Bachelor of Science in International Business from USA.  
`,
    imageUrl: '/images/speakers/dr-george-ayee.jpg',
    category: 'Speed Coach'
  },
  {
    id: 15,
    name: 'Laury-Georges-Lane',
    title: 'Legal and Human Resources Executive',
    linkedin: 'https://www.linkedin.com/in/laury-georges-lane-21998917/',
    bio: `Laury Georges-Lane, a former Human Resources executive and legal professional with 27 
years of experience, is now at the helm of two consulting firms: LGL Consulting & Executive 
Advisory Group, LLC, and its international subsidiary, LGL Consulting & Executive Advisory 
Group - International. Over the course of her career, she has delivered impactful results 
across multiple industries, including: 
• Energy 
• Government  
• Healthcare 
• International Business Trade & Development 
• Non-Profit 
Laury provides consultative and mediation services domestically and abroad, emphasizing 
workforce development, leadership training, and HR policy matters.  She has served as an 
expert HR panelist on topics including: 
• International Trade in the Global Marketplace 
• HR in the Artificial Intelligence era 
• Post Secondary Training and Workforce Development 
• Global HR: Executive People Services and its Impact 
Laury continues to make an indelible impact on people and systems through her civic 
contributions on both public and private sector boards, as well as her active involvement in 
community service organizations. In both 2020 and 2021, she was honored by her city’s 
Commission Board as a Women’s History Month Honoree. More recently, in 2025, the Southern 
Region of Delta Sigma Theta Sorority, Incorporated recognized her globally for her contributions 
to international awareness and involvement. 
She has been prominently featured in multiple magazine publications, showcasing her 
impact on business and philanthropy both domestically and internationally. 
Laury’s philanthropic efforts extend far beyond the United States, reaching into West 
Africa, where she has adopted the Village of Sipane in the Thies region near Dakar, 
Senegal. Her mission focuses on championing education reform, bridging the gender 
education gap, and addressing poverty and economic inequality to drive lasting, 
transformative change. Laury has recently been appointed to the advisory board of the 
Heritage and Cultural Society of Africa Foundation (HACSA-USA), where she supports 
initiatives that advance STEM education, particularly technology, for girls and women 
across Africa. HACSA was founded by Ambassador Johanna Svanikier, former Ghanaian 
Ambassador to France and Portugal, and Permanent Delegate to UNESCO and La 
Francophonie. 
She holds degrees from the University of Florida, Nova Southeastern Shepard Broad 
College of Law, Nova Southeastern H. Wayne Huizenga College of Business, 
and an executive certification through the Harvard Extension School of Business. 
Equally notable, she has earned her Florida Supreme Circuit Civil Mediator credentialing 
that continues to allow her to contend for the best and align herself with excellence.  As a 
Florida Supreme Court Mediator, Laury is retained to mitigate risk by helping foster an 
increasingly collaborative work culture through mutual resolution.`,
    imageUrl: '/images/speakers/laury-georges-lane.png',
    category: 'Keynote Speaker'
  },
  {
    id: 16,
    name: 'Anita Wiafe',
    title: 'CEO, OML Africa',
    linkedin: 'https://www.linkedin.com/in/anita-wiafe-94bb115/',
    instagram: 'https://www.instagram.com/anitawiafe_/',
    facebook: 'https://web.facebook.com/anita.wiafeasinor',

    bio: `Anita Wiafe is a seasoned expert in strategic human resources management and organizational development, with over three decades of consulting experience in human capital management, organizational design, and corporate transformation. Her work spans national and international projects, including collaborations with several of the Big 5 companies, where she has served as both a functional and technical expert.
Anita has led the development of national learning and HR frameworks for African countries, designed performance management systems, implemented talent management strategies, and built HR data and analytics platforms. Her leadership in delivering national leadership training programs has had a lasting impact across sectors.
Certified by the International Labour Organisation (ILO), Anita specializes in SCORE training, business continuity, and SME productivity measurement. Her corporate consulting portfolio includes work in salary structure development, skills assessments, progression frameworks, and workforce alignment with strategic goals.
Her expertise in change management covers HR audits, mergers and acquisitions due diligence, restructuring, and HR systems implementation. With deep knowledge of over 20 African Labour Laws, and additional expertise in UK and European employment legislation, Anita is a trusted authority on employment terms, risk management, and industrial relations, including union negotiations and collective bargaining agreements.
Anita is also highly proficient in HR policy development, aligning and standardizing policies across regions in Africa, Europe, Asia, the UK, and the USA. Her skills include psychometric testing, assessment center design, personality profiling, and skills inventory creation.
Currently, she serves as the Executive Secretary of the eCommerce Association of Ghana (eCAG), where she champions women in eCommerce. A former board chair and board member of multiple organizations, Anita is deeply committed to social issues affecting women, children, and youth. She is also certified by the ILO in gender equality and workplace diversity and serves as an arbitrator and mediator for the National Labour Commission of Ghana.
Anita Wiafe’s work continues to shape the future of HR and organizational leadership across continents, industries, and communities.`,
    imageUrl: '/images/speakers/anita-wiafe.jpg',
    category: 'Panel Member'
  },
  {
    id: 17,
    name: 'Deborah Asmah',
    title: 'Co-Founder, Npontu Technologies',
    linkedin: 'https://www.linkedin.com/in/deborah-asmah-cipm-8524585a/',
    bio: `Ms. Deborah Asmah is an expert in AI, digital governance, privacy, and compliance, 
whose contributions have significantly shaped Ghana's digital landscape. Her innovative 
approaches have enabled seamless access to digital tools, promoted financial inclusion, and 
driven digital transformation across multiple sectors. Deborah is the co-founder of Npontu 
Technologies Ltd, a technology company specializing in the use of Artificial Intelligence 
(AI) and software development to provide digital solutions and lead transformation 
initiatives. Under her leadership, Npontu Technologies has scaled from a startup to a thriving 
technology powerhouse serving over 20k clients across Ghana. In addition to its national 
footprint, she has driven market expansion into other geographic regions including Nigeria, 
Côte d'Ivoire and United Kingdom(UK). 
She holds a Master of Law from Queen Mary University of London. She is a licensed Certified 
Information Privacy Manager (CIPM) with the International Association of Privacy 
Professionals (IAPP) and a certified Data Protection Officer (DPO). She is an ardent advocate 
for Public Policy, with extensive research experience at the intersection of technology, AI, and 
compliance. Ms. Deborah Asmah’s work has directly led to MSME digitization 
transformation opportunities for over 23k+ businesses in Ghana, contributing to business 
growth, job creation and strong Partnerships with Organizations such as MTN Ghana, 
Association of Ghana Industries(AGI), Ghana Enterprise Agency (GEA), MasterCard 
foundation amongst others.  
Deborah Asmah believes that when AI and digital technologies are used responsibly, they can 
be powerful catalysts for social and economic progress. She is deeply committed to advancing 
women’s empowerment, fostering business growth and championing global ESG objectives. 
Deborah is a frequent speaker at leading conferences across Africa, where she shares her 
insights on the future of AI, privacy and compliance, and digital governance. She has recently 
spoken at: 
• Africa AI Stakeholder Meeting on Innovative Governance and Capacity Building, 2024, 
Kigali, Rwanda. 
• SheTrades Ghana Hub, Ghana Export Promotion Authority – 2024, Accra, Ghana. 
• Digital Governance for Social Inclusion and Sustainable Development, AfreGov, 2024, 
Kigali, Rwanda. 
• Navigating Digital Frontiers: Legal Considerations and Tech Innovations, ALT Network 
Summit, 2024, Kigali, Rwanda. 
• The Global Conference on Human Resources in Africa (GCHRA), 2024, Accra, Ghana.`,
    imageUrl: '/images/speakers/debora-asmah.jpg',
    category: 'Panel Member'
  },
  {
    id: 19,
    name: 'Prof. E. Afful-Dadzie',
    title: 'Associate Professor, University of Ghana Business School',
    linkedin: 'https://www.linkedin.com/in/eric-afful-dadzie-b8748338/',
    bio: `Prof. Eric Afful-Dadzie is a distinguished academic and consultant specializing in Decision Sciences, Business Intelligence, Analytics, and Information Systems. With a deep-seated passion for leveraging data-driven methodologies to solve complex organizational challenges, he has established himself as a leading authority in the application of artificial intelligence (AI), machine learning (ML), and data analytics to enhance decision-making processes across industries.
Prof. E. Afful-Dadzie was a Queen Elizabeth II fellow at McGill University, Canada and the 2016/2017 most promising researcher at University of Ghana Business School. With over 50 research articles in top tier journals such as Government Information Quarterly, International Journal of Information Management, Management Decision, Applied Energy, Applied artificial Intelligence, Quality & Quantity, Kybernetes, Multi-Criteria Decision Analysis among others, Prof. E. Afful-Dadzie continues to make significant contributions to the fields of Decision Sciences and Information Systems. He has supervised and mentored numerous postgraduate students in PhD and MPhil works. Some of his mentees have become lecturers in public universities in Ghana.
Beyond academia, Prof. Afful-Dadzie is a sought-after consultant, advising organizations on digital transformation, AI-driven decision support and business analytics strategies. He has trained or consulted for major brands including the Bank of Ghana (BoG), Tullow Oil, University of Ghana Medical Centre (UGMC), GLICOHealth, Marie Stopes International, ABSA Bank, the Jospong Group, CalBank, GRIDCO, BOST, Ghana Ports and Harbours Authority, Subah Info Solutions, HPW Fresh & Dry Ltd, Bunge Loders Croklaan Ltd, Accra Compost and Recycling Plant (ACARP), Kofi Annan International Peacekeeping Training Centre (KAIPTC), Precious Minerals Marketing Company (PMMC), GCNET among others. Prof. is the brain behind the sought after HR Analytics and Health Analytics Training programmes in Ghana. He was the leader behind the 2022 HR Outlook and Benchmarking Survey, a collaboration between KPMG, CIHRM and HR Network Africa.
Prof. Afful-Dadzie is a regular speaker at international conferences and industry summits, where he shares insights on the evolving landscape of AI in business strategy. His ability to translate complex analytical models into practical business solutions has made him a trusted advisor to executives and policymakers. With a career dedicated to advancing knowledge and practical applications in analytics and information systems, Prof. Eric Afful-Dadzie continues to shape the future of data-driven decision-making, empowering businesses and institutions to thrive in the digital age.
`,
    imageUrl: '/images/speakers/afful-dadzie.jpg',
    category: 'Panel Member'
  },
  {
    id: 20,
    name: 'Dr. Theo Tackie',
    linkedin: 'https://www.linkedin.com/in/theo-welbeck-tackie-dm-odc-409a84199/',
    title: 'Author/Transformational Speaker/Certified Life Empoerment Coach',
    bio:`Change Expert/Senior Scrum Master with over 10+ years of top-notch knowledge and experience in facilitation and coaching Agile Team, Skilled in stimulating teams to meet deadlines on projects. Ready for a new scrum-oriented role with a progressive organization that will challenge my knowledge.`,
    imageUrl: '/images/speakers/theo-tackie.jpg',
    category: 'Panel Member'
  },
  {
    id: 21,
    name: 'Margaret Jackson',
    title: 'Managing Partner, Rainbow Consult',
    linkedin: 'https://www.linkedin.com/in/margaret-jackson/',
    instagram: 'https://www.instagram.com/margaret_jacksongh/',
    facebook: 'https://web.facebook.com/margaret.jackson.7946',
    bio: `Margaret Jackson, FLPI is the Managing Partner of Rainbow 
Consult. She is a Fellow of the Learning and Performance 
Institute, UK.  A Member of  the Aspen Network of Development 
Entrepreneurs (ANDE), Society for Human Resource 
Management, USA and a member of Institute of Human 
Resource Management, Ghana. She is also a member of the core 
faculty of the West African Civil Society Institute. Margaret is an 
accomplished Management Consultant and Human Resource 
Practitioner. She has superior skills in the areas of Research and 
Compliance, Adult Learning, and Instructional Design. Margaret 
has proven herself in institutional development and has 
exceptional research, training, facilitation and public speaking 
skills. 
She is a Learning and Performance Institute (LPI) Expert 
Facilitator, Face-to Face and Online Facilitator, Certified Online 
Learning Designer, as well as a Certified Assessor in addition to being an International Finance Corporation 
(IFC) Certified Master Trainer, IFC Master Trainer in Designing and Developing for Learning and 
Instructional Designer. She has designed training manuals for organisations across Africa and the Middle 
East and has led teams to develop e-learning courses for organisations. She has led various research 
projects for organisations like SNV Netherlands Organisation, IFC, Dalex Finance and Leasing Company, and 
has trained over five hundred (500) trainers under the IFC program. She is also a provisional anti-corruption 
compliance trainer for Center for International Private Enterprise (CIPE).  She has facilitated retreats for 
numerous organisations including SNV, West Africa Civil Society Institute (WACSI), FORD Foundation, 
Amnesty International, GRIDCO, NSIA Insurance, DALEX Finance and Leasing Company among others. 
Margaret is a resourceful and open-minded leader with an optimistic outlook. She has led various 
successful SME capacity building projects in Ghana, Nigeria, Liberia, Sierra Leone, South Sudan, Guinea, 
Senegal and Mozambique, and has trained over 500 heads of SMEs over the years. Her work in post-Ebola 
Sierra Leone and Liberia has received critical commendation from the IFC. 
Margaret Jackson collaborated with Fidelity Bank to set up the SME Business Academy. This SME Academy 
thrived, and Margaret once again teamed up with Fidelity Bank and SNV to create the Possible to Profitable 
(P2P) Business Academy for SMEs in the Water and Sanitation Sector. She also teamed up with UNICEF to 
set up a Micro Small and Medium Enterprises (MSMEs) Academy for the Water and Sanitation Sector. 
Margaret is passionate about the development of women and has been instrumental in the development 
of Financial Literacy programmes impacting over 1,500 illiterate and semi-illiterate women in Ghana. She 
Margaret Jackson - Personal Profile 
also led the team that created, designed courses for and executed the Access Bank Mini -MBA Program. 
The Mini-MBA equipped 50 women entrepreneurs in Nigeria with business skills to scale up their 
businesses. She also led the team that designed a course o mentorship, and a handbook for mentors for 
the Millennium Development Agency’s (MiDA) Ghana Power Compact Internship and Mentoring 
Programme. This programme seeks to provide mentorship opportunities for young girls in STEM. A prolific 
public speaker, Margaret is a coach and mentor on the Mandela Washington Fellowship and Moremi 
Initiative programs.  She loves to coach and mentor young women.`,
    imageUrl: '/images/speakers/MJ-Headshot.png',
    category: 'Keynote Speaker'
  },
  {
    id: 23,
    name: 'Munnira Shiekh',
    title: 'CEO and Founder Zenfusion COnsultancy',
    instagram: 'https://www.linkedin.com/in/revenuepartner/',
    bio: `Munnira Sheikh, CEO of Zenfusion Consultancy, is a business & strategy analyst carrying an extensive experience across different industries. Working in FMCG, manufacturing plants, trade and service sector, across marketing research, product development and sales and distribution domains, give her an edge in understanding various business areas.`,
    imageUrl: '/images/speakers/munnira-shiek.jpg',
    category: 'Speed Coach'
  },
  {
    id: 24,
    name: 'Yvonne Ohui MacCarthy',
    title: 'Customer Service Consultant',
    facebook: 'https://web.facebook.com/yvonneomaccarthy',
    linkedin: 'https://www.linkedin.com/in/yvonne-ohui-maccarthy-13aa2057/',
    twitter: 'https://twitter.com/YvonneMcCarthy',
    bio: `Meet Yvonne Ohui MacCarthy, CSP, a visionary leader and the 
driving force behind the Institute of Customer Service Professionals 
(ICSP), where she serves as the Founder and Head Consultant. With 
an unwavering commitment to service excellence, Yvonne is also 
the esteemed Chair of both the West African Association of 
Customer Service Professionals (WAACSP) and the University of 
Ghana Medical Center (UGMC) Client Service Committee. She is 
also a board member of Electrochem Ghana. Her expertise is 
further recognized as an Advisory Board Member of the Customer 
Experience Evolution Africa (CEEA). 
A trailblazer in her field, Yvonne holds a prestigious Customer Service Professional (CSP) qualification from 
the London Institute of Banking and Finance (LIBF). Her journey from a seasoned banker, authorized by 
the FCA in the UK and working with leading banks like Natwest and Santander, to a luminary in customer 
service, is nothing short of inspiring. Yvonne’s academic accolades include banking qualifications from the 
Chartered Insurance Institute (CII) UK, the Professional Award in Training The Trainer from the London 
Institute of Public Speaking and an award for the Advanced Training The Trainer from the Institute of 
Leadership and Management (ILM) UK. She is also an alumna of the Harvard Business School Executive 
Education. 
With over 15 years experience as a customer service consultant, Yvonne’s passion for education extends to 
her role as a top-rated Udemy instructor, where she creates impactful online customer service courses for a 
global audience. Her expertise has empowered individuals and organisation's across Ghana, Sierra Leone, 
Liberia, Eswatini, UK, Côte D’Ivoire, USA, South Africa,  transforming customer service standards and 
practices.  As the Board Chair for WAACSP, Yvonne is at the forefront of developing a customer service 
blueprint for West Africa and, eventually, the entire African continent. Her vision for ICSP is to revolutionise 
the customer service culture among businesses and introduce aspiring professionals to the field, ensuring 
a robust customer service foundation across the region. 
Yvonne’s dedication to enhancing customer service extends beyond her professional roles. As an advocate 
for online training, she has launched www.icspcourses.com, a platform dedicated to virtual customer 
service education. Her influence as a public speaker is profound, addressing key topics like education, 
personal development, and customer service to empower the youth. 
Yvonne is currently the CX leader for 2024 awarded by the CX 
Transformation Summit. Recognised for her contributions, 
Yvonne was awarded by CXPGhana for her unflinching efforts in 
customer service in 2021. She was a 40under40 nominee under 
education for two consecutive years and was named the 
Customer Service Consultant of the Year for 2018 - 2019 by the 
Ghana Customer Service Awards. Her achievements also include 
induction into the Ada Hall of Fame and receiving the Special 
Gems Honors in 2020. Her work in customer service also gained 
her an award in Eswatini in 2020. She is the creator and 
organiser of the Ghana Customer Service Index (GCSI),  the only 
data collection, analysis and publication of customer service 
performance for 11 different sectors in ghana (www.ghanacsi.org). Because of the success of the GCSI, the 
Nigeria Customer Service Index has also been created and launched.  
She is trusted and has consulted and trained for companies such as Versus Bank (Cote D’Ivoire), Access 
Bank, Janel, Hollard, UGMC, CFAO, KPMG, Fidelity Bank, Orca Deco, British Council, NYEA, BROLL, 
Metropolitan Pensions Trust, Sandbox, Groupe Sebastien, Enterprise Life, Transitions Funeral Home, DVLA, 
HairSenta, Enterprise Group to mention a few.  
The  creation of the Ghana Customer Service Index (GCSI) underscore her commitment to elevating 
customer service standards across Africa. 
Yvonne MacCarthy is not just a consultant, she is a thought leader determined to position Africa at the 
pinnacle of global customer service excellence.  Yvonne MacCarthy is not just shaping customer service in 
Africa; she’s setting a global benchmark.`,
    imageUrl: '/images/speakers/yvonne-ohui-mccarthy.jpg',
    category: 'Masterclass Trainer'
  },
  {
    id: 25,
    name: 'Emmaline Datey',
    title: 'CEO, ICS Africa',
    linkedin: 'https://www.linkedin.com/in/emmaline-datey-69083547/',
    facebook: 'https://web.facebook.com/EmaDateyOfficial',
    instagram: 'https://www.instagram.com/emativator_gh/',
    twitter: 'https://x.com/emadatey',
    bio: `Emmaline Datey is a Public Speaker, Brands Influencer, HR Strategist, Leadership and Personal Development Coach, German-Africa Startup Consultant, as well as an Events Consultant. As an HR strategist with up to 15 years’ of Human Resource general practice, she has had experience within several industries including Aviation, Oil and Gas, Academia, Media, Wellness, Fashion, Medical Laboratory, Supply Chain, and Manufacturing. 
          She is the Founder and CEO of ICS Africa Limited (Impact Concepts and Solutions Africa) – a budding Pan African company that provides Management Consulting, Personal & Professional Development, Marketing and Communications, as well as Corporate Events Engineering and Management services. She is also the founder and lead blogger of a digital platform called The Fearless and Fabulous Network where she inspires women in leadership, faith, love and career, personal growth as well as promote exceptional women, globally. Additionally, she is the Director for West Africa Female Leaders and Entrepreneurs Network, an African community of female leaders in business.
          Emmaline chartered as a Professional in HR (PHR) in 2014 with the Human Resource Certification Institute, USA and possesses a first-class degree from the Valley View University in Human Resource Management (BBA) and an Advanced International Human Resource Management Diploma in 2023. She also bagged a certification from John Maxwell Team as a certified speaker, trainer, and coach in Aug 2021. 
          Emmaline has been honored as one of Ghana’s 100 Most Influential Women in 2017, one of the Top 100 speakers in Ghana, 2018, one of the 2020 50 Most Influential Young Ghanaians, a 2022 Ghana 25 under 25 Mentor Awards in HR and Business Consulting, a Visionary African Woman Award Recipient in 2023, and a 2023 Women of Color Creating Wealth International Awardee. She has been further listed among the ELOY Foundation & African Women CEO’s Network’s 50 Power People who embody resilience, leadership and advocate for women's empowerment and inclusion in Africa in 2024, a recipient of the 2024 International Africa Women Peace Awards (IAWPA) as well as one of the Young Global Leaders Network’s 40 most inspirational female leaders in Ghana 2024.`,
    imageUrl: '/images/speakers/emmaline-datey.jpg',
    category: 'Speed Coach'
  },
  {
    id: 27,
    name: 'Delasie Dogbey',
    title: 'Life Coach - Mental Health and well being Advocate, Author',
    linkedin: 'https://www.linkedin.com/in/delasie-dogbey-69371651/',
    instagram: 'https://www.instagram.com/togbuigadelasie/',
    facebook: 'https://web.facebook.com/torgbi.dogbey',
    bio: `Delasie Dogbey is a dynamic Relationship Strategist, Life Coach, Business Development Coach, Author, Ghostwriter, and Project & Marketing Strategist. He holds a Master’s degree in Business Administration and has collaborated with some of Ghana’s most prominent brands, including Ghana Telecom, Vodafone, TV3 Network, SIC Insurance, UT Group, FirstBanc Financial Services, Allianz Insurance International, Africa SME Organization, and Enterprise Group.
A passionate advocate for personal and professional growth, Delasie has spearheaded numerous trainings and seminars on topics such as public speaking, authorpreneurship, confidence building, business networking, mindset transformation, purpose discovery, and emotional wellness. He is a nominee for the prestigious 40 Under 40 Awards for emerging leaders and currently serves as President of the Rotary Club of Accra-Legon District.
As a prolific writer, Delasie is the author of several inspiring books, including Allow God to Be God—Our Testimony, It Is Well, Not Easily Broken, and Depression: Don’t Suffer in Silence. His thought-provoking articles have appeared in the Business and Financial Times (B&FT) and Rotary District Magazine, and he has been featured on the cover of FGBMFI Voice Magazine. He also serves as an expert panelist on radio and television platforms.
Delasie is the founder and CEO of the Ladies War Room Organization, an initiative dedicated to empowering women to become the best version of themselves through support for maternal health, emotional wellness, and the cultivation of meaningful relationships. Through this platform, he has provided over 200 women and young girls with free counseling and mental health support.
Driven by a mission to inspire positive change, Delasie is widely recognized as a motivational speaker, idea generator, self-starter, and compassionate leader who believes in service that transforms lives.
`,
    imageUrl: '/images/speakers/Delassie-Dogbe.jpg',
    category: 'Panel Member'
  },
  {
    id: 28,
    name: 'Patience Osekre',
    title: 'Managing Director, Supreme Healthcare Management Services',
    linkedin: 'https://www.linkedin.com/in/patience-osekre-b874888b/',
    facebook: '',
    instagram: 'https://www.instagram.com/patience.osekre.therapist/',
    twitter: '',
    bio: ` 
Patience Osekre is a Consultant Psychotherapist and a Wellness Expert trained in the UK 
with a wealth of experience and expertise in providing Health and Well-being Services for 
Individuals, Groups and Organisations. She has worked for many years in Managerial position 
within the Public/ Statutory, Private and Voluntary Sector in the UK prior to relocating to 
Ghana.  
She is currently the Managing Director of Supreme Healthcare Management services   and 
EAP-Africa (Subsidiary) in Ghana, a pioneering initiative in Sub Saharan Africa which 
provides 24/7 Employee Assistance Program and Wellbeing Services /Consultancy for Banks, 
Oil Companies, the Mining Industry, Embassies, Schools, Clinics, hospitals, and other 
Corporate Institutions in various other sectors to enhance Employee wellbeing, performance, 
and productivity.  She leads a Multi-disciplinary/Multi-Lingual Team of Professionals in 
delivering a wide range of multifaceted Employee Well-being Services in Ghana and across 
the continent.  
Patience is currently engaged in initiatives, such as the EAP Africa Summit and ACE 
(Authentic Caring Employer) Awards, that assist corporate organisations in redefining 
Workplace Mental Health and Wellbeing as a Business imperative and strategic Priority. Her 
prime goal is to help organisations harness the Mental Capital of their workforce by developing   
                                                                                                 
SHMS-LEADING EXPERT IN CORPORATE WELLNESS PROMOTION Page 1 
 
meaningful and sustained wellbeing policies and workplace interventions that support good 
mental health.  She is passionate about creating environments where employees can thrive both 
personally and professionally. Her mission is to integrate best mental health practices into 
organisational cultures, promoting overall well-being and productivity. 
She has been involved in a lot of Research in the UK which has helped to promote, safeguard 
the welfare needs and best Interest of Children and Adults Wellbeing.  Promoting   Innovative 
Well-being solutions to improve psychological safety, Mental Health literacy and a workplace 
culture that normalises Mental Health, have been a huge passion that fuels her zeal, 
commitment, and determination. She is currently writing a book Entitled “Emotional Literacy.” 
She is a registered member of BACP (British Association of Counsellors and Psychotherapist 
UK and a registered member of HCPC (Health &Care Professionals Council) UK.`,
    imageUrl: '/images/speakers/patience-osekre.jpg',
    category: 'Masterclass Trainer'
  },
  
  {
    id: 22,
    name: 'Dr. Stella Agyenim-Boateng',
    title: 'Vice Chairman. Public Services Commission',
    instagram: 'https://www.instagram.com/drstellaab/',
    twitter: 'https://x.com/drstellaab',
    facebook: 'https://web.facebook.com/irenestella.agyenimboateng',
    linkedin: 'https://www.linkedin.com/in/dr-mrs-irene-stella-agyenim-boateng-dba-d-litt-hc-mabr-mba-hrm-19840018b/',
    bio: `Dr. (Mrs.) Irene Stella Agyenim-Boateng is a distinguished Ghanaian human resource management expert, transformational leader, and public sector executive with over three decades of experience spanning the education, telecommunications, insurance, consultancy, and energy sectors.
Renowned for her visionary leadership and people-centered approach, Dr. Agyenim-Boateng has held several high-impact roles across both public and private institutions, consistently driving organizational transformation, strategic growth, and operational excellence.
Key Roles & Achievements
•	Current Vice Chairman, Public Services Commission of Ghana (appointed October 2023)
•	Former Deputy Chief Executive (Services), Volta River Authority (VRA) – led HR, legal, real estate, corporate affairs, and more
•	HR Director at Vodafone Ghana, Ghana Telecom, and GLICO Group
•	Strategic Advisor to the CEO of VRA post-retirement, contributing to executive leadership and institutional development
Professional Expertise
Dr. Agyenim-Boateng is a C-suite HR executive with senior leadership and board-level experience across multinational corporations and public institutions. Her expertise includes:
•	Strategy formulation & execution
•	Labour-union management, employment law, and international labour standards
•	Active engagement with the International Labour Organization (ILO) and the Ghana Employers’ Association (GEA)
•	Recruitment, talent management, diversity & inclusion
•	Business partnering, development & relief management
•	Learning & development, stakeholder engagement, and performance management
•	Reward, compensation & recognition systems
•	Property & facilities management, fleet operations
•	Occupational health, safety & employee wellbeing
•	Event coordination, crisis communication, and organizational development
•	Security operations, school administration, negotiation, and policy implementation
Leadership Style
Dr. Agyenim-Boateng is celebrated for her affable, approachable, and people-centered leadership, paired with a structured, diligent, and results-oriented mindset. Her ability to navigate complex organizational landscapes with clarity and compassion has made her a trusted voice in HR transformation and public sector reform.`,
    imageUrl: '/images/speakers/stella-agyenim-boateng.jpg',
    category: 'Keynote Speaker'
  },
  {
    id: 29,
    name: 'Dr.Francis Eduku',
    title: 'CEO,CIHRM',
    linkedin: 'https://www.linkedin.com/in/feduku-b1b817b4/',
    twitter: '',
    bio: `Dr. Francis Eduku is the Chief Executive Officer of the Chartered Institute of Human Resource Management, Ghana (CIHRM), and has more than two decades of experience in HR leadership and organizational effectiveness. He specializes in strategic human resource management, culture and transformation, and organizational resilience. He has worked extensively with multinational gold mining firms such as Gold Fields and Golden Star Resources and occupied various executive roles, including Vice President of Human Resources and Corporate Affairs, Vice President of Human Resources, and Acting Vice President of Sustainable Development. 
          Dr. Eduku holds a PhD with Distinction in Human Resource Management. He also has an MBA with a specialty in Human Resource Management and an Executive Master’s Degree in Alternative Dispute Resolution (ADR). He is a Fellow of CIHRM, a Chartered HR Professional (CIPD, UK), and a Certified Balanced Scorecard Professional of the Balanced Scorecard Institute and George Washington University College of Professional Studies, USA. 
          He is a regular speaker at high-profile HR conferences and currently champions effective human resource management practices and standards in Ghana through collaborations with international and local organizations and tertiary institutions.
          Dr. Eduku is an alumnus of Saïd Business School, University of Oxford, UK, and a lecturer at the University of Ghana, Legon.`,
    imageUrl: '/images/speakers/francis-eduku.jpg',
    category: 'Panelist and Speaker'
  },
  {
    id: 29,
    name: 'Georgia Manfreda Appiah',
    linkedin: 'https://www.linkedin.com/in/deborah-asmah-cipm-8524585a/',
    title: 'coming soon',
    bio: `Ms. Deborah Asmah is an expert in AI, digital governance, privacy, and compliance, 
whose contributions have significantly shaped Ghana's digital landscape. Her innovative 
approaches have enabled seamless access to digital tools, promoted financial inclusion, and 
driven digital transformation across multiple sectors. Deborah is the co-founder of Npontu 
Technologies Ltd, a technology company specializing in the use of Artificial Intelligence 
(AI) and software development to provide digital solutions and lead transformation 
initiatives. Under her leadership, Npontu Technologies has scaled from a startup to a thriving 
technology powerhouse serving over 20k clients across Ghana. In addition to its national 
footprint, she has driven market expansion into other geographic regions including Nigeria, 
Côte d'Ivoire and United Kingdom(UK). 
She holds a Master of Law from Queen Mary University of London. She is a licensed Certified 
Information Privacy Manager (CIPM) with the International Association of Privacy 
Professionals (IAPP) and a certified Data Protection Officer (DPO). She is an ardent advocate 
for Public Policy, with extensive research experience at the intersection of technology, AI, and 
compliance. Ms. Deborah Asmah’s work has directly led to MSME digitization 
transformation opportunities for over 23k+ businesses in Ghana, contributing to business 
growth, job creation and strong Partnerships with Organizations such as MTN Ghana, 
Association of Ghana Industries(AGI), Ghana Enterprise Agency (GEA), MasterCard 
foundation amongst others.  
Deborah Asmah believes that when AI and digital technologies are used responsibly, they can 
be powerful catalysts for social and economic progress. She is deeply committed to advancing 
women’s empowerment, fostering business growth and championing global ESG objectives. 
Deborah is a frequent speaker at leading conferences across Africa, where she shares her 
insights on the future of AI, privacy and compliance, and digital governance. She has recently 
spoken at: 
• Africa AI Stakeholder Meeting on Innovative Governance and Capacity Building, 2024, 
Kigali, Rwanda. 
• SheTrades Ghana Hub, Ghana Export Promotion Authority – 2024, Accra, Ghana. 
• Digital Governance for Social Inclusion and Sustainable Development, AfreGov, 2024, 
Kigali, Rwanda. 
• Navigating Digital Frontiers: Legal Considerations and Tech Innovations, ALT Network 
Summit, 2024, Kigali, Rwanda. 
• The Global Conference on Human Resources in Africa (GCHRA), 2024, Accra, Ghana.`,
    imageUrl: '/images/speakers/giorgia-manfreda-appiah.jpg',
    category: 'coming soon'
  },
  {
    id: 30,
    name: 'Georgia Manfreda Appiah',
    title: 'coming soon',
    linkedin: 'https://www.linkedin.com/in/giorgia-manfreda-10465bb/',
    bio: `Giorgia Manfreda Appiah is a dynamic leader with over a decade of experience in human resource management, company operations, and strategic leadership. She is the Managing Partner and Chief Operating Officer of Nuffield Clinic, a specialist healthcare facility in Accra, Ghana, where she has led the clinic’s transformation and expansion in orthopaedics, rheumatology, physiotherapy, and family medicine.
She holds a degree in Healthcare Management from the University of Minnesota and currently serves as the company lead for Nuffield Clinic’s participation in the Stanford Seed Transformation Program. Giorgia is known for her hands-on leadership style and commitment to building systems that empower teams and deliver quality care.
Beyond her work at Nuffield, Giorgia is deeply passionate about the Neoanim Foundation, an initiative dedicated to providing prosthetic limbs to children. Her mission is to reduce the long-term impact of disability on children affected by trauma or medical malpractice, helping them reclaim their potential and live fully.
Giorgia brings to every space a powerful blend of operational excellence, empathy-driven leadership, and a clear vision for inclusive and impactful healthcare systems.`,
    imageUrl: '/images/speakers/giorgia-manfreda-appiah.jpg',
    category: 'Panel Member'
  },
  {
    id: 31,
    name: 'Grace Krobo-Edusei',
    title: 'CEO, Grace Center For Growth and Excellence',
    bio: `Grace is a Pastor, Certified Trainer, Speaker, Executive Coach and Entrepreneur. She is 
licensed as an independent Executive Program Director with The John Maxwell Leadership  
Team; an elite World Leader in Leadership, Coaching and Training Development. She is also 
a Neuroencoding Specialist, a Licensed Brain Health Trainer and a certified Global Priority 
Solutions Specialist. 
Her core competencies are in Executive Leadership Coaching, Personal Growth and 
Leadership Development; adding value and transforming lives by helping people and 
organizations with practical tools to fulfil their purpose and realize their ultimate goals. 
Aside from being a keynote speaker she regularly facilitates Leaders’ Values Round Tables, 
Group Coaching, Workshops and Masterminds; all aimed and tailored to aid Team Building 
and the personal and Professional Growth of Individuals and Organizations. 
She is a married mother of three adult children. To give back to her community, she 
volunteers on the board of trustees of the Children’s Heart Foundation Ghana, a charity with 
the mandate to raise funds for open Heart Surgery for underprivileged Ghanaian children 
living with congenital heart disease. 
She loves reading, gardening and photography. 
Her Motto: It is not about what is in it for me but how I can add value.`,
    imageUrl: '/images/speakers/biophoto.jpg',
    category: 'coming soon'
  },
  {
    id: 32,
    name: 'Cynthia Mawulawoe Kodowu',
    title: 'Founder HR Network',  
    linkedin: 'https://www.linkedin.com/in/cynthiamawulawoekodowu/',
    facebook: 'https://web.facebook.com/mawulawoek',
    bio: `Cynthia is a results and people driven C-Suite Leader with a proven track record of driving organizational growth, optimizing operations, and delivering exceptional results. She is a strategic thinker with a passion for innovation and a commitment to excellence. Her 15+ year career has dedicated her attention to positively impacting medium businesses, HR professionals and departments. She is especially skilled in Strategic Leadership, Risk Management, Change Management, Financial Management, P & L Management, Business Development, Stakeholder Relations, Team Building, Banking Operations, People Strategy and its essential experiences in Training and Development, Recruitments and Selection, Employee Relations, Strategic Business Partnering. Industries that have felt her impact include Banking, Hospitality, Retail, Insurance and Marketing.

Cynthia has gained certification from some of the Globe’s leading educational institutions. Her degrees include MBA in Project Management, BA in Accountancy (GIMPA) and HND in Marketing. In addition to her degrees, she has also amassed a number of certificates, which include: Instructional Design Certificate from ATD-USA, Executive Masters from UCLA, Certified HR Business Partner and Human Resource Analyst (GAFM), CIPD Associate level 5 (CIPD UK), Associate member (CIHRMP), Certificate in Strategic Management, Advanced Certificate in HR (Pan African Institute), Certificate in Diversity, Equity and Inclusion and currently undertaking her MCIPD with CIPD -UK 2023/2024 cohort .

Her unwavering drive to excel and commendable interpersonal skills have enabled her to pursue and achieve many career highlights such as founding the HR Network Africa group of HR professionals.

Cynthia is the mind and driving force behind the HR Network Africa. HR Network Africa is an ever-growing community of 500+ HR Practitioners globally that offers training by some of the continent’s highest-ranking practitioners. The success of these programmes is to grow the individual, and this motivation also led to the creation of HR Campus Connect. Cynthia has managed to bring her vision of creating a resource for ambitious HR professionals to grow and network to life with the HR Network. 

Cynthia has been able to consistently raise and maintain high standards of work. In her past position as HR Director in one of the nation’s industry-leading companies, Cynthia proved to be a leader that guarantees outstanding results. This is proven by her track record with the benefits and compensation, employee engagement, Training and Development initiatives that she implemented across the Trasacco Group of companies. 

In 2021, she took on the challenge to make a significant shift from the HR practice to a higher role in executive management as Country Manager for BTL Marketing Company (BTL AFRICA) where she has took on the mandate to lead the strategic charge on revenue and profitability mobilization using her people strategy and strategic business management skills to increase organizational productivity. 

In 2025, she took another bold step in her career by taking on the role as Chief Operating Officer at Perbi Cubs Africa, a digital education company offering library services focused on literacy-promoting endeavour that desires to see an enlightened people of African descent who are a product of an enviable national culture of leisure reading.

Cynthia has an intrinsic urge to unearth the potential in people to develop organizations. This urge is apparent when she commits to coaching and mentoring the next generation of HR leaders. She is of the genuine belief that the current leaders in HR must invest in the next generation so that they may continue to improve HR functionality which will then maximise organization profitability.  

Cynthis is a member of several laudable networks including but not limited to the Executive Women Network, W50 Santander Executive Women’s Network, The Boardroom Africa, the Learning and Performance Institute, the Global Academy of Finance and Management, the Chartered Institute of Human Resource Management (CIHRM), the Professional Marketers Association of Ghana Students (PROMAGS) and SIRDIR.

Overall, Cynthia has proven herself to be of value to organizations she has worked through her will to improve, implementation of innovative solutions and interpersonal skills. She is a woman rising in the C-Suite level proving to women that the highest position in any organization is also available for women to venture into. Furthermore, she has proven an asset to business organizations through her leadership and visionary skills as well as to her fellow HR practitioners as she has displayed through the work of the HR Network and through her coaching and mentoring programs.
.`,
    imageUrl: '/images/speakers/cynthia.jpg',
    category: 'Guest Speaker'
  },
   {
      id: 33,
      name: 'Paul Opoku',
      title: '????',
      bio: `????.`,
      imageUrl: '/images/speakers/paul.jpg',
      category: 'Speed Coach'
    },
    {
      id: 34,
      name: 'Eunice Dede Tornyi',
      title: 'Public Relations Professional',
      bio: `Format 1

Eunice Dede Tornyi is the award winning host of the African Women’s Voices Show with 17 years of experience in TV presenting and production.

She is a public relations professional with Global Media Alliance and Business lead for E-productions, a first class production company in Ghana, and a member of the Global Media Alliance subsidiaries.

She has a Masters in International Relations & Diplomacy and was former executive director of the Ghana Nigeria Business Council steering committee. She is currently the president of the  International Relations & Diplomacy Network Ghana and a member of its governing council 

Eunice Tornyi is also a stage actress, professional Event MC, voice actor/voice over artist & and voice coach who speaks fluent English, Fante, and Igbo, with a working knowledge of French and Yoruba
 
With her extensive experience and diverse skill set, Eunice Dede Tornyi is a respected figure in Media, Diplomacy and Public Relations
`,
      imageUrl: '/images/speakers/co-mc.jpg',
      category: 'Co M.C'
    },
  

  
  // ... add the rest of your speakers
];
