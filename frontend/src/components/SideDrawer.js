import './styleComponents/SideDrawer.css';

const SideDrawer = ({ show }) => {
  const SideDrawerClass = ["side-drawer"];
  if (show) {
    SideDrawerClass.push("show");
  }

  return (
    <div className={SideDrawerClass.join(" ")}></div>
  )
}

export default SideDrawer;
