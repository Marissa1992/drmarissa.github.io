/**
 * ENT Services Data Model
 * 10 conditions: 4 original services + 6 new expanded services.
 * All clinical text is strictly evidence-based and approved.
 */

export interface ServiceSymptom {
  icon: string;
  title: string;
  desc: string;
}

export interface ConsultationStep {
  step: string;
  title: string;
  desc: string;
}

export interface ServiceFAQ {
  q: string;
  a: string;
}

export interface ServiceItem {
  slug: string;
  name: string;
  shortName: string;
  seoTitle: string;
  seoDescription: string;
  heroLine: string;
  overview: string[];
  symptoms: ServiceSymptom[];
  whenToSeeDoctor: string[];
  consultationProcess: ConsultationStep[];
  faqs: ServiceFAQ[];
  relatedSlugs: string[];
  icon: string; // lucide icon identifier
}

export const SERVICES: ServiceItem[] = [
  // 1. Vertigo
  {
    slug: 'vertigo',
    name: 'Vertigo & Balance Disorders',
    shortName: 'Vertigo Management',
    seoTitle: 'Vertigo Treatment in Thiruvananthapuram | Dr. Marissa Mathew',
    seoDescription: 'Expert peripheral vertigo and balance disorder evaluation in Pongumoodu, Thiruvananthapuram by Dr. Marissa Mathew. Epley manoeuvre & care. Book on WhatsApp.',
    heroLine: 'Is the world spinning around you? You do not have to live with debilitating dizziness. Get accurate diagnosis and targeted relief at our clinic in Pongumoodu.',
    icon: 'Activity',
    overview: [
      'Vertigo is a sensation of spinning or movement when you are completely still. Unlike general dizziness or faintness, true vertigo gives a false sense that you or your surroundings are rotating, tilting, or swaying. It is most commonly caused by a problem in the vestibular system of the inner ear.',
      'The most frequent cause is Benign Paroxysmal Positional Vertigo (BPPV)—a condition where microscopic calcium crystals in the inner ear become dislodged and float into the fluid-filled balance canals, sending erroneous signals to the brain. Other common inner-ear causes include Meniere\'s disease, vestibular neuritis, and labyrinthitis.',
      'At Dr. Marissa\'s ENT Clinic in Pongumoodu, Thiruvananthapuram, we focus on identifying the exact root cause of your balance disorder. Most peripheral vertigo cases can be resolved or significantly improved through precise, in-clinic repositioning manoeuvres and tailored vestibular rehabilitation.',
    ],
    symptoms: [
      { icon: '🌀', title: 'Spinning Sensation', desc: 'A false feeling that you or the room is rotating, tilting, or swaying.' },
      { icon: '⚖️', title: 'Loss of Balance', desc: 'Difficulty walking steadily or feeling unsteady on your feet during head movements.' },
      { icon: '🤢', title: 'Nausea & Queasiness', desc: 'Feeling sick to your stomach, frequently provoked by sudden position changes.' },
      { icon: '👁️', title: 'Abnormal Eye Movement', desc: 'Rapid, involuntary eye jerks (nystagmus) during positional vertigo episodes.' },
      { icon: '👂', title: 'Ringing in the Ears', desc: 'Tinnitus or a persistent buzzing or humming sound in one or both ears.' },
      { icon: '🔇', title: 'Hearing Fluctuations', desc: 'Muffled hearing or a sensation of ear fullness accompanying dizziness episodes.' },
    ],
    whenToSeeDoctor: [
      'Episodes of spinning triggered by turning your head or rolling over in bed.',
      'Unsteadiness lasting several days after a viral cold or flu.',
      'Dizziness paired with ear fullness, tinnitus, or muffled hearing.',
      'IMPORTANT RED FLAG: If vertigo is accompanied by sudden weakness, numbness, slurred speech, double vision, or a severe thunderclap headache, seek immediate emergency hospital casualty care.',
    ],
    consultationProcess: [
      { step: '01', title: 'Detailed Vestibular Assessment', desc: 'A thorough clinical history and physical examination including Dix-Hallpike testing to pinpoint the exact semicircular canal affected.' },
      { step: '02', title: 'Epley\'s Maneuver', desc: 'A highly effective, in-clinic canalith repositioning procedure for BPPV that guides dislodged crystals back to their proper chamber—often providing immediate relief.' },
      { step: '03', title: 'Vestibular Rehabilitation', desc: 'A tailored exercise programme to retrain your brain and inner ear balance pathways, improving long-term stability and confidence.' },
      { step: '04', title: 'Conservative Medication Management', desc: 'Appropriate vestibular sedatives or anti-emetics to control acute nausea and severe symptoms during initial recovery stages.' },
    ],
    faqs: [
      { q: 'Can vertigo be permanently cured?', a: 'BPPV, the most common type, can often be resolved in one or two clinic visits with the Epley\'s Maneuver. Other types may require ongoing management, but most patients achieve significant improvement with proper treatment.' },
      { q: 'Is vertigo dangerous?', a: 'Peripheral vertigo itself is rarely dangerous, but it significantly increases the risk of falls and accidents. However, sudden-onset vertigo with severe headache, double vision, or limb weakness may indicate a central neurological condition—seek emergency hospital care in such cases.' },
      { q: 'How long does a vertigo episode last?', a: 'BPPV episodes typically last seconds to minutes. Meniere\'s disease episodes can last 20 minutes to several hours. If you have prolonged or frequent episodes, an ENT evaluation is essential.' },
      { q: 'Do I need any special scans for vertigo?', a: 'Most peripheral vertigo can be diagnosed through clinical examination and positional testing. If atypical signs or central neurological causes are suspected, Dr. Marissa will advise appropriate medical imaging.' },
      { q: 'Can I drive if I have active vertigo?', a: 'You should avoid driving during active vertigo episodes. Once symptoms are well-controlled and you are cleared by your doctor, driving is generally safe.' },
    ],
    relatedSlugs: ['ear-wax-removal', 'tinnitus', 'hearing-loss', 'sinusitis'],
  },

  // 2. Ear Wax Removal
  {
    slug: 'ear-wax-removal',
    name: 'Ear Wax Removal (Microsuction)',
    shortName: 'Ear Wax Removal',
    seoTitle: 'Ear Wax Removal in Thiruvananthapuram | Dr. Marissa Mathew',
    seoDescription: 'Safe microsuction ear wax removal in Pongumoodu, Thiruvananthapuram by ENT specialist Dr. Marissa Mathew. Gentle, water-free ear cleaning. Book on WhatsApp.',
    heroLine: 'Safe, painless microsuction—the gold standard for ear wax removal. No water, no syringing. Clear blocked ears safely and comfortably in Thiruvananthapuram.',
    icon: 'Stethoscope',
    overview: [
      'Ear wax (cerumen) is a natural, healthy secretion produced by the ear canal to lubricate skin and trap dust and bacteria. However, when excess wax accumulates or is pushed deep into the canal by cotton buds, it forms a hard impaction that blocks sound and causes discomfort.',
      'At Dr. Marissa\'s ENT Clinic in Pongumoodu, Thiruvananthapuram, ear cleaning is performed exclusively using microsuction. Using direct illumination and specialized magnification, the doctor gently suctions out the blockage without introducing any water into the ear canal.',
      'Unlike traditional water syringing, microsuction carries virtually zero risk of ear infection and is completely safe for patients with a history of eardrum perforations, ear tubes (grommets), or narrow canals. If wax is unusually hard, softening drops may be advised prior to removal for maximum comfort.',
    ],
    symptoms: [
      { icon: '🔇', title: 'Muffled Hearing', desc: 'Sounds seem distant, dull, or blocked, as though hearing through a cotton plug.' },
      { icon: '👂', title: 'Feeling of Fullness', desc: 'A heavy, plugged, or pressurized sensation deep inside the ear canal.' },
      { icon: '🔔', title: 'Tinnitus', desc: 'Ringing, buzzing, or clicking sounds provoked by wax pressing against the eardrum.' },
      { icon: '😣', title: 'Ear Discomfort & Itch', desc: 'Mild aching, itching, or irritation within the ear canal.' },
      { icon: '😵', title: 'Mild Dizziness', desc: 'Slight unsteadiness caused by uneven pressure against the tympanic membrane.' },
      { icon: '💧', title: 'Dark Wax Buildup', desc: 'Visible dry, dark, or hard wax visible at the canal entrance.' },
    ],
    whenToSeeDoctor: [
      'Noticeable hearing drop following a shower or swimming session.',
      'Persistent fullness or ringing in one or both ears.',
      'Pain or irritation after using cotton buds or home ear tools.',
      'Regular cleaning needed for users of hearing aids or custom in-ear earphones.',
    ],
    consultationProcess: [
      { step: '01', title: 'Otoscopic Examination', desc: 'High-magnification visualization of the ear canal to determine the depth, consistency, and location of the wax impaction.' },
      { step: '02', title: 'Safe Wax Softening', desc: 'If the wax is dry or deeply impacted, gentle softening drops are applied to guarantee a smooth, comfortable removal.' },
      { step: '03', title: 'Gentle Microsuction Removal', desc: 'Using a fine medical suction cannula under direct vision, the wax is gently cleared without any water or syringing.' },
      { step: '04', title: 'Post-Procedure Canal Inspection', desc: 'Verifying that the eardrum is intact, healthy, and completely free of residual debris, with immediate restoration of hearing clarity.' },
    ],
    faqs: [
      { q: 'Is microsuction painful?', a: 'Microsuction is generally painless. You will hear a gentle rushing or suction sound, and may feel mild tickling, but the procedure is well tolerated by both adults and children.' },
      { q: 'Should I use ear drops before my appointment?', a: 'If you have known hard wax, using gentle olive oil or sodium bicarbonate ear drops for 2–3 days beforehand softens the wax and facilitates effortless removal. Feel free to ask us when booking.' },
      { q: 'Can I get microsuction if I have a perforated eardrum?', a: 'Yes. Microsuction is the safest and medically preferred technique for patients with a perforated eardrum, because it does not introduce any water or fluid into the middle ear.' },
      { q: 'Why shouldn\'t I use cotton buds at home?', a: 'Cotton buds push the majority of wax deeper into the narrow canal like a piston, packing it tightly against the eardrum and risking accidental canal tears or membrane perforation.' },
      { q: 'How often should I have my ears cleaned?', a: 'Most ears are self-cleaning and rarely need intervention. Only individuals who produce excess wax, have narrow canals, or wear hearing aids typically require periodic professional cleaning every 6–12 months.' },
    ],
    relatedSlugs: ['vertigo', 'hearing-loss', 'tinnitus', 'ear-infection'],
  },

  // 3. Sinusitis
  {
    slug: 'sinusitis',
    name: 'Sinusitis & Nasal Care',
    shortName: 'Sinusitis Treatment',
    seoTitle: 'Sinusitis Treatment in Thiruvananthapuram | Dr. Marissa Mathew',
    seoDescription: 'Relief from chronic sinus congestion, facial pressure, and nasal allergies in Pongumoodu, Thiruvananthapuram with Dr. Marissa Mathew. Book on WhatsApp.',
    heroLine: 'Persistent blocked nose, facial throbbing, or recurring sinus infections? Get lasting relief with targeted ENT care at our clinic in Pongumoodu, Thiruvananthapuram.',
    icon: 'Wind',
    overview: [
      'Sinusitis is an inflammation or swelling of the tissue lining the paranasal sinuses—the air-filled cavities in the facial bones surrounding your eyes and nose. When these narrow drainage pathways become obstructed, mucus accumulates, creating an environment where bacteria and viruses thrive.',
      'Sinusitis can be acute (lasting under 4 weeks, often following a viral cold), subacute, or chronic (persisting beyond 12 weeks). In coastal Kerala\'s warm, humid climate, seasonal monsoons, house dust mites, and mold spores frequently exacerbate nasal inflammation.',
      'At Dr. Marissa\'s ENT Clinic in Pongumoodu, Thiruvananthapuram, our priority is identifying the root cause of your sinus troubles—whether an allergic trigger, anatomical obstruction, or persistent infection—and designing an effective, evidence-based management plan.',
    ],
    symptoms: [
      { icon: '🤧', title: 'Nasal Congestion', desc: 'Persistent blocked or stuffy nose making breathing through the nostrils difficult.' },
      { icon: '😖', title: 'Facial Pressure & Pain', desc: 'Dull aching pain or pressure across the cheeks, eyes, forehead, or nose bridge.' },
      { icon: '💧', title: 'Thick Nasal Discharge', desc: 'Discolored yellow or green mucus draining from the nose or down the throat.' },
      { icon: '👃', title: 'Reduced Sense of Smell', desc: 'Temporary loss or muffling of smell and taste caused by mucosal swelling.' },
      { icon: '🤕', title: 'Sinus Headache', desc: 'Headaches that worsen when bending forward or upon waking in the morning.' },
      { icon: '😮', title: 'Post-Nasal Drip', desc: 'Mucus trickling down the back of the throat triggering a persistent dry cough.' },
    ],
    whenToSeeDoctor: [
      'Sinus congestion or facial headache lasting more than 10 days without improvement.',
      'Symptoms that briefly improve and then suddenly worsen ("double sickening").',
      'Severe pain in the cheek, upper molars, or around the eyes.',
      'URGENT: Any swelling or redness around one or both eyes, vision changes, stiff neck, or high fever requires immediate hospital evaluation.',
    ],
    consultationProcess: [
      { step: '01', title: 'Nasal Examination', desc: 'Careful anterior rhinoscopy to directly inspect the nasal mucosal lining, check for turbinate hypertrophy, structural deviation, or purulent drainage.' },
      { step: '02', title: 'Evidence-Based Medication', desc: 'Prescription of targeted anti-inflammatory nasal sprays, saline irrigation protocols, and antibiotics only when a bacterial infection is clinically confirmed.' },
      { step: '03', title: 'Allergy & Environmental Review', desc: 'Identifying home and workplace triggers (dust mites, molds, dampness) prevalent in Thiruvananthapuram that perpetuate chronic inflammation.' },
      { step: '04', title: 'Saline Irrigation Guidance', desc: 'Guiding you on safe, sterile saline nasal rinsing techniques to wash away mucus and restore natural sinus mucosal clearance.' },
      { step: '05', title: 'Surgical Referral When Indicated', desc: 'For complex chronic sinusitis or anatomical blockages unresponsive to medical management, comprehensive counseling and referral for FESS (Functional Endoscopic Sinus Surgery).' },
    ],
    faqs: [
      { q: 'How do I know if I have sinusitis or just a regular cold?', a: 'A standard viral cold typically peaks around day 3 and resolves within 7–10 days. Sinusitis involves distinct facial pain or pressure, thick discolored mucus, and symptoms persisting past 10 days.' },
      { q: 'Do I always need antibiotics for a sinus infection?', a: 'No. The majority of acute sinus infections are viral and improve with steam inhalation, saline rinses, and anti-inflammatory sprays. Antibiotics are reserved for confirmed bacterial infections.' },
      { q: 'Can sinusitis cause tooth or jaw pain?', a: 'Yes. The roots of your upper molars sit directly beneath the floor of the maxillary sinuses. Inflammation in these sinuses commonly manifests as upper tooth or jaw pain.' },
      { q: 'Why is sinusitis so common in Thiruvananthapuram?', a: 'Kerala\'s high humidity, frequent monsoons, and ambient dust mites provide ideal conditions for chronic nasal allergy flare-ups that block normal sinus drainage.' },
      { q: 'What home remedy is medically recommended for sinus relief?', a: 'Saline nasal irrigation using sterile or cooled boiled water with pharmaceutical saline packets is the gold standard home therapy to flush stagnant mucus and soothe inflammation.' },
    ],
    relatedSlugs: ['allergic-rhinitis', 'nasal-polyps', 'tonsillitis', 'ear-infection'],
  },

  // 4. Tonsillitis & Throat Care
  {
    slug: 'tonsillitis',
    name: 'Tonsillitis & Throat Care',
    shortName: 'Tonsillitis Treatment',
    seoTitle: 'Tonsillitis Treatment in Thiruvananthapuram | Dr. Marissa Mathew',
    seoDescription: 'Expert diagnosis and treatment for recurrent tonsillitis, severe sore throats, and hoarseness in Pongumoodu, Thiruvananthapuram by Dr. Marissa Mathew.',
    heroLine: 'Recurring sore throats, painful swallowing, or persistent throat infections? Get accurate diagnosis and gentle treatment at our clinic in Pongumoodu.',
    icon: 'Smile',
    overview: [
      'Tonsillitis is an inflammation of the palatine tonsils—two oval pads of lymphoid tissue located at the back of the throat that form part of the body\'s early defense system against airborne pathogens. When infected by viruses or bacteria, the tonsils become enlarged, red, and painful.',
      'While isolated episodes of acute sore throat are common, recurrent tonsillitis (frequent severe infections throughout the year) can significantly compromise sleep quality, school attendance, and daily well-being in both children and adults.',
      'Beyond tonsillitis, Dr. Marissa\'s ENT Clinic in Pongumoodu provides thorough care for a wide spectrum of throat and voice complaints, including pharyngitis, laryngitis, vocal hoarseness, and chronic throat irritation from post-nasal drip or acid reflux.',
    ],
    symptoms: [
      { icon: '🤒', title: 'Severe Sore Throat', desc: 'Throat pain and raw scratchiness that makes swallowing saliva, fluids, or food distressing.' },
      { icon: '🌡️', title: 'Fever & Chills', desc: 'Elevated body temperature accompanying acute bacterial or viral infection.' },
      { icon: '🔴', title: 'Red, Swollen Tonsils', desc: 'Enlarged tonsils frequently coated with white or yellow patches of exudate.' },
      { icon: '🎙️', title: 'Voice Changes or Hoarseness', desc: 'Muffled, strained, or raspy voice caused by swollen pharyngeal and laryngeal tissue.' },
      { icon: '😣', title: 'Referred Ear Pain', desc: 'Discomfort radiating to one or both ears due to shared cranial nerve pathways.' },
      { icon: '😴', title: 'Nighttime Snoring', desc: 'Enlarged tonsils partially obstructing the upper airway during sleep, causing heavy snoring.' },
    ],
    whenToSeeDoctor: [
      'Sore throat accompanied by high fever lasting more than 48 hours.',
      'Difficulty or severe pain when opening the mouth or swallowing fluids.',
      'Recurrent episodes of throat infections (more than 4–5 times in a single year).',
      'URGENT: Severe breathing difficulty, inability to swallow saliva, or asymmetrical throat swelling with a "hot potato" voice (signs of peritonsillar abscess) require immediate emergency hospital care.',
    ],
    consultationProcess: [
      { step: '01', title: 'Oropharyngeal Examination', desc: 'Detailed visual inspection of the oral cavity, tonsillar pillars, posterior pharyngeal wall, and uvula under medical illumination.' },
      { step: '02', title: 'Neck Lymph Node Palpation', desc: 'Gentle physical assessment of cervical lymph nodes to check for tender swelling indicative of bacterial or viral infection.' },
      { step: '03', title: 'Accurate Cause Differentiation', desc: 'Differentiating between viral and streptococcal bacterial infection to ensure antibiotics are prescribed only when genuinely warranted.' },
      { step: '04', title: 'Targeted Medical Treatment', desc: 'Prescribing appropriate analgesics, anti-inflammatories, antiseptic gargles, and supportive therapy for rapid comfort.' },
      { step: '05', title: 'Recurrence Assessment & Counseling', desc: 'Evaluating long-term criteria (e.g., Paradise criteria) for tonsillectomy in patients with chronic, debilitating infections.' },
    ],
    faqs: [
      { q: 'Is tonsillitis contagious?', a: 'Yes. Both viral and bacterial tonsillitis spread easily through respiratory droplets from coughing, sneezing, and sharing utensils. Practicing good hand hygiene during illness helps protect family members.' },
      { q: 'Does every case of tonsillitis require antibiotics?', a: 'No. The majority of throat infections are viral and do not benefit from antibiotics. Antibiotics are only prescribed when streptococcal bacterial tonsillitis is suspected or confirmed.' },
      { q: 'When is a tonsillectomy (tonsil surgery) recommended?', a: 'Surgery is typically considered when a patient suffers from 7 or more documented severe episodes in one year, 5 per year for two consecutive years, or when enlarged tonsils cause obstructive sleep apnea.' },
      { q: 'Can adults get tonsillitis?', a: 'Yes. While tonsillitis is most frequent in children and teenagers, adults can and do experience severe tonsillitis that warrants prompt ENT care.' },
      { q: 'Can acid reflux cause chronic sore throat?', a: 'Yes. Laryngopharyngeal reflux (silent reflux) occurs when stomach acid travels up into the throat, causing chronic morning throat clearing, hoarseness, and irritation that mimics an infection.' },
    ],
    relatedSlugs: ['pediatric-ent', 'sinusitis', 'allergic-rhinitis', 'hearing-loss'],
  },

  // 5. Hearing Loss (New)
  {
    slug: 'hearing-loss',
    name: 'Hearing Loss Evaluation & Management',
    shortName: 'Hearing Loss',
    seoTitle: 'Hearing Loss Treatment in Thiruvananthapuram | Dr. Marissa Mathew',
    seoDescription: 'Comprehensive hearing loss assessment in Pongumoodu, Thiruvananthapuram by Dr. Marissa Mathew. Conductive, sensorineural, and sudden hearing checks. Book on WhatsApp.',
    heroLine: 'Don\'t let hearing difficulties disconnect you from the conversations you love. Comprehensive, compassionate hearing assessments in Pongumoodu, Thiruvananthapuram.',
    icon: 'Ear',
    overview: [
      'Hearing loss can develop gradually with age or arise unexpectedly following an ear infection, trauma, or wax buildup. Because clear hearing is fundamental to connecting with family, friends, and colleagues, any change in auditory sharpness deserves a thorough clinical assessment.',
      'Hearing loss generally falls into three categories: conductive hearing loss (where sound waves cannot travel efficiently through the outer or middle ear—often due to impacted wax, fluid behind the eardrum, or eardrum damage), sensorineural hearing loss (which involves the delicate sensory cells of the inner ear or auditory nerve), and mixed hearing loss.',
      'At Dr. Marissa\'s ENT Clinic in Pongumoodu, Thiruvananthapuram, our priority is identifying the exact cause of your reduced hearing. Many causes—such as simple wax impaction or middle ear effusion—are completely reversible with targeted outpatient treatment.',
    ],
    symptoms: [
      { icon: '🔇', title: 'Muffled Speech', desc: 'Conversations sound unclear or mumbling, especially in background noise or family gatherings.' },
      { icon: '🔊', title: 'High Volume Requirement', desc: 'Frequently needing the television, radio, or mobile phone turned up louder than others prefer.' },
      { icon: '🔁', title: 'Asking for Repetition', desc: 'Regularly asking people to repeat themselves or speak more slowly.' },
      { icon: '📞', title: 'Phone Straining', desc: 'Straining to comprehend conversations clearly over telephone calls.' },
      { icon: '🔔', title: 'Accompanying Tinnitus', desc: 'Hearing a persistent ringing, buzzing, or hissing sound in one or both ears.' },
      { icon: '⚖️', title: 'Ear Fullness or Imbalance', desc: 'A plugged sensation or mild unsteadiness accompanying hearing reduction.' },
    ],
    whenToSeeDoctor: [
      'Sudden drop in hearing in one or both ears (Sudden Sensorineural Hearing Loss is a time-sensitive medical emergency; seek care within 24–72 hours).',
      'Persistent muffled hearing lasting more than a few days, even without pain.',
      'Hearing loss accompanied by fluid, blood, or discharge from the ear canal.',
      'Hearing changes accompanied by room-spinning vertigo or severe unsteadiness.',
    ],
    consultationProcess: [
      { step: '01', title: 'Detailed Auditory History', desc: 'Reviewing when hearing changed, any noise exposure, recent infections, medications, and family history.' },
      { step: '02', title: 'Otoscopic Examination', desc: 'Thorough visual inspection of the outer ear canal and eardrum under magnification to check for wax blockage, infection, perforation, or middle ear fluid.' },
      { step: '03', title: 'Clinical Tuning Fork Testing', desc: 'Rinne and Weber tuning fork evaluations to quickly differentiate between conductive and sensorineural hearing problems.' },
      { step: '04', title: 'In-Clinic Treatment of Reversible Causes', desc: 'If conductive loss is caused by ear wax or debris, gentle microsuction is performed during the visit.' },
      { step: '05', title: 'Personalized Next Steps & Referrals', desc: 'Clear explanation of findings, medical prescriptions where appropriate, and guidance for formal pure-tone audiometry or hearing rehabilitation.' },
    ],
    faqs: [
      { q: 'Can ear wax cause permanent hearing loss?', a: 'No. Ear wax causes temporary conductive hearing loss by physically blocking sound waves. Once safely cleared with microsuction at our clinic, normal hearing is typically restored immediately.' },
      { q: 'What is sudden sensorineural hearing loss (SSNHL)?', a: 'SSNHL is an unexplained, rapid drop in hearing that occurs over hours or upon waking. It requires immediate ENT evaluation, as early medical intervention within 24–72 hours offers the best chance of recovery.' },
      { q: 'Do I need a hearing aid right away?', a: 'Not necessarily. Many causes of hearing reduction—such as fluid behind the eardrum, allergies, or wax—are medical and reversible. We first evaluate and address any treatable cause.' },
      { q: 'Can headphone use cause permanent hearing damage?', a: 'Yes. Listening to personal audio at excessive volumes for prolonged periods can damage the sensory hair cells in the inner ear, leading to irreversible hearing loss. Moderating volume is critical.' },
      { q: 'Do you evaluate children\'s hearing difficulties at the clinic?', a: 'Yes. We routinely evaluate children for common causes of hearing muffledness, including middle ear fluid (glue ear) and wax impaction, guiding parents through child-friendly care.' },
    ],
    relatedSlugs: ['ear-wax-removal', 'tinnitus', 'ear-infection', 'vertigo'],
  },

  // 6. Ear Infection (New)
  {
    slug: 'ear-infection',
    name: 'Ear Infection Treatment (Otitis Media & Externa)',
    shortName: 'Ear Infection',
    seoTitle: 'Ear Infection Treatment in Thiruvananthapuram | Dr. Marissa Mathew',
    seoDescription: 'Gentle treatment for acute otitis media, swimmer\'s ear, and ear discharge in Pongumoodu, Thiruvananthapuram by ENT specialist Dr. Marissa Mathew.',
    heroLine: 'Don\'t let sharp ear pain, throbbing, or fluid discharge disrupt your life. Gentle, precise ear infection care for children and adults in Thiruvananthapuram.',
    icon: 'Activity',
    overview: [
      'Ear infections are among the most common reasons patients consult an ENT specialist. Infections can affect different anatomical regions: otitis externa (swimmer\'s ear) involves the outer canal skin, while otitis media involves the air-filled space behind the eardrum. In Kerala\'s warm, humid climate, moisture accumulation and monsoon colds frequently trigger both.',
      'In young children, middle ear infections are especially common because their Eustachian tubes are shorter, narrower, and more horizontal. When colds or nasal allergies strike, fluid easily becomes trapped in the middle ear, fostering bacterial or viral growth.',
      'At Dr. Marissa\'s ENT Clinic in Pongumoodu, Thiruvananthapuram, we take a gentle, conservative approach. Not every ear infection requires oral antibiotics; targeted ear drops, gentle aural toilet (cleaning), and pain relief provide rapid, complete resolution in many cases.',
    ],
    symptoms: [
      { icon: '⚡', title: 'Throbbing Ear Pain', desc: 'Sharp, dull, or throbbing pain inside the ear canal, often worsening when lying flat.' },
      { icon: '💧', title: 'Ear Discharge', desc: 'Clear, cloudy, yellowish, or foul-smelling fluid draining out of the ear canal.' },
      { icon: '🔇', title: 'Muffled Hearing', desc: 'A sensation that the ear is plugged or hearing is dulled due to fluid accumulation.' },
      { icon: '👂', title: 'Canal Tenderness', desc: 'Pain when pulling the earlobe or pressing the small flap in front of the ear (tragus).' },
      { icon: '🌡️', title: 'Fever', desc: 'Elevated body temperature, especially noticeable in young children.' },
      { icon: '👶', title: 'Ear Tugging in Toddlers', desc: 'Infants frequently rubbing their ears, being unusually irritable, or crying while feeding.' },
    ],
    whenToSeeDoctor: [
      'Ear pain that does not improve with simple analgesics within 24–48 hours.',
      'Visible fluid, pus, or blood discharging from the ear.',
      'Swelling, redness, or tenderness on the bone directly behind the ear (requires urgent evaluation).',
      'Ear pain accompanied by high fever, dizziness, or facial weakness.',
    ],
    consultationProcess: [
      { step: '01', title: 'Symptom Review & History', desc: 'Assessing the duration of discomfort, recent swimming or water exposure, recent viral colds, and prior ear history.' },
      { step: '02', title: 'High-Definition Otoscopy', desc: 'Carefully examining the canal walls and eardrum under magnification to detect redness, bulging, fluid levels, or perforation.' },
      { step: '03', title: 'Gentle Aural Toilet (Cleaning)', desc: 'When appropriate, gently removing discharge or debris under direct vision so prescribed drops can reach the inflamed tissue effectively.' },
      { step: '04', title: 'Rational Prescription', desc: 'Prescribing targeted topical antibiotic/antifungal drops, decongestants, or oral antibiotics only when clinically indicated.' },
      { step: '05', title: 'Dry Ear & Prevention Guidance', desc: 'Providing clear instructions on keeping the ear strictly dry during bathing and preventing recurrent infections.' },
    ],
    faqs: [
      { q: 'Can I put warm coconut or herbal oil in the ear for pain?', a: 'No. Putting unsterile oils or home remedies into an inflamed ear can worsen the infection and is dangerous if the eardrum has a tiny perforation. Always have the ear examined first.' },
      { q: 'Does an ear infection always require oral antibiotics?', a: 'No. Many middle ear infections are viral and resolve with pain relief and observation. Outer ear infections often respond completely to targeted topical drops without oral antibiotics.' },
      { q: 'Why does my child get an earache after every cold?', a: 'Colds cause nasal swelling that blocks children\'s small Eustachian tubes, trapping fluid behind the eardrum. Managing nasal allergies and colds helps reduce these episodes.' },
      { q: 'Is it safe to fly with an active ear infection?', a: 'Flying with an active middle ear infection or blocked Eustachian tube can cause severe pain and possible eardrum rupture due to cabin pressure changes. Consult an ENT before air travel.' },
      { q: 'What is swimmer\'s ear?', a: 'Swimmer\'s ear (otitis externa) is an infection of the outer ear canal skin caused by trapped moisture that fosters bacterial or fungal growth. It is very common during Kerala\'s rainy season.' },
    ],
    relatedSlugs: ['hearing-loss', 'ear-wax-removal', 'pediatric-ent', 'sinusitis'],
  },

  // 7. Allergic Rhinitis (New)
  {
    slug: 'allergic-rhinitis',
    name: 'Allergic Rhinitis & Nasal Allergies',
    shortName: 'Allergic Rhinitis',
    seoTitle: 'Allergic Rhinitis Treatment in Thiruvananthapuram | Dr. Marissa Mathew',
    seoDescription: 'Proven relief from sneezing, running nose, and Kerala monsoon pollen allergies in Pongumoodu, Thiruvananthapuram with Dr. Marissa Mathew. Book on WhatsApp.',
    heroLine: 'Break free from constant sneezing, nasal itching, and watery eyes. Evidence-based allergy management tailored for Kerala\'s coastal climate.',
    icon: 'Wind',
    overview: [
      'Allergic rhinitis is an inflammatory condition of the nasal passages triggered by airborne allergens like house dust mites, mold spores, and pollen. In Thiruvananthapuram and coastal Kerala, the warm humidity creates an optimal environment for dust mites and indoor molds to flourish year-round.',
      'When an allergic individual inhales these particles, the immune system releases histamine and inflammatory mediators, producing classic symptoms: violent morning sneezing fits, a clear runny nose, itchy eyes, and chronic stuffiness that disrupts restful sleep.',
      'At Dr. Marissa\'s ENT Clinic in Pongumoodu, we focus on identifying your specific triggers and establishing a stepped, evidence-based management plan using modern, non-sedating medications and safe saline rinsing techniques rather than habit-forming decongestant sprays.',
    ],
    symptoms: [
      { icon: '🤧', title: 'Morning Sneezing Bouts', desc: 'Multiple consecutive sneezes upon waking or during floor sweeping, dusting, and bedmaking.' },
      { icon: '💧', title: 'Watery Runny Nose', desc: 'Clear, watery nasal discharge requiring frequent tissue use throughout the day.' },
      { icon: '👃', title: 'Nasal Congestion & Blockage', desc: 'Alternating or bilateral stuffiness that worsens at night and interferes with sleep.' },
      { icon: '👀', title: 'Itchy, Watery Eyes', desc: 'Redness, tearing, and persistent itching of the eyes and eyelids (allergic conjunctivitis).' },
      { icon: '👅', title: 'Itchy Palate or Throat', desc: 'An irritating tickling sensation inside the roof of the mouth or deep throat.' },
      { icon: '😴', title: 'Daytime Fatigue', desc: 'Tiredness and concentration difficulties resulting from chronic mouth breathing and fragmented sleep.' },
    ],
    whenToSeeDoctor: [
      'Nasal stuffiness and sneezing that persist for weeks without resolving like a standard cold.',
      'Development of facial pressure, headache, or cheek pain suggesting secondary sinus blockage.',
      'Over-the-counter nasal spray dependency (using decongestant drops like Otrivin for more than 5 days).',
      'Allergy symptoms causing heavy snoring, restless sleep, or daytime fatigue in adults or children.',
    ],
    consultationProcess: [
      { step: '01', title: 'Trigger & Environmental History', desc: 'Evaluating home, bedroom, and work environments, seasonal patterns, and family allergy tendencies.' },
      { step: '02', title: 'Anterior Rhinoscopy / Nasal Exam', desc: 'Inspecting nasal mucosa, checking for pale, swollen turbinates, clear secretions, and ruling out nasal polyps or deviated septum.' },
      { step: '03', title: 'Throat & Ear Check', desc: 'Checking for post-nasal drip streaks in the pharynx and examining eardrums for retracted middle ear fluid.' },
      { step: '04', title: 'Tailored Medical Management', desc: 'Prescribing non-sedating antihistamines and modern intranasal steroid sprays with clear step-down protocols.' },
      { step: '05', title: 'Environmental Control Guidance', desc: 'Providing practical, high-impact advice on dust mite mitigation, mattress encasings, and proper saline nasal rinsing.' },
    ],
    faqs: [
      { q: 'Can allergic rhinitis be completely cured?', a: 'Allergic rhinitis cannot be permanently eliminated because your immune tendency remains, but symptoms can be effectively controlled so that they no longer disrupt your daily life or sleep.' },
      { q: 'Are steroid nasal sprays safe for ongoing use?', a: 'Modern intranasal corticosteroid sprays act locally in the nasal mucosa with minimal absorption into the bloodstream. When used correctly under medical supervision, they are very safe for ongoing maintenance.' },
      { q: 'What is the difference between a cold and allergic rhinitis?', a: 'A viral cold lasts 7–10 days, often brings mild body aches or low fever, and produces thicker mucus. Allergic rhinitis lasts weeks, produces watery mucus, causes intense itching, and has no fever.' },
      { q: 'Why do my allergies worsen during the Kerala monsoon?', a: 'Increased dampness and humidity promote indoor mold proliferation and dust mite multiplication, two of the most potent triggers in our coastal climate.' },
      { q: 'How does a daily saline rinse help?', a: 'Saline irrigation physically washes away trapped dust, pollen, and inflammatory secretions from the nasal lining, reducing swelling and helping prescribed sprays work more effectively.' },
    ],
    relatedSlugs: ['sinusitis', 'nasal-polyps', 'pediatric-ent', 'tonsillitis'],
  },

  // 8. Nasal Polyps (New)
  {
    slug: 'nasal-polyps',
    name: 'Nasal Polyps Evaluation & Management',
    shortName: 'Nasal Polyps',
    seoTitle: 'Nasal Polyps Treatment in Thiruvananthapuram | Dr. Marissa Mathew',
    seoDescription: 'Thorough evaluation and non-surgical/pre-surgical management of nasal polyps in Pongumoodu, Thiruvananthapuram with ENT specialist Dr. Marissa Mathew.',
    heroLine: 'Struggling with chronic nasal blockage, facial pressure, and loss of smell? Compassionate evaluation and medical management in Thiruvananthapuram.',
    icon: 'Microscope',
    overview: [
      'Nasal polyps are soft, non-cancerous (benign) teardrop-shaped growths that develop in the lining of your nasal passages or sinuses. They often hang down like peeled grapes from the sinus openings into the nasal cavity, arising from chronic, persistent inflammation.',
      'Small nasal polyps may cause no noticeable symptoms. However, as they expand or form clusters, they obstruct the nasal airway and prevent normal sinus drainage, causing patients to feel as though their nose is permanently stuffed with cotton, accompanied by marked loss of smell (anosmia).',
      'At Dr. Marissa\'s ENT Clinic in Pongumoodu, Thiruvananthapuram, we examine the nasal airway thoroughly to assess the extent of polypoid tissue and rule out other causes. Many early or moderate polyps respond well to targeted medical therapies, including nasal steroid sprays and saline irrigations.',
    ],
    symptoms: [
      { icon: '👃', title: 'Chronic Nasal Obstruction', desc: 'Persistent blockage in both nostrils that does not clear with blowing your nose.' },
      { icon: '👃', title: 'Loss of Smell (Anosmia)', desc: 'Gradual or complete inability to perceive ambient aromas, food smells, or fragrances.' },
      { icon: '👅', title: 'Reduced Taste Sensation', desc: 'Food tasting bland due to the intimate connection between olfaction and taste perception.' },
      { icon: '💧', title: 'Persistent Post-Nasal Drip', desc: 'Constant mucus trickling down the back of the throat triggering frequent throat clearing.' },
      { icon: '🤕', title: 'Facial Pressure or Fullness', desc: 'A heavy, dull sensation across the forehead, bridge of the nose, and cheeks.' },
      { icon: '😴', title: 'Snoring & Mouth Breathing', desc: 'Breathing heavily through the mouth at night due to blocked nasal airways.' },
    ],
    whenToSeeDoctor: [
      'Nasal congestion lasting months that fails to respond to common allergy or cold medications.',
      'One-sided (unilateral) nasal blockage (requires immediate ENT evaluation to rule out other nasal lesions).',
      'Recurrent nosebleeds accompanying nasal obstruction.',
      'URGENT: Any vision changes, eye swelling, severe forehead headache, or high fever requires immediate hospital casualty care.',
    ],
    consultationProcess: [
      { step: '01', title: 'Clinical & Asthma History', desc: 'Evaluating symptom onset, history of asthma, aspirin sensitivities (Samter\'s triad), and prior sinus treatments.' },
      { step: '02', title: 'Nasal Examination', desc: 'Directly visualizing the nasal cavities using medical specula and illumination to identify polyps, mucosal swelling, or structural deviation.' },
      { step: '03', title: 'Differential Assessment', desc: 'Confirming whether obstruction is caused by bilateral polyps, inferior turbinate enlargement, or a deviated nasal septum.' },
      { step: '04', title: 'Targeted Medical Management', desc: 'Prescribing evidence-based intranasal steroid sprays, saline irrigation protocols, and medical courses when indicated.' },
      { step: '05', title: 'Surgical Referral & Guidance', desc: 'If polyps severely obstruct the airway or fail to improve with medical therapy, providing comprehensive counseling on Functional Endoscopic Sinus Surgery (FESS).' },
    ],
    faqs: [
      { q: 'Are nasal polyps cancerous?', a: 'No. Typical nasal polyps are completely benign, non-cancerous inflammatory growths. However, any unilateral (one-sided) nasal growth must always be examined by an ENT specialist to confirm its benign nature.' },
      { q: 'Can nasal polyps be treated without surgery?', a: 'Yes. Many small-to-moderate polyps shrink significantly with consistent use of prescribed intranasal steroid sprays and saline rinses. Surgery is considered when polyps cause severe obstruction or do not respond to medical therapy.' },
      { q: 'Will my sense of smell return after treatment?', a: 'In many patients, as inflammation subsides and polyps shrink—allowing airflow to reach the olfactory nerve at the top of the nasal cavity—the sense of smell noticeably improves.' },
      { q: 'Why do nasal polyps recur?', a: 'Because polyps are driven by underlying chronic inflammation (such as allergy or asthma), they can recur over time. Long-term maintenance with saline rinsing and topical sprays helps minimize recurrence.' },
      { q: 'Can forceful nose blowing remove polyps?', a: 'No. Polyps are attached to the lining of the sinuses and cannot be blown out. Forceful nose blowing can irritate the nasal lining and cause bleeding.' },
    ],
    relatedSlugs: ['sinusitis', 'allergic-rhinitis', 'hearing-loss', 'tonsillitis'],
  },

  // 9. Tinnitus (New)
  {
    slug: 'tinnitus',
    name: 'Tinnitus Evaluation & Management',
    shortName: 'Tinnitus Management',
    seoTitle: 'Tinnitus Management in Thiruvananthapuram | Dr. Marissa Mathew',
    seoDescription: 'Ringing, buzzing, or clicking in your ears? Get a compassionate ENT evaluation in Pongumoodu, Thiruvananthapuram by Dr. Marissa Mathew. Book on WhatsApp.',
    heroLine: 'Constant ringing, buzzing, or hissing in your ears? You don\'t have to navigate it alone. Compassionate diagnosis and management strategies in Thiruvananthapuram.',
    icon: 'Headphones',
    overview: [
      'Tinnitus is the perception of sound when no external acoustic source is present. Patients describe it in many ways: a high-pitched ring, buzzing, humming, hissing, whistling, or a rhythmic whooshing. Tinnitus is not a disease itself, but rather a symptom arising from changes in the auditory system.',
      'For many individuals, tinnitus is most noticeable in quiet rooms or at bedtime, frequently causing sleep disturbances, anxiety, and frustration. While there is no universal "magic pill" that eliminates all tinnitus instantly, a thorough ENT evaluation can uncover treatable underlying causes and provide proven strategies to reduce perception.',
      'At Dr. Marissa\'s ENT Clinic in Pongumoodu, Thiruvananthapuram, we perform thorough examinations to rule out middle ear conditions, vascular causes, or impacted wax, working with you on personalized sound management and lifestyle adjustments that restore comfort.',
    ],
    symptoms: [
      { icon: '🔔', title: 'Persistent Ringing or Buzzing', desc: 'Hearing a steady high-pitched tone, hum, or cricket-like noise in one or both ears.' },
      { icon: '🌊', title: 'Pulsatile Tinnitus', desc: 'A rhythmic whooshing or thumping sound that beats in synchrony with your heartbeat.' },
      { icon: '🔇', title: 'Associated Hearing Change', desc: 'Noticing that speech sounds slightly muffled alongside the ear noise.' },
      { icon: '😴', title: 'Sleep Difficulties', desc: 'The sound becoming prominent and intrusive in a quiet bedroom, delaying sleep.' },
      { icon: '🤯', title: 'Concentration Struggles', desc: 'Feeling distracted at work or while reading due to the continuous auditory awareness.' },
      { icon: '😣', title: 'Sound Sensitivity (Hyperacusis)', desc: 'Everyday normal sounds feeling uncomfortably loud or harsh to the ears.' },
    ],
    whenToSeeDoctor: [
      'Tinnitus that develops exclusively in one ear (unilateral tinnitus requires prompt ENT evaluation).',
      'Pulsatile tinnitus (hearing your heartbeat in the ear warrants vascular and otologic examination).',
      'Tinnitus accompanied by sudden hearing drop or dizziness/vertigo.',
      'Tinnitus causing significant sleep disruption, anxiety, or emotional distress.',
    ],
    consultationProcess: [
      { step: '01', title: 'Symptom Mapping & History', desc: 'Documenting the sound\'s pitch, rhythm, onset, noise exposure history, current medications, and impact on sleep.' },
      { step: '02', title: 'Otoscopic Examination', desc: 'Inspecting the ear canal for impacted cerumen (wax), stray hairs touching the eardrum, or middle ear infection/effusion.' },
      { step: '03', title: 'Head, Neck & TMJ Assessment', desc: 'Checking jaw joint movement and neck muscle tension that can modulate somatic tinnitus.' },
      { step: '04', title: 'Reversible Cause Treatment', desc: 'Safely removing wax with microsuction or treating middle ear inflammation if identified as the primary trigger.' },
      { step: '05', title: 'Evidence-Based Management Plan', desc: 'Counseling on sound enrichment techniques, ambient noise strategies, sleep hygiene, and recommending formal audiometry when indicated.' },
    ],
    faqs: [
      { q: 'Can ear wax cause tinnitus?', a: 'Yes, very frequently. When ear wax becomes deeply impacted against the eardrum, it can alter sound transmission and trigger ringing. Removing the wax gently with microsuction often resolves the noise.' },
      { q: 'Is there a medication or surgery that cures tinnitus?', a: 'There is no single pill or surgery that cures all tinnitus. Treatment focuses on identifying treatable underlying conditions (like wax or middle ear disease) and utilizing sound therapy and counseling to help the brain filter out the noise.' },
      { q: 'Does stress make tinnitus louder?', a: 'Yes. The auditory pathways in the brain are closely linked to the emotional nervous system. Stress, anxiety, fatigue, and lack of sleep can amplify how loudly you perceive the sound.' },
      { q: 'Is pulsatile tinnitus dangerous?', a: 'Pulsatile tinnitus—where the noise matches your heartbeat—can be linked to blood flow changes near the ear. It should always be evaluated by an ENT specialist to check for specific vascular or middle ear causes.' },
      { q: 'Can headphone use cause tinnitus?', a: 'Listening to personal audio devices at high volumes can damage the delicate sensory cells of the inner ear, which frequently triggers or worsens tinnitus. Keeping volumes moderate helps protect your hearing.' },
    ],
    relatedSlugs: ['hearing-loss', 'ear-wax-removal', 'vertigo', 'ear-infection'],
  },

  // 10. Pediatric ENT (New)
  {
    slug: 'pediatric-ent',
    name: 'Pediatric ENT Specialist Services',
    shortName: 'Pediatric ENT',
    seoTitle: 'Pediatric ENT Specialist in Thiruvananthapuram | Dr. Marissa Mathew',
    seoDescription: 'Child-friendly care for enlarged tonsils, ear infections, adenoid issues, and mouth breathing in Pongumoodu, Thiruvananthapuram by Dr. Marissa Mathew.',
    heroLine: 'Dedicated, gentle ENT care tailored for infants, toddlers, and young children. Creating a calm, reassuring experience for your family in Thiruvananthapuram.',
    icon: 'Baby',
    overview: [
      'Children are not simply small adults—their anatomical structures, immune defenses, and communication needs are uniquely different. Ear, nose, and throat complaints account for a substantial percentage of all childhood clinic visits, including recurrent earaches, chronic mouth breathing, enlarged adenoids, persistent snoring, and frequent tonsillitis.',
      'Because a child may feel apprehensive in a clinical setting, pediatric ENT care requires patience, a gentle touch, and an unhurried atmosphere. At Dr. Marissa\'s ENT Clinic in Pongumoodu, Thiruvananthapuram, our priority is putting young patients and their parents completely at ease.',
      'We believe in conservative, evidence-based management. While childhood tonsil or adenoid enlargement is common, surgery is only indicated when strict clinical criteria are met. In the vast majority of cases, medical treatment, allergen control, and watchful waiting yield excellent outcomes.',
    ],
    symptoms: [
      { icon: '😴', title: 'Heavy Snoring & Mouth Breathing', desc: 'Sleeping with an open mouth, heavy snoring, or brief pauses in breathing during sleep.' },
      { icon: '👂', title: 'Recurrent Ear Tugging or Pain', desc: 'Frequently pulling at the ears, particularly following a cold or cough.' },
      { icon: '🗣️', title: 'Inattention or Speech Delay', desc: 'Difficulty hearing, delayed response to names, or high TV volume caused by middle ear fluid (glue ear).' },
      { icon: '👃', title: 'Chronic Runny or Stuffy Nose', desc: 'Persistent nasal discharge or congestion lasting weeks without full recovery.' },
      { icon: '🤒', title: 'Frequent Tonsillitis Episodes', desc: 'Repeated high fevers, painful swallowing, and missed school days from throat infections.' },
      { icon: '🦷', title: 'Mouth Breathing Habit', desc: 'Habitually breathing through the mouth during daytime play, leading to dry lips and dental crowding.' },
    ],
    whenToSeeDoctor: [
      'Breathing pauses or gasping during sleep (signs of obstructive sleep apnea in children).',
      'Recurrent severe ear infections (3 or more distinct episodes in 6 months, or 4 within a single year).',
      'Suspected foreign body inserted into the ear or nose (button batteries require immediate emergency hospital removal).',
      'Speech delay combined with poor response to sounds, suggesting chronic middle ear fluid.',
    ],
    consultationProcess: [
      { step: '01', title: 'Child-Friendly Welcome', desc: 'Allowing your child to settle comfortably on a parent\'s lap, establishing rapport and trust before beginning the checkup.' },
      { step: '02', title: 'Gentle Otoscopy', desc: 'Checking ear canals and eardrums using small, gentle specula to detect fluid, wax, or infection without causing distress.' },
      { step: '03', title: 'Nasal & Throat Inspection', desc: 'Carefully checking tonsils, pharynx, and nasal airways for inflammation, enlargement, or discharge.' },
      { step: '04', title: 'Clear Parent Counseling', desc: 'Explaining the underlying reason for your child\'s symptoms in plain, compassionate language, outlining clear options.' },
      { step: '05', title: 'Conservative Care First', desc: 'Focusing on appropriate medications, nasal hygiene, and scheduled follow-ups, with surgery discussed only when genuinely necessary.' },
    ],
    faqs: [
      { q: 'Does my child automatically need surgery for enlarged tonsils or adenoids?', a: 'No. Enlarged tonsils and adenoids are a normal part of the immune system in growing children and frequently shrink as the child grows older. Surgery (tonsillectomy/adenoidectomy) is reserved only for children with severe obstructive sleep apnea or recurrent, debilitating infections.' },
      { q: 'What is "glue ear"?', a: 'Glue ear (otitis media with effusion) occurs when thick, sticky fluid gathers behind the eardrum after a cold or ear infection. It can cause temporary muffled hearing and inattention in school. Most cases resolve with medical management and observation.' },
      { q: 'How can I tell if my toddler has an ear infection if they cannot speak?', a: 'Watch for irritability, unexplained crying (especially when lying down), pulling at one or both ears, sudden refusal to eat, and fever following a recent cold.' },
      { q: 'Is it safe to clean a child\'s ears with cotton buds?', a: 'Absolutely not. Cotton buds can easily push wax deeper into the tiny ear canal, scratch the delicate canal skin, or even rupture the eardrum if the child moves unexpectedly. Only clean the outer ear with a soft damp cloth.' },
      { q: 'Why does my child breathe through their mouth while sleeping?', a: 'Chronic mouth breathing is usually caused by physical obstruction of the nasal passages—most commonly due to enlarged adenoid tissue, allergic rhinitis, or swollen turbinates. An ENT checkup can pinpoint the exact cause.' },
    ],
    relatedSlugs: ['ear-infection', 'tonsillitis', 'allergic-rhinitis', 'hearing-loss'],
  },
];

export function getServiceBySlug(slug: string): ServiceItem | undefined {
  return SERVICES.find((s) => s.slug === slug);
}

export function getAllServiceSlugs(): string[] {
  return SERVICES.map((s) => s.slug);
}

