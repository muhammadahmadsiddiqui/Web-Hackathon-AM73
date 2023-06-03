import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import { Home, Login, Signup, ForgetPassword, ResetPassword, Event, AddEvent, EventLisiting } from "./pages/index";
import { useEffect } from "react";
import EventScheduled from "./pages/EventScheduled/EventScheduled";
function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/forgetPassword" element={<ForgetPassword />} />
      <Route path="/reset-password/:id/:token" element={<ResetPassword />} />
      <Route path="/addevent" element={<AddEvent />} />
      <Route path="/listing" element={<EventLisiting />} />
      <Route path="/eventSchdeuled" element={<EventScheduled />} />
      <Route path="/eventRegistered" element={<Event/>} />
    </Routes>
  );
};

export default App;