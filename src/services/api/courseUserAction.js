import { addDoc, collection, getDocs, query, Timestamp, where } from "firebase/firestore";
import { toast } from "react-toastify";
import { db } from "../../firebase-config";
import courseUserMock from '../../mock/courseUserMock.json';
import { getRandomInt } from "../../utils/utils";

const courseUserCollectionRef = collection(db, "courseUser");

const getCourseUserByUserId = async (userId) => {
  try {
    const q = query(courseUserCollectionRef, where("user_id", '==', userId));

    const querySnapshot = await getDocs(q);

    const result = querySnapshot.docs.map((doc) => ({
      // doc.data() is never undefined for query doc snapshots
      id: doc.id, ...doc.data()
    }));

    return result;
  }
  catch (err) {
    toast.error(err?.message || 'Ocorreu um erro. Tente novamente mais tarde.');
  }
}

const sanitizeCourseUserMock = (userId) => {
  const courses = [];

  const listCourses = [
    //1-Semestre
    {
      course_initials: 'AAG001',
      course_name: "Administração Geral",
      status: "aprovado",
      final_score_average: 10,
      presence: 0,
      absence: 0,
      note: "",
      utilization_of_study: getRandomInt(1, 5),
      period_semester: 1,
      activities_details: courseUserMock.activities_details.map(activityDetail => {
        return ({
          ...activityDetail,
          release_date: Timestamp.fromDate(new Date())
        })
      })
    }, {
      course_initials: 'IAC001',
      course_name: "Arquitetura e Organização de Computadores",
      status: "aprovado",
      final_score_average: 8,
      presence: 0,
      absence: 0,
      note: "",
      utilization_of_study: getRandomInt(1, 5),
      period_semester: 1,
      activities_details: courseUserMock.activities_details.map(activityDetail => {
        return ({
          ...activityDetail,
          release_date: Timestamp.fromDate(new Date())
        })
      })
    }, {
      course_initials: 'IAL002',
      course_name: "Algoritmos e Lógica de Programação",
      status: "aprovado",
      final_score_average: 10,
      presence: 0,
      absence: 0,
      note: "",
      utilization_of_study: getRandomInt(1, 5),
      period_semester: 1,
      activities_details: courseUserMock.activities_details.map(activityDetail => {
        return ({
          ...activityDetail,
          release_date: Timestamp.fromDate(new Date())
        })
      })
    }, {
      course_initials: 'IHW100',
      course_name: "Laboratório de Hardware",
      status: "aprovado",
      final_score_average: getRandomInt(5, 10),
      presence: 0,
      absence: 0,
      note: "Aprovado por Nota e Frequência",
      utilization_of_study: getRandomInt(1, 5),
      period_semester: 1,
      activities_details: courseUserMock.activities_details.map(activityDetail => {
        return ({
          ...activityDetail,
          release_date: Timestamp.fromDate(new Date())
        })
      })
    }, {
      course_initials: 'ILM001',
      course_name: "Programação em Microinformática",
      status: "aprovado",
      final_score_average: getRandomInt(5, 10),
      presence: getRandomInt(20, 40),
      absence: getRandomInt(1, 20),
      utilization_of_study: getRandomInt(1, 5),
      period_semester: 1,
      activities_details: courseUserMock.activities_details.map(activityDetail => {
        return ({
          ...activityDetail,
          score: getRandomInt(1, 10),
          release_date: Timestamp.fromDate(new Date())
        })
      })
    }, {
      course_initials: 'LIN100',
      course_name: "Inglês I",
      status: "aprovado",
      final_score_average: getRandomInt(1, 5),
      presence: 0,
      absence: 0,
      note: "Aprovado por Nota e Frequência",
      utilization_of_study: getRandomInt(1, 5),
      period_semester: 1,
      activities_details: courseUserMock.activities_details.map(activityDetail => {
        return ({
          ...activityDetail,
          release_date: Timestamp.fromDate(new Date())
        })
      })
    }, {
      course_initials: 'MMD001',
      course_name: "Matemática Discreta",
      status: "aprovado",
      final_score_average: getRandomInt(5, 10),
      presence: 0,
      absence: 0,
      note: "Aprovado por Nota e Frequência",
      utilization_of_study: getRandomInt(1, 5),
      period_semester: 1,
      activities_details: courseUserMock.activities_details.map(activityDetail => {
        return ({
          ...activityDetail,
          release_date: Timestamp.fromDate(new Date())
        })
      })
    },
    //2-Semestre
    {
      course_initials: 'CCG001',
      course_name: "Contabilidade",
      status: "aprovado",
      final_score_average: getRandomInt(5, 10),
      presence: 0,
      absence: 0,
      note: "Aprovado por Nota e Frequência",
      utilization_of_study: getRandomInt(1, 5),
      period_semester: 2,
      activities_details: courseUserMock.activities_details.map(activityDetail => {
        return ({
          ...activityDetail,
          release_date: Timestamp.fromDate(new Date())
        })
      })
    }, {
      course_initials: 'IES100',
      course_name: "Engenharia de Software I",
      status: "aprovado",
      final_score_average: getRandomInt(5, 10),
      presence: 0,
      absence: 0,
      note: "Aprovado por Nota e Frequência",
      utilization_of_study: getRandomInt(1, 5),
      period_semester: 2,
      activities_details: courseUserMock.activities_details.map(activityDetail => {
        return ({
          ...activityDetail,
          release_date: Timestamp.fromDate(new Date())
        })
      })
    }, {
      course_initials: 'ILP010',
      course_name: "Linguagem de Programação",
      status: "aprovado",
      final_score_average: getRandomInt(5, 10),
      presence: getRandomInt(20, 40),
      absence: getRandomInt(1, 20),
      utilization_of_study: getRandomInt(1, 5),
      period_semester: 2,
      activities_details: courseUserMock.activities_details.map(activityDetail => {
        return ({
          ...activityDetail,
          score: getRandomInt(1, 10),
          release_date: Timestamp.fromDate(new Date())
        })
      })
    }, {
      course_initials: 'ISI002',
      course_name: "Sistemas de Informação",
      status: "aprovado",
      final_score_average: getRandomInt(5, 10),
      presence: getRandomInt(20, 40),
      absence: getRandomInt(1, 20),
      utilization_of_study: getRandomInt(1, 5),
      period_semester: 2,
      activities_details: courseUserMock.activities_details.map(activityDetail => {
        return ({
          ...activityDetail,
          score: getRandomInt(1, 10),
          release_date: Timestamp.fromDate(new Date())
        })
      })
    }, {
      course_initials: 'LPO001',
      course_name: "Comunicação e Expressão",
      status: "aprovado",
      final_score_average: getRandomInt(5, 10),
      presence: getRandomInt(20, 40),
      absence: getRandomInt(1, 20),
      utilization_of_study: getRandomInt(1, 5),
      period_semester: 2,
      activities_details: courseUserMock.activities_details.map(activityDetail => {
        return ({
          ...activityDetail,
          score: getRandomInt(1, 10),
          release_date: Timestamp.fromDate(new Date())
        })
      })
    }, {
      course_initials: 'MCA002',
      course_name: "Cálculo",
      status: "aprovado",
      final_score_average: getRandomInt(5, 10),
      presence: getRandomInt(20, 40),
      absence: getRandomInt(1, 20),
      utilization_of_study: getRandomInt(1, 5),
      period_semester: 2,
      activities_details: courseUserMock.activities_details.map(activityDetail => {
        return ({
          ...activityDetail,
          score: getRandomInt(1, 10),
          release_date: Timestamp.fromDate(new Date())
        })
      })
    },
    //3 - Semestre
    {
      course_initials: 'CEF100',
      course_name: "Economia e Finanças",
      status: "aprovado",
      final_score_average: getRandomInt(5, 10),
      presence: getRandomInt(20, 40),
      absence: getRandomInt(1, 20),
      utilization_of_study: getRandomInt(1, 5),
      period_semester: 3,
      activities_details: courseUserMock.activities_details.map(activityDetail => {
        return ({
          ...activityDetail,
          score: getRandomInt(1, 10),
          release_date: Timestamp.fromDate(new Date())
        })
      })
    }, {
      course_initials: 'IBD002',
      course_name: "Banco de Dados",
      status: "aprovado",
      final_score_average: getRandomInt(5, 10),
      presence: getRandomInt(20, 40),
      absence: getRandomInt(1, 20),
      utilization_of_study: getRandomInt(1, 5),
      period_semester: 3,
      period: 20211,
      activities_details: courseUserMock.activities_details.map(activityDetail => {
        return ({
          ...activityDetail,
          score: getRandomInt(1, 10),
          release_date: Timestamp.fromDate(new Date())
        })
      })
    }, {
      course_initials: 'IES200',
      course_name: "Engenharia de Software II",
      status: "aprovado",
      final_score_average: getRandomInt(5, 10),
      presence: getRandomInt(20, 40),
      absence: getRandomInt(1, 20),
      utilization_of_study: getRandomInt(1, 5),
      period_semester: 3,
      period: 20212,
      activities_details: courseUserMock.activities_details.map(activityDetail => {
        return ({
          ...activityDetail,
          score: getRandomInt(1, 10),
          release_date: Timestamp.fromDate(new Date())
        })
      })
    }, {
      course_initials: 'ILP007',
      course_name: "Programação Orientada a Objetos",
      status: "aprovado",
      final_score_average: getRandomInt(5, 10),
      presence: getRandomInt(20, 40),
      absence: getRandomInt(1, 20),
      utilization_of_study: getRandomInt(1, 5),
      period_semester: 3,
      period: 20212,
      activities_details: courseUserMock.activities_details.map(activityDetail => {
        return ({
          ...activityDetail,
          score: getRandomInt(1, 10),
          release_date: Timestamp.fromDate(new Date())
        })
      })
    }, {
      course_initials: 'ITI004',
      course_name: "Gestão e Governança de Tecnologia da Informação",
      status: "aprovado",
      final_score_average: getRandomInt(5, 10),
      presence: getRandomInt(20, 40),
      absence: getRandomInt(1, 20),
      utilization_of_study: getRandomInt(1, 5),
      period_semester: 3,
      period: 20212,
      activities_details: courseUserMock.activities_details.map(activityDetail => {
        return ({
          ...activityDetail,
          score: getRandomInt(1, 10),
          release_date: Timestamp.fromDate(new Date())
        })
      })
    }, {
      course_initials: 'LIN300',
      course_name: "Inglês III",
      status: "dispensado",
      final_score_average: 0,
      presence: 0,
      absence: 0,
      note: "Dispensa por Aproveitamento de Estudo",
      utilization_of_study: getRandomInt(1, 5),
      period_semester: 3,
      activities_details: courseUserMock.activities_details.map(activityDetail => {
        return ({
          ...activityDetail,
          release_date: Timestamp.fromDate(new Date())
        })
      })
    }, {
      course_initials: 'MET100',
      course_name: "Estatística Aplicada",
      status: "aprovado",
      final_score_average: getRandomInt(5, 10),
      presence: getRandomInt(20, 40),
      absence: getRandomInt(1, 20),
      utilization_of_study: getRandomInt(1, 5),
      period_semester: 3,
      period: 20212,
      activities_details: courseUserMock.activities_details.map(activityDetail => {
        return ({
          ...activityDetail,
          score: getRandomInt(1, 10),
          release_date: Timestamp.fromDate(new Date())
        })
      })
    },
    // 4 - Semestre
    {
      course_initials: 'AGO005',
      course_name: "Gestão de Projetos",
      status: "aprovado",
      final_score_average: getRandomInt(5, 10),
      presence: getRandomInt(20, 40),
      absence: getRandomInt(1, 20),
      utilization_of_study: getRandomInt(1, 5),
      period_semester: 4,
      period: 20212,
      activities_details: courseUserMock.activities_details.map(activityDetail => {
        return ({
          ...activityDetail,
          score: getRandomInt(1, 10),
          release_date: Timestamp.fromDate(new Date())
        })
      })
    }, {
      course_initials: 'HST002',
      course_name: "Sociedade e Tecnologia",
      status: "aprovado",
      final_score_average: 8,
      presence: 0,
      absence: 0,
      note: "Aprovado por Nota e Frequência",
      utilization_of_study: getRandomInt(1, 5),
      period_semester: 4,
      activities_details: courseUserMock.activities_details.map(activityDetail => {
        return ({
          ...activityDetail,
          release_date: Timestamp.fromDate(new Date())
        })
      })
    }, {
      course_initials: 'IED001',
      course_name: "Estruturas de Dados",
      status: "aprovado",
      final_score_average: getRandomInt(5, 10),
      presence: getRandomInt(20, 40),
      absence: getRandomInt(1, 20),
      utilization_of_study: getRandomInt(1, 5),
      period_semester: 4,
      period: 20211,
      activities_details: courseUserMock.activities_details.map(activityDetail => {
        return ({
          ...activityDetail,
          score: getRandomInt(1, 10),
          release_date: Timestamp.fromDate(new Date())
        })
      })
    }, {
      course_initials: 'IHC001',
      course_name: "Interação Humano Computador",
      status: "aprovado",
      final_score_average: getRandomInt(5, 10),
      presence: getRandomInt(20, 40),
      absence: getRandomInt(1, 20),
      utilization_of_study: getRandomInt(1, 5),
      period_semester: 4,
      period: 20212,
      activities_details: courseUserMock.activities_details.map(activityDetail => {
        return ({
          ...activityDetail,
          score: getRandomInt(1, 10),
          release_date: Timestamp.fromDate(new Date())
        })
      })
    }, {
      course_initials: 'ILP125',
      course_name: "Programação WEB",
      status: "aprovado",
      final_score_average: 10,
      presence: 0,
      absence: 0,
      note: "Aprovado por Nota e Frequência",
      utilization_of_study: getRandomInt(1, 5),
      period_semester: 4,
      activities_details: courseUserMock.activities_details.map(activityDetail => {
        return ({
          ...activityDetail,
          release_date: Timestamp.fromDate(new Date())
        })
      })
    }, {
      course_initials: 'ISO100',
      course_name: "Sistemas Operacionais I",
      status: "aprovado",
      final_score_average: 7,
      presence: 0,
      absence: 0,
      note: "Aprovado por Nota e Frequência",
      utilization_of_study: getRandomInt(1, 5),
      period_semester: 4,
      activities_details: courseUserMock.activities_details.map(activityDetail => {
        return ({
          ...activityDetail,
          release_date: Timestamp.fromDate(new Date())
        })
      })
    }, {
      course_initials: 'LIN400',
      course_name: "Inglês IV",
      status: "aprovado",
      final_score_average: 10,
      presence: 0,
      absence: 0,
      note: "Aprovado por Nota e Frequência",
      utilization_of_study: getRandomInt(1, 5),
      period_semester: 4,
      activities_details: courseUserMock.activities_details.map(activityDetail => {
        return ({
          ...activityDetail,
          release_date: Timestamp.fromDate(new Date())
        })
      })
    }, {
      course_initials: 'TTG001',
      course_name: "Metodologia da Pesquisa Científico - Tecnológica",
      status: "aprovado",
      final_score_average: 7,
      presence: 0,
      absence: 0,
      note: "Aprovado por Nota e Frequência",
      utilization_of_study: getRandomInt(1, 5),
      period_semester: 4,
      activities_details: courseUserMock.activities_details.map(activityDetail => {
        return ({
          ...activityDetail,
          release_date: Timestamp.fromDate(new Date())
        })
      })
    },
    //5 - Semestre
    {
      course_initials: 'IBD100',
      course_name: "Laboratório de Banco de Dados",
      status: "aprovado",
      final_score_average: 9,
      presence: 0,
      absence: 0,
      note: "Aprovado por Nota e Frequência",
      utilization_of_study: getRandomInt(1, 5),
      period_semester: 5,
      activities_details: courseUserMock.activities_details.map(activityDetail => {
        return ({
          ...activityDetail,
          release_date: Timestamp.fromDate(new Date())
        })
      })
    }, {
      course_initials: 'IES300',
      course_name: "Engenharia de Software III",
      status: "cursando",
      final_score_average: 0,
      presence: 0,
      absence: 0,
      note: "Em curso",
      utilization_of_study: getRandomInt(1, 5),
      period_semester: 5,
      activities_details: courseUserMock.activities_details.map(activityDetail => {
        return ({
          ...activityDetail,
          release_date: Timestamp.fromDate(new Date())
        })
      })
    }, {
      course_initials: 'ILP516',
      course_name: "Programação para Dispositivos Móveis",
      status: "aprovado",
      final_score_average: getRandomInt(5, 10),
      presence: getRandomInt(20, 40),
      absence: getRandomInt(1, 20),
      utilization_of_study: getRandomInt(1, 5),
      period_semester: 5,
      activities_details: courseUserMock.activities_details.map(activityDetail => {
        return ({
          ...activityDetail,
          score: getRandomInt(1, 10),
          release_date: Timestamp.fromDate(new Date())
        })
      })
    }, {
      course_initials: 'ISG003',
      course_name: "Segurança da Informação",
      status: "nao_cursada",
      final_score_average: 0,
      presence: 0,
      absence: 0,
      note: "Não cursada",
      utilization_of_study: getRandomInt(1, 5),
      period_semester: 5,
      activities_details: courseUserMock.activities_details.map(activityDetail => {
        return ({
          ...activityDetail,
          release_date: Timestamp.fromDate(new Date())
        })
      })
    }, {
      course_initials: 'ISO200',
      course_name: "Sistemas Operacionais II",
      status: "aprovado",
      final_score_average: getRandomInt(5, 10),
      presence: getRandomInt(20, 40),
      absence: getRandomInt(1, 20),
      utilization_of_study: getRandomInt(1, 5),
      period_semester: 5,
      activities_details: courseUserMock.activities_details.map(activityDetail => {
        return ({
          ...activityDetail,
          score: getRandomInt(1, 10),
          release_date: Timestamp.fromDate(new Date())
        })
      })
    }, {
      course_initials: 'LIN500',
      course_name: "Inglês V",
      status: "nao_cursada",
      final_score_average: 0,
      presence: 0,
      absence: 0,
      note: "Não cursada",
      utilization_of_study: getRandomInt(1, 5),
      period_semester: 5,
      activities_details: courseUserMock.activities_details.map(activityDetail => {
        return ({
          ...activityDetail,
          release_date: Timestamp.fromDate(new Date())
        })
      })
    }, {
      course_initials: 'MPL001',
      course_name: "Programação Linear e Aplicações",
      status: "nao_cursada",
      final_score_average: 0,
      presence: 0,
      absence: 0,
      note: "Não cursada",
      utilization_of_study: getRandomInt(1, 5),
      period_semester: 5,
      activities_details: courseUserMock.activities_details.map(activityDetail => {
        return ({
          ...activityDetail,
          release_date: Timestamp.fromDate(new Date())
        })
      })
    }, {
      course_initials: 'TTG003',
      course_name: "Trabalho de Graduação I",
      status: "aprovado",
      final_score_average: getRandomInt(5, 10),
      presence: getRandomInt(20, 40),
      absence: getRandomInt(1, 20),
      utilization_of_study: getRandomInt(1, 5),
      period_semester: 5,
      activities_details: courseUserMock.activities_details.map(activityDetail => {
        return ({
          ...activityDetail,
          score: getRandomInt(1, 10),
          release_date: Timestamp.fromDate(new Date())
        })
      })
    },
    //6 - Semestre
    {
      course_initials: 'AGR101',
      course_name: "Gestão de Equipes",
      status: "nao_cursada",
      final_score_average: 0,
      presence: 0,
      absence: 0,
      note: "Não cursada",
      utilization_of_study: getRandomInt(1, 5),
      period_semester: 6,
      activities_details: courseUserMock.activities_details.map(activityDetail => {
        return ({
          ...activityDetail,
          release_date: Timestamp.fromDate(new Date())
        })
      })
    }, {
      course_initials: 'CEE002',
      course_name: "Empreendedorismo",
      status: "nao_cursada",
      final_score_average: 0,
      presence: 0,
      absence: 0,
      note: "Não cursada",
      utilization_of_study: getRandomInt(1, 5),
      period_semester: 6,
      activities_details: courseUserMock.activities_details.map(activityDetail => {
        return ({
          ...activityDetail,
          release_date: Timestamp.fromDate(new Date())
        })
      })
    }, {
      course_initials: 'EDS003',
      course_name: "Estágio Supervisionado em Análise e Desenvolvimento de Sistemas",
      status: "aprovado",
      final_score_average: getRandomInt(5, 10),
      presence: getRandomInt(20, 40),
      absence: getRandomInt(1, 20),
      utilization_of_study: getRandomInt(1, 5),
      period_semester: 6,
      activities_details: courseUserMock.activities_details.map(activityDetail => {
        return ({
          ...activityDetail,
          score: getRandomInt(1, 10),
          release_date: Timestamp.fromDate(new Date())
        })
      })
    }, {
      course_initials: 'HSO003',
      course_name: "Ética e Responsabilidade Profissional",
      status: "nao_cursada",
      final_score_average: 0,
      presence: 0,
      absence: 0,
      note: "Não cursada",
      utilization_of_study: getRandomInt(1, 5),
      period_semester: 6,
      activities_details: courseUserMock.activities_details.map(activityDetail => {
        return ({
          ...activityDetail,
          release_date: Timestamp.fromDate(new Date())
        })
      })
    }, {
      course_initials: 'IES301',
      course_name: "Laboratório de Engenharia de Software",
      status: "nao_cursada",
      final_score_average: 0,
      presence: 0,
      absence: 0,
      note: "Não cursada",
      utilization_of_study: getRandomInt(1, 5),
      period_semester: 6,
      activities_details: courseUserMock.activities_details.map(activityDetail => {
        return ({
          ...activityDetail,
          release_date: Timestamp.fromDate(new Date())
        })
      })
    }, {
      course_initials: 'IRC008',
      course_name: "Redes de Computadores",
      status: "aprovado",
      final_score_average: getRandomInt(5, 10),
      presence: getRandomInt(20, 40),
      absence: getRandomInt(1, 20),
      utilization_of_study: getRandomInt(1, 5),
      period_semester: 6,
      activities_details: courseUserMock.activities_details.map(activityDetail => {
        return ({
          ...activityDetail,
          score: getRandomInt(1, 10),
          release_date: Timestamp.fromDate(new Date())
        })
      })
    }, {
      course_initials: 'ISA002',
      course_name: "Auditoria de Sistemas",
      status: "cursando",
      final_score_average: 0,
      presence: 0,
      absence: 0,
      note: "Em curso",
      utilization_of_study: getRandomInt(1, 5),
      period_semester: 6,
      activities_details: courseUserMock.activities_details.map(activityDetail => {
        return ({
          ...activityDetail,
          release_date: Timestamp.fromDate(new Date())
        })
      })
    }, {
      course_initials: 'ITE002',
      course_name: "Tópicos Especiais em Informática",
      status: "nao_cursada",
      final_score_average: 0,
      presence: 0,
      absence: 0,
      note: "Não cursada",
      utilization_of_study: getRandomInt(1, 5),
      period_semester: 6,
      activities_details: courseUserMock.activities_details.map(activityDetail => {
        return ({
          ...activityDetail,
          release_date: Timestamp.fromDate(new Date())
        })
      })
    }, {
      course_initials: 'LIN600',
      course_name: "Inglês VI",
      status: "nao_cursada",
      final_score_average: 0,
      presence: 0,
      absence: 0,
      note: "Não cursada",
      utilization_of_study: getRandomInt(1, 5),
      period_semester: 6,
      activities_details: courseUserMock.activities_details.map(activityDetail => {
        return ({
          ...activityDetail,
          release_date: Timestamp.fromDate(new Date())
        })
      })
    }, {
      course_initials: 'TTG103',
      course_name: "Trabalho de Graduação II",
      status: "cursando",
      final_score_average: 0,
      presence: 0,
      absence: 0,
      note: "Em curso",
      utilization_of_study: getRandomInt(1, 5),
      period_semester: 6,
      activities_details: courseUserMock.activities_details.map(activityDetail => {
        return ({
          ...activityDetail,
          release_date: Timestamp.fromDate(new Date())
        })
      })
    },
  ]

  listCourses.forEach(item => {
    const course = {
      ...courseUserMock,
      ...item,
      user_id: userId,
    }
    courses.push(course);
  })

  return courses;
}

const postCourseUser = async (userId, courseUser) => {
  try {
    // const docRef = await addDoc(courseUserCollectionRef, data);
    if (courseUser.length > 0)
      return toast.warning('Você já importou os templates para este aluno');

    const sanitizedCourseUsers = sanitizeCourseUserMock(userId);
    const allPromises = []
    sanitizedCourseUsers.forEach(item => allPromises.push(addDoc(courseUserCollectionRef, item)));

    Promise.all(allPromises).then((values => {
      console.log(values);
    }));

    toast.success('Os templates de cursos foram importados com sucesso para o aluno.')
  } catch (err) {
    toast.error(err?.message || 'Ocorreu um erro. Tente novamente mais tarde')
  }
}

export {
  getCourseUserByUserId,
  postCourseUser
}