(() => {
  const localeKey = 'site-locale';
  const allowedLocales = new Set(['en', 'es']);
  const translations = {
    es: {
      text: {
        'Skip to main content': 'Saltar al contenido principal',
        'West Chester, Pennsylvania · Individualized pain care': 'West Chester, Pennsylvania · Atención personalizada para el dolor',
        'Call (610) 732-4251': 'Llame al (610) 732-4251',
        'Services': 'Servicios',
        'Conditions': 'Condiciones',
        'About us': 'Sobre nosotros',
        'Insurance': 'Seguro médico',
        'Forms & resources': 'Formularios y recursos',
        'FAQs': 'Preguntas frecuentes',
        'Contact': 'Contacto',
        'Call the office': 'Llame a la oficina',
        'Home': 'Inicio',
        'Patient resources': 'Recursos para pacientes',
        'Pain management · West Chester, PA': 'Manejo del dolor · West Chester, PA',
        'Specialized pain, migraine & injection care in West Chester.': 'Atención especializada para dolor, migraña e inyecciones en West Chester.',
        'Located in Westtown Business Center near Routes 3 and 352, our small office provides individualized care for pain, migraines, and related conditions. Your treatment plan reflects your specific needs.': 'Ubicada en Westtown Business Center, cerca de las rutas 3 y 352, nuestra oficina brinda atención personalizada para el dolor, las migrañas y condiciones relacionadas. Su plan de tratamiento refleja sus necesidades específicas.',
        'Explore services': 'Ver servicios',
        'Visiting us?': '¿Nos visita?',
        'Find the office at 1572 McDaniel Drive, West Chester, PA 19380.': 'Encuentre la oficina en 1572 McDaniel Drive, West Chester, PA 19380.',
        'Get directions': 'Cómo llegar',
        'What we offer': 'Lo que ofrecemos',
        'Care matched to your needs': 'Atención adaptada a sus necesidades',
        'Services may be considered after an individual evaluation. Your clinician will discuss the options that fit your situation.': 'Los servicios pueden considerarse después de una evaluación individual. Su médico hablará con usted sobre las opciones que se ajusten a su situación.',
        'Pain procedures': 'Procedimientos para el dolor',
        'Cervical, thoracic and lumbar epidurals; nerve root, facet, medial branch and sacroiliac joint blocks; radiofrequency ablation; trigger point and cortisone injections.': 'Epidurales cervicales, torácicas y lumbares; bloqueos de raíz nerviosa, facetarios, de rama medial y de la articulación sacroilíaca; ablación por radiofrecuencia; inyecciones en puntos gatillo y de cortisona.',
        'Migraine treatment': 'Tratamiento para la migraña',
        'Botox for chronic migraine and medications such as Aimovig, Ajovy, Emgality, Vyepti, Nurtec and Ubrelvy.': 'Botox para migraña crónica y medicamentos como Aimovig, Ajovy, Emgality, Vyepti, Nurtec y Ubrelvy.',
        'Knee injections': 'Inyecciones de rodilla',
        'Hip, knee and shoulder joint injections, including knee treatments such as Synvisc and Monovisc.': 'Inyecciones en articulaciones de cadera, rodilla y hombro, incluidos tratamientos de rodilla como Synvisc y Monovisc.',
        'Medication management': 'Manejo de medicamentos',
        'Medication management, low-dose naltrexone and, when appropriate after evaluation, chronic opioid therapy. The clinic also lists urine drug screening.': 'Manejo de medicamentos, naltrexona en dosis baja y, cuando sea apropiado después de una evaluación, terapia crónica con opioides. La clínica también menciona pruebas de drogas en orina.',
        'Suboxone & Sublocade': 'Suboxone y Sublocade',
        'Suboxone therapy, including treatment for opioid addiction, and Sublocade injections.': 'Terapia con Suboxone, incluido tratamiento para la adicción a opioides, e inyecciones de Sublocade.',
        'Other services': 'Otros servicios',
        'Weight loss medications such as phentermine, Wegovy and Zepbound; testosterone replacement therapy; and Spravato for depression.': 'Medicamentos para bajar de peso como fentermina, Wegovy y Zepbound; terapia de reemplazo de testosterona; y Spravato para la depresión.',
        'The clinic also lists spinal cord stimulators and Botox injections. Treatment availability and eligibility are determined by the clinic. Call to discuss a specific service.': 'La clínica también menciona estimuladores de la médula espinal e inyecciones de Botox. La disponibilidad del tratamiento y la elegibilidad las determina la clínica. Llame para hablar sobre un servicio específico.',
        'Conditions we treat': 'Condiciones que tratamos',
        'Reasons patients come to us': 'Razones por las que los pacientes nos visitan',
        'These are examples listed by the clinic. An evaluation helps determine an appropriate plan.': 'Estos son ejemplos indicados por la clínica. Una evaluación ayuda a determinar un plan apropiado.',
        'Sciatica or radiculopathy': 'Ciática o radiculopatía',
        'Low back pain': 'Dolor lumbar',
        'Neck pain': 'Dolor de cuello',
        'Work-related injury pain': 'Dolor por lesiones laborales',
        'Myofascial pain syndromes': 'Síndromes de dolor miofascial',
        'Chronic migraine headaches': 'Migrañas crónicas',
        'Hip pain': 'Dolor de cadera',
        'Knee arthritis pain': 'Dolor por artritis de rodilla',
        'Shoulder arthritis pain': 'Dolor por artritis de hombro',
        'Chronic pelvic pain': 'Dolor pélvico crónico',
        'Neuropathic or chronic nerve pain': 'Dolor neuropático o dolor crónico de nervios',
        'Shingles or post-herpetic neuralgia': 'Culebrilla o neuralgia posherpética',
        'Obesity': 'Obesidad',
        'About the practice': 'Sobre la práctica',
        'Meet Dr. Garg': 'Conozca al Dr. Garg',
        'Dr. Garg is board certified in Pain Management, Anesthesiology, and Internal Medicine. He trained in Internal Medicine at UMDNJ and completed Anesthesiology and Pain Management training at the University of Rochester in New York.': 'El Dr. Garg está certificado por la junta en Manejo del Dolor, Anestesiología y Medicina Interna. Se formó en Medicina Interna en UMDNJ y completó su formación en Anestesiología y Manejo del Dolor en la University of Rochester en Nueva York.',
        'Dr. Garg combines conventional and complementary approaches, including injections, medications, physical therapy, behavioral therapy, massage, chiropractic care and acupuncture. Treatment plans are individualized.': 'El Dr. Garg combina enfoques convencionales y complementarios, incluidas inyecciones, medicamentos, fisioterapia, terapia conductual, masaje, atención quiropráctica y acupuntura. Los planes de tratamiento son personalizados.',
        'Your visit starts with a conversation.': 'Su visita comienza con una conversación.',
        'Tell the team about your symptoms, past treatment, and what you hope to improve. They can explain the next steps and which options may be appropriate.': 'Cuéntele al equipo sobre sus síntomas, tratamientos anteriores y lo que espera mejorar. Ellos pueden explicar los próximos pasos y qué opciones pueden ser apropiadas.',
        'Speak with the office': 'Hable con la oficina',
        'Patient information': 'Información para pacientes',
        'Plan your visit': 'Planifique su visita',

        'The clinic’s insurance list was last dated': 'La lista de seguros de la clínica fue fechada por última vez el',
        'October 12, 2023': '12 de octubre de 2023',
        '. Its homepage gives different Medicare Advantage guidance, so call before relying on any listed coverage.': '. Su página principal da una orientación diferente sobre Medicare Advantage, así que llame antes de depender de cualquier cobertura indicada.',
        'Medicaid, including Keystone First, Aetna Better Health, UnitedHealthcare Community, UPMC and Health Partners': 'Medicaid, incluidos Keystone First, Aetna Better Health, UnitedHealthcare Community, UPMC y Health Partners',
        'Medicare Advantage plans, except Keystone 65 on the dated list': 'Planes Medicare Advantage, excepto Keystone 65 en la lista fechada',
        'Cigna, Aetna, Humana and UnitedHealthcare': 'Cigna, Aetna, Humana y UnitedHealthcare',
        'See the': 'Vea la',
        'insurance list': 'lista de seguros',
        '. It was last dated October 2023, and the clinic homepage gives different guidance about Medicare Advantage. Confirm your plan with the office.': '. Fue fechada por última vez en octubre de 2023, y la página principal de la clínica da una orientación diferente sobre Medicare Advantage. Confirme su plan con la oficina.',
        'Opioid therapy may be considered as a last resort after careful evaluation when other options have failed or proved inadequate. It carries risks, including addiction and overdose, and is not appropriate for everyone.': 'La terapia con opioides puede considerarse como último recurso después de una evaluación cuidadosa cuando otras opciones han fallado o no han sido adecuadas. Tiene riesgos, incluida la adicción y la sobredosis, y no es apropiada para todos.',
        'The clinic states that it can evaluate patients with a state-approved diagnosis. Call to confirm current eligibility and process.': 'La clínica indica que puede evaluar a pacientes con un diagnóstico aprobado por el estado. Llame para confirmar la elegibilidad y el proceso actuales.',
        'Wait for the clinician to admit you after the previous patient. If there is a delay of about five minutes, the clinic says you can leave the meeting and wait for its call.': 'Espere a que el médico lo admita después del paciente anterior. Si hay una demora de unos cinco minutos, la clínica indica que puede salir de la reunión y esperar su llamada.',
        'The clinic advises patients taking pain medication to call their pharmacy before the visit because of medication shortages. Ask if your prescribed medication is available. If it is not, ask what alternative strength or pharmacy may be available, then tell the clinic. Do not change your dose or medication without your clinician’s direction.': 'La clínica recomienda a los pacientes que toman medicamentos para el dolor que llamen a su farmacia antes de la visita debido a la escasez de medicamentos. Pregunte si su medicamento recetado está disponible. Si no lo está, pregunte qué concentración alternativa o farmacia puede estar disponible y luego informe a la clínica. No cambie su dosis ni su medicamento sin indicación de su médico.',
        'If the pharmacy cannot share stock information with you, ask its staff to contact the clinic with suggestions. The clinic notes that calls to pharmacies may have to wait until the end of the day. It also suggests considering a local independent pharmacy and asking about buprenorphine as a possible treatment option with your clinician.': 'Si la farmacia no puede compartir información sobre disponibilidad con usted, pida a su personal que contacte a la clínica con sugerencias. La clínica señala que las llamadas a farmacias pueden tener que esperar hasta el final del día. También sugiere considerar una farmacia local independiente y preguntar a su médico sobre la buprenorfina como posible opción de tratamiento.',
        'The clinic lists a $50 charge for each medication prior authorization.': 'La clínica indica un cargo de $50 por cada autorización previa de medicamento.',
        'Confirm the current charge with the office before requesting one.': 'Confirme el cargo actual con la oficina antes de solicitar una.',
        'A prior authorization is a decision by your insurer, beyond the clinician’s prescription. The clinic says these requests can take days and that insurers may ask follow-up questions or require an appeal. If a medication needs authorization, text the office or leave a message. The clinic does not automatically act on pharmacy or insurer fax alerts because some are false alarms.': 'Una autorización previa es una decisión de su aseguradora, aparte de la receta del médico. La clínica dice que estas solicitudes pueden tardar días y que las aseguradoras pueden hacer preguntas de seguimiento o requerir una apelación. Si un medicamento necesita autorización, envíe un mensaje de texto a la oficina o deje un mensaje. La clínica no actúa automáticamente sobre alertas por fax de farmacias o aseguradoras porque algunas son falsas alarmas.',
        'If approval is delayed, ask the office and pharmacy about your options. The source page notes that some patients may need to pay out of pocket for a short supply during a delay.': 'Si la aprobación se retrasa, pregunte a la oficina y a la farmacia sobre sus opciones. La página fuente señala que algunos pacientes pueden necesitar pagar de su bolsillo un suministro corto durante una demora.',
        'If a family member has concerns about your prescribed opioid treatment, the clinic encourages you to bring them to an appointment. If they cannot attend, ask about a phone conversation or virtual group meeting. The goal is to discuss the treatment plan, dependence, addiction, side effects, and safety questions together.': 'Si un familiar tiene inquietudes sobre su tratamiento con opioides recetado, la clínica le anima a traerlo a una cita. Si no puede asistir, pregunte sobre una conversación telefónica o una reunión virtual en grupo. El objetivo es hablar juntos sobre el plan de tratamiento, dependencia, adicción, efectos secundarios y preguntas de seguridad.',
        'The clinic states that it provides Spravato. Call to discuss eligibility, availability, and the treatment process.': 'La clínica indica que ofrece Spravato. Llame para hablar sobre elegibilidad, disponibilidad y el proceso de tratamiento.',
        'The source page discusses buprenorphine as a pain treatment and lists a seven-day skin patch (Butrans), a cheek film taken twice daily (Belbuca), and Suboxone, generally used at higher doses for opioid use disorder. It notes a possible rash under the patch. The right treatment and its risks depend on the patient; discuss them with the clinician.': 'La página fuente analiza la buprenorfina como tratamiento para el dolor y menciona un parche cutáneo de siete días (Butrans), una película bucal tomada dos veces al día (Belbuca) y Suboxone, generalmente usado en dosis más altas para el trastorno por uso de opioides. Señala una posible erupción debajo del parche. El tratamiento adecuado y sus riesgos dependen del paciente; hable sobre esto con el médico.',
        'The original patient page includes two videos about buprenorphine and one about pain reprocessing, along with external articles and safety resources. YouTube videos remain off until you allow optional media.': 'La página original para pacientes incluye dos videos sobre buprenorfina y uno sobre reprocesamiento del dolor, junto con artículos externos y recursos de seguridad. Los videos de YouTube permanecen desactivados hasta que permita medios opcionales.',
        'Listed as accepted': 'Indicados como aceptados',
        'Listed as not accepted': 'Indicados como no aceptados',
        'Original Medicare and Keystone 65': 'Original Medicare y Keystone 65',
        'Most out-of-area Blue Cross plans': 'La mayoría de los planes Blue Cross fuera del área',
        'Workers’ compensation': 'Compensación laboral',
        'Auto insurance': 'Seguro de automóvil',
        'Call the clinic or your insurer to confirm your exact plan and current coverage.': 'Llame a la clínica o a su aseguradora para confirmar su plan exacto y la cobertura actual.',
        'Patient forms, telehealth & medication information ↗': 'Formularios para pacientes, telesalud e información sobre medicamentos ↗',
        'Pay your bill online': 'Pague su factura en línea',
        'Secure payment page hosted by Helcim': 'Página de pago segura alojada por Helcim',
        'Office hours': 'Horario de oficina',
        'Monday': 'Lunes',
        'Closed': 'Cerrado',
        'Tuesday–Friday': 'Martes a viernes',
        'Saturday–Sunday': 'Sábado a domingo',
        'Hours may change. Call before visiting.': 'El horario puede cambiar. Llame antes de visitar.',
        'Frequently asked questions': 'Preguntas frecuentes',
        'Before you call': 'Antes de llamar',
        'How do I find a pain clinic near me that offers personalized treatment?': '¿Cómo encuentro una clínica del dolor cerca de mí que ofrezca tratamiento personalizado?',
        'Schedule an evaluation to discuss your condition and which treatment options may fit your needs.': 'Programe una evaluación para hablar sobre su condición y las opciones de tratamiento que pueden ajustarse a sus necesidades.',
        'What happens at a first pain management visit?': '¿Qué sucede en una primera visita de manejo del dolor?',
        'The doctor reviews your history and symptoms, examines you and recommends a treatment plan.': 'El médico revisa su historial y síntomas, lo examina y recomienda un plan de tratamiento.',
        'Are there non-surgical options for back or joint pain?': '¿Hay opciones no quirúrgicas para el dolor de espalda o de articulaciones?',
        'The clinic lists injections, therapy and medication management among its treatment options. The right choice depends on your evaluation.': 'La clínica menciona inyecciones, terapia y manejo de medicamentos entre sus opciones de tratamiento. La opción adecuada depende de su evaluación.',
        'Can I get treatment for migraine, fibromyalgia or neuropathic pain near West Chester?': '¿Puedo recibir tratamiento para migraña, fibromialgia o dolor neuropático cerca de West Chester?',
        'The clinic lists migraine and neuropathic pain care. Ask the office about fibromyalgia and the treatments suitable for your condition.': 'La clínica menciona atención para migraña y dolor neuropático. Pregunte a la oficina sobre fibromialgia y los tratamientos adecuados para su condición.',
        'What insurance plans do you accept?': '¿Qué planes de seguro aceptan?',
        'Does the clinic prescribe opioids for pain?': '¿La clínica receta opioides para el dolor?',
        'Can the clinic evaluate me for medical marijuana?': '¿La clínica puede evaluarme para marihuana medicinal?',
        'Get in touch': 'Comuníquese',
        'Let’s talk about your care.': 'Hablemos sobre su atención.',
        'Call during office hours to ask about appointments, treatments, or insurance.': 'Llame durante el horario de oficina para preguntar sobre citas, tratamientos o seguro.',
        'Open directions': 'Abrir indicaciones',
        'For medical emergencies, call 911.': 'Para emergencias médicas, llame al 911.',
        'Cookie choices': 'Opciones de cookies',
        'For current patients': 'Para pacientes actuales',
        'Forms and patient resources': 'Formularios y recursos para pacientes',
        'Complete your health update before your appointment. Find telehealth steps, medication guidance, and the clinic’s patient information below.': 'Complete su actualización de salud antes de su cita. Encuentre pasos de telesalud, orientación sobre medicamentos e información para pacientes a continuación.',
        'Open health update form ↗': 'Abrir formulario de actualización de salud ↗',
        'Before your visit': 'Antes de su visita',
        'Health update form': 'Formulario de actualización de salud',
        'If you receive opioids or Suboxone for pain, the clinic asks you to complete its health update form the day before your appointment.': 'Si recibe opioides o Suboxone para el dolor, la clínica le pide que complete su formulario de actualización de salud el día antes de su cita.',
        'Complete the health update': 'Completar la actualización de salud',
        'Virtual visits': 'Visitas virtuales',
        'Join with Google Meet': 'Unirse con Google Meet',
        'Download the Google Meet app on your phone and sign in. Do not select “New meeting.”': 'Descargue la aplicación Google Meet en su teléfono e inicie sesión. No seleccione “Nueva reunión”.',
        'At your appointment time, open the clinic’s meeting link and request to join.': 'A la hora de su cita, abra el enlace de reunión de la clínica y solicite unirse.',
        'Join the clinic meeting': 'Unirse a la reunión de la clínica',
        'Medication planning': 'Planificación de medicamentos',
        'Check pharmacy stock before your appointment': 'Verifique la disponibilidad en la farmacia antes de su cita',
        'Insurance approvals': 'Autorizaciones del seguro',
        'Medication prior authorizations': 'Autorizaciones previas de medicamentos',
        'Treatment conversations': 'Conversaciones sobre el tratamiento',
        'Bring your family into the discussion': 'Incluya a su familia en la conversación',
        'Additional treatment information': 'Información adicional sobre tratamientos',
        'Spravato and buprenorphine': 'Spravato y buprenorfina',
        'Spravato for depression': 'Spravato para la depresión',
        'Learn about Spravato': 'Información sobre Spravato',
        'Official patient information and safety details': 'Información oficial para pacientes y detalles de seguridad',
        'Buprenorphine for chronic pain': 'Buprenorfina para dolor crónico',
        'Read the cited journal article': 'Leer el artículo citado',
        'Videos and reading': 'Videos y lectura',
        'More resources from the clinic': 'Más recursos de la clínica',
        'Allow optional media to load this YouTube video.': 'Permita medios opcionales para cargar este video de YouTube.',
        'Review cookie choices': 'Revisar opciones de cookies',
        'Open on YouTube ↗': 'Abrir en YouTube ↗',
        'One Pill Can Kill': 'Una pastilla puede matar',
        'Official DEA resource': 'Recurso oficial de la DEA',
        'Parent information flyer': 'Folleto informativo para padres',
        'Read The Myth of Drug Expiration Dates on ProPublica': 'Leer The Myth of Drug Expiration Dates en ProPublica',
        'Questions?': '¿Preguntas?',
        'Contact the office': 'Comuníquese con la oficina',
        'Ask about forms, your visit, or a medication issue.': 'Pregunte sobre formularios, su visita o un problema con medicamentos.',
        'For the latest patient instructions and charges, contact the office.': 'Para obtener las instrucciones y cargos más recientes para pacientes, comuníquese con la oficina.',
        'Full patient information': 'Información completa para pacientes',
        'Clinic Google Site': 'Sitio de Google de la clínica'
      },
      meta: {
        'Integrative Pain Clinic | West Chester, PA': 'Integrative Pain Clinic | West Chester, PA',
        'Individualized pain management and migraine care in West Chester, Pennsylvania. Learn about services, insurance, and office hours.': 'Manejo personalizado del dolor y atención para migraña en West Chester, Pennsylvania. Conozca los servicios, seguros y horarios de oficina.',
        'Patient Forms & Resources | Integrative Pain Clinic': 'Formularios y recursos para pacientes | Integrative Pain Clinic',
        'Health update form, telehealth instructions, medication guidance, prior authorization information, and patient resources from Integrative Pain Clinic.': 'Formulario de actualización de salud, instrucciones de telesalud, orientación sobre medicamentos, información de autorizaciones previas y recursos para pacientes de Integrative Pain Clinic.'
      }
    }
  };

  const originalText = new WeakMap();
  const getLocale = () => {
    try {
      const stored = window.localStorage.getItem(localeKey);
      return allowedLocales.has(stored) ? stored : 'en';
    } catch {
      return window.__SITE_LOCALE__ === 'es' ? 'es' : 'en';
    }
  };

  const setLocale = (locale) => {
    try {
      window.localStorage.setItem(localeKey, locale);
    } catch {
      // Language still changes for the current page if storage is unavailable.
    }
  };

  const translateTextNodes = (locale) => {
    const dictionary = translations[locale]?.text || {};
    const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, {
      acceptNode(node) {
        if (!node.nodeValue.trim()) return NodeFilter.FILTER_REJECT;
        if (node.parentElement?.closest('script,style')) return NodeFilter.FILTER_REJECT;
        return NodeFilter.FILTER_ACCEPT;
      }
    });
    const nodes = [];
    while (walker.nextNode()) nodes.push(walker.currentNode);
    nodes.forEach((node) => {
      if (!originalText.has(node)) originalText.set(node, node.nodeValue);
      const source = originalText.get(node);
      const trimmed = source.trim();
      const translated = dictionary[trimmed];
      node.nodeValue = translated ? source.replace(trimmed, translated) : source;
    });
  };

  const translateMeta = (locale) => {
    const dictionary = translations[locale]?.meta || {};
    document.querySelectorAll('title, meta[name="description"], meta[property="og:title"], meta[property="og:description"], meta[name="twitter:title"], meta[name="twitter:description"]').forEach((node) => {
      const prop = node.tagName === 'TITLE' ? 'textContent' : 'content';
      if (!node.dataset.en) node.dataset.en = node[prop];
      node[prop] = dictionary[node.dataset.en] || node.dataset.en;
    });
  };

  const applyLocale = (locale) => {
    const safeLocale = allowedLocales.has(locale) ? locale : 'en';
    document.documentElement.lang = safeLocale;
    document.querySelectorAll('[data-locale-switch]').forEach((button) => {
      const active = button.dataset.localeSwitch === safeLocale;
      button.setAttribute('aria-pressed', String(active));
    });
    document.querySelectorAll('[data-legal-locale-notice]').forEach((notice) => {
      notice.hidden = safeLocale !== 'es';
    });
    translateMeta(safeLocale);
    translateTextNodes(safeLocale);
  };

  document.addEventListener('click', (event) => {
    const button = event.target.closest('[data-locale-switch]');
    if (!button) return;
    const locale = button.dataset.localeSwitch;
    if (!allowedLocales.has(locale)) return;
    setLocale(locale);
    applyLocale(locale);
  });

  const preferenceKey = 'ipc_cookie_preference';
  const allowedPreferences = new Set(['essential', 'media']);

  const getPreference = () => {
    try {
      const value = window.localStorage.getItem(preferenceKey);
      return allowedPreferences.has(value) ? value : null;
    } catch {
      return null;
    }
  };

  const setPreference = (value) => {
    try {
      window.localStorage.setItem(preferenceKey, value);
    } catch {
      // The selection still applies for the current page if storage is unavailable.
    }
  };

  const applyPreference = (preference) => {
    const allowMedia = preference === 'media';

    document.querySelectorAll('[data-cookie-media]').forEach((frame) => {
      if (allowMedia) {
        if (!frame.src) frame.src = frame.dataset.src;
        frame.hidden = false;
      } else {
        frame.removeAttribute('src');
        frame.hidden = true;
      }
    });

    document.querySelectorAll('[data-cookie-placeholder]').forEach((placeholder) => {
      placeholder.hidden = allowMedia;
    });

    document.documentElement.dataset.cookiePreference = preference || 'unset';
  };

  const createBanner = () => {
    const banner = document.createElement('section');
    banner.className = 'cookie-banner';
    banner.dataset.cookieBanner = '';
    banner.setAttribute('role', 'dialog');
    banner.setAttribute('aria-label', 'Cookie choices');
    banner.setAttribute('aria-live', 'polite');
    banner.hidden = true;
    banner.innerHTML = `
      <div class="cookie-banner__content">
        <div>
          <h2>Cookie choices</h2>
          <p>This site uses essential technology for secure access and stores your selection. Optional YouTube videos load only after you allow optional media. <a href="/cookies.html">Read the Cookie Policy</a>.</p>
        </div>
        <div class="cookie-banner__actions">
          <button type="button" class="cookie-secondary" data-cookie-choice="essential">Essential only</button>
          <button type="button" class="cookie-primary" data-cookie-choice="media">Allow optional media</button>
        </div>
      </div>`;
    document.body.appendChild(banner);
    return banner;
  };

  const banner = createBanner();

  const openBanner = () => {
    banner.hidden = false;
    const current = getPreference();
    const selector = current === 'media' ? '[data-cookie-choice="media"]' : '[data-cookie-choice="essential"]';
    window.requestAnimationFrame(() => banner.querySelector(selector)?.focus());
  };

  document.addEventListener('click', (event) => {
    const choice = event.target.closest('[data-cookie-choice]');
    if (choice) {
      const value = choice.dataset.cookieChoice;
      if (!allowedPreferences.has(value)) return;
      setPreference(value);
      applyPreference(value);
      banner.hidden = true;
      return;
    }

    if (event.target.closest('[data-cookie-open]')) openBanner();
  });

  document.querySelectorAll('.navlinks a').forEach((link) => {
    link.addEventListener('click', () => {
      const navigation = document.querySelector('.navlinks');
      const menu = document.querySelector('.menu');
      navigation?.classList.remove('open');
      menu?.setAttribute('aria-expanded', 'false');
    });
  });

  const initialPreference = getPreference();
  applyLocale(getLocale());
  applyPreference(initialPreference || 'essential');
  if (!initialPreference) openBanner();
})();
