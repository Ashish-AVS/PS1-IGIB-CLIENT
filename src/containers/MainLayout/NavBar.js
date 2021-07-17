import { NavLink } from "react-router-dom";
import { Menu } from "antd";

export default function NavBar() {
  return (
    <div>
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["1"]}>
        <Menu.Item key={1}>
          <NavLink to="/">Home</NavLink>
        </Menu.Item>

        <>
          <Menu.Item key={2}>
            <NavLink to="/form">Form</NavLink>
          </Menu.Item>
        </>

        <Menu.Item key={3}>
          <NavLink to="/genomics">Genomics</NavLink>
        </Menu.Item>
      </Menu>
    </div>
  );
}

// <div>
// <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["1"]}>
//   <Menu.Item key={1}>
//     <NavLink to="/">Home</NavLink>
//   </Menu.Item>

//   {AuthCtx.isLoggedIn && (
//     <>
//       <Menu.Item key={2}>
//         <NavLink to="/dashboard">Dashboard</NavLink>
//       </Menu.Item>

//       <Menu.Item key={3}>
//         <NavLink to="/form">Form</NavLink>
//       </Menu.Item>
//     </>
//   )}

//   {!AuthCtx.isLoggedIn && (
//     <>
//       <Menu.Item key={4}>
//         <NavLink to="/login">Login</NavLink>
//       </Menu.Item>
//       <Menu.Item key={5}>
//         <NavLink to="/register">Register</NavLink>
//       </Menu.Item>
//     </>
//   )}

//   {AuthCtx.isLoggedIn && (
//     <Menu.Item key={6}>
//       <NavLink to="/" onClick={() => AuthCtx.logout()}>
//         Logout
//       </NavLink>
//     </Menu.Item>
//   )}
//   {AuthCtx.isLoggedIn && (
//     <Menu.Item key={7}>
//       <NavLink to="/genomics">
//         Genomics
//       </NavLink>
//     </Menu.Item>
//   )}
// </Menu>
