import React, { useEffect } from 'react'
import './ServiceDetail.css'

const serviceDetails = [
  {
    slug: 'general-medicine',
    icon: 'fa-stethoscope',
    title: 'General Medicine',
    tagline: 'Patient-centred care — education, research & clinical excellence',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&q=80',
      'https://images.unsplash.com/photo-1666214280557-f1b5022eb634?w=600&q=80',
      'https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=600&q=80',
    ],
    longDesc: 'In alignment with the institution\'s vision, we place equal emphasis on education, research, and patient care. The Department of General Medicine provides comprehensive, patient-centred care for a wide spectrum of acute and chronic medical illnesses, with a strong focus on conditions commonly encountered in tropical and rural settings.\n\nWe manage a large number of tropical infectious diseases, including malaria, dengue, scrub typhus, and tuberculosis, many of which present with severe complications such as acute respiratory distress syndrome (ARDS). These critically ill patients are managed effectively with timely diagnosis, close monitoring, and adherence to standard treatment protocols.\n\nOur department also manages a broad spectrum of medical conditions — ranging from common illnesses to toxicological emergencies and complex multisystem disorders that span multiple specialties, such as systemic lupus erythematosus. We provide extensive care for chronic non-communicable diseases, including diabetes mellitus and diabetic ketoacidosis (DKA), heart failure, chronic kidney disease (CKD), hypertension, stroke, chronic obstructive pulmonary disease (COPD) with type 2 respiratory failure, and other complex medical conditions. We have significant experience in managing sickle cell disease (particularly recurrent pain crises), liver abscesses, and chronic liver disease.\n\nCare in our department is guided strictly by evidence-based medicine, while remaining affordable and accessible, as the majority of our patients come from economically disadvantaged backgrounds. We emphasize a holistic approach to treatment, addressing medical, nutritional, psychological, and social aspects of care. The department has recently introduced diagnostic and therapeutic endoscopy services at an affordable cost, performing screening for esophageal varices, evaluation of hematemesis, and endoscopic assessment of upper gastrointestinal disorders.',
    features: [
      'Infectious disease management — malaria, dengue, scrub typhus, tuberculosis & ARDS',
      'Non-communicable disease care — diabetes, DKA, heart failure, CKD, hypertension, stroke, COPD',
      'Sickle cell disease management — recurrent pain crises & comprehensive follow-up',
      'Diagnostic & therapeutic endoscopy — esophageal varices, hematemesis, upper GI disorders',
      'Health check-ups & preventive screenings',
      'Acute & chronic cardiac care, toxicological emergencies & multisystem disorders',
    ],
    stats: { doctors: 28, patients: '45K+' },
    treatments: 'Tropical infectious diseases, Diabetes & DKA, Heart failure & hypertension, Stroke & COPD, Chronic kidney disease, Sickle cell disease, Liver abscess & chronic liver disease, Endoscopic evaluation & GI disorders, Medical emergencies, Health check-ups & preventive care',
  },
  {
    slug: 'pediatrics',
    icon: 'fa-baby',
    title: 'Pediatrics',
    tagline: 'One of the few neonatal nurseries in South Orissa',
    image: '/photos/pediatrics/IMG_20260223_083445236.jpg',
    images: [
      '/photos/pediatrics/IMG_20260223_083445236.jpg',
      'https://images.unsplash.com/photo-1498654896293-37aacf113fd9?w=600&q=80',
      'https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=600&q=80',
    ],
    longDesc: 'The nursery, being one of the few in South Orissa, plays a vital role in saving newborn lives. Innumerable neonates with birth asphyxias, low birth weight, sepsis, and preterms throng for nursery care, and our team works tirelessly to provide the best possible care. Children below 12 are seen in the paediatric OPD, where some of the common conditions treated include malaria, lower respiratory tract infections, acute gastroenteritis, nephrotic syndrome, and tuberculosis. Around 6,000 children are seen on an OPD basis and approximately 1,000 admissions take place every year.',
    features: [
      'Neonatal care — birth asphyxias, low birth weight, sepsis & preterm management',
      'Respiratory infections & lower respiratory tract disease management',
      'Acute febrile illness, malaria & vector-borne disorder treatment',
      'Communicable diseases — tuberculosis, meningitis & gastroenteritis',
      'Juvenile diabetes care & allergy management',
      'Immunizations — BCG, OPV & Hepatitis B',
    ],
    stats: { doctors: 22, patients: '6,000+ OPD/yr' },
    treatments: 'Neonatal intensive care, Respiratory infections, Malaria & vector-borne diseases, Acute gastroenteritis, Nephrotic syndrome, Tuberculosis, Meningitis, Juvenile diabetes, Allergies, Paediatric emergencies, Immunizations (BCG, OPV, Hep B)',
  },
  {
    slug: 'maternity',
    icon: 'fa-baby-carriage',
    title: 'Maternity & Obstetrics',
    tagline: '2,700 deliveries & 900 gynaecological surgeries per year',
    image: 'https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?w=600&q=80',
      'https://images.unsplash.com/photo-1514125669375-59ee3985d08b?w=600&q=80',
      'https://images.unsplash.com/photo-1551927338-6182e1b902dc?w=600&q=80',
    ],
    longDesc: 'Around 2,700 deliveries are conducted per year. Being a referral hospital for complicated cases from two districts, 35% of these are abnormal deliveries, with a caesarean rate of 23%. The hospital is accredited by the National Rural Health Mission for the JSY (Janani Suraksha Yojana) programme. Around 900 gynaecological surgeries are performed each year, including total abdominal and vaginal hysterectomies, ovariotomies, and explorative laparotomies, along with approximately 270 sterilizations.',
    features: [
      'Routine antenatal, intrapartum & postnatal care',
      'Normal deliveries, instrumental & vacuum deliveries',
      'Caesarean sections (23% rate) & high-risk pregnancy management',
      'Gynaecological surgeries — abdominal & vaginal hysterectomies, ovariotomies',
      'Explorative laparotomies & sterilization procedures (approx. 270/yr)',
      'Genetic counselling & JSY programme accreditation (NRHM)',
    ],
    stats: { doctors: 16, patients: '2,700+ deliveries/yr' },
    treatments: 'Routine antenatal care, Normal deliveries, Instrumental & vacuum deliveries, Caesarean sections, High-risk pregnancy management, Hysterectomy, Ovariotomy, Explorative laparotomy, Sterilization, Genetic counselling, Postnatal care',
  },
  {
    slug: 'blood-bank',
    icon: 'fa-droplet',
    title: 'Blood Bank',
    tagline: 'Safe blood, safe transfusions — saving lives every day',
    image: 'https://images.unsplash.com/photo-1615461066841-6116e61059f4?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1615461066841-6116e61059f4?w=600&q=80',
      'https://images.unsplash.com/photo-1581595219747-8f5a12e3ae3e?w=600&q=80',
      'https://images.unsplash.com/photo-1579154204601-01588f351e67?w=600&q=80',
    ],
    longDesc: 'The Blood Bank at Christian Hospital operates round the clock, ensuring a safe and adequate supply of blood and blood products for all patients in need. From emergency trauma cases to planned surgeries, maternity care, and chronic disease management — our blood bank plays a critical role in saving lives.\n\nAll donated blood is thoroughly screened for transfusion-transmissible infections including HIV, Hepatitis B & C, syphilis, and malaria, following strict national guidelines. We provide whole blood, packed red cells, fresh frozen plasma, platelet concentrates, and cryoprecipitate. Our team of trained technicians and transfusion medicine specialists ensures every unit is safe, compatible, and ready when needed.',
    features: [
      '24/7 blood bank services for emergencies & routine needs',
      'Comprehensive screening for transfusion-transmissible infections',
      'Whole blood & blood component separation — PRBC, FFP, platelets & cryoprecipitate',
      'Cross-matching & compatibility testing',
      'Voluntary blood donation drives & community awareness',
      'Safe storage & inventory management with cold chain maintenance',
    ],
    stats: { doctors: 4, patients: '5K+ units/yr' },
    treatments: 'Whole blood transfusion, Packed red cells, Fresh frozen plasma, Platelet transfusion, Cryoprecipitate, Emergency transfusion, Pre-surgical blood ordering, Exchange transfusion, Anaemia management, Coagulation disorder support',
  },
  {
    slug: 'radiology',
    icon: 'fa-x-ray',
    title: 'Radiology & Imaging',
    tagline: 'Precision diagnostics through advanced imaging',
    image: 'https://images.unsplash.com/photo-1579154204601-01588f351e67?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1579154204601-01588f351e67?w=600&q=80',
      'https://images.unsplash.com/photo-1629897045552-5c0e8b60e8f8?w=600&q=80',
      'https://images.unsplash.com/photo-1581595219747-8f5a12e3ae3e?w=600&q=80',
    ],
    longDesc: 'Our Radiology & Imaging department features the latest diagnostic imaging technology to provide accurate, timely results. Our board-certified radiologists work closely with referring physicians to ensure precise diagnosis and treatment planning.',
    features: [
      'Magnetic Resonance Imaging (MRI)',
      'Computed Tomography (CT) scans',
      'Digital X-ray & fluoroscopy',
      'Ultrasound & vascular imaging',
      'Mammography & breast imaging',
      'Interventional radiology procedures',
    ],
    stats: { doctors: 12, patients: '40K+ exams/yr' },
    treatments: 'Diagnostic imaging, Cancer screening, Fracture assessment, Vascular imaging, Biopsy guidance, Prenatal ultrasound, Cardiac imaging',
  },
  {
    slug: 'laboratory',
    icon: 'fa-flask',
    title: 'Laboratory Services',
    tagline: 'Accurate diagnostics driving better outcomes',
    image: 'https://images.unsplash.com/photo-1579154204601-01588f351e67?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1579154204601-01588f351e67?w=600&q=80',
      'https://images.unsplash.com/photo-1581595219747-8f5a12e3ae3e?w=600&q=80',
      'https://images.unsplash.com/photo-1631815588090-d4bfec5b1ccb?w=600&q=80',
    ],
    longDesc: 'Our full-service clinical laboratory provides comprehensive diagnostic testing services with rapid turnaround times. Accredited by the College of American Pathologists, our laboratory plays a vital role in patient diagnosis, treatment monitoring, and preventive health screening.',
    features: [
      'Complete blood count & chemistry panels',
      'Microbiology & infectious disease testing',
      'Histopathology & cytology',
      'Blood bank & transfusion services',
      'Genetic & molecular diagnostics',
      'Point-of-care testing',
    ],
    stats: { doctors: 8, patients: '100K+ tests/yr' },
    treatments: 'Blood tests, Urinalysis, Tissue biopsy analysis, Infection screening, Genetic testing, Drug monitoring, Allergy testing, Hormone panels',
  },
  {
    slug: 'surgery',
    icon: 'fa-user-md',
    title: 'Surgery',
    tagline: 'Serving 9,000+ outpatients & 3,400 surgeries annually',
    image: 'https://images.unsplash.com/photo-1551601651-2a8555f1a0aa?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1551601651-2a8555f1a0aa?w=600&q=80',
      'https://images.unsplash.com/photo-1559757175-5700dde675bc?w=600&q=80',
      'https://images.unsplash.com/photo-1579154204601-01588f351e67?w=600&q=80',
    ],
    longDesc: 'With no other proper surgical or orthopaedic care facilities available within a radius of 200 km around the hospital, our surgical team works hard to cater to the needs of around 9,000 outpatients and 3,400 surgeries per year. Though elective surgeries form the bulk, emergencies like duodenal perforations, acute appendicitis, and acute trauma turn in at any time. Surgeries performed include hernia repair, cholecystectomies, pyelolithotomies, urethrolithotomies, cystolithotomies, and paediatric surgeries. We also have laparoscopic facilities. Orthopaedic management includes internal and external fixation, open reductions, and reduction POP. Anaesthesia forms the base in which all surgeries are carried out smoothly without causing any distress or inconvenience to the patient.',
    features: [
      'Open surgeries — hernia repair, cholecystectomies, appendicectomies & more',
      'Laparoscopic surgery — minimally invasive procedures with faster recovery',
      'GI Surgery & colorectal procedures',
      'Hepatobiliary surgery — pyelolithotomies, urethrolithotomies, cystolithotomies',
      'Orthopaedic management — internal/external fixation, open reductions, reduction POP',
      'Paediatric surgeries & emergency trauma care (duodenal perforations, acute trauma)',
    ],
    stats: { doctors: 20, patients: '3,400+ surgeries/yr' },
    treatments: 'Hernia repair, Cholecystectomy, Appendectomy, Pyelolithotomy, Urethrolithotomy, Cystolithotomy, Laparoscopic surgery, GI & colorectal surgery, Hepatobiliary surgery, Orthopaedic fixation & reductions, Paediatric surgery, Emergency trauma surgery',
  },
  {
    slug: 'ophthalmology',
    icon: 'fa-eye',
    title: 'Ophthalmology',
    tagline: 'Clear vision for a brighter future',
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&q=80',
      'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=600&q=80',
      'https://images.unsplash.com/photo-1559757175-5700dde675bc?w=600&q=80',
    ],
    longDesc: 'The Ophthalmology department provides complete eye care services, from routine vision exams to advanced surgical treatments. Our ophthalmologists are experts in diagnosing and treating a wide range of eye conditions using the latest technology and techniques.',
    features: [
      'Comprehensive eye examinations',
      'Cataract surgery with premium lenses',
      'Glaucoma diagnosis & management',
      'Retinal surgery & laser treatments',
      'Corneal transplantation',
      'Pediatric ophthalmology',
    ],
    stats: { doctors: 8, patients: '12K+' },
    treatments: 'Cataracts, Glaucoma, Macular degeneration, Diabetic retinopathy, Dry eye syndrome, Refractive errors, Retinal detachment, Corneal disorders',
  },
  {
    slug: 'dental',
    icon: 'fa-tooth',
    title: 'Dental Care',
    tagline: '1,100+ patients per year — restoring smiles, saving lives',
    image: 'https://images.unsplash.com/photo-1606811971618-4486d14f3f99?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1606811971618-4486d14f3f99?w=600&q=80',
      'https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=600&q=80',
      'https://images.unsplash.com/photo-1584515933487-779824d29309?w=600&q=80',
    ],
    longDesc: 'Over the years, the number of patients seeking dental treatment has been steadily increasing, with currently about 1,100 patients per year. Along with diagnosis, restorative, prophylactic, and surgical procedures, educating patients and their relatives on oral hygiene and care — and encouraging them to cease deleterious addictive habits such as chewing gutka, khaini, or bhang — has been adopted as a protocol in a bid to spread much-needed awareness. A fair number of cases of oral cancer also present to the OPD owing to the tobacco chewing habit rampant in this region among males and females alike. Services provided include diagnosis of oral lesions, conservative and restorative procedures for carious and fractured teeth, root canal treatment, scaling and polishing, removal partial dentures, and surgical and simple extractions.',
    features: [
      'Diagnosis of oral lesions & oral cancer screening',
      'Conservative & restorative procedures for carious & fractured teeth',
      'Root canal treatment',
      'Scaling, polishing & preventive prophylaxis',
      'Removal partial dentures & prosthetic care',
      'Surgical & simple extractions',
    ],
    stats: { doctors: 6, patients: '1,100+ patients/yr' },
    treatments: 'Oral cancer screening, Diagnosis of oral lesions, Conservative & restorative dentistry, Root canal treatment, Scaling & polishing, Removal partial dentures, Surgical & simple extractions, Tobacco cessation counselling, Oral hygiene education',
  },
  {
    slug: 'pharmacy',
    icon: 'fa-prescription',
    title: 'Pharmacy',
    tagline: 'Expert medication management & counseling',
    image: 'https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=600&q=80',
      'https://images.unsplash.com/photo-1579154204601-01588f351e67?w=600&q=80',
      'https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=600&q=80',
    ],
    longDesc: 'Our in-hospital Pharmacy provides convenient access to prescribed medications, clinical consultations, and comprehensive medication management. Our team of clinical pharmacists works closely with physicians to ensure safe, effective drug therapy for every patient.',
    features: [
      'In-patient & outpatient dispensing',
      'Clinical medication reviews',
      'Generic & specialty medications',
      'Compounding services',
      'Medication therapy management',
      'Drug interaction screening',
    ],
    stats: { doctors: 5, patients: '80K+ prescriptions/yr' },
    treatments: 'Prescription medications, Over-the-counter advice, Immunizations, Medication counseling, Chronic disease medication management, Compounded medications',
  },
  {
    slug: 'endoscopy',
    icon: 'fa-microscope',
    title: 'Endoscopy',
    tagline: 'Minimally invasive diagnosis & treatment',
    image: '/photos/endoscopy/IMG_20260625_143607798.jpg',
    images: [
      '/photos/endoscopy/IMG_20260625_143607798.jpg',
      'https://images.unsplash.com/photo-1559757175-5700dde675bc?w=600&q=80',
      'https://images.unsplash.com/photo-1579154204601-01588f351e67?w=600&q=80',
    ],
    longDesc: 'Our Endoscopy unit provides advanced minimally invasive diagnostic and therapeutic procedures for gastrointestinal conditions. Using state-of-the-art endoscopic equipment, our skilled gastroenterologists diagnose and treat a wide range of digestive system disorders with precision and patient comfort.',
    features: [
      'Upper GI endoscopy (gastroscopy)',
      'Colonoscopy & sigmoidoscopy',
      'Endoscopic biopsy & polypectomy',
      'ERCP (bile duct & pancreatic procedures)',
      'Capsule endoscopy',
      'Bronchoscopy',
    ],
    stats: { doctors: 6, patients: '3K+' },
    treatments: 'Acid reflux, Stomach ulcers, Colon polyps, Irritable bowel syndrome, Celiac disease, GI bleeding, Barrett\'s esophagus, Inflammatory bowel disease',
  },
  {
    slug: 'anaesthesiology',
    icon: 'fa-syringe',
    title: 'Anaesthesiology',
    tagline: 'Safe anaesthesia care for every surgery',
    image: 'https://images.unsplash.com/photo-1551601651-2a8555f1a0aa?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1551601651-2a8555f1a0aa?w=600&q=80',
      'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&q=80',
      'https://images.unsplash.com/photo-1559757175-5700dde675bc?w=600&q=80',
    ],
    longDesc: 'The Anaesthesia department provides anaesthesia care for major and minor surgeries and handles general, spinal, local, and regional anaesthesia. Preanaesthetic evaluation is also done by the department regularly, ensuring patient safety and comfort for every procedure.',
    features: [
      'Anaesthesia for routine & emergency surgeries',
      'General, spinal, local & regional anaesthesia',
      'Preanaesthetic evaluation & assessment',
      'Therapeutic sedation services',
      'Labour pain management',
      'Intraoperative monitoring & patient safety',
    ],
    stats: { doctors: 12, patients: '3,400+ surgeries/yr' },
    treatments: 'General anaesthesia, Spinal anaesthesia, Regional blocks, Local anaesthesia, Therapeutic sedation, Labour analgesia, Preanaesthetic evaluation, Emergency anaesthesia',
  },
  {
    slug: 'community-health',
    icon: 'fa-hand-holding-heart',
    title: 'Community Health',
    tagline: 'Reaching villages, transforming lives',
    image: '/photos/community/image.jpg',
    images: [
      '/photos/community/image.jpg',
      '/photos/community/image2.jpg',
      '/photos/community/image3.jpeg',
    ],
    longDesc: 'The Community Health Department of CHB serves as a Window for the institution — enabling those of us inside to understand and relate to the villages around us, and also creating a bridge for the people in those villages to engage with CHB. The work of the Department is called MITRA (Madsen Institute for Tribal & Rural Advancement) and functions in 3 units.',
    features: [
      'MITRA Project: Serving 12,700 people in 53 tribal villages through 3 Cluster Teams, 2 Village Health Centers, and 75 village volunteers',
      'Mobile Clinic visits to every village every month with focused initiatives for Malaria, Nutrition, MCH, Sickle Cell Anaemia, Hypothyroidism & elderly care',
      'MITRA Education: Milah Kahin Basa preschool programme, AQTE (Add Quality To Education) in village primary schools, and Summer Coaching Camp for 10th standard students',
      'MITRA Residential School, Kachapaju: A residential adivasi school with 155 children from Grade 1 to 5, providing innovative, quality education',
      'MITRA Training & Resource Unit: Training programmes, Consultancy services and relevant Publications',
      'Pursuing the dream of Health, Education, Economic Security and Social Empowerment for all',
    ],
    stats: { doctors: 20, patients: '50K+' },
    treatments: 'MITRA Project, Mobile health clinics, Village health centers, Community health education, Malaria & nutrition initiatives, MCH & sickle cell care, Preschool & school education programmes, Training & consultancy',
  },
  {
    slug: 'nursing-care',
    icon: 'fa-user-nurse',
    title: 'Nursing Care',
    tagline: 'The finest of the Fine Arts — compassionate care for body & soul',
    image: 'https://images.unsplash.com/photo-1584515933487-779824d29309?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1584515933487-779824d29309?w=600&q=80',
      'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&q=80',
      'https://images.unsplash.com/photo-1559757175-5700dde675bc?w=600&q=80',
    ],
    longDesc: 'Nursing is an art: and if it is to be made an art, it requires an exclusive devotion as hard a preparation as any painter\'s or sculptor\'s work; for what is the having to do with dead canvas or dead marble, compared with having to do with the living body, the temple of God\'s spirit? It is one of the Fine Arts: I had almost said, the finest of Fine Arts. — Florence Nightingale. At CHB, our nursing team embodies this philosophy, providing holistic, compassionate care to every patient who walks through our doors. From bedside care and medication administration to patient education and emotional support, our nurses are the heart of the hospital.',
    features: [
      'Bedside nursing care & medication administration',
      'Patient monitoring & vital sign assessment',
      'Wound care & post-surgical nursing',
      'Patient & family health education',
      'Emergency & critical care nursing',
      'Compassionate end-of-life & palliative care',
    ],
    stats: { doctors: 150, patients: 'All patients' },
    treatments: 'Bedside nursing, Medication management, Wound care, Post-surgical care, Critical care nursing, Patient education, Palliative care, Health counselling',
  },
  {
    slug: 'it-services',
    icon: 'fa-laptop-code',
    title: 'IT Services',
    tagline: 'Powering healthcare through innovative technology',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&q=80',
      'https://images.unsplash.com/photo-1531482615713-2afd69097998?w=600&q=80',
      'https://images.unsplash.com/photo-1573164713988-8665fc963095?w=600&q=80',
    ],
    longDesc: 'The IT Services department at Christian Hospital ensures that every aspect of our technology infrastructure runs reliably and securely. From managing the Hospital Information System (HIS) and electronic health records to maintaining network connectivity, cybersecurity, and digital communication tools — our team works tirelessly behind the scenes to empower clinicians and staff with the technology they need to deliver exceptional patient care.\n\nWe provide 24/7 technical support across the entire campus, manage software and hardware lifecycles, and continuously evaluate emerging digital health solutions to improve clinical workflows, data management, and patient outcomes. Our team also develops and maintains the hospital\'s website, patient portal, and internal communication platforms.',
    features: [
      'Hospital Information System (HIS) management & administration',
      'Network infrastructure — LAN, Wi-Fi, VPN & data center operations',
      'Cybersecurity — firewall management, data protection & compliance',
      'Hardware lifecycle management — desktops, servers, printers & medical peripherals',
      '24/7 IT helpdesk & technical support across the hospital campus',
      'Digital health solutions — telemedicine platforms, patient portal & mobile apps',
    ],
    stats: { doctors: 12, patients: '24/7 Support' },
    treatments: 'Hospital Information System (HIS), Network infrastructure management, Cybersecurity & data protection, Hardware & software support, Telemedicine platforms, Website & patient portal management, Data backup & disaster recovery, IT training & digital literacy',
  },
]

function getServiceByTitle(title) {
  return serviceDetails.find(s => s.title === title)
}

function ServiceDetail({ service, onClose }) {
  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = ''
    }
  }, [])

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [onClose])

  if (!service) return null

  const detail = getServiceByTitle(service.title)
  if (!detail) return null

  return (
    <div className="service-overlay" onClick={onClose}>
      <div className="service-modal" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose} aria-label="Close modal">
          <i className="fas fa-times" />
        </button>

        {/* Hero Image */}
        <div className="modal-hero">
          <img src={detail.image} alt={detail.title} />
          <div className="modal-hero-overlay" />
          <div className="modal-hero-content">
            <div className="modal-hero-icon">
              <i className={`fas ${detail.icon}`} />
            </div>
            <h2 className="modal-hero-title">{detail.title}</h2>
            <p className="modal-hero-tagline">{detail.tagline}</p>
          </div>
        </div>

        <div className="modal-body">
          {/* Stats Bar */}
          <div className="modal-stats">
            <div className="modal-stat">
              <span className="modal-stat-number">{detail.stats.doctors}</span>
              <span className="modal-stat-label">Specialists</span>
            </div>
            <div className="modal-stat">
              <span className="modal-stat-number">{detail.stats.patients}</span>
              <span className="modal-stat-label">Patients Treated</span>
            </div>
          </div>

          {/* Description */}
          <div className="modal-section">
            <h3 className="modal-section-title">Overview</h3>
            <p className="modal-text">{detail.longDesc}</p>
          </div>

          {/* Image Gallery */}
          <div className="modal-gallery">
            {detail.images.map((img, i) => (
              <div key={i} className="modal-gallery-img">
                <img src={img} alt={`${detail.title} - Image ${i + 1}`} loading="lazy" />
              </div>
            ))}
          </div>

          {/* Features */}
          <div className="modal-section">
            <h3 className="modal-section-title">What We Offer</h3>
            <div className="modal-features">
              {detail.features.map((feature, i) => (
                <div key={i} className="modal-feature">
                  <i className="fas fa-check-circle" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Treatments */}
          <div className="modal-section">
            <h3 className="modal-section-title">Conditions We Treat</h3>
            <div className="modal-treatments">
              {detail.treatments.split(', ').map((treatment, i) => (
                <span key={i} className="modal-treatment-tag">{treatment}</span>
              ))}
            </div>
          </div>


        </div>
      </div>
    </div>
  )
}
export default ServiceDetail
