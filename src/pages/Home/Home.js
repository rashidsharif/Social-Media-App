import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightbar/Rightbar";
import "./home.css"

export default function Home() {
  return (
    <>
      <Topbar className='topbar' />
      <div className="homeContainer">
        <Sidebar className='sidebar' />
        <Feed className='feed'/>
        <Rightbar className='rightbar'/>
      </div>
    </>
  );
}