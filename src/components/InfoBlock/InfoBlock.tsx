'use client'

import styles from './InfoBlock.module.css'

export default function InfoBlock() {
  return (
    <section className={styles.wrapper}>
      <div className={styles.container}>
        <img
          className={styles.image}
          src="https://source.unsplash.com/200x200/?data,visualization"
          alt="Logo gráfico de visualización de datos"
        />
        <div className={styles.textBlock}>
          <h2 className={styles.title}>Dataview Insights</h2>
          <p className={styles.paragraph}>
            En Dataview Insights transformamos los datos empresariales en experiencias visuales
            impactantes. Creamos dashboards interactivos, visualizaciones a medida y herramientas
            intuitivas que permiten a los equipos entender, explorar y tomar decisiones basadas en
            datos con precisión y claridad. Nuestro enfoque combina diseño, narrativa visual y
            tecnología para convertir números en conocimiento accionable.
          </p>
        </div>
      </div>
    </section>
  )
}
