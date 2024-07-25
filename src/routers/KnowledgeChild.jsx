import Bioscience from "../knowledge/knowledgeChild/child-1/Bioscience";
import Chemistry from "../knowledge/knowledgeChild/child-1/Chemistry";
import CISComponent from "../knowledge/knowledgeChild/child-1/ComputerSciences";
import EarthSciencesComponent from "../knowledge/knowledgeChild/child-1/EarthSciences";
import EnvironmentAgricultureComponent from "../knowledge/knowledgeChild/child-1/EnvironmentAgriculture";
import EnvironmentalSciencesComponent from "../knowledge/knowledgeChild/child-1/EnvironmentalSciences";
import EnvironmentSustainabilityComponent from "../knowledge/knowledgeChild/child-1/EnvironmentSustainability";
import FoodScienceComponent from "../knowledge/knowledgeChild/child-1/FoodScience&Technology";
import InformationScienceComponent from "../knowledge/knowledgeChild/child-1/InformationScience";
import MathematicsComponent from "../knowledge/knowledgeChild/child-1/Mathematics";
import PhysicalSciencesComponent from "../knowledge/knowledgeChild/child-1/PhysicalSciences";
import StatisticsComponent from "../knowledge/knowledgeChild/child-1/Statistics";
import AreaStudies from "../knowledge/knowledgeChild/child-2/AreaStudies";
import Arts from "../knowledge/knowledgeChild/child-2/Arts";
import BehavioralSciences from "../knowledge/knowledgeChild/child-2/BehaviouralSciences";
import BuiltEnvironment from "../knowledge/knowledgeChild/child-2/BuiltEnvironment";
import BusinessManagement from "../knowledge/knowledgeChild/child-2/BusinessManagement";
import CommunicationStudies from "../knowledge/knowledgeChild/child-2/CommunicationStudies";
import Economics from "../knowledge/knowledgeChild/child-2/Economics";
import Education from "../knowledge/knowledgeChild/child-2/Education";
import Finance from "../knowledge/knowledgeChild/child-2/Finance";
import Geography from "../knowledge/knowledgeChild/child-2/Geography";
import GlobalDevelopment from "../knowledge/knowledgeChild/child-2/GlobalDevelopment";
import HistoryComponent from "../knowledge/knowledgeChild/child-2/History";
import HumanitiesSocialSciences from "../knowledge/knowledgeChild/child-2/HumanitiesSocialSciences";
import InternationalRelations from "../knowledge/knowledgeChild/child-2/InternationalRelations";
import LanguageStudies from "../knowledge/knowledgeChild/child-2/Language";
import LawStudies from "../knowledge/knowledgeChild/child-2/Law";
import LiteratureStudies from "../knowledge/knowledgeChild/child-2/Literature";
import MuseumAndHeritageStudies from "../knowledge/knowledgeChild/child-2/MuseumHeritage";
import Philosophy from "../knowledge/knowledgeChild/child-2/Philosophy";
import PoliticsComponent from "../knowledge/knowledgeChild/child-2/Politics";
import PsychologyComponent from "../knowledge/knowledgeChild/child-2/Psychology";
import ReligionComponent from "../knowledge/knowledgeChild/child-2/Religion";
import SociologyComponent from "../knowledge/knowledgeChild/child-2/Sociology";
import TourismComponent from "../knowledge/knowledgeChild/child-2/TourismHospitalityEvents";
import UrbanStudiesComponent from "../knowledge/knowledgeChild/child-2/UrbanStudies";
import AddictionTreatmentComponent from "../knowledge/knowledgeChild/child-3/AddictionTreatment";
import AlliedHealthComponent from "../knowledge/knowledgeChild/child-3/AlliedHealth";
import AnesthesiologyComponent from "../knowledge/knowledgeChild/child-3/Anesthesiology";
import BehavioralHealthComponent from "../knowledge/knowledgeChild/child-3/BehavioralHealthMedicine";
import CardiologyComponent from "../knowledge/knowledgeChild/child-3/Cardiology";
import ClinicalMedicineComponent from "../knowledge/knowledgeChild/child-3/ClinicalMedicine";
import DentistryComponent from "../knowledge/knowledgeChild/child-3/Dentistry";
import DermatologyComponent from "../knowledge/knowledgeChild/child-3/Dermatology";
import EndocrinologyComponent from "../knowledge/knowledgeChild/child-3/Endocrinology";
import ExpertCollectionComponent from "../knowledge/knowledgeChild/child-3/ExpertCollection";
import HematologyComponent from "../knowledge/knowledgeChild/child-3/Hematology";
import HospitalsHealthSystems from "../knowledge/knowledgeChild/child-3/HospitalsHealthSystems";
import Immunology from "../knowledge/knowledgeChild/child-3/Immunology";
import InfectiousDiseases from "../knowledge/knowledgeChild/child-3/InfectiousDiseases";
import Nephrology from "../knowledge/knowledgeChild/child-3/Nephrology";
import Neurology from "../knowledge/knowledgeChild/child-3/Neurology";
import Nursing from "../knowledge/knowledgeChild/child-3/Nursing";
import Oncology from "../knowledge/knowledgeChild/child-3/Oncology";
import Pediatrics from "../knowledge/knowledgeChild/child-3/Pediatrics";
import PharmaceuticalSciences from "../knowledge/knowledgeChild/child-3/PharmaceuticalSciences";
import Psychiatry from "../knowledge/knowledgeChild/child-3/Psychiatry";
import PublicHealth from "../knowledge/knowledgeChild/child-3/PublicHealth";
import RadiologyComponent from "../knowledge/knowledgeChild/child-3/Radiology";
import SubstanceUseMisuse from "../knowledge/knowledgeChild/child-3/SubstanceMisuse";
import SurgeryTopics from "../knowledge/knowledgeChild/child-3/Surgery";
import UrologyTopics from "../knowledge/knowledgeChild/child-3/Urology";
import VeterinaryMedicine from "../knowledge/knowledgeChild/child-3/VeterinaryMedicine";
import WomensHealth from "../knowledge/knowledgeChild/child-3/WomenHealth";

export const knowledgeChild = [
   {
       path:'/knowledge/bioscience',
       element:<Bioscience/>
   },
   {
       path:'/knowledge/chemistry',
       element:<Chemistry/>
   },
   {
       path:'/knowledge/Computer-Information-Sciences',
       element:<CISComponent/>
   },
   {
       path:'/knowledge/earth-sciences',
       element:<EarthSciencesComponent/>
   },
   {
       path:'/knowledge/Environment-Agriculture',
       element:<EnvironmentAgricultureComponent/>
   },
   {
       path:'/knowledge/Environment-Sustainability',
       element:<EnvironmentSustainabilityComponent/>
   },
   {
       path:'/knowledge/Environmental-Sciences',
       element:<EnvironmentalSciencesComponent/>
   },
   {
       path:'/knowledge/Food-Science-Technology',
       element:<FoodScienceComponent/>
   },
   {
       path:'/knowledge/Information-Science',
       element:<InformationScienceComponent/>
   },
   {
       path:'/knowledge/Mathematics',
       element:<MathematicsComponent/>
   },
   {
       path:'/knowledge/Physical-Sciences',
       element:<PhysicalSciencesComponent/>
   },
   {
       path:'/knowledge/Statistics',
       element:<StatisticsComponent/>
   },

//    medicine and healthcare part start

   {
       path:'/knowledge/Addiction-Treatment',
       element:<AddictionTreatmentComponent/>
   },
   {
       path:'/knowledge/Allied-Health',
       element:<AlliedHealthComponent/>
   },
   {
       path:'/knowledge/Anesthesiology',
       element:<AnesthesiologyComponent/>
   },
   {
       path:'/knowledge/Behavioral-Health-Medicine',
       element:<BehavioralHealthComponent/>
   },
   {
       path:'/knowledge/Cardiology',
       element:<CardiologyComponent/>
   },
   {
       path:'/knowledge/Clinical-Medicine',
       element:<ClinicalMedicineComponent/>
   },
   {
       path:'/knowledge/Dentistry',
       element:<DentistryComponent/>
   },
   {
       path:'/knowledge/Dermatology',
       element:<DermatologyComponent/>
   },
   {
       path:'/knowledge/Endocrinology',
       element:<EndocrinologyComponent/>
   },
   {
       path:'/knowledge/Expert-Collection',
       element:<ExpertCollectionComponent/>
   },
   {
       path:'/knowledge/Hematology',
       element:<HematologyComponent/>
   },
   {
       path:'/knowledge/Hospitals-Health-Systems',
       element:<HospitalsHealthSystems/>
   },
   {
       path:'/knowledge/Immunology',
       element:<Immunology/>
   },
   {
       path:'/knowledge/Infectious-Diseases',
       element:<InfectiousDiseases/>
   },
   {
       path:'/knowledge/Nephrology',
       element:<Nephrology/>
   },
   {
       path:'/knowledge/Neurology',
       element:<Neurology/>
   },
   {
       path:'/knowledge/Nursing',
       element:<Nursing/>
   },
   {
       path:'/knowledge/Oncology',
       element:<Oncology/>
   },
   {
       path:'/knowledge/Pediatrics',
       element:<Pediatrics/>
   },
   {
       path:'/knowledge/Pharmaceutical-Sciences',
       element:<PharmaceuticalSciences/>
   },
   {
       path:'/knowledge/Psychiatry',
       element:<Psychiatry/>
   },
   {
       path:'/knowledge/Public-Health',
       element:<PublicHealth/>
   },
   {
       path:'/knowledge/Radiology',
       element:<RadiologyComponent/>
   },
   {
       path:'/knowledge/Substance-Use-Misuse',
       element:<SubstanceUseMisuse/>
   },
   {
       path:'/knowledge/Surgery',
       element:<SurgeryTopics/>
   },
   {
       path:'/knowledge/Urology',
       element:<UrologyTopics/>
   },
   {
       path:'/knowledge/Veterinary-Medicine',
       element:<VeterinaryMedicine/>
   },
   {
       path:'/knowledge/Women-Health',
       element:<WomensHealth/>
   },

//    humanities and social sciences part start

   {
       path:'/knowledge/Area-Studies',
       element:<AreaStudies/>
   },
   {
       path:'/knowledge/Arts',
       element:<Arts/>
   },
   {
       path:'/knowledge/Behavioural-Sciences',
       element:<BehavioralSciences/>
   },
   {
       path:'/knowledge/Built-Environment',
       element:<BuiltEnvironment/>
   },
   {
       path:'/knowledge/Business-Management',
       element:<BusinessManagement/>
   },
   {
       path:'/knowledge/Communication-Studies',
       element:<CommunicationStudies/>
   },
   {
       path:'/knowledge/Economics',
       element:<Economics/>
   },
   {
       path:'/knowledge/Education',
       element:<Education/>
   },
   {
       path:'/knowledge/Finance',
       element:<Finance/>
   },
   {
       path:'/knowledge/Geography',
       element:<Geography/>
   },
   {
       path:'/knowledge/Global-Development',
       element:<GlobalDevelopment/>
   },
   {
       path:'/knowledge/History',
       element:<HistoryComponent/>
   },
   {
       path:'/knowledge/Humanities-Social-Sciences',
       element:<HumanitiesSocialSciences/>
   },
   {
       path:'/knowledge/International-Relations',
       element:<InternationalRelations/>
   },
   {
       path:'/knowledge/Language',
       element:<LanguageStudies/>
   },
   {
       path:'/knowledge/Law',
       element:<LawStudies/>
   },
   {
       path:'/knowledge/Literature',
       element:<LiteratureStudies/>
   },
   {
       path:'/knowledge/Museum-Heritage',
       element:<MuseumAndHeritageStudies/>
   },
   {
       path:'/knowledge/Philosophy',
       element:<Philosophy/>
   },
   {
       path:'/knowledge/Politics',
       element:<PoliticsComponent/>
   },
   {
       path:'/knowledge/Psychology',
       element:<PsychologyComponent/>
   },
   {
       path:'/knowledge/Religion',
       element:<ReligionComponent/>
   },
//    {
//        path:'/knowledge/Routledge-Encyclopedia-Modernism',
//        element:<ReligionComponent/>
//    },
   {
       path:'/knowledge/Sociology',
       element:<SociologyComponent/>
   },
   {
       path:'/knowledge/Tourism-Hospitality-Events',
       element:<TourismComponent/>
   },
   {
       path:'/knowledge/Urban-Studies',
       element:<UrbanStudiesComponent/>
   },
]

