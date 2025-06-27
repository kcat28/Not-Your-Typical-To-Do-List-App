import scattered_icons from '../assets/scattered_icons.png' 
import Contentcard from '../components/Contentcard'
import Sidebar from '../components/Sidebar.jsx';
import MainContent from '../components/Maincontent.jsx';
function Dashboard() {

    return(
        <div className="h-screen w-screen bg-[#FFEE9F] flex flex-row justify-center px-10 pt-16 pb-16 gap-7"
             style={{ backgroundImage: `url(${scattered_icons})`}}>
                {/* Sidebar */}
                 <Sidebar/>
                 
                {/* Main Content */}
                <MainContent title="Dashboard" isSub={false}>
                    <Contentcard />
                    <Contentcard />
                    <Contentcard />
                    <Contentcard />
                </MainContent>

        </div>
    )
}

export default Dashboard