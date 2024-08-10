import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import Home from "../home/Home";
import About from "../about/About";
import Serve from "../who-we-serve/Serve";
import OurBrands from "../about/about-childs/OurBrands";
import ExecutiveTeam from "../about/about-childs/ExecutiveTeam";
import Knowledge from "../knowledge/Knowledge";
import Service from "../service/Service";
import Careers from "../careers/Careers";
import NotFound from "../home/not-found-page/NotFound";
import Development from "../home/under-development/Development";
import Contact from "../contact-us/Contact";
import News from "../news-and-events/News";
import AboutCareers from "../careers/AboutCareers";
import WeHire from "../careers/WeHire";
import Benefits from "../careers/Benefits";
import LearnAndDev from "../careers/LearnAndDev";
import Rewards from "../careers/Rewards";
import Diversity from "../careers/Diversity";
import DynamicContent from "../dynamic-content/DynamicContent";
import DyHome from "../dynamic-content/DyHome";
import UnderDynamic from "../dynamic-content/UnderDynamic";
import DyPress from "../dynamic-content/DyPress";
import Guidelines from "../dynamic-content/Guidelines";
import Login from "../loginAndRegister/Login";
import Register from "../loginAndRegister/Register";
import Dashboard from "../dashboard/Dashboard";
import PrivateRouter from "./PrivateRouter";
import PostBlog from "../dashboard/PostBlog";
import ManageBlog from "../dashboard/ManageBlog";
import EditBlog from "../dashboard/EditBlog";
import Profile from "../dashboard/Profile";
import Shopper from "../dashboard/Profile-components/Shopper";
import Author from "../dashboard/Profile-components/Author";
import Instructor from "../dashboard/Profile-components/Instructor";
import Shop from "../shop-subject/Shop";
import AdminPrivate from "./AdminPrivate";
import AllNews from "../news-and-events/AllNews";
import UserPrivate from "./UserPrivate";
import SubmitPro from "../submitProposal/SubmitPro";
import StartReading from "../dynamic-content/start-reading/StartReading";
import { knowledgeChild } from "./KnowledgeChild";
import PublishingGuidelines from "../dynamic-content/PublishGuid";
import Books from "../books/Books";
import BookDetails from "../books/BookDetails";
import Contact2 from "../contact-us/Contact2";



export const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout/>,
      children:[
        {
          path:'/',
          element:<Home/>
        },
        {
           path:'/books',
           element:<Books/>
        },
        {
           path:'/books/:slug',
           element:<BookDetails/>,
        },
        {
          path:'/login',
          element:<Login/>
        },
        {
          path:'/register',
          element:<Register/>
        },
        {
          path:'/start-reading',
          element:<StartReading/>
        },
        {
          path:'/under-development',
          element: <Development/>
        },
        {
          path:'/knowledge',
          element:<Knowledge/>
        },
        {
          path:'/submit-your-proposal',
          element:<SubmitPro/>
        },
        {
          path:'/service',
          element:<Service/>
        },
        {
          path:'/contact-us',
          element:<Contact/>
        },
        {
          path:'/pre-order-book',
          element:<Contact2/>
        },
        {
          path:'/shop-by-subject',
          element:<Shop/>
        },
        {
          path:'/news',
          element:<News/>
        },
        {
          path:'/news/all-news',
          element:<AllNews/>
        },
        {
          path:'/careers',
          element:<Careers/>,
          children:[
            {
              path:'/careers',
              element: <AboutCareers/>
            },
            {
              path:'/careers/hire',
              element:<WeHire/>
            },
            {
              path:'/careers/benefits',
              element:<Benefits/>
            },
            {
              path:'/careers/learn-development',
              element:<LearnAndDev/>
            },
            {
              path:'/careers/rewards',
              element:<Rewards/>
            },
            {
              path:'/careers/diversity',
              element:<Diversity/>
            },
          ]
        },
        {
          path:'/about',
          element:<About/>
        },
        {
          path:'/about/our-brands',
          element:<OurBrands/>
        },
        {
          path:'/about/executive-leadership-team',
          element:<ExecutiveTeam/>
        },
        {
          path:'/who-we-serve',
          element:<Serve/>
        },
        {
          path:'/dynamicContent/:title',
          element:<DynamicContent/>,
          children:[
            {
              path:'/dynamicContent/:title/journalist-access',
              element:<UnderDynamic/>
            },
            {
              path:'/dynamicContent/:title/home',
              element:<DyHome/>
            },
            {
              path:'/dynamicContent/:title/press-releases',
              element:<DyPress/>
            },
            {
              path:'/dynamicContent/:title/publishing-guidelines',
              element:<PublishingGuidelines/>
            },
          ]
        },
        ...knowledgeChild
      ]
    },
    {
      path:'*',
      element: <NotFound/>
    },
    {
      path:'/dashboard',
      element: <PrivateRouter><Dashboard/></PrivateRouter>,
      children:[
        {
          path:'/dashboard',
          element:<UserPrivate><Profile/></UserPrivate>,
          children:[
            {
              path:'/dashboard/',
              element: <Shopper/> 
            },
            {
              path:'/dashboard/author',
              element: <Author/> 
            },
            {
              path:'/dashboard/instructor',
              element: <Instructor/> 
            },
          ]
        },
        {
          path:'/dashboard/post-blog',
          element:<AdminPrivate><PostBlog/></AdminPrivate>
        },
        {
          path:'/dashboard/manage-blog',
          element:<AdminPrivate><ManageBlog/></AdminPrivate>
        },
        {
          path:'/dashboard/edit-blog/:id',
          element:<AdminPrivate><EditBlog/></AdminPrivate>,
          loader:({params})=> fetch(`https://hasib-vai-second-project.vercel.app/news/${params.id}`), 
        },
      ]
    },
  ]);