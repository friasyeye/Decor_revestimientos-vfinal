const SECTIONS = [
  {
    title: "Microcemento sobre superficies porosas",
    text: "Azulejo, baldosa, cerámica y terrazo son los soportes más habituales en viviendas barcelonesas y los que mejor resultado dan con microcemento. Su porosidad facilita la adherencia y permite aplicar directamente sin tratamientos complejos. Son también los soportes más frecuentes en baños, cocinas y suelos que llevan décadas sin tocarse.",
    bullets: [
      "Microcemento sobre azulejos y baldosas sin picar",
      "Aplicación directa sobre cerámica y terrazo existente",
      "Sin juntas visibles en el resultado final",
      "Compatible con Mortex para zonas húmedas",
    ],
  },
  {
    title: "Microcemento sobre superficies duras",
    text: "Mármol, hormigón y cemento son soportes estables y de alta densidad que admiten microcemento con una preparación adecuada. El diagnóstico previo es especialmente importante aquí, la dureza del soporte exige un proceso de adhesión específico para garantizar que el revestimiento no se desprende.",
    bullets: [
      "Microcemento sobre mármol con preparación técnica previa",
      "Aplicación sobre hormigón y cemento existente",
      "Superficie continua sin juntas sobre soportes de alta densidad",
      "Mortex recomendado para zonas sumergidas sobre hormigón",
    ],
  },
  {
    title: "Microcemento sobre superficies orgánicas",
    text: "Madera y yeso son soportes que trabajan, se dilatan, se contraen, absorben humedad. No cualquier material ni cualquier aplicador sabe manejarlos. Mortex es especialmente indicado aquí por su capacidad de absorber micro-tensiones del soporte sin agrietarse.",
    bullets: [
      "Microcemento sobre madera con tratamiento previo específico",
      "Aplicación sobre yeso con control de humedad",
      "Mortex para absorber las micro-tensiones del soporte",
      "Diagnóstico previo imprescindible en soportes orgánicos",
    ],
  },
  {
    title: "Microcemento sobre superficies técnicas",
    text: "MDF, cristal y acero son los soportes menos habituales y los que más experiencia exigen. Son materiales propios de proyectos de autor, encimeras de diseño y mobiliario personalizado. No todos los aplicadores saben trabajar con ellos, nosotros sí.",
    bullets: [
      "Microcemento y Mortex sobre MDF para mobiliario y encimeras",
      "Aplicación sobre cristal con adherencia garantizada",
      "Acabado mineral sobre acero para proyectos singulares",
      "Experiencia en soportes no convencionales para proyectos de autor",
    ],
  },
];

export default function SuperficiesContent() {
  return (
    <section className="sc-content">
      <style>{`
        .sc-content {
          background-color: var(--color-dc-muted);
          color: var(--color-dc-dark);
          padding-top: 80px;
          padding-bottom: 100px;
        }
        .sc-block {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 64px;
          align-items: start;
          width: 100%;
        }
        .sc-block + .sc-block {
          margin-top: 72px;
          padding-top: 72px;
          border-top: 1px solid rgba(17,17,17,0.15);
        }
        .sc-h2 {
          font-family: "Instrument Serif", Georgia, serif;
          font-style: italic;
          font-size: clamp(28px, 3.4vw, 40px);
          color: var(--color-dc-dark);
          line-height: 1.15;
          letter-spacing: -0.5px;
          margin: 0 0 1rem 0;
        }
        .sc-text {
          font-family: "Satoshi", ui-sans-serif, sans-serif;
          font-size: clamp(15px, 1.4vw, 17px);
          line-height: 1.7;
          color: var(--color-dc-mid);
          margin: 0;
        }
        .sc-bullets {
          list-style: none;
          margin: 0;
          padding: 0;
          display: flex;
          flex-direction: column;
          gap: 18px;
        }
        .sc-bullet {
          display: flex;
          align-items: flex-start;
          gap: 12px;
          font-family: "Satoshi", ui-sans-serif, sans-serif;
          font-size: clamp(14.5px, 1.3vw, 16px);
          line-height: 1.5;
          color: var(--color-dc-dark);
        }
        .sc-bullet-dot {
          flex-shrink: 0;
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background-color: var(--color-dc-dark);
          margin-top: 8px;
        }

        @media (max-width: 900px) {
          .sc-block {
            grid-template-columns: 1fr;
            gap: 32px;
          }
          .sc-block + .sc-block {
            margin-top: 56px;
            padding-top: 56px;
          }
        }
      `}</style>

      <div className="dc-container">
        {SECTIONS.map((section) => (
          <div key={section.title} className="sc-block">
            <div>
              <h2 className="sc-h2">{section.title}</h2>
              <p className="sc-text">{section.text}</p>
            </div>
            <ul className="sc-bullets">
              {section.bullets.map((item) => (
                <li key={item} className="sc-bullet">
                  <span className="sc-bullet-dot" aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
