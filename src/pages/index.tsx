import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

import styles from './index.module.css';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (

    <section className="text-zinc-400 dark:text-zinc-300 body-font bg-white dark:bg-zinc-900">
      <div className="container px-5 py-24 mx-auto">
        <div className="text-center mb-20">
          <h1 className="sm:text-3xl text-2xl font-medium title-font text-zinc-900 dark:text-white mb-4">Submódulo Nuevas Tecnologías de Programación</h1>
          <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-zinc-500 dark:text-zinc-400">Técnico Laboral como Asistente en Desarrollo de Software</p>
          <div className="flex justify-center mt-12">
            <img src="https://images.unsplash.com/photo-1629904853893-c2c8981a1dc5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Introduction Section Image" className="rounded-lg max-w-96" />
          </div>
          <div className="flex mt-6 justify-center">
            <div className="w-16 h-1 rounded-full bg-indigo-500 inline-flex"></div>
          </div>
        </div>
        <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
          <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
            <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 dark:bg-indigo-900 text-indigo-500 mb-5 flex-shrink-0">
              <img src="https://icons.iconarchive.com/icons/double-j-design/ravenna-3d/72/Tools-icon.png" alt="Python Code" className="w-16 h-16 object-cover rounded-full" />
            </div>
            <div className="flex-grow">
              <h2 className="text-zinc-900 dark:text-white text-lg title-font font-medium mb-3">Momento 1: Caracterización de Herramientas</h2>
              <p className="leading-relaxed text-base">Fundamentación en Python, sistemas de control de versiones Git, y configuración de ambientes virtuales.</p>
            </div>
          </div>
          <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
            <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 dark:bg-indigo-900 text-indigo-500 mb-5 flex-shrink-0">
              <img src="https://icons.iconarchive.com/icons/double-j-design/ravenna-3d/72/Components-icon.png" alt="Data Analysis" className="w-16 h-16 object-cover rounded-full" />
            </div>
            <div className="flex-grow">
              <h2 className="text-zinc-900 dark:text-white text-lg title-font font-medium mb-3">Momento 2: Parametriza componentes</h2>
              <p className="leading-relaxed text-base">Fundamentos del Análisis de Datos con Pandas, manipulación y estructuras de datos.</p>
            </div>
          </div>
          <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
            <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 dark:bg-indigo-900 text-indigo-500 mb-5 flex-shrink-0">
              <img src="https://icons.iconarchive.com/icons/gakuseisean/ivista-2/72/Misc-Web-Database-icon.png" alt="Data Visualization" className="w-16 h-16 object-cover rounded-full" />
            </div>
            <div className="flex-grow">
              <h2 className="text-zinc-900 dark:text-white text-lg title-font font-medium mb-3">Momento 1: Tratamiento de la Información</h2>
              <p className="leading-relaxed text-base">Visualización de Datos con Matplotlib y Seaborn, creación de reportes HTML con resultados analíticos.</p>
            </div>
          </div>
        </div>
        <a href='/docs/intro'>
          <button className="flex mx-auto mt-16 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Contenido</button>
        </a>
      </div>
    </section>

  );
}

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Bienvenido a ${siteConfig.title}`}
      description="Introducción a la Programación">
      <main>
        <HomepageHeader />
      </main>
    </Layout>
  );
}
